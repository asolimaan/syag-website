# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Astro dev server
npm run build    # Production build (output to dist/)
npm run preview  # Preview production build locally
```

No test or lint scripts are configured.

## Architecture

This is a **marketing/landing page** for SYAG, a B2B SaaS physical security operations platform. Built with Astro 5 (static site generation) + React 18 islands for interactivity.

**Key pattern**: Astro `.astro` files handle layout/structure (server-rendered, zero JS by default). React `.tsx` components are used selectively for interactive UI (forms, animations) via Astro's island architecture — they must be explicitly hydrated with a `client:*` directive in `.astro` files.

**Entry point**: `src/pages/index.astro` — the single landing page (~517 lines).

**Interactive components**:

- `src/components/DemoForm.tsx` — demo request form using react-hook-form
- `src/components/HeroMotion.tsx` — animated hero section using Framer Motion (currently unused in main page)

**Reusable UI**:

- `src/components/ui/button.tsx` — CVA-based Button with variants: `primary`, `accent`, `outline`
- `src/components/ui/card.tsx` — simple Card wrapper
- `src/lib/utils.ts` — exports `cn()` (clsx + tailwind-merge) for safe Tailwind class composition

## Styling System

Tailwind CSS with a custom dark theme. Custom classes are defined in `src/styles/global.css`:

- `.quartr-surface` — full-page dark gradient with noise overlay
- `.glass-card` — frosted glass effect (semi-transparent background, blur, border)
- `.hero-section` — full-width video background with dark overlay
- `.insight-card` / `.insight-grid` — responsive grid cards for use case sections
- `.quartr-heading` / `.quartr-body` — typography utilities

**Custom Tailwind theme** (in `tailwind.config.cjs`):

- Colors: `navy` (#0A1628), `electric` (#2F7BFF), `cyan` (#35E0FF), `slate` (#94A3B8)
- Fonts: Space Grotesk (headings), IBM Plex Sans (body)
- Shadows: `soft` and `card` — both navy-tinted

Opacity modifiers are used extensively (e.g. `text-white/60`, `bg-white/10`).

## Component & Markup Rules

- Never add React components for static content — use `.astro` markup directly
- All interactive components require a `client:*` directive when used in `.astro` files
- The `DemoForm.tsx` `onSubmit` currently just logs — wire it to a real endpoint before launch
- Buttons in `.astro` files use raw HTML; only use `<Button>` from `ui/button.tsx` inside React components

## Styling Rules

- Always use `cn()` from `src/lib/utils.ts` when conditionally combining Tailwind classes in TSX
- Prefer existing custom classes (`glass-card`, `insight-card`, `quartr-heading`) over re-implementing their styles inline
- Use opacity modifiers (`text-white/60`) rather than hardcoded hex colors for text hierarchy
- New color values must be added to `tailwind.config.cjs` — don't use arbitrary `[]` values for brand colors
- No colored backgrounds on sections — everything is near-black
- No colored text other than white/opacity variants and the single `#ff8a3c` orange accent
- No icon libraries (Heroicons, Lucide, etc.) — use inline SVG or Unicode only
- No light mode — dark-only interface

## Content Rules

- All `<video>` elements must have `autoplay muted loop playsinline aria-hidden="true"`
- Section order in `index.astro`: Hero → Device Row → Social Proof → Value Prop → Core Pillars → How It Works → Who It's For → Product Highlights → Testimonial → Pricing → Deployment → Security → CTA → Footer
- Short, declarative copy. Operational tone. No fluff or marketing superlatives.
- Section headings are bold claims, not questions

## Known Gaps (fix before launch)

- `DemoForm.tsx` `onSubmit` only `console.log`s — needs a real submission endpoint
- `<head>` in `index.astro` has no OG tags, favicon, or structured data
- `HeroMotion.tsx` is built but unused — integrate or remove
