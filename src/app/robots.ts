import type { MetadataRoute } from "next";
import { SITEMAP_URL } from "@/lib/sitemap-xml";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/icon-preview"],
      },
    ],
    sitemap: SITEMAP_URL,
  };
}
