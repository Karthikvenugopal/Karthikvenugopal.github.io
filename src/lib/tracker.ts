/**
 * Shared client-side tracking helper.
 *
 * Used by VisitorTracker (page visits) and RedirectTracker (link clicks on
 * /go/*). Looks up approximate location from the visitor's IP via the free
 * ipwho.is service and sends the event to your Google Apps Script endpoint,
 * which logs it to a Sheet and notifies you. See tracking/SETUP.md.
 */

export const TRACKER_ENDPOINT =
  process.env.NEXT_PUBLIC_TRACKER_ENDPOINT ||
  "https://script.google.com/macros/s/AKfycbwjm9QNCTpivTCkwE1g14YNfH_kjf9OKYs-wKUPs6pPqY2LDe5_kwQpTpQfvG7VjhQo/exec";

// Skip obvious bots/crawlers so they don't spam your notifications.
const BOT_RE =
  /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|quora|pinterest|vkshare|whatsapp|telegrambot|discordbot|slackbot|headless|monitor|preview|scan|fetch|python-requests|axios|curl|wget/i;

interface Geo {
  ip?: string;
  city?: string;
  region?: string;
  country?: string;
  country_code?: string;
  connection?: { isp?: string; org?: string };
}

/** True only when we're in a real browser, configured, and not a bot/localhost. */
export function isTrackable(): boolean {
  if (typeof window === "undefined") return false;
  if (!TRACKER_ENDPOINT || TRACKER_ENDPOINT.startsWith("PASTE_")) return false;
  if (["localhost", "127.0.0.1"].includes(window.location.hostname)) return false;
  if (BOT_RE.test(navigator.userAgent) || navigator.webdriver) return false;
  return true;
}

async function fetchGeo(timeoutMs = 1200): Promise<Geo> {
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), timeoutMs);
    const res = await fetch("https://ipwho.is/", { signal: ctrl.signal });
    clearTimeout(t);
    if (res.ok) return (await res.json()) as Geo;
  } catch {
    // best-effort; still send the event without location
  }
  return {};
}

/**
 * Send a tracking event. Pass `{ beacon: true }` from redirect pages so the
 * request survives the immediate navigation away (uses navigator.sendBeacon).
 */
export async function track(
  extra: Record<string, unknown> = {},
  opts: { beacon?: boolean } = {},
): Promise<void> {
  if (!isTrackable()) return;

  const geo = await fetchGeo();
  const params = new URLSearchParams(window.location.search);

  const payload = {
    type: "visit",
    label: "",
    src: params.get("src") || params.get("utm_source") || "",
    ip: geo.ip ?? "",
    city: geo.city ?? "",
    region: geo.region ?? "",
    country: geo.country ?? "",
    countryCode: geo.country_code ?? "",
    isp: geo.connection?.isp ?? geo.connection?.org ?? "",
    page: window.location.pathname,
    referrer: document.referrer || "direct",
    ua: navigator.userAgent,
    time: new Date().toISOString(),
    ...extra,
  };

  const body = JSON.stringify(payload);

  if (opts.beacon && typeof navigator.sendBeacon === "function") {
    // Reliable even as the page navigates away.
    navigator.sendBeacon(
      TRACKER_ENDPOINT,
      new Blob([body], { type: "text/plain;charset=UTF-8" }),
    );
    return;
  }

  try {
    await fetch(TRACKER_ENDPOINT, {
      method: "POST",
      mode: "no-cors", // Apps Script sends no CORS headers; fire-and-forget.
      headers: { "Content-Type": "text/plain;charset=utf-8" }, // avoids preflight
      body,
    });
  } catch {
    // Never let tracking break the page.
  }
}
