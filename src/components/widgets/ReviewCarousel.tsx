"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";

interface Review {
  author_name: string;
  profile_photo_url?: string;
  rating: number;
  text: string;
  relative_time_description: string;
  time: number;
}

interface ReviewCarouselProps {
  reviews: Review[];
  lang?: "sk" | "en";
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill={star <= rating ? "#F4B400" : "#E0E0E0"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function InitialsAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-orange-500",
    "bg-pink-500",
    "bg-teal-500",
    "bg-indigo-500",
  ];
  const colorIndex =
    name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
    colors.length;

  return (
    <div
      className={`w-10 h-10 rounded-full ${colors[colorIndex]} flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}
    >
      {initials}
    </div>
  );
}

function ReviewCard({ review, lang = "sk" }: { review: Review; lang?: "sk" | "en" }) {
  const [expanded, setExpanded] = useState(false);
  const shouldTruncate = review.text.length > 200;
  const displayText =
    shouldTruncate && !expanded ? review.text.slice(0, 200) + "..." : review.text;

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5 flex flex-col gap-3 min-w-[300px] max-w-[350px] w-[350px] flex-shrink-0 h-full">
      <div className="flex items-center gap-3">
        {review.profile_photo_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={review.profile_photo_url}
            alt={review.author_name}
            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            referrerPolicy="no-referrer"
            loading="lazy"
            width={40}
            height={40}
          />
        ) : (
          <InitialsAvatar name={review.author_name} />
        )}
        <div className="min-w-0">
          <p className="font-semibold text-gray-900 text-sm truncate">
            {review.author_name}
          </p>
          <p className="text-xs text-gray-500">
            {review.relative_time_description}
          </p>
        </div>
      </div>

      <StarRating rating={review.rating} />

      <div className="flex-1">
        <p className="text-sm text-gray-700 leading-relaxed">{displayText}</p>
        {shouldTruncate && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium mt-1"
          >
            {expanded
              ? (lang === "en" ? "Show less" : "Zobraziť menej")
              : (lang === "en" ? "Read more" : "Čítať viac")}
          </button>
        )}
      </div>

      <div className="flex items-center gap-1.5 mt-auto pt-2 border-t border-gray-50">
        <svg
          width={14}
          height={14}
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#4285F4"
            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
          />
          <path
            fill="#34A853"
            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
          />
          <path
            fill="#FBBC05"
            d="M10.53 28.59a14.5 14.5 0 0 1 0-9.18l-7.98-6.19a24.0 24.0 0 0 0 0 21.56l7.98-6.19z"
          />
          <path
            fill="#EA4335"
            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
          />
        </svg>
        <span className="text-xs text-gray-400">Google Review</span>
      </div>
    </div>
  );
}

export default function ReviewCarousel({ reviews, lang = "sk" }: ReviewCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const totalSlides = reviews.length;

  const goTo = useCallback(
    (index: number) => {
      if (totalSlides === 0) return;
      setCurrentIndex(((index % totalSlides) + totalSlides) % totalSlides);
    },
    [totalSlides]
  );

  const goNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const goPrev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;

    intervalRef.current = setInterval(goNext, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, goNext, totalSlides]);

  if (!reviews || reviews.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>{lang === "en" ? "No reviews available at this time." : "Momentálne nie sú k dispozícii žiadne recenzie."}</p>
      </div>
    );
  }

  return (
    <div
      className="relative w-full max-w-5xl mx-auto px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-in-out gap-4"
          style={{
            transform: `translateX(calc(-${currentIndex} * (350px + 16px)))`,
          }}
        >
          {reviews.map((review, index) => (
            <ReviewCard key={`${review.author_name}-${index}`} review={review} lang={lang} />
          ))}
        </div>
      </div>

      {totalSlides > 1 && (
        <>
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200 z-10"
            aria-label="Previous review"
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200 z-10"
            aria-label="Next review"
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </>
      )}

      <div className="flex justify-center gap-2 mt-4">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
