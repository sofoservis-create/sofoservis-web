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
  title: "Sťahovanie do Španielska zo Slovenska | Sofoservis",
  description:
    "Profesionálne sťahovanie do Španielska a zo Španielska na Slovensko. Trasy do Madridu, Barcelony, Valencie. Transparentné ceny, poistenie zahrnuté.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/spanielsko",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/spanielsko",
      en: "https://www.sofoservis.sk/en/moving-to-spain",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/spanielsko",
    },
  },
  keywords:
    "sťahovanie do Španielska, medzinárodné sťahovanie Španielsko, preprava do Barcelony, sťahovanie Slovensko Madrid, sťahovanie Barcelona",
  openGraph: {
    title: "Sťahovanie do Španielska zo Slovenska | Sofoservis",
    description:
      "Profesionálne sťahovanie do Španielska. Trasy do Madridu, Barcelony, Valencie. Poistenie zahrnuté.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/spanielsko",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieSpanielskoPage() {
  const heroData = {
    title: "Sťahovanie do Španielska",
    description:
      "Profesionálne medzinárodné sťahovanie zo Slovenska do Španielska. Barcelona (1 700 km), Madrid (2 100 km) — dlhá trasa si vyžaduje skúsený tím.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Sťahovanie do Španielska — kalkulácia zadarmo",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Prečo sťahovať do Španielska cez Sofoservis",
    description:
      "Španielsko je jednou z najvzdialenejších európskych destinácií — sme na to pripravení.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie domácností",
        description:
          "Kompletné sťahovanie bytu alebo domu zo Slovenska do Španielska vrátane balenia a prepravy.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie",
        description:
          "Presun kancelárií a firiem zo Slovenska do Španielska s komplexnou logistikou.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Barcelona, Madrid a celé Španielsko",
        description:
          "Sťahujeme do Barcelony, Madridu, Valencie, Sevilly, Bilbaa a ďalších španielskych miest.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/document_icon.svg",
        title: "EÚ formality",
        description:
          "Španielsko je v EÚ — žiadne colné poplatky na osobné veci pri sťahovaní.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Zosilnené balenie pre dlhú trasu",
        description:
          "Pre trasy nad 1 500 km používame špeciálne zosilnené baliace materiály.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie prepravy",
        description:
          "Váš majetok je plne poistený počas celej trasy zo Slovenska do Španielska.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako dlho trvá sťahovanie z Bratislavy do Barcelony?",
      answer:
        "Vzdialenosť Bratislava – Barcelona je cca 1 700 km, čo zodpovedá zhruba 16 hodinám jazdy. Realizujeme to ako 2-dňovú expedíciu s nocľahom na trase.",
    },
    {
      question: "Potrebujem špeciálne dokumenty na sťahovanie do Španielska?",
      answer:
        "Španielsko je v EÚ, takže colné formality sú minimálne. Stačí doklad totožnosti a inventárny zoznam vecí.",
    },
    {
      question: "Sťahujete aj zo Španielska späť na Slovensko?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch.",
    },
    {
      question: "Aká je cena sťahovania do Madridu?",
      answer:
        "Madrid je ešte vzdialenejší ako Barcelona (cca 2 100 km). Cena závisí od objemu vecí. Kontaktujte nás pre bezplatnú kalkuláciu.",
    },
    {
      question: "Sťahujete aj na Kanárske ostrovy alebo Baleáry?",
      answer:
        "Sťahovanie na španielske ostrovy vyžaduje lodný transport — realizujeme ho individuálne. Kontaktujte nás pre špeciálnu ponuku.",
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
        benefits={["Barcelona, Madrid, Valencia a ďalšie", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          title="Často kladené otázky — sťahovanie do Španielska"
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
          { title: "Medzinárodné sťahovanie", description: "Sťahovanie do celej Európy.", href: "/medzinarodne-stahovanie", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Francúzska", description: "Preprava do Paríža a celého Francúzska.", href: "/medzinarodne-stahovanie/francuzsko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Talianska", description: "Profesionálne sťahovanie do Talianska.", href: "/medzinarodne-stahovanie/taliansko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
