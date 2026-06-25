import Link from "next/link";
import { HOME_FAQS } from "@/lib/seo";

export default function SeoSection() {
  return (
    <section id="faq" className="border-t border-white/8 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#ff375f]">
          Stremio adult addons
        </p>
        <h2 className="mb-6 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Stremio NSFW, adult, and porn addons in one place
        </h2>
        <div className="mb-16 grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-base leading-relaxed text-white/60">
            <p>
              Looking for <strong className="font-medium text-white/80">Stremio adult addons</strong>,
              <strong className="font-medium text-white/80"> Stremio NSFW addons</strong>, or a reliable{" "}
              <strong className="font-medium text-white/80">Stremio porn addon</strong>? Adult Addons is a
              curated directory of 18+ Stremio and Nuvio extensions with install links, manifests, and
              configure pages.
            </p>
            <p>
              Our featured <strong className="font-medium text-white/80">TPB 4K Porn</strong> addon
              indexes adult torrent catalogs from ThePirateBay, PornRips, Hentai, and JAV sources in 4K
              and 1080p. It supports Real-Debrid, AllDebrid, TorBox, and direct P2P playback.
            </p>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-white/60">
            <p>
              Unlike scattered Reddit threads or GitHub READMEs, this site gives you verified manifest
              URLs and one-click Stremio install links for each adult addon. Every listing is checked for
              Stremio and Nuvio compatibility.
            </p>
            <p>
              New to Stremio 18+ addons? Read our{" "}
              <Link
                href="/guide"
                className="font-medium text-white/85 underline decoration-white/25 underline-offset-4 transition hover:text-white"
              >
                install guide
              </Link>{" "}
              for step-by-step setup, debrid configuration, and troubleshooting.
            </p>
          </div>
        </div>

        <div className="mb-10 flex items-end justify-between gap-4">
          <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Frequently asked questions
          </h3>
        </div>
        <dl className="divide-y divide-white/8 rounded-3xl border border-white/8 bg-white/[0.02]">
          {HOME_FAQS.map((faq) => (
            <div key={faq.question} className="px-6 py-6 sm:px-8">
              <dt className="text-base font-semibold text-white">{faq.question}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
