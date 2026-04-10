"use client";
// src/components/sections/Hero.tsx
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import QuickContactForm from "@/components/forms/QuickContactForm";

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
}

export default function Hero({
  title = "Sťahovacie služby s úsmevom a bez stresu",
  description = "Profesionálna sťahovacia spoločnosť s rozsiahlou flotilou vozidiel, skúseným tímom a špecializovaným vybavením.",
  backgroundImage = "/images/sofoservis zamestnanci.jpg",
  formTitle = "Dohodnite si kalkuláciu úplne zadarmo",
  formSubtitle = "Vyplňte formulár a získajte nezáväznú ponuku ešte dnes",
  badgeText = "Poskytujeme služby 6 dní v týždni",
  ratingText = "3500+ spokojných zákazníkov",
  benefits = ["Obhliadka zdarma", "Vysoká spokojnosť zákazníkov", "Bez stresu"],
  phoneCTAText = "Zavolajte nám",
  phoneNumber,
  lang = "sk",
}: HeroProps) {
  // Get current pathname to determine correct phone number
  const pathname = usePathname();

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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          {/* Hero Content - Left side */}
          <div className="w-full lg:w-3/5 order-1 lg:order-1 space-y-3 md:space-y-5 text-center lg:text-left">
            {/* Badge for attention */}
            <div className="inline-flex items-center py-1.5 px-4 rounded-full bg-accent-500/20 text-accent-500 font-medium text-sm mb-1 md:mb-0%">
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
              <div className="text-white/80 text-sm">
                {ratingText}
              </div>
            </div>

            {/* Benefits Bar - 3 benefits, above form on mobile */}
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

            {/* Mobile Form - below benefits bar on mobile */}
            <div className="block lg:hidden">
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
            </div>
          </div>

          {/* Form Section - Right side */}
          <div className="w-full lg:w-2/5 order-2 lg:order-2 -mt-2 lg:mt-0 hidden lg:block">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-accent-500/25 hover:shadow-xl">
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
