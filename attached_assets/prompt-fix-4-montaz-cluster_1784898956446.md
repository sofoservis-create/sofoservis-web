# Prompt FIX-4 — Montáž / hodinový manžel route group: migration + on-page tuning

> Paste into the Replit agent. Read the diagnosis first — two previous reports declared this cluster fixed when it is not.

## Diagnosis — read before starting

A live fetch of `https://www.sofoservis.sk/montaz-nabytku` **right now** shows the OLD template, despite VERIFY-2 and FIX-3 both reporting it clean:

- `<meta name="keywords">` present
- hero rendered twice — visible `<h2>` "Montáž, skladanie a demontáž nábytku." plus an `<h1>` with the identical text
- `<footer>` rendered twice
- menu contains OLD URLs: `/stahovanie-bytov-domov`, `/stahovanie-kancelarii-firiem`, `/stahovanie-preprava-nabytku`, `/vypratavanie-bytov-domov`, `/vypratavanie-pivnic-garazi-nebytovych-priestorov`, `/cistenie-vypratavanie-pozemkov-nehnutelnosti`, `/vypratavanie-odvoz-stareho-nabytku`, `/odvoz-likvidacia-stavebneho-odpadu`, `/likvidacia-nebezpecneho-odpadu-starych-spotrebicov`
- old SEO title (spec requires "Montáž a skladanie nábytku od 25€ | Sofoservis")
- "Orientačné ceny našich služieb" contains a card linking to `/montaz-nabytku` — i.e. the page links to itself
- several CTA buttons still `href="#"`
- no "Cenník" section

**Why previous greps missed it:** this cluster is a **separate route group with its own layout** — the footer shows `MakySofoMont s.r.o.` (IČO 56284497) and phone `0952 044 363`, whereas the rest of the site shows `Sofoservices s. r. o.` and `0951 735 130`. That layout has its **own copies** of the navbar, hero and footer components. Scanning the shared `Navbar.tsx` / `ServicePricing.tsx` shows them clean — but these pages don't use them.

**First task: find that route group and confirm this.** Do not report anything as fixed until you have re-fetched the live production URL and seen the change yourself. Dev-only confirmation is not sufficient — that is what went wrong twice.

## Rules

- Slovak content — never translate or reword copy except where a task specifies an exact new string.
- One commit per task, pushed to `main` (Vercel auto-deploys). After each push, **fetch the live production URL** and paste the evidence (title, count of meta keywords, count of `<h1>`, count of `<footer>`, sample menu href).
- **Keep the MakySofoMont footer branding and the 0952 044 363 phone on these pages** — that split is intentional. Migrate the structure, not the business identity.

## Affected pages

```
/montaz-nabytku
/montaz-nabytku/bratislava
/montaz-kuchyne
/hodinovy-manzel-majster
/hodinovy-manzel-majster/bratislava
```

## Task A — Migrate the route group to the new template

Bring these pages onto the same structure as the rest of the site:

1. Use the **shared** navbar component (new-tree URLs) instead of the cluster's own copy — or update the cluster's copy to new-tree URLs if a separate one must stay for the different phone number.
2. Hero section **once** in the source, one visible `<h1>`, no hidden duplicate. Mobile layout via CSS only.
3. Footer **once** per page (keeping MakySofoMont content).
4. Remove `<meta name="keywords">`.
5. Fix `href="#"` CTAs → point at `/kontakt` or the on-page form anchor, matching what equivalent CTAs do on already-migrated pages.
6. Fix the "Orientačné ceny" self-link so each page excludes its own service card — verify **on the live page**, not by reading the component.

## Task B — Titles, H1s, meta (per the migration sheet, prices corrected)

| Page | Title | H1 | Meta description |
|---|---|---|---|
| `/montaz-nabytku` | Montáž a skladanie nábytku od 25€ \| Sofoservis | Skladanie a montáž nábytku | *keep current* |
| `/montaz-kuchyne` | Montáž a skladanie kuchynskej linky \| Sofoservis | Skladanie a montáž kuchyne | Profesionálna montáž kuchyne od 120€/m. Demontáž od 60€/m. Výjazd od 25€. Všetky typy kuchynských liniek. Kontaktujte nás ešte dnes! |
| `/montaz-nabytku/bratislava` | Montáž a skladanie nábytku Bratislava \| Sofoservis | Montáž a skladanie nábytku v Bratislave | Profesionálna montáž nábytku v Bratislave a okolí ✅ IKEA, JYSK, Asko a iné značky ✅ Od 30 €/hod ✅ Dostupní do 24 hodín |
| `/hodinovy-manzel-majster` | Hodinový manžel - domáci majster \| Sofoservis | Hodinový manžel a domáci majster | Hodinový manžel a domáci majster od 30 €/hod – montáž nábytku, drobné opravy, vŕtanie aj voda. Prehľadný cenník a rýchly nástup. Objednajte si majstra. |
| `/hodinovy-manzel-majster/bratislava` | Hodinový manžel Bratislava - Domáci majster \| Sofoservis | Hodinový manžel a majster v Bratislave | Hodinový manžel v Bratislave vrátane Petržalky a Ružinova – montáž nábytku, vešanie, drobné opravy. Od 30 €/hod, dostupný do 24 hodín. Napíšte, čo treba. |

The `od 25€` in the furniture-assembly title is the **call-out fee** and is correct — do not change it to 30.

## Task C — Price consistency and a real cenník

Confirmed canonical prices:

| Item | Correct |
|---|---|
| Furniture assembly — hourly | **30 €/hod** |
| Hodinový manžel — hourly | **30 €/hod** |
| Kitchen assembly | od 120 €/m |
| Kitchen demontáž | od 60 €/m |
| Výjazd (call-out), all services | **od 25 €** |

1. `/montaz-nabytku` hero says "od 25€/hod" → change to **30 €/hod**.
2. The "Orientačné ceny" card for furniture assembly says "od 20 €" → change to **od 30 €/hod** so it matches the hero. (This exact contradiction is what the SEO consultant flagged.)
3. `/montaz-kuchyne` "Výjazd od 20 €" → **od 25 €**.
4. Add a **"Cenník montáže nábytku"** section (and "Cenník montáže kuchyne" on the kitchen page), placed **above** "Orientačné ceny našich služieb", matching the pattern already used on `/vypratavanie/odvoz-likvidacia-stavebneho-odpadu`:

**Cenník montáže nábytku:** Obhliadka zadarmo · 1 pracovník 30 €/hod · 2 pracovníci 60 €/hod · Montáž/demontáž podľa typu nábytku · Menšie kusy (stolík, polica) 20–40 € · Stredný nábytok (posteľ, komoda) 40–70 € · Šatník od 90 €/m · Výjazd od 25 €

**Cenník montáže kuchyne:** Obhliadka zadarmo · Montáž od 120 €/m · Demontáž od 60 €/m · Výjazd od 25 €

Do **not** blanket-replace "20 €" elsewhere — other legitimate uses exist (small items in furniture removal, demolition per m²).

## Task D — On-page tuning for the target keywords

The SEO consultant identified 5 keywords where `/montaz-nabytku` currently sits on page 2 of Google (positions 11–19) — small on-page improvements should push it to page 1:

| Keyword | Monthly searches | Current position |
|---|---|---|
| montáže nábytku | 90 | 12 |
| skladanie nábytku cena | 40 | 11 |
| ponúkam montáž nábytku | 30 | 11 |
| montáž nábytku cena | 20 | 19 |
| montovanie nábytku | 10 | 14 |

Note the two "cena" keywords — the cenník section from Task C directly serves those, which is the main win here.

Additionally, without stuffing or rewriting the page's voice:

- Ensure the H1 and at least one H2 naturally contain the primary variants (montáž nábytku, skladanie nábytku, montovanie nábytku).
- The existing FAQ "Koľko stojí montáž nábytku?" is good for the "cena" queries — make sure its answer is consistent with the new cenník figures (it currently says 20–40 € / 40–70 € / 90 €/m, which stays, but the hourly rate must read 30 €/hod).
- Add FAQPage structured data for the existing FAQ block if it isn't already marked up.

**Do not** add new pages, change URLs, or alter the page's tone. This is on-page refinement only.

## Final report

Per task: files changed, and for each of the 5 pages a **live production** verification line: title, meta-keywords count (0), `<h1>` count (1), `<footer>` count (1), one sample menu href (must be new-tree), and confirmation the pricing section has no self-link.
