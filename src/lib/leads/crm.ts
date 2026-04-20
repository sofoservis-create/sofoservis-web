const CRM_ENDPOINT =
  process.env.CRM_ENDPOINT_URL ||
  "https://sofoservis-crm.replit.app/api/website-lead";

// Test-only override: shrink the backoff schedule so failure scenarios don't
// hang the test for ~57s. Set to "1" in dev when you want fast failure tests.
const FAST_FAIL = process.env.CRM_FAST_FAIL === "1";

export interface CRMSendResult {
  ok: boolean;
  attempts: number;
  lastStatus: number;
  lastError: string | null;
}

export interface CRMPayload {
  name: string;
  phone: string;
  email: string;
  description: string;
  request_id: string;
  service_type: string;
  page_url: string;
  // UTM fields (first_* + last_*) flattened
  [key: string]: string;
}

// Backoff schedule (ms) — 5 attempts spanning ~57s, long enough for a Replit cold start.
const BACKOFF_MS = FAST_FAIL ? [0, 50, 50, 50, 50, 50] : [0, 1_000, 3_000, 8_000, 15_000, 30_000];

export async function sendToCRM(payload: CRMPayload): Promise<CRMSendResult> {
  let lastError: string | null = null;
  let lastStatus = 0;

  for (let attempt = 1; attempt <= BACKOFF_MS.length; attempt++) {
    if (BACKOFF_MS[attempt - 1] > 0) {
      await new Promise((r) => setTimeout(r, BACKOFF_MS[attempt - 1]));
    }
    try {
      const res = await fetch(CRM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      lastStatus = res.status;
      if (res.ok) {
        return { ok: true, attempts: attempt, lastStatus, lastError: null };
      }
      lastError = `HTTP ${res.status}`;
    } catch (e) {
      lastError = e instanceof Error ? e.message : String(e);
    }
  }
  return { ok: false, attempts: BACKOFF_MS.length, lastStatus, lastError };
}
