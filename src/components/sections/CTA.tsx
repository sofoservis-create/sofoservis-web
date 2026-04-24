import React from "react";
import CallToAction from "@/components/elements/CallToAction";
import Image from "next/image";
import Container from "../ui/Container";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc?: string;
}

export default function CTA({
  title = "Pomáhame neziskovkám rásť vďaka 20% zľave na služby",
  description = "Podporujeme dobré veci. Pre neziskové organizácie máme špeciálne podmienky a výhodné ceny na všetky naše služby. Ozvite sa nám.",
  buttonText = "Kontaktujte nás",
  buttonLink = "/kontakt",
  imageSrc = "/images/sofo-bratislava-stahovanie.avif",
}: CTAProps) {
  return (
    <section className="pt-10 md:pt-[40px] pb-10 md:pb-[60px] bg-white overflow-hidden">
      <Container>
        <div className="w-full flex flex-col md:flex-row items-center gap-12 md:gap-16 xl:gap-24">
          {/* Image wrapper with decorative background */}
          <div className="w-full md:w-[45%] relative mr-4 sm:mr-6 md:mr-0">
            {" "}
            {/* Decorative background with consistent sizing */}
            <div
              className="absolute inset-0 bg-accent-500 rounded-2xl transform translate-x-6 translate-y-6 md:translate-x-8 md:translate-y-8 mx-4 sm:mx-6 md:mx-0"
              aria-hidden="true"
            ></div>
            {/* Main image with proper optimization */}
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg transition-transform duration-300 hover:scale-[1.02] h-full mx-4 sm:mx-6 md:mx-0">
              <Image
                src={imageSrc}
                alt="Získať 20% zľavu pre neziskové organizácie"
                width={600}
                height={600}
                sizes="(max-width: 768px) 100vw, 600px"
                className="w-full h-full object-cover aspect-square"
                priority={false}
              />
            </div>
          </div>

          {/* Content area with clear spacing and typography */}
          <div className="w-full md:w-[55%] flex flex-col px-2 sm:px-6 md:px-0 text-center md:text-left">
            {" "}
            <h3 className="text-3xl md:text-4xl leading-tight font-bold text-primary-900 mb-6">
              {title.includes("20% zľave") ? (
                <>
                  Pomáhame neziskovkám rásť vďaka{" "}
                  <span className="text-accent-500 underline decoration-[3px] underline-offset-[3px]">
                    20% zľave na služby
                  </span>
                </>
              ) : (
                title
              )}
            </h3>
            <p className="text-primary-700 text-lg leading-relaxed mb-8 md:mb-10">
              {description}
            </p>
            <div className="flex justify-center md:justify-start">
              <CallToAction
                text={buttonText}
                href={buttonLink}
                className="md:justify-start"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
