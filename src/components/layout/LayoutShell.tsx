"use client";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/cookies/CookieConsent";
import WhatsAppWidget from "@/components/widgets/WhatsAppWidget";
import StickyMobileCta from "@/components/StickyMobileCta";
import UTMCapture from "@/components/tracking/UTMCapture";
import NimbataSwapKeeper from "@/components/tracking/NimbataSwapKeeper";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

const STANDALONE_BREADCRUMB_PATHS = new Set([
  "/kontakt",
  "/en/contact",
  "/zasady-pouzivania-cookies",
  "/en/cookie-policy",
  "/zasady-spracovania-osobnych-udajov",
  "/en/privacy-policy",
  "/vseobecne-obchodne-podmienky",
  "/en/terms-of-service",
]);

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isBrand = pathname.startsWith("/brand");
  const isStandaloneBreadcrumbPage = STANDALONE_BREADCRUMB_PATHS.has(pathname);

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
        <div className="flex-1">
          {isStandaloneBreadcrumbPage && <Breadcrumbs />}
          {children}
        </div>
        <Footer />
        <CookieConsent />
      </div>
      <StickyMobileCta />
      <NimbataSwapKeeper />
    </>
  );
}
