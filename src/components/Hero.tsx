"use client";

import { useHeroAnimation } from "@/lib/gsap";

export default function Hero() {
  const heroRef = useHeroAnimation();

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[88vh] items-center overflow-hidden pt-14"
    >
      <div className="hero-glow pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,55,95,0.18)_0%,rgba(255,55,95,0.04)_45%,transparent_70%)] blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="hero-eyebrow mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#ff375f]">
          Stremio &amp; Nuvio · 18+
        </p>
        <h1 className="hero-title max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl">
          Stremio adult addons.
          <br />
          <span className="text-white/55">Curated.</span>
        </h1>
        <p className="hero-subtitle mt-6 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">
          NSFW and porn Stremio addons with one-click install links, manifests, and debrid-ready
          catalogs for Stremio and Nuvio.
        </p>
        <div className="hero-actions mt-10 flex flex-wrap gap-3">
          <a
            href="#featured"
            className="inline-flex items-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Browse Stremio addons
          </a>
          <a
            href="/guide"
            className="inline-flex items-center rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white/85 transition hover:border-white/30 hover:text-white"
          >
            Install guide
          </a>
        </div>
      </div>
    </section>
  );
}
