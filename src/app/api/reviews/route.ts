import { NextResponse } from "next/server";
import { getGoogleReviewsData } from "@/lib/googleRating";

export const revalidate = 86400;

export async function GET() {
  const { reviews, ratingValue, reviewCount } = await getGoogleReviewsData();

  return NextResponse.json(
    { reviews, rating: ratingValue, totalReviews: reviewCount },
    {
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
      },
    }
  );
}
