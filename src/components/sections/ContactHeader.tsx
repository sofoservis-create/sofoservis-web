import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";

interface ContactHeaderProps {
  lang?: "sk" | "en";
}

export default function ContactHeader({ lang = "sk" }: ContactHeaderProps) {
  const isEnglish = lang === "en";

  return (
    <div className="relative w-full bg-primary-900 pt-6 pb-6 desktop:pt-[168px] desktop:pb-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sofoservis zamestnanci.jpg"
          alt="Sofoservis tím"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-900/70"
          aria-hidden="true"
        />
      </div>

      <Container>
        <div className="relative z-10 max-w-5xl space-y-6 text-left">
          <div className="animate-in">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              {isEnglish ? "Contact" : "Kontakt"}<span className="text-accent-500">.</span>
            </h1>

            <h2 className="text-xl md:text-3xl font-bold mb-6">
              <span className="text-accent-500">
                {isEnglish
                  ? "Let's talk about your move or anything we can help with."
                  : "Potrebujete pomôcť? Poradíme vám rýchlo."}
              </span>
            </h2>
          </div>
        </div>
      </Container>
    </div>
  );
}
