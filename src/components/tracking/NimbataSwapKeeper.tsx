"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  isNimbataExcludedPath,
  NIMBATA_TARGET_NUMBER,
  findNimbataSwappedNumber,
} from "@/lib/nimbataExclusions";

const RAW_DIGITS = NIMBATA_TARGET_NUMBER.replace(/\s+/g, ""); // "0951735130"
const RAW_DIGITS_INTL = "+421" + RAW_DIGITS.slice(1); // "+421951735130"

/**
 * Re-applies the Nimbata-swapped tracking number after client-side navigation.
 *
 * Nimbata's DNI script swaps phone numbers only ONCE per full page load.
 * Any span re-rendered by SPA navigation (navbar, footer, contact section)
 * reverts to the raw number and is never re-swapped. The persistent
 * sticky-bar span keeps the swapped value, so we read it from there and
 * copy it back into every reverted display span and raw tel: link.
 *
 * Also fixes tel: links whose visible text contains no number (e.g. the
 * hero "Zavolajte nám" CTA) — Nimbata matches text nodes only, so it never
 * touches those anchors even on a full page load.
 *
 * DOM-safety notes:
 * - Text is changed by mutating existing text nodes' nodeValue, so React's
 *   node references stay valid (no removeChild crashes).
 * - Spans already holding a genuine swap (contain / sit inside an
 *   <a data-nimbata>) are left alone.
 * - Excluded campaign pages are skipped entirely — they keep 0952 044 363
 *   and their own data-correct restore logic.
 */
export default function NimbataSwapKeeper() {
  const pathname = usePathname();

  useEffect(() => {
    if (isNimbataExcludedPath(pathname)) return;
    let cancelled = false;

    const apply = () => {
      if (cancelled) return;
      const swapped = findNimbataSwappedNumber();
      if (!swapped || swapped === NIMBATA_TARGET_NUMBER) return;
      const swappedHref = "tel:" + swapped.replace(/[\s\u00A0]/g, "");

      // 1) Reverted display spans → swapped number (text-node mutation only)
      document
        .querySelectorAll<HTMLElement>(".nimbata_number_1")
        .forEach((span) => {
          if (
            span.querySelector("a[data-nimbata]") ||
            span.closest("a[data-nimbata]")
          ) {
            return; // genuine swap already present
          }
          if (span.textContent?.trim() !== NIMBATA_TARGET_NUMBER) return;
          const walker = document.createTreeWalker(
            span,
            NodeFilter.SHOW_TEXT,
          );
          let node: Node | null;
          while ((node = walker.nextNode())) {
            if (node.nodeValue && node.nodeValue.includes(NIMBATA_TARGET_NUMBER)) {
              node.nodeValue = node.nodeValue.replace(
                NIMBATA_TARGET_NUMBER,
                swapped,
              );
            }
          }
          // Keep the surrounding tel: anchor (if any) in sync
          const anchor = span.closest<HTMLAnchorElement>('a[href^="tel:"]');
          if (anchor) anchor.setAttribute("href", swappedHref);
        });

      // 2) Raw tel: links without a visible number (hero CTA etc.)
      document
        .querySelectorAll<HTMLAnchorElement>('a[href^="tel:"]')
        .forEach((a) => {
          if (a.dataset.nimbata) return; // Nimbata's own anchor
          const digits = (a.getAttribute("href") || "")
            .slice(4)
            .replace(/[^\d+]/g, "");
          if (digits === RAW_DIGITS || digits === RAW_DIGITS_INTL) {
            a.setAttribute("href", swappedHref);
          }
        });
    };

    // Retry a few times: the swap lands ~1-2s after a full load, and some
    // sections mount late. All passes are idempotent no-ops once applied.
    const timers = [0, 300, 1000, 3000].map((ms) =>
      window.setTimeout(apply, ms),
    );
    return () => {
      cancelled = true;
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [pathname]);

  return null;
}
