# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

- `npm run dev` — Start dev server with hot reload
- `npm run build` — Production build (standalone output for Docker)
- `npm run start` — Run production server
- `npm run lint` — ESLint with Next.js core-web-vitals + TypeScript rules

## Architecture

Next.js 16 landing page for "Agent Office" — a pixel-art virtual office for AI agent teams. Static site with no API routes, no database, no server-side data fetching.

**Internationalization:** Client-side DE/EN switching via React Context (`src/context/LangContext.tsx`). All strings live in a single translation object in `src/lib/i18n.ts`. Components call `useLang()` to get `lang`, `toggle()`, and `t()` (translation helper with German fallback).

**Page composition:** `src/app/page.tsx` is a `"use client"` component that wraps all sections in `LangProvider`. Layout (`src/app/layout.tsx`) is a server component that sets metadata and loads Google Fonts (Montserrat for headings, Roboto for body).

**Design system:** Neo-brutalism with pixel-art aesthetic. Custom utilities defined in `src/app/globals.css`:
- Brand colors: `brand-black`, `brand-white`, `brand-yellow`, `brand-purple`, `brand-teal`, `brand-gray`, `brand-dark`
- Shadow classes: `.shadow-neo`, `.shadow-neo-sm`, `.shadow-neo-lg`, `.shadow-neo-hover`
- `.border-neo` — 3px solid black borders
- Pixel grid background and checkerboard floor patterns
- Float/blink animations

**Styling:** Tailwind CSS v4 via `@tailwindcss/postcss` plugin. Theme colors and font families defined in `@theme inline` block in globals.css.

**Path alias:** `@/*` maps to `./src/*`.

## Deployment

- **Docker:** Multi-stage build (`node:22-bookworm-slim`), standalone Next.js output, runs as non-root `nextjs` user on port 3000
- **CI/CD:** GitHub Actions on push to `main` → build & push to `ghcr.io/fwartner/clawd-office-landing` → update image tag in GitOps repo (`fwartner/pixelandprocess-gitops` at `apps/agency/clawd-office-landing/values.yaml`)
- **Hosting:** Hetzner k8s cluster via ArgoCD, Traefik ingress, cert-manager (letsencrypt-prod), ExternalDNS for Cloudflare
- **URL:** `https://pixel-office.pixelandprocess.de`

## Remote Images

Images are loaded from `https://raw.githubusercontent.com/fwartner/clawd-office/**` — configured in `next.config.ts` remotePatterns.
