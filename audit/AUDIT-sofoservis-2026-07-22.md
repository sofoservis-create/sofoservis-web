# AUDIT sofoservis.sk — 22. júl 2026 (dev prostredie, localhost:5000)

**Nič nebolo zmenené.** Všetky zistenia overené voči kódu repozitára aj vyrenderovanému HTML.

## Summary
- Overall: **A prevažne DONE, B PARTIAL, C DONE, D 6× DONE / 2× PARTIAL, E PARTIAL, F PARTIAL**
- **Top 3 zistenia:**
  1. **38 podstránok medzinárodného sťahovania bolo zmazaných** (commit `43cdd46e`) a všetky sa plošne presmerúvajú na hub `/stahovanie/medzinarodne-stahovanie` — per-page ekvivalenty neexistujú (nové URL vracajú 404). Toto sú stránky, ktoré sa "nesmú stratiť".
  2. **77 rôznych interných odkazov stále smeruje na staré URL** (fungujú len cez redirect) — zdroje: `Navbar.tsx` (mapa prepínača jazyka), `Footer.tsx`, `ServicePricing.tsx`, `ServiceAreas.tsx` (mestská mriežka na homepage linkuje všetkých 14 starých mestských URL) a niekoľko page súborov.
  3. **Klaster `/odvoz-likvidacia-stavebneho-odpadu/<mesto>` (7 stránok) nebol nikdy migrovaný** — stále žije na starom strome so starými canonical URL a starými URL v JSON-LD, zatiaľ čo rodičovská stránka presmerúva na `/vypratavanie/...`. Zmiešaná štruktúra.

## A. Routing a redirecty — DONE (s poznámkami)
Všetkých 28 starých URL presmerúva **priamo** (bez reťazcov) na 200 stránku. Poznámka: Next.js vracia **308** (permanent), nie 301 — pre SEO ekvivalentné.

| Stará URL | Kód | Cieľ | Kód cieľa | OK? |
|---|---|---|---|---|
| /stahovanie-bytov-domov | 308 | /stahovanie/stahovanie-bytov-domov | 200 | OK |
| /stahovanie-kancelarii-firiem | 308 | /stahovanie/stahovanie-kancelarii-firiem | 200 | OK |
| /stahovanie-preprava-nabytku | 308 | /stahovanie | 200 | OK (zlúčené do hubu) |
| /stahovanie-tazkych-bremien | 308 | /stahovanie/stahovanie-tazkych-bremien | 200 | OK |
| /medzinarodne-stahovanie | 308 | /stahovanie/medzinarodne-stahovanie | 200 | OK |
| /stahovanie-bratislava …-sala (14 miest) | 308 | /stahovanie/stahovanie-\<mesto\> | 200 | OK |
| /stahovanie-levice | 308 | /stahovanie | 200 | OK (podľa zadania) |
| /stahovanie-hlohovec | 308 | /stahovanie | 200 | OK (podľa zadania) |
| /vypratavanie-bytov-domov | 308 | /vypratavanie/vypratavanie-bytov-domov | 200 | OK |
| /vypratavanie-pivnic-garazi-nebytovych-priestorov | 308 | /vypratavanie/vypratavanie-pivnic-a-garazi | 200 | OK |
| /cistenie-vypratavanie-pozemkov-nehnutelnosti | 308 | /vypratavanie/cistenie-vypratavanie-pozemkov | 200 | OK |
| /vypratavanie-odvoz-stareho-nabytku | 308 | /vypratavanie/odvoz-stareho-nabytku | 200 | OK |
| /odvoz-likvidacia-stavebneho-odpadu | 308 | /vypratavanie/odvoz-likvidacia-stavebneho-odpadu | 200 | OK |
| /likvidacia-nebezpecneho-odpadu-starych-spotrebicov | 308 | /vypratavanie/likvidacia-nebezpecneho-odpadu | 200 | OK |
| /vypratavanie-bratislava | 308 | /vypratavanie/vypratavanie-bytov-domov/bratislava | 200 | OK |
| /vypratavanie-pezinok | 308 | /vypratavanie | 200 | OK |

1. **Redirect reťazce:** žiadne (všetko jeden skok).
2. **Staré routy stále 200:** žiadne zo zoznamu vyššie. **ALE** 7 mestských stránok `/odvoz-likvidacia-stavebneho-odpadu/{bratislava,galanta,hlohovec,nitra,senec,senica,trnava}` stále vracia **200 na starom strome** (adresáre existujú v `src/app/odvoz-likvidacia-stavebneho-odpadu/`) — nikdy neboli migrované.
3. **Hlohovec/Levice:** potvrdené, 308 → `/stahovanie` → 200.
4. **Medzinárodné podstránky — NOT DONE / STRATENÉ.** Git história (commit `43cdd46e` "Update internal links and site redirects…") ukazuje **38 zmazaných stránok**: rakusko, ceska-republika, nemecko, anglicko, svajciarsko, holandsko, belgicko, francuzsko, madarsko, polsko, taliansko, spanielsko, norsko, svedsko, dansko, irsko, vieden, praha, budapest, mnichov, berlin, frankfurt, hamburg, zurich, londyn, amsterdam, brusel, pariz, dublin, varsava, brno, barcelona, kodane, lisabon, oslo, rim, stockholm. Každá stará URL (napr. `/medzinarodne-stahovanie/ceska-republika`) 308-presmerúva na **hub**, a nové ekvivalenty (`/stahovanie/medzinarodne-stahovanie/ceska-republika`) vracajú **404**. Prežil len hub. Unikátny obsah a rankingy krajín/miest sú fakticky zahodené.

## B. Interné odkazy na staré URL — PARTIAL (77 odkazov funguje len cez redirect, 2 sú 404)

Overenie konkrétnych zistení:
1. **POTVRDENÉ:** karta v "Orientačné ceny" na `/stahovanie/stahovanie-bytov-domov` linkuje `/vypratavanie-bratislava`. Zdroj: `src/components/sections/ServicePricing.tsx:35` (`href: "/vypratavanie-bratislava"`) — objavuje sa na **každej** stránke so ServicePricing.
2. **VYVRÁTENÉ (v aktuálnom kóde):** `/montaz-nabytku` používa rovnaký zjednotený Navbar ako zvyšok webu — vyrenderované menu obsahuje **0 starých URL** (41 odkazov, všetky nové). Stav so starým menu, ktorý vidíš, je **živá produkcia**, ktorá je za týmto kódom pozadu. Stránka má ale stále 2 staré odkazy v tele: `/stahovanie-bytov-domov` (dlaždica služby) a `/stahovanie-preprava-nabytku` (`src/app/montaz-nabytku/page.tsx:96`).

Kľúčové zdroje starých URL (súbor:riadok | linkuje na | má smerovať na):
- `src/components/layout/Navbar.tsx:101–176` | celá SK↔EN mapa prepínača jazyka používa staré SK URL (`/stahovanie-bytov-domov`, `/stahovanie-nitra`, …) | URL nového stromu. Dôsledok: prepínač "SK" na každej EN stránke smeruje na redirect (napr. `/en/moving-nitra` → `/stahovanie-nitra`).
- `src/components/sections/ServiceAreas.tsx:26+` | mestská mriežka na homepage linkuje **všetkých 14 starých mestských URL** (`/stahovanie-trnava`, `/stahovanie-nitra`, …) | `/stahovanie/stahovanie-<mesto>`.
- `src/components/sections/ServicePricing.tsx:35` | `/vypratavanie-bratislava` | `/vypratavanie/vypratavanie-bytov-domov/bratislava`.
- `src/components/layout/Footer.tsx:88` | `/stahovanie-preprava-nabytku` | `/stahovanie`.
- `src/components/sections/Features.tsx:50` | `/stahovanie-preprava-nabytku` | `/stahovanie`.
- `src/app/stahovanie/page.tsx:125,132,139,146` | `/stahovanie-klavira`, `/stahovanie-trezorov`, `/stahovanie-strojov-zariadeni`, `/stahovanie-preprava-nabytku` | ich redirect ciele.
- `src/app/stahovanie/stahovanie-bratislava/page.tsx:115+` | odkazy na mestské časti `/stahovanie-dubravka`, `/stahovanie-karlova-ves`, `/stahovanie-petrzalka`, `/stahovanie-ruzinov`, `/stahovanie-stare-mesto`, `/stahovanie-nove-mesto` | ich ciele.
- Kontrola renderu: **50 z 203 stránok** obsahuje aspoň jeden odkaz na starú URL; celkovo **77 rôznych interných odkazov** vracia 308 namiesto 200.

## C. Stav šablón stránok — DONE (všetky stránky na novej šablóne)
Preskenovaných všetkých 203 vyrenderovaných stránok: **0 stránok** s `<meta name="keywords">`, **0 stránok** s 0 alebo 2+ `<h1>`, **1 `<header>`** na stránku, menu všade používa nové URL, sekcia cenníka ("Cenník") prítomná na SK servisných stránkach. `/montaz-nabytku` — **zistenie o starej šablóne je v tomto kóde vyvrátené** (1 H1, bez keywords, jeden footer, nové menu); živý web tieto zmeny jednoducho ešte nedostal. Jediná anomália: `/zasady-spracovania-osobnych-udajov` má dva `<footer>` elementy — prvý je ale sémantický in-content footer (`mt-16 pt-8 border-t`) vnútri právneho textu, nie zduplikovaný site footer. Nie je to problém šablóny.

## D. Položky pôvodného SEO auditu
1. **Jedno viditeľné H1 — DONE.** Každá stránka má presne jedno `<h1>`; žiadne skryté `sr-only` duplikáty.
2. **Počty H3 — PARTIAL.** Rozsah 15–29 na stránku. Najviac: `/stahovanie` 29, `/en/moving` 28, `/en/junk-removal` 28, `/vypratavanie` 27, `/stahovanie/stahovanie-bytov-domov` 27. Stále vysoké — stojí za preverenie, či za tým sú nadpisy formulára/FAQ, ale žiadna stránka nevykazuje starý vzor 4× duplikovaného nadpisu formulára ako jedinú príčinu.
3. **Menu bez JS — DONE.** Všetkých 41 odkazov menu, vrátane najhlbších submenu položiek (`/stahovanie/stahovanie-nitra`, `/vypratavanie/vypratavanie-pivnic-a-garazi`), sú skutočné `<a href>` elementy v server-renderovanom HTML pri načítaní. Jeden `<header>`, žiadne duplikované desktop/mobil bloky, žiadne duplikované sady odkazov.
4. **meta keywords — DONE.** 0 z 203 stránok ho obsahuje.
5. **sitemap.xml — DONE.** 203 URL; každá vracia 200; Hlohovec/Levice a všetky presmerované/zrušené URL chýbajú. `robots.txt` ukazuje na správnu sitemap, blokuje len `/admin`, `/api/` a URL s tracking parametrami. Výhrada: sitemap **obsahuje** 7 nemigrovaných stránok `/odvoz-likvidacia-stavebneho-odpadu/<mesto>` (sú 200 a self-canonical, takže technicky validné — ale cementujú starú štruktúru).
6. **Cenníkové tabuľky — DONE.** Servisné podstránky majú sekciu "Cenník…" so špecifickým nadpisom umiestnenú nad "Orientačné ceny" (overené napr. `/stahovanie/stahovanie-bytov-domov`: Cenník na offsete 30k vs Orientačné na 103k).
7. **Self-linking "Orientačné ceny" — DONE.** `ServicePricing` je client komponent používajúci `usePathname` na vylúčenie aktuálnej stránky. Na `/montaz-nabytku` sekcia zobrazuje len karty `/montaz-kuchyne` a `/hodinovy-manzel-majster` — žiadny self-link.
8. **Fakturačné údaje — DONE.** `/kontakt` má blok "Fakturačné údaje" (`src/components/sections/ContactInfo.tsx`) a footer nesie DIČ/IČ DPH pre Sofoservices.

## E. Konzistencia cien — PARTIAL

| URL | Miesto na stránke | Zobrazená | Správna |
|---|---|---|---|
| /montaz-nabytku | hero popis + JSON-LD ("Profesionálne montáž a skladanie nábytku **od 30€/hod**") | 30 €/hod | **25 €/hod** (hodinovka montáže) |
| /montaz-nabytku | title/meta "od 25€" = výjazd | od 25€ | OK podľa kanonických hodnôt (výjazd od 25 €) — ale mätúce vedľa 30€/hod v hero |

- Stará karta "od 20 €" na `/montaz-nabytku` je **preč** (opravené). Zvyšné výskyty "od 20€" inde sú legitímne iné položky (malé kusy pri odvoze nábytku, búranie priečok za m², kuchynský výjazd "Výjazd od 20€" na `/montaz-kuchyne` — pozor, líši sa od montážneho výjazdu 25 €; označené na rozhodnutie).
- Sadzby sťahovanie/vypratávanie: jednotné na celom webe — 30/60/80 €/hod všade (287 výskytov); dve zmienky "90€/hod" na `/cennik` sú vysvetľujúci text ("3 × 30€ by bolo 90, AKCIA = 80"), správne.
- Hodinový manžel `/hodinovy-manzel-majster`: zobrazuje "od 30€/hod" (11×) — nie je v kanonickej tabuľke; len označené.

## F. Technické a rôzne
1. **Mŕtve odkazy `href="#"` — POTVRDENÉ, NOT DONE.** CTA tlačidlá s `href="#"`: `/montaz-nabytku` 4×, `/montaz-kuchyne` 4×, `/hodinovy-manzel-majster` 5×, `/hodinovy-manzel-majster/bratislava` 5×, `/montaz-nabytku/bratislava` 5× — spolu 23, všetko žlté CTA tlačidlá (Získajte cenovú ponuku / Objednať…).
2. **Interné 404 — 2 nájdené.** `/en/moving-to-milan` (linkované z `src/app/en/moving-to-italy/page.tsx:161`) a `/en/moving-to-madrid` (z `src/app/en/moving-to-spain/page.tsx:161`).
3. **Mestský zoznam vypratávania — POTVRDENÉ.** V "Vypratávanie po celom Slovensku" má cieľ len Bratislava (`/vypratavanie/vypratavanie-bytov-domov/bratislava`); Nitra, Trnava, Pezinok, Galanta, Piešťany, Senec, Senica, Stupava (a zvyšok z 13 rovnakých anchorov) linkujú späť na `/vypratavanie`.
4. **Rozdelenie firiem vo footri — podľa zámeru.** MakySofoMont s.r.o. sa zobrazuje presne na 5 stránkach: `/montaz-nabytku`, `/montaz-nabytku/bratislava`, `/montaz-kuchyne`, `/hodinovy-manzel-majster`, `/hodinovy-manzel-majster/bratislava`. Všetky ostatné stránky ukazujú Sofoservices s. r. o. Nič nemenené.
5. **hreflang — NOT DONE.** Na webe neexistujú žiadne `hreflang` tagy (0 z 203 stránok). SK↔EN párovanie existuje len ako mapa prepínača jazyka v Navbar-e — ktorá používa **staré** SK URL (viď B).
6. **Štruktúrované dáta — PARTIAL.** JSON-LD sa parsuje, ale ostávajú v ňom staré URL: Service schémy na homepage referencujú `/stahovanie-bytov-domov`, `/stahovanie-kancelarii-firiem`, `/stahovanie-preprava-nabytku`, `/stahovanie-tazkych-bremien`, `/medzinarodne-stahovanie` (zdroj: `src/components/seo/SEOProvider.tsx`), a 7 mestských odvoz stránok na starom strome self-referencuje staré URL.

## Čo by som opravil ako prvé (zatiaľ NEROBIŤ)
1. **Obnoviť 38 medzinárodných stránok** — obnoviť z gitu a zavesiť pod nový strom s per-page 301 (veľká SEO hodnota v ohrození; ~pol dňa).
2. **Nahradiť 77 starých interných odkazov** — prevažne 5 zdieľaných komponentov (`Navbar` jazyková mapa, `ServiceAreas`, `ServicePricing:35`, `Footer:88`, `Features:50`) plus pár page súborov (~2–3 hodiny).
3. **Migrovať 7 stránok `/odvoz-likvidacia-stavebneho-odpadu/<mesto>`** do `/vypratavanie/...` s redirectmi (~1–2 hodiny).
4. **Opraviť 23 CTA tlačidiel s `href="#"`** a 2 EN 404 odkazy (~1 hodina).
5. **Vyčistiť staré URL z JSON-LD v `SEOProvider.tsx`** a rozhodnúť o znení "od 30€/hod" vs 25 €/hod na `/montaz-nabytku` (~1 hodina).
6. **Pridať hreflang** po aktualizácii SK↔EN mapy na nové URL (~1–2 hodiny).

---
Poznámka: audit bežal na **vývojovom kóde**, ktorý je pred živým www.sofoservis.sk — preto niektoré problémy viditeľné naživo (staré menu na /montaz-nabytku, karta "od 20 €") sú tu už opravené, no v produkcii ostanú, kým nepublikuješ.
