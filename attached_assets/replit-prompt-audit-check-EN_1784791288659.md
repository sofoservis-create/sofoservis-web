# Replit prompt — FULL SITE AUDIT (sofoservis.sk)

> Paste this entire text into the Replit agent as the task.

---

## What this task is

This is a **verification task, not an implementation task.**

**DO NOT CHANGE ANYTHING.** Do not fix, add, delete, or refactor — not even an obvious bug. Just record it in the report. No commits, no deploys.

The site **sofoservis.sk** has gone through a series of SEO fixes and a URL restructure into the trees `/stahovanie/...` and `/vypratavanie/...`. Some of it is done, some isn't. I need an **accurate, evidence-backed picture of the current state** — what's finished, what isn't, and exactly where it's stuck.

The output is **one report** in the structure given at the end. For every item give a status: `DONE` / `PARTIAL` / `NOT DONE` / `CANNOT VERIFY` — and for every finding cite a **specific file and line, or a URL**. Without evidence, do not write "done".

If you're unsure about something, mark it `CANNOT VERIFY` and explain why. **Do not guess and do not infer.**

Note: the site content is in Slovak. You are only reading and reporting — never translate or alter any Slovak text.

---

## How to proceed

Work through sections A → F in order. You may output each section's portion of the report as you go, but **don't stop and wait** — I want the complete report at the end.

Check the **actual state** — both the repository code and the rendered HTML output. Don't rely on what "should" be there.

---

## Section A — Routing and redirects

For **every** old URL, determine the HTTP status code and the redirect target.

Expected state: the old URL returns **301** and `Location` points directly at the final new URL, which returns **200**.

Old URLs to check (this list is indicative — **add any other old routes you find in the code**):

```
/stahovanie-bytov-domov
/stahovanie-kancelarii-firiem
/stahovanie-preprava-nabytku
/stahovanie-tazkych-bremien
/medzinarodne-stahovanie
/stahovanie-bratislava
/stahovanie-nitra
/stahovanie-trnava
/stahovanie-pezinok
/stahovanie-galanta
/stahovanie-piestany
/stahovanie-senec
/stahovanie-senica
/stahovanie-stupava
/stahovanie-komarno
/stahovanie-malacky
/stahovanie-samorin
/stahovanie-sala
/stahovanie-levice
/stahovanie-hlohovec
/vypratavanie-bytov-domov
/vypratavanie-pivnic-garazi-nebytovych-priestorov
/cistenie-vypratavanie-pozemkov-nehnutelnosti
/vypratavanie-odvoz-stareho-nabytku
/odvoz-likvidacia-stavebneho-odpadu
/likvidacia-nebezpecneho-odpadu-starych-spotrebicov
/vypratavanie-bratislava
/vypratavanie-pezinok
```

Check specifically:

1. **Redirect chains** — is there any `301 → 301 → 200`? List every instance.
2. **Old routes still returning 200** — i.e. pages that were never migrated. This is the most important finding in this section.
3. **`/stahovanie-hlohovec` and `/stahovanie-levice`** — these should return 301 to `/stahovanie`. Verify.
4. **International moving country pages** — find every existing sub-page (e.g. `/medzinarodne-stahovanie/ceska-republika`, `/medzinarodne-stahovanie/spanielsko`) and list its URL and status. **These pages perform well and must not be lost** — I want to know whether they work and at what address.

**Output A:** table `old URL | status code | target | target status code | OK/problem`.

---

## Section B — Internal links pointing at old URLs

This is the most common source of problems in practice. Search the **entire repository and the rendered HTML** for every internal link that points at an old URL.

Include places where links are generated dynamically or from data/config files:

- main navigation menu (all submenu levels)
- footer (navigation and contact blocks)
- "Súvisiace služby" (related services)
- "Orientačné ceny našich služieb" cards ("Zistiť viac →" buttons)
- "Komplexné služby …" / "Všetky … služby na jednom mieste" tiles
- city lists ("… po celom Slovensku", "Sťahujeme v … a okolí")
- links inside body text, FAQs, CTA buttons
- structured data (schema.org — `url`, `sameAs`, breadcrumbs)
- `canonical`, `og:url`, `hreflang`
- config and data files containing service or city lists

**Specific findings I want confirmed or refuted** (I found these on the live site):

1. On `/stahovanie/stahovanie-bytov-domov`, a card in "Orientačné ceny našich služieb" links to the **old** URL `/vypratavanie-bratislava`. Verify, and find which file generates it.
2. On `/montaz-nabytku`, the **entire menu contains old URLs** (`/stahovanie-bytov-domov`, `/vypratavanie-bytov-domov`, `/cistenie-vypratavanie-pozemkov-nehnutelnosti`, etc.). Find out why — does this page use a different menu component from the rest of the site?

**Output B:** list of `file:line | link to old URL | should point to`.

---

## Section C — Template state per page

For **every** page on the site, determine whether it runs on the **new** or the **old** template. Distinguishing markers:

| Marker | New template | Old template |
|---|---|---|
| `<meta name="keywords">` | absent | **present** |
| Hero section in source | once | **twice** (desktop + mobile) |
| Hero heading | one visible `<h1>` | **visible H2 + hidden H1** with identical text |
| Footer in source | once | **twice** |
| "Cenník …" (price list) section | present | **absent** |
| Menu | new URLs (`/stahovanie/...`) | **old URLs** |

Cover at least these pages (and add any others you find):

```
/                              /cennik
/stahovanie  + all sub-pages and city pages
/vypratavanie + all sub-pages and city pages
/montaz-nabytku                /montaz-nabytku/bratislava
/montaz-kuchyne
/hodinovy-manzel-majster       /hodinovy-manzel-majster/bratislava
/buracie-prace + sub-pages
/kontakt      /o-nas      /referencie
/zasady-pouzivania-cookies
/zasady-spracovania-osobnych-udajov
/vseobecne-obchodne-podmienky
/en/... (all English pages)
```

**I already know `/montaz-nabytku` is on the old template** — confirm it, and more importantly find out **which other pages are in the same state.** I suspect the whole furniture-assembly + handyman cluster.

**Output C:** table `URL | template (new/old) | which old-template markers it shows`.

---

## Section D — Original SEO audit items

Verify whether these are satisfied **across the whole site**, not just on a sample. State which pages fail.

1. **One visible H1 per page.** No hidden duplicate heading with identical text. List pages with 0 or 2+ H1s.
2. **No duplicated form headings.** The contact form heading used to appear 4× as H3, with up to 26 H3s on a single page. **Report the H3 count for every page** — flag any page where the count is unusually high.
3. **Navigation menu must not depend on JS.** Verify that all links — including the most deeply nested submenu items — are real `<a href>` elements present in the HTML **at load time**, without requiring a click or hover. Test with **JavaScript disabled**: are all links still in the DOM and traversable? Also verify the menu isn't rendered twice (a separate desktop block and mobile block containing the same links).
4. **`<meta name="keywords">`** must not appear anywhere. List every page that still has it.
5. **`sitemap.xml`** — report the URL count, verify **every** entry returns 200 and is canonical, and that no redirected or retired URL is included (including Hlohovec and Levice). Also check `robots.txt` — does it point at the correct sitemap and block nothing it shouldn't?
6. **Price lists on service sub-pages** — does every service sub-page have a price-list section with a page-specific heading, placed **above** the "Orientačné ceny našich služieb" section?
7. **"Orientačné ceny" must not link to itself** — the current page's own service must not appear in that section (otherwise "Zistiť viac" just scrolls the user up the same page). List every instance where it does. (I know this happens on `/montaz-nabytku`.)
8. **Company billing details** — `/kontakt` should have a "Fakturačné údaje" block below the address. Check the footer too.

---

## Section E — Price consistency

Find **every** price occurrence across the site (hero copy, price tables, "orientačné ceny" cards, meta descriptions, FAQs, body sections) and check whether they contradict each other.

Canonical values:

| Service | Correct price |
|---|---|
| Moving / clearance — 1 worker | **30 €/hod** |
| 2 workers | 60 €/hod |
| 3 workers – AKCIA | 80 €/hod |
| **Furniture assembly — hourly rate** | **25 €/hod** |
| Kitchen assembly | od 120 €/m |
| Call-out fee (assembly) | od 25 € |

Known discrepancies to verify:

- On `/montaz-nabytku` the hero says "od 25 €/hod" but the "Orientačné ceny" card says "od 20 €". **25 €/hod is correct.**
- Anywhere "od 25 €/hod" appears as the **moving** hourly rate, it's wrong — it should be 30 €/hod. **Careful: for furniture assembly, 25 € is correct** — do not conflate these two cases.

**Output E:** table `URL | location on page | price shown | correct price`.

---

## Section F — Technical and miscellaneous

1. **Dead links.** Find links pointing to `#` or nowhere. (On `/montaz-nabytku` I saw several CTA buttons with `href="#"` — "Získajte cenovú ponuku", "Objednať montáž nábytku".) List them all.
2. **Internal 404s.** Is there any link to a non-existent page?
3. **City links with no destination.** On `/vypratavanie`, in the "Vypratávanie po celom Slovensku" list, most cities (Nitra, Trnava, Pezinok, Galanta, Piešťany, Senec, Senica, Stupava, Komárno, Malacky, Šamorín) link back to `/vypratavanie` itself — only Bratislava has its own page. Verify and report the exact state.
4. **Company details in the footer.** Determine which pages show **Sofoservices s. r. o. (IČO 55333800)** and which show **MakySofoMont s.r.o. (IČO 56284497)** in the footer. Just report it — **change nothing**, this split by service type is intentional.
5. **hreflang SK ↔ EN.** Verify the pairing points at the **new** SK addresses, not the old ones. EN URLs stay unchanged.
6. **Structured data.** Is it valid? Does it contain any old URLs?

---

## Report format

```
# AUDIT sofoservis.sk — <date>

## Summary
- Overall: X items DONE, Y PARTIAL, Z NOT DONE
- Top 3 findings (ordered by impact)

## A. Routing and redirects — <status>
   <table + findings>

## B. Internal links to old URLs — <status>
   <file:line list>

## C. Page template state — <status>
   <table>

## D. Original audit items — <status for each item 1-8>

## E. Price consistency — <status>
   <table of discrepancies>

## F. Technical and miscellaneous — <status for each item 1-6>

## What I'd fix first
   <priority-ordered list with effort estimate — but DO NOT do it>
```

---

## Final reminder

**This is a check only. Do not modify a single file.** If you can't verify something, write `CANNOT VERIFY` and why — that's a better answer than a guess. The report must be truthful, not optimistic.
