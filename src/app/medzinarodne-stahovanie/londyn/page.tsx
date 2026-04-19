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
  title: "Sťahovanie do Londýna z Bratislavy | Sofoservis",
  description:
    "Profesionálne sťahovanie do Londýna z Bratislavy (1 500 km). Pomoc s post-Brexit colnými formalitami. Poistenie zahrnuté. Získajte bezplatnú kalkuláciu.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/londyn",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/londyn",
      en: "https://www.sofoservis.sk/en/moving-to-london",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/londyn",
    },
  },
  keywords:
    "sťahovanie do Londýna, preprava Bratislava Londýn, sťahovanie Londýn, medzinárodné sťahovanie Londýn, sťahovanie do UK Londýn",
  openGraph: {
    title: "Sťahovanie do Londýna z Bratislavy | Sofoservis",
    description:
      "Sťahovanie do Londýna z Bratislavy — 1 500 km + Channel Tunnel. Pomoc s colnými formalitami, poistenie zahrnuté.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/londyn",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovaneLondynPage() {
  const heroData = {
    title: "Sťahovanie do Londýna",
    description:
      "Sťahujeme z Bratislavy do Londýna — srdca Veľkej Británie. Vzdialenosť 1 500 km vrátane prechodu cez Channel Tunnel alebo lodí.",
    formTitle: "Cenová ponuka — sťahovanie Bratislava – Londýn",
    formSubtitle: "Vyplňte formulár pre rýchlu kalkuláciu zadarmo",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Prečo sťahovať do Londýna cez Sofoservis",
    description:
      "Londýn po Brexite — potrebujete pomoc s colnými formalitami. Máme skúsenosti.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie bytov do Londýna",
        description:
          "Kompletné sťahovanie bytu z Bratislavy do Londýna vrátane balenia, nakládky a vykládky.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie do Londýna",
        description:
          "Presun kancelárie z Bratislavy do Londýna s komplexnou logistikou.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Celý Londýn",
        description:
          "Sťahujeme do všetkých londýnskych štvrtí — Central, East, West, North, South London.",
        link: "/medzinarodne-stahovanie/anglicko",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Post-Brexit colné formality",
        description:
          "Pomáhame s colným vyhlásením a inventárnym zoznamom pre britskú colnú správu.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Zosilnené balenie",
        description:
          "Pre dlhú trasu cez Európu a Channel Tunnel používame zosilnené baliace materiály.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie prepravy",
        description:
          "Váš majetok je poistený počas celej trasy z Bratislavy do Londýna.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako sa prepravujú veci z Bratislavy do Londýna?",
      answer:
        "Trasa vedie cez kontinentálnu Európu (Nemecko, Belgicko/Francúzsko) a potom cez Channel Tunnel (Eurotunnel) alebo loďou cez La Manche. Celá logistika vrátane tunelovej prepravy je na nás.",
    },
    {
      question: "Aké dokumenty potrebujem po Brexite pri sťahovaní do Londýna?",
      answer:
        "Od Brexitu je potrebné colné vyhlásenie a inventárny zoznam vecí s hodnotami. Osobné veci pri trvalej zmene bydliska sú zvyčajne od cla oslobodené. Pomáhame s prípravou dokumentácie.",
    },
    {
      question: "Ako dlho trvá sťahovanie z Bratislavy do Londýna?",
      answer:
        "Celá trasa vrátane Channel Tunnel trvá 2–3 dni. Plánujeme individuálne podľa objemu a termínu zákazníka.",
    },
    {
      question: "Sťahujete aj z Londýna do Bratislavy?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch.",
    },
    {
      question: "Aká je cena sťahovania z Bratislavy do Londýna?",
      answer:
        "Londýn je vzdialenejšia destinácia vyžadujúca Channel Tunnel — cena je vyššia. Kontaktujte nás pre bezplatnú kalkuláciu.",
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
        benefits={["Pomoc s post-Brexit colnými formalitami", "Channel Tunnel preprava zabezpečená", "Poistenie prepravy zahrnuté"]}
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
          title="Často kladené otázky — sťahovanie do Londýna"
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
          { title: "Sťahovanie do Anglicka", description: "Sťahovanie do celého UK.", href: "/medzinarodne-stahovanie/anglicko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Írska", description: "Preprava do Dublinu.", href: "/medzinarodne-stahovanie/irsko", icon: "/icons/globe_icon.svg" },
          { title: "Medzinárodné sťahovanie", description: "Sťahovanie do celej Európy.", href: "/medzinarodne-stahovanie", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
