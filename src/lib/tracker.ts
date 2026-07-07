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

// Known AI/LLM agents we WANT to be flagged about (surfaced, not dropped).
const AI_AGENTS: [RegExp, string][] = [
  [/claude-?bot|claude-user|anthropic/i, "Claude (Anthropic)"],
  [/gptbot|chatgpt-user|oai-searchbot|openai/i, "OpenAI / ChatGPT"],
  [/perplexity/i, "Perplexity"],
  [/google-extended|gemini/i, "Google (Gemini)"],
  [/bytespider/i, "ByteDance"],
  [/ccbot/i, "Common Crawl"],
  [/cohere-ai|cohere/i, "Cohere"],
  [/meta-externalagent|meta-externalfetcher/i, "Meta AI"],
  [/amazonbot/i, "Amazon"],
  [/applebot-extended/i, "Apple"],
];

/** Friendly AI-agent name if the UA is a known AI/LLM agent, else "". */
function detectAiAgent(ua: string): string {
  for (const [re, name] of AI_AGENTS) if (re.test(ua)) return name;
  return "";
}

// Generic bots/crawlers we still silently drop (noise, not interesting).
const BOT_RE =
  /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|quora|pinterest|vkshare|whatsapp|telegram|discord|slack|headless|monitor|preview|scan|fetch|python-requests|axios|node-fetch|okhttp|curl|wget/i;

interface Geo {
  ip?: string;
  city?: string;
  region?: string;
  country?: string;
  country_code?: string;
  connection?: { isp?: string; org?: string };
}

/**
 * True when we should send an event: a real browser (human) OR a recognized
 * AI agent. Generic bots, localhost, and unconfigured builds return false.
 */
export function isTrackable(): boolean {
  if (typeof window === "undefined") return false;
  if (!TRACKER_ENDPOINT || TRACKER_ENDPOINT.startsWith("PASTE_")) return false;
  if (["localhost", "127.0.0.1"].includes(window.location.hostname)) return false;
  const ua = navigator.userAgent;
  if (detectAiAgent(ua)) return true; // known AI agent → flag it, don't drop
  if (BOT_RE.test(ua) || navigator.webdriver) return false; // generic bot → drop
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
    agent: detectAiAgent(navigator.userAgent), // "" for humans, name for AI agents
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
