"use client";
import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { pushDataLayerEvent } from "@/lib/gtm";
import {
  NavItem,
  navCategoriesSK,
  navCategoriesEN,
} from "./NavItems";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedSubLink, setExpandedSubLink] = useState<string | null>(null);
  const [expandedSubSubLink, setExpandedSubSubLink] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [nimbataPhone, setNimbataPhone] = useState<string | null>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const savedScrollY = useRef<number | null>(null);
  const navLocked = useRef(false);
  const router = useRouter();

  // Get current pathname to determine language
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en") || false;

  const shouldScrollToTop = useMemo(() => {
    if (!pathname) return false;
    const bases = [
      "/montaz-nabytku",
      "/montaz-kuchyne",
      "/hodinovy-manzel-majster",
      "/en/furniture-assembly",
      "/en/kitchen-installation",
      "/en/handyman-services",
    ];
    return bases.some((base) => pathname.startsWith(base));
  }, [pathname]);

  useEffect(() => {
    if (!shouldScrollToTop) return;

    const restore = () => {
      document.querySelectorAll<HTMLSpanElement>("span[data-correct]").forEach((span) => {
        const correct = span.dataset.correct ?? "";
        if (!correct) return;
        if (span.textContent !== correct) {
          span.textContent = correct;
        }
        const anchor = span.closest("a");
        if (anchor) {
          const telHref = `tel:${correct.replace(/\s/g, "")}`;
          if (anchor.getAttribute("href") !== telHref) {
            anchor.setAttribute("href", telHref);
          }
          const label = anchor.getAttribute("aria-label");
          if (label && !label.includes(correct)) {
            anchor.setAttribute("aria-label", label.replace(/\+?[\d\s]{9,}/, correct));
          }
        }
      });
    };

    restore();

    // Coalesce observer callbacks into one restore per frame: during first
    // load (hydration, GTM injection, Nimbata swaps) the body emits dozens of
    // mutations and running a document-wide querySelectorAll on each one
    // blocks the main thread and makes the nav dropdown stutter.
    let rafId: number | null = null;
    const scheduleRestore = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        restore();
      });
    };

    const observer = new MutationObserver(scheduleRestore);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      observer.disconnect();
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, [pathname, shouldScrollToTop]);

  const routeMap: Record<string, string> = {
    "/": "/en",
    "/en": "/",
    "/stahovanie": "/en/moving",
    "/en/moving": "/stahovanie",
    "/vypratavanie": "/en/junk-removal",
    "/en/junk-removal": "/vypratavanie",
    "/stahovanie/stahovanie-bytov-domov": "/en/apartment-moving",
    "/en/apartment-moving": "/stahovanie/stahovanie-bytov-domov",
    "/stahovanie/stahovanie-kancelarii-firiem": "/en/office-moving",
    "/en/office-moving": "/stahovanie/stahovanie-kancelarii-firiem",
    "/en/furniture-moving-removal": "/stahovanie",
    "/stahovanie/stahovanie-tazkych-bremien": "/en/moving-heavy-loads",
    "/en/moving-heavy-loads": "/stahovanie/stahovanie-tazkych-bremien",
    "/stahovanie/medzinarodne-stahovanie": "/en/international-moving-services",
    "/en/international-moving-services": "/stahovanie/medzinarodne-stahovanie",
    "/vypratavanie/vypratavanie-bytov-domov": "/en/home-junk-removal",
    "/en/home-junk-removal": "/vypratavanie/vypratavanie-bytov-domov",
    "/vypratavanie/vypratavanie-pivnic-a-garazi": "/en/basement-garage-junk-removal",
    "/en/basement-garage-junk-removal": "/vypratavanie/vypratavanie-pivnic-a-garazi",
    "/vypratavanie/cistenie-vypratavanie-pozemkov": "/en/property-land-junk-removal",
    "/en/property-land-junk-removal": "/vypratavanie/cistenie-vypratavanie-pozemkov",
    "/vypratavanie/odvoz-stareho-nabytku": "/en/furniture-removal",
    "/en/furniture-removal": "/vypratavanie/odvoz-stareho-nabytku",
    "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu": "/en/construction-waste-removal",
    "/en/construction-waste-removal": "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu",
    "/vypratavanie/likvidacia-nebezpecneho-odpadu": "/en/hazardous-waste-removal",
    "/en/hazardous-waste-removal": "/vypratavanie/likvidacia-nebezpecneho-odpadu",
    "/buracie-prace": "/en/demolition-services",
    "/buracie-prace/buranie-demolacia-domov": "/en/house-demolition",
    "/buracie-prace/buranie-stien-priecok": "/en/wall-demolition",
    "/en/demolition-services": "/buracie-prace",
    "/en/house-demolition": "/buracie-prace/buranie-demolacia-domov",
    "/en/wall-demolition": "/buracie-prace/buranie-stien-priecok",
    "/montaz-nabytku": "/en/furniture-assembly",
    "/en/furniture-assembly": "/montaz-nabytku",
    "/montaz-kuchyne": "/en/kitchen-installation",
    "/en/kitchen-installation": "/montaz-kuchyne",
    "/hodinovy-manzel-majster": "/en/handyman-services",
    "/en/handyman-services": "/hodinovy-manzel-majster",
    "/kontakt": "/en/contact",
    "/en/contact": "/kontakt",
    "/cennik": "/en/pricing",
    "/en/pricing": "/cennik",
    "/referencie": "/en/reviews",
    "/en/reviews": "/referencie",
    "/zasady-pouzivania-cookies": "/en/cookie-policy",
    "/en/cookie-policy": "/zasady-pouzivania-cookies",
    "/zasady-spracovania-osobnych-udajov": "/en/privacy-policy",
    "/en/privacy-policy": "/zasady-spracovania-osobnych-udajov",
    "/vseobecne-obchodne-podmienky": "/en/terms-of-service",
    "/en/terms-of-service": "/vseobecne-obchodne-podmienky",
    "/stahovanie/stahovanie-bratislava": "/en/moving-bratislava",
    "/en/moving-bratislava": "/stahovanie/stahovanie-bratislava",
    "/stahovanie/stahovanie-trnava": "/en/moving-trnava",
    "/en/moving-trnava": "/stahovanie/stahovanie-trnava",
    "/stahovanie/stahovanie-pezinok": "/en/moving-pezinok",
    "/en/moving-pezinok": "/stahovanie/stahovanie-pezinok",
    "/stahovanie/stahovanie-senica": "/en/moving-senica",
    "/en/moving-senica": "/stahovanie/stahovanie-senica",
    "/stahovanie/stahovanie-nitra": "/en/moving-nitra",
    "/en/moving-nitra": "/stahovanie/stahovanie-nitra",
    "/en/moving-hlohovec": "/stahovanie",
    "/stahovanie/stahovanie-komarno": "/en/moving-komarno",
    "/en/moving-komarno": "/stahovanie/stahovanie-komarno",
    "/en/moving-levice": "/stahovanie",
    "/stahovanie/stahovanie-senec": "/en/moving-senec",
    "/en/moving-senec": "/stahovanie/stahovanie-senec",
    "/stahovanie/stahovanie-piestany": "/en/moving-piestany",
    "/en/moving-piestany": "/stahovanie/stahovanie-piestany",
    "/stahovanie/stahovanie-galanta": "/en/moving-galanta",
    "/en/moving-galanta": "/stahovanie/stahovanie-galanta",
    "/stahovanie/stahovanie-malacky": "/en/moving-malacky",
    "/en/moving-malacky": "/stahovanie/stahovanie-malacky",
    "/stahovanie/stahovanie-samorin": "/en/moving-samorin",
    "/en/moving-samorin": "/stahovanie/stahovanie-samorin",
    "/stahovanie/stahovanie-stupava": "/en/moving-stupava",
    "/en/moving-stupava": "/stahovanie/stahovanie-stupava",
    "/stahovanie/stahovanie-sala": "/en/moving-sala",
    "/en/moving-sala": "/stahovanie/stahovanie-sala",
    "/en/demolition-bratislava": "/buracie-prace",
    "/en/demolition-nitra": "/buracie-prace",
    "/en/demolition-pezinok": "/buracie-prace",
    "/en/demolition-trnava": "/buracie-prace",
    "/hodinovy-manzel-majster/bratislava": "/en/handyman-bratislava",
    "/en/handyman-bratislava": "/hodinovy-manzel-majster/bratislava",
    "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu/bratislava": "/en/construction-waste-removal-bratislava",
    "/en/construction-waste-removal-bratislava": "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu/bratislava",
    "/en/construction-waste-removal-galanta": "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu",
    "/en/construction-waste-removal-hlohovec": "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu",
    "/en/construction-waste-removal-nitra": "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu",
    "/en/construction-waste-removal-senec": "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu",
    "/en/construction-waste-removal-senica": "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu",
    "/en/construction-waste-removal-trnava": "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu",
    "/vypratavanie/vypratavanie-bytov-domov/bratislava": "/en/home-junk-removal-bratislava",
    "/en/home-junk-removal-bratislava": "/vypratavanie/vypratavanie-bytov-domov/bratislava",
    "/en/old-furniture-removal-bratislava": "/vypratavanie/odvoz-stareho-nabytku",
    "/en/basement-junk-removal-bratislava": "/vypratavanie/vypratavanie-pivnic-a-garazi",
    "/montaz-nabytku/bratislava": "/en/furniture-assembly-bratislava",
    "/en/furniture-assembly-bratislava": "/montaz-nabytku/bratislava",
    "/o-nas": "/en/about",
    "/en/about": "/o-nas",
  };

  const getLanguageToggleHref = () => {
    if (!pathname) return isEnglish ? "/" : "/en";
    const mapped = routeMap[pathname];
    if (mapped) return mapped;
    const matchingKey = Object.keys(routeMap).find(
      (key) => key !== "/" && key !== "/en" && pathname.startsWith(key + "/")
    );
    if (matchingKey) return routeMap[matchingKey];
    return isEnglish ? "/" : "/en";
  };

  const handleCtaClick: React.MouseEventHandler<HTMLAnchorElement> = (
    event
  ) => {
    // GTM event pre klik na tlačidlo "Zavolaj" / "Call us" v navbare
    try {
      pushDataLayerEvent("call_click", {
        event_category: "engagement",
        event_label: pathname,
        language: isEnglish ? "en" : "sk",
        location: "navbar_cta",
      });
    } catch {
      // nechceme blokovať klik ani scroll pri chybe trackingu
    }

    if (shouldScrollToTop) {
      event.preventDefault();
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  // Handle scroll for desktop navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (!navLocked.current) {
        setIsScrolled(window.scrollY > 50);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleOutsideClick = (e: MouseEvent) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [mobileMenuOpen]);

  // Restore scroll and unlock navbar after language navigation completes
  useEffect(() => {
    if (savedScrollY.current !== null) {
      const y = savedScrollY.current;
      savedScrollY.current = null;
      window.scrollTo({ top: y, behavior: "instant" });
      setTimeout(() => {
        window.scrollTo({ top: y, behavior: "instant" });
        navLocked.current = false;
        setIsScrolled(window.scrollY > 50);
      }, 100);
    }
  }, [pathname]);

  // Read Nimbata-swapped number from the always-visible desktop span when burger menu opens.
  // Excluded routes (shouldScrollToTop) keep the hardcoded special number.
  useEffect(() => {
    if (!mobileMenuOpen || shouldScrollToTop) {
      setNimbataPhone(null);
      return;
    }
    const span = document.querySelector<HTMLSpanElement>(".nimbata_number_1");
    const num = span?.textContent?.trim() || null;
    setNimbataPhone(num);
  }, [mobileMenuOpen, shouldScrollToTop]);

  // Language switch — locks navbar height and saves scroll before navigating
  const handleLangSwitch = useCallback((href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    savedScrollY.current = window.scrollY;
    navLocked.current = true;
    router.push(href, { scroll: false });
  }, [router]);

  const toggleDropdown = useCallback((name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  }, []);


  // Set the appropriate navigation categories based on language
  const navCategories = isEnglish ? navCategoriesEN : navCategoriesSK;

  // Text content based on language
  const texts = {
    sk: {
      callUs: "Zavolaj",
      showNumber: "Zobraz.",
      phoneNumber:
        pathname?.includes("/montaz-nabytku") ||
        pathname?.includes("/montaz-kuchyne") ||
        pathname?.includes("/hodinovy-manzel-majster")
          ? "0952 044 363"
          : "0951 735 130",
      businessHours: "6 dní v týždni 8:00 - 17:00",
      phoneLabel: "Zavolajte nám",
      menu: "Menu",
      close: "Zavrieť",
      getQuote: "ZÍSKAŤ PONUKU",
    },
    en: {
      callUs: "Call Us",
      showNumber: "Show",
      phoneNumber:
        pathname?.includes("/montaz-nabytku") ||
        pathname?.includes("/montaz-kuchyne") ||
        pathname?.includes("/hodinovy-manzel-majster") ||
        pathname?.includes("/en/furniture-assembly") ||
        pathname?.includes("/en/kitchen-installation") ||
        pathname?.includes("/en/handyman-services")
          ? "0952 044 363"
          : "0951 735 130",
      businessHours: "6 dní v týždni 8:00 - 17:00",
      phoneLabel: "Call us now",
      menu: "Menu",
      close: "Close",
      getQuote: "GET A QUOTE",
    },
  };

  // Get text content for current language
  const t = isEnglish ? texts.en : texts.sk;

  // Track phone call clicks (desktop + mobile)
  const handleCallClick: React.MouseEventHandler<HTMLAnchorElement> = () => {
    try {
      pushDataLayerEvent("call_click", {
        event_category: "engagement",
        event_label: pathname,
        phone_number: t.phoneNumber,
        language: isEnglish ? "en" : "sk",
        location: "navbar",
      });
    } catch {
      // Tracking nesmie rozbiť klik na tel. odkaz
    }
  };
  return (
    <>
      {/* Single unified navbar — one markup for mobile and desktop */}
      <header
        ref={mobileNavRef}
        className={`fixed top-0 left-0 right-0 z-[100] bg-white shadow-md desktop:bg-transparent desktop:shadow-none ${
          isScrolled ? "desktop:py-2" : "desktop:pt-6"
        } transition-all duration-300`}
      >
        <div className="desktop:container desktop:max-w-7xl desktop:mx-auto desktop:px-8">
          <nav
            className="bg-white desktop:rounded-xl desktop:shadow-xl transition-all duration-300"
            aria-label={isEnglish ? "Main navigation" : "Hlavná navigácia"}
          >
            <div className="flex flex-wrap items-center justify-between px-3 desktop:flex-nowrap desktop:h-24 desktop:px-5 desktop:gap-3">
              {/* Logo */}
              <div className="flex-shrink-0 transition-transform duration-300 desktop:hover:scale-105">
                <Link
                  href={isEnglish ? "/en" : "/"}
                  className="inline-block"
                  aria-label={
                    isEnglish
                      ? "SofoServis homepage"
                      : "SofoServis domovská stránka"
                  }
                >
                  <Image
                    src="/images/Sofoservis_nove_logo_SVG.svg"
                    alt="SofoServis"
                    width={199}
                    height={85}
                    className={`w-auto transition-all duration-300 ${
                      isScrolled ? "h-[64px]" : "h-[97px]"
                    } desktop:h-[85px]`}
                    priority
                    unoptimized
                  />
                </Link>
              </div>

              {/* Mobile header buttons */}
              <div className="flex items-center desktop:hidden">
                <button
                  type="button"
                  className="text-primary-900 p-3 mr-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                  aria-label={`${t.phoneLabel}: ${t.phoneNumber}`}
                  onClick={() => {
                    const num = shouldScrollToTop
                      ? t.phoneNumber
                      : (document.querySelector<HTMLSpanElement>(".nimbata_number_1")?.textContent?.trim() || t.phoneNumber);
                    try {
                      pushDataLayerEvent("call_click", {
                        event_category: "engagement",
                        event_label: pathname,
                        phone_number: num,
                        language: isEnglish ? "en" : "sk",
                        location: "navbar_mobile_icon",
                      });
                    } catch {}
                    window.location.href = `tel:${num.replace(/\s/g, "")}`;
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-7 h-7 text-accent-500"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </button>

                <button
                  className="p-3 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-menu"
                  aria-label={mobileMenuOpen ? t.close : t.menu}
                >
                  <svg
                    className="w-7 h-7 text-primary-900"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      className={mobileMenuOpen ? "hidden" : "block"}
                      d="M4 6h16M4 12h16M4 18h16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      className={mobileMenuOpen ? "block" : "hidden"}
                      d="M6 18L18 6M6 6l12 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Menu — single markup; mobile accordion / desktop inline dropdowns */}
              <div
                id="mobile-menu"
                className={`${mobileMenuOpen ? "block" : "hidden"} w-full order-last overflow-y-auto ${
                  isScrolled
                    ? "max-h-[calc(100vh-5rem)]"
                    : "max-h-[calc(100vh-6rem)]"
                } border-t border-gray-200 desktop:block desktop:w-auto desktop:order-none desktop:overflow-visible desktop:max-h-none desktop:border-0`}
              >
                <div className="desktop:flex desktop:items-center">
                  {navCategories.map((category, index) => (
                    <NavItem
                      key={index}
                      category={category}
                      activeDropdown={activeDropdown}
                      toggleDropdown={toggleDropdown}
                      expandedSubLink={expandedSubLink}
                      setExpandedSubLink={setExpandedSubLink}
                      expandedSubSubLink={expandedSubSubLink}
                      setExpandedSubSubLink={setExpandedSubSubLink}
                      setMobileMenuOpen={setMobileMenuOpen}
                    />
                  ))}
                </div>

                {/* Mobile-only bottom actions */}
                <div className="desktop:hidden">
                  <div className="px-4 py-3 border-t border-b border-gray-200 flex items-center justify-center gap-2">
                    <div className="flex -space-x-1.5 flex-shrink-0">
                      <div className="w-6 h-6 rounded-full overflow-hidden ring-1 ring-white relative z-30">
                        <Image src="/images/review-avatar-1.png" alt="Spokojná zákazníčka" width={24} height={24} className="w-full h-full object-cover" />
                      </div>
                      <div className="w-6 h-6 rounded-full overflow-hidden ring-1 ring-white relative z-20">
                        <Image src="/images/review-avatar-2.png" alt="Spokojný zákazník" width={24} height={24} className="w-full h-full object-cover" />
                      </div>
                      <div className="w-6 h-6 rounded-full overflow-hidden ring-1 ring-white relative z-10">
                        <Image src="/images/review-avatar-3.png" alt="Spokojná zákazníčka" width={24} height={24} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <span className="text-yellow-500 text-base leading-none flex-shrink-0">★★★★★</span>
                    <span className="text-gray-600 text-xs whitespace-nowrap font-medium">
                      {isEnglish ? "3500+ satisfied customers" : "3500+ spokojných zákazníkov"}
                    </span>
                  </div>
                  <div className="px-4 pb-5 pt-3">
                    <button
                      type="button"
                      className="w-full flex items-center justify-center gap-2 bg-white border border-accent-500 text-primary-900 py-3 px-3 font-medium rounded-md text-sm sm:text-base hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={() => {
                        const num = nimbataPhone || t.phoneNumber;
                        try {
                          pushDataLayerEvent("call_click", {
                            event_category: "engagement",
                            event_label: pathname,
                            phone_number: num,
                            language: isEnglish ? "en" : "sk",
                            location: "navbar_mobile_menu",
                          });
                        } catch {}
                        window.location.href = `tel:${num.replace(/\s/g, "")}`;
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
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
                      <span className="whitespace-nowrap overflow-hidden">{nimbataPhone || t.phoneNumber}</span>
                    </button>

                  </div>

                  <div className="flex justify-center py-3 border-t border-gray-200">
                    <div className="flex items-center bg-gray-100 rounded-full p-0.5">
                      {isEnglish ? (
                        <>
                          <a
                            href={getLanguageToggleHref()}
                            onClick={handleLangSwitch(getLanguageToggleHref())}
                            className="px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide text-primary-500 hover:text-primary-800 transition-colors cursor-pointer"
                            aria-label="Prepnúť na slovenčinu"
                          >
                            SK
                          </a>
                          <span className="px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide bg-accent-400 text-primary-900">
                            EN
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide bg-accent-400 text-primary-900">
                            SK
                          </span>
                          <a
                            href={getLanguageToggleHref()}
                            onClick={handleLangSwitch(getLanguageToggleHref())}
                            className="px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide text-primary-500 hover:text-primary-800 transition-colors cursor-pointer"
                            aria-label="Switch to English"
                          >
                            EN
                          </a>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="text-center py-3 text-primary-900 text-lg font-medium border-t border-gray-200">
                    {t.businessHours}
                  </div>
                </div>
              </div>

              {/* Desktop CTA cluster */}
              <div className="hidden desktop:flex items-center gap-5 flex-shrink-0">
                <div className="flex items-center bg-gray-100 rounded-full p-0.5">
                  {isEnglish ? (
                    <>
                      <a
                        href={getLanguageToggleHref()}
                        onClick={handleLangSwitch(getLanguageToggleHref())}
                        className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide text-primary-500 hover:text-primary-800 transition-colors cursor-pointer"
                        aria-label="Prepnúť na slovenčinu"
                      >
                        SK
                      </a>
                      <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide bg-accent-400 text-primary-900">
                        EN
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide bg-accent-400 text-primary-900">
                        SK
                      </span>
                      <a
                        href={getLanguageToggleHref()}
                        onClick={handleLangSwitch(getLanguageToggleHref())}
                        className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide text-primary-500 hover:text-primary-800 transition-colors cursor-pointer"
                        aria-label="Switch to English"
                      >
                        EN
                      </a>
                    </>
                  )}
                </div>

                <button
                  type="button"
                  className="bg-accent-400 text-primary-900 px-4 py-3 rounded-xl text-sm font-bold tracking-wide uppercase flex items-center whitespace-nowrap flex-shrink-0 hover:bg-accent-300 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
                  onClick={() => {
                    try {
                      pushDataLayerEvent("call_click", {
                        event_category: "engagement",
                        event_label: pathname,
                        phone_number: t.phoneNumber,
                        language: isEnglish ? "en" : "sk",
                        location: "navbar",
                      });
                    } catch {}
                    window.location.href = `tel:${t.phoneNumber.replace(/\s/g, "")}`;
                  }}
                >
                  {t.callUs}
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7"></path>
                  </svg>
                </button>

                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-accent-500 flex-shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span key={pathname} className="contents">
                      <a
                        href={`tel:${t.phoneNumber.replace(/\s/g, "")}`}
                        onClick={handleCallClick}
                        aria-label={`${t.phoneLabel}: ${t.phoneNumber}`}
                        className="font-bold text-lg text-primary-900 hover:text-accent-500 transition-colors whitespace-nowrap"
                      >
                        <span data-correct={shouldScrollToTop ? t.phoneNumber : undefined} className={shouldScrollToTop ? "" : "nimbata_number_1"}>{t.phoneNumber}</span>
                      </a>
                    </span>
                  </div>
                  <div className="text-primary-900 text-sm font-semibold mt-1 whitespace-nowrap">
                    {t.businessHours}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Space to prevent content from being hidden behind fixed navbar on mobile */}
      <div className={`${isScrolled ? "h-20" : "h-24"} desktop:h-0`}></div>
    </>
  );
}
