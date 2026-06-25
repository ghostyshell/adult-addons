import type { Metadata } from "next";
import { ALL_ADDONS } from "@/lib/addons";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SEO_KEYWORDS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

function searchVerification(): Metadata["verification"] | undefined {
  const google = process.env.GOOGLE_SITE_VERIFICATION;
  const bing = process.env.BING_SITE_VERIFICATION;
  if (!google && !bing) return undefined;
  return {
    ...(google ? { google } : {}),
    ...(bing ? { other: { "msvalidate.01": bing } } : {}),
  };
}

export function siteMetadata(overrides?: Partial<Metadata>): Metadata {
  const verification = searchVerification();
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: DEFAULT_TITLE,
      template: `%s | ${SITE_NAME}`,
    },
    description: DEFAULT_DESCRIPTION,
    keywords: [...SEO_KEYWORDS],
    ...(verification ? { verification } : {}),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: SITE_URL,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: SITE_URL,
      siteName: SITE_NAME,
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
    },
    twitter: {
      card: "summary_large_image",
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
    },
    category: "technology",
    ...overrides,
  };
}

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = `${SITE_URL}${path}`;
  return siteMetadata({
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { title, description },
  });
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    inLanguage: "en",
    isFamilyFriendly: false,
    about: {
      "@type": "Thing",
      name: "Stremio adult addons",
      description: "Third-party Stremio and Nuvio addons for adult and NSFW content.",
    },
  };
}

export function itemListJsonLd() {
  const items = ALL_ADDONS.filter((a) => !a.comingSoon && a.host);
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Stremio adult addons directory",
    description: DEFAULT_DESCRIPTION,
    numberOfItems: items.length,
    itemListElement: items.map((addon, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: addon.name,
      url: addon.host,
      description: addon.description,
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export const HOME_FAQS = [
  {
    question: "What are Stremio adult addons?",
    answer:
      "Stremio adult addons are third-party extensions that add 18+ catalogs to the Stremio app. They pull torrent or debrid streams for adult, NSFW, and porn content. This site lists curated Stremio adult addons with install links and manifests.",
  },
  {
    question: "How do I install a Stremio NSFW addon?",
    answer:
      "Click Add to Stremio on any listed addon, or copy the manifest URL into Stremio under Add-ons > Install via URL. For debrid playback, open Configure first to add your Real-Debrid, AllDebrid, or TorBox token.",
  },
  {
    question: "What is the best Stremio porn addon?",
    answer:
      "TPB 4K Porn is our featured Stremio porn addon. It indexes ThePirateBay, PornRips, Hentai, and JAV catalogs in 4K and 1080p, with optional debrid providers for instant streaming.",
  },
  {
    question: "Do Stremio adult addons work with Nuvio?",
    answer:
      "Yes. Stremio-compatible adult addons listed here also work with Nuvio and other Stremio-addon clients when you use the manifest URL or install link.",
  },
  {
    question: "Are these Stremio 18+ addons free?",
    answer:
      "The addons themselves are free to install. Some support optional debrid services (Real-Debrid, TorBox, etc.) for cached streaming. Torrent playback works without a debrid account.",
  },
] as const;
