import { getGoogleRating } from "@/lib/googleRating";

interface ReviewAggregateJsonLdProps {
  /** Override the live Google value (otherwise fetched automatically). */
  ratingValue?: number;
  /** Override the live Google value (otherwise fetched automatically). */
  reviewCount?: number;
  bestRating?: number;
  worstRating?: number;
}

export default async function ReviewAggregateJsonLd({
  ratingValue,
  reviewCount,
  bestRating = 5,
  worstRating = 1,
}: ReviewAggregateJsonLdProps) {
  if (ratingValue === undefined || reviewCount === undefined) {
    const live = await getGoogleRating();
    ratingValue = ratingValue ?? live.ratingValue;
    reviewCount = reviewCount ?? live.reviewCount;
  }
  const schema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: "Sofoservis",
    url: "https://www.sofoservis.sk",
    telephone: "+421951735130",
    image: "https://www.sofoservis.sk/images/og-logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bratislava",
      addressRegion: "Bratislavský kraj",
      addressCountry: "SK",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
      bestRating,
      worstRating,
    },
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
