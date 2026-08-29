import React from "react";
import { headers } from "next/headers";
import ReviewBadge from "./ReviewBadge";
import ReviewCarousel from "./ReviewCarousel";
import type { StaticReview } from "@/data/staticReviews";
import { getGoogleReviewsData } from "@/lib/googleRating";

interface ReviewsShowcaseProps {
  variant?: "default" | "full";
  title?: string;
  lang?: "sk" | "en";
  ratingValue?: number;
  reviewCount?: number;
  reviews?: StaticReview[];
}

export default async function ReviewsShowcase({
  variant = "default",
  title,
  lang,
  ratingValue,
  reviewCount,
  reviews,
}: ReviewsShowcaseProps) {
  const resolvedLang =
    lang ??
    (((await headers()).get("x-pathname") || "/").startsWith("/en")
      ? "en"
      : "sk");

  if (ratingValue === undefined || reviewCount === undefined || reviews === undefined) {
    const googleData = await getGoogleReviewsData();
    ratingValue ??= googleData.ratingValue;
    reviewCount ??= googleData.reviewCount;
    reviews ??= googleData.reviews;
  }

  const isEnglish = resolvedLang === "en";

  if (variant === "full") {
    return (
      <section className="bg-white pt-0 pb-10 md:pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {title && (
            <div className="text-center mb-4">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-3">
                {title}
              </h3>
              <p className="text-lg text-primary-600/90 max-w-2xl mx-auto">
                {isEnglish ? "What our clients say about us" : "Čo o nás hovoria naši klienti"}
              </p>
            </div>
          )}

          <div className="w-full mx-auto min-h-[230px] flex items-center justify-center">
            <ReviewCarousel reviews={reviews} lang={resolvedLang} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white pt-0 pb-[72px] md:pb-[78px]">
      <div className="container mx-auto px-0 sm:px-6 lg:px-8 max-w-7xl">
        {title && (
          <div className="text-center mb-4">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-3">
              {title}
            </h3>
            <p className="text-lg text-primary-600/90 max-w-2xl mx-auto">
              {isEnglish ? "What our clients say about us" : "Čo o nás hovoria naši klienti"}
            </p>
          </div>
        )}

        <div className="flex justify-center w-full">
          <div className="flex flex-row gap-4 justify-center">
            <ReviewBadge
              platform="google"
              rating={ratingValue}
              reviewCount={
                isEnglish
                  ? `${reviewCount} Google reviews`
                  : `${reviewCount} hodnotení na Google`
              }
            />
            <ReviewBadge
              platform="facebook"
              rating={4.9}
              reviewCount={isEnglish ? "Based on 150+ reviews" : "Na základe 150+ recenzií"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
