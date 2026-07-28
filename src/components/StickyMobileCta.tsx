"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BUSINESS } from "@/lib/business";

/** Keys that express scroll intent. Arming on any keydown would let an
 *  unrelated key press (Tab, typing) reveal the bar at a restored offset. */
const SCROLL_INTENT_KEYS = new Set([
  "ArrowDown",
  "ArrowUp",
  "PageDown",
  "PageUp",
  "Home",
  "End",
  " ",
  "Spacebar",
]);

export default function StickyMobileCta() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // The bar must be hidden on page load, then appear only once the visitor has
    // actually scrolled past 600px. We cannot simply check window.scrollY on mount:
    // browsers restore the previous scroll offset on refresh (history.scrollRestoration
    // is "auto"), so reloading deep in the page would land at scrollY > 600 and show
    // the bar immediately. Scroll restoration also emits a synthetic scroll event, so
    // the scroll listener alone is not enough to tell it apart from a real scroll.
    //
    // Instead we arm on the first genuine user-input event. wheel/touchmove/keydown are
    // never produced by scroll restoration, so until one fires the bar stays hidden.
    let armed = false;

    const update = () => setVisible(window.scrollY > 600);

    const onScroll = () => {
      if (armed) update();
    };

    const arm = () => {
      if (armed) return;
      armed = true;
      update();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (SCROLL_INTENT_KEYS.has(e.key)) arm();
    };

    // A page restored from the back/forward cache resumes with its old React
    // state — the bar would reappear already visible without any scroll. Treat
    // a bfcache restore exactly like a fresh load: hide and disarm.
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        armed = false;
        setVisible(false);
      }
    };

    // Every (re)mount starts hidden, no matter what state was preserved.
    // (Also covers dev Fast Refresh, which re-runs this effect while keeping
    // the previous `visible` state.)
    setVisible(false);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", arm, { passive: true });
    window.addEventListener("touchmove", arm, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pageshow", onPageShow);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", arm);
      window.removeEventListener("touchmove", arm);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pageshow", onPageShow);
    };
    // Re-running on pathname change disarms and hides the bar at every
    // client-side navigation, so a programmatic scroll restore on the new
    // route cannot reveal it without a fresh user gesture.
  }, [pathname]);

  return (
    <div
      aria-hidden={!visible}
      // `inert` removes the off-screen bar's Link/button from the tab order —
      // without it they stay keyboard-focusable while visually hidden.
      inert={!visible}
      className={`lg:hidden fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full pointer-events-none"
      }`}
    >
      <div
        className="flex items-center gap-3 border-t border-gray-200 px-4 py-2.5"
        style={{
          backgroundColor: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          boxShadow: "0 -4px 16px rgba(0,0,0,0.08)",
          paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))",
        }}
      >
        {/* Primary CTA — solid accent, arrow icon */}
        <Link
          href="/kontakt"
          className="flex-1 basis-0 min-w-0 flex items-center justify-center gap-2 min-h-[48px] py-3 px-2 min-[360px]:px-4 rounded-xl whitespace-nowrap bg-accent-500 transition-opacity hover:opacity-90 text-[18px] font-bold text-[#000000]"
        >
          Cenová ponuka
          {/* Stroke arrow (2.5), same style as the header CTA.
              Hidden below 390px — with the 18px label there is no room for it
              on narrower screens and it would overflow the button. */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 flex-shrink-0 hidden min-[390px]:block"
            aria-hidden="true"
          >
            <path d="M5 12h14m-7-7l7 7-7 7"></path>
          </svg>
        </Link>

        {/* Secondary CTA — white, 2px accent border, phone icon.
            Must be a <button>, not <a href="tel:">: Nimbata DNI clones every
            tel: anchor on the page, which detaches React's node and breaks
            hydration. <button> is never targeted by Nimbata. */}
        <button
          type="button"
          aria-label={`Zavolať ${BUSINESS.phone}`}
          onClick={() => {
            window.location.href = `tel:${BUSINESS.phone}`;
          }}
          className="flex-1 basis-0 min-w-0 flex items-center justify-center gap-2 min-h-[48px] py-3 px-2 min-[360px]:px-4 rounded-xl whitespace-nowrap bg-white ring-2 ring-inset ring-accent-500 text-primary-900 transition-colors hover:bg-accent-50 text-[18px] font-bold"
        >
          {/* Same outline phone icon as the mobile header (Navbar), accent colour */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-accent-500 flex-shrink-0"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          Zavolať
        </button>
      </div>
    </div>
  );
}
