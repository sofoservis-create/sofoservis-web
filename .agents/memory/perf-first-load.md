---
name: First-load performance decisions
description: Why GTM loads lazyOnload, why below-fold sections use .cv-auto, and measurement pitfalls on this site
---

# First-load performance decisions

**Rules:**
1. Both GTM containers (web + server-side loader) in the root layout use `strategy="lazyOnload"` — do not revert to `afterInteractive`. The inline Consent Mode default script and the Nimbata DNI script stay as they are (consent default is a synchronous inline head script, so ordering is safe regardless of GTM strategy; dataLayer pushes queue and replay).
2. Below-fold shared sections (Reviews, FAQ, CTA, Features, ServiceAreas, HowItWorks, RelatedServices, InstagramFeed, ContactFormSection) carry the `cv-auto` class (`content-visibility:auto; contain-intrinsic-size:auto 600px` in `src/app/globals.css`). Keep it on new below-fold sections; skip it for near-fold/hero content.

**Why:** User-reported dropdown stutter on first load was main-thread contention: React hydration of a ~280 KB HTML page + two GTM containers evaluating in the first seconds + an uncoalesced body-wide MutationObserver (see nimbata-dni-dom-conflicts.md). lazyOnload moves GTM work past the load event; content-visibility defers render work for offscreen sections; the observer is rAF-coalesced.

**Tradeoff to monitor:** lazyOnload GTM means visitors who bounce before full page load never fire GA4/Ads tags — on this PPC-driven lead-gen site, watch GA4 session counts vs. baseline after deploy. If sessions drop noticeably, switch to hybrid loading (first user interaction OR 3–5 s timeout, whichever first).

**Measurement pitfalls:** Long-task numbers in the shared Replit container are very noisy (same build varied 280→839 ms total between runs); compare only early (<1.2 s) blocking, take multiple runs, and remember the user's machine is slower than the test env. Also: the app imports `src/app/globals.css` — `src/styles/globals.css` is legacy and NOT bundled (a rule added there silently did nothing until moved).
