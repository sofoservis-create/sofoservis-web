import type { Metadata } from "next";
import BlogArticle from "@/components/blog/BlogArticle";
import BlogPostingJsonLd from "@/components/seo/BlogPostingJsonLd";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import { inlineText, refrigeratorArticle } from "@/lib/blog/articles";

export const metadata: Metadata = {
  title: refrigeratorArticle.title,
  description: refrigeratorArticle.description,
  alternates: {
    canonical: `https://www.sofoservis.sk/blog/${refrigeratorArticle.slug}`,
    languages: {
      "sk-SK": `https://www.sofoservis.sk/blog/${refrigeratorArticle.slug}`,
      "x-default": `https://www.sofoservis.sk/blog/${refrigeratorArticle.slug}`,
    },
  },
  openGraph: {
    title: refrigeratorArticle.title,
    description: refrigeratorArticle.description,
    url: `https://www.sofoservis.sk/blog/${refrigeratorArticle.slug}`,
    siteName: "Sofoservis",
    locale: "sk_SK",
    type: "article",
    publishedTime: refrigeratorArticle.datePublished,
    images: [
      {
        url: refrigeratorArticle.image,
        width: refrigeratorArticle.imageWidth,
        height: refrigeratorArticle.imageHeight,
        alt: refrigeratorArticle.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: refrigeratorArticle.title,
    description: refrigeratorArticle.description,
    images: [refrigeratorArticle.image],
  },
};

export default function RefrigeratorArticlePage() {
  const faq = refrigeratorArticle.faq.map(({ question, answer }) => ({
    question,
    answer: inlineText(answer),
  }));
  return (
    <>
      <BlogPostingJsonLd title={refrigeratorArticle.title} description={refrigeratorArticle.description} publishDate={refrigeratorArticle.datePublished} slug={refrigeratorArticle.slug} image="/images/blog/preprava-chladnicky-kuchyna.jpg" />
      <FAQJsonLd items={faq} />
      <BlogArticle article={refrigeratorArticle} />
    </>
  );
}