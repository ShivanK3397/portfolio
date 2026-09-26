import type { Metadata } from "next";
import { Header, Footer } from "@/components/site-shell";
import { profile } from "@/content/portfolio";
import { siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: `${profile.name} — ${profile.role}`, template: `%s | ${profile.name}` },
  description: profile.introduction,
  openGraph: { type: "website", siteName: `${profile.name} — Portfolio`, locale: "en_US" },
  twitter: { card: "summary_large_image" },
  robots: { index: profile.contentReady, follow: profile.contentReady },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content" className="container">{children}</main><Footer /></body></html>;
}
