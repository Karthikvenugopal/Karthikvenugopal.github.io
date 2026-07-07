import type { Metadata } from "next";
import RedirectTracker from "@/components/RedirectTracker";

// Keep the redirect stubs out of search results.
export const metadata: Metadata = {
  title: "Redirecting…",
  robots: { index: false, follow: false },
};

export default function GoLinkedIn() {
  return (
    <RedirectTracker
      label="linkedin"
      destination="https://linkedin.com/in/karthik-venugopal/"
    />
  );
}
