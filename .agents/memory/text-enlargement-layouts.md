---
name: Text enlargement in compact layouts
description: Why narrow viewport checks alone do not establish readable compact cards.
---

Test compact thumbnail-and-text layouts with enlarged root text separately from narrowed viewports, including long titles and metadata.

**Why:** A layout that passed at 320px with ordinary text still overflowed when text was doubled: thumbnail growth and metadata's intrinsic width left very little title space. Ordinary phone screenshots did not expose this.

**How to apply:** Keep thumbnails from unnecessarily growing with text, allow metadata to wrap, and let the layout change orientation when enlarged text needs more room. Content readability takes precedence over normal-size card-height targets.
