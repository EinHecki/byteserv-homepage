# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ByteServ homepage built with React Router v7 (successor to Remix). SSR-enabled business website for an IT services company focused on POS systems, IT infrastructure, and web development. The site is in German.

## Development Commands

```bash
npm run dev          # Start dev server at http://localhost:5173 with HMR
npm run typecheck    # Generate React Router types and run TypeScript compiler
npm run build        # Production build (includes sitemap generation)
npm run start        # Serve production build on port 3000
```

Docker:

```bash
docker build -t byteserv-homepage .
docker run -p 3000:3000 byteserv-homepage
```

## Architecture

### Framework: React Router v7

- **SSR enabled** (configured in `react-router.config.ts`)
- **Manual route configuration** in `app/routes.ts` (not file-system based)
- **Type-safe route modules** using generated `+types` exports from `.react-router/types/`
- **Vite** as build tool

### Route Structure

Routes are defined manually in `app/routes.ts`:

- `/` - Homepage (home.tsx)
- `/kassensysteme`, `/digitale-gastro`, `/webentwicklung`, `/it-systeme` - Service pages
- `/impressum`, `/datenschutz`, `/agb` - Legal pages
- `/api/contact/submit` - Contact form POST endpoint

To add new routes, update `app/routes.ts`.

### Key Components

- `components/Header.tsx`, `components/Footer.tsx` - Site-wide layout
- `components/ContactForm.tsx` - Reusable contact form
- `components/PageLayout.tsx` - Shared page structure for service pages
- `components/CookieConsent.tsx` - GDPR cookie consent using `vanilla-cookieconsent`
- `welcome/welcome.tsx` - Homepage content composition

### Contact Form & Email

The contact form posts to `/api/contact/submit` which uses Nodemailer for email delivery.

**Required environment variables** (see `.env.example`):

```
SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, SMTP_TO
```

Without SMTP configuration, form submissions are only logged to console.

### Styling

- TailwindCSS v4 via Vite plugin (`@tailwindcss/vite`)
- Custom theme in `app/app.css` with Inter font
- Glass-morphism effects (backdrop-blur, bg-white/10)

## Important Patterns

**Path Alias:** Use `~/` for imports from app directory:

```typescript
import Header from "~/components/Header";
```

**Static Assets:** Reference from public folder with absolute paths (e.g., `/logo-low_height.png`)

**TypeScript:** Strict mode enabled. React Router auto-generates types in `.react-router/types/`.

## Content Sources

German content files in `Inhalte/` directory (.md format) contain text for various sections.
