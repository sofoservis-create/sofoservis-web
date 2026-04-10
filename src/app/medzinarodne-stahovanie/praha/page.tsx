import React from "react";
import Hero from "@/components/sections/Hero";
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
  title: "Sťahovanie do Prahy z Bratislavy | Sofoservis",
  description:
    "Profesionálne sťahovanie do Prahy z Bratislavy (330 km). Rýchla preprava, skúsený tím, poistenie zahrnuté. Získajte bezplatnú kalkuláciu.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/praha",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/praha",
      en: "https://www.sofoservis.sk/en/moving-to-prague",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/praha",
    },
  },
  keywords:
    "sťahovanie do Prahy, preprava Bratislava Praha, sťahovanie Praha, medzinárodné sťahovanie Praha, sťahovanie do ČR Praha",
  openGraph: {
    title: "Sťahovanie do Prahy z Bratislavy | Sofoservis",
    description:
      "Sťahovanie do Prahy z Bratislavy — 330 km, cca 3 hod. jazdy. Rýchla preprava, poistenie zahrnuté.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/praha",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovaniePrahaPage() {
  const heroData = {
    title: "Sťahovanie do Prahy",
    description:
      "Sťahujeme z Bratislavy do Prahy a z Prahy do Bratislavy. Vzdialenosť 330 km znamená cca 3 hodiny jazdy — jednodenné sťahovanie zvládnuteľné bez stresu.",
    formTitle: "Cenová ponuka — sťahovanie Bratislava – Praha",
    formSubtitle: "Vyplňte formulár pre rýchlu kalkuláciu zadarmo",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  const featuresData = {
    title: "Prečo sťahovať do Prahy cez Sofoservis",
    description:
      "Praha je jedna z najobľúbenejších destinácií slovenských expatov. Trasa je rýchla a overená.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie bytov do Prahy",
        description:
          "Kompletné sťahovanie bytu z Bratislavy do Prahy — balenie, nakládka, preprava, vykládka.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie do Prahy",
        description:
          "Presun kancelárie z Bratislavy do Prahy s minimálnym prestojom, ideálne cez víkend.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Preprava nábytku do Prahy",
        description:
          "Bezpečná preprava nábytku a osobných vecí na trase Bratislava – Praha.",
        link: "/stahovanie-preprava-nabytku",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Všetky pražské časti",
        description:
          "Sťahujeme do všetkých pražských obvodov — Praha 1 (centrum) až Praha 22.",
        link: "/medzinarodne-stahovanie/ceska-republika",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Balenie a materiál",
        description:
          "Poskytneme baliaci materiál a profesionálne zabalíme vaše veci pre bezpečnú prepravu.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie prepravy",
        description:
          "Váš majetok je poistený počas celej trasy z Bratislavy do Prahy.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Aká je vzdialenosť z Bratislavy do Prahy a ako dlho trvá cesta?",
      answer:
        "Vzdialenosť z Bratislavy do Prahy je cca 330 km. Jazdou po D1/D2 trvá cesta asi 3 hodiny. Celé sťahovanie (vrátane nakládky a vykládky) zvyčajne zvládneme za jeden dlhší deň.",
    },
    {
      question: "Potrebujem špeciálne povolenia pri sťahovaní do centra Prahy?",
      answer:
        "Centrum Prahy (Praha 1) má obmedzený vjazd. Sťahovacie vozidlo môže potrebovať povolenie. Poradíme vám, ako ho získať, a podľa potreby zariadíme parkovanie.",
    },
    {
      question: "Sťahujete aj z Prahy do Bratislavy?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch.",
    },
    {
      question: "Aká je cena sťahovania z Bratislavy do Prahy?",
      answer:
        "Cena závisí od objemu vecí, poschodia, potreby balenia a ďalších faktorov. Kontaktujte nás pre bezplatnú kalkuláciu.",
    },
    {
      question: "Sťahujete aj do okolia Prahy?",
      answer:
        "Áno, sťahujeme do celého Stredočeského kraja — Praha a okolie vrátane Kladna, Mladé Boleslavi, Berounska a ďalších obcí.",
    },
  ];

  return (
    <main className="bg-white">
      <Hero
        title={heroData.title}
        description={heroData.description}
        formTitle={heroData.formTitle}
        formSubtitle={heroData.formSubtitle}
        backgroundImage={heroData.backgroundImage}
        benefits={["Bratislava – Praha len 330 km / 3 hod.", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
      />
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
          title="Často kladené otázky — sťahovanie do Prahy"
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
          { title: "Sťahovanie do Česka", description: "Sťahovanie do celej ČR.", href: "/medzinarodne-stahovanie/ceska-republika", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Brna", description: "Preprava do Brna (130 km).", href: "/medzinarodne-stahovanie/brno", icon: "/icons/globe_icon.svg" },
          { title: "Medzinárodné sťahovanie", description: "Sťahovanie do celej Európy.", href: "/medzinarodne-stahovanie", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
