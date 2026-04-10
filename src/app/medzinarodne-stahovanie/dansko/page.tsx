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
  title: "Sťahovanie do Dánska zo Slovenska | Sofoservis",
  description:
    "Profesionálne sťahovanie do Dánska a z Dánska na Slovensko. Trasy do Kodane, Aarhusu. Transparentné ceny, EÚ formality, poistenie zahrnuté.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/dansko",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/dansko",
      en: "https://www.sofoservis.sk/en/moving-to-denmark",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/dansko",
    },
  },
  keywords:
    "sťahovanie do Dánska, medzinárodné sťahovanie Dánsko, preprava do Kodane, sťahovanie Slovensko Kodaň, sťahovanie Aarhus",
  openGraph: {
    title: "Sťahovanie do Dánska zo Slovenska | Sofoservis",
    description:
      "Profesionálne sťahovanie do Dánska. Trasy do Kodane a ďalších dánskych miest. Poistenie zahrnuté.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/dansko",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovaneDanskoPage() {
  const heroData = {
    title: "Sťahovanie do Dánska",
    description:
      "Profesionálne medzinárodné sťahovanie zo Slovenska do Dánska. Kodaň (1 350 km), Aarhus (1 300 km) — skúsený tím, poistenie zahrnuté, EÚ formality.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Sťahovanie do Dánska — kalkulácia zadarmo",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  const featuresData = {
    title: "Prečo sťahovať do Dánska cez Sofoservis",
    description:
      "Dánsko v EÚ — brána do Škandinávie s overenými trasami a skúseným tímom.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie domácností",
        description:
          "Kompletné sťahovanie bytu alebo domu zo Slovenska do Dánska vrátane balenia a prepravy.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie",
        description:
          "Presun kancelárií a firiem zo Slovenska do Dánska s minimálnym prestojom.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Kodaň a celé Dánsko",
        description:
          "Sťahujeme do Kodane, Aarhusu, Odense, Aalborgu a ďalších dánskych miest.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/document_icon.svg",
        title: "EÚ formality",
        description:
          "Dánsko je v EÚ — žiadne colné poplatky na osobné veci pri sťahovaní.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Zosilnené balenie",
        description:
          "Pre dlhú trasu cez Európu používame zosilnené baliace materiály.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie prepravy",
        description:
          "Váš majetok je poistený počas celej trasy zo Slovenska do Dánska.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako dlho trvá sťahovanie z Bratislavy do Kodane?",
      answer:
        "Vzdialenosť Bratislava – Kodaň je cca 1 350 km, čo zodpovedá zhruba 12–13 hodinám jazdy. Realizujeme to väčšinou ako 2-dňovú expedíciu.",
    },
    {
      question: "Potrebujem špeciálne dokumenty na sťahovanie do Dánska?",
      answer:
        "Dánsko je v EÚ, takže colné formality sú minimálne. Stačí doklad totožnosti a inventárny zoznam vecí.",
    },
    {
      question: "Sťahujete aj z Dánska späť na Slovensko?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch.",
    },
    {
      question: "Aká je cena sťahovania do Kodane?",
      answer:
        "Cena závisí od objemu vecí a doplnkových služieb. Kontaktujte nás pre bezplatnú kalkuláciu.",
    },
    {
      question: "Sťahujete aj na dánske ostrovy?",
      answer:
        "Pre sťahovanie na menšie dánske ostrovy vyžaduje trasa loď — realizujeme ho individuálne.",
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
        benefits={["Kodaň, Aarhus, Odense a ďalšie", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          title="Často kladené otázky — sťahovanie do Dánska"
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
          { title: "Sťahovanie do Švédska", description: "Profesionálne sťahovanie do Švédska.", href: "/medzinarodne-stahovanie/svedsko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Nórska", description: "Preprava do Nórska.", href: "/medzinarodne-stahovanie/norsko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
