# Roerick Studio — Marketing Website

Custom Next.js 14 (App Router) marketing site for Roerick Studio. Built with TypeScript and Tailwind CSS.

## Getting Started

1. Copy the environment variable template and fill in your Sanity project values:
   ```bash
   cp .env.local.example .env.local
   ```
   Run `npx sanity init` to create a new Sanity project and get your Project ID and dataset. Then add the values to `.env.local`. See `AGENCY-SETUP.md` for the full setup walkthrough.

2. Install dependencies and start the dev server:
   ```bash
   npm install
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser.
The Sanity Studio runs at [http://localhost:3000/studio](http://localhost:3000/studio).

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com), import the repo.
3. Add all environment variables from `.env.local.example` in the Vercel project settings.
4. Zero-config deploy — Vercel detects Next.js automatically.

## Content Management

Content is managed through Sanity CMS at `/studio`. See:
- `CLIENT-EDITING-GUIDE.md` — plain English guide for clients
- `AGENCY-SETUP.md` — technical setup instructions for Michael

## Before Publishing

### Replace placeholders

Search the codebase for `[PLACEHOLDER` to find all items that need real content:

```bash
grep -r "\[PLACEHOLDER" src/
```

Key areas:
- **Case study cards** (`/src/app/work/page.tsx`, `/src/app/page.tsx`) — replace with real project data
- **Testimonials** — add real client quotes in the Sanity Studio at `/studio`
- **Client logos** (`/src/app/page.tsx` trust strip) — replace with actual logo images
- **About page** — add your founder photo and story in the Sanity Studio at `/studio`
- **Terms & Privacy** (`/src/app/terms/page.tsx`, `/src/app/privacy/page.tsx`) — have an attorney write real legal copy

### Wire the contact form

The form handler logs to console by default. Before going live, wire it to an email provider:

**File:** `src/app/api/contact/route.ts`

See the TODO comments in that file for instructions. Recommended: [Resend](https://resend.com).

### Add your OG image

Add a `1200×630` Open Graph image at `public/og-image.png` for social sharing.

## Brand Tokens

All brand colors and fonts are defined in `tailwind.config.ts`:

| Token | Value | Use |
|-------|-------|-----|
| `navy` | `#1B2A4A` | Primary bg, structure |
| `gold` | `#C9A84C` | Accent, CTAs |
| `parchment` | `#F5F3EE` | Off-white surfaces |
| `deepink` | `#1A1D26` | Footer, dark sections |
| `slate` | `#4A5568` | Body copy on light |
| `midgrey` | `#8A94A8` | Captions, muted text |
| `goldlight` | `#E8C97A` | Hover states |
| `golddark` | `#9A7A2E` | Active states |

Fonts: **DM Sans** (headings/body) and **JetBrains Mono** (eyebrows/labels), loaded via `next/font/google`.

## Project Structure

```
src/
  app/           — Pages (App Router) + API routes
  components/    — Shared UI components
  hooks/         — useScrollAnimation hook
  sanity/        — Sanity CMS config, schemas, queries, and image helpers
sanity.config.ts — Sanity CLI config (re-exports from src/sanity/sanity.config.ts)
```
