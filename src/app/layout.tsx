import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karthik Venugopal — ML Engineer",
  description:
    "ML Engineer specializing in MLOps, LLM agents, and scalable ML infrastructure. MS CS at USC. Open to MLE internship opportunities.",
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
      <body>{children}</body>
    </html>
  );
}
