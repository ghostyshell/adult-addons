import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Favicon preview - Adult Addons",
  robots: { index: false, follow: false },
};

const SIZES = [16, 32, 64, 128, 180] as const;

export default function IconPreviewPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <h1 className="text-2xl font-semibold tracking-tight">Favicon preview</h1>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/55">
        “A” monogram on near-black with a pink accent bar. Also check the browser tab on{" "}
        <Link href="/" className="text-[#ff375f] underline decoration-[#ff375f]/30 underline-offset-4">
          the home page
        </Link>
        .
      </p>

      <div className="mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {SIZES.map((size) => (
          <div
            key={size}
            className="rounded-2xl border border-white/8 bg-[#111] p-5 text-center"
          >
            <Image
              src="/icon.svg"
              alt=""
              width={size}
              height={size}
              unoptimized
              className="mx-auto mb-3"
              style={{ width: size, height: size, imageRendering: size <= 32 ? "pixelated" : "auto" }}
            />
            <span className="text-xs text-white/40">{size} × {size}</span>
          </div>
        ))}
      </div>

      <div className="mt-10 max-w-md rounded-t-xl border border-white/10 bg-[#1c1c1e] px-3 pt-3">
        <div className="inline-flex items-center gap-2 rounded-t-lg bg-[#2c2c2e] px-3.5 py-2 text-sm">
          <Image src="/icon.svg" alt="" width={16} height={16} unoptimized className="rounded-[3px]" />
          Adult Addons - Stremio &amp; Nuvio
        </div>
      </div>
    </main>
  );
}
