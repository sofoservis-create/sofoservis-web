import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FAQAccordion from "./FAQAccordion";
import type {
  ArticleBlock,
  BlogArticleData,
  InlineContent,
} from "@/lib/blog/articles";

const articleLinkClass =
  "rounded-sm font-semibold text-[#675500] underline decoration-[#c9b208] decoration-2 underline-offset-4 transition-colors hover:text-[#171717] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2";

function formatPublishedDate(date: string) {
  const [year, month, day] = date.split("-");
  return `${Number(day)}. ${Number(month)}. ${year}`;
}

function ArticleContents({
  items,
  mobile = false,
}: {
  items: BlogArticleData["toc"];
  mobile?: boolean;
}) {
  const links = (
    <nav aria-label="Obsah článku" className={mobile ? "mt-4 grid gap-2" : "space-y-3"}>
      {items.map((item, index) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`rounded-lg font-semibold text-[#404040] transition-colors hover:bg-[#fef9c3] hover:text-[#171717] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] ${
            mobile ? "flex min-h-11 items-center gap-3 border border-primary-200 bg-white px-3 py-2.5" : "block px-3 py-2"
          }`}
        >
          <span className="text-xs font-bold text-[#756605]">{String(index + 1).padStart(2, "0")}</span>
          {item.label}
        </a>
      ))}
    </nav>
  );

  if (!mobile) return links;

  return (
    <details className="group mb-10 rounded-2xl border-2 border-[#171717] bg-[#fef9c3] p-4 shadow-[4px_4px_0_#171717] lg:hidden">
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#171717] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] [&::-webkit-details-marker]:hidden">
        Obsah článku
        <span
          aria-hidden="true"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171717] text-lg text-[#f4d80c] transition-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>
      {links}
    </details>
  );
}

function RichText({ content }: { content: InlineContent }) {
  if (typeof content === "string") return content;

  return content.map((part, index) => {
    if (!part.href) return <span key={index}>{part.text}</span>;
    if (part.external) {
      return (
        <a
          key={index}
          href={part.href}
          target="_blank"
          rel="noopener noreferrer"
          className={articleLinkClass}
        >
          {part.text}
        </a>
      );
    }
    return (
      <Link key={index} href={part.href} className={articleLinkClass}>
        {part.text}
      </Link>
    );
  });
}

function CTA({
  content,
  label,
}: {
  content: InlineContent;
  label: string;
}) {
  return (
    <aside className="my-10 rounded-r-2xl border-l-8 border-[#f4d80c] bg-[#fff9c7] px-6 py-6 shadow-[4px_4px_0_#171717] md:px-8">
      <p className="max-w-2xl text-lg font-medium leading-8 text-[#171717]">
        <RichText content={content} />
      </p>
      <Link
        href="/kontakt"
        className="mt-5 inline-flex min-h-11 items-center rounded-full bg-[#171717] px-6 py-3 text-sm font-bold text-[#f4d80c] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2"
      >
        {label}
      </Link>
    </aside>
  );
}

function ContentBlock({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "heading":
      return block.level === 2 ? (
        <h2 id={block.id}>{block.text}</h2>
      ) : (
        <h3 id={block.id}>{block.text}</h3>
      );
    case "paragraph":
      return (
        <p className={block.lead ? "article-lead" : undefined}>
          <RichText content={block.content} />
        </p>
      );
    case "list":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "cta":
      return <CTA content={block.content} label={block.label} />;
    case "faq":
      return <FAQAccordion items={block.items} />;
  }
}

export default function BlogArticle({ article }: { article: BlogArticleData }) {
  return (
    <main className="blog-shell bg-[#faf9f6] text-[#171717]">
      <section className="relative overflow-hidden border-b-4 border-[#171717] bg-[#f4d80c]">
        <div className="pt-[112px] desktop:pt-[136px]">
          <Breadcrumbs variant="hero" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-14 pt-8 sm:px-6 md:px-8 md:pb-20 md:pt-14 lg:grid-cols-[1.03fr_.97fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#171717]">
              {article.category}
              <span className="mx-2 text-[#6d7972]">/</span>
              {article.readingTime}
            </p>
            <h1 className="max-w-4xl font-[var(--font-sora)] text-4xl font-bold leading-[1.02] tracking-[-0.05em] text-[#171717] md:text-6xl">
              {article.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-[#302f1b]">
              {article.summary}
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm text-[#404040]">
              <span className="h-2 w-2 rounded-full bg-[#171717]" />
              Praktické skúsenosti zo sťahovania od roku 2018 ·{" "}
              <time dateTime={article.datePublished}>{formatPublishedDate(article.datePublished)}</time>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] border-2 border-[#171717] shadow-[8px_8px_0_#171717]">
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 48vw"
            />
          </div>
          <p className="min-w-0 break-words text-xs leading-5 text-[#404040] lg:col-start-2">
            Zdroj fotografie:{" "}
            <a
              href={article.imageSourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="break-all rounded-sm font-semibold text-[#171717] underline decoration-[#756605] underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]"
            >
              {article.imageSourceLabel}
            </a>
          </p>
        </div>
      </section>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 md:px-8 md:py-20 lg:grid-cols-[minmax(0,760px)_240px] lg:justify-between">
        <article className="article-prose min-w-0">
          <ArticleContents items={article.toc} mobile />
          <p className="article-lead">{article.intro}</p>
          {article.blocks.map((block, index) => (
            <ContentBlock key={`${block.type}-${index}`} block={block} />
          ))}
          <Link
            href="/kontakt"
            className="mt-4 inline-flex min-h-11 items-center rounded-full bg-[#171717] px-7 py-3.5 font-bold text-[#f4d80c] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2"
          >
            Dohodnúť termín
          </Link>
        </article>
        <aside className="hidden lg:block">
          <div className="sticky top-28 rounded-2xl border-2 border-[#171717] bg-white p-4 text-sm shadow-[4px_4px_0_#f4d80c]">
            <p className="px-3 pb-2 pt-1 font-bold uppercase tracking-[.16em] text-[#675500]">
              V článku
            </p>
            <ArticleContents items={article.toc} />
          </div>
        </aside>
      </div>
      <style>{`
         article h2{scroll-margin-top:9rem;margin-top:3.5rem;margin-bottom:1.25rem;font-family:var(--font-sora);font-size:clamp(1.65rem,3vw,2.25rem);font-weight:700;line-height:1.12;letter-spacing:-.04em;color:#171717}
         article h3{scroll-margin-top:9rem;margin-top:3rem;margin-bottom:1.1rem;font-family:var(--font-sora);font-size:1.45rem;font-weight:700;line-height:1.25;color:#171717}
         article p{margin-top:1.15rem;font-size:1.05rem;line-height:1.85;color:#454545}
         article p.article-lead{font-size:clamp(1.25rem,2.4vw,1.5rem);line-height:1.65;color:#262626;font-weight:500}
         article ul{margin:1.25rem 0 1.5rem;padding-left:1.5rem;list-style:none}
         article li{position:relative;margin:.8rem 0;padding-left:1.4rem;color:#454545;font-size:1.05rem;line-height:1.8}
         article li:before{content:"";position:absolute;left:0;top:.85em;width:.55rem;height:.55rem;border-radius:50%;background:#f4d80c;border:2px solid #171717}
      `}</style>
    </main>
  );
}