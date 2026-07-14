"use client";
import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const EXCLUDED_PATHS = [
  "/hodinovy-manzel-majster",
  "/montaz-nabytku",
  "/montaz-kuchyne",
];

const MONTAZ_TEL = "tel:0952044363";

export default function NimbataScript() {
  const pathname = usePathname();

  const isExcluded = EXCLUDED_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );

  useEffect(() => {
    if (!isExcluded) return;

    const win = window as any;

    // Make __nimbataReveal a no-op so Nimbata cannot run swaps on this page
    const originalReveal = win.__nimbataReveal;
    win.__nimbataReveal = () => {};

    const cleanup = () => {
      // 1. Remove class + opacity from any tagged spans
      document.querySelectorAll(".nimbata_number_1").forEach((el) => {
        el.classList.remove("nimbata_number_1");
        (el as HTMLElement).style.removeProperty("opacity");
      });

      // 2. Restore correct href on any phone <a> links that Nimbata may have swapped
      document.querySelectorAll<HTMLAnchorElement>('a[href^="tel:"]').forEach((a) => {
        if (a.href !== MONTAZ_TEL && a.href.startsWith("tel:+421800")) {
          a.href = MONTAZ_TEL;
        }
      });
    };

    cleanup();
    const t1 = setTimeout(cleanup, 150);
    const t2 = setTimeout(cleanup, 600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      if (typeof originalReveal === "function") {
        win.__nimbataReveal = originalReveal;
      } else {
        delete win.__nimbataReveal;
      }
    };
  }, [isExcluded, pathname]);

  if (isExcluded) return null;

  return (
    <Script
      src="https://cdn.dni.nimbata.com/895390109815.min.js"
      strategy="afterInteractive"
    />
  );
}
