# Sofoservis.sk — Technický Audit Report
**Dátum:** 2026-08-17  
**Stack:** Next.js 15.1.9 + Turbopack, React 19, Tailwind CSS  
**Custom breakpoint:** `desktop: 1256px`

---

## 1. TRETIE STRANY — externé skripty

### Priamo v kóde

| # | Skript | Súbor + riadok | Typ načítania |
|---|--------|---------------|---------------|
| 1 | **Nimbata anti-flash** (inline) | `src/app/layout.tsx:97` | 🔴 BLOKUJÚCI — `<script dangerouslySetInnerHTML>` v `<head>`, bez async/defer. Zámer: musí bežať pred renderom. Telo je micro (~200 B) a aktivuje sa len keď je `gclid` v URL. |
| 2 | **Consent Mode V2 + gtag/dataLayer stub** (inline) | `src/app/layout.tsx:109` | 🔴 BLOKUJÚCI — `<script dangerouslySetInnerHTML>` v `<head>`. Zámer: musí byť synchronický a pred GTM (Google requirement). |
| 3 | **GTM** (`GTM-TGLS3XP6`, web) | `src/app/layout.tsx:142` | 🟢 ODLOŽENÝ — `<Script strategy="lazyOnload">` |
| 4 | **GTM Server-Side** (`load.server.sofoservis.sk`) | `src/app/layout.tsx:152` | 🟢 ODLOŽENÝ — `<Script strategy="lazyOnload">` |
| 5 | **Nimbata DNI** (`cdn.dni.nimbata.com`) | `src/components/tracking/NimbataScript.tsx:12` | 🟢 ODLOŽENÝ — `<Script strategy="afterInteractive">` |

### Cez GTM (nie priamo v kóde, ale v CSP a cookie policy)

| Skript | Dôkaz |
|--------|-------|
| **Google Analytics 4** | `next.config.ts` CSP: `google-analytics.com`, `analytics.google.com` |
| **Google Ads / Doubleclick** | `next.config.ts` CSP: `googleads.g.doubleclick.net`, `www.googleadservices.com` |
| **Facebook Pixel** | `next.config.ts` CSP: `connect.facebook.net` |
| **LinkedIn Insight Tag** | `next.config.ts` CSP: `snap.licdn.com` |
| **Microsoft Clarity** | `src/app/zasady-pouzivania-cookies/page.tsx:183` (explicitne menovaný v cookie policy) |

---

## 2. GTM A SÚHLAS COOKIES

### Stub

**Stub existuje: ✅**  
`src/app/layout.tsx:109–143` — synchronický inline skript vytvára `window.dataLayer` aj `window.gtag` **pred** GTM tagom:

```js
window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function gtag(){window.dataLayer.push(arguments);}
window.gtag('consent', 'default', {
  ad_storage: 'denied',
  analytics_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  wait_for_update: 500
});
```

Prečíta aj `localStorage["sofoservis-cookie-consent"]` a hneď volá `consent.update` — čiže návštevníci s uloženým súhlasom dostanú `granted` ešte pred GTM.

### Všetky volania `gtag()` / `dataLayer.push()`

| Miesto | Súbor + riadok | Volá sa pri loade? | Guard? |
|--------|---------------|-------------------|--------|
| `gtag('consent','default',...)` | `src/app/layout.tsx:121` | ✅ hneď pri loade | — (je to stub samotný) |
| `gtag('consent','update',...)` z localStorage | `src/app/layout.tsx:132` | ✅ hneď pri loade | `try/catch` |
| `gtag("consent","update",...)` pri kliknutí | `src/components/cookies/CookieConsent.tsx:119` | ❌ len user-action | `window.gtag` zaručený stubom ✅ |
| `dataLayer.push({ event:"consent_update" })` | `src/components/cookies/CookieConsent.tsx:128` | ❌ len user-action | `window.dataLayer` zaručený stubom ✅ |
| `pushDataLayerEvent(...)` vo všetkých komponentoch | `src/lib/gtm.ts:26` | ❌ len na event | Vyžaduje `hasAnalyticsConsent()` z localStorage → bez súhlasu vráti `false` a nič nepošle ✅ |

**Záver: žiadne tiché zahadzovanie.** Stub je korektne nastavený pred GTM. `pushDataLayerEvent` drží consent gate.

---

## 3. CACHE HLAVIČKY

| Typ súboru | Cache-Control | Súbor + riadok |
|------------|--------------|----------------|
| `/_next/static/` (JS/CSS chunks, content-hashed) | `public, max-age=31536000, immutable` | Next.js default — nie v `next.config.ts` ✅ |
| `.svgz` súbory | `public, max-age=31536000, immutable` | `next.config.ts:38` ✅ |
| HTML stránky `/:path((?!api/)*)` | `public, s-maxage=3600, stale-while-revalidate=86400` | `next.config.ts:47` (1h CDN cache) ✅ |
| `/api/:path*` | `no-store, no-cache` | `next.config.ts:~58` ✅ |
| **`/images/`, `/icons/`** (public static súbory) | `public, s-maxage=3600, stale-while-revalidate=86400` | ⚠️ **Padajú pod `/:path((?!api/)*)` — dostávajú len 1h CDN cache namiesto `max-age=31536000`** |

### Problém — statické obrázky nemajú dlhodobý cache

Súbory v `/public/images/`, `/public/icons/` sú nehashe-ované (nemenia sa URL pri zmene obsahu), ale stále by mali mať dlhší cache ako HTML stránky. Chýba pravidlo:

```js
{
  source: "/images/:path*",
  headers: [{ key: "Cache-Control", value: "public, max-age=2592000" }]  // 30 dní
}
```

---

## 4. OBRÁZKY

### Počty podľa formátu

| Formát | Počet súborov |
|--------|--------------|
| PNG | **44** (vrátane favicón, android-chrome, OG logo) |
| WebP | **28** |
| AVIF | **12** |
| JPG/JPEG | **~15** |
| SVG | **52** |

### Top 10 najväčších súborov

| # | Súbor | Veľkosť | Kde sa používa |
|---|-------|---------|----------------|
| 1 | `public/images/mascot/mascot-thinking.jpg` | **3 457 kB** | ⚠️ nenájdené v kóde |
| 2 | `public/images/mascot/mascot-drill-thumbsup.jpg` | **2 579 kB** | ⚠️ nenájdené v kóde |
| 3 | `public/images/SofoServis.png` | **1 944 kB** | ⚠️ nenájdené v kóde (pravdepodobne stará záloha) |
| 4 | `public/images/SofoServis-footer.png` | **1 944 kB** | ⚠️ nenájdené v kóde |
| 5 | `public/images/mascot/mascot-pointing-both.jpg` | **1 878 kB** | ⚠️ nenájdené v kóde |
| 6 | `public/images/video2.avif` | **1 628 kB** | Sekcia videa / galéria |
| 7 | `public/images/mascot-clean.png` | **1 548 kB** | ⚠️ nenájdené v kóde (záloha) |
| 8 | `public/images/mascot/mascot-handtruck-2.jpg` | **1 376 kB** | ⚠️ nenájdené v kóde |
| 9 | `public/images/video4.avif` | **1 370 kB** | Sekcia videa / galéria |
| 10 | `public/images/mascot/mascot-pointing.jpg` | **1 353 kB** | ⚠️ nenájdené v kóde |

**Poznámka:** Položky označené ⚠️ neboli nájdené v žiadnom `.tsx`/`.ts` súbore v `src/`. Sú to pravdepodobne nepoužívané súbory / zálohy / dev assety. Treba overiť a prípadne odstrániť.

### WebP existuje, ale kód používa PNG/JPG

| WebP súbor v `/public` | Formát použitý v kóde | Súbor + riadok |
|----------------------|----------------------|----------------|
| `public/images/zakladatel-sofoservis.webp` ✅ | `zakladatel-sofoservis-portrait.png` (~540 kB) | `src/app/o-nas/page.tsx:238` + `src/app/en/about/page.tsx:215` |

**Riešenie:** Zmeniť `src` z `.png` na `.webp` (alebo použiť `next/image` s automatickou konverziou).

---

## 5. VEĽKOSŤ JAVASCRIPTU (produkčný build)

### Shared chunks (načítavajú sa na každej stránke)

| Chunk | Veľkosť (gzip) |
|-------|----------------|
| `chunks/1517-c046a7668a4ef862.js` | 50.5 kB |
| `chunks/4bd1b696-8253311ee26bde99.js` | 53.0 kB |
| Ostatné shared chunks | 1.91 kB |
| **SPOLU First Load JS** | **105 kB** |

### First Load JS per stránka

| Stránka | First Load JS |
|---------|--------------|
| `/vypratavanie/vypratavanie-bytov-domov/bratislava` | **145 kB** |
| `/referencie` | **144 kB** |
| `/en/pricing` | **143 kB** |
| `/en/reviews` | **137 kB** |
| `/kontakt` | **130 kB** |
| `/o-nas` | **127 kB** |
| Typická service/city stránka | **~105 kB** (len shared) |
| Legal stránky (cookies, VOP) | **106 kB** |

**Kontext:** 105 kB gzip je v norme pre Next.js app so shared vendor chunks. Google odporúča < 200 kB parsovaného JS — tu sme ok.

---

## 6. PRECONNECT

### Nastavené (`src/app/layout.tsx:79–95`)

| Typ | URL | Riadok |
|-----|-----|--------|
| `preconnect` | `https://load.server.sofoservis.sk` | `layout.tsx:79` ✅ |
| `dns-prefetch` | `https://load.server.sofoservis.sk` | `layout.tsx:80` ✅ |
| `preload as="image"` | `/images/sofoservis-zamestnanci-hero-mobile.avif` | `layout.tsx:83` ✅ |
| `preload as="image"` | `/images/sofoservis-zamestnanci-hero.avif` | `layout.tsx:91` ✅ |

### Chýba

| Doména | Prečo pridať |
|--------|-------------|
| `https://www.googletagmanager.com` | GTM je `lazyOnload` — keď sa spustí po idle, DNS+TCP lookup skráti latency |
| `https://cdn.dni.nimbata.com` | Nimbata DNI je `afterInteractive` — pomohol by preconnect |
| `https://fonts.gstatic.com` | Google Fonts (Sora via `next/font`) — Next.js to rieši väčšinou interne, treba overiť v DevTools |

**Odporúčané doplnenie do `src/app/layout.tsx` v `<head>`:**
```html
<link rel="preconnect" href="https://www.googletagmanager.com" />
<link rel="dns-prefetch" href="https://cdn.dni.nimbata.com" />
```

---

## SÚHRN PROBLÉMOV (prioritizovaný)

| Priorita | Problém | Kde |
|----------|---------|-----|
| 🔴 Vysoká | Statické obrázky v `/public/images/` majú len 1h CDN cache | `next.config.ts` |
| 🟠 Stredná | ~7 veľkých JPG/PNG súborov (spolu >10 MB) nenájdených v kóde — pravdepodobne nepoužívané | `public/images/mascot/` |
| 🟠 Stredná | `zakladatel-sofoservis-portrait.png` (540 kB PNG) — WebP verzia existuje ale nepoužíva sa | `src/app/o-nas/page.tsx:238`, `src/app/en/about/page.tsx:215` |
| 🟡 Nízka | Chýba `preconnect` na GTM a Nimbata doménu | `src/app/layout.tsx` |
| ✅ OK | Consent Mode V2 stub správne nastavený pred GTM | `src/app/layout.tsx:109` |
| ✅ OK | GTM a Nimbata sú odložené (lazyOnload / afterInteractive) | `src/app/layout.tsx` |
| ✅ OK | `pushDataLayerEvent` drží consent gate | `src/lib/gtm.ts` |
| ✅ OK | JS bundle 105 kB shared — v norme | Build output |
| ✅ OK | Hero LCP obrázky sú preloadnuté (AVIF, mobile+desktop) | `src/app/layout.tsx:83–95` |
