import Image from "next/image";
import Link from "next/link";
import type { BlogArticleData } from "@/lib/blog/articles";
import styles from "./ArticleDiscovery.module.css";

type ArticleDiscoveryProps = {
  articles: readonly BlogArticleData[];
};

export default function ArticleDiscovery({
  articles,
}: ArticleDiscoveryProps) {
  if (articles.length === 0) return null;

  const imageSizes =
    "(max-width: 359px) 86px, (max-width: 767px) 94px, " +
    "(max-width: 827px) calc((100vw - 3rem - 1.25rem) / 2 - 4px), " +
    "(max-width: 1023px) 376px, " +
    "(max-width: 1227px) calc((100vw - 3rem - 2.5rem) / 3 - 4px), 376px";

  return (
    <section aria-labelledby="article-discovery-title" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>Skúsenosti z terénu</p>
            <h2 id="article-discovery-title" className={styles.title}>
              Praktické rady z praxe
            </h2>
          </div>
          <Link href="/blog" className={styles.blogLink}>
            Všetky články
            <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 8h11M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </header>

        <ul className={styles.grid}>
          {articles.map((article) => {
            const excerpt = article.cardExcerpt ?? article.summary;

            return (
              <li key={article.slug} className={styles.item}>
                <article className={styles.card}>
                  <Link
                    href={`/blog/${article.slug}`}
                    aria-label={`Prečítať článok: ${article.title}`}
                    className={styles.articleLink}
                  >
                    <span className={styles.image}>
                      <Image
                        src={article.image}
                        alt={article.imageAlt}
                        fill
                        loading="lazy"
                        sizes={imageSizes}
                        className={styles.imageContent}
                      />
                    </span>
                    <div className={styles.content}>
                      <span className={styles.meta}>
                        <span className={styles.category}>{article.category}</span>
                        {article.readingTime ? (
                          <span className={styles.readingTime}>
                            {article.readingTime}
                          </span>
                        ) : null}
                      </span>
                      <h3 className={styles.articleTitle}>{article.title}</h3>
                    </div>
                    <span className={styles.excerpt}>
                      <span className={styles.excerptText}>{excerpt}</span>
                    </span>
                    <span className={styles.readMore}>
                      Čítať článok
                      <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M2 8h11M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
