"use client";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { isNimbataExcludedPath } from "@/lib/nimbataExclusions";

export default function NimbataScript() {
  const pathname = usePathname();

  // The DNI script rewrites React-owned phone-number DOM nodes. Keep it out of
  // the development preview, where Fast Refresh can otherwise race those
  // mutations and trigger invalid-hook/hydration runtime errors.
  if (process.env.NODE_ENV !== "production" || isNimbataExcludedPath(pathname)) {
    return null;
  }

  return (
    <Script
      src="https://cdn.dni.nimbata.com/895390109815.min.js"
      strategy="lazyOnload"
      onLoad={() => {
        setTimeout(() => {
          if (typeof window.__nimbataReveal === "function") {
            window.__nimbataReveal();
          }
        }, 300);
      }}
    />
  );
}
