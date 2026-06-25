"use client";

import { useSyncExternalStore } from "react";
import {
  hasAgeConsent,
  setAgeConsent,
  subscribeAgeGate,
} from "@/lib/age-gate";

export default function AgeGate({ children }: { children: React.ReactNode }) {
  const verified = useSyncExternalStore(subscribeAgeGate, hasAgeConsent, () => false);

  function handleConfirm() {
    setAgeConsent();
  }

  function handleLeave() {
    window.location.href = "https://www.google.com";
  }

  return (
    <>
      <div className={verified ? "" : "pointer-events-none select-none blur-xl"}>
        {children}
      </div>

      {!verified && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="age-gate-title"
        >
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#111111]/95 p-8 shadow-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff375f]">
              18+ Only
            </p>
            <h2 id="age-gate-title" className="mb-3 text-2xl font-semibold tracking-tight text-white">
              Adult content ahead
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-white/65">
              This site lists Stremio and Nuvio addons intended for adults. You must be at least
              18 years old to continue.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleConfirm}
                className="flex-1 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                I am 18 or older
              </button>
              <button
                type="button"
                onClick={handleLeave}
                className="flex-1 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
              >
                Leave
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
