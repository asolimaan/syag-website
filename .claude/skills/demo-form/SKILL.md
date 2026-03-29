---
name: demo-form
description: Wire the DemoForm.tsx to a real submission backend. Supports Resend (email), Formspree, a custom API route, or a simple webhook URL. Usage: /demo-form [provider] e.g. /demo-form resend, /demo-form formspree, /demo-form webhook https://...
---

The user wants to wire up `src/components/DemoForm.tsx` so the "Request a demo" form actually submits data.

## Step 1 — Determine the provider

Parse the user's input after `/demo-form`:
- `resend` → use Resend's API via an Astro API route
- `formspree` → post to a Formspree endpoint
- `webhook <url>` → POST JSON to the provided URL
- no argument → ask the user which of the three options they prefer before proceeding

## Step 2 — Read the current form

Read `src/components/DemoForm.tsx` to understand the current field structure (`name`, `email`, `company`) and the no-op `onSubmit`.

## Step 3 — Implement by provider

### Resend
1. Create `src/pages/api/demo.ts` — an Astro API route that accepts POST with `{ name, email, company }`, calls Resend's REST API to send a notification email, and returns `{ ok: true }` or an error.
2. Update `DemoForm.tsx` `onSubmit` to `fetch('/api/demo', { method: 'POST', body: JSON.stringify(data) })`.
3. Add success/error UI state to the form.
4. Note that the user must set `RESEND_API_KEY` and `RESEND_TO_EMAIL` in `.env`.

### Formspree
1. Update `DemoForm.tsx` to POST directly to `https://formspree.io/f/{FORM_ID}` using `fetch`.
2. Add success/error UI state.
3. Note that the user must replace `{FORM_ID}` with their Formspree form ID.

### Webhook
1. Update `DemoForm.tsx` `onSubmit` to POST `{ name, email, company, submitted_at }` as JSON to the provided URL.
2. Add success/error UI state.

## Step 4 — Success/error UI

Regardless of provider, the form should show:
- On success: replace the form with a confirmation message matching the SYAG tone: *"Request received. We'll be in touch shortly."*
- On error: show an inline error below the submit button: *"Submission failed. Please try again or email us directly."*
- Use existing Tailwind classes and the SYAG color palette — no new CSS.

## Step 5 — Update CLAUDE.md

Remove the "Known Gaps" bullet about `DemoForm.tsx` once the implementation is complete.
