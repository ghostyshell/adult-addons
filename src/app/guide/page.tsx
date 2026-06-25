import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import { FEATURED_ADDON } from "@/lib/addons";
import { stremioInstallUrl } from "@/lib/stremio";

export const metadata: Metadata = pageMetadata(
  "How to Install Stremio Adult & NSFW Addons",
  "Step-by-step guide to installing Stremio adult addons, Stremio NSFW addons, and Stremio porn addons. Configure debrid, use manifest URLs, and add TPB 4K Porn to Stremio or Nuvio.",
  "/guide",
);

const GUIDE_FAQS = [
  {
    question: "Where do I find Stremio porn addons?",
    answer:
      "Community Stremio porn addons are not in the official Stremio catalog. Directories like adult-addons.click and community lists such as stremio-addons.net list verified 18+ addons with install links.",
  },
  {
    question: "How do I add a Stremio NSFW addon by URL?",
    answer:
      "Open Stremio, go to the puzzle icon (Add-ons), scroll to the bottom, and choose Install via URL. Paste the manifest URL from the addon page (for example, the TPB 4K Porn manifest at tpb-adult-addon.click/manifest.json).",
  },
  {
    question: "Should I configure debrid before installing an adult Stremio addon?",
    answer:
      "If you use Real-Debrid, AllDebrid, or TorBox, open the addon Configure page first, add your API token, save, then install via the generated manifest URL or Add to Stremio button.",
  },
  {
    question: "Do Stremio adult addons work on mobile and TV?",
    answer:
      "Yes. After installing on your Stremio account, adult addons sync across Stremio apps on desktop, mobile, and TV. Nuvio and other Stremio-compatible clients can use the same manifest URL.",
  },
];

export default function GuidePage() {
  const installUrl = stremioInstallUrl(FEATURED_ADDON.host, FEATURED_ADDON.manifestPath);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Install Guide", path: "/guide" },
          ]),
          faqJsonLd(GUIDE_FAQS),
        ]}
      />
      <div className="min-h-screen bg-black text-white">
        <header className="border-b border-white/8">
          <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6">
            <Link href="/" className="text-sm font-semibold tracking-tight text-white">
              Adult Addons
            </Link>
            <Link
              href="/#featured"
              className="text-sm text-white/70 transition hover:text-white"
            >
              Featured addon
            </Link>
          </div>
        </header>

        <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#ff375f]">
            Install guide
          </p>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            How to install Stremio adult, NSFW, and porn addons
          </h1>
          <p className="mb-12 text-lg leading-relaxed text-white/60">
            This guide covers installing Stremio 18+ addons from manifest URLs, configuring debrid for
            instant streams, and adding our featured TPB 4K Porn Stremio addon.
          </p>

          <article className="prose-invert space-y-10 text-white/65">
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                1. Pick a Stremio adult addon
              </h2>
              <p className="leading-relaxed">
                Browse the{" "}
                <Link href="/" className="text-white/85 underline decoration-white/25 underline-offset-4">
                  homepage directory
                </Link>{" "}
                for curated Stremio NSFW addons. Each listing includes a manifest URL, configure page, and
                one-click install link. TPB 4K Porn is the recommended Stremio porn addon for 4K torrent
                catalogs and debrid playback.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                2. Configure debrid (optional)
              </h2>
              <p className="leading-relaxed">
                For cached streaming, open the addon configure page before installing. Add your Real-Debrid,
                AllDebrid, or TorBox token, choose catalogs, then save. The configure page generates a
                personalized manifest URL tied to your settings.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                3. Install in Stremio or Nuvio
              </h2>
              <p className="mb-4 leading-relaxed">Two common methods:</p>
              <ul className="list-disc space-y-2 pl-5 leading-relaxed">
                <li>
                  <strong className="text-white/85">One-click:</strong> use the Add to Stremio button on
                  the addon page.
                </li>
                <li>
                  <strong className="text-white/85">Manual URL:</strong> in Stremio, open Add-ons, choose
                  Install via URL, and paste the manifest link.
                </li>
              </ul>
              <p className="mt-6">
                <a
                  href={installUrl}
                  className="inline-flex items-center rounded-full bg-[#ff375f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ff4f73]"
                >
                  Install TPB 4K Porn in Stremio
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                4. Browse adult catalogs in Discover
              </h2>
              <p className="leading-relaxed">
                After install, open Discover in Stremio to browse adult, NSFW, and porn catalogs added by
                the addon. Use search for JAV titles, studio names, or Hentai series. Streams may appear as
                torrent or debrid depending on your configure settings.
              </p>
            </section>
          </article>

          <section className="mt-16 border-t border-white/8 pt-16">
            <h2 className="mb-8 text-2xl font-semibold text-white">More questions</h2>
            <dl className="divide-y divide-white/8 rounded-3xl border border-white/8 bg-white/[0.02]">
              {GUIDE_FAQS.map((faq) => (
                <div key={faq.question} className="px-6 py-6 sm:px-8">
                  <dt className="text-base font-semibold text-white">{faq.question}</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </main>
      </div>
    </>
  );
}
