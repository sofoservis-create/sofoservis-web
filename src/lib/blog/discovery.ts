import { blogArticles, type BlogArticleData, type BlogService } from "./articles";

/**
 * ISO calendar dates sort chronologically without timezone conversion.
 * Slug tie-breaking keeps equal-date results deterministic; never mutate the registry.
 */
export function selectDiscoveryArticles(
  service?: BlogService,
  articles: readonly BlogArticleData[] = blogArticles,
): BlogArticleData[] {
  return articles
    .filter((article) => !service || article.relevantServices.includes(service))
    .sort((a, b) => {
      if (a.datePublished !== b.datePublished) {
        return a.datePublished > b.datePublished ? -1 : 1;
      }
      return a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0;
    })
    .slice(0, 3);
}
