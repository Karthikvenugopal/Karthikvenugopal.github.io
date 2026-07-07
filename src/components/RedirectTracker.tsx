"use client";

import { useEffect } from "react";
import { isTrackable, track } from "@/lib/tracker";

/**
 * Logs a link "click" (with approximate location + ?src= tag) and then
 * redirects to the real destination. Put these /go/* links in your resume,
 * cold emails, and LinkedIn so off-site clicks flow through your tracker.
 * Redirect always happens even if tracking is disabled or slow.
 */
export default function RedirectTracker({
  label,
  destination,
}: {
  label: string;
  destination: string;
}) {
  useEffect(() => {
    let done = false;
    const go = () => {
      if (done) return;
      done = true;
      window.location.replace(destination);
    };

    // Never leave the visitor stuck if geo lookup hangs.
    const fallback = setTimeout(go, 2500);

    (async () => {
      try {
        if (isTrackable()) {
          await track({ type: "click", label }, { beacon: true });
        }
      } finally {
        clearTimeout(fallback);
        go();
      }
    })();

    return () => clearTimeout(fallback);
  }, [label, destination]);

  return (
    <main
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
        fontFamily: "system-ui, sans-serif",
        padding: "2rem",
      }}
    >
      <p style={{ opacity: 0.7 }}>Redirecting…</p>
      <p>
        <a href={destination}>Continue &rarr;</a>
      </p>
      <noscript>
        <a href={destination}>Continue to {label} &rarr;</a>
      </noscript>
    </main>
  );
}
