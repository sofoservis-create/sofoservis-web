# Google Reviews Carousel — standalone export

Karusel Google recenzií zo sofoservis.sk, pripravený na použitie na inom React / Next.js webe.

## Súbory

| Súbor | Kam ho dať na cieľovom webe |
|---|---|
| `GoogleReviewsCarousel.tsx` | `components/GoogleReviewsCarousel.tsx` (kdekoľvek) |
| `api-route.ts` | `app/api/reviews/route.ts` (Next.js App Router) |
| `staticReviews.ts` | `app/api/reviews/staticReviews.ts` (vedľa route) |

## Požiadavky

- React 18+ / Next.js (App Router pre API route)
- **Tailwind CSS** — komponent je štýlovaný Tailwind triedami
- Google Places API kľúč (voliteľné — bez neho sa zobrazia statické recenzie)

## Použitie

```tsx
import GoogleReviewsCarousel from "@/components/GoogleReviewsCarousel";

// 1) S API route (živé Google recenzie + statický fallback):
<GoogleReviewsCarousel />

// 2) Len so statickými dátami (bez API route):
<GoogleReviewsCarousel reviews={[
  { author_name: "Jana N.", rating: 5, text: "Super!", relative_time_description: "pred týždňom", time: 1770000000 },
]} />

// 3) Anglická verzia textov ("Read more" atď.):
<GoogleReviewsCarousel lang="en" />
```

## Nastavenie živých Google recenzií

1. V [Google Cloud Console](https://console.cloud.google.com/) vytvorte API kľúč a povoľte **Places API**.
2. Na cieľovom webe nastavte env premenné:
   - `GOOGLE_PLACES_API_KEY` — API kľúč (tajný, len na serveri)
   - `NEXT_PUBLIC_GOOGLE_PLACE_ID` — Place ID firmy ([nájdete tu](https://developers.google.com/maps/documentation/places/web-service/place-id))
3. **Dôležité:** v `api-route.ts` je fallback Place ID Sofoservisu — ak je iný web pre inú firmu, nastavte jej vlastné Place ID.

Google Places API vracia max. 5 najnovších recenzií — preto sa miešajú so statickými v `staticReviews.ts` (nahraďte ich recenziami danej firmy).

## Poznámky

- Recenzie sa cachujú 24 hodín (server aj CDN).
- Filtrujú sa len 5★ recenzie s textom — správanie zmeníte v `api-route.ts`.
- Ak cieľový web nepoužíva Tailwind, treba triedy prepísať na vlastné CSS.
