import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import { FEATURED_ADDON } from "@/lib/addons";
import { manifestUrl, stremioInstallUrl } from "@/lib/stremio";
import { STATUS_META, TPB_ADDON_STATUS } from "@/lib/tpb-status";

export const metadata: Metadata = pageMetadata(
  "TPB 4K Porn - Stremio Adult Addon Status & Features",
  "TPB 4K Porn Stremio addon: features, live status per source (TPB, PornRips, Hentai, Sukebei, Stripchat, ThePornDB), known issues, and changelog. 4K & 1080p adult torrent catalogs with debrid support.",
  "/tpb-4k-porn",
);

const PAGE_FAQS = [
  {
    question: "Is the TPB 4K Porn Stremio addon working right now?",
    answer:
      "Yes. The addon and all of its sources (TPB/HiddenBay, PornRips scenes, Hentai, Sukebei, Stripchat, ThePornDB) are live. Check the status section on this page for the current state of each source.",
  },
  {
    question: "What sources does TPB 4K Porn include?",
    answer:
      "4K and 1080p torrent catalogs from TPB/HiddenBay, PornRips scene releases, Hentai episode series, Sukebei torrents (beta), Stripchat live cam catalogs (beta), and a ThePornDB scene browser with optional TPDB/StashDB metadata.",
  },
  {
    question: "Which debrid providers does TPB 4K Porn support?",
    answer:
      "Real-Debrid, AllDebrid, TorBox, Premiumize, EasyDebrid, Debrid-Link, Offcloud, Put.io, Deepbrid, LinkSnappy, Mega-Debrid, Debrider, Seedr, and PikPak. Torrent P2P playback also works without a debrid account.",
  },
];

export default function TpbAddonPage() {
  const addon = FEATURED_ADDON;
  const installUrl = stremioInstallUrl(addon.host, addon.manifestPath);
  const configureUrl = `${addon.host.replace(/\/$/, "")}/configure`;
  const hostUrl = manifestUrl(addon.host, addon.manifestPath);
  const overall = STATUS_META[TPB_ADDON_STATUS.addon.status];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "TPB 4K Porn", path: "/tpb-4k-porn" },
          ]),
          faqJsonLd(PAGE_FAQS),
        ]}
      />
      <div className="min-h-screen bg-black text-white">
        <header className="border-b border-white/8">
          <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4 sm:px-6">
            <Link href="/" className="text-sm font-semibold tracking-tight text-white">
              Adult Addons
            </Link>
            <Link
              href="/#featured"
              className="text-sm text-white/70 transition hover:text-white"
            >
              Back to directory
            </Link>
          </div>
        </header>

        <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#ff375f]">
            Addon
          </p>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {addon.name}
          </h1>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/60">
            {addon.description}
          </p>

          <div className="mb-16 flex flex-col gap-3 sm:flex-row">
            <a
              href={installUrl}
              className="inline-flex items-center justify-center rounded-full bg-[#ff375f] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#ff4f73]"
            >
              Add to Stremio
            </a>
            <a
              href={configureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-3.5 text-sm font-semibold text-white/85 transition hover:border-white/30 hover:text-white"
            >
              Configure
            </a>
            <a
              href={hostUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-8 py-3.5 text-sm font-medium text-white/60 transition hover:text-white/85"
            >
              Manifest
            </a>
          </div>

          {/* Features */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-semibold text-white">Features</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-white/8 bg-white/[0.02] p-6"
                >
                  <h3 className="text-base font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{f.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Status */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-semibold text-white">Status</h2>
            <div
              className={`mb-6 flex items-center gap-3 rounded-2xl border ${overall.ring} px-6 py-4`}
            >
              <span className={`h-2.5 w-2.5 rounded-full ${overall.dot}`} />
              <p className="text-sm font-medium text-white">
                Addon:{" "}
                <span className={overall.text}>{overall.label}</span>
              </p>
              <span className="ml-auto text-xs text-white/40">
                Updated {TPB_ADDON_STATUS.addon.updatedAt}
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/8">
              {TPB_ADDON_STATUS.sources.map((source, i) => {
                const meta = STATUS_META[source.status];
                return (
                  <div
                    key={source.id}
                    className={`flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:justify-between ${
                      i > 0 ? "border-t border-white/8" : ""
                    }`}
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {source.name}
                        {source.note ? (
                          <span className="ml-2 rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white/55">
                            {source.note}
                          </span>
                        ) : null}
                      </p>
                      <p className="mt-1 text-sm text-white/55">{source.detail}</p>
                    </div>
                    <span
                      className={`inline-flex items-center gap-2 self-start rounded-full border ${meta.ring} px-3 py-1 text-xs font-medium ${meta.text}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
                      {meta.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Issues */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-semibold text-white">Known issues</h2>
            {TPB_ADDON_STATUS.issues.length === 0 ? (
              <div className="rounded-2xl border border-white/8 bg-white/[0.02] px-6 py-10 text-center">
                <p className="text-sm text-white/55">
                  No known issues. All sources are operating normally.
                </p>
              </div>
            ) : (
              <div className="divide-y divide-white/8 rounded-2xl border border-white/8">
                {TPB_ADDON_STATUS.issues.map((issue) => (
                  <div key={issue.id} className="px-6 py-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-sm font-semibold text-white">{issue.title}</p>
                      <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white/70">
                        {issue.status}
                      </span>
                      <span className="ml-auto text-xs text-white/40">
                        Updated {issue.updatedAt}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {issue.summary}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Changelog */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-semibold text-white">Changelog</h2>
            <div className="space-y-6">
              {TPB_ADDON_STATUS.changelog.map((entry) => (
                <div
                  key={entry.version}
                  className="rounded-2xl border border-white/8 bg-white/[0.02] p-6"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <p className="text-sm font-semibold text-white">
                      {entry.version}
                    </p>
                    <span className="text-xs text-white/40">{entry.date}</span>
                  </div>
                  <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-white/60">
                    {entry.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 border-t border-white/8 pt-16">
            <h2 className="mb-8 text-2xl font-semibold text-white">More questions</h2>
            <dl className="divide-y divide-white/8 rounded-3xl border border-white/8 bg-white/[0.02]">
              {PAGE_FAQS.map((faq) => (
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

const FEATURES = [
  {
    title: "4K & 1080p torrent catalogs",
    body: "Browse ThePirateBay and HiddenBay adult releases in 4K and 1080p, with JAV title and studio search baked into Discover.",
  },
  {
    title: "Debrid-ready playback",
    body: "Real-Debrid, AllDebrid, TorBox, Premiumize, and 10+ more providers for cached, instant streams. P2P torrent playback works without a debrid account.",
  },
  {
    title: "Scene releases with metadata",
    body: "PornRips scene catalogs with studio filters and optional ThePornDB and StashDB metadata for posters, cast, and tags.",
  },
  {
    title: "Hentai episodes",
    body: "Hentai series streamed as direct video episodes, plus Sukebei Nyaa torrents (beta) with top and recent sorts.",
  },
  {
    title: "Stripchat live cams",
    body: "Four live cam catalogs (Girls, Couples, Guys, Trans) with username search and multi-quality HLS via a dedicated proxy (beta).",
  },
  {
    title: "Stremio and Nuvio compatible",
    body: "Works in Stremio on desktop, mobile, and TV. Nuvio and other Stremio-addon clients can use the same manifest URL (debrid only).",
  },
];