// ponytail: hardcoded defaults. Later replaced by dedicated backend endpoints
// (addon status, per-source status, issues, changelog). Shape kept typed so the
// fetch swap is a drop-in.

export type AddonStatusValue = "LIVE" | "DOWN" | "MAINTENANCE";

export interface SourceStatus {
  id: string;
  name: string;
  /** Short note shown under the source name (e.g. "Beta", "metadata browser"). */
  note?: string;
  status: AddonStatusValue;
  /** One-line detail, e.g. what the source provides. */
  detail: string;
}

export interface Issue {
  id: string;
  title: string;
  /** Current state: investigating, identified, monitoring, resolved. */
  status: string;
  summary: string;
  updatedAt: string;
}

export interface ChangelogEntry {
  version: string;
  date: string;
  highlights: string[];
}

export interface AddonStatusReport {
  addon: {
    id: string;
    name: string;
    status: AddonStatusValue;
    updatedAt: string;
  };
  sources: SourceStatus[];
  issues: Issue[];
  changelog: ChangelogEntry[];
}

export const TPB_ADDON_STATUS: AddonStatusReport = {
  addon: {
    id: "tpb-4k-porn",
    name: "TPB 4K Porn",
    status: "LIVE",
    updatedAt: "2026-06-25",
  },
  sources: [
    {
      id: "tpb",
      name: "TPB (HiddenBay)",
      status: "LIVE",
      detail: "4K & 1080p torrent catalogs, JAV search.",
    },
    {
      id: "pornrips",
      name: "Scenes (PornRips)",
      status: "LIVE",
      detail: "Scene releases with studio filters and TPDB metadata.",
    },
    {
      id: "hentai",
      name: "Hentai",
      status: "LIVE",
      detail: "Hentai series streamed as direct video episodes.",
    },
    {
      id: "sukebei",
      name: "Sukebei",
      note: "Beta",
      status: "LIVE",
      detail: "Sukebei Nyaa torrents, top and recent sorts.",
    },
    {
      id: "stripchat",
      name: "Stripchat",
      note: "Beta",
      status: "LIVE",
      detail: "Live cam catalogs (Girls, Couples, Guys, Trans) via HLS proxy.",
    },
    {
      id: "tpdb",
      name: "ThePornDB",
      status: "LIVE",
      detail: "Scene browser and optional TPDB/StashDB metadata.",
    },
  ],
  issues: [],
  changelog: [
    {
      version: "1.9.40",
      date: "2026-06-22",
      highlights: [
        "Added Stripchat HLS proxy with automatic key extraction and multi-quality streams.",
        "Fixed saved-config auth so account settings load across browsers and pods.",
        "Fixed Stripchat playback by decrypting HLS segment URLs.",
      ],
    },
    {
      version: "1.9.21",
      date: "2026-06-22",
      highlights: [
        "Added the Stripchat source with four live cam catalogs and username search.",
        "Added Account save/restore: AES-256-GCM encrypted addon settings in MongoDB.",
      ],
    },
    {
      version: "Unreleased",
      date: "In progress",
      highlights: [
        "PornRips stream resolution moved to the Go backend for shared infoHash caching.",
        "Documented Stripchat network white-label domains in the configure page.",
      ],
    },
  ],
};

export const STATUS_META: Record<
  AddonStatusValue,
  { label: string; dot: string; text: string; ring: string }
> = {
  LIVE: {
    label: "Live",
    dot: "bg-emerald-400",
    text: "text-emerald-300",
    ring: "border-emerald-400/30 bg-emerald-400/10",
  },
  DOWN: {
    label: "Down",
    dot: "bg-red-400",
    text: "text-red-300",
    ring: "border-red-400/30 bg-red-400/10",
  },
  MAINTENANCE: {
    label: "Maintenance",
    dot: "bg-amber-400",
    text: "text-amber-300",
    ring: "border-amber-400/30 bg-amber-400/10",
  },
};