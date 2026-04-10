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
  title: "Sťahovanie do Lisabonu zo Slovenska | Sofoservis",
  description:
    "Profesionálne medzinárodné sťahovanie do Lisabonu zo Slovenska. Vzdialenosť 2 500 km, tranzit 3-4 dni. Fixná cena, poistenie a balenie zahrnuté.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/lisabon",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/lisabon",
      en: "https://www.sofoservis.sk/en/moving-to-lisbon",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/lisabon",
    },
  },
  keywords:
    "sťahovanie do Lisabonu, preprava Slovensko Lisabon, sťahovanie Lisabon, medzinárodné sťahovanie Lisabon, sťahovanie do Portugalska",
  openGraph: {
    title: "Sťahovanie do Lisabonu zo Slovenska | Sofoservis",
    description:
      "Sťahovanie do Lisabonu zo Slovenska — 2 500 km. Poistenie zahrnuté, transparentná cena.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/lisabon",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieLisabonPage() {
  const heroData = {
    title: "Sťahovanie do Lisabonu",
    description:
      "Sťahujeme zo Slovenska do Lisabonu — slnečnej metropoly Portugalska. Vzhľadom na vzdialenosť cca 2 500 km ide o jednu z najdlhších trás, ktorú realizujeme.",
    formTitle: "Cenová ponuka — sťahovanie do Lisabonu",
    formSubtitle: "Vyplňte formulár pre rýchlu kalkuláciu zadarmo",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  const featuresData = {
    title: "Prečo sťahovať do Lisabonu cez Sofoservis",
    description:
      "Lisabon — historické mesto na pobreží Atlantiku. Vaše sťahovanie zvládneme bezpečne aj na túto dlhú trasu.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie bytov do Lisabonu",
        description:
          "Bezpečný presun vašej domácnosti zo Slovenska priamo do srdca Portugalska.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie",
        description:
          "Sťahovanie firiem a kancelárií do Lisabonu s dôrazom na bezpečnosť majetku.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Celé Portugalsko",
        description:
          "Sťahujeme nielen do Lisabonu, ale aj do Porta, Algarve a ďalších regiónov.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/document_icon.svg",
        title: "V rámci EÚ",
        description:
          "Žiadne colné zdržania — Portugalsko je členom EÚ, preprava je plynulá.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Extra balenie",
        description:
          "Pri 2 500 km trase kladieme maximálny dôraz na kvalitu balenia a ochranu vecí.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie prepravy",
        description:
          "Samozrejmosťou je poistenie vášho majetku počas celej cesty do Lisabonu.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako dlho trvá sťahovanie zo Slovenska do Lisabonu?",
      answer:
        "Trasa meria cca 2 500 km. Preprava sťahovacím vozidlom trvá zvyčajne 3 až 4 dni v závislosti od podmienok na cestách.",
    },
    {
      question: "Sťahujete aj v opačnom smere z Portugalska na Slovensko?",
      answer:
        "Áno, realizujeme sťahovania v rámci celej Európy v oboch smeroch.",
    },
    {
      question: "Aká je cena sťahovania do Lisabonu?",
      answer:
        "Vzhľadom na vzdialenosť sa cena počíta individuálne podľa objemu. Kontaktujte nás pre nezáväznú kalkuláciu.",
    },
    {
      question: "Zabezpečujete aj vynášku na poschodie v Lisabone?",
      answer:
        "Áno, naše služby zahŕňajú nielen dopravu, ale aj vynesenie a rozmiestnenie nábytku v novom domove.",
    },
    {
      question: "Potrebujem k sťahovaniu do Portugalska colné doklady?",
      answer:
        "Nie, pre sťahovanie osobného majetku medzi krajinami EÚ nie sú potrebné colné doklady.",
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
        benefits={["Slovensko – Lisabon ~2 500 km", "Tranzit 3–4 dni", "Poistenie a bezpečnosť"]}
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
          title="Často kladené otázky — sťahovanie do Lisabonu"
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
          { title: "Sťahovanie do Španielska", description: "Sťahovanie do susedného Španielska.", href: "/medzinarodne-stahovanie/spanielsko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Francúzska", description: "Preprava do Francúzska.", href: "/medzinarodne-stahovanie/francuzsko", icon: "/icons/globe_icon.svg" },
          { title: "Medzinárodné sťahovanie", description: "Sťahovanie do celej Európy.", href: "/medzinarodne-stahovanie", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
