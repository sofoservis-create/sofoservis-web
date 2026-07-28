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
          className="flex-1 flex items-center justify-center gap-1.5 min-h-[48px] py-3 px-4 rounded-xl text-sm font-bold whitespace-nowrap bg-accent-500 text-primary-900 transition-opacity hover:opacity-90"
        >
          Cenová ponuka
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 flex-shrink-0">
            <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
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
          className="flex-none flex items-center justify-center gap-1.5 min-h-[48px] py-3 px-4 rounded-xl text-sm font-bold whitespace-nowrap bg-white border-2 border-accent-500 text-primary-900 transition-colors hover:bg-accent-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
          </svg>
          Zavolať
        </button>
      </div>
    </div>
  );
}
