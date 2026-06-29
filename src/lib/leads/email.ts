import nodemailer from "nodemailer";

const SMTP_HOST = "smtp.m1.websupport.sk";
const SMTP_PORT = 465;
const SMTP_USER = "info@sofoservis.sk";
const TO_EMAIL = "sofoservis3@gmail.com";

export interface EmailSendResult {
  ok: boolean;
  attempts: number;
  lastStatus: number;
  lastError: string | null;
}

function buildHtml(params: Record<string, string>): string {
  const rows = [
    ["Meno", params.name],
    ["Telefón", params.phone],
    ["Email", params.email || "—"],
    ["Správa", params.message || "—"],
    ["Typ služby", params.service_type || "—"],
    ["Stránka", params.page_url || "—"],
    ["Request ID", params.request_id || "—"],
    ["UTM source", params.utm_source || "—"],
    ["UTM medium", params.utm_medium || "—"],
    ["UTM campaign", params.utm_campaign || "—"],
  ];

  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;color:#555;white-space:nowrap">${label}</td>` +
        `<td style="padding:6px 12px;color:#111">${value}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <h2 style="background:#f5c518;padding:16px 20px;margin:0;font-size:18px">
        Nový lead — ${params.service_type || "sofoservis.sk"}
      </h2>
      <table style="width:100%;border-collapse:collapse;margin-top:8px">
        ${rowsHtml}
      </table>
    </div>
  `;
}

export async function sendViaEmailJS(
  _templateId: string,
  params: Record<string, string>
): Promise<EmailSendResult> {
  const smtpPass = process.env.SMTP_PASS;
  if (!smtpPass) {
    return { ok: false, attempts: 0, lastStatus: 0, lastError: "SMTP_PASS env var not set" };
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: true,
    auth: { user: SMTP_USER, pass: smtpPass },
  });

  const subject = `Lead: ${params.name || "?"} | ${params.phone || "?"} | ${params.service_type || "sofoservis.sk"}`;

  const backoff = [0, 2000, 5000];
  let lastError: string | null = null;
  let attempts = 0;

  for (const wait of backoff) {
    if (wait > 0) await new Promise((r) => setTimeout(r, wait));
    attempts++;
    try {
      await transporter.sendMail({
        from: `"Sofoservis Web" <${SMTP_USER}>`,
        to: TO_EMAIL,
        subject,
        html: buildHtml(params),
      });
      return { ok: true, attempts, lastStatus: 250, lastError: null };
    } catch (e) {
      lastError = e instanceof Error ? e.message : String(e);
    }
  }

  return { ok: false, attempts, lastStatus: 0, lastError };
}
