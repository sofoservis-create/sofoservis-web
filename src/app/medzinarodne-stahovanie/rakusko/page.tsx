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
  title: "Sťahovanie do Rakúska zo Slovenska | Sofoservis",
  description:
    "Profesionálne sťahovanie do Rakúska a z Rakúska na Slovensko. Rýchla preprava, férové ceny, skúsený tím. Trasa Bratislava – Viedeň a celé Rakúsko.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/rakusko",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/rakusko",
      en: "https://www.sofoservis.sk/en/moving-from-slovakia-to-austria",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/rakusko",
    },
  },
  keywords:
    "sťahovanie do Rakúska, sťahovanie z Rakúska, medzinárodné sťahovanie Rakúsko, preprava do Viedne, sťahovanie Bratislava Viedeň",
  openGraph: {
    title: "Sťahovanie do Rakúska zo Slovenska | Sofoservis",
    description:
      "Profesionálne sťahovanie do Rakúska a z Rakúska na Slovensko. Rýchla preprava, férové ceny, skúsený tím.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/rakusko",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovaniRakuskoPage() {
  const heroData = {
    title: "Sťahovanie do Rakúska",
    description:
      "Spoľahlivé medzinárodné sťahovanie zo Slovenska do Rakúska a z Rakúska späť. Trasa Bratislava – Viedeň (60 km) je jednou z najkratších medzinárodných trás.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Sťahovanie do Rakúska — kalkulácia zadarmo",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Prečo sťahovať do Rakúska cez Sofoservis",
    description:
      "Máme bohaté skúsenosti s trasou Slovensko – Rakúsko. Poznáme rakúske colné aj dopravné predpisy.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie domácností",
        description:
          "Kompletné sťahovanie bytu alebo domu zo Slovenska do Rakúska vrátane balenia, prepravy a rozbalenia.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie",
        description:
          "Presun kancelárií a firiem medzi Slovenskom a Rakúskom s minimálnym prestojom.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Celé Rakúsko v dosahu",
        description:
          "Sťahujeme do Viedne, Grazu, Linzu, Salzburgu a všetkých rakúskych spolkových krajín.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Colné a právne náležitosti",
        description:
          "EÚ colné predpisy sú jednoduchšie, no poradíme s každým dokumentom potrebným pre rakúske úrady.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Profesionálne balenie",
        description:
          "Používame kvalitné baliace materiály pre bezpečnú prepravu cez hranice.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie prepravy",
        description:
          "Váš majetok je poistený počas celej trasy zo Slovenska do Rakúska.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako dlho trvá sťahovanie z Bratislavy do Viedne?",
      answer:
        "Vzdialenosť Bratislava – Viedeň je len 60 km, čo je jedna z najkratších medzinárodných trás v Európe. Samotná preprava trvá asi 1 hodinu. Pri väčšom objeme vecí plánujeme celý deň na naloženie, prepravu a vyloženie.",
    },
    {
      question: "Potrebujem špeciálne dokumenty na sťahovanie do Rakúska?",
      answer:
        "Rakúsko je členom EÚ, takže colné formality sú minimálne. Stačí platný doklad totožnosti a inventárny zoznam vecí. Pre dlhodobý pobyt odporúčame mať pri sebe doklad o adrese v Rakúsku.",
    },
    {
      question: "Sťahujete aj z Rakúska späť na Slovensko?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch — zo Slovenska do Rakúska aj z Rakúska na Slovensko. Radi sa prispôsobíme vašim potrebám.",
    },
    {
      question: "Aká je cena sťahovania do Rakúska?",
      answer:
        "Cena závisí od objemu vecí, miesta nakládky a vykládky a doplnkových služieb (balenie, montáž). Kontaktujte nás pre bezplatnú cenovú ponuku.",
    },
    {
      question: "Sťahujete aj do iných rakúskych miest okrem Viedne?",
      answer:
        "Áno, sťahujeme do celého Rakúska — Viedeň, Graz, Linz, Salzburg, Innsbruck a ďalšie mestá. Vzdialenosť do niektorých miest je väčšia, čo sa odráža v cene.",
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
        benefits={["Trasa Bratislava – Viedeň len 60 km", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          title="Často kladené otázky — sťahovanie do Rakúska"
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
          { title: "Sťahovanie do Nemecka", description: "Profesionálne sťahovanie do Nemecka.", href: "/medzinarodne-stahovanie/nemecko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Viedne", description: "Preprava do rakúskej metropoly.", href: "/medzinarodne-stahovanie/vieden", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
