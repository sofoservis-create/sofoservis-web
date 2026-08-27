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

export default function Breadcrumbs() {
  const pathname = usePathname();

  if (!pathname || pathname === "/" || pathname === "/en") {
    return null;
  }

  const items = generateBreadcrumbs(pathname);

  return (
    <nav
      aria-label={pathname.startsWith("/en") ? "Breadcrumb" : "Drobečková navigácia"}
      className="relative z-10 border-b border-gray-100 bg-white/95 backdrop-blur-sm desktop:absolute desktop:inset-x-0 desktop:top-[120px]"
    >
      <div className="container mx-auto max-w-7xl px-4 py-3 desktop:px-8">
        <ol className="flex min-w-0 items-center gap-2 overflow-x-auto whitespace-nowrap text-xs text-primary-600 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item, index) => {
            const isCurrent = index === items.length - 1;
            const itemPath = toPathname(item.item);

            return (
              <li key={`${item.item}-${item.position}`} className="flex min-w-0 items-center gap-2">
                {index > 0 && (
                  <svg
                    aria-hidden="true"
                    className="h-3 w-3 shrink-0 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
                  </svg>
                )}
                {isCurrent ? (
                  <span aria-current="page" className="max-w-[16rem] truncate font-semibold text-primary-900">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={itemPath}
                    className="shrink-0 rounded-sm transition-colors hover:text-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
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