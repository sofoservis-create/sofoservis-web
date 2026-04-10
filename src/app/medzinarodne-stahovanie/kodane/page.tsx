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
  title: "Sťahovanie do Kodane zo Slovenska | Sofoservis",
  description:
    "Profesionálne medzinárodné sťahovanie do Kodane zo Slovenska. Vzdialenosť 1 300 km, tranzit 1-2 dni. Poistenie, fixná cena a skúsený tím.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/kodane",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/kodane",
      en: "https://www.sofoservis.sk/en/moving-to-copenhagen",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/kodane",
    },
  },
  keywords:
    "sťahovanie do Kodane, preprava Slovensko Kodaň, sťahovanie Kodaň, medzinárodné sťahovanie Kodaň, sťahovanie do Dánska",
  openGraph: {
    title: "Sťahovanie do Kodane zo Slovenska | Sofoservis",
    description:
      "Sťahovanie do Kodane zo Slovenska — 1 300 km. Poistenie zahrnuté, transparentná cena.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/kodane",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieKodanePage() {
  const heroData = {
    title: "Sťahovanie do Kodane",
    description:
      "Zabezpečujeme sťahovanie zo Slovenska do Kodane — dánskej metropoly známej svojou kvalitou života. Vzdialenosť cca 1 300 km, tranzitný čas 1–2 dni. Preprava prebieha cez Nemecko, s poistením a bez colných formalít, keďže Dánsko je v EÚ.",
    formTitle: "Cenová ponuka — sťahovanie do Kodane",
    formSubtitle: "Vyplňte formulár pre rýchlu kalkuláciu zadarmo",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  const featuresData = {
    title: "Prečo sťahovať do Kodane cez Sofoservis",
    description:
      "Kodaň — mesto bicyklov a moderného dizajnu. Postaráme sa o bezpečný presun vášho domova.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie bytov do Kodane",
        description:
          "Kompletné sťahovanie domácností z celého Slovenska priamo do Kodane.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie",
        description:
          "Sťahovanie kancelárskych priestorov do Dánska s dôrazom na rýchlosť a efektivitu.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Celá Kodaň a okolie",
        description:
          "Sťahujeme do všetkých štvrtí Kodane aj do okolitých miest v regióne Sjælland.",
        link: "/medzinarodne-stahovanie/dansko",
      },
      {
        image: "/icons/document_icon.svg",
        title: "EÚ sťahovanie",
        description:
          "Dánsko je v EÚ — žiadne colné zdržania ani poplatky za osobný majetok.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Balenie na mieru",
        description:
          "Používame zosilnené obaly pre bezpečnú prepravu cez Nemecko a Baltské more.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Krytie poistením",
        description:
          "Váš majetok je plne poistený počas celého tranzitu až do vykládky v Kodani.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako dlho trvá sťahovanie zo Slovenska do Kodane?",
      answer:
        "Vzdialenosť je približne 1 300 km. Preprava zvyčajne trvá 1 až 2 dni v závislosti od konkrétneho miesta nakládky a vykládky.",
    },
    {
      question: "Sťahujete aj z Kodane na Slovensko?",
      answer:
        "Áno, naše služby sú dostupné v oboch smeroch, pravidelne jazdíme trasu Dánsko – Slovensko.",
    },
    {
      question: "Aká je cena sťahovania do Kodane?",
      answer:
        "Cena závisí od objemu vecí a náročnosti sťahovania. Pre presnú cenu nám pošlite dopyt a vypracujeme vám kalkuláciu zadarmo.",
    },
    {
      question: "Zabezpečujete aj parkovanie v Kodani?",
      answer:
        "Kodaň má svoje špecifiká, radi vám poradíme a pomôžeme s vybavením potrebných povolení na parkovanie pre sťahovacie vozidlo.",
    },
    {
      question: "Potrebujem zoznam vecí pri sťahovaní do Dánska?",
      answer:
        "Odporúčame mať vypracovaný inventárny zoznam, ktorý slúži pre vašu kontrolu aj pre potreby poistenia.",
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
        benefits={["Slovensko – Kodaň ~1 300 km", "Tranzit 1–2 dni", "EÚ formality vyriešené"]}
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
          title="Často kladené otázky — sťahovanie do Kodane"
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
          { title: "Sťahovanie do Dánska", description: "Sťahovanie do celého Dánska.", href: "/medzinarodne-stahovanie/dansko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Nemecka", description: "Preprava do Nemecka.", href: "/medzinarodne-stahovanie/nemecko", icon: "/icons/globe_icon.svg" },
          { title: "Medzinárodné sťahovanie", description: "Sťahovanie do celej Európy.", href: "/medzinarodne-stahovanie", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
