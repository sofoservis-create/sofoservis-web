"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { usePathname } from "next/navigation";
import ReviewBadge from "@/components/widgets/ReviewBadge";

export default function ContactInfo() {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en") || false;

  const phoneNumber =
    pathname?.includes("/montaz-nabytku") ||
    pathname?.includes("/montaz-kuchyne") ||
    pathname?.includes("/hodinovy-manzel-majster") ||
    pathname?.includes("/en/furniture-assembly") ||
    pathname?.includes("/en/kitchen-installation") ||
    pathname?.includes("/en/handyman-services")
      ? "0952 044 363"
      : "0951 735 130";

  const isKontaktRoute =
    pathname === "/kontakt" || pathname === "/en/contact";

  return (
    <section className="pt-10 md:pt-14 pb-6 md:pb-10 bg-white">
      <Container>
        <div className="w-full flex flex-col md:flex-row-reverse md:items-stretch gap-12 md:gap-16 xl:gap-24">
          {/* Left side - Image with decorative background */}
          <div className="hidden md:flex w-full md:w-[50%] flex-col gap-6">
            {/* Card above image */}
            <div className="bg-accent-500/10 rounded-xl p-5 hidden md:flex items-center gap-4">
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
                className="w-8 h-8 text-accent-500 flex-shrink-0"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <p className="text-primary-800 text-lg">
                <span className="font-bold">
                  {isEnglish ? "Free consultation:" : "Bezplatná konzultácia:"}
                </span>{" "}
                {isEnglish
                  ? "Call us or fill out the contact form below for a quick response."
                  : "Zavolajte nám alebo vyplňte kontaktný formulár nižšie pre rýchlu reakciu."}
              </p>
            </div>

            {/* Image with decorative background */}
            <div className="relative flex-1 min-h-[300px] hidden md:block">
              {/* Decorative accent background */}
              <div
                className="absolute inset-0 bg-accent-500 rounded-2xl transform translate-x-6 translate-y-6 md:translate-x-8 md:translate-y-8"
                aria-hidden="true"
              ></div>

              {/* Main image with hover effect */}
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg transition-transform duration-300 ease-out hover:scale-[1.02] h-full">
                <Image
                  src="/images/SofoServis_Volajte.jpg"
                  alt={isEnglish ? "Contact SofoServis - professional moving services" : "Kontaktujte SofoServis - profesionálne sťahovacie služby"}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Right side - Contact information */}
          <div className="w-full md:w-[50%] flex flex-col px-4 sm:px-6 md:px-8 lg:px-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.15] font-bold text-primary-900 mb-8 lg:mb-10">
              {isEnglish ? "Contact us —" : "Kontaktujte nás"}{" "}
              <span className="text-accent-500 underline decoration-[3px] underline-offset-[3px] transition-colors duration-300 hover:text-accent-600">
                {isEnglish ? "we are ready!" : "sme ready!"}
              </span>
            </h2>

            <div className="flex flex-row gap-4 mb-10 lg:mb-12">
              <ReviewBadge
                platform="google"
                rating={4.9}
                reviewCount={isEnglish ? "Based on 350+ reviews" : "Na základe 350+ recenzií"}
              />
              <ReviewBadge
                platform="facebook"
                rating={4.9}
                reviewCount={isEnglish ? "Based on 150+ reviews" : "Na základe 150+ recenzií"}
              />
            </div>

            <div className="space-y-8">
              {/* Phone contact */}
              <div className="flex items-center gap-4 group">
                <div className="bg-accent-500 rounded-full p-3.5 shadow-md transition-transform duration-300 group-hover:scale-110">
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
                    className="w-6 h-6 text-primary-900"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-primary-800">
                    {isEnglish ? "Phone" : "Telefón (všetky služby)"}
                  </p>
                  <a
                    href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                    className="md:hidden text-2xl text-accent-500 hover:underline transition-colors font-bold"
                  >
                    {phoneNumber}
                  </a>
                  <PhoneRevealLarge
                    phoneNumber={phoneNumber.replace(/\s/g, '')}
                    displayNumber={phoneNumber}
                  />
                  <p className="text-sm text-primary-600/80 mt-1">
                    {isEnglish ? "6 days a week 8:00-17:00" : "6 dní v týždni 8:00-17:00"}
                  </p>
                </div>
              </div>

              {isKontaktRoute && (
                <div className="flex items-center gap-4 group">
                  <div className="bg-accent-500 rounded-full p-3.5 shadow-md transition-transform duration-300 group-hover:scale-110">
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
                      className="w-6 h-6 text-primary-900"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-primary-800">
                      {isEnglish ? "Phone (assembly)" : "Telefón (montáž)"}
                    </p>
                    <a
                      href="tel:0952044363"
                      className="md:hidden text-2xl text-accent-500 hover:underline transition-colors font-bold"
                    >
                      0952 044 363
                    </a>
                    <PhoneRevealLarge
                      phoneNumber="0952044363"
                      displayNumber="0952 044 363"
                    />
                    <p className="text-sm text-primary-600/80 mt-1">
                      {isEnglish ? "6 days a week 8:00-17:00" : "6 dní v týždni 8:00-17:00"}
                    </p>
                  </div>
                </div>
              )}

              {/* Email contact */}
              <div className="flex items-center gap-4 group">
                <div className="bg-accent-500 rounded-full p-3.5 shadow-md transition-transform duration-300 group-hover:scale-110">
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
                    className="w-6 h-6 text-primary-900"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-primary-800">
                    {isEnglish ? "Email" : "Email (všetky služby)"}
                  </p>
                  <a
                    href="mailto:doprava@sofoservis.sk"
                    className="text-2xl text-accent-500 hover:underline transition-colors font-bold group-hover:text-accent-600"
                  >
                    doprava@sofoservis.sk
                  </a>
                </div>
              </div>

              {isKontaktRoute && (
                <div className="flex items-center gap-4 group">
                  <div className="bg-accent-500 rounded-full p-3.5 shadow-md transition-transform duration-300 group-hover:scale-110">
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
                      className="w-6 h-6 text-primary-900"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-primary-800">
                      {isEnglish ? "Email (assembly)" : "Email (montáž)"}
                    </p>
                    <a
                      href="mailto:montaz@sofoservis.sk"
                      className="text-2xl text-accent-500 hover:underline transition-colors font-bold group-hover:text-accent-600"
                    >
                      montaz@sofoservis.sk
                    </a>
                  </div>
                </div>
              )}

              {/* Address contact */}
              <div className="flex items-center gap-4 group">
                <div className="bg-accent-500 rounded-full p-3.5 shadow-md transition-transform duration-300 group-hover:scale-110">
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
                    className="w-6 h-6 text-primary-900"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-primary-800">
                    {isEnglish ? "Address" : "Adresa"}
                  </p>
                  <a
                    href="https://maps.google.com/?q=48.131724,17.190028"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-primary-700 hover:text-accent-500 transition-colors"
                  >
                    Závodná 53 (pri modrých kontajneroch)
                  </a>
                  <p className="text-sm text-primary-600/80 mt-1">
                    {isEnglish ? "We operate throughout Slovakia" : "Pôsobíme po celom Slovensku"}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}

function PhoneRevealLarge({
  phoneNumber,
  displayNumber,
}: {
  phoneNumber: string;
  displayNumber: string;
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
    <div ref={blockRef} className="hidden md:flex items-center gap-3">
      {showPhone ? (
        <a
          href={`tel:${phoneNumber}`}
          className="text-2xl text-accent-500 hover:underline transition-colors font-bold"
        >
          {displayNumber}
        </a>
      ) : (
        <>
          <span className="text-2xl text-accent-500 font-bold">
            {displayNumber.slice(0, 4)}&nbsp;***
          </span>
          <button
            type="button"
            onClick={() => setShowPhone(true)}
            className="bg-accent-400 text-primary-900 font-semibold text-sm px-3 py-1 rounded-lg"
          >
            Zobraz.
          </button>
        </>
      )}
    </div>
  );
}
