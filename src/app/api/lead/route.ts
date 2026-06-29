import { NextResponse } from "next/server";
import crypto from "node:crypto";
import { query } from "@/lib/db";
import { ensureLeadsTable, type LeadStatus } from "@/lib/leads/schema";
import { sendToCRM, type CRMPayload } from "@/lib/leads/crm";
import { sendViaEmailJS } from "@/lib/leads/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

interface IncomingBody {
  request_id?: string;
  name?: string;
  phone?: string;
  email?: string;
  description?: string;
  message?: string;
  consent?: boolean;
  service_type?: string;
  page_url?: string;
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
  "referrer",
  "source_classified",
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

async function safeQuery<T>(
  label: string,
  text: string,
  params: unknown[]
): Promise<{ rows: T[]; rowCount: number } | null> {
  try {
    return await query<T>(text, params);
  } catch (e) {
    console.error(`[lead] DB ${label} failed:`, e instanceof Error ? e.message : e);
    return null;
  }
}

export async function POST(req: Request) {
  try {
    return await handlePost(req);
  } catch (e) {
    console.error("[lead] unhandled error", e);
    return NextResponse.json(
      { ok: false, error: "Internal error", detail: e instanceof Error ? e.message : String(e) },
      { status: 200 }
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

  if (!phone && !email) {
    return NextResponse.json(
      { ok: false, error: "Missing contact info (phone or email required)" },
      { status: 400 }
    );
  }

  if (phone) {
    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 9) {
      return NextResponse.json(
        { ok: false, error: "Invalid phone number (at least 9 digits required)" },
        { status: 400 }
      );
    }
  }

  let service_type = clean(body.service_type);
  if (!service_type) service_type = "general";

  const request_id = clean(body.request_id) || crypto.randomUUID();
  const dedupe = fingerprint(name, phone, email, description);

  // ---- DB: best-effort, never fatal ----
  let dbAvailable = true;
  try {
    await ensureLeadsTable();
  } catch (e) {
    dbAvailable = false;
    console.error(`[lead ${request_id}] DB unavailable:`, e instanceof Error ? e.message : e);
  }

  let isSoftDup = false;
  let dbInserted = false;

  if (dbAvailable) {
    const recentDup = await safeQuery<{ id: number }>(
      "dup-check",
      `SELECT id FROM leads WHERE dedupe_fingerprint = $1 AND created_at > NOW() - INTERVAL '5 minutes' LIMIT 1`,
      [dedupe]
    );
    isSoftDup = (recentDup?.rowCount ?? 0) > 0;

    const insertRes = await safeQuery<{ id: number }>(
      "insert",
      `INSERT INTO leads (
         request_id, service_type, page_url, name, phone, email, description,
         utm_json, raw_payload_json,
         crm_status, trello_status, email_status, dedupe_fingerprint
       ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8::jsonb,$9::jsonb,$10,$11,$12,$13)
       ON CONFLICT (request_id) DO NOTHING
       RETURNING id`,
      [
        request_id, service_type, page_url, name, phone, email, description,
        JSON.stringify(utm), JSON.stringify(body),
        "pending", "skipped", "pending",
        dedupe,
      ]
    );

    if (insertRes === null) {
      dbAvailable = false;
    } else if (insertRes.rowCount === 0) {
      const existing = await safeQuery<{
        request_id: string;
        crm_status: LeadStatus;
        email_status: LeadStatus;
      }>(
        "replay-read",
        `SELECT request_id, crm_status, email_status FROM leads WHERE request_id = $1 LIMIT 1`,
        [request_id]
      );
      const r = existing?.rows[0];
      return NextResponse.json({
        ok: true,
        request_id: r?.request_id ?? request_id,
        idempotent_replay: true,
        crm_status: r?.crm_status ?? "unknown",
        email_status: r?.email_status ?? "unknown",
      });
    } else {
      dbInserted = true;
    }
  }

  // ---- Email + CRM in parallel for ALL leads ----
  const emailParams: Record<string, string> = {
    name, phone, email, message: description,
    page_url, service_type, request_id, ...utm,
  };

  const crmPayload: CRMPayload = {
    name, phone, email, description,
    request_id, service_type, page_url, ...utm,
  };

  const [emailRes, crmRes] = await Promise.allSettled([
    sendViaEmailJS("", emailParams),
    sendToCRM(crmPayload),
  ]);

  const emailResult =
    emailRes.status === "fulfilled"
      ? emailRes.value
      : { ok: false, attempts: 0, lastStatus: 0, lastError: String(emailRes.reason) };

  const crm =
    crmRes.status === "fulfilled"
      ? crmRes.value
      : { ok: false, attempts: 0, lastStatus: 0, lastError: String(crmRes.reason) };

  if (dbAvailable) {
    await safeQuery(
      "update-downstream",
      `UPDATE leads SET
         email_status = $2, email_attempt_count = $3,
         crm_status = $4, crm_attempt_count = $5,
         last_error = $6
       WHERE request_id = $1`,
      [
        request_id,
        emailResult.ok ? "sent" : "failed", emailResult.attempts,
        crm.ok ? "sent" : "failed", crm.attempts,
        [
          emailResult.ok ? null : `email: ${emailResult.lastError}`,
          crm.ok ? null : `CRM: ${crm.lastError}`,
        ].filter(Boolean).join(" | ") || null,
      ]
    );
  }

  if (!emailResult.ok) console.error(`[lead ${request_id}] email FAIL`, emailResult);
  if (!crm.ok) console.error(`[lead ${request_id}] CRM FAIL`, crm);

  const ok = emailResult.ok || dbInserted;

  return NextResponse.json(
    {
      ok,
      request_id,
      email_status: emailResult.ok ? "sent" : "failed",
      crm_status: crm.ok ? "sent" : "failed",
      db_status: dbAvailable ? (dbInserted ? "saved" : "unknown") : "unavailable",
      soft_duplicate: isSoftDup,
      ...(!ok ? { error: [emailResult.lastError, crm.lastError].filter(Boolean).join(" | ") } : {}),
    },
    { status: 200 }
  );
}
