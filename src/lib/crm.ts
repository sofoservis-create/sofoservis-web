import { getUTMAttribution, UTMData } from "@/lib/utm";

const CRM_ENDPOINT = "https://sofoservis-crm.replit.app/api/website-lead";

function clean(value: string | undefined | null): string {
  if (!value || value === "(none)") return "";
  return value;
}

function utmFields(data: UTMData | null, prefix: "first" | "last") {
  return {
    [`${prefix}_utm_source`]: clean(data?.utm_source),
    [`${prefix}_utm_medium`]: clean(data?.utm_medium),
    [`${prefix}_utm_campaign`]: clean(data?.utm_campaign),
    [`${prefix}_utm_content`]: clean(data?.utm_content),
    [`${prefix}_utm_term`]: clean(data?.utm_term),
    [`${prefix}_gclid`]: clean(data?.gclid),
    [`${prefix}_landing_page`]: clean(data?.landing_page),
    [`${prefix}_visit_date`]: clean(data?.visit_date),
  };
}

async function postToCRM(body: string): Promise<void> {
  const res = await fetch(CRM_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  });
  if (!res.ok) throw new Error(`CRM ${res.status}`);
}

export async function sendLeadToCRM(fields: {
  name: string;
  phone: string;
  email?: string;
  description?: string;
}): Promise<void> {
  try {
    const attribution = getUTMAttribution();
    const payload = JSON.stringify({
      name: fields.name,
      phone: fields.phone,
      email: fields.email || "",
      description: fields.description || "",
      ...utmFields(attribution.first, "first"),
      ...utmFields(attribution.last, "last"),
    });

    const delays = [3000, 5000];
    let lastErr: unknown;
    try {
      await postToCRM(payload);
      return;
    } catch (e) {
      lastErr = e;
    }
    for (const delay of delays) {
      await new Promise((r) => setTimeout(r, delay));
      try {
        await postToCRM(payload);
        return;
      } catch (e) {
        lastErr = e;
      }
    }
    void lastErr;
  } catch {
    // fire-and-forget — never block the form submission
  }
}
