import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { profile } from "@/content/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return profile.contentReady ? ["/", "/about", "/work", "/projects"].map(path => ({ url: new URL(path, siteUrl).href })) : [];
}
