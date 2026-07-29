/**
 * Next.js App Router API route — place this file at:  app/api/reviews/route.ts
 *
 * Fetches live Google reviews via the Google Places API (server-side, key stays
 * secret), merges them with static fallback reviews, and caches for 24h.
 *
 * Setup on the target site:
 *  1. Set env var GOOGLE_PLACES_API_KEY (Google Cloud → Places API enabled).
 *  2. Set NEXT_PUBLIC_GOOGLE_PLACE_ID to the Place ID of the business, or
 *     replace the fallback below. (Current fallback = Sofoservis' Place ID.)
 *  3. Optional: edit staticReviews.ts fallback data.
 *
 * Without an API key the route still works — it serves the static reviews.
 */
import { NextResponse } from "next/server";
import { staticReviews } from "./staticReviews";

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || "ChIJj9SG7AKJbEcRhBqUCB_mDKE";

export const revalidate = 86400; // 24h

export async function GET() {
  let liveReviews: typeof staticReviews = [];
  let rating: number | undefined;
  let totalReviews: number | undefined;

  if (GOOGLE_PLACES_API_KEY) {
    try {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&reviews_sort=newest&reviews_no_translations=true&language=sk&key=${GOOGLE_PLACES_API_KEY}`;
      const response = await fetch(url, { next: { revalidate: 86400 } });
      const data = await response.json();

      if (data.status === "OK") {
        liveReviews = (data.result?.reviews || []).filter(
          (r: { rating: number; text?: string }) =>
            r.rating === 5 && r.text && r.text.trim().length > 0
        );
        rating = data.result?.rating;
        totalReviews = data.result?.user_ratings_total;
      }
    } catch (error) {
      console.error("Error fetching live Google reviews:", error);
    }
  }

  // De-duplicate: live reviews win over static ones with the same author.
  const liveNames = new Set(liveReviews.map((r) => r.author_name.toLowerCase().trim()));
  const filteredStatic = staticReviews.filter(
    (r) => !liveNames.has(r.author_name.toLowerCase().trim())
  );

  const merged = [...liveReviews, ...filteredStatic]
    .sort((a, b) => b.time - a.time)
    .slice(0, 15);

  return NextResponse.json(
    { reviews: merged, rating, totalReviews },
    {
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
      },
    }
  );
}
