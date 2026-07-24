# Prompt FIX-3 — Remaining gaps from VERIFY-2 (sofoservis.sk)

> Paste this entire text into the Replit agent. These are the three confirmed open gaps from the latest verification — everything else already checked out clean.

## Rules

- Site content is in Slovak — never translate or reword copy.
- One commit per task (A, B, C), pushed to `main`. Vercel deploys from `main` automatically — after each push, verify the change is live on https://www.sofoservis.sk before reporting done.
- Out of scope: everything not listed below. Do not touch titles, meta, prices, or any page confirmed clean in VERIFY-2.

## Task A — Migrate/retire the construction-waste city cluster

All 7 still return 200 on the old tree and were never migrated:

```
/odvoz-likvidacia-stavebneho-odpadu/{bratislava,galanta,nitra,senec,senica,trnava,hlohovec}
```

Per the standing rule (city variants with no search demand are deleted + 301'd to the parent; only Bratislava survives as a city sub-page):

- `{galanta, nitra, senec, senica, trnava}` → **delete the page**, add 301/308 to `/vypratavanie/odvoz-likvidacia-stavebneho-odpadu`. Do not create new-tree pages for these.
- `hlohovec` → **delete the page**, 301/308 to `/vypratavanie/odvoz-likvidacia-stavebneho-odpadu` (this is also required by the site-wide Hlohovec retirement — it must not exist in any cluster).
- `bratislava` → **migrate** to `/vypratavanie/odvoz-likvidacia-stavebneho-odpadu/bratislava`, 301/308 from the old URL, update its canonical and JSON-LD to the new URL.
- Update any internal link that still points at any of these 7 old URLs.

**Acceptance:** all 6 non-Bratislava old URLs return 301/308 → `/vypratavanie/odvoz-likvidacia-stavebneho-odpadu` (200); no new-tree pages exist for those 6 cities; the Bratislava page lives at its new-tree URL (200) with canonical + JSON-LD updated and the old URL 301/308s to it.

## Task B — Fix Hlohovec/Levice 404s on hodinový manžel

```
/hodinovy-manzel-majster/hlohovec → currently 404
/hodinovy-manzel-majster/levice   → currently 404
```

These should never 404 — add 308 redirects (in `next.config.ts`, matching the pattern used for the other Hlohovec/Levice retirements) pointing both to `/hodinovy-manzel-majster` (the hub — no Bratislava-style sub-page exists for this service line, so there's no "novo vytvorenú stránku" target here).

**Acceptance:** both URLs return 308 → `/hodinovy-manzel-majster` (200). No other hodinový manžel routes affected.

## Task C — Fix the "Orientačné ceny" self-link bug on 5 pages

On `/montaz-nabytku`, `/montaz-nabytku/bratislava`, `/montaz-kuchyne`, `/hodinovy-manzel-majster`, and `/hodinovy-manzel-majster/bratislava`, the "Orientačné ceny našich služieb" section shows a card linking back to the page the visitor is already on. This is the same rule the sťahovanie/vypratávanie/búracie clusters already follow correctly — clicking "Zistiť viac" on your own page just scrolls you up, per the original audit finding.

In `ServicePricing.tsx`, the `excludedKeysForPath()` (or equivalent) logic currently covers the sťahovanie/vypratavanie/buracie clusters but not montáž/hodinový. Add the missing keys so each of these 5 pages excludes its own card from the pricing section, the same way the other clusters already do.

**Acceptance:** none of the 5 pages shows a pricing card linking to itself; the other cards on each page are unaffected; no other page's pricing section changes behavior.

## Final report

For each task: files changed, before/after for the specific URLs or pages touched, confirmation the change is live on the production domain. Also re-confirm: internal old-URL link count is still 0 after these changes (Task A adds new links — make sure none of them are stale).
