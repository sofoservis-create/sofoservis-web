# Prompt 2/6 — FIX: internal links (sofoservis.sk)

> Paste this entire text into the Replit agent. Run AFTER Prompt 1 (verification) — its results are already incorporated below.

## Verification results already incorporated

- **GAP LIST: none.** All 123 old URLs redirect correctly (one hop, correct targets). There are **no redirect gaps to fix** — this task is internal links only. Do not add, change, or remove any redirects.
- **Live is served via Vercel, not the Replit deployment.** Pushing the commit to GitHub is what ships it — Vercel auto-builds from the repo. Do not treat a Replit deploy as the release step.
- **Naming drift (relevant to one link target):** `/vypratavanie/odvoz-stareho-nabytku/bratislava` does **not** exist in the new tree — the old Bratislava sub-page merged into the service hub. Any internal link that pointed at `/vypratavanie-odvoz-stareho-nabytku/bratislava` must therefore go to `/vypratavanie/odvoz-stareho-nabytku` (the hub), not to a `/bratislava` sub-URL.

## Rules

- Site content is in Slovak — **never translate or reword copy.** This task touches `href` values only.
- One commit, pushed to GitHub. After the push, **verify the change actually appears on https://www.sofoservis.sk** (Vercel build) before reporting done. If the live site doesn't update, stop and report — the GitHub→Vercel pipeline needs attention.
- **Stop and ask** if any link's correct target is ambiguous — don't guess.
- Out of scope: redirects, prices, titles/meta, JSON-LD, hreflang, sitemap, page creation or deletion. The 38 deleted international sub-pages stay deleted. The footer company split (MakySofoMont vs Sofoservices) is intentional.

## Task — Replace all internal links pointing at old URLs

Every internal link to an old URL currently causes a redirect hop. Fix at the source: point each link **directly at the final destination** (where the old URL redirects to today) — never at an intermediate.

Known sources from the audit (fix each, then scan the whole repo for more):

| File | Issue | Should point to |
|---|---|---|
| `src/components/layout/Navbar.tsx:101–176` | SK↔EN language-switcher map uses old SK URLs | new-tree URLs |
| `src/components/sections/ServiceAreas.tsx:26+` | homepage city grid links 14 old city URLs | `/stahovanie/stahovanie-<city>` |
| `src/components/sections/ServicePricing.tsx:35` | `/vypratavanie-bratislava` | `/vypratavanie/vypratavanie-bytov-domov/bratislava` |
| `src/components/layout/Footer.tsx:88` | `/stahovanie-preprava-nabytku` | `/stahovanie` |
| `src/components/sections/Features.tsx:50` | `/stahovanie-preprava-nabytku` | `/stahovanie` |
| `src/app/stahovanie/page.tsx:125,132,139,146` | `/stahovanie-klavira`, `/stahovanie-trezorov`, `/stahovanie-strojov-zariadeni` → `/stahovanie/stahovanie-tazkych-bremien`; `/stahovanie-preprava-nabytku` → `/stahovanie` | as listed |
| `src/app/stahovanie/stahovanie-bratislava/page.tsx:115+` | BA district links (`/stahovanie-petrzalka`, `-ruzinov`, `-stare-mesto`, `-nove-mesto`, `-karlova-ves`, `-dubravka`) | `/stahovanie/stahovanie-bratislava` |
| `src/app/montaz-nabytku/page.tsx:96` | `/stahovanie-bytov-domov` → `/stahovanie/stahovanie-bytov-domov`; `/stahovanie-preprava-nabytku` → `/stahovanie` | as listed |

City→target mapping for the ServiceAreas grid and the Navbar map (targets confirmed live in Prompt 1):

```
/stahovanie-{bratislava,trnava,pezinok,senica,nitra,komarno,senec,
piestany,galanta,malacky,samorin,sala,stupava}  → /stahovanie/stahovanie-<city>
/stahovanie-hlohovec, /stahovanie-levice        → /stahovanie
/vypratavanie-bratislava                        → /vypratavanie/vypratavanie-bytov-domov/bratislava
/vypratavanie-<any other city>                  → /vypratavanie
```

**Language-switcher care:** city-level SK↔EN pairs must stay per-city (e.g. `/en/moving-nitra` ↔ `/stahovanie/stahovanie-nitra`) — don't collapse city pairs onto the hub. Hlohovec/Levice EN pairs (if any) map to `/stahovanie`.

The audit counted **77 distinct old-URL links across 50 of 203 pages.** After your changes, re-run the site-wide scan and report the count: it must be **0**.

## Acceptance

- No rendered page contains an `<a href>` to an old URL.
- No internal link produces a 301/308 when followed.
- Change pushed to GitHub and visible on the live domain.
- Report: list of files changed, per-file link count fixed, final scan count (0).
