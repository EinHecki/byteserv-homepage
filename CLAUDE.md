# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a ByteServ homepage built with React Router v7 (the new framework from the Remix team). It's a server-side rendered (SSR) business website for an IT services company focused on POS systems, IT infrastructure, and web development for retail, hospitality, and service providers.

The site is primarily in German and includes sections for services, contact forms, and company information.

## Development Commands

**Start development server:**
```bash
npm run dev
```
Server runs at `http://localhost:5173` with Hot Module Replacement (HMR)

**Type checking:**
```bash
npm run typecheck
```
Generates React Router types and runs TypeScript compiler

**Production build:**
```bash
npm run build
```
Creates optimized client and server bundles in `build/` directory

**Run production server:**
```bash
npm run start
```
Serves the production build (runs `build/server/index.js`)

**Docker build and run:**
```bash
docker build -t byteserv-homepage .
docker run -p 3000:3000 byteserv-homepage
```

## Architecture

### Framework: React Router v7

This project uses React Router v7 (successor to Remix) with:
- **SSR enabled by default** (configured in `react-router.config.ts`)
- **File-based routing** in `app/routes/` directory
- **Type-safe route modules** using generated `+types` exports
- **Vite** as the build tool and dev server

### Project Structure

```
app/
├── routes/           # Route modules (currently just home.tsx)
├── components/       # Reusable UI components (Button, Card, Header, Footer, etc.)
├── sections/         # Page sections (HeroSection)
├── welcome/          # Main welcome page component with all sections
├── root.tsx          # Root layout with HTML shell, error boundary
├── routes.ts         # Route configuration
└── app.css          # Tailwind CSS entry point
```

### Key Architectural Patterns

**Component Organization:**
- `components/` - Pure, reusable UI components (Button, Card, FeatureCard, Modal, Header, Footer)
- `sections/` - Larger page sections (HeroSection)
- `welcome/` - Main page composition that assembles all sections

**Current Page Structure:**
The homepage (`app/welcome/welcome.tsx`) is a single-page layout that includes:
1. Header with navigation
2. Hero section with gradient background and CTA buttons
3. "Über uns" (About) section
4. "Unsere Leistungen" (Services) section with 3 feature cards
5. "Warum ByteServ?" (Why Us) section
6. Contact section with form
7. Footer

**Contact Form:**
- Client-side form in `welcome.tsx` with state management
- Submits to `/api/contact/submit` endpoint (NOT YET IMPLEMENTED)
- Includes validation, loading states, and success/error handling
- Currently the API endpoint doesn't exist - needs backend implementation

**Styling:**
- TailwindCSS v4 configured via Vite plugin (`@tailwindcss/vite`)
- Custom theme in `app/app.css` with Inter font
- Dark mode support via `dark:` classes
- Glass-morphism effects (backdrop-blur, bg-white/10)

**Type Safety:**
- TypeScript strict mode enabled
- Path alias `~/*` maps to `./app/*`
- React Router auto-generates types in `.react-router/types/`
- Route modules use `Route.MetaArgs`, `Route.LinksFunction`, etc. from generated types

### Route Configuration

Routes are defined in `app/routes.ts` using the `@react-router/dev/routes` API:
```typescript
export default [index("routes/home.tsx")] satisfies RouteConfig;
```

To add new routes, update this file (not file-system based routing).

### Error Handling

The root layout (`app/root.tsx`) includes an `ErrorBoundary` that:
- Handles 404s with user-friendly message
- Shows error details in development mode
- Provides clean error UI in production

## Important Notes

**Path Alias:**
Use `~/` to import from the app directory:
```typescript
import Header from "~/components/Header";
```

**Static Assets:**
Public assets are referenced with absolute paths (e.g., `/logo-low_height.png`, `/about-us-section.jpg`)

**API Endpoints:**
The contact form expects a `/api/contact/submit` POST endpoint that doesn't exist yet. This needs to be implemented as a React Router resource route.

**Content Files:**
There are `.odt` files in `Inhalte/` directory with German content for different sections (Startseite, Kassensysteme, IT Systeme, etc.) - these contain content that may need to be integrated.

**Deployment:**
- Builds to `build/client/` (static assets) and `build/server/` (SSR server)
- Multi-stage Dockerfile for production deployment
- No database or external services currently configured
