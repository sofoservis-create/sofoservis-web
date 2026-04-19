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
  title: "Sťahovanie do Talianska zo Slovenska | Sofoservis",
  description:
    "Profesionálne sťahovanie do Talianska a z Talianska na Slovensko. Trasy do Milána, Ríma, Turína. Transparentné ceny, EÚ formality, poistenie zahrnuté.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/taliansko",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/taliansko",
      en: "https://www.sofoservis.sk/en/moving-to-italy",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/taliansko",
    },
  },
  keywords:
    "sťahovanie do Talianska, medzinárodné sťahovanie Taliansko, preprava do Milána, sťahovanie Bratislava Rím, sťahovanie Turín",
  openGraph: {
    title: "Sťahovanie do Talianska zo Slovenska | Sofoservis",
    description:
      "Profesionálne sťahovanie do Talianska. Trasy do Milána, Ríma, Turína. Poistenie zahrnuté.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/taliansko",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieTalianskoPage() {
  const heroData = {
    title: "Sťahovanie do Talianska",
    description:
      "Profesionálne medzinárodné sťahovanie zo Slovenska do Talianska. Miláno (850 km), Turín (1 050 km) a Rím (1 350 km) — sťahujeme do celého Talianska.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Sťahovanie do Talianska — kalkulácia zadarmo",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Prečo sťahovať do Talianska cez Sofoservis",
    description:
      "Taliansko je obľúbená destinácia — máme skúsenosti s cestami cez Alpy aj pozdĺž Jadrana.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie domácností",
        description:
          "Kompletné sťahovanie bytu alebo domu zo Slovenska do Talianska vrátane balenia a prepravy.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie",
        description:
          "Presun kancelárií a firiem zo Slovenska do Talianska s komplexnou logistikou.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Miláno, Rím a celé Taliansko",
        description:
          "Sťahujeme do Milána, Ríma, Turína, Neapolu, Bologne a ďalších talianskych miest.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/document_icon.svg",
        title: "EÚ formality",
        description:
          "Taliansko je v EÚ — žiadne colné poplatky na osobné veci pri sťahovaní.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Zosilnené balenie",
        description:
          "Pre dlhú trasu cez Alpy používame zosilnené baliace materiály a ochrany.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie prepravy",
        description:
          "Váš majetok je poistený počas celej trasy zo Slovenska do Talianska.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako dlho trvá sťahovanie z Bratislavy do Milána?",
      answer:
        "Vzdialenosť Bratislava – Miláno je cca 850 km, čo zodpovedá zhruba 8 hodinám jazdy. Zvyčajne realizujeme jednodenné sťahovanie pri menšom objeme alebo 2-dňové pri väčšom.",
    },
    {
      question: "Potrebujem špeciálne dokumenty na sťahovanie do Talianska?",
      answer:
        "Taliansko je v EÚ, takže colné formality sú minimálne. Stačí doklad totožnosti a inventárny zoznam vecí.",
    },
    {
      question: "Sťahujete aj z Talianska späť na Slovensko?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch.",
    },
    {
      question: "Aká je cena sťahovania do Ríma?",
      answer:
        "Rím je vzdialenejší ako Miláno (cca 1 350 km), čo sa odráža na cene. Kontaktujte nás pre bezplatnú kalkuláciu.",
    },
    {
      question: "Sťahujete aj na Sicíliu alebo Sardíniu?",
      answer:
        "Sťahovanie na ostrovy vyžaduje lodný transport — realizujeme ho individuálne. Kontaktujte nás pre špeciálnu ponuku.",
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
        benefits={["Miláno, Rím, Turín a ďalšie", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          title="Často kladené otázky — sťahovanie do Talianska"
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
          { title: "Sťahovanie do Rakúska", description: "Profesionálne sťahovanie do Rakúska.", href: "/medzinarodne-stahovanie/rakusko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Francúzska", description: "Preprava do Francúzska a Paríža.", href: "/medzinarodne-stahovanie/francuzsko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
