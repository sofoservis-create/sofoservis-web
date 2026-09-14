import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { blogArticles } from "@/lib/blog/articles";

export const metadata: Metadata = {
  title: "Blog | Praktické rady pre sťahovanie | Sofoservis",
  description: "Skúsenosti a praktické rady zo sťahovania, prepravy a vypratávania od Sofoservisu.",
  alternates: {
    canonical: "https://www.sofoservis.sk/blog",
    languages: {
      "sk-SK": "https://www.sofoservis.sk/blog",
      "x-default": "https://www.sofoservis.sk/blog",
    },
  },
  openGraph: {
    title: "Blog | Praktické rady pre sťahovanie | Sofoservis",
    description: "Skúsenosti a praktické rady zo sťahovania, prepravy a vypratávania od Sofoservisu.",
    url: "https://www.sofoservis.sk/blog",
    siteName: "Sofoservis",
    locale: "sk_SK",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main className="blog-shell bg-[#faf9f6] text-[#171717]">
      <section className="relative overflow-hidden border-b-4 border-[#171717] bg-[#f4d80c]">
        <div aria-hidden="true" className="absolute -right-20 top-20 h-72 w-72 rounded-full border-[32px] border-[#171717]/10" />
        <div className="pt-[112px] desktop:pt-[136px]">
          <Breadcrumbs variant="hero" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 md:px-8 md:pb-24 md:pt-24">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-[#171717]">SofoServis / blog</p>
            <h1 className="mt-5 max-w-4xl font-[var(--font-sora)] text-5xl font-bold leading-[.98] tracking-[-.06em] md:text-8xl">Praktické rady. Menej stresu.</h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-[#302f1b] md:text-xl">Skúsenosti z terénu, ktoré vám pomôžu pripraviť sťahovanie, prevoz aj vypratávanie tak, aby vás nič nezaskočilo.</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 text-sm font-bold">
            <span className="rounded-full border-2 border-[#171717] bg-[#171717] px-4 py-2 text-[#f4d80c]">Rady z praxe</span>
            <span className="rounded-full border-2 border-[#171717] px-4 py-2">Čitateľné za pár minút</span>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-8 md:py-20">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#666]">Vyberte si tému</p><h2 className="mt-2 font-[var(--font-sora)] text-3xl font-bold tracking-[-.04em] md:text-4xl">Čo práve riešite?</h2></div>
          <span className="hidden text-sm font-semibold text-[#666] md:block">{blogArticles.length} článok</span>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12">
          {blogArticles.map((article, index) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className={`blog-card group overflow-hidden rounded-[1.25rem] border-2 border-[#171717] bg-white shadow-[6px_6px_0_#171717] transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#171717] focus-visible:ring-offset-4 ${index === 0 ? "md:col-span-2 lg:col-span-8" : "lg:col-span-4"}`}>
              <div className="relative aspect-[16/9] overflow-hidden border-b-2 border-[#171717]">
                <Image src={article.image} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 70vw" />
                <span className="absolute left-4 top-4 rounded-full bg-[#f4d80c] px-3 py-1.5 text-xs font-bold uppercase tracking-[.12em] text-[#171717]">{article.category}</span>
              </div>
              <div className="p-6 md:p-9">
                <p className="text-xs font-bold uppercase tracking-[.14em] text-[#666]">{article.readingTime} · {article.datePublished}</p>
                <h2 className="mt-4 max-w-2xl font-[var(--font-sora)] text-2xl font-bold leading-tight tracking-[-.04em] md:text-4xl">{article.title}</h2>
                <p className="mt-4 max-w-xl leading-7 text-[#69766f]">{article.summary}</p>
                <span className="mt-7 inline-flex items-center gap-3 font-bold text-[#171717]">Prečítať článok <svg aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none"><path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              </div>
            </Link>
          ))}
           <div className="flex flex-col justify-between rounded-[1.25rem] bg-[#171717] p-7 text-[#faf9f6] md:col-span-2 md:p-9 lg:col-span-4">
            <div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#f4d80c]">Naše skúsenosti</p><h2 className="mt-5 font-[var(--font-sora)] text-3xl font-bold leading-tight tracking-[-.04em]">Sťahovanie je v detailoch.</h2><p className="mt-5 leading-7 text-[#d7d7d0]">Od schodov po úzke chodby. Poznáme situácie, ktoré sa na internete často nezmestia do jednej vety.</p></div>
            <Link href="/kontakt" className="mt-10 inline-flex min-h-12 w-fit items-center rounded-full bg-[#f4d80c] px-6 py-3 font-bold text-[#171717] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4d80c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717]">Poradiť sa s nami</Link>
          </div>
        </div>
      </section>
    </main>
  );
}