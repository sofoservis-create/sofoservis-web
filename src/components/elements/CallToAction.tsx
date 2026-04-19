// src/components/elements/CallToAction.tsx
"use client";

import React, { MouseEvent, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CallToActionProps {
  text?: string;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function CallToAction({
  text = "Získať nezáväznú cenovú ponuku",
  href = "/kontakt",
  variant = "primary",
  className = "",
}: CallToActionProps) {
  const pathname = usePathname();

  const shouldScrollToTop = useMemo(() => {
    if (!pathname) return false;
    const bases = [
      "/montaz-nabytku",
      "/montaz-kuchyne",
      "/hodinovy-manzel-majster",
    ];
    return bases.some((base) => pathname.startsWith(base));
  }, [pathname]);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (shouldScrollToTop) {
      event.preventDefault();
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <div className={`flex justify-center ${className}`}>
      <Link
        href={shouldScrollToTop ? "#" : href}
        onClick={handleClick}
        className={`inline-flex items-center justify-center px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1  text-base sm:text-lg w-full sm:w-auto max-w-[280px] sm:max-w-none mx-auto ${
          variant === "primary"
            ? "bg-accent-500 hover:bg-accent-600 text-primary-900"
            : "bg-white border-2 border-accent-500 text-primary-900 hover:bg-accent-50"
        }`}
      >
        <span className="text-center hidden sm:inline">{text}</span>
        <span className="text-center sm:hidden">{text}</span>
        <svg
          className="w-5 h-5 ml-2 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14m-7-7l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
  );
}
