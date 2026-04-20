import { query } from "@/lib/db";

export type LeadStatus = "pending" | "sent" | "failed" | "skipped";

export interface LeadRecord {
  id: number;
  request_id: string;
  created_at: string;
  service_type: string;
  page_url: string;
  name: string;
  phone: string;
  email: string | null;
  description: string | null;
  utm_json: Record<string, string>;
  raw_payload_json: Record<string, unknown>;
  crm_status: LeadStatus;
  trello_status: LeadStatus;
  email_status: LeadStatus;
  crm_attempt_count: number;
  trello_attempt_count: number;
  email_attempt_count: number;
  trello_card_id: string | null;
  last_error: string | null;
  dedupe_fingerprint: string;
}

let ensured = false;

export async function ensureLeadsTable(): Promise<void> {
  if (ensured) return;
  await query(`
    CREATE TABLE IF NOT EXISTS leads (
      id              BIGSERIAL PRIMARY KEY,
      request_id      TEXT NOT NULL UNIQUE,
      created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      service_type    TEXT NOT NULL DEFAULT '',
      page_url        TEXT NOT NULL DEFAULT '',
      name            TEXT NOT NULL DEFAULT '',
      phone           TEXT NOT NULL DEFAULT '',
      email           TEXT,
      description     TEXT,
      utm_json        JSONB NOT NULL DEFAULT '{}'::jsonb,
      raw_payload_json JSONB NOT NULL DEFAULT '{}'::jsonb,
      crm_status      TEXT NOT NULL DEFAULT 'pending',
      trello_status   TEXT NOT NULL DEFAULT 'pending',
      email_status    TEXT NOT NULL DEFAULT 'pending',
      crm_attempt_count    INTEGER NOT NULL DEFAULT 0,
      trello_attempt_count INTEGER NOT NULL DEFAULT 0,
      email_attempt_count  INTEGER NOT NULL DEFAULT 0,
      trello_card_id  TEXT,
      last_error      TEXT,
      dedupe_fingerprint TEXT NOT NULL DEFAULT ''
    );
    CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);
    CREATE INDEX IF NOT EXISTS leads_dedupe_idx ON leads (dedupe_fingerprint, created_at DESC);
  `);
  ensured = true;
}
