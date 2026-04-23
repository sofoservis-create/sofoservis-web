// src/components/layout/Footer.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CookieSettings from "@/components/cookies/CookieSettings";

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en") || false;

  // Add this function inside the Footer component, before the return statement
  const getCompanyInfo = () => {
    const speTcialRoutes = [
      "/montaz-nabytku",
      "/montaz-kuchyne",
      "/hodinovy-manzel-majster",
    ];
    const isSpecialRoute = speTcialRoutes.some((route) =>
      pathname?.includes(route)
    );

    if (isSpecialRoute) {
      return {
        name: "MakySofoMont s.r.o.",
        address: "Malé Leváre 725",
        zipCity: "908 74 Malé Leváre",
        ico: "IČO: 56284497",
      };
    }

    return {
      name: "Sofoservices s. r. o.",
      address: "Lermontovova 3",
      zipCity: "811 05 Bratislava",
      ico: "IČO: 55333800",
    };
  };

  const companyInfo = getCompanyInfo();

  // Multilingual content
  const t = {
    sk: {
      companyName: companyInfo.name,
      address: companyInfo.address,
      zipCity: companyInfo.zipCity,
      ico: companyInfo.ico,
      navigation: "Navigácia",
      services: "Služby",
      contact: "Kontakt",
      operatingHours: "Otváracie hodiny:",
      operatingTimes: "6 dní v týždni 8:00-17:00",
      copyright:
        "© " +
        new Date().getFullYear() +
        " SofoServis. Všetky práva vyhradené.",

      socialLinks: {
        linkedin: "LinkedIn",
        facebook: "Facebook",
        instagram: "Instagram",
      },
      navigationLinks: [
        { href: "/", label: "Domov" },
        { href: "/stahovanie", label: "Sťahovanie" },
        { href: "/vypratavanie", label: "Vypratávanie" },
        { href: "/montaz-nabytku", label: "Montáž nábytku" },
        { href: "/cennik", label: "Cenník" },
        { href: "/kontakt", label: "Kontakt" },
      ],
      serviceLinks: [
        { href: "/stahovanie-bytov-domov", label: "Sťahovanie bytov" },
        { href: "/stahovanie-kancelarii-firiem", label: "Sťahovanie firiem" },
        { href: "/medzinarodne-stahovanie", label: "Medzinárodné sťahovanie" },
        {
          href: "/stahovanie-tazkych-bremien",
          label: "Sťahovanie ťažkých bremien",
        },
        { href: "/stahovanie-preprava-nabytku", label: "Sťahovanie nábytku" },
      ],
    },
    en: {
      companyName: companyInfo.name,
      address: companyInfo.address,
      zipCity: companyInfo.zipCity,
      ico: companyInfo.ico.replace("IČO:", "Company ID:"),
      navigation: "Navigation",
      services: "Services",
      contact: "Contact",
      operatingHours: "Operating hours:",
      operatingTimes: "6 days a week 8:00-17:00",
      copyright:
        "© " + new Date().getFullYear() + " SofoServis. All rights reserved.",

      socialLinks: {
        linkedin: "LinkedIn",
        facebook: "Facebook",
        instagram: "Instagram",
      },
      navigationLinks: [
        { href: "/en", label: "Home" },
        { href: "/en/moving", label: "Moving" },
        { href: "/en/clearance", label: "Junk Removal" },
        { href: "/en/furniture-assembly", label: "Furniture Assembly" },
        { href: "/en/pricing", label: "Pricing" },
        { href: "/en/contact", label: "Contact" },
      ],
      serviceLinks: [
        { href: "/en/apartment-moving", label: "Apartment Moving" },
        { href: "/en/office-moving", label: "Office Moving" },
        {
          href: "/en/international-moving-services",
          label: "International Moving",
        },
        { href: "/en/moving-heavy-loads", label: "Moving Heavy Loads" },
        { href: "/en/furniture-moving-removal", label: "Furniture Moving" },
      ],
    },
  };

  // Set language-specific content
  const content = isEnglish ? t.en : t.sk;

  const isSpecialRoute =
    pathname?.includes("/montaz-nabytku") ||
    pathname?.includes("/montaz-kuchyne") ||
    pathname?.includes("/hodinovy-manzel-majster") ||
    pathname?.includes("/en/furniture-assembly") ||
    pathname?.includes("/en/kitchen-installation") ||
    pathname?.includes("/en/handyman");

  const isKontaktRoute =
    pathname === "/kontakt" ||
    pathname === "/en/contact" ||
    pathname === "/" ||
    pathname === "/en" ||
    pathname === "/en/";

  return (
    <footer className="relative bg-[#303030] text-white pt-6 pb-8 md:py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 desktop:px-8">
        {/* ── DESKTOP: original 3-column layout ── */}
        <div className="hidden md:grid md:grid-cols-12 md:gap-8">
          {/* Logo and company info */}
          <div className="md:col-span-4 flex flex-col items-start">
            <Image
              src="/images/Sofoservis_nove_logo_SVG.svg"
              alt="SofoServis"
              width={200}
              height={77}
              className="h-[77px] w-auto"
              unoptimized
            />
            <div className="mt-5 text-gray-400 space-y-1.5 text-left">
              <p className="font-semibold text-base text-accent-500">
                {content.companyName}
              </p>
              <address className="not-italic text-sm leading-relaxed">
                {content.address}
                <br />
                {content.zipCity}
              </address>
              <p className="text-sm">{content.ico}</p>
            </div>
            <div className="flex space-x-5 mt-5">
              <SocialIcon
                href="https://www.linkedin.com/company/sofoservis"
                icon={<LinkedInIcon />}
                label={content.socialLinks.linkedin}
              />
              <SocialIcon
                href="https://www.facebook.com/SofoServis"
                icon={<FacebookIcon />}
                label={content.socialLinks.facebook}
              />
              <SocialIcon
                href="https://www.instagram.com/sofoservis"
                icon={<InstagramIcon />}
                label={content.socialLinks.instagram}
              />
            </div>
          </div>

          {/* Contact info */}
          <div className="md:col-span-4 flex flex-col items-center">
            <div className="flex flex-col">
                <h3 className="text-xl font-bold text-accent-500 mb-4 text-left">
                  {content.contact}
                </h3>
                <ul className="space-y-4">
                  <li>
                    <PhoneReveal
                      phoneNumber={isSpecialRoute ? "0952044363" : "0951735130"}
                      displayNumber={isSpecialRoute ? "0952 044 363" : "0951 735 130"}
                      suffix={isKontaktRoute ? <span className="text-gray-300 text-xs ml-1">{isEnglish ? "(all services)" : "(všetky služby)"}</span> : undefined}
                      isEnglish={isEnglish}
                    />
                  </li>
                  {isKontaktRoute && (
                    <li>
                      <PhoneReveal
                        phoneNumber="0952044363"
                        displayNumber="0952 044 363"
                        suffix={<span className="text-gray-300 text-xs ml-1">{isEnglish ? "(installation)" : "(montáž)"}</span>}
                        isEnglish={isEnglish}
                      />
                    </li>
                  )}
                  <li>
                    <a
                      href={`mailto:${isSpecialRoute ? "montaz@sofoservis.sk" : "doprava@sofoservis.sk"}`}
                      className="text-gray-300 hover:text-accent-500 transition-colors flex items-center gap-2 group"
                    >
                      <div className="text-accent-500 group-hover:text-accent-400 transition-colors flex-shrink-0">
                        <EmailIcon />
                      </div>
                      <span className="text-sm break-all">
                        {isSpecialRoute ? "montaz@sofoservis.sk" : "doprava@sofoservis.sk"}
                        {isKontaktRoute && <span className="text-gray-300 text-xs ml-1">{isEnglish ? "(all services)" : "(všetky služby)"}</span>}
                      </span>
                    </a>
                  </li>
                  {isKontaktRoute && (
                    <li>
                      <a
                        href="mailto:montaz@sofoservis.sk"
                        className="text-gray-300 hover:text-accent-500 transition-colors flex items-center gap-2 group"
                      >
                        <div className="text-accent-500 group-hover:text-accent-400 transition-colors flex-shrink-0">
                          <EmailIcon />
                        </div>
                        <span className="text-sm break-all">montaz@sofoservis.sk <span className="text-gray-300 text-xs">{isEnglish ? "(installation)" : "(montáž)"}</span></span>
                      </a>
                    </li>
                  )}
                  <li className="text-gray-300 flex items-start gap-2">
                    <div className="text-accent-500 flex-shrink-0 mt-0.5">
                      <LocationIcon />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 block mb-0.5">
                        {isEnglish ? "Warehouse / operations:" : "Sklad / prevádzka:"}
                      </span>
                      <a
                        href="https://maps.google.com/?q=48.131724,17.190028"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm leading-relaxed hover:text-accent-500 transition-colors"
                      >
                        Závodná 53,{" "}
                        {isEnglish
                          ? "near the blue containers"
                          : "pri modrých kontajneroch"}
                      </a>
                    </div>
                  </li>
                  <li className="pt-1">
                    <p className="text-accent-500 font-semibold text-sm">
                      {content.operatingHours}
                    </p>
                    <p className="text-gray-300 mt-1 text-sm">
                      {content.operatingTimes}
                    </p>
                  </li>
          </ul>
            </div>
          </div>

          {/* Navigation links */}
          <div className="md:col-span-4 flex flex-col items-end text-right">
            <h3 className="text-xl font-bold text-accent-500 mb-4">
              {content.navigation}
            </h3>
            <ul className="space-y-4">
              {content.navigationLinks.map((link, index) => (
                <FooterLink
                  key={index}
                  href={link.href}
                  label={link.label}
                />
              ))}
            </ul>
          </div>
        </div>

        {/* ── MOBILE: logo + nav side by side, kontakt full width below ── */}
        <div className="md:hidden">
          {/* Row 1: Logo + Navigácia */}
          <div className="flex flex-row gap-6">
            <div className="flex-1 min-w-0 flex flex-col items-start">
              <Image
                src="/images/Sofoservis_nove_logo_SVG.svg"
                alt="SofoServis"
                width={200}
                height={77}
                className="h-[77px] w-auto"
                unoptimized
              />
              <div className="mt-5 text-gray-400 space-y-1.5 text-left">
                <p className="font-semibold text-base text-accent-500">
                  {content.companyName}
                </p>
                <address className="not-italic text-sm leading-relaxed">
                  {content.address}
                  <br />
                  {content.zipCity}
                </address>
                <p className="text-sm">{content.ico}</p>
              </div>
              <div className="flex space-x-5 mt-5">
                <SocialIcon
                  href="https://www.linkedin.com/company/sofoservis"
                  icon={<LinkedInIcon />}
                  label={content.socialLinks.linkedin}
                />
                <SocialIcon
                  href="https://www.facebook.com/SofoServis"
                  icon={<FacebookIcon />}
                  label={content.socialLinks.facebook}
                />
                <SocialIcon
                  href="https://www.instagram.com/sofoservis"
                  icon={<InstagramIcon />}
                  label={content.socialLinks.instagram}
                />
              </div>
            </div>
            <div className="shrink-0 w-36">
              <h3 className="text-lg font-bold text-accent-500 mb-4">
                {content.navigation}
              </h3>
              <ul className="space-y-4">
                {content.navigationLinks.map((link, index) => (
                  <FooterLink
                    key={index}
                    href={link.href}
                    label={link.label}
                  />
                ))}
              </ul>
            </div>
          </div>

          {/* Row 2: Kontakt full width */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <h3 className="text-lg font-bold text-accent-500 mb-4">
              {content.contact}
            </h3>
            <ul className="space-y-4">
              <li>
                <PhoneReveal
                  phoneNumber={isSpecialRoute ? "0952044363" : "0951735130"}
                  displayNumber={isSpecialRoute ? "0952 044 363" : "0951 735 130"}
                  suffix={isKontaktRoute ? <span className="text-gray-300 text-xs ml-1">{isEnglish ? "(all services)" : "(všetky služby)"}</span> : undefined}
                  isEnglish={isEnglish}
                />
              </li>
              {isKontaktRoute && (
                <li>
                  <PhoneReveal
                    phoneNumber="0952044363"
                    displayNumber="0952 044 363"
                    suffix={<span className="text-gray-300 text-xs ml-1">{isEnglish ? "(installation)" : "(montáž)"}</span>}
                    isEnglish={isEnglish}
                  />
                </li>
              )}
              <li>
                <a
                  href={`mailto:${isSpecialRoute ? "montaz@sofoservis.sk" : "doprava@sofoservis.sk"}`}
                  className="text-gray-300 hover:text-accent-500 transition-colors flex items-center gap-2 group"
                >
                  <div className="text-accent-500 group-hover:text-accent-400 transition-colors flex-shrink-0">
                    <EmailIcon />
                  </div>
                  <span className="text-sm break-all">
                    {isSpecialRoute ? "montaz@sofoservis.sk" : "doprava@sofoservis.sk"}
                    {isKontaktRoute && <span className="text-gray-300 text-xs ml-1">{isEnglish ? "(all services)" : "(všetky služby)"}</span>}
                  </span>
                </a>
              </li>
              {isKontaktRoute && (
                <li>
                  <a
                    href="mailto:montaz@sofoservis.sk"
                    className="text-gray-300 hover:text-accent-500 transition-colors flex items-center gap-2 group"
                  >
                    <div className="text-accent-500 group-hover:text-accent-400 transition-colors flex-shrink-0">
                      <EmailIcon />
                    </div>
                    <span className="text-sm break-all">montaz@sofoservis.sk <span className="text-gray-300 text-xs">{isEnglish ? "(installation)" : "(montáž)"}</span></span>
                  </a>
                </li>
              )}
              <li className="text-gray-300 flex items-start gap-2">
                <div className="text-accent-500 flex-shrink-0 mt-0.5">
                  <LocationIcon />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block mb-0.5">
                    {isEnglish ? "Warehouse / operations:" : "Sklad / prevádzka:"}
                  </span>
                  <a
                    href="https://maps.google.com/?q=48.131724,17.190028"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-relaxed hover:text-accent-500 transition-colors"
                  >
                    Závodná 53,{" "}
                    {isEnglish
                      ? "near the blue containers"
                      : "pri modrých kontajneroch"}
                  </a>
                </div>
              </li>
              <li className="pt-1">
                <p className="text-accent-500 font-semibold text-sm">
                  {content.operatingHours}
                </p>
                <p className="text-gray-300 mt-1 text-sm">
                  {content.operatingTimes}
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between md:items-center">
            <p className="text-xs text-gray-400 text-center md:text-left">
              {content.copyright}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-xs text-gray-400">
              <CookieSettings />
              <span className="hidden md:inline text-gray-600">|</span>
              <Link
                href={isEnglish ? "/en/cookie-policy" : "/zasady-pouzivania-cookies"}
                className="hover:text-accent-500 transition-colors"
              >
                {isEnglish ? "Cookie Policy" : "Cookies"}
              </Link>
              <span className="hidden md:inline text-gray-600">|</span>
              <Link
                href={isEnglish ? "/en/privacy-policy" : "/zasady-spracovania-osobnych-udajov"}
                className="hover:text-accent-500 transition-colors"
              >
                {isEnglish ? "Privacy Policy" : "Ochrana údajov"}
              </Link>
              <span className="hidden md:inline text-gray-600">|</span>
              <Link
                href={isEnglish ? "/en/terms-of-service" : "/vseobecne-obchodne-podmienky"}
                className="hover:text-accent-500 transition-colors"
              >
                {isEnglish ? "Terms of Service" : "Všeobecné obchodné podmienky"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PhoneReveal({
  phoneNumber,
  displayNumber,
  suffix,
  isEnglish,
}: {
  phoneNumber: string;
  displayNumber: string;
  suffix?: React.ReactNode;
  isEnglish?: boolean;
}) {
  const [showPhone, setShowPhone] = useState(false);
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showPhone) return;
    const handleOutsideClick = (e: MouseEvent) => {
      if (blockRef.current && !blockRef.current.contains(e.target as Node)) {
        setShowPhone(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [showPhone]);

  return (
    <div ref={blockRef} className="flex items-center gap-2 flex-wrap">
      <div className="text-accent-500 flex-shrink-0">
        <PhoneIcon />
      </div>
      {showPhone ? (
        <a
          href={`tel:${phoneNumber}`}
          className="text-gray-300 hover:text-accent-500 transition-colors text-sm"
        >
          {displayNumber}
          {suffix}
        </a>
      ) : (
        <>
          <span className="text-gray-300 text-sm font-medium">
            {displayNumber.slice(0, 4)}&nbsp;***
          </span>
          <button
            type="button"
            onClick={() => setShowPhone(true)}
            className="bg-accent-400 text-primary-900 font-semibold text-xs px-2 py-0.5 rounded-md"
          >
            {isEnglish ? "Show" : "Zobraz."}
          </button>
          {suffix}
        </>
      )}
    </div>
  );
}

// Reusable footer link component
function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-300 hover:text-accent-500 transition-colors group flex items-center gap-1 text-sm"
      >
        <span className="group-hover:translate-x-1 transition-transform duration-200">
          {label}
        </span>
      </Link>
    </li>
  );
}

// Reusable social icon component
function SocialIcon({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-accent-500 transition-colors transform hover:-translate-y-1 duration-200"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

// Icons components for better maintainability
function LinkedInIcon() {
  return (
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
      className="h-6 w-6"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect width="4" height="12" x="2" y="9"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

function FacebookIcon() {
  return (
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
      className="h-6 w-6"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

function InstagramIcon() {
  return (
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
      className="h-6 w-6"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}
