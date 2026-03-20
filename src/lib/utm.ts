const FIRST_CLICK_KEY = "sofoservis-utm-first";
const LAST_CLICK_KEY = "sofoservis-utm-last";

export interface UTMData {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  gclid: string;
  landing_page: string;
  visit_date: string;
}

export interface UTMAttribution {
  first: UTMData | null;
  last: UTMData | null;
}

function readParams(): Partial<UTMData> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_content: params.get("utm_content") || "",
    utm_term: params.get("utm_term") || "",
    gclid: params.get("gclid") || "",
    landing_page: window.location.pathname,
    visit_date: new Date().toISOString().split("T")[0],
  };
}

function hasTrackingParams(data: Partial<UTMData>): boolean {
  return !!(
    data.utm_source ||
    data.utm_medium ||
    data.utm_campaign ||
    data.gclid
  );
}

export function captureUTMParams(): void {
  if (typeof window === "undefined") return;
  try {
    const data = readParams() as UTMData;

    if (hasTrackingParams(data)) {
      if (!localStorage.getItem(FIRST_CLICK_KEY)) {
        localStorage.setItem(FIRST_CLICK_KEY, JSON.stringify(data));
      }
      localStorage.setItem(LAST_CLICK_KEY, JSON.stringify(data));
    }
  } catch {
    // localStorage may be unavailable in some browsers
  }
}

export function getUTMAttribution(): UTMAttribution {
  if (typeof window === "undefined") return { first: null, last: null };
  try {
    const firstRaw = localStorage.getItem(FIRST_CLICK_KEY);
    const lastRaw = localStorage.getItem(LAST_CLICK_KEY);
    return {
      first: firstRaw ? (JSON.parse(firstRaw) as UTMData) : null,
      last: lastRaw ? (JSON.parse(lastRaw) as UTMData) : null,
    };
  } catch {
    return { first: null, last: null };
  }
}

export function flattenUTMForEmail(attribution: UTMAttribution): Record<string, string> {
  const flat: Record<string, string> = {};
  const keys: (keyof UTMData)[] = [
    "utm_source", "utm_medium", "utm_campaign", "utm_content",
    "utm_term", "gclid", "landing_page", "visit_date",
  ];

  keys.forEach((key) => {
    flat[`first_${key}`] = attribution.first?.[key] || "(none)";
    flat[`last_${key}`] = attribution.last?.[key] || "(none)";
  });

  return flat;
}
