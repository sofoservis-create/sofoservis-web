---
name: Scroll-triggered UI vs browser scroll restoration
description: Why an on-mount scrollY check makes scroll-revealed elements appear immediately on refresh, and how to gate them on real user input instead
---

# Scroll-triggered UI vs browser scroll restoration

**The rule:** For any element that must be "hidden on page load, revealed after scrolling past
N pixels", do NOT decide visibility by reading `window.scrollY` on mount. Gate the reveal on the
first genuine user-input event — `wheel`, `touchmove`, or `keydown` — and only then start applying
the scroll threshold.

**Why:** `history.scrollRestoration` defaults to `auto`, so refreshing deep in a page restores the
previous offset before/around hydration. An on-mount `setVisible(scrollY > N)` therefore evaluates
against the restored offset and the element appears instantly on reload, which reads as a bug even
though the threshold logic is correct. Reproduced directly: reload at a restored `scrollY=1184`
showed the element with no user scroll at all.

The obvious workaround — dropping the mount check and relying on the scroll listener — does not
work: scroll restoration itself emits a synthetic `scroll` event, which arms the listener and
reveals the element anyway. Comparing scroll positions across events is also unreliable because
restoration can land either side of mount. `wheel`/`touchmove`/`keydown` are never synthesized by
restoration, so they are the only trustworthy signal of real user intent.

**How to apply:** Keep an `armed` flag in the effect. `scroll` updates visibility only once armed;
the input listeners set `armed` and run one update. Remove all four listeners on cleanup. For
mobile-only elements `touchmove` is the one that matters; include `wheel`/`keydown` for desktop and
for e2e runs driving `page.mouse.wheel`.

**Verifying:** A test that scrolls with `window.scrollTo` will NOT catch a regression here, because
it bypasses user-input events entirely — it can even mask the bug by never arming the flag. The
test plan must specify a real gesture (`page.mouse.wheel` / touch swipe) and must include an
explicit reload step asserting the element stays hidden while `scrollY` is still above the
threshold.
