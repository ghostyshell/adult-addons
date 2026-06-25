"use client";

import { useModalAnimation } from "@/lib/gsap";

interface ComingSoonModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ComingSoonModal({ open, onClose }: ComingSoonModalProps) {
  const { backdropRef, panelRef } = useModalAnimation(open);

  if (!open) return null;

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="coming-soon-title"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        className="w-full max-w-sm rounded-3xl border border-white/10 bg-[#141414] p-8 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff375f]">
          Coming soon
        </p>
        <h2 id="coming-soon-title" className="mb-3 text-xl font-semibold text-white">
          Addon submissions
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-white/60">
          Submissions are not open yet. Use the featured TPB addon below for now.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
