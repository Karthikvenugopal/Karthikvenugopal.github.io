import type { Metadata } from "next";
import RedirectTracker from "@/components/RedirectTracker";

// Keep the redirect stubs out of search results.
export const metadata: Metadata = {
  title: "Redirecting…",
  robots: { index: false, follow: false },
};

export default function GoGitHub() {
  return (
    <RedirectTracker
      label="github"
      destination="https://github.com/Karthikvenugopal"
    />
  );
}
