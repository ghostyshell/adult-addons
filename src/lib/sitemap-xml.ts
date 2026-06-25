import { SITE_URL } from "@/lib/site";

export const SITEMAP_PATH = "/seo/sitemap";
export const SITEMAP_URL = `${SITE_URL}${SITEMAP_PATH}`;

export const SITEMAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>2026-06-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${SITE_URL}/guide</loc>
    <lastmod>2026-06-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/tpb-4k-porn</loc>
    <lastmod>2026-06-25</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
`;

export function sitemapResponse() {
  return new Response(SITEMAP_XML, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
