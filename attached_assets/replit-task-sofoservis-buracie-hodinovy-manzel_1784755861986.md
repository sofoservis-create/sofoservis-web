# Task pre Replit — Búracie práce + Hodinový manžel (sofoservis.sk)

Implementuj podľa priloženého Google Sheetu. Postupuj v tomto poradí. Obsahuje: presun búracích prác do stromu `/buracie-prace/`, prestavbu menu, **odstránenie 3 miest** hodinového manžela a úpravu SEO metadát.

## Tvrdé pravidlá
- Každé presmerovanie je **301 (permanent)**, priamo na finálnu URL — žiadne reťazové redirecty.
- Po presune stránky prepíš **interné odkazy + menu + breadcrumbs + CTA + canonical** na novú URL.
- Žiadna stará URL nesmie skončiť ako 404.
- Slug-y (slovenské názvy v URL) neprekladaj a nemeň — použi presne tie zo sheetu.
- Pred úpravami **zálohuj** routing a redirect config.

---

## KROK 1 — Búracie práce: zjednotenie na strom `/buracie-prace/` (+ 301)
`/buracie-prace` **už existuje ako hub** — nevytváraj ho ani nepremenúvaj. Staré ploché duplicitné URL presmeruj (301) na hub a jeho podstránky. Obsah a SEO nechaj na cieľových (existujúcich) stránkach.

| Stará (duplicitná) URL — 301 | Cieľ |
|---|---|
| `/buracie-demolacne-prace` | `/buracie-prace` *(hub, existuje)* |
| `/buranie-demolacia-domov-bytov` | `/buracie-prace/buranie-demolacia-domov` |
| `/buranie-stien-priecok` | `/buracie-prace/buranie-stien-priecok` |

> Ak niektorá cieľová podstránka pod hubom ešte neexistuje, vytvor ju (presun obsahu zo starej stránky) a až potom 301-kuj starú na ňu. Ak už existuje, iba 301-kuj a nič needituj. „bytov“ z búrania domov ide preč zámerne (nevyhľadáva sa).

**Hodinový manžel** zostáva na `/hodinovy-manzel-majster` (a `/hodinovy-manzel-majster/bratislava`) — **URL sa nemení.**

---

## KROK 2 — Prestavba menu (stĺpec „Nové rozloženie“)
Zaraď pod rozbaľovaciu položku **Ďalšie** (bez vlastnej stránky):

- **Ďalšie** *(iba sa rozbaľuje)*
  - **Búracie práce** (`/buracie-prace`)
    - Búranie domov (`/buracie-prace/buranie-demolacia-domov`)
    - Búranie stien a priečok (`/buracie-prace/buranie-stien-priecok`)
  - **Hodinový manžel** (`/hodinovy-manzel-majster`)
    - **Mestá** *(iba sa rozbaľuje)*
      - Hodinový manžel Bratislava (`/hodinovy-manzel-majster/bratislava`)

> Galanta, Piešťany a Trnava sa do menu **nedávajú** (mažú sa — viď KROK 3). Ak by v „Mestách“ zostala už len Bratislava, môžeš podmenu „Mestá“ zrušiť a Bratislavu dať priamo pod „Hodinový manžel“.

---

## KROK 3 — Odstránenie miest hodinového manžela (natvrdo zmazať + 301)
Tieto stránky **natvrdo vymaž** (nie skryť) a nastav 301 na hub `/hodinovy-manzel-majster`:

| Zmazať | 301 na |
|---|---|
| `/hodinovy-manzel-majster/galanta` | `/hodinovy-manzel-majster` |
| `/hodinovy-manzel-majster/piestany` | `/hodinovy-manzel-majster` |
| `/hodinovy-manzel-majster/trnava` | `/hodinovy-manzel-majster` |

Odstráň aj všetky interné odkazy na tieto tri URL.

---

## KROK 4 — SEO title, H1 a meta popis (zostávajúce stránky)
Prepíš na **nové** verzie zo sheetu:

**`/buracie-prace`**
- title: `Búracie práce Bratislava a okolie - Cenník 2026 | Sofoservis`
- H1: `Profesionálne búracie práce`
- meta: `Búracie a demolačné práce v Bratislave a okolí – ručné aj strojové búranie s odvozom sute. Férový cenník za m². Obhliadka a cenová ponuka zdarma.`

**`/buracie-prace/buranie-demolacia-domov`**
- title: `Búranie a demolácia starých domov a budov | Sofoservis`
- H1: `Búranie a demolácia domov, budov` *(zostáva)*
- meta: `Búranie a demolácia starých domov, budov aj stodôl vrátane odvozu a likvidácie sute. Vopred jasná cena za celú búračku. Ozvite sa a pripravíme rozpočet.`

**`/buracie-prace/buranie-stien-priecok`**
- title: `Búranie nosných stien, priečok v dome a byte | Sofoservis`
- H1: `Búranie nosných stien a priečok`
- meta: `Búranie nosných stien a priečok aj vytváranie otvorov v byte či dome. Posúdime statiku, pracujeme čisto a s odvozom sute. Cenu za výmer pošleme zdarma.`

**`/hodinovy-manzel-majster`**
- title: `Hodinový manžel - domáci majster | Sofoservis`
- H1: `Hodinový manžel a domáci majster`
- meta: `Hodinový manžel a domáci majster od 25 €/hod – montáž nábytku, drobné opravy, vŕtanie aj voda. Prehľadný cenník a rýchly nástup. Objednajte si majstra.`

**`/hodinovy-manzel-majster/bratislava`**
- title: `Hodinový manžel Bratislava — opravy, montáž | Sofoservis`
- H1: `Hodinový manžel a majster v Bratislave`
- meta: `Hodinový manžel v Bratislave vrátane Petržalky a Ružinova – montáž nábytku, vešanie, drobné opravy. Od 25 €/hod, dostupný do 24 hodín. Napíšte, čo treba.`

---

## KROK 5 — Sitemap a indexácia
1. Vygeneruj `sitemap.xml` iba s novými/zostávajúcimi URL (staré `/buracie-*` a zmazané mestá tam nesmú byť).
2. Skontroluj `robots.txt`, či neblokuje `/buracie-prace/*`.
3. Canonical na nových búracích stránkach nastav na ich nové adresy.

---

## KROK 6 — Kontrola po nasadení
1. Staré búracie URL vracajú **301** a končia na správnej novej URL **jedným skokom** (žiadny 301 → 301, žiadny 404).
2. Zmazané mestá (galanta, piestany, trnava) vracajú **301** na `/hodinovy-manzel-majster`.
3. Nové URL vracajú **200** a majú správny title/H1/meta.
4. Presunuté búracie stránky majú stále svoj obsah.
5. Menu, breadcrumbs ani interné odkazy nevedú cez redirect.
6. Po nasadení odošli novú sitemapu v Google Search Console.
