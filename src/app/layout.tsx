import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import VisitorTracker from "@/components/VisitorTracker";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karthik Venugopal — ML Engineer",
  description:
    "ML Engineer specializing in MLOps, LLM agents, and scalable ML infrastructure. MS CS at USC. Open to full-time ML/NLP engineer roles starting early 2027.",
  openGraph: {
    title: "Karthik Venugopal — ML Engineer",
    description:
      "ML Engineer specializing in MLOps, LLM agents, and scalable ML infrastructure.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <VisitorTracker />
        {children}
      </body>
    </html>
  );
}
