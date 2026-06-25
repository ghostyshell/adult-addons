"use client";

import { useState } from "react";
import AgeGate from "@/components/AgeGate";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturedAddon from "@/components/FeaturedAddon";
import AddonGrid from "@/components/AddonGrid";
import ComingSoonModal from "@/components/ComingSoonModal";
import SeoSection from "@/components/SeoSection";
import { FEATURED_ADDON, PLACEHOLDER_ADDONS } from "@/lib/addons";

export default function SiteShell() {
  const [comingSoonOpen, setComingSoonOpen] = useState(false);

  return (
    <AgeGate>
      <div className="min-h-screen bg-black text-white">
        <Header onAddAddon={() => setComingSoonOpen(true)} />
        <main>
          <Hero />
          <FeaturedAddon addon={FEATURED_ADDON} />
          <AddonGrid addons={PLACEHOLDER_ADDONS} onAddAddon={() => setComingSoonOpen(true)} />
          <SeoSection />
        </main>
        <Footer />
        <ComingSoonModal open={comingSoonOpen} onClose={() => setComingSoonOpen(false)} />
      </div>
    </AgeGate>
  );
}
