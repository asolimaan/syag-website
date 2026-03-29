---
name: section
description: Scaffold a new landing page section for the SYAG website. Usage: /section <section-name> [bullet points of content]. Produces idiomatic Astro markup using the established SYAG design system.
---

The user wants to add a new section to the SYAG landing page (`src/pages/index.astro`).

Parse the user's input after `/section`:
- The first word/phrase is the **section name** (e.g. `integrations`, `faq`, `team`, `roadmap`)
- Anything after that is **content hints** — bullet points, features, or description to include

Then invoke the `section-writer` agent with:
1. The section name
2. Any content hints provided
3. Instruction to read `src/pages/index.astro` first to understand the surrounding context and determine the correct insertion point

After the agent returns the markup, present it to the user and ask if they'd like it inserted into `index.astro` at the suggested location.
