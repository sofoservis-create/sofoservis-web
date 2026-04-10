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
  title: "Sťahovanie do Nemecka zo Slovenska | Sofoservis",
  description:
    "Profesionálne sťahovanie do Nemecka a z Nemecka na Slovensko. Trasy do Mníchova, Berlína, Frankfurtu, Hamburgu. Férové ceny, skúsený tím, poistenie.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/nemecko",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/nemecko",
      en: "https://www.sofoservis.sk/en/moving-to-germany",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/nemecko",
    },
  },
  keywords:
    "sťahovanie do Nemecka, medzinárodné sťahovanie Nemecko, preprava do Mníchova, sťahovanie Bratislava Berlín, sťahovanie do Frankfurtu",
  openGraph: {
    title: "Sťahovanie do Nemecka zo Slovenska | Sofoservis",
    description:
      "Profesionálne sťahovanie do Nemecka a z Nemecka na Slovensko. Trasy do Mníchova, Berlína, Frankfurtu, Hamburgu.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/nemecko",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieNemeckoPage() {
  const heroData = {
    title: "Sťahovanie do Nemecka",
    description:
      "Profesionálne medzinárodné sťahovanie zo Slovenska do Nemecka a z Nemecka na Slovensko. Sťahujeme do Mníchova (620 km), Berlína (900 km), Frankfurtu (900 km), Hamburgu (1100 km) a ďalších nemeckých miest. Skúsený tím, kvalitné balenie, poistenie zahrnuté.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Sťahovanie do Nemecka — kalkulácia zadarmo",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  const featuresData = {
    title: "Prečo sťahovať do Nemecka cez Sofoservis",
    description:
      "Nemecko je jednou z najčastejších destinácií pre Slovákov. Máme overené trasy a skúsený tím.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie domácností",
        description:
          "Kompletné sťahovanie bytu alebo domu zo Slovenska do Nemecka vrátane balenia, prepravy a rozbalenia.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie",
        description:
          "Presun kancelárií a firiem medzi Slovenskom a Nemeckom. Sťahujeme počas víkendov pre minimalizáciu prestojov.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Všetky nemecké mestá",
        description:
          "Mníchov, Berlín, Frankfurt, Hamburg, Kolín, Stuttgart — sťahujeme do celého Nemecka.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/document_icon.svg",
        title: "EÚ formality",
        description:
          "Nemecko je v EÚ — žiadne colné poplatky na osobné veci, jednoduchá administratíva.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Profesionálne balenie",
        description:
          "Zosilnené balenie pre dlhé trasy, bezpečná preprava nábytku a krehkých predmetov.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie prepravy",
        description:
          "Váš majetok je plne poistený počas celej trasy zo Slovenska do Nemecka.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako dlho trvá sťahovanie z Bratislavy do Mníchova?",
      answer:
        "Vzdialenosť Bratislava – Mníchov je cca 620 km, čo zodpovedá zhruba 5-6 hodinám jazdy. Zvyčajne plánujeme celodenné sťahovanie s naložením ráno a vyložením na mieste.",
    },
    {
      question: "Potrebujem špeciálne dokumenty na sťahovanie do Nemecka?",
      answer:
        "Nemecko je v EÚ, takže colné formality sú minimálne. Odporúčame mať pri sebe doklad totožnosti, inventárny zoznam a doklad o novej adrese v Nemecku pri dlhodobom sťahovaní.",
    },
    {
      question: "Sťahujete aj z Nemecka späť na Slovensko?",
      answer:
        "Áno, zabezpečujeme sťahovanie v oboch smeroch. Ak sa vraciate zo zahraničia alebo potrebujete previezť veci z Nemecka na Slovensko, kontaktujte nás.",
    },
    {
      question: "Aká je cena sťahovania do Berlína?",
      answer:
        "Berlín je vzdialený cca 900 km, čo sa odráža na cene. Presná suma závisí od objemu vecí a doplnkových služieb. Kontaktujte nás pre bezplatnú individuálnu kalkuláciu.",
    },
    {
      question: "Sťahujete aj do menších nemeckých miest a obcí?",
      answer:
        "Áno, sťahujeme do celého Nemecka vrátane menších miest. Cena sa vždy odvíja od vzdialenosti a objemu vecí.",
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
        benefits={["Mníchov, Berlín, Frankfurt a ďalšie", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          title="Často kladené otázky — sťahovanie do Nemecka"
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
          { title: "Sťahovanie do Mníchova", description: "Preprava do bavorskej metropoly.", href: "/medzinarodne-stahovanie/mnichov", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Berlína", description: "Profesionálne sťahovanie do Berlína.", href: "/medzinarodne-stahovanie/berlin", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Frankfurtu", description: "Preprava do finančného centra Nemecka.", href: "/medzinarodne-stahovanie/frankfurt", icon: "/icons/globe_icon.svg" },
        ]}
      />
    </main>
  );
}
