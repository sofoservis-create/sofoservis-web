"use client";
// src/components/sections/Hero.tsx
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import QuickContactForm from "@/components/forms/QuickContactForm";

const MASCOT_ASPECT = 1080 / 1080;
const GLOW_HALF_WIDTH = 271;
const DESKTOP_MASCOT_SCALE = 1.1608;
const DESKTOP_MASCOT_RIGHT = -8;
const DESKTOP_MASCOT_TOP_SHIFT = 0;
const DESKTOP_MASCOT_TOP_SHIFT_PCT = -0.07;
const DESKTOP_MASCOT_RIGHT_SHIFT_PCT = 0.275;
const DESKTOP_GLOW_LEFT_PCT = 0.04;
const DESKTOP_GLOW_UP_PCT = 0.05;

interface HeroProps {
  /** Main heading for the hero section */
  title?: string;
  /** Subheading or description text */
  description?: string;
  /** URL path to the background image */
  backgroundImage?: string;
  /** Title for the form */
  formTitle?: string;
  /** Subtitle for the form */
  formSubtitle?: string;
  /** Badge text shown above the title */
  badgeText?: string;
  /** Text for the rating count */
  ratingText?: string;
  /** Benefits to display in the benefits bar */
  benefits?: string[];
  /** Text for phone CTA button (mobile only) */
  phoneCTAText?: string;
  /** Phone number to display */
  phoneNumber?: string;
  /** Operating hours text (accepted for backwards compatibility) */
  hoursText?: string;
  /** Language for the component - 'en' for English, 'sk' for Slovak */
  lang?: "en" | "sk";
  /** Show the crossed-hands mascot + glow (lab2 style) */
  showMascot?: boolean;
  /** Override mascot SVG path (used for both desktop and mobile). Defaults to crossed-hands. */
  mascotSrc?: string;
  /** Override mascot SVG path for mobile only. Defaults to mascotSrc or crossed-hands mobile variant. */
  mobileMascotSrc?: string;
  /** Which variant of in-form trust pills to show (mobile only). Omit for none. */
  pillsVariant?: "home" | "stahovanie";
}

type HeroPill = { icon: string; label: string };

const HERO_PILLS: Record<"home" | "stahovanie", Record<"sk" | "en", HeroPill[]>> = {
  home: {
    sk: [
      { icon: "/icons/truck_icon.svg", label: "Sťahovanie" },
      { icon: "/icons/vypratavanie_icon.svg", label: "Vypratávanie" },
      { icon: "/icons/furniture_icon.svg", label: "Montáž nábytku" },
    ],
    en: [
      { icon: "/icons/truck_icon.svg", label: "Moving" },
      { icon: "/icons/vypratavanie_icon.svg", label: "Clearance" },
      { icon: "/icons/furniture_icon.svg", label: "Furniture assembly" },
    ],
  },
  stahovanie: {
    sk: [
      { icon: "/icons/insurance_icon.svg", label: "Poistenie nábytku zahrnuté" },
      { icon: "/icons/cash_icon.svg", label: "Bez skrytých poplatkov" },
      { icon: "/icons/document_icon.svg", label: "Záväzná cena vopred" },
    ],
    en: [
      { icon: "/icons/insurance_icon.svg", label: "Furniture insurance included" },
      { icon: "/icons/cash_icon.svg", label: "No hidden fees" },
      { icon: "/icons/document_icon.svg", label: "Binding price upfront" },
    ],
  },
};

export default function Hero({
  title = "Sťahovacie služby s úsmevom a bez stresu",
  description = "Profesionálna sťahovacia spoločnosť s rozsiahlou flotilou vozidiel, skúseným tímom a špecializovaným vybavením.",
  backgroundImage = "/images/sofoservis-zamestnanci-hero.avif",
  formTitle = "Dohodnite si kalkuláciu úplne zadarmo",
  formSubtitle = "Vyplňte formulár a získajte nezáväznú ponuku ešte dnes",
  badgeText = "Poskytujeme služby 6 dní v týždni",
  ratingText = "3500+ spokojných zákazníkov",
  benefits = ["Obhliadka zdarma", "Vysoká spokojnosť zákazníkov", "Bez stresu"],
  phoneCTAText = "Zavolajte nám",
  phoneNumber,
  lang = "sk",
  showMascot = false,
  mascotSrc,
  mobileMascotSrc,
  pillsVariant,
}: HeroProps) {
  const heroPills = pillsVariant ? HERO_PILLS[pillsVariant][lang] : null;
  const desktopMascot = mascotSrc ?? "/images/mascot/crossed-hands-mascot.svg";
  const mobileMascot = mobileMascotSrc ?? mascotSrc ?? "/images/mascot/crossed-hands-mascot-mobile.svg";
  // Get current pathname to determine correct phone number
  const pathname = usePathname();

  const heroFrameRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);
  const [mascotDims, setMascotDims] = useState<{ top: number; height: number } | null>(null);

  useEffect(() => {
    if (!showMascot) return;
    const compute = () => {
      const frame = heroFrameRef.current;
      const badge = badgeRef.current;
      const formCard = formCardRef.current;
      if (!frame || !badge || !formCard) return;
      const frameRect = frame.getBoundingClientRect();
      const badgeRect = badge.getBoundingClientRect();
      const formCardRect = formCard.getBoundingClientRect();
      const top = badgeRect.top - frameRect.top;
      const height = formCardRect.bottom - badgeRect.top;
      setMascotDims({ top, height });
    };
    compute();
    const ro = new ResizeObserver(compute);
    [heroFrameRef.current, badgeRef.current, formCardRef.current].forEach((el) => {
      if (el) ro.observe(el);
    });
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, [showMascot]);

  // Determine phone number based on pathname (same logic as Navbar)
  const currentPhoneNumber =
    phoneNumber ||
    (pathname?.includes("/montaz-nabytku") ||
    pathname?.includes("/montaz-kuchyne") ||
    pathname?.includes("/hodinovy-manzel-majster")
      ? "0952 044 363"
      : "0951 735 130");
  return (
    <section
      className="relative pt-4 pb-6 md:pt-4 md:pb-8 lg:pt-40 bg-primary-900 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background image with optimization */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={`Sťahovacie služby - ${title}`}
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-top md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 via-primary-900/70 to-primary-900/65"></div>
      </div>

      <div ref={heroFrameRef} className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 overflow-visible">
        {showMascot && mascotDims && (() => {
          const mascotH = mascotDims.height * DESKTOP_MASCOT_SCALE;
          const mascotW = mascotDims.height * MASCOT_ASPECT * DESKTOP_MASCOT_SCALE;
          const mascotTopPx = mascotDims.top + DESKTOP_MASCOT_TOP_SHIFT + mascotH * DESKTOP_MASCOT_TOP_SHIFT_PCT;
          const mascotRightPx = DESKTOP_MASCOT_RIGHT - mascotW * DESKTOP_MASCOT_RIGHT_SHIFT_PCT;
          const mascotCenterY = mascotTopPx + mascotH / 2;
          const mascotCenterRight = mascotRightPx + mascotW / 2;
          const glowDiameter = GLOW_HALF_WIDTH * 2;
          const glowCenterY = mascotCenterY - glowDiameter * DESKTOP_GLOW_UP_PCT;
          const glowCenterRight = mascotCenterRight + glowDiameter * DESKTOP_GLOW_LEFT_PCT;
          return (
            <>
              <div
                className="absolute hidden lg:block pointer-events-none"
                style={{
                  top: `${glowCenterY - GLOW_HALF_WIDTH}px`,
                  right: `${glowCenterRight - GLOW_HALF_WIDTH}px`,
                  width: '542px',
                  height: '542px',
                  borderRadius: '50%',
                  background: '#fdc70033',
                  filter: 'blur(100px)',
                  zIndex: 4,
                }}
              />
              <Image
                src={desktopMascot}
                alt="Sofoservis maskot"
                width={Math.round(mascotW)}
                height={Math.round(mascotH)}
                priority
                className="absolute hidden lg:block pointer-events-none select-none"
                style={{ top: `${mascotTopPx}px`, right: `${mascotRightPx}px`, width: `${mascotW}px`, height: `${mascotH}px`, maxWidth: 'none', zIndex: 5 }}
                sizes={`${Math.round(mascotW)}px`}
              />
            </>
          );
        })()}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          {/* Hero Content - Left side */}
          <div className="w-full lg:w-3/5 order-1 lg:order-1 space-y-3 md:space-y-5 text-center lg:text-left">
            {/* Badge for attention */}
            <div ref={badgeRef} className="inline-flex items-center py-1.5 px-4 rounded-full bg-accent-500/20 text-accent-500 font-medium text-sm mb-1 md:mb-0%">
              <span className="mr-2">✓</span> {badgeText}
            </div>

            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
            >
              <span className="relative">
                {title}
                <span className="absolute -right-4 text-accent-500">.</span>
              </span>
            </h1>

            {/* Description */}
            <div className="block text-base lg:text-xl text-white/90 max-w-xl leading-relaxed mx-auto lg:mx-0">
              <p>{description}</p>
            </div>

            {/* Phone CTA - mobile only, positioned first for conversion */}
            <div className="block lg:hidden">
              <a
                href={`tel:${currentPhoneNumber.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium rounded-lg text-primary-900 bg-accent-500 hover:bg-accent-400 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {phoneCTAText}
              </a>
            </div>

            {/* Customer avatars + Google rating */}
            <div className="flex flex-row items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-2 flex-shrink-0">
                <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-white/30 relative z-30">
                  <Image
                    src="/images/review-avatar-1.png"
                    alt="Spokojná zákazníčka Sofoservis"
                    width={36}
                    height={36}
                    className="w-full h-full object-cover"
                    sizes="36px"
                  />
                </div>
                <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-white/30 relative z-20">
                  <Image
                    src="/images/review-avatar-2.png"
                    alt="Spokojný zákazník Sofoservis"
                    width={36}
                    height={36}
                    className="w-full h-full object-cover"
                    sizes="36px"
                  />
                </div>
                <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-white/30 relative z-10">
                  <Image
                    src="/images/review-avatar-3.png"
                    alt="Spokojná zákazníčka Sofoservis recenzie"
                    width={36}
                    height={36}
                    className="w-full h-full object-cover"
                    sizes="36px"
                  />
                </div>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-accent-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-white/80 text-sm text-center lg:text-left">{ratingText}</div>
            </div>

            {/* Benefits Bar - 3 benefits, above form on mobile */}
            {benefits.length > 0 && (
            <div className="grid grid-cols-3 sm:grid-cols-none sm:flex sm:flex-wrap sm:justify-center lg:justify-start sm:items-center gap-3 sm:gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-center sm:items-center"
                >
                  <div className="p-2 bg-accent-500 rounded-full mb-2 sm:mb-0 sm:mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary-900"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <span className="text-white text-xs sm:text-sm text-center sm:text-left font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
            )}

            {/* Mobile mascot — sits below the reviews row, peeks behind the form */}
            {showMascot && (
              <div
                className="lg:hidden relative z-0 pointer-events-none"
                style={{ marginTop: '-6px', marginBottom: '-188px', height: '630px' }}
              >
                <div
                  className="absolute"
                  style={{ width: '630px', height: '630px', left: '50%', transform: 'translateX(calc(-50% + 19px))' }}
                >
                  <div
                    className="absolute left-1/2 top-1/2"
                    style={{
                      width: '423px',
                      height: '423px',
                      borderRadius: '50%',
                      background: '#fdc70033',
                      filter: 'blur(100px)',
                      transform: `translate(calc(-50% - ${423 * DESKTOP_GLOW_LEFT_PCT}px), calc(-50% - ${423 * (DESKTOP_GLOW_UP_PCT + 0.11)}px))`,
                      zIndex: 0,
                    }}
                  />
                  <Image
                    src={mobileMascot}
                    alt="Sofoservis maskot"
                    width={630}
                    height={630}
                    priority
                    className="select-none relative"
                    style={{ zIndex: 10, maxWidth: 'none', width: '630px', height: '630px' }}
                  />
                </div>
              </div>
            )}

            {/* Mobile Form - below benefits bar on mobile */}
            <div className={`block lg:hidden${showMascot ? ' relative z-10' : ''}`} style={showMascot ? { marginTop: '-314px' } : undefined}>
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-accent-500/25 hover:shadow-xl">
                <div className="bg-accent-500 text-primary-900 py-2.5 px-6">
                  <h3 className="text-lg md:text-xl font-bold text-center">
                    {formTitle}
                  </h3>
                  {formSubtitle && (
                    <p className="text-sm text-center text-primary-900/80 mt-1">
                      {formSubtitle}
                    </p>
                  )}
                </div>
                <div className="p-4">
                  <QuickContactForm variant="primary" lang={lang} />
                </div>
              </div>
              {heroPills && (
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {heroPills.map((p) => (
                    <div key={p.label} className="flex flex-col items-center gap-2">
                      <div className="w-14 h-14 rounded-full bg-accent-500 flex items-center justify-center">
                        <Image src={p.icon} alt="" width={36} height={36} />
                      </div>
                      <span className="text-sm font-medium text-white text-center leading-tight">
                        {p.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Form Section - Right side */}
          <div className="w-full lg:w-2/5 order-2 lg:order-2 -mt-2 lg:mt-0 hidden lg:block">
            <div ref={formCardRef} className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-accent-500/25 hover:shadow-xl">
              {/* Form header with accent background */}
              <div className="bg-accent-500 text-primary-900 py-2.5 px-6">
                <h3 className="text-lg md:text-xl font-bold text-center">
                  {formTitle}
                </h3>
                {formSubtitle && (
                  <p className="text-sm text-center text-primary-900/80 mt-1">
                    {formSubtitle}
                  </p>
                )}
              </div>

              <div className="p-4">
                {/* Using our reusable QuickContactForm component */}
                <QuickContactForm variant="primary" lang={lang} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
