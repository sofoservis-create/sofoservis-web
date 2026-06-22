"use client";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/cookies/CookieConsent";
import WhatsAppWidget from "@/components/widgets/WhatsAppWidget";
import UTMCapture from "@/components/tracking/UTMCapture";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isBrand = pathname.startsWith("/brand");

  if (isBrand) {
    return <>{children}</>;
  }

  return (
    <>
      <Suspense fallback={null}>
        <UTMCapture />
      </Suspense>
      <div id="root" className="min-h-screen flex flex-col">
        <Navbar />
        <WhatsAppWidget />
        <div className="flex-1">{children}</div>
        <Footer />
        <CookieConsent />
      </div>
    </>
  );
}
