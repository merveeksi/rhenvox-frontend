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
bun install --frozen-lockfile
bun run bun-dev
```

Open [http://localhost:3000](http://localhost:3000). `bun run dev` is the same Next.js dev server without the Bun runtime flag.

## Local production verification

```bash
bunx tsc --noEmit
bun run lint
bun run build
bun run start
```

`bun run start` runs `next start` and is for local verification of the production build. Next.js warns that `next start` is not the standalone server.

## Docker

```bash
docker compose up --build
```

Run that in the `rhenvox-frontend` project folder. Docker Desktop then shows a container named `rhenvox-frontend`. Open [http://localhost:3000](http://localhost:3000). Compose builds the production image from the Dockerfile and publishes port 3000. The container does not appear in Docker Desktop until this command has been run on that machine.

`next.config.ts` sets `output: "standalone"`. The Dockerfile copies `.next/standalone` and `.next/static`, then starts the app with `node server.js`. That is the production container command, not `bun run start`.

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
