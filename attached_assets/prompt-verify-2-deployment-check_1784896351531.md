# Prompt VERIFY-2 — Deployment investigation + full sweep vs. the complete migration spec (sofoservis.sk)

> Paste this entire text into the Replit agent. Verification only — do not change, fix, or deploy anything. No commits.

## Why this task exists

A previous verification pass reported `/montaz-nabytku` as serving the new template on the live domain. **That is contradicted by a fresh fetch of the live page just now**, which shows the OLD template: duplicate hero (visible H2 + hidden duplicate H1), duplicate footer, `<meta name="keywords">` present, old-URL menu links (`/stahovanie-bytov-domov`, `/vypratavanie-pivnic-garazi-nebytovych-priestorov`, etc.), old SEO title, self-linking "Orientačné ceny" card, and `href="#"` CTA buttons.

Two possibilities: (a) a regression happened after the earlier verification, or (b) the earlier verification was looking at a different deployment/branch than what `sofoservis.sk` actually serves. This task investigates which, and then does a full sweep of every page against the complete 5-sheet migration spec, since if (b) is true, earlier "confirmed" findings elsewhere may also be unreliable.

## Part A — Deployment investigation

1. Confirm what production branch/commit is configured to deploy to the `sofoservis.sk` domain (check `vercel.json`, project settings if visible in-repo, or git remote/branch config).
2. Show the git log for the last 15 commits touching `src/app/montaz-nabytku/`, `src/app/montaz-kuchyne/`, and `src/app/hodinovy-manzel-majster/` — dates, messages, whether they were merged to the production branch.
3. Confirm: does the **current HEAD of the production branch** contain a new-template version of `/montaz-nabytku`, or does new-template code for this page not exist in the repo at all yet?
4. Report plainly: is the montáž/handyman cluster (a) migrated in the repo but not deployed, (b) never migrated in the repo, or (c) migrated then reverted? Cite the commits.

## Part B — Full template sweep (all 5 steps from the migration spec, every page)

Re-run this properly this time — for **every** page listed below, check **all five** markers, not a sample:

- `<meta name="keywords">` present? (should be absent)
- Hero section: how many times in source? One visible `<h1>`, or hidden duplicate?
- Footer: how many times in source?
- Menu on this page: old-tree or new-tree URLs?
- "Orientačné ceny našich služieb": does it self-link to the current page?

Pages to check:

```
/stahovanie  /stahovanie/stahovanie-bytov-domov  /stahovanie/stahovanie-kancelarii-firiem
/stahovanie/stahovanie-tazkych-bremien  /stahovanie/medzinarodne-stahovanie
/stahovanie/stahovanie-bratislava  (+ 5 more moving cities, spot-check)
/vypratavanie  /vypratavanie/vypratavanie-bytov-domov  /vypratavanie/vypratavanie-pivnic-a-garazi
/vypratavanie/odvoz-stareho-nabytku  /vypratavanie/cistenie-vypratavanie-pozemkov
/vypratavanie/odvoz-likvidacia-stavebneho-odpadu  /vypratavanie/likvidacia-nebezpecneho-odpadu
/montaz-nabytku  /montaz-nabytku/bratislava  /montaz-kuchyne
/hodinovy-manzel-majster  /hodinovy-manzel-majster/bratislava
/buracie-prace  /buracie-prace/buranie-demolacia-domov  /buracie-prace/buranie-stien-priecok
/kontakt  /cennik
```

Output a single table: `URL | meta keywords | hero count | H1 count | footer count | menu (old/new) | pricing self-link (Y/N) | verdict (NEW/OLD/MIXED template)`.

## Part C — Title/H1/meta text check (Step 4 of the spec)

For every page in Part B, compare the live `<title>`, `<h1>`, and meta description against the "nový" (new) values specified in the migration sheets (moving, clearance, assembly, demolition/handyman sections). Report which pages already have the new text, which still have the old text, and which have neither (something else entirely).

## Part D — Redirect and city-cluster re-check

1. Re-verify `/odvoz-likvidacia-stavebneho-odpadu/{bratislava,galanta,nitra,senec,senica,trnava}` — do they still return 200 on the old tree, or have they been consolidated per the plan (non-Bratislava → 301 to hub, Bratislava → migrated)?
2. Re-verify Hlohovec and Levice pages are gone from every cluster (moving, clearance, waste, demolition, handyman) — list any that still exist.
3. Confirm the 77-internal-link count from the original audit — re-scan the whole site for `<a href>` to any old URL and report the current count.

## Report format

```
# VERIFY-2 report — <date>

## A. Deployment investigation
- Production branch/commit: ...
- Montáž/handyman cluster status: (a)/(b)/(c), with commit citations
- Explanation for the discrepancy with the earlier verification report

## B. Full template sweep
<table>

## C. Title/H1/meta status
<table: URL | current matches new spec? | notes>

## D. Redirects and city clusters
- Waste cluster: ...
- Hlohovec/Levice: ...
- Internal old-URL link count: ...

## Bottom line
Plain statement of what is actually live vs. what is still pending, so the next fix prompt targets the real state.
```

Stop after the report. Do not fix anything in this task.
