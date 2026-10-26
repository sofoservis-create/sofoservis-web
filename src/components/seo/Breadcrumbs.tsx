"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

function toPathname(url: string): string {
  try {
    return new URL(url).pathname || "/";
  } catch {
    return url;
  }
}

interface BreadcrumbsProps {
  variant?: "standalone" | "hero";
  /** Farba textu podľa pozadia: "dark" pre tmavé foto-hero, "light" pre svetlé (blog, právne stránky). */
  tone?: "dark" | "light";
}

const HERO_BREADCRUMB_PATHS = new Set([
  "/kontakt",
  "/en/contact",
  "/blog",
  "/cennik",
]);

const TONES = {
  dark: {
    list: "text-white/70",
    link: "hover:text-accent-500 focus-visible:ring-accent-500 focus-visible:ring-offset-primary-900",
    current: "text-white",
  },
  light: {
    list: "text-primary-600",
    link: "hover:text-primary-900 hover:underline underline-offset-4 focus-visible:ring-primary-900",
    current: "text-primary-900",
  },
};

export default function Breadcrumbs({ variant = "standalone", tone }: BreadcrumbsProps) {
  const pathname = usePathname();

  if (!pathname || pathname === "/" || pathname === "/en") {
    return null;
  }

  const hasHeroBreadcrumb =
    HERO_BREADCRUMB_PATHS.has(pathname) || pathname.startsWith("/blog/");

  if (variant === "standalone" && hasHeroBreadcrumb) {
    return null;
  }

  const items = generateBreadcrumbs(pathname);

  const isHero = variant === "hero";
  const colors = TONES[tone ?? (isHero ? "dark" : "light")];

  // Rovnaký vzhľad ako na JumboClean: obyčajný text s lomítkami, ktorý sa na úzkom mobile zalomí.
  // Položky sú inline, takže zarovnanie (na stred / vľavo) preberajú od rodiča a dlhý názov sa zalomí ako bežný text.
  // py-2.5 na odkazoch zväčšuje plochu na ťuknutie na 44 px bez zmeny výšky riadku.
  return (
    <nav
      aria-label={pathname.startsWith("/en") ? "Breadcrumb" : "Navigačná cesta"}
      className={
        isHero
          ? "relative z-30"
          : "relative z-10 bg-white desktop:absolute desktop:inset-x-0 desktop:top-[120px]"
      }
    >
      <div className={isHero ? "min-w-0" : "container mx-auto max-w-7xl px-4 py-0.5 desktop:px-8"}>
        <ol className={`py-2.5 text-sm leading-6 ${colors.list}`}>
          {items.map((item, index) => {
            const isCurrent = index === items.length - 1;
            const itemPath = toPathname(item.item);

            return (
              <li key={`${item.item}-${item.position}`} className="inline">
                {index > 0 && <span aria-hidden="true" className="mx-1.5">/</span>}
                {isCurrent ? (
                  <span aria-current="page" className={colors.current}>
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={itemPath}
                    className={`rounded-sm py-2.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${colors.link}`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
