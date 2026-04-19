"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ReviewBadge from "./ReviewBadge";
import ReviewCarousel from "./ReviewCarousel";

interface Review {
  author_name: string;
  profile_photo_url?: string;
  rating: number;
  text: string;
  relative_time_description: string;
  time: number;
}

interface ReviewsShowcaseProps {
  variant?: "default" | "full";
  title?: string;
}

export default function ReviewsShowcase({
  variant = "default",
  title,
}: ReviewsShowcaseProps) {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en") || false;
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(variant === "full");

  useEffect(() => {
    if (variant !== "full") return;

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
  }, [variant]);

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
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin" />
              </div>
            ) : (
              <ReviewCarousel reviews={reviews} lang={isEnglish ? "en" : "sk"} />
            )}
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
              rating={4.9}
              reviewCount={isEnglish ? "Based on 350+ reviews" : "Na základe 350+ recenzií"}
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
