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
  "font-semibold text-[#78400b] underline decoration-[#a7621d] underline-offset-4 transition-colors hover:text-[#5f3006] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78400b] focus-visible:ring-offset-2";

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
    <aside className="my-10 border-l-4 border-[#a7621d] bg-[#eef4ed] px-6 py-6 md:px-8">
      <p className="max-w-2xl text-lg leading-8 text-[#27332e]">
        <RichText content={content} />
      </p>
      <Link
        href="/kontakt"
        className="mt-5 inline-flex min-h-11 items-center rounded-full bg-[#78400b] px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78400b] focus-visible:ring-offset-2"
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
    <main className="bg-[#fbfcf9] text-[#27332e]">
      <section className="border-b border-[#e2e8e1] bg-[#edf3ed]">
        <div className="pt-[112px] desktop:pt-[136px]">
          <Breadcrumbs variant="hero" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-14 pt-8 sm:px-6 md:grid-cols-[1.03fr_.97fr] md:items-end md:px-8 md:pb-20 md:pt-14">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#78400b]">
              {article.category}
              <span className="mx-2 text-[#6d7972]">/</span>
              {article.readingTime}
            </p>
            <h1 className="max-w-4xl font-[var(--font-sora)] text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#26332d] md:text-6xl">
              {article.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#52605a]">
              {article.description}
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm text-[#5d6963]">
              <span className="h-2 w-2 rounded-full bg-[#a7621d]" />
              Praktické skúsenosti zo sťahovania od roku 2018
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] shadow-[0_24px_60px_rgba(39,51,46,.14)]">
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 48vw"
            />
          </div>
          <p className="text-xs leading-5 text-[#5d6963] md:col-start-2">
            Zdroj fotografie:{" "}
            <a
              href={article.imageSourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#78400b] underline underline-offset-4"
            >
              unsplash.com/photos/a-kitchen-with-white-cabinets-and-stainless-steel-appliances-ln0Y-eVnrBc
            </a>
          </p>
        </div>
      </section>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 md:grid-cols-[minmax(0,760px)_220px] md:px-8 md:py-20">
        <article className="min-w-0">
          <p className="article-lead">{article.intro}</p>
          {article.blocks.map((block, index) => (
            <ContentBlock key={`${block.type}-${index}`} block={block} />
          ))}
          <Link
            href="/kontakt"
            className="mt-4 inline-flex min-h-11 items-center rounded-full bg-[#27332e] px-7 py-3.5 font-bold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27332e] focus-visible:ring-offset-2"
          >
            Dohodnúť termín
          </Link>
        </article>
        <aside className="hidden md:block">
          <div className="sticky top-28 border-l border-[#d8ddd7] pl-6 text-sm text-[#5d6963]">
            <p className="mb-4 font-bold uppercase tracking-[.16em] text-[#78400b]">
              V článku
            </p>
            <nav aria-label="Obsah článku" className="space-y-3">
              {article.toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block rounded-sm transition-colors hover:text-[#78400b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78400b]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      </div>
      <style>{`
        article h2{scroll-margin-top:9rem;margin-top:3.5rem;margin-bottom:1.25rem;font-family:var(--font-sora);font-size:clamp(1.65rem,3vw,2.25rem);font-weight:600;line-height:1.2;letter-spacing:-.03em;color:#27332e}
        article h3{scroll-margin-top:9rem;margin-top:3rem;margin-bottom:1.1rem;font-family:var(--font-sora);font-size:1.45rem;font-weight:600;line-height:1.3}
        article p{margin-top:1.15rem;font-size:1.05rem;line-height:1.9;color:#52605a}
        article p.article-lead{font-size:clamp(1.25rem,2.4vw,1.5rem);line-height:1.7;color:#35443d}
        article ul{margin:1.25rem 0 1.5rem;padding-left:1.5rem;list-style:none}
        article li{position:relative;margin:.8rem 0;padding-left:1.4rem;color:#52605a;font-size:1.05rem;line-height:1.8}
        article li:before{content:"";position:absolute;left:0;top:.85em;width:.45rem;height:.45rem;border-radius:50%;background:#a7621d}
      `}</style>
    </main>
  );
}