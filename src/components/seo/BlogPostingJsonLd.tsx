interface BlogPostingJsonLdProps {
  title: string;
  description: string;
  publishDate: string;
  slug: string;
}

export default function BlogPostingJsonLd({
  title,
  description,
  publishDate,
  slug,
}: BlogPostingJsonLdProps) {
  const url = `https://www.sofoservis.sk/blog/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    datePublished: publishDate,
    dateModified: publishDate,
    inLanguage: "sk-SK",
    url: url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Organization",
      name: "SofoServis",
      url: "https://www.sofoservis.sk",
    },
    publisher: {
      "@type": "Organization",
      name: "SofoServis",
      url: "https://www.sofoservis.sk",
      logo: {
        "@type": "ImageObject",
        url: "https://www.sofoservis.sk/images/og-logo.png",
        width: 300,
        height: 80,
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
