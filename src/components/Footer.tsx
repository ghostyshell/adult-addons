import Link from "next/link";
import { COMMUNITY_LINKS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">Adult Addons</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/50">
              Curated Stremio adult addons, Stremio NSFW addons, and Stremio porn addons for viewers 18
              and older.{" "}
              <Link
                href="/guide"
                className="text-white/65 underline decoration-white/20 underline-offset-4 hover:text-white/85"
              >
                Install guide
              </Link>
            </p>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
              Community
            </p>
            <ul className="flex flex-col gap-2 sm:flex-row sm:gap-4">
              {COMMUNITY_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/65 transition hover:text-white/85"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-8 text-xs text-white/35">
          Not affiliated with Stremio, Nuvio, or stremio-addons.net.
        </p>
      </div>
    </footer>
  );
}
