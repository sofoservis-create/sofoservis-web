"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import ReviewsShowcase from "./ReviewsShowcase";
import ReviewCarousel from "./ReviewCarousel";

interface GoogleReviewsProps {
  title?: string;
  subtitle?: string;
  showReviewsShowcase?: boolean;
  showCarousel?: boolean;
}

interface Review {
  author_name: string;
  profile_photo_url?: string;
  rating: number;
  text: string;
  relative_time_description: string;
  time: number;
}

export default function GoogleReviews({
  title = "Pridajte sa k naším spokojným klientom",
  subtitle = "  ",
  showReviewsShowcase = true,
  showCarousel,
}: GoogleReviewsProps) {
  const effectiveShowCarousel = showCarousel ?? !showReviewsShowcase;
  const pathname = usePathname();
  const lang = pathname?.startsWith("/en") ? "en" : "sk";
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(effectiveShowCarousel);

  useEffect(() => {
    if (!effectiveShowCarousel) return;

    setLoading(true);
    async function fetchReviews() {
      try {
        const res = await fetch("/api/reviews");
        if (res.ok) {
          const data = await res.json();
          setReviews(data.reviews || []);
        }
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, [effectiveShowCarousel]);

  return (
    <section className="pt-6 pb-0 md:pt-8 md:pb-0 bg-white overflow-hidden" id="reviews">
      <Container>
        <div className="text-center mb-[36px] md:mb-[42px]">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-900 mb-2">
            {title}
          </h3>
          {subtitle && (
            <p className="text-lg text-primary-600/90 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {showReviewsShowcase && (
          <div className="mb-0">
            <ReviewsShowcase />
          </div>
        )}

        {effectiveShowCarousel && (
          <div className="min-h-[230px] flex items-center justify-center">
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin" />
              </div>
            ) : (
              <ReviewCarousel reviews={reviews} lang={lang as "sk" | "en"} />
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
