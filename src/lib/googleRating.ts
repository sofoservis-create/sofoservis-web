import { cache } from "react";
import { staticReviews, type StaticReview } from "@/data/staticReviews";

/**
 * One server-side source for visible reviews and JSON-LD AggregateRating.
 *
 * Google data is cached for 24 hours. The fallback keeps both the rendered
 * HTML and structured data consistent when the API is unavailable.
 */

const FALLBACK = {
  ratingValue: 4.9,
  reviewCount: 500,
  reviews: staticReviews.slice(0, 15),
};

const PLACE_ID =
  process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || "ChIJj9SG7AKJbEcRhBqUCB_mDKE";

export interface GoogleRating {
  ratingValue: number;
  reviewCount: number;
}

export interface GoogleReviewsData extends GoogleRating {
  reviews: StaticReview[];
}

export const getGoogleReviewsData = cache(async (): Promise<GoogleReviewsData> => {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return FALLBACK;

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&reviews_sort=newest&reviews_no_translations=true&language=sk&key=${apiKey}`;
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
      const liveReviews = (data.result?.reviews || []).filter(
        (review: StaticReview) =>
          review.rating === 5 &&
          typeof review.text === "string" &&
          review.text.trim().length > 0,
      ) as StaticReview[];
      const liveNames = new Set(
        liveReviews.map((review) => review.author_name.toLowerCase().trim()),
      );
      const reviews = [...liveReviews, ...staticReviews.filter(
        (review) => !liveNames.has(review.author_name.toLowerCase().trim()),
      )]
        .sort((a, b) => b.time - a.time)
        .slice(0, 15);

      return { ratingValue: rating, reviewCount: total, reviews };
    }
  } catch (error) {
    console.error("getGoogleReviewsData: failed to fetch live reviews:", error);
  }

  return FALLBACK;
});

export async function getGoogleRating(): Promise<GoogleRating> {
  const { ratingValue, reviewCount } = await getGoogleReviewsData();
  return { ratingValue, reviewCount };
}
