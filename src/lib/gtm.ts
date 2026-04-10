type CookieConsentState = {
  analytics?: boolean;
  marketing?: boolean;
};

const CONSENT_STORAGE_KEY = "sofoservis-cookie-consent";

function hasAnalyticsConsent(): boolean {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw) as CookieConsentState;
    return Boolean(parsed?.analytics);
  } catch {
    return false;
  }
}

export function pushDataLayerEvent(
  eventName: string,
  params: Record<string, unknown> = {},
  options: { requireAnalyticsConsent?: boolean } = {}
) {
  if (typeof window === "undefined") return;

  const { requireAnalyticsConsent = true } = options;
  if (requireAnalyticsConsent && !hasAnalyticsConsent()) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params,
  });
}

