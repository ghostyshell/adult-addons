"use client";

import type { Addon } from "@/lib/addons";
import { useScrollFadeIn } from "@/lib/gsap";

interface AddonGridProps {
  addons: Addon[];
  onAddAddon: () => void;
}

export default function AddonGrid({ addons, onAddAddon }: AddonGridProps) {
  const sectionRef = useScrollFadeIn({ y: 28, stagger: 0.08 });

  return (
    <section className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
              Directory
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              More addons soon
            </h2>
          </div>
          <button
            type="button"
            onClick={onAddAddon}
            className="inline-flex items-center self-start rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/80 transition hover:border-white/30 hover:text-white"
          >
            + Submit an addon
          </button>
        </div>

        <div ref={sectionRef} className="grid gap-4 sm:grid-cols-2">
          {addons.map((addon) => (
            <article
              key={addon.id}
              className="rounded-3xl border border-white/8 bg-white/[0.03] p-6 transition hover:border-white/14 hover:bg-white/[0.05]"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">{addon.name}</h3>
                {addon.comingSoon && (
                  <span className="rounded-full bg-white/8 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/50">
                    Coming soon
                  </span>
                )}
              </div>
              <p className="text-sm leading-relaxed text-white/55">{addon.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
