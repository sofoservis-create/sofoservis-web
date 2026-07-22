# Replit task: restructure /stahovanie URL tree + 301 redirects (sofoservis.sk)

## Goal
Reorganize the moving-service pages into a logical tree under `/stahovanie/`, and add a **permanent 301 redirect** from every old (current) URL to its new target. Content of moved pages must be preserved. Two city pages (Hlohovec, Levice) must be **fully removed**, not moved.

## Hard rules
- Every redirect must be **301 (permanent)**.
- Redirect old → **final target directly** — never create redirect chains.
- After moving a page, update **all internal links + the navigation menu** to point to the new URL.
- Update `sitemap.xml`: add the new URLs, remove every deleted URL.
- Leave `/` and `/stahovanie` unchanged.
- No old URL may return 404 — each must 301 somewhere below.
- Trailing-slash and non-www/www variants should resolve to the same 301.

---

## 1) MOVE pages (relocate to new nested URL, keep content, 301 old → new)

| Old (current) URL | New URL |
|---|---|
| /stahovanie-bytov-domov | /stahovanie/stahovanie-bytov-domov |
| /stahovanie-kancelarii-firiem | /stahovanie/stahovanie-kancelarii-firiem |
| /stahovanie-tazkych-bremien | /stahovanie/stahovanie-tazkych-bremien |
| /medzinarodne-stahovanie | /stahovanie/medzinarodne-stahovanie |
| /stahovanie-bratislava | /stahovanie/stahovanie-bratislava |
| /stahovanie-trnava | /stahovanie/stahovanie-trnava |
| /stahovanie-pezinok | /stahovanie/stahovanie-pezinok |
| /stahovanie-senica | /stahovanie/stahovanie-senica |
| /stahovanie-nitra | /stahovanie/stahovanie-nitra |
| /stahovanie-komarno | /stahovanie/stahovanie-komarno |
| /stahovanie-senec | /stahovanie/stahovanie-senec |
| /stahovanie-piestany | /stahovanie/stahovanie-piestany |
| /stahovanie-galanta | /stahovanie/stahovanie-galanta |
| /stahovanie-malacky | /stahovanie/stahovanie-malacky |
| /stahovanie-samorin | /stahovanie/stahovanie-samorin |
| /stahovanie-sala | /stahovanie/stahovanie-sala |
| /stahovanie-stupava | /stahovanie/stahovanie-stupava |

---

## 2) DELETE pages + 301 redirect to a parent

**Delete and 301 → `/stahovanie`:**
- /stahovanie-preprava-nabytku

**Delete and 301 → `/stahovanie/stahovanie-tazkych-bremien`:**
- /stahovanie-klavira
- /stahovanie-strojov-zariadeni
- /stahovanie-trezorov

**Delete and 301 → `/stahovanie/stahovanie-bratislava`** (BA districts):
- /stahovanie-petrzalka
- /stahovanie-ruzinov
- /stahovanie-stare-mesto
- /stahovanie-nove-mesto
- /stahovanie-karlova-ves
- /stahovanie-dubravka

**Delete and 301 → `/stahovanie/medzinarodne-stahovanie`** (all international variants):
- /stahovanie-na-slovensko
- /stahovanie-zo-slovenska
- /medzinarodne-stahovanie/vieden
- /medzinarodne-stahovanie/brno
- /medzinarodne-stahovanie/praha
- /medzinarodne-stahovanie/budapest
- /medzinarodne-stahovanie/berlin
- /medzinarodne-stahovanie/mnichov
- /medzinarodne-stahovanie/frankfurt
- /medzinarodne-stahovanie/hamburg
- /medzinarodne-stahovanie/varsava
- /medzinarodne-stahovanie/zurich
- /medzinarodne-stahovanie/amsterdam
- /medzinarodne-stahovanie/brusel
- /medzinarodne-stahovanie/pariz
- /medzinarodne-stahovanie/londyn
- /medzinarodne-stahovanie/dublin
- /medzinarodne-stahovanie/kodane
- /medzinarodne-stahovanie/oslo
- /medzinarodne-stahovanie/rim
- /medzinarodne-stahovanie/stockholm
- /medzinarodne-stahovanie/rakusko
- /medzinarodne-stahovanie/madarsko
- /medzinarodne-stahovanie/ceska-republika
- /medzinarodne-stahovanie/polsko
- /medzinarodne-stahovanie/nemecko
- /medzinarodne-stahovanie/taliansko
- /medzinarodne-stahovanie/svajciarsko
- /medzinarodne-stahovanie/holandsko
- /medzinarodne-stahovanie/belgicko
- /medzinarodne-stahovanie/dansko
- /medzinarodne-stahovanie/francuzsko
- /medzinarodne-stahovanie/anglicko
- /medzinarodne-stahovanie/svedsko
- /medzinarodne-stahovanie/spanielsko
- /medzinarodne-stahovanie/norsko
- /medzinarodne-stahovanie/irsko
- /stahovanie-z-anglie-na-slovensko
- /stahovanie-z-nemecka-na-slovensko
- /stahovanie-z-rakuska-na-slovensko
- /stahovanie-z-holandska-na-slovensko
- /stahovanie-z-francuzska-na-slovensko
- /stahovanie-z-usa-na-slovensko

> Fallback rule if any international URL isn't listed above: any path matching
> `/medzinarodne-stahovanie/*`, `/stahovanie-z-*-na-slovensko`,
> `/stahovanie-na-slovensko`, or `/stahovanie-zo-slovenska`
> → delete page, 301 → `/stahovanie/medzinarodne-stahovanie`.

---

## 3) FULLY REMOVE — Hlohovec & Levice
These two cities are being dropped from coverage entirely (do **not** create nested pages for them):
- Delete page `/stahovanie-hlohovec` → 301 to `/stahovanie`
- Delete page `/stahovanie-levice` → 301 to `/stahovanie`
- Remove both from the navigation menu, any city lists/link blocks, and `sitemap.xml`.

---

## 4) Deliverables
1. New nested routes/pages created for section 1 with content preserved.
2. All 301 redirects from sections 1–3 implemented at the routing/server level.
3. Internal links + navigation menu updated to new URLs.
4. `sitemap.xml` updated (new URLs in, deleted URLs out).
5. A short summary listing every old → new mapping and confirming none 404.
