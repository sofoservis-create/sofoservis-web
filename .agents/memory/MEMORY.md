# Memory Index

- [Nimbata DNI vs React DOM](nimbata-dni-dom-conflicts.md) — Nimbata swaps phone anchors with clones; key a `display:contents` wrapper, never the touched element, plus body-wide observer guard (must stay rAF-coalesced).
- [First-load perf decisions](perf-first-load.md) — GTM stays lazyOnload (watch GA4 volume), below-fold sections keep `cv-auto`; long-task metrics in this container are noisy.
- [Scroll-triggered UI on reload](scroll-triggered-ui-on-reload.md) — never decide "hidden until scrolled past N" from scrollY on mount; scroll restoration (and its synthetic scroll event) reveals it — arm on wheel/touchmove/keydown.
- [Testing subagent output](testing-subagent-verbatim.md) — the e2e subagent summarizes numbers away unless the plan demands verbatim `KEY=<json>` lines and calls a report without them a failed test.
