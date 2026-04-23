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
  referrer: string;
  source_classified: string;
}

export interface UTMAttribution {
  first: UTMData | null;
  last: UTMData | null;
}

const OWN_HOSTS = ["sofoservis.sk", "www.sofoservis.sk", "localhost"];

function classifySource(data: {
  utm_source: string;
  utm_medium: string;
  gclid: string;
  referrer: string;
}): string {
  if (data.utm_source) {
    return data.utm_medium
      ? `${data.utm_source}-${data.utm_medium}`
      : data.utm_source;
  }
  if (data.gclid) return "google-cpc";

  if (data.referrer) {
    try {
      const host = new URL(data.referrer).hostname.toLowerCase();
      if (OWN_HOSTS.some((h) => host === h || host.endsWith(`.${h}`))) {
        return "internal";
      }
      if (/(^|\.)google\./.test(host) || host.includes("googleusercontent")) {
        return "google-organic";
      }
      if (/(^|\.)(facebook|fb)\./.test(host) || host === "l.facebook.com") {
        return "facebook-referral";
      }
      if (/(^|\.)instagram\./.test(host) || host === "l.instagram.com") {
        return "instagram-referral";
      }
      if (/(^|\.)bing\./.test(host)) return "bing-organic";
      if (/(^|\.)duckduckgo\./.test(host)) return "duckduckgo-organic";
      if (/(^|\.)yahoo\./.test(host)) return "yahoo-organic";
      if (/(^|\.)yandex\./.test(host)) return "yandex-organic";
      if (host.includes("chatgpt.com") || host.includes("openai.com")) {
        return "chatgpt-referral";
      }
      if (host.includes("perplexity.ai")) return "perplexity-referral";
      if (/(^|\.)tiktok\./.test(host)) return "tiktok-referral";
      if (/(^|\.)linkedin\./.test(host) || host === "lnkd.in") {
        return "linkedin-referral";
      }
      if (/(^|\.)youtube\./.test(host) || host === "youtu.be") {
        return "youtube-referral";
      }
      if (/(^|\.)(twitter|x)\.com$/.test(host) || host === "t.co") {
        return "twitter-referral";
      }
      if (host.includes("whatsapp")) return "whatsapp-referral";
      if (host.includes("messenger")) return "messenger-referral";
      return `${host}-referral`;
    } catch {
      return "referral-unknown";
    }
  }

  return "direct";
}

function readParams(): UTMData {
  if (typeof window === "undefined") {
    return {
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_content: "",
      utm_term: "",
      gclid: "",
      landing_page: "",
      visit_date: "",
      referrer: "",
      source_classified: "",
    };
  }
  const params = new URLSearchParams(window.location.search);
  const referrer =
    typeof document !== "undefined" && document.referrer ? document.referrer : "";
  const data = {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_content: params.get("utm_content") || "",
    utm_term: params.get("utm_term") || "",
    gclid: params.get("gclid") || "",
    landing_page: window.location.pathname,
    visit_date: new Date().toISOString().split("T")[0],
    referrer,
    source_classified: "",
  };
  data.source_classified = classifySource(data);
  return data;
}

function hasTrackingParams(data: UTMData): boolean {
  return !!(data.utm_source || data.utm_medium || data.utm_campaign || data.gclid);
}

export function captureUTMParams(): void {
  if (typeof window === "undefined") return;
  try {
    const data = readParams();

    // Last-click: always write so we always have at least landing_page + source_classified.
    // For internal navigation (referrer is our own host) we skip overwriting so we don't
    // clobber the real last source with an internal page transition.
    const isInternalNav = data.source_classified === "internal";
    if (!isInternalNav) {
      localStorage.setItem(LAST_CLICK_KEY, JSON.stringify(data));
    } else if (!localStorage.getItem(LAST_CLICK_KEY)) {
      // No prior last-click yet — store internal as a fallback so landing_page is captured.
      localStorage.setItem(LAST_CLICK_KEY, JSON.stringify(data));
    }

    // First-click: only set once, on the very first visit we observe.
    if (!localStorage.getItem(FIRST_CLICK_KEY) && !isInternalNav) {
      localStorage.setItem(FIRST_CLICK_KEY, JSON.stringify(data));
    }

    // Backward-compat note: previously we only wrote when hasTrackingParams() was true.
    // Now we also persist direct/organic so CRM gets attribution for every lead.
    void hasTrackingParams;
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
    "referrer", "source_classified",
  ];

  keys.forEach((key) => {
    flat[`first_${key}`] = attribution.first?.[key] || "(none)";
    flat[`last_${key}`] = attribution.last?.[key] || "(none)";
  });

  return flat;
}
