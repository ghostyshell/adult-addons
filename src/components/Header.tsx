"use client";

import Link from "next/link";
import { useHeaderScroll } from "@/lib/gsap";

interface HeaderProps {
  onAddAddon: () => void;
}

export default function Header({ onAddAddon }: HeaderProps) {
  const headerRef = useHeaderScroll();

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent transition-[background,border-color] duration-300"
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-sm font-semibold tracking-tight text-white">
          Adult Addons
        </Link>
        <nav className="flex items-center gap-3">
          <a
            href="/guide"
            className="hidden text-sm text-white/70 transition hover:text-white sm:inline"
          >
            Guide
          </a>
          <a
            href="#featured"
            className="hidden text-sm text-white/70 transition hover:text-white sm:inline"
          >
            Featured
          </a>
          <button
            type="button"
            onClick={onAddAddon}
            className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            + Add Addon
          </button>
        </nav>
      </div>
    </header>
  );
}
