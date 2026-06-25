<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# adult-addons Agent Guide

## Purpose

Public showcase site for adult Stremio and Nuvio addons, similar in spirit to stremio-addons.net but 18+ only. Features **TPB 4K Porn** (`https://tpb-adult-addon.click`) front and centre; additional listings and submission flows are stubbed as "Coming soon".

## Architecture

Next.js 16 App Router single-page marketing site with client-side age gate (`sessionStorage`), GSAP motion, and Tailwind CSS v4.

| Route | Purpose |
|---|---|
| `/` | Age gate + hero + featured addon + SEO FAQ + placeholder grid |
| `/guide` | Install guide for Stremio adult/NSFW/porn addons |

## Key Conventions

- **Server Components** for `layout.tsx`, `page.tsx`, `robots.ts`.
- **Client Components** (`'use client'`) for age gate, GSAP animations, modals, and header interactions.
- **GSAP** via hooks in `src/lib/gsap.ts` — always clean up with `gsap.context().revert()`.
- **Tailwind CSS v4** — no CSS modules. Apple-like dark aesthetic: black background, `#f5f5f7` text, `#ff375f` accent.
- **Addon data** in `src/lib/addons.ts`; Stremio install URLs in `src/lib/stremio.ts`.
- **Age gate** uses `sessionStorage` key `adult-addons-age-verified` (per-tab, not persistent across sessions).
- **SEO**: `robots.ts` and metadata allow indexing; `/sitemap.xml` route handler serves the sitemap (update `src/app/sitemap.xml/route.ts` when adding pages). Target keywords: Stremio adult/NSFW/porn addons. JSON-LD on `/` and `/guide`. Run `npm run seo:submit` after deploy for IndexNow. Set `GOOGLE_SITE_VERIFICATION` / `BING_SITE_VERIFICATION` in deploy env for Search Console. Standalone deploys need `npm run copy-standalone-assets` (runs automatically after build).

## Design Guidelines

Follow the same agent skills as `next-sites` — see `.cursor/rules/ai-guidelines.md`.

- **Stagecraft / Apple-like**: restrained motion, large type, generous whitespace, one focal region per section.
- **Humanizer + no-em-dashes**: run on user-facing copy before shipping (`.cursor/rules/humanizer.mdc`, `.cursor/rules/no-em-dashes.mdc`; skill at `~/.claude/skills/humanizer`).
- **Accessibility**: dialog roles, labelled buttons, focus states, sufficient contrast on dark UI.
- **Motion with purpose**: hero timeline + scroll reveals; keep durations under 1s for micro-interactions.

## Directory Layout

```
src/
  app/              # Next.js App Router
  components/       # Age gate, hero, featured addon, modals
  lib/              # addons data, stremio URLs, gsap hooks, age gate
  __tests__/        # Jest unit tests
.cursor/rules/      # Cursor remote rules (GSAP, design, graphify, humanizer, no-em-dashes)
.claude/            # Claude Code configuration
```

## Testing

```bash
npm test
npm run test:watch
npm run test:coverage
```

Mock GSAP in component tests if ScrollTrigger causes issues in jsdom.

## Adding a New Addon

1. Add an entry to `src/lib/addons.ts`.
2. If featured, update `FEATURED_ADDON` or add a dedicated section component.
3. Wire install URL via `stremioInstallUrl(host, manifestPath)`.
4. Add tests for any new URL helpers or gating logic.

## Featured Addon

- **Name**: TPB 4K Porn
- **Host**: https://tpb-adult-addon.click
- **Configure**: https://tpb-adult-addon.click/configure
- **Install**: Stremio web shell deep link built by `stremioInstallUrl()`
