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
  title: "Sťahovanie do Českej republiky zo Slovenska | Sofoservis",
  description:
    "Profesionálne sťahovanie do Česka a z Česka na Slovensko. Trasy Bratislava – Praha, Brno a ďalšie české mestá. Férové ceny, skúsený tím, poistenie.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/ceska-republika",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/ceska-republika",
      en: "https://www.sofoservis.sk/en/moving-to-czech-republic",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/ceska-republika",
    },
  },
  keywords:
    "sťahovanie do Česka, sťahovanie do ČR, medzinárodné sťahovanie Česká republika, preprava do Prahy, sťahovanie Bratislava Praha",
  openGraph: {
    title: "Sťahovanie do Českej republiky zo Slovenska | Sofoservis",
    description:
      "Profesionálne sťahovanie do Česka a z Česka na Slovensko. Trasy Bratislava – Praha, Brno a ďalšie české mestá.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/ceska-republika",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieCSPage() {
  const heroData = {
    title: "Sťahovanie do Českej republiky",
    description:
      "Spoľahlivé medzinárodné sťahovanie zo Slovenska do Českej republiky a z Česka späť. Trasa Bratislava – Brno (130 km) alebo Bratislava – Praha (330 km) patrí medzi naše najobľúbenejšie medzinárodné trasy. Profesionálny tím, flexibilné termíny, transparentná cena.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Sťahovanie do Česka — kalkulácia zadarmo",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  const featuresData = {
    title: "Prečo sťahovať do Česka cez Sofoservis",
    description:
      "Máme bohaté skúsenosti s trasami Slovensko – Česká republika. Trasa je krátka, hranice bez kontrol.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie domácností",
        description:
          "Kompletné sťahovanie bytu alebo domu zo Slovenska do Česka vrátane balenia, prepravy a rozbalenia.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie",
        description:
          "Presun kancelárií a firiem medzi Slovenskom a Českou republikou s minimálnym prestojom.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Praha, Brno a celé Česko",
        description:
          "Sťahujeme do Prahy, Brna, Ostravy, Plzne a každého iného mesta v Českej republike.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Bezproblémové formality",
        description:
          "EÚ členstvo oboch krajín znamená voľný pohyb — minimum papierov, žiadne clo na osobné veci.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Profesionálne balenie",
        description:
          "Používame kvalitné baliace materiály pre bezpečnú prepravu na trase Slovensko – Česko.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie prepravy",
        description:
          "Váš majetok je poistený počas celej trasy zo Slovenska do Českej republiky.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako dlho trvá sťahovanie z Bratislavy do Prahy?",
      answer:
        "Vzdialenosť Bratislava – Praha je cca 330 km, čo zodpovedá zhruba 3 hodinám jazdy. Pri väčšom objeme vecí plánujeme celý deň na naloženie, prepravu a vyloženie. Do Brna (130 km) je to výrazne kratšie.",
    },
    {
      question: "Potrebujem špeciálne dokumenty na sťahovanie do Česka?",
      answer:
        "Česká republika je členom EÚ, preto sú colné formality minimálne. Stačí platný doklad totožnosti a inventárny zoznam vecí. Žiadne colné poplatky na osobné veci.",
    },
    {
      question: "Sťahujete aj z Česka späť na Slovensko?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch — zo Slovenska do Česka aj z Česka na Slovensko. Ak sa vraciate domov, neváhajte nás kontaktovať.",
    },
    {
      question: "Aká je cena sťahovania do Prahy?",
      answer:
        "Cena závisí od objemu vecí, miesta nakládky a vykládky a doplnkových služieb. Do Prahy počítajte s vyššou cenou ako do Brna kvôli väčšej vzdialenosti. Kontaktujte nás pre bezplatnú cenovú ponuku.",
    },
    {
      question: "Sťahujete aj do menších českých miest?",
      answer:
        "Áno, sťahujeme do celej Českej republiky — Praha, Brno, Ostrava, Plzeň, Hradec Králové a ďalšie mestá. Cena sa odvíja od vzdialenosti.",
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
        benefits={["Bratislava – Praha len 3 hod. jazdy", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          title="Často kladené otázky — sťahovanie do Česka"
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
          { title: "Sťahovanie do Prahy", description: "Profesionálne sťahovanie do hlavného mesta ČR.", href: "/medzinarodne-stahovanie/praha", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Brna", description: "Preprava do Brna a okolia.", href: "/medzinarodne-stahovanie/brno", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
