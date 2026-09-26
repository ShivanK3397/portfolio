import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { profile } from "@/content/portfolio";

export default function robots(): MetadataRoute.Robots {
  return { rules: profile.contentReady ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" }, sitemap: new URL("/sitemap.xml", siteUrl).href };
}
