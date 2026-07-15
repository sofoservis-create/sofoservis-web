---
name: Getting raw numbers out of the testing subagent
description: How to force the e2e testing subagent to report exact measured values instead of prose summaries
---

# Getting raw numbers out of the testing subagent

**The rule:** When a `runTest` plan collects measurements (performance JSON, computed styles, counts), the plan AND the technical documentation must both (1) define an exact output format like `STEP3_JSON=<json>` per value, and (2) state that a report missing those verbatim lines is a FAILED test.

**Why:** With softer phrasing ("report the exact JSON, do not summarize") the subagent sometimes replies "captured the longtask JSON" without including it — the run is then wasted and must be repeated.

**How to apply:** One `KEY=<value>` line per measurement; keep measurement runs separate from interaction-heavy checks; remember each runTest is expensive, so batch two loads (cold + reload) into one run when estimating variance.
