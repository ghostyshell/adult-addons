export type AddonPlatform = "stremio" | "nuvio" | "both";

export interface Addon {
  id: string;
  name: string;
  description: string;
  host: string;
  manifestPath?: string;
  version?: string;
  platforms: AddonPlatform[];
  tags: string[];
  featured?: boolean;
  comingSoon?: boolean;
}

export const FEATURED_ADDON: Addon = {
  id: "tpb-4k-porn",
  name: "TPB 4K Porn",
  description:
    "4K & 1080p adult torrent catalogs from ThePirateBay, PornRips, and more. JAV search, Hentai episodes, optional TPDB/theStashDB metadata. Real-Debrid, AllDebrid, TorBox, and other debrid providers supported.",
  host: "https://tpb-adult-addon.click",
  manifestPath: "/manifest.json",
  version: "latest",
  platforms: ["both"],
  tags: ["torrents", "4k", "debrid", "tpb", "pornrips", "hentai"],
  featured: true,
};

export const PLACEHOLDER_ADDONS: Addon[] = [
  {
    id: "coming-soon-1",
    name: "More Addons",
    description: "Additional adult Stremio and Nuvio addons will be listed here.",
    host: "",
    platforms: ["both"],
    tags: ["coming soon"],
    comingSoon: true,
  },
];

export const ALL_ADDONS: Addon[] = [FEATURED_ADDON, ...PLACEHOLDER_ADDONS];
