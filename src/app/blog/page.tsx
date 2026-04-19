import Link from "next/link";
import { Metadata } from "next";
import { blogPosts } from "@/lib/blog";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Blog — Tipy a rady od profesionálov | Sofo Servis",
  description:
    "Čítajte naše odborné články o sťahovaní, vypratávaní, montáži nábytku a ďalších službách. Praktické tipy, ceny a checklisty pre rok 2026.",
  alternates: {
    canonical: "https://www.sofoservis.sk/blog",
    languages: {
      sk: "https://www.sofoservis.sk/blog",
      "x-default": "https://www.sofoservis.sk/blog",
    },
  },
  openGraph: {
    title: "Blog — Tipy a rady od profesionálov | Sofo Servis",
    description:
      "Čítajte naše odborné články o sťahovaní, vypratávaní, montáži nábytku a ďalších službách. Praktické tipy, ceny a checklisty pre rok 2026.",
    url: "https://www.sofoservis.sk/blog",
    siteName: "Sofo Servis",
    locale: "sk_SK",
    type: "website",
  },
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("sk-SK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <div
        className="relative w-full bg-primary-900 pt-6 pb-6 desktop:pt-[168px] desktop:pb-12"
        style={{
          backgroundImage: "url('/images/sofoservis-zamestnanci-hero.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 z-0 bg-gradient-to-r from-primary-900/80 to-primary-900/70"
          aria-hidden="true"
        />
        <Container>
          <div className="relative z-10 max-w-5xl space-y-6 text-left">
            <div className="animate-in">
              <p className="text-accent-400 font-semibold text-sm uppercase tracking-wider mb-3">
                Blog
              </p>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Tipy a rady od profesionálov<span className="text-accent-500">.</span>
              </h1>
              <p className="text-xl md:text-3xl font-bold mb-6">
                <span className="text-accent-500">
                  Odborné články, ceny, checklisty a rady — všetko čo potrebujete vedieť pred sťahovaním, vypratávaním alebo montážou v roku 2026.
                </span>
              </p>
            </div>
          </div>
        </Container>
      </div>

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col bg-white rounded-2xl border border-gray-200 hover:border-accent-400 hover:shadow-lg transition-all duration-200 overflow-hidden"
              >
                <div className="p-6 flex flex-col flex-1">
                  <time
                    dateTime={post.publishDate}
                    className="text-xs text-primary-400 font-medium uppercase tracking-wider mb-3"
                  >
                    {formatDate(post.publishDate)}
                  </time>
                  <h2 className="text-lg font-bold text-primary-900 mb-3 leading-snug">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-accent-600 transition-colors duration-150"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-primary-600 text-sm leading-relaxed flex-1">
                    {post.perex}
                  </p>
                  <div className="mt-5">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-accent-600 font-semibold text-sm hover:text-accent-700 transition-colors duration-150"
                    >
                      Čítať článok
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <div className="bg-gray-50 py-14">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
              Potrebujete cenovú ponuku?
            </h2>
            <p className="text-primary-600 mb-6">
              Kontaktujte nás a dostanete bezplatnú cenovú ponuku do 24 hodín.
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-200"
            >
              Kontaktovať nás
            </Link>
          </div>
        </Container>
      </div>
    </main>
  );
}
