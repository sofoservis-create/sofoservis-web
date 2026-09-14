---
name: Preview CSS after HMR
description: How to distinguish stale preview styling from a real Tailwind or responsive-layout defect.
---

After a large Tailwind redesign, a Replit app-preview screenshot can briefly show new markup with an older CSS chunk during development hot reload. Do not treat one such capture as proof that static utility classes are missing.

**Why:** A screenshot showed the redesigned copy while the new yellow background, responsive type size, and aspect ratio were absent; a fresh automated browser session confirmed all computed styles and dimensions were correct.

**How to apply:** If markup is current but multiple unrelated new utilities appear missing, inspect computed styles in a fresh browser context and confirm generated dimensions before editing the layout or restarting repeatedly.