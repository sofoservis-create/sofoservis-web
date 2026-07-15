---
name: Nimbata DNI vs React DOM ownership
description: How to keep fixed phone numbers safe from Nimbata call-tracking swaps on SPA navigation in the Next.js app
---

# Nimbata DNI vs React DOM ownership

**The rule:** To show a fixed (non-tracked) phone number on some routes while Nimbata DNI swaps numbers elsewhere, wrap the phone `<a>`/`<Link>` in a layout-transparent wrapper (`<span key={pathname} className="contents">`) so React remounts the whole subtree on route change. Never put `key={pathname}` directly on an element Nimbata has touched.

**Why:** Nimbata does not just edit text — it REPLACES the phone `<a>` element with its own clone. React then keeps updating its original, now-detached node, so prop/class/key changes on inner spans never reach the visible DOM (`querySelectorAll` finds 0 of React's spans). Putting `key` on the replaced `<a>` itself crashes React with `NotFoundError: removeChild` because the node is no longer where React left it. Remounting a wrapper Nimbata never touched discards the clone cleanly — this is why the Footer's keyed PhoneReveal component always worked while identical tweaks on the bare navbar anchor failed.

**How to apply:** Any element whose text a third-party DOM-mutating script may rewrite: (1) key a WRAPPER, not the element; (2) drop the script's target class (`nimbata_number_1`) on routes where swapping is forbidden; (3) optionally keep a `data-correct` attribute + MutationObserver restore as defense-in-depth (converges, no loop, because restore only writes when text differs). Debug such issues by inspecting live DOM after SPA navigation (e2e/Playwright), not by reasoning about React alone — detached-node symptoms (attribute count = 0 in document) are the giveaway.

**Context:** Nimbata script ID 895390109815 (cdn.dni.nimbata.com); swap target is the sťahovanie number; montáž number 0952 044 363 must never swap. Special routes covered by `shouldScrollToTop` (Navbar) / `isSpecialRoute` (Footer): 3 SK + 3 EN montáž/handyman paths.
