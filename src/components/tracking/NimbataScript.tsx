"use client";
import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const EXCLUDED_PATHS = [
  "/hodinovy-manzel-majster",
  "/montaz-nabytku",
  "/montaz-kuchyne",
];

export default function NimbataScript() {
  const pathname = usePathname();

  const isExcluded = EXCLUDED_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );

  useEffect(() => {
    if (!isExcluded) return;

    const win = window as any;

    // Override __nimbataReveal so it cannot re-run swaps on this page
    const originalReveal = win.__nimbataReveal;
    win.__nimbataReveal = () => {};

    // Remove class + restore opacity on any elements Nimbata may have tagged
    const cleanup = () => {
      document.querySelectorAll(".nimbata_number_1").forEach((el) => {
        el.classList.remove("nimbata_number_1");
        (el as HTMLElement).style.removeProperty("opacity");
      });
    };

    cleanup();
    const t1 = setTimeout(cleanup, 150);
    const t2 = setTimeout(cleanup, 600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      // Restore original function when leaving excluded path
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
      onLoad={() => {
        setTimeout(() => {
          if (typeof (window as any).__nimbataReveal === "function") {
            (window as any).__nimbataReveal();
          }
        }, 300);
      }}
    />
  );
}
