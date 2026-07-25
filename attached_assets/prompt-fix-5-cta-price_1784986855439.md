# Prompt FIX-5 — Montáž / hodinový manžel: dead CTAs + price inconsistency (sofoservis.sk)

> Paste into the Replit agent. Verified on live production — these three issues remain after the cluster migration. Small, surgical changes only.

## Rules

- Slovak content — never translate or reword copy except the one price figure in Task B.
- One commit, pushed to `main`. **Live is served via Vercel** — after the push, re-fetch each affected production URL and paste evidence.
- Do not touch anything else on these pages — the migration itself is correct; these are leftover bugs.

## Task A — Dead `href="#"` CTA buttons (all 5 cluster pages)

Across `/montaz-nabytku`, `/montaz-nabytku/bratislava`, `/montaz-kuchyne`, `/hodinovy-manzel-majster`, `/hodinovy-manzel-majster/bratislava`, several CTA buttons still point at `href="#"` and do nothing when clicked. Confirmed examples: "Získajte cenovú ponuku", "Získať nezáväznú cenovú ponuku", "Máte ďalšie otázky? Získajte nezáväznú ponuku", "Objednať montáž nábytku" / "Objednať montáž" / "Objednať hodinového manžela", and the city-band CTA "Sťahujeme aj vo vašej lokalite, získajte ponuku".

Point **every** `href="#"` on these 5 pages at `/kontakt` (matching the yellow "ZÍSKAŤ PONUKU" header button, which already goes to `/kontakt`). If any of these buttons is meant to open the on-page contact form instead, match whatever the equivalent CTA on `/vypratavanie/vypratavanie-bytov-domov` does — but no button may remain `href="#"`.

**Acceptance:** zero `href="#"` on all 5 pages.

## Task B — Price inconsistency in the hodinový manžel FAQ

On `/hodinovy-manzel-majster`, the page states two different hourly rates:

- hero + cenník + "Všetko o..." section: **30 €/hod** ✅ (correct)
- but the FAQ answer to "Koľko stojí hodinový manžel?" says: *"Štandardná hodinová sadzba je 25€ za hodinu práce."* ❌

Change that FAQ sentence to read **30€ za hodinu práce** so the whole page agrees. Leave the rest of that FAQ answer as-is (the "od 25€ v rámci Bratislavy a blízkeho okolia" later in the same answer refers to the **výjazd / dopravné** — that 25 € is correct, do not change it).

Check the other four cluster pages for the same "25€ za hodinu" / "od 25€/hod" wording in body copy or FAQs and correct any hourly-rate instance to 30 €/hod. **Do not** touch výjazd/call-out figures (od 25 €) or the furniture-assembly title "od 25€" (that's the call-out fee).

**Acceptance:** no "25€/hod" or "25€ za hodinu" as an hourly rate anywhere on the 5 pages; všetky výjazd "od 25 €" untouched.

## Task C — tel: link normalization (small)

On `/montaz-nabytku/bratislava` the hero "Zavolajte nám" link is `tel:421952044363` — missing the `+`. Normalize it to the international format **`tel:+421952044363`**.

**Acceptance:** the hero call link on that page reads `tel:+421952044363`.

## Report

Per task: files changed, and for each of the 5 pages a live-production line confirming `href="#"` count is 0 and no stray "25€/hod" hourly rate remains.
