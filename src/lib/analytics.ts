// Optional VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX. No GA script loads before opt-in.
export type AnalyticsConsent = "granted" | "denied" | "unknown";
type EventParams = Record<string, string | number | boolean | undefined>;
type Attribution = Partial<
  Record<"utm_source" | "utm_medium" | "utm_campaign" | "utm_content", string>
>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const CONSENT_KEY = "nuvro:analytics-consent";
const ATTRIBUTION_KEY = "nuvro:attribution";
const GA_ID = /^G-[A-Z0-9]{4,20}$/.test(
  import.meta.env.VITE_GA_MEASUREMENT_ID ?? "",
)
  ? import.meta.env.VITE_GA_MEASUREMENT_ID
  : "";
const ATTRIBUTION_FIELDS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
] as const;
const PARAM_FIELDS = new Set([
  "location",
  "service",
  "interaction",
  "content_type",
  "link_type",
  "page_path",
]);
let memoryConsent: AnalyticsConsent = "unknown";
let consentRead = false;
let initialized = false;
let gaStarted = false;
let pageReported = false;

function browserAvailable(): boolean {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

export function getAnalyticsConsent(): AnalyticsConsent {
  if (!browserAvailable()) return "unknown";
  if (consentRead) return memoryConsent;
  consentRead = true;
  try {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    memoryConsent =
      stored === "granted" || stored === "denied" ? stored : "unknown";
  } catch {
    // Consent still works for this page when storage is unavailable.
  }
  return memoryConsent;
}

function safeToken(value: string): string | undefined {
  const token = value.trim().toLowerCase();
  // Keep campaign labels only: never copy full URLs, email addresses or phone numbers.
  if (!/^[a-z0-9][a-z0-9._-]{0,63}$/.test(token) || /\d{7,}/.test(token))
    return;
  return token;
}

function captureAttribution(): void {
  if (!browserAvailable() || getAnalyticsConsent() !== "granted") return;
  const query = new URLSearchParams(window.location.search);
  const tags: Attribution = {};
  for (const field of ATTRIBUTION_FIELDS) {
    const value = query.get(field);
    if (value) {
      const token = safeToken(value);
      if (token) tags[field] = token;
    }
  }
  if (!Object.keys(tags).length) return;
  try {
    window.sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(tags));
  } catch {
    // Measurement must never interfere with contact or navigation.
  }
}

function attribution(): Attribution {
  if (!browserAvailable() || getAnalyticsConsent() !== "granted") return {};
  try {
    const stored = JSON.parse(
      window.sessionStorage.getItem(ATTRIBUTION_KEY) || "{}",
    );
    const result: Attribution = {};
    for (const field of ATTRIBUTION_FIELDS) {
      if (typeof stored[field] === "string") {
        const value = safeToken(stored[field]);
        if (value) result[field] = value;
      }
    }
    return result;
  } catch {
    return {};
  }
}

function pagePath(): string {
  // In particular, omit personal proposal query parameters and WhatsApp message text.
  return window.location.pathname.slice(0, 160);
}

function startGoogleAnalytics(): void {
  if (!GA_ID || gaStarted || getAnalyticsConsent() !== "granted") return;
  gaStarted = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function () {
      window.dataLayer!.push(arguments);
    };
  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  const campaign = attribution();
  window.gtag("config", GA_ID, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    page_location: window.location.origin + pagePath(),
    page_referrer: "",
    campaign_source: campaign.utm_source,
    campaign_medium: campaign.utm_medium,
    campaign_name: campaign.utm_campaign,
    campaign_content: campaign.utm_content,
  });
  const script = document.createElement("script");
  script.id = "nuvro-google-analytics";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

export function trackEvent(name: string, params: EventParams = {}): void {
  if (
    !browserAvailable() ||
    getAnalyticsConsent() !== "granted" ||
    !/^[a-z][a-z0-9_]{0,39}$/.test(name)
  )
    return;
  const safeParams: EventParams = { page_path: pagePath(), ...attribution() };
  for (const [field, value] of Object.entries(params)) {
    if (!PARAM_FIELDS.has(field) || field === "page_path") continue;
    if (typeof value === "number" && Number.isFinite(value))
      safeParams[field] = value;
    if (typeof value === "boolean") safeParams[field] = value;
    if (typeof value === "string") {
      const token = safeToken(value);
      if (token) safeParams[field] = token;
    }
  }
  if (GA_ID && gaStarted) {
    window.gtag?.("event", name, {
      ...safeParams,
      page_location: window.location.origin + pagePath(),
      page_referrer: "",
    });
  }
  // Local inspection hook; only emitted after consent and never includes form data.
  window.dispatchEvent(
    new CustomEvent("nuvro:analytics", {
      detail: { name, params: safeParams, gaConfigured: Boolean(GA_ID) },
    }),
  );
}

export function trackWhatsApp(location = "site"): void {
  // A click is intent to contact, not a submitted lead or a confirmed sale.
  trackEvent("whatsapp_click", { location, link_type: "whatsapp" });
}

function reportPage(): void {
  if (pageReported || getAnalyticsConsent() !== "granted") return;
  pageReported = true;
  trackEvent("page_view");
}

export function setAnalyticsConsent(
  consent: Exclude<AnalyticsConsent, "unknown">,
): void {
  if (!browserAvailable()) return;
  memoryConsent = consent;
  consentRead = true;
  try {
    window.localStorage.setItem(CONSENT_KEY, consent);
  } catch {
    // The choice is retained in memory until this page closes.
  }
  if (GA_ID) {
    (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] =
      consent !== "granted";
  }
  if (consent === "granted") {
    captureAttribution();
    startGoogleAnalytics();
    window.gtag?.("consent", "update", { analytics_storage: "granted" });
    reportPage();
  } else {
    pageReported = false;
    window.gtag?.("consent", "update", { analytics_storage: "denied" });
    try {
      window.sessionStorage.removeItem(ATTRIBUTION_KEY);
    } catch {
      /* Storage may be blocked. */
    }
  }
  window.dispatchEvent(
    new CustomEvent("nuvro:analytics-consent", { detail: consent }),
  );
}

function onContactClick(event: MouseEvent): void {
  const target =
    event.target instanceof Element ? event.target.closest("a[href]") : null;
  if (!(target instanceof HTMLAnchorElement)) return;
  const url = new URL(target.href, window.location.origin);
  const location =
    target.dataset.analyticsLocation ||
    (target.closest("#contacto")
      ? "contact"
      : target.closest("#aprende")
        ? "learning"
        : target.closest("header")
          ? "header"
          : target.closest("footer")
            ? "footer"
            : "site");
  if (url.hostname === "wa.me" || url.hostname === "api.whatsapp.com") {
    trackWhatsApp(location);
  } else if (
    url.origin === window.location.origin &&
    url.hash === "#contacto"
  ) {
    trackEvent("contact_section_click", { location });
  }
}

export function initAnalytics(): () => void {
  if (!browserAvailable() || initialized) return () => {};
  initialized = true;
  if (getAnalyticsConsent() === "granted") {
    captureAttribution();
    startGoogleAnalytics();
    reportPage();
  }
  document.addEventListener("click", onContactClick);
  return () => {
    document.removeEventListener("click", onContactClick);
    initialized = false;
  };
}
