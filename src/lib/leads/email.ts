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

function utmBlock(label: string, prefix: string, p: Record<string, string>): string {
  const rows = [
    ["Zdroj", p[`${prefix}_utm_source`]],
    ["Medium", p[`${prefix}_utm_medium`]],
    ["Kampaň", p[`${prefix}_utm_campaign`]],
    ["Content", p[`${prefix}_utm_content`]],
    ["Kľúčové slovo", p[`${prefix}_utm_term`]],
    ["GCLID", p[`${prefix}_gclid`]],
    ["Stránka", p[`${prefix}_landing_page`]],
    ["Dátum", p[`${prefix}_visit_date`]],
  ]
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr>
          <td style="padding:3px 0;color:#777;font-size:13px;width:130px;vertical-align:top">${k}:</td>
          <td style="padding:3px 0;color:#333;font-size:13px;word-break:break-all">${v}</td>
        </tr>`
    )
    .join("");

  if (!rows) return "";

  return `
    <div style="margin-bottom:10px">
      <div style="font-weight:700;font-size:13px;margin-bottom:6px">${label}:</div>
      <table style="border-collapse:collapse;width:100%">${rows}</table>
    </div>
  `;
}

function buildHtml(p: Record<string, string>): string {
  const hasTracking =
    p["first_utm_source"] || p["first_gclid"] || p["last_utm_source"] || p["last_gclid"];

  const telHref = `tel:${p.phone?.replace(/\s/g, "")}`;
  const mailHref = `mailto:${p.email}`;
  const siteUrl = "https://www.sofoservis.sk";

  return `<!DOCTYPE html>
<html lang="sk">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:20px;background:#f4f4f4;font-family:Arial,sans-serif">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.1)">

    <!-- Header -->
    <div style="background:#f5c518;padding:18px 24px;text-align:center">
      <strong style="font-size:18px;color:#111">Nová správa z webu SofoServis</strong>
    </div>

    <!-- Intro -->
    <div style="padding:20px 24px 0">
      <p style="margin:0 0 16px;color:#333;font-size:14px">
        Dobrý deň, dostali ste novú správu z kontaktného formulára na
        <a href="${siteUrl}" style="color:#1a73e8">${siteUrl}</a>:
      </p>

      <!-- Contact box -->
      <div style="border:1px solid #e0e0e0;border-radius:6px;padding:14px 18px;margin-bottom:14px">
        ${p.name ? `<div style="margin-bottom:8px;font-size:14px"><span style="color:#555;font-weight:600;display:inline-block;width:80px">Meno:</span> ${p.name}</div>` : ""}
        <div style="margin-bottom:8px;font-size:14px">
          <span style="color:#555;font-weight:600;display:inline-block;width:80px">Telefón:</span>
          <a href="${telHref}" style="background:#f5c518;color:#111;padding:3px 10px;border-radius:4px;text-decoration:none;font-weight:700">${p.phone}</a>
        </div>
        ${p.email ? `<div style="font-size:14px"><span style="color:#555;font-weight:600;display:inline-block;width:80px">Email:</span> <a href="${mailHref}" style="color:#1a73e8">${p.email}</a></div>` : ""}
      </div>

      <!-- Message box -->
      ${p.message ? `
      <div style="border:2px solid #f5c518;border-radius:6px;padding:14px 18px;margin-bottom:18px">
        <div style="font-weight:700;font-size:13px;margin-bottom:6px;color:#333">Správa:</div>
        <div style="font-size:14px;color:#111">${p.message}</div>
      </div>` : ""}

      <!-- Buttons -->
      <div style="text-align:center;margin-bottom:20px">
        ${p.email ? `<a href="${mailHref}" style="background:#f5c518;color:#111;padding:10px 22px;border-radius:6px;text-decoration:none;font-weight:700;font-size:14px;margin-right:10px;display:inline-block">Odpovedať emailom</a>` : ""}
        <a href="${telHref}" style="background:#fff;color:#111;padding:10px 22px;border-radius:6px;text-decoration:none;font-weight:700;font-size:14px;border:2px solid #e0e0e0;display:inline-block">Zavolať</a>
      </div>

      <!-- Page URL -->
      ${p.page_url ? `<div style="font-size:12px;color:#999;margin-bottom:16px">Stránka: <a href="https://www.sofoservis.sk${p.page_url}" style="color:#999">${p.page_url}</a></div>` : ""}

      <!-- PPC Tracking -->
      ${hasTracking ? `
      <div style="background:#f9f9f9;border:1px solid #e0e0e0;border-radius:6px;padding:14px 18px;margin-bottom:20px">
        <div style="font-size:13px;margin-bottom:4px">📊 <strong>PPC TRACKING</strong></div>
        ${utmBlock("PRVÝ KLIK (first click)", "first", p)}
        ${utmBlock("POSLEDNÝ KLIK (last click)", "last", p)}
      </div>` : ""}

    </div>
  </div>
</body>
</html>`;
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

  const subject = `Nový dopyt: ${params.name || "?"} | ${params.phone || "?"} | ${params.service_type || "sofoservis.sk"}`;

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
