# Replit prompt — technické SEO úpravy sofoservis.sk

> Skopíruj celý tento text do Replit agenta ako zadanie.

---

## Kontext a pravidlá práce

Pracuješ na webe **sofoservis.sk** (sťahovanie, vypratávanie, hodinový manžel, odvoz odpadu; Bratislava a okolie). Ideš implementovať sériu technických SEO opráv z auditu. Obsah webu je po slovensky — **všetky viditeľné texty a nadpisy nechaj po slovensky, neprekladaj ich.**

**Ako postupuj (dôležité):**

1. Rob úlohy **po jednom kroku, presne v poradí 1 → 7.** Nezačínaj ďalší krok, kým nie je hotový predchádzajúci.
2. Po dokončení každého kroku **zastav sa**, napíš mi:
   - čo si zmenil (súbory + stručne ako),
   - ako sa to dá overiť,
   - a **počkaj na moje potvrdenie**, než začneš ďalší krok.
3. Po každom kroku sprav samostatný commit s jasnou správou (napr. `SEO krok 1: jedna hero sekcia, jeden H1`).
4. **Nemeň dizajn ani viditeľný obsah nad rámec toho, čo je zadané.** Ide o štruktúru kódu, nie o vzhľad.
5. Po každej zmene over, že sa web bez chyby zostaví a vykreslí na mobile aj desktope.
6. Ak ti na dokončenie kroku chýbajú údaje (ceny, IČO, mapa URL), **nevymýšľaj si ich** — zastav sa a vypýtaj si ich odo mňa.

---

## Krok 1 — Jedna hero sekcia, jeden viditeľný H1

**Problém:** Na každej podstránke služby (napr. `/stahovanie-senec`) je hero sekcia v kóde **2×** — samostatne pre desktop a samostatne pre mobil. Tým sú tam tie isté texty duplicitne. Naviac viditeľný veľký nadpis je označený ako **H2**, kým skutočný **H1** je na desktope skrytý (s rovnakým textom). Google dostáva zmätočný signál a keďže indexuje mobilnú verziu, vidí H1 aj H2 s tým istým textom.

**Úloha:**
- Zjednoť hero sekciu tak, aby bola v kóde **len 1×.** Rozdielne mobilné/desktopové rozloženie rieš **výhradne cez CSS** (responzívne breakpointy), nie duplikáciou markupu.
- Na stránke nech je **práve jeden viditeľný `<h1>`** = hlavný nadpis stránky. Žiadny skrytý druhý H1 s rovnakým textom.
- Odstráň duplicitné desktop/mobil kópie textov v hero sekcii.

**Akceptačné kritériá:** v zdrojovom kóde (View Source) je hero sekcia raz; na stránke je práve jeden `<h1>`; neexistuje skrytý nadpis (`display:none`) duplikujúci viditeľný; stránka vyzerá správne na mobile aj desktope.

---

## Krok 2 — Odstránenie duplicitných nadpisov formulára

**Problém:** Nadpis formulára „Sťahovanie v XY bez starostí s bezplatnou ponukou" je v kóde **4× ako H3** — formulár je na stránke dvakrát (pri hero sekcii a nižšie) a každý výskyt má opäť desktop aj mobil kópiu. Viditeľný je len jeden, zvyšné tri sú skryté. Spolu s ďalšími duplikátmi vzniká na stránke až **26 nadpisov H3**, čo rozmazáva štruktúru.

**Úloha:**
- Odstráň desktop/mobil duplikáciu formulára — každý výskyt formulára nech je **jeden markup** responzívny cez CSS.
- Ponechaj **len reálne, viditeľné nadpisy.** Odstráň skryté duplikáty H3, ktoré vznikli z desktop/mobil delenia.
- Prejdi všetky nadpisy na stránke a zredukuj celkový počet H3 tak, aby zostali len tie, ktoré majú sémantický zmysel.

**Akceptačné kritériá:** nadpis formulára nie je v kóde viackrát ako je reálne viditeľných výskytov; výrazne nižší počet H3; žiadne skryté duplikáty.

---

## Krok 3 — Navigačné menu prístupné pre vyhľadávače aj bez JavaScriptu

**Problém:** Google síce spúšťa JS, ale menu si sám nerozklikáva ani nehoveruje — vidí len to, čo je v kóde po načítaní. Ak sa odkazy v rozbaľovacom menu pridávajú do DOM až po kliknutí, Google ich cez menu vôbec nezaregistruje. Menu je pritom hlavný nástroj interného prelinkovania.

**Úloha:**
- **Všetky** navigačné odkazy — vrátane všetkých úrovní rozbaľovacích submenu, aj tých najhlbšie vnorených — musia byť reálne `<a href>` elementy **prítomné v HTML už pri načítaní stránky.**
- Odkazy sa **nesmú** pridávať do DOM až po kliknutí, hoveri alebo inej JS interakcii.
- Rozbaľovanie/zbaľovanie submenu rieš **cez CSS** (prepínanie triedy / stavu viditeľnosti nad odkazmi, ktoré už v kóde sú). JavaScript môže interakciu vylepšiť, ale **nesmie byť podmienkou existencie odkazov** — pri vypnutom JS musia byť všetky odkazy stále v kóde a prejditeľné.
- Menu **nesmie** byť renderované duplicitne (samostatný blok pre desktop a samostatný pre mobil s tými istými odkazmi). Nech existuje **jedna sada markupu**, ktorej rozloženie sa mení len cez CSS. Rovnaké HTML sa servíruje všetkým zariadeniam (mobile-first indexovanie).

**Akceptačné kritériá:** po vypnutí JavaScriptu sú v DOM všetky odkazy vrátane submenu; View Source obsahuje všetky `<a href>` položky menu; odkazy menu sa v kóde nenachádzajú v dvoch samostatných (desktop/mobil) blokoch.

---

## Krok 4 — Odstránenie meta tagu keywords

**Úloha:** Odstráň `<meta name="keywords">` zo zdrojového kódu (zo šablóny / hlavičky, aby zmizol zo všetkých stránok). Tento tag sa nepoužíva približne od roku 2010.

**Akceptačné kritériá:** `<meta name="keywords">` sa nenachádza na žiadnej stránke.

---

## Krok 5 — Nové vygenerovanie sitemap.xml

Predpoklad: zmeny URL adries sú v tomto bode už **hotové** (presun sekcií, zrušené mestské stránky s 301 presmerovaním). Tvojou úlohou je už len vygenerovať čerstvú sitemapu podľa aktuálneho stavu webu — **žiadnu mapu URL odo mňa nepotrebuješ.**

**Úloha:**
- **Nanovo vygeneruj `sitemap.xml`** z aktuálnych, reálne existujúcich stránok webu.
- Zahrň **len funkčné (HTTP 200) kanonické URL.** Vynechaj všetko, čo vracia 301/404, je presmerované alebo zrušené (staré adresy, zrušené mestské stránky).
- Sitemapu generuj **automaticky z existujúcich routes/stránok**, nie ručným statickým zoznamom — nech ostane aktuálna aj pri budúcich zmenách.

**Akceptačné kritériá:** každá URL v sitemap vracia 200 a je kanonická; žiadna presmerovaná ani zrušená URL v sitemap nie je.

---

## Krok 6 — Doplnenie cenníkov a zjednotenie cien

**Úloha:**
- Na **všetky podstránky služieb** doplň sekciu s cenníkom. Nadpis prispôsob stránke (napr. na `/stahovanie-bytov-domov` bude „Cenník sťahovania bytov a domov") a pod ním príslušnú tabuľku podľa kategórie služby (nižšie).
- Cenníkovú tabuľku umiestni **nad sekciu „Orientačné ceny našich služieb".**
- V sekcii „Orientačné ceny našich služieb" zobrazuj vždy **len iné služby, nie tú, na ktorej sa človek práve nachádza** — inak ho tlačidlo „Zistiť viac" len vyroluje vyššie na tej istej stránke.

**Zjednotenie cien (dôležité):**
- Kanonická hodinová sadzba je **30 €/hod** za 1 pracovníka (zhoduje sa s textom hore na podstránkach). Ak sa niekde v orientačných cenách objavuje „od 25 €/hod", je to **chyba — oprav na 30 €/hod.**
- Pozor: hodnota **25 €** je legitímna pri položke „Výjazd" (montáž) — **túto nemeň.** Neprepisuj plošne každý výskyt „25 €", oprav len nesprávnu hodinovú sadzbu.

### Ktorú tabuľku na ktorú stránku

| Kategória stránky | Použi tabuľku | Príklad nadpisu |
|---|---|---|
| Sťahovacie podstránky (`/stahovanie`, `/stahovanie-bytov-domov`, `/stahovanie-kancelarii-firiem`, `/stahovanie-preprava-nabytku`, ťažké bremená, medzinárodné, mestá) | **Cenník — Sťahovanie** | „Cenník sťahovania bytov a domov" atď. |
| Vypratávacie podstránky (`/vypratavanie`, `/vypratavanie-bytov-domov`, pivnice/garáže, pozemky, odvoz nábytku, stavebný odpad, spotrebiče) | **Cenník — Vypratávanie** | „Cenník vypratávania bytov a domov" atď. |
| `/montaz-nabytku` | **Cenník — Montáž nábytku** | „Cenník montáže nábytku" |
| `/montaz-kuchyne` | **Cenník — Montáž kuchyne** | „Cenník montáže kuchyne" |
| `/cennik` | všetky štyri tabuľky | (ponechaj rozloženie ako doteraz) |

### Cenník — Sťahovanie

| Položka | Cena |
|---|---|
| Obhliadka | zadarmo |
| 1 pracovník | 30 €/hod |
| 2 pracovníci | 60 €/hod |
| 3 pracovníci – AKCIA | 80 €/hod |
| Každý ďalší | 30 €/hod |
| Vynáška bez výťahu | 15 €/poschodie |
| Sťahovanie v rámci mesta | od 55 € |
| Sťahovanie mimo mesta | 0,80 €/km |
| Medzinárodné sťahovanie | dohodou |
| Sťahovanie bremien | od 80 € |
| Sťahovanie skladov | dohodou |
| Sťahovanie kancelárií | dohodou |

### Cenník — Vypratávanie

| Položka | Cena |
|---|---|
| Obhliadka | zadarmo |
| 1 pracovník | 30 €/hod |
| 2 pracovníci | 60 €/hod |
| 3 pracovníci – AKCIA | 80 €/hod |
| Plná dodávka 17 m² | 200 € |
| Pivnica klasik (kobka) | od 60 € |
| Väčšia pivnica | dohodou |
| Garáž | od 70 € |
| Byt jednoizbový | od 200 € |
| Každá ďalšia miestnosť | 60 € |

### Cenník — Montáž nábytku

| Položka | Cena |
|---|---|
| Montáž/demontáž | podľa typu nábytku |
| Výjazd | od 25 € |

### Cenník — Montáž kuchyne

| Položka | Cena |
|---|---|
| Montáž | od 120 €/m |
| Demontáž | od 60 €/m |
| Výjazd | od 25 € |

> Riadok „3 pracovníci – AKCIA" nech je v tabuľke vizuálne zvýraznený (žlté podfarbenie), tak ako je teraz na `/cennik`.

**Akceptačné kritériá:** každá podstránka má cenník so správnou tabuľkou a korektným nadpisom nad orientačnými cenami; nesprávna hodinová sadzba „od 25 €/hod" je všade opravená na „30 €/hod"; položka „Výjazd od 25 €" ostáva nedotknutá; orientačné ceny na danej stránke nikdy neuvádzajú službu tej istej stránky.

---

## Krok 7 — Fakturačné údaje na stránke Kontakt

**Úloha:**
- Na `/kontakt` pridaj ako **posledný bod pod adresu** blok **„Fakturačné údaje"** s týmito údajmi:

```
Fakturačné údaje
Sofoservices s. r. o.
Lermontovova 3, 811 05 Bratislava
IČO: 55333800
DIČ: 2121960775
IČ DPH: SK2121960775
```

- Firma je platcom DPH, preto uveď aj **IČ DPH** (patrí do fakturačných údajov).
- Rovnaké údaje skontroluj/doplň aj v **pätičke webu** — teraz je tam uvedený len názov a IČO, chýba DIČ a IČ DPH.

**Akceptačné kritériá:** blok „Fakturačné údaje" je na `/kontakt` pod adresou a obsahuje názov s.r.o., sídlo, IČO, DIČ a IČ DPH; pätička obsahuje aspoň názov, IČO, DIČ a IČ DPH.

---

## Poznámka na záver

Tento prompt je **kompletný a samostatný** — všetky kroky (1–7) majú potrebné údaje priamo v ňom a nič odo mňa nepotrebuješ dopĺňať. Stačí ho dodržať v poradí a po každom kroku sa zastaviť a ohlásiť.
