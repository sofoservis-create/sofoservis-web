"use client";

import { useEffect, useState } from "react";

interface GoogleRatingMarkProps {
  lang?: "sk" | "en";
}

const DEFAULT_RATING = 5;

function GoogleLogo({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden="true"
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
  );
}

function Star({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      width={17}
      height={17}
      viewBox="0 0 24 24"
      fill={filled ? "#F4B400" : "#D1D5DB"}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function GoogleRatingMark({ lang = "sk" }: GoogleRatingMarkProps) {
  const [rating, setRating] = useState(DEFAULT_RATING);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/reviews")
      .then((response) => (response.ok ? response.json() : null))
      .then((data: { rating?: number } | null) => {
        if (!cancelled && typeof data?.rating === "number" && data.rating > 0) {
          setRating(data.rating);
        }
      })
      .catch(() => {
        // The server-rendered default remains visible if the refresh fails.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const ratingLabel =
    lang === "en"
      ? `Google rating ${rating.toFixed(1)} out of 5`
      : `Hodnotenie na Google ${rating.toFixed(1)} z 5`;

  return (
    <div
      className="inline-flex items-center gap-1.5"
      aria-label={ratingLabel}
      title={ratingLabel}
    >
      <span className="text-white text-sm font-semibold tabular-nums">
        {rating.toFixed(1)}
      </span>
      <GoogleLogo />
      <span className="flex items-center gap-0.5" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} filled={star <= Math.round(rating)} />
        ))}
      </span>
    </div>
  );
}