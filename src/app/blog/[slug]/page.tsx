import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getBlogPost, getAllSlugs, BlogSection, InlineNode } from "@/lib/blog";
import Container from "@/components/ui/Container";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import BlogPostingJsonLd from "@/components/seo/BlogPostingJsonLd";
import RelatedServices from "@/components/sections/RelatedServices";
import ContactFormSection from "@/components/sections/ContactFormSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Sofo Servis`,
    description: post.description,
    alternates: {
      canonical: `https://www.sofoservis.sk/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Sofo Servis`,
      description: post.description,
      url: `https://www.sofoservis.sk/blog/${post.slug}`,
      siteName: "Sofo Servis",
      locale: "sk_SK",
      type: "article",
      publishedTime: post.publishDate,
    },
  };
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("sk-SK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function RenderInlineNode({ node }: { node: InlineNode }) {
  if (node.type === "link" && node.href) {
    return (
      <Link
        href={node.href}
        className="text-accent-600 underline underline-offset-2 hover:text-accent-700 transition-colors"
      >
        {node.text}
      </Link>
    );
  }
  return <>{node.text}</>;
}

function RenderSection({ section }: { section: BlogSection }) {
  switch (section.type) {
    case "h2":
      return (
        <h2 className="text-2xl font-bold text-primary-900 mt-10 mb-4">
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="text-xl font-semibold text-primary-800 mt-6 mb-3">
          {section.text}
        </h3>
      );
    case "p":
      return (
        <p className="text-primary-700 leading-relaxed mb-4">{section.text}</p>
      );
    case "rich-p":
      return (
        <p className="text-primary-700 leading-relaxed mb-4">
          {section.nodes?.map((node, i) => (
            <RenderInlineNode key={i} node={node} />
          ))}
        </p>
      );
    case "ul":
      return (
        <ul className="list-disc list-inside space-y-2 mb-4 text-primary-700">
          {section.items?.map((item, i) => (
            <li key={i} className="leading-relaxed pl-1">
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-decimal list-inside space-y-2 mb-4 text-primary-700">
          {section.items?.map((item, i) => (
            <li key={i} className="leading-relaxed pl-1">
              {item}
            </li>
          ))}
        </ol>
      );
    default:
      return null;
  }
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="bg-white">
      <BlogPostingJsonLd
        title={post.title}
        description={post.description}
        publishDate={post.publishDate}
        slug={post.slug}
      />
      {post.faqItems.length > 0 && <FAQJsonLd items={post.faqItems} />}

      <div
        className="relative w-full bg-primary-900 pt-6 pb-6 desktop:pt-[168px] desktop:pb-12"
        style={{
          backgroundImage: "url('/images/sofoservis zamestnanci.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 z-0 bg-gradient-to-r from-primary-900/80 to-primary-900/70"
          aria-hidden="true"
        />
        <Container>
          <div className="relative z-10 max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-primary-300 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Domov
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-primary-400 truncate max-w-xs">{post.title}</span>
            </nav>
            <time
              dateTime={post.publishDate}
              className="text-accent-400 text-sm font-medium uppercase tracking-wider"
            >
              {formatDate(post.publishDate)}
            </time>
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-5 leading-tight">
              {post.title}<span className="text-accent-500">.</span>
            </h1>
            <p className="text-primary-200 text-lg leading-relaxed">{post.perex}</p>
          </div>
        </Container>
      </div>

      <article className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            {post.content.map((section, i) => (
              <RenderSection key={i} section={section} />
            ))}
          </div>
        </Container>
      </article>

      {post.faqItems.length > 0 && (
        <section className="bg-gray-50 py-12 md:py-16 border-t border-gray-100">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-8">
                Často kladené otázky
              </h2>
              <div className="space-y-5">
                {post.faqItems.map((faq, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl border border-gray-200 p-6"
                  >
                    <h3 className="font-semibold text-primary-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-primary-600 leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {otherPosts.length > 0 && (
        <section className="py-12 md:py-16 border-t border-gray-100">
          <Container>
            <h2 className="text-2xl font-bold text-primary-900 mb-8">
              Ďalšie články
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherPosts.map((p) => (
                <article
                  key={p.slug}
                  className="flex flex-col bg-white rounded-xl border border-gray-200 hover:border-accent-400 hover:shadow-md transition-all duration-200 p-5"
                >
                  <time
                    dateTime={p.publishDate}
                    className="text-xs text-primary-400 font-medium uppercase tracking-wider mb-2"
                  >
                    {formatDate(p.publishDate)}
                  </time>
                  <h3 className="font-bold text-primary-900 text-sm leading-snug mb-3">
                    <Link
                      href={`/blog/${p.slug}`}
                      className="hover:text-accent-600 transition-colors"
                    >
                      {p.title}
                    </Link>
                  </h3>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="text-accent-600 font-semibold text-xs hover:text-accent-700 mt-auto"
                  >
                    Čítať →
                  </Link>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      <RelatedServices
        title="Súvisiace služby"
        services={post.relatedServices}
      />

      <ContactFormSection lang="sk" />
    </main>
  );
}
