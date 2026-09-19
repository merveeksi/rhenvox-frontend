# Rhenvox website

Corporate website for Rhenvox LTD.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Bun

## Local development

```bash
bun install
bun run bun-dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
bun run bun-build
bun run start
```

`next.config.ts` uses `output: "standalone"` for container deploys.

## Public routes

- `/` — home
- `/work` — work index
- `/work/nur-bilgi` — Nur Bilgi case study
- `/services`
- `/about`
- `/contact`
- `/privacy`, `/terms`, `/kvkk`

Legacy redirects: `/portfolio` → `/work`, `/blog` → `/`, `/careers` → `/`.

Language switching is client-side (English/Turkish). There are no separate `/en` or `/tr` URLs.
