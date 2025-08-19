import "./globals.css";
import siteMeta from "@/constants/siteMeta";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], display: "swap", variable: "--font-mono" });

export const metadata = {
  metadataBase: new URL(siteMeta.siteUrl),
  title: { default: siteMeta.title, template: "%s — Diler Bharam" },
  description: siteMeta.description,
  keywords: siteMeta.keywords,
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.siteUrl,
    siteName: "Diler Bharam — Portfolio",
    images: [{ url: siteMeta.ogImage, width: 1200, height: 630 }],
    locale: "en_GB",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: siteMeta.title, description: siteMeta.description, images: [siteMeta.ogImage] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="min-h-screen font-[var(--font-sans)]">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
