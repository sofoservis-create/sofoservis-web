import Image from "next/image";
import Link from "next/link";
import type { BlogArticleData } from "@/lib/blog/articles";

type ArticleDiscoveryProps = {
  articles: readonly BlogArticleData[];
};

export default function ArticleDiscovery({
  articles,
}: ArticleDiscoveryProps) {
  if (articles.length === 0) return null;

  const count = articles.length;
  const imageSizes =
    count === 1
      ? "(max-width: 639px) calc(100vw - 2rem - 4px), (max-width: 735px) calc(100vw - 3rem - 4px), 668px"
      : count === 2
        ? "(max-width: 639px) calc(100vw - 2rem - 4px), (max-width: 767px) calc((100vw - 4.25rem) / 2 - 4px), (max-width: 959px) calc((100vw - 5.5rem) / 2 - 4px), 432px"
        : "(max-width: 639px) calc(100vw - 2rem - 4px), (max-width: 767px) calc((100vw - 4.25rem) / 2 - 4px), (max-width: 1023px) calc((100vw - 5.5rem) / 2 - 4px), (max-width: 1279px) calc((100vw - 7rem) / 3 - 4px), 385px";
  const gridClass =
    count === 1
      ? "mx-auto grid max-w-2xl grid-cols-1"
      : count === 2
        ? "mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6"
        : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section
      aria-labelledby="article-discovery-title"
      className="border-t-2 border-[#171717] bg-[#faf9f6] py-12 text-[#171717] md:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4 md:mb-9">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[.2em] text-[#666]">
              Skúsenosti z terénu
            </p>
            <h2
              id="article-discovery-title"
              className="font-[var(--font-sora)] text-2xl font-bold tracking-[-.04em] sm:text-3xl md:text-4xl"
            >
              Praktické rady z praxe
            </h2>
          </div>
          <Link
            href="/blog"
            className="group inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-[#171717] px-4 py-2 text-sm font-bold transition-colors hover:bg-[#f4d80c] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f4d80c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf9f6]"
          >
            Všetky články
            <svg
              aria-hidden="true"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M2 8h11M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <ul className={`${gridClass} gap-5 md:gap-6`}>
          {articles.map((article) => {
            const excerpt = article.cardExcerpt ?? article.summary;

            return (
              <li key={article.slug} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.1rem] border-2 border-[#171717] bg-white shadow-[5px_5px_0_#171717] transition-transform duration-200 hover:-translate-y-1">
                <Link
                  href={`/blog/${article.slug}`}
                  aria-label={`Prečítať článok: ${article.title}`}
                  className="relative block aspect-[16/9] overflow-hidden border-b-2 border-[#171717] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#f4d80c]"
                >
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    loading="lazy"
                    sizes={imageSizes}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-[#f4d80c] px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[.1em] text-[#171717]">
                    {article.category}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  {article.readingTime ? (
                    <p className="text-xs font-bold uppercase tracking-[.12em] text-[#666]">
                      {article.readingTime}
                    </p>
                  ) : null}
                  <h3 className="mt-2 font-[var(--font-sora)] text-xl font-bold leading-tight tracking-[-.035em] sm:text-2xl">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="rounded-sm decoration-2 underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f4d80c]"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-[#55564f] sm:text-base sm:leading-7">
                    {excerpt}
                  </p>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="mt-5 inline-flex min-h-10 w-fit items-center gap-2 rounded-sm font-bold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f4d80c]"
                  >
                    Čítať článok
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M2 8h11M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
