interface ReviewAggregateJsonLdProps {
  url?: string;
  ratingValue?: number;
  reviewCount?: number;
  bestRating?: number;
  worstRating?: number;
}

export default function ReviewAggregateJsonLd({
  url = "https://www.sofoservis.sk/referencie",
  ratingValue = 4.9,
  reviewCount = 500,
  bestRating = 5,
  worstRating = 1,
}: ReviewAggregateJsonLdProps) {
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
