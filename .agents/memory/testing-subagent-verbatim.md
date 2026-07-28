---
name: Getting raw numbers out of the testing subagent
description: How to force the e2e testing subagent to report exact measured values instead of prose summaries
---

# Getting raw numbers out of the testing subagent

**The rule:** When a `runTest` plan collects measurements (performance JSON, computed styles, counts), the plan AND the technical documentation must both (1) define an exact output format like `STEP3_JSON=<json>` per value, and (2) state that a report missing those verbatim lines is a FAILED test.

**Why:** With softer phrasing ("report the exact JSON, do not summarize") the subagent sometimes replies "captured the longtask JSON" without including it — the run is then wasted and must be repeated.

**How to apply:** One `KEY=<value>` line per measurement; keep measurement runs separate from interaction-heavy checks; remember each runTest is expensive, so batch two loads (cold + reload) into one run when estimating variance.

## Responsive-breakpoint checks give false negatives

**The rule:** Do not trust a tester verdict that resizes the viewport mid-run and then reads
`getComputedStyle`. Resizing an already-loaded page does not reliably re-evaluate CSS media
queries in that harness, so a `lg:hidden` element reports `display:block` at desktop widths and
the run is marked FAILED even though the CSS is correct.

**Why:** Cost a full debugging cycle chasing a phantom Tailwind breakpoint bug. The utility was
present on the element and the `@media (width >= 1024px){ .lg\:hidden{display:none} }` rule was
present in the shipped CSS — both verifiable far more cheaply than an e2e run.

**How to apply:** To verify a responsive breakpoint, either (1) instruct the tester to open a NEW
context already at the target viewport rather than resizing, or (2) skip e2e entirely and confirm
statically: grep the compiled CSS for the utility and check which `@media` block encloses it
(find the last `@media` line number before the rule).
