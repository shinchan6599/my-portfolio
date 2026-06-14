# Dhyey Bhansali — Portfolio

Personal website of Dhyey Bhansali: software engineer & tech lead, competitive programmer, FIDE-rated chess player, and traveler across 24 countries.

Live URL is configured via the `NEXT_PUBLIC_SITE_URL` env var (auto-detects the Vercel production domain otherwise).

## Tech stack

- **Next.js 15** (App Router, Turbopack) + **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** for animation (respects `prefers-reduced-motion`)
- **d3-geo** for the interactive travel world map
- Deployed on **Vercel** (Analytics + Speed Insights)

## Features

- **Live integrations** — self-updating stats pulled from public APIs:
  - Chess.com ratings & recent games (`/api/chess`)
  - GitHub profile, top repos & contribution graph (`/api/github`)
  - Competitive programming: LeetCode, Codeforces, CodeChef (`/api/cp`)
- **Travel** — interactive world map, animated stats, search/filter/grouping,
  and per-country photo galleries with a keyboard-navigable lightbox.
- **SEO** — per-page metadata, `sitemap.xml`, `robots.txt`, dynamic OpenGraph
  images, and `Person` JSON-LD.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Useful scripts

```bash
npm run build    # production build
npm run lint     # eslint

# One-off media optimizer (resize + recompress images in place)
node scripts/compress-images.mjs
```

## Configuration

| Env var                | Purpose                                                        |
| ---------------------- | -------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for metadata/sitemap (custom domains).      |
| `GITHUB_TOKEN`         | Optional — raises the GitHub API rate limit for `/api/github`. |

## Project layout

```
src/
  app/
    api/            # chess, github, cp data routes (1h cached)
    travel/         # listing, data, gallery, [countryId] detail pages
    <route>/        # page.tsx (server, metadata) + *Content.tsx (client UI)
    sitemap.ts, robots.ts, opengraph-image.tsx
  components/       # Hero, Navbar, widgets (chess, GitHub, CP, world map…)
  lib/site.ts       # shared site URL / name / description
```
