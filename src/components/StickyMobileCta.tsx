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
      className={`lg:hidden fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex bg-white border-t border-gray-200 shadow-lg">
        <Link
          href="/kontakt"
          className="flex-1 flex items-center justify-center py-4 text-sm font-semibold text-white bg-[#EFAB07] hover:bg-[#d99a06] transition-colors"
        >
          Cenová ponuka
        </Link>
        <a
          href={`tel:${BUSINESS.phone}`}
          className="flex-1 flex items-center justify-center py-4 text-sm font-semibold text-[#EFAB07] border-l border-gray-200 hover:bg-gray-50 transition-colors"
        >
          Zavolať
        </a>
      </div>
    </div>
  );
}
