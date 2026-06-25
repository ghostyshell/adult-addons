"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export function useHeroAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-eyebrow", { opacity: 0, y: -16, duration: 0.5 })
        .from(".hero-title", { opacity: 0, y: 48, duration: 1 }, "-=0.2")
        .from(".hero-subtitle", { opacity: 0, y: 32, duration: 0.8 }, "-=0.55")
        .from(".hero-actions", { opacity: 0, y: 24, duration: 0.6 }, "-=0.45")
        .from(".hero-glow", { opacity: 0, scale: 0.9, duration: 1.2 }, "-=0.8");
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
}

export function useScrollFadeIn(options?: {
  y?: number;
  duration?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { y = 32, duration = 0.8, stagger = 0.12 } = options || {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.children.length > 1 ? Array.from(el.children) : [el];
    gsap.set(children, { opacity: 0, y });

    const ctx = gsap.context(() => {
      gsap.to(children, {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, [y, duration, stagger]);

  return ref;
}

export function useHeaderScroll() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: "top -60",
        end: 99999,
        onUpdate: (self) => {
          el.classList.toggle("header-scrolled", self.isActive);
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return ref;
}

export function useModalAnimation(open: boolean) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const backdrop = backdropRef.current;
    const panel = panelRef.current;
    if (!backdrop || !panel) return;

    const ctx = gsap.context(() => {
      if (open) {
        gsap.set(backdrop, { display: "flex" });
        gsap.fromTo(
          backdrop,
          { opacity: 0 },
          { opacity: 1, duration: 0.35, ease: "power2.out" },
        );
        gsap.fromTo(
          panel,
          { opacity: 0, y: 24, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power3.out", delay: 0.05 },
        );
      } else {
        gsap.to(panel, {
          opacity: 0,
          y: 16,
          scale: 0.98,
          duration: 0.25,
          ease: "power2.in",
        });
        gsap.to(backdrop, {
          opacity: 0,
          duration: 0.25,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(backdrop, { display: "none" });
          },
        });
      }
    });

    return () => ctx.revert();
  }, [open]);

  return { backdropRef, panelRef };
}
