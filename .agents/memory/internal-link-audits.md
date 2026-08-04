---
name: Internal link audits on this site
description: How to crawl this site for broken/self-referential internal links without getting false results.
---

# Auditing internal links

## Always retry on 5xx when crawling the dev server

Any script that fetches many pages from the local dev server MUST retry a few times on a
5xx response before recording a failure.

**Why:** this project has a known, intermittent `Invalid hook call` /
`Cannot read properties of null (reading 'useContext')` error that makes random pages
return HTTP 500 on some requests and 200 on the very next one. A single-shot crawl
reports these as dead links and sends you chasing a defect that is not there. It hit
pages that had not been touched at all, which is the tell.

**How to apply:** retry ~4 times with a short delay, treat only a persistent 5xx as real.
Confirm any suspected dead link by re-fetching it directly a couple of times before
reporting it.

## The defect to look for is self-links, not 404s

Dead internal links are rare here. The recurring defect is a link whose target is the page
it already sits on, so clicking it does nothing. Two sources:

- City lists passed to the `LocationMap` section.
- Service cards passed to the `Features` section.

Both components render a non-clickable element when the item has no destination, so the
fix is data-only: drop the link, keep the visible name.

**Why:** the card/city interfaces originally required a destination, so authors filled it
with the current page's own path instead of leaving it out.

## Rule for deciding whether a city keeps its link

Keep the link only when the target route exists **and** is specific to that city — i.e.
the target path contains that city's slug. A link that merely resolves is not enough;
pointing every city at the shared hub page is the bug, not the fix.

## Counting gotcha

Deduplicating links per page hides the scale of this problem: a page with nine
self-referential cards collapses to one unique bad target. Count raw occurrences in the
source data when sizing the work, and unique targets only when reporting per-page health.
