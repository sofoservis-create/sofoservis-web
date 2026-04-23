import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import CTA from "@/components/sections/CTA";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Sťahovanie na Slovensko — medzinárodné | Sofoservis",
  description:
    "Profesionálne sťahovanie na Slovensko z Európy a zámorí. Sťahujeme z Anglicka, Nemecka, Rakúska, Francúzska, Holandska, USA a ďalších krajín.",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-na-slovensko",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-na-slovensko",
      en: "https://www.sofoservis.sk/en/moving-to-slovakia",
      "x-default": "https://www.sofoservis.sk/stahovanie-na-slovensko",
    },
  },
  keywords:
    "sťahovanie na Slovensko, presťahovanie na Slovensko zo zahraničia, medzinárodné sťahovanie na Slovensko, sťahovanie do Bratislavy",
  openGraph: {
    title: "Sťahovanie na Slovensko — Medzinárodné sťahovanie | Sofoservis",
    description: "Profesionálne sťahovanie na Slovensko z Európy a zámorí. Sťahujeme z Anglicka, Nemecka, Rakúska, Francúzska, Holandska, USA a ďalších krajín.",
    url: "https://www.sofoservis.sk/stahovanie-na-slovensko",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieNaSlovenskoPage() {
  const featuresData = {
    title: "Sťahovanie na Slovensko — Spoľahlivá preprava",
    description:
      "Profesionálne medzinárodné sťahovanie zo zahraničia na Slovensko. Skúsený tím, poistenie zahrnuté.",
    features: [
      {
        image: "/icons/globe_icon.svg",
        title: "Sťahovanie z UK na Slovensko",
        description: "Post-Brexit sťahovanie z Anglicka na Slovensko — colné formality vybavíme za vás.",
        link: "/stahovanie-z-anglie-na-slovensko",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Sťahovanie z Nemecka na Slovensko",
        description: "Pravidelné linky z Mníchova, Berlína, Frankfurtu a celého Nemecka.",
        link: "/stahovanie-z-nemecka-na-slovensko",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Sťahovanie z Rakúska na Slovensko",
        description: "Viedeň len 70 km od Bratislavy — rýchle a efektívne sťahovanie.",
        link: "/stahovanie-z-rakuska-na-slovensko",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Sťahovanie z Holandska na Slovensko",
        description: "Pravidelné trasy z Amsterdamu, Rotterdamu, Haagu a celého Holandska.",
        link: "/stahovanie-z-holandska-na-slovensko",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Sťahovanie z Francúzska na Slovensko",
        description: "Trasy z Paríža, Lyonu, Marseille a ďalších francúzskych miest.",
        link: "/stahovanie-z-francuzska-na-slovensko",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Sťahovanie z USA na Slovensko",
        description: "Medzikontinentálne sťahovanie z USA vrátane námornej prepravy a colných formalít.",
        link: "/stahovanie-z-usa-na-slovensko",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako dlho trvá sťahovanie na Slovensko zo zahraničia?",
      answer: "Čas prepravy závisí od krajiny pôvodu. Z Rakúska alebo Česka 1–2 dni. Z Nemecka, Holandska alebo Francúzska 2–4 dni. Z UK 4–7 dní. Z USA 4–8 týždňov (námorná preprava). Presné termíny potvrdíme pri konzultácii.",
    },
    {
      question: "Potrebujem deklarovať veci pri presune na Slovensko?",
      answer: "Pre sťahovanie v rámci EÚ nie sú potrebné colné formality. Ak sa sťahujete z mimo EÚ (napr. USA, UK), potrebné colné dokumenty vybavíme za vás.",
    },
    {
      question: "Môžete pomôcť aj s prepravou auta na Slovensko?",
      answer: "Áno, koordinujeme prepravu vozidla na Slovensko spolu s domácnosťou.",
    },
    {
      question: "Do akých oblastí Slovenska doručujete?",
      answer: "Doručujeme po celom Slovensku — Bratislava, Trnava, Nitra, Trenčín, Žilina, Banská Bystrica, Prešov, Košice a všetky menšie mestá a obce.",
    },
    {
      question: "Ako získam cenovú ponuku na sťahovanie na Slovensko?",
      answer: "Vyplňte kontaktný formulár na tejto stránke alebo zavolajte nám. Bezplatnú kalkuláciu zvyčajne poskytneme do niekoľkých hodín.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
      <link rel="preload"
        href="/images/mascot/mascot-holding-boxes-mobile.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/mascot-holding-boxes.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)" fetchPriority="high" />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title="Sťahovanie na Slovensko"
          description="Presťahujete sa na Slovensko zo zahraničia? Sofoservis zabezpečí kompletné medzinárodné sťahovanie z celej Európy a zámorí. Postaráme sa o balenie, prepravu, colné formality a doručenie priamo na vašu novú adresu."
          formTitle="Získajte bezplatnú cenovú ponuku"
          formSubtitle="Sťahovanie na Slovensko — kalkulácia zadarmo"
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          desktopMascotScaleMultiplier={1.03}
        desktopMinHeroTextHeightPx={460}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Sťahovanie na Slovensko"
          description="Presťahujete sa na Slovensko zo zahraničia? Sofoservis zabezpečí kompletné medzinárodné sťahovanie z celej Európy a zámorí. Postaráme sa o balenie, prepravu, colné formality a doručenie priamo na vašu novú adresu."
          formTitle="Získajte bezplatnú cenovú ponuku"
          formSubtitle="Sťahovanie na Slovensko — kalkulácia zadarmo"
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
          showMascot
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          mobileMascotSrc="/images/mascot/mascot-holding-boxes-mobile.svg"
          mobileMascotOffsetY={-44}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>
      <div><Clients /></div>
      <div><GoogleReviews /></div>
      <HowItWorks />
      <ServicePricing filter={["medzinarodne-stahovanie", "stahovanie"]} />
      <div><Reviews showHeadline={true} /></div>
      <div>
        <Features
          title={featuresData.title}
          description={featuresData.description}
          features={featuresData.features}
        />
      </div>
      <div>
        <FAQ
          title="Často kladené otázky — sťahovanie na slovensko"
          items={faqItems}
        />
      </div>
      <FAQJsonLd items={faqItems} />
      <div><CTA /></div>
      <TrustBadges />
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Sťahovanie zo Slovenska", description: "Odchádzate zo Slovenska do zahraničia?", href: "/stahovanie-zo-slovenska", icon: "/icons/globe_icon.svg" },
          { title: "Medzinárodné sťahovanie", description: "Všetky medzinárodné trasy.", href: "/medzinarodne-stahovanie", icon: "/icons/truck_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Profesionálne sťahovanie domácností.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
          { title: "Montáž nábytku", description: "Profesionálna montáž nábytku.", href: "/montaz-nabytku", icon: "/icons/wrench_icon.svg" },
        ]}
      />
    </main>
  );
}
