import React from "react";
import { headers } from "next/headers";
import Container from "@/components/ui/Container";
import ReviewsShowcase from "./ReviewsShowcase";
import ReviewCarousel from "./ReviewCarousel";
import GoogleRatingMark from "./GoogleRatingMark";
import { getGoogleReviewsData } from "@/lib/googleRating";

interface GoogleReviewsProps {
  title?: string;
  subtitle?: string;
  showReviewsShowcase?: boolean;
  showCarousel?: boolean;
}

export default async function GoogleReviews({
  title = "Pridajte sa k naším spokojným klientom",
  subtitle = "  ",
  showReviewsShowcase = true,
  showCarousel,
}: GoogleReviewsProps) {
  const effectiveShowCarousel = showCarousel ?? !showReviewsShowcase;
  const pathname = (await headers()).get("x-pathname") || "/";
  const lang = pathname.startsWith("/en") ? "en" : "sk";
  const { reviews, ratingValue, reviewCount } = await getGoogleReviewsData();

  return (
    <section className="pt-6 pb-0 md:pt-8 md:pb-0 bg-white overflow-hidden" id="reviews">
      <Container>
        <div className="text-center mb-[36px] md:mb-[42px]">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-900 mb-2">
            {title}
          </h3>
          <GoogleRatingMark
            lang={lang}
            initialRating={ratingValue}
            initialReviewCount={reviewCount}
            showReviewCount
            theme="light"
          />
          {subtitle && (
            <p className="text-lg text-primary-600/90 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {showReviewsShowcase && (
          <div className="mb-0">
            <ReviewsShowcase
              lang={lang}
              ratingValue={ratingValue}
              reviewCount={reviewCount}
              reviews={reviews}
            />
          </div>
        )}

        {effectiveShowCarousel && (
          <div className="min-h-[230px] flex items-center justify-center">
            <ReviewCarousel reviews={reviews} lang={lang} />
          </div>
        )}
      </Container>
    </section>
  );
}
