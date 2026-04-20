// Server-side EmailJS sender via REST API.
// Public key + service ID are intentionally embedded (they are public values
// already shipped to the browser bundle).

const EMAILJS_SERVICE_ID = "service_fcbgn5u";
const EMAILJS_PUBLIC_KEY = "aYRRi7nyH2P26Q4jc";
const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

export interface EmailSendResult {
  ok: boolean;
  attempts: number;
  lastStatus: number;
  lastError: string | null;
}

export async function sendViaEmailJS(
  templateId: string,
  templateParams: Record<string, string>
): Promise<EmailSendResult> {
  const body = JSON.stringify({
    service_id: EMAILJS_SERVICE_ID,
    template_id: templateId,
    user_id: EMAILJS_PUBLIC_KEY,
    template_params: templateParams,
  });

  const backoff = [0, 1000, 3000, 8000];
  let lastError: string | null = null;
  let lastStatus = 0;
  let attempts = 0;
  for (const wait of backoff) {
    if (wait > 0) await new Promise((r) => setTimeout(r, wait));
    attempts++;
    try {
      const res = await fetch(EMAILJS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", origin: "https://sofoservis.sk" },
        body,
      });
      lastStatus = res.status;
      if (res.ok) return { ok: true, attempts, lastStatus, lastError: null };
      lastError = `HTTP ${res.status} ${(await res.text()).slice(0, 200)}`;
    } catch (e) {
      lastError = e instanceof Error ? e.message : String(e);
    }
  }
  return { ok: false, attempts, lastStatus, lastError };
}
