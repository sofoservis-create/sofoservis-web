interface BlogPostingJsonLdProps {
  title: string;
  description: string;
  publishDate: string;
  slug: string;
  image?: string;
}

export default function BlogPostingJsonLd({
  title,
  description,
  publishDate,
  slug,
  image,
}: BlogPostingJsonLdProps) {
  const url = `https://www.sofoservis.sk/blog/${slug}`;
  const imageUrl = image
    ? new URL(image, "https://www.sofoservis.sk").toString()
    : undefined;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    datePublished: publishDate,
    dateModified: publishDate,
    inLanguage: "sk-SK",
    url: url,
    ...(imageUrl ? { image: imageUrl } : {}),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
    },
    author: {
      "@type": "Organization",
      "@id": "https://www.sofoservis.sk/#organization",
      name: "SofoServis",
      url: "https://www.sofoservis.sk",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://www.sofoservis.sk/#organization",
      name: "SofoServis",
      url: "https://www.sofoservis.sk",
      logo: {
        "@type": "ImageObject",
        url: "https://www.sofoservis.sk/images/og-logo.png",
        width: 1200,
        height: 630,
      },
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
