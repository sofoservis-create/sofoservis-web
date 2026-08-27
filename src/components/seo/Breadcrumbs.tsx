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
      aria-label={pathname.startsWith("/en") ? "Breadcrumb" : "Drobečková navigácia"}
      className={
        isHero
          ? "-mx-4 w-[calc(100%+2rem)] min-w-0 border-b border-gray-100 bg-white sm:-mx-6 sm:w-[calc(100%+3rem)] lg:relative lg:mx-0 lg:w-full lg:border-0 lg:bg-transparent"
          : "relative z-10 border-b border-gray-100 bg-white/95 backdrop-blur-sm desktop:absolute desktop:inset-x-0 desktop:top-[120px]"
      }
    >
      <div
        className={
          isHero
            ? "w-full min-w-0 px-4 py-3 sm:px-6 lg:px-0 lg:py-0"
            : "container mx-auto max-w-7xl px-4 py-3 desktop:px-8"
        }
      >
        <ol
          className={
            isHero
              ? "flex min-w-0 items-center gap-2 overflow-x-auto whitespace-nowrap text-xs font-semibold text-primary-500 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:w-fit lg:max-w-full lg:rounded-full lg:bg-white lg:px-3.5 lg:py-2 lg:text-[13px] lg:font-medium lg:text-primary-600 lg:shadow-[0_2px_10px_rgba(0,0,0,0.18)] lg:ring-1 lg:ring-black/5"
              : "flex min-w-0 items-center gap-2 overflow-x-auto whitespace-nowrap text-xs text-primary-600 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          }
        >
          {items.map((item, index) => {
            const isCurrent = index === items.length - 1;
            const itemPath = toPathname(item.item);

            return (
              <li
                key={`${item.item}-${item.position}`}
                className={
                  isCurrent
                    ? "flex min-w-0 shrink items-center gap-2"
                    : "flex shrink-0 items-center gap-2"
                }
              >
                {index > 0 && (
                  <svg
                    aria-hidden="true"
                    className={
                      isHero
                        ? "h-3.5 w-3.5 shrink-0 text-primary-300 lg:text-primary-400"
                        : "h-3 w-3 shrink-0 text-gray-400"
                    }
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
                  </svg>
                )}
                {isCurrent ? (
                  <span
                    aria-current="page"
                    className={
                      isHero
                        ? "min-w-[6rem] truncate font-semibold text-primary-900"
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
                        ? "-mx-0.5 shrink-0 rounded-sm px-0.5 py-1 text-primary-500 underline-offset-2 transition-colors hover:text-primary-900 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white lg:text-primary-600"
                        : "shrink-0 rounded-sm transition-colors hover:text-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
                    }
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