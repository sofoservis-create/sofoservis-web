# Sofoservis - replit.md

## Overview

Sofoservis is a Slovak-language service company website built with Next.js 15. The site markets professional moving, demolition, furniture assembly, and related services across Slovakia (primarily Bratislava and surrounding cities). It is a multi-page marketing/SEO website with:

- A large number of location-specific pages (city-by-city landing pages for moving services)
- Service-specific pages (demolition, furniture assembly, kitchen installation, etc.)
- A contact form with email integration
- A built-in visual page editor (at `/editor`) that stores content in `localStorage`
- Analytics/tracking infrastructure (Google Tag Manager, UTM attribution)
- Cookie consent management
- WhatsApp widget and Instagram feed integrations

The site is primarily Slovak-language content targeting Slovak customers. The live domain is `www.sofoservis.sk`.

---

## User Preferences

Preferred communication style: Simple, everyday language.

---

## System Architecture

### Frontend Architecture

- **Framework**: Next.js 15 (App Router) with React 19
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v3 with a custom color palette (`primary` grayscale, `accent` yellow/gold)
- **Font**: Sora (Google Fonts via `next/font`)
- **Animations**: Framer Motion for UI transitions
- **Routing**: File-based routing via the `src/app/` directory. Each city/service has its own folder with a `page.tsx`.

### Page Structure Pattern

Every service/city page follows the same composition pattern:
1. `Hero` section (with an inline contact form)
2. `Clients` section (client logos)
3. `GoogleReviews` widget
4. `Reviews` section (video testimonials)
5. `Features` section (service features grid)
6. `FAQ` section
7. `CTA` section
8. `InstagramFeed` widget
9. `ContactFormSection` at the bottom

Each page customizes `heroData` and `featuresData` as local constants, passing them as props to shared components. SEO metadata is defined inline per page using Next.js's `metadata` export.

### Component Organization

```
src/
  app/          # Route pages (App Router)
  components/
    layout/     # Navbar, Footer
    sections/   # Hero, Features, FAQ, CTA, Reviews, Clients, LocationMap, ContactFormSection
    widgets/    # GoogleReviews, InstagramFeed, WhatsAppWidget, ReviewsShowcase
    forms/      # QuickContactForm
    cookies/    # CookieConsent
    seo/        # SEOProvider
    tracking/   # UTMCapture
    ui/         # Container and small UI primitives
  lib/          # gtm.ts (GTM helpers), utm.ts (UTM attribution)
  styles/       # globals.css
  types/        # gtm.d.ts (Window.dataLayer type extension)
```

### Built-in Page Editor

The `/editor` route provides a split-pane visual editor:
- **Left panel**: `EditPanel` with section-specific sub-editors (Hero, FAQ, Reviews, CTA, Clients, Instagram, etc.)
- **Right panel**: `PagePreview` showing a live preview with hover-to-edit overlays
- **Storage**: Uses `localStorage` (`page-editor-content` key) — no backend persistence
- **Limitation**: The editor is a development/admin utility; changes do not propagate to production pages automatically

### Analytics & Tracking

- **Google Tag Manager**: GTM container `GTM-P26DR44Q`, loaded via `next/script`
- **GTM Helper** (`src/lib/gtm.ts`): `pushDataLayerEvent()` respects cookie consent; only fires analytics events if the user has accepted analytics cookies
- **UTM Attribution** (`src/lib/utm.ts`): Captures first-click and last-click UTM parameters + gclid in `localStorage`; two keys: `sofoservis-utm-first` and `sofoservis-utm-last`
- **Cookie Consent**: Custom `CookieConsent` component stores consent state in `localStorage` under key `sofoservis-cookie-consent`

### SEO Strategy

- Each page defines its own `metadata` export with `title`, `description`, `keywords`, and a self-referencing `canonical` URL
- City-specific pages are generated as separate routes (not dynamic segments) for maximum SEO discoverability
- `robots.txt` is in `public/` and explicitly allows crawling of main content; blocks `/editor`, `/admin`, `/api/`
- Redirects are configured in `next.config.ts` for deprecated or renamed pages
- `SEOProvider` renders LocalBusiness, Service, WebPage, Organization schemas on every page via `LayoutShell`
- `FAQJsonLd` adds FAQPage schema to 11+ pages
- `ServiceAreas` (homepage) — interactive tab grid of Bratislava districts + surrounding cities + other Slovak towns
- `RelatedServices` — service cross-link cards added to all 7 main service pages
- `SeoTextSection` — accordion SEO text panels (700-800 words each) on 5 top pages: stahovanie-bratislava, stahovanie-bytov-domov, vypratavanie-bytov-domov, hodinovy-manzel-majster, stahovanie-kancelarii-firiem
- MESTÁ menu section active with 14 city links in Navbar

### Configuration Notes

- Dev server runs on port `5000` (not the default 3000): `next dev --turbopack -p 5000 -H 0.0.0.0`
- Images: `unoptimized: true` for static export compatibility; remote image patterns allow `images.unsplash.com` and `d2oxwq95j4ncx4.cloudfront.net`
- Trailing slash: disabled
- Custom build ID includes a date stamp

---

## External Dependencies

### Core Libraries
| Package | Purpose |
|---|---|
| `next` 15.1.9 | Framework (App Router, SSR/SSG, routing) |
| `react` / `react-dom` 19 | UI rendering |
| `framer-motion` 12 | Animations and transitions |
| `@emailjs/browser` 4 | Client-side email sending from contact forms |

### Third-Party Services

- **EmailJS**: Contact form emails are sent directly from the browser using EmailJS (no backend email server needed). Email templates use `{{phone}}`, `{{email}}`, `{{message}}` variables. Template HTML is in `attached_assets/`.
- **Google Tag Manager** (`GTM-P26DR44Q`): Manages all analytics and marketing tags. Analytics events are consent-gated.
- **Google Reviews**: Custom review carousel fetching live reviews from the Google Places API via `/api/reviews`. Reviews are cached for 24 hours. The API key (`GOOGLE_PLACES_API_KEY`) is stored as a server-side env var. Place ID is `ChIJj9SG7AKJbEcRhBqUCB_mDKE`.
- **Trello API**: Integration documented in `TRELLO_SETUP.md` for connecting form submissions or task management. Requires API Key, Token, Board ID, and List ID obtained via Trello Power-Ups admin.
- **Instagram**: Custom `InstagramFeed` widget (likely embedding or fetching posts).
- **WhatsApp**: `WhatsAppWidget` component for floating chat button.
- **Google Fonts (Sora)**: Loaded via `next/font/google` for automatic optimization.
- **Unsplash / CloudFront CDN**: Configured as allowed remote image sources in Next.js config.

### No Database

This project has **no database**. All data is either:
1. Hardcoded in page components as local constants
2. Stored in browser `localStorage` (editor content, cookie consent, UTM attribution)
3. Fetched from external widget APIs (Google Reviews, Instagram)

There is no backend API, no Drizzle, no Postgres, and no server-side data persistence.