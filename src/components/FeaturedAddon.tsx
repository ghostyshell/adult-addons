"use client";

import Link from "next/link";
import type { Addon } from "@/lib/addons";
import { manifestUrl, stremioInstallUrl } from "@/lib/stremio";
import { useScrollFadeIn } from "@/lib/gsap";

interface FeaturedAddonProps {
  addon: Addon;
}

export default function FeaturedAddon({ addon }: FeaturedAddonProps) {
  const sectionRef = useScrollFadeIn({ y: 40, stagger: 0.1 });
  const installUrl = stremioInstallUrl(addon.host, addon.manifestPath);
  const configureUrl = `${addon.host.replace(/\/$/, "")}/configure`;
  const hostUrl = manifestUrl(addon.host, addon.manifestPath);

  return (
    <section id="featured" className="py-24 sm:py-32">
      <div ref={sectionRef} className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#ff375f]">
          Featured
        </p>
        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {addon.name}
        </h2>
        <p className="mb-10 max-w-3xl text-base leading-relaxed text-white/60 sm:text-lg">
          {addon.description}
        </p>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex flex-wrap gap-2">
                {addon.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-white/45">
                Hosted at{" "}
                <a
                  href={addon.host}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 underline decoration-white/20 underline-offset-4 transition hover:text-white"
                >
                  {addon.host.replace(/^https?:\/\//, "")}
                </a>
              </p>
              <p className="mt-4 text-sm text-white/45">
                <Link
                  href="/tpb-4k-porn"
                  className="text-white/70 underline decoration-white/20 underline-offset-4 transition hover:text-white"
                >
                  View addon page
                </Link>{" "}
                for features, live source status, known issues, and changelog.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
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
          </div>

          <div className="mt-8 grid gap-4 border-t border-white/8 pt-8 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-wider text-white/35">Platforms</p>
              <p className="mt-1 text-sm text-white/75">Stremio · Nuvio (debrid)</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-white/35">Sources</p>
              <p className="mt-1 text-sm text-white/75">TPB · PornRips · Hentai</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-white/35">Playback</p>
              <p className="mt-1 text-sm text-white/75">P2P &amp; debrid providers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
