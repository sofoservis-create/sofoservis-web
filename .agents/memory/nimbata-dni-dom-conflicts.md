---
name: Nimbata DNI vs React DOM ownership
description: How to keep fixed phone numbers safe from Nimbata call-tracking swaps on SPA navigation in the Next.js app
---

# Nimbata DNI vs React DOM ownership

**The rule:** To show a fixed (non-tracked) phone number on some routes while Nimbata DNI swaps numbers elsewhere, wrap the phone `<a>`/`<Link>` in a layout-transparent wrapper (`<span key={pathname} className="contents">`) so React remounts the whole subtree on route change. Never put `key={pathname}` directly on an element Nimbata has touched.

**Why:** Nimbata does not just edit text — it REPLACES the phone `<a>` element with its own clone. React then keeps updating its original, now-detached node, so prop/class/key changes on inner spans never reach the visible DOM (`querySelectorAll` finds 0 of React's spans). Putting `key` on the replaced `<a>` itself crashes React with `NotFoundError: removeChild` because the node is no longer where React left it. Remounting a wrapper Nimbata never touched discards the clone cleanly — this is why the Footer's keyed PhoneReveal component always worked while identical tweaks on the bare navbar anchor failed.

**How to apply:** Any element whose text a third-party DOM-mutating script may rewrite: (1) key a WRAPPER, not the element; (2) drop the script's target class (`nimbata_number_1`) on routes where swapping is forbidden; (3) keep a `data-correct` attribute + MutationObserver restore as defense-in-depth. The wrapper remount alone is NOT enough: Nimbata persists across SPA navigation and can re-swap the freshly mounted anchor later (timing race — e2e tests were flaky on this). The observer must watch `document.body` (childList+subtree+characterData), not the original spans (they go detached and never fire). Crucially, `cloneNode(true)` copies attributes, so the clone still carries `data-correct` — a document-wide `querySelectorAll("span[data-correct]")` restore fixes clones too (text + anchor href + aria-label). Converges, no loop, because it only writes when values differ. Debug by inspecting live DOM after SPA navigation (e2e/Playwright), not by reasoning about React alone — detached-node symptoms (attribute count = 0 in document) are the giveaway.

**Perf caveat:** A body-wide observer fires on EVERY DOM mutation — during first load (hydration, GTM injection, Nimbata swaps) that is dozens of callbacks, each doing a document-wide `querySelectorAll`, which blocks the main thread and made the nav dropdown stutter. The observer callback must stay coalesced via `requestAnimationFrame` (one restore per frame, cancel on cleanup). Restores still land within a frame — verified by e2e swap simulation (textOk/hrefOk true).
