"use client";
import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const EXCLUDED_PATHS = [
  "/hodinovy-manzel-majster",
  "/montaz-nabytku",
  "/montaz-kuchyne",
];

const MONTAZ_TEL_RAW = "0952044363";
const MONTAZ_TEL = `tel:${MONTAZ_TEL_RAW}`;

export default function NimbataScript() {
  const pathname = usePathname();

  const isExcluded = EXCLUDED_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );

  useEffect(() => {
    if (!isExcluded) return;

    const win = window as Window & { __nimbataReveal?: () => void };

    // Block __nimbataReveal so Nimbata cannot swap numbers on this page
    const originalReveal = win.__nimbataReveal;
    win.__nimbataReveal = () => {};

    // Restore all phone links and spans touched by Nimbata
    const restorePhoneElements = () => {
      // Remove hidden class from any remaining nimbata spans and restore opacity
      document.querySelectorAll(".nimbata_number_1").forEach((el) => {
        el.classList.remove("nimbata_number_1");
        (el as HTMLElement).style.removeProperty("opacity");
      });

      // Fix any tel: links whose href or text Nimbata may have swapped
      document.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((a) => {
        const href = a.getAttribute("href") ?? "";
        if (!href.startsWith("tel:")) return;

        // Restore opacity on the link and its children (Nimbata may have hidden them)
        (a as HTMLElement).style.removeProperty("opacity");
        a.querySelectorAll<HTMLElement>("span").forEach((s) => {
          s.style.removeProperty("opacity");
        });

        // If Nimbata replaced the href with its tracking number, restore it
        if (href !== MONTAZ_TEL && /tel:.*800/.test(href)) {
          a.setAttribute("href", MONTAZ_TEL);
        }
      });
    };

    restorePhoneElements();

    // MutationObserver: watch for any DOM changes Nimbata makes after React renders
    const observer = new MutationObserver(() => {
      restorePhoneElements();
    });

    observer.observe(document.body, {
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "style", "href"],
      characterData: true,
    });

    // Extra safety timeouts in case observer misses something
    const t1 = setTimeout(restorePhoneElements, 200);
    const t2 = setTimeout(restorePhoneElements, 800);

    return () => {
      observer.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      if (typeof originalReveal === "function") {
        win.__nimbataReveal = originalReveal;
      } else {
        win.__nimbataReveal = undefined;
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
