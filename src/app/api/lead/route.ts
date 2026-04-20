import { NextResponse } from "next/server";
import crypto from "node:crypto";
import { query } from "@/lib/db";
import { ensureLeadsTable, type LeadStatus } from "@/lib/leads/schema";
import { sendToCRM, type CRMPayload } from "@/lib/leads/crm";
import { sendToTrello } from "@/lib/leads/trello";
import { sendViaEmailJS } from "@/lib/leads/email";
import { resolveEmailRoute, isMontazPath } from "@/lib/leads/routing";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface IncomingBody {
  request_id?: string;
  name?: string;
  phone?: string;
  email?: string;
  description?: string;
  message?: string; // alias
  consent?: boolean;
  service_type?: string;
  page_url?: string;
  // UTM (flat) — first_* + last_*
  [key: string]: unknown;
}

const UTM_FIELDS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "landing_page",
  "visit_date",
] as const;

function clean(v: unknown): string {
  if (typeof v !== "string") return "";
  if (v === "(none)") return "";
  return v.trim();
}

function flatUTM(body: Record<string, unknown>): Record<string, string> {
  const out: Record<string, string> = {};
  for (const prefix of ["first", "last"] as const) {
    for (const f of UTM_FIELDS) {
      out[`${prefix}_${f}`] = clean(body[`${prefix}_${f}`]);
    }
  }
  return out;
}

function fingerprint(name: string, phone: string, email: string, description: string): string {
  const norm = `${name.toLowerCase()}|${phone.replace(/\D/g, "")}|${email.toLowerCase()}|${description.slice(0, 80).toLowerCase()}`;
  return crypto.createHash("sha256").update(norm).digest("hex");
}

export async function POST(req: Request) {
  try {
    return await handlePost(req);
  } catch (e) {
    console.error("[lead] unhandled error", e);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

async function handlePost(req: Request) {
  let body: IncomingBody;
  try {
    body = (await req.json()) as IncomingBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = clean(body.name);
  const phone = clean(body.phone);
  const email = clean(body.email);
  const description = clean(body.description ?? body.message);
  const page_url = clean(body.page_url);
  const utm = flatUTM(body);

  // Validation: phone is the minimum we can act on
  if (!phone && !email) {
    return NextResponse.json(
      { ok: false, error: "Missing contact info (phone or email required)" },
      { status: 400 }
    );
  }

  // Decide service_type. Body wins; fall back to path heuristic.
  // Normalize: if path is a montaz page, force service_type='montaz' so the
  // stored value matches the actual routing taken.
  let service_type = clean(body.service_type);
  const pathIsMontaz = isMontazPath(page_url);
  if (!service_type) service_type = pathIsMontaz ? "montaz" : "general";
  else if (pathIsMontaz && service_type !== "montaz") service_type = "montaz";

  const isMontaz = service_type === "montaz";

  const request_id = clean(body.request_id) || crypto.randomUUID();
  const dedupe = fingerprint(name, phone, email, description);

  await ensureLeadsTable();

  // Soft duplicate: same fingerprint within last 5 minutes — still accept,
  // but flag so ops can review.
  const recentDup = await query<{ id: number }>(
    `SELECT id FROM leads
     WHERE dedupe_fingerprint = $1
       AND created_at > NOW() - INTERVAL '5 minutes'
     LIMIT 1`,
    [dedupe]
  );
  const isSoftDup = recentDup.rowCount > 0;

  // Initial statuses
  const initial = {
    crm: (isMontaz ? "skipped" : "pending") as LeadStatus,
    trello: (isMontaz ? "skipped" : "pending") as LeadStatus,
    email: (isMontaz ? "pending" : "skipped") as LeadStatus,
  };

  // Atomic idempotency: INSERT ... ON CONFLICT DO NOTHING.
  // If a row with this request_id already exists, the insert is a no-op and
  // we read the prior state to return a deterministic replay response.
  const insertRes = await query<{ id: number }>(
    `INSERT INTO leads (
       request_id, service_type, page_url, name, phone, email, description,
       utm_json, raw_payload_json,
       crm_status, trello_status, email_status, dedupe_fingerprint
     ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8::jsonb,$9::jsonb,$10,$11,$12,$13)
     ON CONFLICT (request_id) DO NOTHING
     RETURNING id`,
    [
      request_id,
      service_type,
      page_url,
      name,
      phone,
      email,
      description,
      JSON.stringify(utm),
      JSON.stringify(body),
      initial.crm,
      initial.trello,
      initial.email,
      dedupe,
    ]
  );

  if (insertRes.rowCount === 0) {
    const existing = await query<{
      request_id: string;
      crm_status: LeadStatus;
      trello_status: LeadStatus;
      email_status: LeadStatus;
      trello_card_id: string | null;
    }>(
      `SELECT request_id, crm_status, trello_status, email_status, trello_card_id
       FROM leads WHERE request_id = $1 LIMIT 1`,
      [request_id]
    );
    const r = existing.rows[0];
    return NextResponse.json({
      ok: true,
      request_id: r?.request_id ?? request_id,
      idempotent_replay: true,
      crm_status: r?.crm_status ?? "unknown",
      trello_status: r?.trello_status ?? "unknown",
      email_status: r?.email_status ?? "unknown",
    });
  }

  // Downstream routing
  if (isMontaz) {
    const route = resolveEmailRoute(service_type, page_url);
    const params: Record<string, string> = {
      name,
      phone,
      email,
      message: description,
      page_url,
      service_type,
      request_id,
      ...utm,
    };
    const r = await sendViaEmailJS(route.templateId, params);
    await query(
      `UPDATE leads SET email_status = $2, email_attempt_count = $3, last_error = $4
       WHERE request_id = $1`,
      [request_id, r.ok ? "sent" : "failed", r.attempts, r.ok ? null : r.lastError]
    );
    if (!r.ok) {
      console.error(`[lead ${request_id}] email FAIL`, r);
    }
    return NextResponse.json({
      ok: r.ok,
      request_id,
      email_status: r.ok ? "sent" : "failed",
      soft_duplicate: isSoftDup,
    });
  }

  // Non-montaz: CRM + Trello in parallel
  const crmPayload: CRMPayload = {
    name,
    phone,
    email,
    description,
    request_id,
    service_type,
    page_url,
    ...utm,
  };

  const [crmRes, trelloRes] = await Promise.allSettled([
    sendToCRM(crmPayload),
    sendToTrello({
      name,
      phone,
      email,
      description,
      service_type,
      page_url,
      request_id,
    }),
  ]);

  const crm = crmRes.status === "fulfilled" ? crmRes.value : { ok: false, attempts: 0, lastStatus: 0, lastError: String(crmRes.reason) };
  const tre = trelloRes.status === "fulfilled" ? trelloRes.value : { ok: false, attempts: 0, cardId: null, lastError: String(trelloRes.reason) };

  const errors: string[] = [];
  if (!crm.ok) errors.push(`CRM: ${crm.lastError}`);
  if (!tre.ok) errors.push(`Trello: ${tre.lastError}`);

  await query(
    `UPDATE leads SET
       crm_status = $2, crm_attempt_count = $3,
       trello_status = $4, trello_attempt_count = $5,
       trello_card_id = $6,
       last_error = $7
     WHERE request_id = $1`,
    [
      request_id,
      crm.ok ? "sent" : "failed",
      crm.attempts,
      tre.ok ? "sent" : "failed",
      tre.attempts,
      tre.cardId,
      errors.length ? errors.join(" | ") : null,
    ]
  );

  if (!crm.ok) console.error(`[lead ${request_id}] CRM FAIL`, crm);
  if (!tre.ok) console.error(`[lead ${request_id}] Trello FAIL`, tre);

  // Treat as success if at least one downstream landed (Trello is the safety net).
  const ok = crm.ok || tre.ok;
  return NextResponse.json({
    ok,
    request_id,
    crm_status: crm.ok ? "sent" : "failed",
    trello_status: tre.ok ? "sent" : "failed",
    trello_card_id: tre.cardId,
    soft_duplicate: isSoftDup,
    ...(ok ? {} : { error: errors.join(" | ") }),
  }, { status: ok ? 200 : 502 });
}
