---
name: Next dev/build cache conflict
description: Recovery and prevention for missing Next.js development manifest errors after build activity.
---

Running `next build` while the Next.js Turbopack development workflow is serving the same `.next` directory can leave development manifests and temporary build-manifest files missing. The resulting “missing required error components, refreshing...” message can affect otherwise valid routes.

**Why:** The route returned HTTP 200 and rendered normally immediately after a workflow restart, while logs showed missing `.next/static/development/_buildManifest.js.tmp.*` files rather than a route compilation error.

**How to apply:** Run production builds only when the dev workflow is not concurrently writing `.next`, or restart the dev workflow immediately after a build before testing routes.