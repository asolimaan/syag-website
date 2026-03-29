---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, or applications. Generates creative, polished code that avoids generic AI aesthetics.
license: Complete terms in LICENSE.txt
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

Remember: Claude is capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.

---

## SYAG Project Design System

This project is the SYAG marketing website — a B2B SaaS platform for physical security operations. All generated components must conform to this established design system.

### Aesthetic Direction

**Dark, ultra-minimal, industrial-grade.** The aesthetic is: serious, operational, trust-signaling. Not playful. Not startup-generic. Think: war room meets refined enterprise software. Every visual choice should communicate precision and authority.

### Technology Stack

- **Framework**: Astro 5 (SSG) + React 18 islands (hydrated with `client:*` directives)
- **Styling**: Tailwind CSS + custom CSS classes in `src/styles/global.css`
- **Helper**: `cn()` from `src/lib/utils.ts` for safe Tailwind class composition
- **Animations**: Framer Motion (available, use for React components)

### Color Palette

```css
/* CSS Variables */
--bg: #0b0b0d;          /* Near-black page background */
--bg-2: #0f1013;        /* Slightly lighter surface */
--text: #f4f4f5;        /* Primary text (near-white) */
--muted: #a1a1aa;       /* Secondary/muted text */
--border: rgba(255, 255, 255, 0.12);  /* Subtle borders */
--accent: #f5f5f5;      /* Accent (white-ish) */

/* Tailwind custom colors */
navy: #0A1628
electric: #2F7BFF
cyan: #35E0FF
slate: #94A3B8
```

**Key accent**: `#ff8a3c` — the single warm orange used sparingly (badge dots, live indicators). This is the ONLY warm color in the palette. Do not introduce additional accent colors.

**Opacity modifiers** are used extensively: `text-white/60`, `bg-white/10`, `border-white/12`, etc.

### Typography

- **Headings**: `Space Grotesk` — letter-spacing: `-0.02em`, weights 400–600
- **Body**: `IBM Plex Sans` — weights 300–600
- Apply `.quartr-heading` class to headline elements

Heading sizes in practice:
- Hero H1: `text-4xl md:text-5xl lg:text-6xl font-semibold`
- Section H2: `text-3xl md:text-4xl font-semibold`
- Card H3: `text-lg font-semibold`
- Labels/tags: `text-[10px] uppercase tracking-[0.3em]` or `text-xs tracking-widest`

### Core CSS Classes (use these, don't reinvent)

```
.quartr-surface    — full-page dark gradient + dot-grid noise overlay
.quartr-heading    — Space Grotesk font with tight letter-spacing
.glass-card        — frosted glass: semi-transparent bg, blur, border
.hero-section      — full-width video background with dark overlay
.insight-card      — dark bordered card with image hero + content
.insight-grid      — responsive auto-fit grid for cards
.badge-pill        — uppercase pill badge with dot indicator
.learn-more-btn    — ghost button, pill shape, uppercase tracking
.feature-card      — bordered card with preview area
```

### Component Patterns

**Cards**: Rounded corners (`rounded-2xl` or `rounded-3xl`), `border border-white/10` or `border border-white/[0.08]`, `bg-white/[0.02]` to `bg-white/[0.06]` fills. No harsh drop shadows — use `shadow-[0_24px_40px_rgba(0,0,0,0.35)]`.

**Buttons**:
- Primary CTA: `bg-white text-black font-medium px-6 py-3 rounded-full text-sm uppercase tracking-wider hover:bg-white/90`
- Ghost/secondary: `border border-white/25 text-white/80 px-5 py-2 rounded-full text-xs uppercase tracking-[0.2em]`
- No colored buttons (no blue, no orange filled buttons)

**Section layout**: `max-w-5xl mx-auto px-8 py-24` — generous vertical padding, constrained max-width. Sections are separated by large whitespace, not dividers.

**Labels/eyebrows**: All-caps, wide tracking (`tracking-[0.3em]`), `text-white/50` — used above section headings.

**Lists**: No bullet icons or icon libraries. Use text, spacing, and typography hierarchy instead. If icons are needed, use simple geometric SVGs or Unicode symbols.

### Visual Texture

The background uses a radial dot-grid pattern (`.quartr-surface::after`) — a subtle `rgba(255,255,255,0.04)` dot every 32px. When building full-page layouts, apply `.quartr-surface` to the wrapper.

For hero/feature sections: use `linear-gradient` overlays on images/videos to maintain dark consistency. Gradient direction `120deg` from `rgba(8,9,12,0.9)` to transparent.

### Tone & Copy Style

- Short, declarative sentences. Operational. No fluff.
- Section headings: bold claims, not questions. E.g. "Security is not about watching screens. It's about executing decisions."
- Body copy: `text-white/60`, `text-sm` or `text-base`, max ~60 chars wide
- Labels: `text-white/40` to `text-white/50`, all-caps, ultra-wide tracking

### What to Avoid

- No colored backgrounds (navy, blue, green fills on sections) — everything is near-black
- No colored text other than white/opacity variants and the single orange accent
- No card hover lift/scale effects — subtle opacity/border changes only
- No rounded icons or icon libraries (Heroicons, Lucide, etc.) — use SVG or Unicode only
- No gradients with blue/purple hues — white-to-transparent only
- No testimonial carousels, pricing toggle animations, or confetti effects
- No light mode — this is a dark-only interface
