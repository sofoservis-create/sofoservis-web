# Task pre Replit — Reštrukturalizácia stromu /vypratavanie/ (sofoservis.sk)

Implementuj 4 kroky podľa priloženého Google Sheetu. Postupuj **presne v tomto poradí**, lebo mazania (KROK 3) presmerovávajú na nové vnorené URL, ktoré vzniknú až v KROKU 1.

## Ako čítať sheet (kontext)
- Stĺpce **A, B, C** = aktuálna URL, poznámka, úkon (čo s ňou robíme).
- **Žlté** riadky = mení sa URL (dávame stromu logickú štruktúru) → presun + 301.
- **Červené** riadky = stránka sa **natvrdo maže** + 301 na cieľ z úkonu.
- Stĺpec **E „Nové rozloženie“** = nové menu (pomlčky = úroveň: bez pomlčky hlavné menu, `-` 2. úroveň, `--` 3. úroveň).
- Stĺpec **F „Nová URL adresa“** = nová URL.
- Pravá časť od stĺpca E = zoznam stránok, čo zostávajú, s aktuálnym a **novým** SEO title / H1 / meta popisom.

## Tvrdé pravidlá (platia pre celý task)
- Každé presmerovanie je **301 (permanent)**.
- Presmeruj **priamo na finálnu novú URL** — žiadne reťazové redirecty (301 → 301).
- Po presune stránky prepíš **všetky interné odkazy + menu + breadcrumbs + CTA** na novú URL.
- `www`/`non-www` aj koncové lomítko (trailing slash) nech riešia jeden 301, nie dvojitý.
- Žiadna stará URL nesmie skončiť ako 404 — každá 301-kuje niekam.
- Pred úpravami **zálohuj** aktuálny routing a existujúci redirect config.
- Slug-y (slovenské názvy v URL) **neprekladaj a nemeň** — použi presne tie zo sheetu.

---

## KROK 0 — Príprava
1. Over, či existuje hub stránka `/vypratavanie`. Ak áno, **zostáva** (bez zmeny URL).
2. Zálohuj aktuálne routes + redirect config.
3. Založ centrálnu mapu presmerovaní `old → new`, ktorú budeš plniť v KROKU 1 a 3.

---

## KROK 1 — Žlté URL: PRESUN + 301 (obsah sa zachováva)
Pre každý riadok: **1)** presuň/premenuj na novú vnorenú URL, **2)** nastav 301 zo starej na novú.

| Stará URL | Nová URL |
|---|---|
| `/vypratavanie` | `/vypratavanie` *(zostáva)* |
| `/vypratavanie-bytov-domov` | `/vypratavanie/vypratavanie-bytov-domov` |
| `/vypratavanie-bytov-domov/bratislava` | `/vypratavanie/vypratavanie-bytov-domov/bratislava` |
| `/vypratavanie-pivnic-garazi-nebytovych-priestorov` | `/vypratavanie/vypratavanie-pivnic-a-garazi` |
| `/cistenie-vypratavanie-pozemkov-nehnutelnosti` | `/vypratavanie/cistenie-vypratavanie-pozemkov` |
| `/vypratavanie-odvoz-stareho-nabytku` | `/vypratavanie/odvoz-stareho-nabytku` |
| `/odvoz-likvidacia-stavebneho-odpadu` | `/vypratavanie/odvoz-likvidacia-stavebneho-odpadu` |
| `/likvidacia-nebezpecneho-odpadu-starych-spotrebicov` | `/vypratavanie/likvidacia-nebezpecneho-odpadu` |

> ⚠️ **Over v sheete (stĺpec F):** slug pivníc — v jednom stĺpci je `vypratavanie-pivnic-a-garazi`, v inom skrátené `vypratavanie-pivnic`. Použi finálnu verziu zo stĺpca F a drž sa jednej.

---

## KROK 2 — Prestavba menu (stĺpec E „Nové rozloženie“)
Postav hlavné menu presne podľa hierarchie:

- **Vypratávanie** (`/vypratavanie`)
  - Vypratávanie bytov a domov (`/vypratavanie/vypratavanie-bytov-domov`)
  - Vypratávanie pivníc a garáží (`/vypratavanie/vypratavanie-pivnic-a-garazi`)
  - Odvoz starého nábytku (`/vypratavanie/odvoz-stareho-nabytku`)
  - Čistenie a vypratávanie pozemkov (`/vypratavanie/cistenie-vypratavanie-pozemkov`)
  - Odvoz a likvidácia stavebného odpadu (`/vypratavanie/odvoz-likvidacia-stavebneho-odpadu`)
  - Likvidácia nebezpečného odpadu (`/vypratavanie/likvidacia-nebezpecneho-odpadu`)

Pravidlo úrovní: bez pomlčky = položka hlavného menu, `-` = 2. úroveň (rozbalí sa po najdení myšou), `--` = 3. úroveň (dodatočné rozkliknutie). Riaď sa presne pomlčkami v stĺpci E.

---

## KROK 3 — Červené URL: ZMAZAŤ (natvrdo) + 301
Stránky **natvrdo vymaž** (nie skryť) a nastav 301 na cieľ zo stĺpca C. Skupiny podľa cieľa:

**3a) Mestské podstránky bytov/domov → `/vypratavanie/vypratavanie-bytov-domov`**
`/vypratavanie-bytov-domov/{galanta, hlohovec, komarno, levice, malacky, nitra, pezinok, piestany, sala, samorin, senec, senica, stupava, trnava}`
*(Bratislava sa NEMAŽE — presúva sa v KROKU 1.)*

**3b) Odvoz nábytku – mesto → `/vypratavanie/odvoz-stareho-nabytku`**
`/vypratavanie-odvoz-stareho-nabytku/bratislava`

**3c) Ploché mestské landing stránky → `/vypratavanie`** *(over cieľ v stĺpci C)*
`/vypratavanie-{trnava, pezinok, senica, nitra, hlohovec, komarno, levice, senec, piestany, galanta, malacky, samorin, sala, stupava}`

**3d) Bratislavské mestské časti → `/vypratavanie/vypratavanie-bytov-domov/bratislava`** *(over cieľ v stĺpci C)*
`/vypratavanie-{petrzalka, ruzinov, stare-mesto, nove-mesto, karlova-ves, dubravka}`
`/vypratavanie-bratislava`

**3e) Typové stránky bez samostatnej novej stránky → `/vypratavanie`** *(over cieľ v stĺpci C)*
`/vypratavanie-{chalupy, kancelarii, po-rekonstrukcii, pozostalosti}`

> ⚠️ **Cieľ presmerovania ber vždy zo stĺpca C sheetu** — vyššie sú default skupiny podľa novej štruktúry; ak sheet v stĺpci C uvádza iný cieľ pre konkrétny riadok, platí sheet.

---

## KROK 4 — SEO title, H1 a Meta popis (pravá časť sheetu)
Pre každú **zostávajúcu** stránku prepíš na **novú** verziu zo sheetu (stĺpce „...nový“). Aktuálne verzie sú tam len pre porovnanie — nepoužívaj ich.

Referenčné hodnoty pre hlavné stránky (zvyšok ber priamo zo sheetu):

| Stránka | Nový SEO title | Nový H1 | Nový meta popis |
|---|---|---|---|
| `/vypratavanie` | Vypratávanie nehnuteľností Bratislava a okolie \| Sofoservis | Vypratávanie a odvoz odpadu z nehnuteľností | Profesionálne vypratávanie bytov, domov, kancelárií, pivníc, chalúp, po rekonštrukcii a po pozostalosti od 25 €/hod. Obhliadka zadarmo. Rýchlo. |
| `/vypratavanie/vypratavanie-bytov-domov` | Vypratávanie bytov a domov v Bratislave a okolí \| Sofoservis | Vypratávanie bytov a domov | Profesionálne vypratávanie bytov a domov od 25 €/hod. Jednoizbový byt od 200 €. Obhliadka zadarmo. Rýchlo, spoľahlivo, spokojnosť garantovaná. |
| `/vypratavanie/vypratavanie-pivnic-a-garazi` | Vypratávanie pivníc – Bratislava a okolie \| Sofoservis | Vypratávanie pivníc, garáží a nebytových priestorov | Ponúkame lacné a rýchle vypratávanie pivníc, garáží, nebytových priestorov. Obhliadka priestoru zadarmo. Kontaktujte nás ešte dnes! |
| `/vypratavanie/odvoz-stareho-nabytku` | Odvoz a likvidácia starého nábytku Bratislava \| Sofoservis | Odvoz starého nábytku a likvidácia | Ponúkame komplexné služby v oblasti vypratávania, odvozu a likvidácie starého nábytku. Lacné a férové ceny. Kontaktujte nás ešte dnes! |
| `/vypratavanie/cistenie-vypratavanie-pozemkov` | Čistenie pozemkov vrátane náletových drevín \| Sofoservis | Čistenie a vypratávanie pozemku, nehnuteľnosti | Ponúkame lacné a rýchle čistenie a vypratávanie pozemku, nehnuteľností. Obhliadka priestoru zadarmo. Kontaktujte nás ešte dnes! |
| `/vypratavanie/odvoz-likvidacia-stavebneho-odpadu` | Odvoz a likvidácia stavebného odpadu a sute \| Sofoservis | Odvoz a likvidácia stavebného odpadu a sutí | Ponúkame komplexné služby v oblasti odvozu a likvidácie stavebného odpadu. Lacné a férové ceny. Kontaktujte nás ešte dnes! |
| `/vypratavanie/likvidacia-nebezpecneho-odpadu` | Likvidácia nebezpečného odpadu s odvozom \| Sofoservis | Likvidácia a odvoz nebezpečného odpadu | Ponúkame komplexné služby v oblasti likvidácie a odvozu nebezpečného odpadu a starých spotrebičov. Lacné a férové ceny. Kontaktujte nás ešte dnes! |

---

## KROK 5 — Sitemap a indexácia
1. Vygeneruj `sitemap.xml` **iba s novými URL** (staré/zmazané tam nesmú byť).
2. Skontroluj `robots.txt`, či neblokuje nové cesty `/vypratavanie/*`.
3. Aktualizuj canonical na nových stránkach na ich nové adresy.

---

## KROK 6 — Kontrola po nasadení
1. Náhodne otestuj staré URL z KROKU 1 aj 3 → musia vrátiť **301** a skončiť na správnej novej URL **jedným skokom** (žiadny 301 → 301, žiadny 404).
2. Nové URL musia vracať **200**.
3. Presunuté (žlté) stránky musia mať stále svoj pôvodný obsah.
4. Menu, breadcrumbs a interné odkazy nesmú viesť cez redirect (majú ísť priamo na nové URL).
5. Po nasadení odošli novú sitemapu v Google Search Console a sleduj Coverage/Pages report.

---

## Približné počty (over voči sheetu)
- KROK 1 (presun + 301): **7** URL (+ `/vypratavanie` zostáva)
- KROK 3 (mazanie + 301): **~40** URL (14 mestá bytov/domov, 1 nábytok/BA, 14 ploché mestá, 6 BA časti + 1 BA, 4 typové)
- Spolu: **~47** presmerovaní
