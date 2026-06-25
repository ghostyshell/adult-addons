import JsonLd from "@/components/JsonLd";
import SiteShell from "@/components/SiteShell";
import { HOME_FAQS, faqJsonLd, itemListJsonLd, websiteJsonLd } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLd data={[websiteJsonLd(), itemListJsonLd(), faqJsonLd([...HOME_FAQS])]} />
      <SiteShell />
    </>
  );
}
