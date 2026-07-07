"use client";

import { useEffect } from "react";
import { isTrackable, track } from "@/lib/tracker";

/**
 * Logs one page-visit event per browser session (avoids reload/SPA-nav noise).
 * Captures approximate location and any ?src= / ?utm_source= tag on the URL,
 * so you can tell a "resume" click from a "cold email" click. See
 * tracking/SETUP.md for setup.
 */
export default function VisitorTracker() {
  useEffect(() => {
    if (!isTrackable()) return;
    if (sessionStorage.getItem("kv_visit_logged")) return;
    sessionStorage.setItem("kv_visit_logged", "1");
    track({ type: "visit" });
  }, []);

  return null;
}
