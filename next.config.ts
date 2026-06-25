import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/seo/sitemap",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
