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
    <main className="bg-[#fbfcf9] text-[#27332e]">
      <section className="border-b border-[#e2e8e1] bg-[#edf3ed]">
        <div className="pt-[112px] desktop:pt-[136px]">
          <Breadcrumbs variant="hero" />
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 md:px-8 md:pb-24 md:pt-24">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-[#78400b]">Sofoservis / blog</p>
          <h1 className="mt-5 max-w-3xl font-[var(--font-sora)] text-5xl font-semibold leading-[1.05] tracking-[-.05em] md:text-7xl">Rady, ktoré sa zídu ešte pred sťahovaním.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#52605a]">Žiadne všeobecné frázy. Len praktické skúsenosti z práce, ktoré vám pomôžu rozhodnúť sa správne a pripraviť sa bez zbytočných škôd.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-8 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1.25fr_.75fr]">
          {blogArticles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="group overflow-hidden rounded-[1.5rem] border border-[#d8ddd7] bg-white shadow-[0_12px_35px_rgba(39,51,46,.06)] transition-transform hover:-translate-y-1">
              <div className="relative aspect-[16/8] overflow-hidden">
                <Image src={article.image} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 70vw" />
              </div>
              <div className="p-7 md:p-9">
                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#78400b]">{article.category} · {article.readingTime}</p>
                <h2 className="mt-4 max-w-2xl font-[var(--font-sora)] text-2xl font-semibold leading-tight tracking-[-.03em] md:text-4xl">{article.title}</h2>
                <p className="mt-4 max-w-xl leading-7 text-[#69766f]">{article.summary}</p>
                <span className="mt-7 inline-flex items-center gap-2 font-bold text-[#78400b]">Prečítať článok <span aria-hidden="true">→</span></span>
              </div>
            </Link>
          ))}
          <div className="flex flex-col justify-between rounded-[1.5rem] bg-[#27332e] p-7 text-[#f7faf4] md:p-9">
            <div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#e2ad68]">Naše skúsenosti</p><h2 className="mt-5 font-[var(--font-sora)] text-3xl font-semibold leading-tight">Sťahovanie je v detailoch.</h2><p className="mt-5 leading-7 text-[#c8d2ca]">Od schodov po úzke chodby. Poznáme situácie, ktoré sa na internete často nezmestia do jednej vety.</p></div>
            <Link href="/kontakt" className="mt-10 inline-flex w-fit rounded-full bg-[#d79b43] px-6 py-3 font-bold text-[#27332e] transition-transform hover:-translate-y-0.5">Poradiť sa s nami</Link>
          </div>
        </div>
      </section>
    </main>
  );
}