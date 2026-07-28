---
name: Nimbata DNI vs React DOM ownership
description: How to keep fixed phone numbers safe from Nimbata call-tracking swaps on SPA navigation in the Next.js app
---

# Nimbata DNI vs React DOM ownership

**The rule:** To show a fixed (non-tracked) phone number on some routes while Nimbata DNI swaps numbers elsewhere, wrap the phone `<a>`/`<Link>` in a layout-transparent wrapper (`<span key={pathname} className="contents">`) so React remounts the whole subtree on route change. Never put `key={pathname}` directly on an element Nimbata has touched.

**Why:** Nimbata does not just edit text — it REPLACES the phone `<a>` element with its own clone. React then keeps updating its original, now-detached node, so prop/class/key changes on inner spans never reach the visible DOM (`querySelectorAll` finds 0 of React's spans). Putting `key` on the replaced `<a>` itself crashes React with `NotFoundError: removeChild` because the node is no longer where React left it. Remounting a wrapper Nimbata never touched discards the clone cleanly — this is why the Footer's keyed PhoneReveal component always worked while identical tweaks on the bare navbar anchor failed.

**How to apply:** Any element whose text a third-party DOM-mutating script may rewrite: (1) key a WRAPPER, not the element; (2) drop the script's target class (`nimbata_number_1`) on routes where swapping is forbidden; (3) keep a `data-correct` attribute + MutationObserver restore as defense-in-depth. The wrapper remount alone is NOT enough: Nimbata persists across SPA navigation and can re-swap the freshly mounted anchor later (timing race — e2e tests were flaky on this). The observer must watch `document.body` (childList+subtree+characterData), not the original spans (they go detached and never fire). Crucially, `cloneNode(true)` copies attributes, so the clone still carries `data-correct` — a document-wide `querySelectorAll("span[data-correct]")` restore fixes clones too (text + anchor href + aria-label). Converges, no loop, because it only writes when values differ. Debug by inspecting live DOM after SPA navigation (e2e/Playwright), not by reasoning about React alone — detached-node symptoms (attribute count = 0 in document) are the giveaway.

**Perf caveat:** A body-wide observer fires on EVERY DOM mutation — during first load (hydration, GTM injection, Nimbata swaps) that is dozens of callbacks, each doing a document-wide `querySelectorAll`, which blocks the main thread and made the nav dropdown stutter. The observer callback must stay coalesced via `requestAnimationFrame` (one restore per frame, cancel on cleanup). Restores still land within a frame — verified by e2e swap simulation (textOk/hrefOk true).

**The swap CAN fire in the dev workspace — verified live (July 2026):** Do not assume Nimbata
only swaps on the production domain. E2e runs against the local dev server saw the real script
swap all targets to a pool number (`+421 800 601 47x`). Whether it fires depends on Nimbata's
server-side attribution decision for the visit, not on a hard domain gate — so a non-swapping
load proves nothing either way. When testing swap-dependent logic, either wait for a real swap
or simulate one with the script's exact mutation (innerHTML anchor injection, see below).

**How the DNI script actually works (from unpacking the CDN bundle):**
- It does NOT select by the `nimbata_number_1` class. It TreeWalks ALL text nodes under
  `document.body` (only SCRIPT/STYLE/META ancestors excluded — NO visibility filter, so
  `display:none` spans get swapped too) and regex-matches the configured target numbers,
  whitespace-flexible (`(?:\s|%20|\u00A0|&nbsp;)?` between parts). `nimbata_number_1` matters
  only for the site's own anti-flash CSS and as a marker for our readers.
- Text in a non-anchor parent → it sets `parentNode.innerHTML`, injecting
  `<a data-nimbata="nimbata_number" href="tel:+...">DISPLAY</a>`. Text inside an `<a>` → it
  replaces the whole anchor with a clone (the React hazard above).
- It runs ONCE per full page load (guards on `window.dni...Loaded`, no popstate/history hook):
  spans re-rendered by SPA navigation revert to the raw number and are never re-swapped.

**Surviving SPA navigation:** keep ONE `.nimbata_number_1` span permanently mounted with a
constant text literal (never conditional, never templated) — React never touches its text
after mount, so the injected anchor survives all route changes (the sticky-bar span does this).
Consumers must NOT trust `querySelector` first-match: scan all `.nimbata_number_1` spans and
prefer any whose text differs from the raw target (`findNimbataSwappedNumber` in
`src/lib/nimbataExclusions.ts`, also the single source of truth for excluded campaign paths —
exact-or-subpath matching only, since e.g. `/en/furniture-assembly-bratislava` is a normal
tracked page that must not match the `/en/furniture-assembly` campaign base).

**CTA buttons must NOT be `<a href="tel:">`:** Nimbata clones ALL `<a href^="tel:">` elements on the page, not just the phone number display. The CTA "Zavolaj/Call Us" button was an `<a href="tel:">` — Nimbata cloned it, React updated its hidden original, and after SK→EN navigation the DOM showed the Nimbata clone with stale "ZAVOLAJ" text. Fix: change any interactive button with `href="tel:"` to `<button type="button">` with `onClick={() => { window.location.href = 'tel:...'; }}`. `<button>` elements are never targeted by Nimbata.
