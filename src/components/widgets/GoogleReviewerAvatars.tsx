"use client";

import { useEffect, useState } from "react";

interface Reviewer {
  author_name: string;
  profile_photo_url?: string;
}

interface GoogleReviewerAvatarsProps {
  /** Priemer kruhu v px. */
  size?: number;
  /** Tailwind triedy okraje kruhu (ring), napr. "ring-2 ring-white/30". */
  ringClassName?: string;
  /** Prekrytie kruhov (negatívny margin), napr. "-space-x-2". */
  spaceClassName?: string;
  count?: number;
}

const COLORS = ["bg-primary-700", "bg-accent-600", "bg-primary-500", "bg-primary-900"];

/**
 * Profilové fotky skutočných recenzentov z Google (z /api/reviews, rovnaký zdroj ako
 * karusel recenzií). Recenzent bez fotky sa zobrazí ako kruh s iniciálou. Kým sa dáta
 * nenačítajú, drží sa miesto prázdnymi kruhmi, aby sa layout neposunul.
 */
export default function GoogleReviewerAvatars({
  size = 36,
  ringClassName = "ring-2 ring-white/30",
  spaceClassName = "-space-x-2",
  count = 3,
}: GoogleReviewerAvatarsProps) {
  const [reviewers, setReviewers] = useState<Reviewer[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/reviews")
      .then((response) => (response.ok ? response.json() : null))
      .then((data: { reviews?: Reviewer[] } | null) => {
        if (cancelled || !Array.isArray(data?.reviews)) return;
        const all = data.reviews.filter((r) => r?.author_name);
        const withPhoto = all.filter((r) => r.profile_photo_url);
        const withoutPhoto = all.filter((r) => !r.profile_photo_url);
        setReviewers([...withPhoto, ...withoutPhoto].slice(0, count));
      })
      .catch(() => {
        // Placeholder circles stay if the request fails.
      });
    return () => {
      cancelled = true;
    };
  }, [count]);

  const items: (Reviewer | null)[] = reviewers ?? Array.from({ length: count }, () => null);

  return (
    <div className={`flex ${spaceClassName} flex-shrink-0`} aria-hidden="true">
      {items.map((reviewer, i) => (
        <div
          key={reviewer?.author_name ?? i}
          className={`rounded-full overflow-hidden relative flex items-center justify-center text-white font-bold ${ringClassName} ${
            reviewer ? (reviewer.profile_photo_url ? "bg-gray-200" : COLORS[i % COLORS.length]) : "bg-white/20"
          }`}
          style={{ width: size, height: size, zIndex: count - i, fontSize: size * 0.42 }}
        >
          {reviewer?.profile_photo_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={reviewer.profile_photo_url}
              alt=""
              width={size}
              height={size}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          ) : (
            reviewer?.author_name.charAt(0).toUpperCase()
          )}
        </div>
      ))}
    </div>
  );
}
