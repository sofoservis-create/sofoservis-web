---
name: <details>-based dropdowns and pointer detection
description: Why CSS-hover dropdowns inside <details> silently stop working, and why (hover: hover) is the wrong capability check.
---

## A closed `<details>` will not render its contents, no matter what CSS you put on the child

The common trick of forcing a dropdown panel to `display: block` inside a *closed*
`<details>` and revealing it with a `:hover` rule **does not work in current Chrome**.
The UA hides the contents through `::details-content { content-visibility: hidden }`,
which skips the whole subtree. Styling the child cannot override a skip on its
container, so the panel stays unpainted even though `:hover` matches and the
computed classes look correct.

**Why:** measured in Chrome — `:hover` matched and the hover classes applied, yet the
panel still reported `visibility: hidden` / `opacity: 0`. Setting `details.open = true`
painted it immediately. The element's real `open` state is the only gate.

**How to apply:** if a dropdown lives inside `<details>`, the panel must be revealed
by genuinely opening it — drive `open` from state. Do not debug this by tweaking
z-index, opacity, or specificity; measure `getComputedStyle(details, '::details-content').contentVisibility`
first. A useful tell: the panel works on click but never on hover.

Keep `<details>` when the same markup also serves a mobile accordion — control `open`
above the breakpoint and leave the element uncontrolled below it, so the native
accordion is untouched. Sync native toggles (keyboard, mobile taps) back into state
via `onToggle`, and ignore the event when `e.target` is a nested `<details>`.

## Use `event.pointerType`, not the `(hover: hover)` media query

`(hover: hover)` describes the device's *primary* input, so it misreports hybrids: a
touchscreen laptop claims hover it may not be using, a tablet with a mouse denies
hover it has.

**Why:** it is also **`false` in headless Chromium**. Gating hover behaviour on it
makes automated UI tests report a working feature as broken — the test drives a real
mouse, the code refuses to react, and the failure looks like a hydration or state bug.
The giveaway is click working while hover does nothing: the signature of a
touch-device code path being taken on a desktop.

**How to apply:** read `e.pointerType` from `onPointerEnter` / `onPointerLeave` and act
only on `"mouse"`. Remember the last pointer type in a ref so the click handler can
tell a tap from a mouse click and toggle explicitly for touch.

## Confirming hydration before blaming it

When interactive behaviour is missing, check whether React actually attached before
theorising about hydration: on the DOM node, `__reactFiber$*` proves hydration ran and
`__reactProps$*` shows which handlers and props are live. A controlled prop appearing
there (e.g. `open: false`) confirms the component reached its post-mount state.
