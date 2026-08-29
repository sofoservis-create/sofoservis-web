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
}

export default function Breadcrumbs({ variant = "standalone" }: BreadcrumbsProps) {
  const pathname = usePathname();

  if (!pathname || pathname === "/" || pathname === "/en") {
    return null;
  }

  const items = generateBreadcrumbs(pathname);

  const isHero = variant === "hero";

  return (
    <nav
      aria-label={pathname.startsWith("/en") ? "Breadcrumb" : "Navigačná cesta"}
      className={
        isHero
          ? "border-b border-gray-100 bg-white lg:relative lg:z-30 lg:border-0 lg:bg-transparent"
          : "relative z-10 border-b border-gray-100 bg-white/95 backdrop-blur-sm desktop:absolute desktop:inset-x-0 desktop:top-[120px]"
      }
    >
      <div
        className={
          isHero
              ? "container mx-auto max-w-7xl px-4 py-3 lg:px-0 lg:py-1"
            : "container mx-auto max-w-7xl px-4 py-3 desktop:px-8"
        }
      >
        <ol
          className={
            isHero
              ? "flex min-w-0 items-center gap-2 overflow-x-auto whitespace-nowrap text-xs font-semibold text-gray-500 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:w-fit lg:max-w-full lg:rounded-full lg:bg-white/90 lg:px-3 lg:py-2 lg:shadow-sm lg:ring-1 lg:ring-black/5 lg:backdrop-blur-sm"
              : "flex min-w-0 items-center gap-2 overflow-x-auto whitespace-nowrap text-xs text-primary-600 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          }
        >
          {items.map((item, index) => {
            const isCurrent = index === items.length - 1;
            const itemPath = toPathname(item.item);

            return (
              <li
                key={`${item.item}-${item.position}`}
                className="flex min-w-0 shrink-0 items-center gap-2"
              >
                {isCurrent ? (
                  <span
                    aria-current="page"
                    className={
                      isHero
                        ? "max-w-[18rem] truncate text-primary-900"
                        : "max-w-[16rem] truncate font-semibold text-primary-900"
                    }
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={itemPath}
                    className={
                      isHero
                          ? "shrink-0 rounded-sm transition-colors hover:text-accent-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
                        : "shrink-0 rounded-sm transition-colors hover:text-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
                    }
                  >
                    {item.name}
                  </Link>
                )}
                {!isCurrent && (
                  <svg
                    aria-hidden="true"
                    className={
                      isHero
                        ? "h-3.5 w-3.5 shrink-0 text-gray-300"
                        : "h-3 w-3 shrink-0 text-gray-400"
                    }
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={isHero ? 2.5 : 2}
                  >
                    <path d="m9 5 7 7-7 7" />
                  </svg>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}