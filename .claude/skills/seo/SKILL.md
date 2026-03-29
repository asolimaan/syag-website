---
name: seo
description: Audit and improve SEO metadata for the SYAG landing page. Checks meta tags, Open Graph, Twitter Card, structured data (JSON-LD), favicon, and sitemap. Usage: /seo
---

The user wants to audit and improve SEO for the SYAG website.

Perform the following steps in order:

## 1. Audit current state

Read `src/pages/index.astro` and check the `<head>` for:
- `<title>` tag
- `<meta name="description">`
- Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- Twitter Card tags: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- `<link rel="canonical">`
- `<link rel="icon">` / favicon
- JSON-LD structured data (`SoftwareApplication` or `Organization` schema)
- `<meta name="robots">`

## 2. Report findings

List what is present, what is missing, and what needs improvement.

## 3. Implement fixes

Add all missing tags directly to `src/pages/index.astro`. Use these values as defaults unless the user provides alternatives:

- **Title**: `SYAG — The operating system for physical security operations`
- **Description**: `SYAG is the B2B platform for physical security operations. Coordinate teams, execute with precision, and maintain trusted records across compounds, campuses, and critical facilities.`
- **OG image**: `/og-image.png` (note if the file doesn't exist yet)
- **Twitter card type**: `summary_large_image`
- **JSON-LD type**: `SoftwareApplication` with `applicationCategory: "BusinessApplication"`

## 4. Flag remaining gaps

If `og-image.png` doesn't exist in `public/`, note it as a manual task. Do not generate image files.
