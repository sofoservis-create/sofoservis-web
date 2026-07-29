/**
 * Server-side helper: live Google rating for JSON-LD AggregateRating.
 *
 * Fetches rating + total review count from the Google Places API with a 24h
 * Next.js fetch cache. Falls back to the last known values when the API key
 * is missing or the request fails, so structured data never disappears.
 */

const FALLBACK = { ratingValue: 4.9, reviewCount: 500 };

const PLACE_ID =
  process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || "ChIJj9SG7AKJbEcRhBqUCB_mDKE";

export interface GoogleRating {
  ratingValue: number;
  reviewCount: number;
}

export async function getGoogleRating(): Promise<GoogleRating> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return FALLBACK;

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=rating,user_ratings_total&key=${apiKey}`;
    const response = await fetch(url, { next: { revalidate: 86400 } });
    const data = await response.json();

    const rating = data?.result?.rating;
    const total = data?.result?.user_ratings_total;

    if (
      data?.status === "OK" &&
      typeof rating === "number" &&
      rating > 0 &&
      typeof total === "number" &&
      total > 0
    ) {
      return { ratingValue: rating, reviewCount: total };
    }
  } catch (error) {
    console.error("getGoogleRating: failed to fetch live rating:", error);
  }

  return FALLBACK;
}
