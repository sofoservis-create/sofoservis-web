"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export default function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`lg:hidden fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full pointer-events-none"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {/* White pill strip — floats above transparent outer */}
      <div className="mx-4 mb-3 flex items-center gap-2 bg-white rounded-full shadow-lg px-2 py-2">
        {/* Primary CTA — yellow fill */}
        <Link
          href="/kontakt"
          className="flex-1 flex items-center justify-center gap-1.5 min-h-[48px] py-3 px-4 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#EFAB07" }}
        >
          Cenová ponuka
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 flex-shrink-0">
            <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
          </svg>
        </Link>

        {/* Secondary CTA — white bg, yellow border */}
        <a
          href={`tel:${BUSINESS.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 min-h-[48px] py-3 px-4 rounded-full text-sm font-semibold bg-white border-2 transition-colors hover:bg-yellow-50"
          style={{ borderColor: "#EFAB07", color: "#EFAB07" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
          </svg>
          Zavolať
        </a>
      </div>
    </div>
  );
}
