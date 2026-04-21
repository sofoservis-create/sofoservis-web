import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
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
  title: "Sťahovanie z Francúzska na Slovensko | Sofoservis",
  description:
    "Profesionálne sťahovanie z Francúzska na Slovensko. Trasy z Paríža, Lyonu, Marseille a ďalších francúzskych miest. Doručenie 3–5 dní, bez colných formalít.",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-z-francuzska-na-slovensko",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-z-francuzska-na-slovensko",
      en: "https://www.sofoservis.sk/en/moving-from-france-to-slovakia",
      "x-default": "https://www.sofoservis.sk/stahovanie-z-francuzska-na-slovensko",
    },
  },
  keywords:
    "sťahovanie z Francúzska na Slovensko, sťahovanie z Paríža na Slovensko, medzinárodné sťahovanie Francúzsko Slovensko",
  openGraph: {
    title: "Sťahovanie z Francúzska na Slovensko | Sofoservis",
    description: "Profesionálne sťahovanie z Francúzska na Slovensko. Trasy z Paríža, Lyonu, Marseille a ďalších francúzskych miest. Doručenie 3–5 dní, bez colných formalít.",
    url: "https://www.sofoservis.sk/stahovanie-z-francuzska-na-slovensko",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieZFrancuzskaNaSlovenskoPage() {
  const featuresData = {
    title: "Sťahovanie z Francúzska na Slovensko — Spoľahlivá preprava",
    description:
      "Profesionálne medzinárodné sťahovanie zo zahraničia na Slovensko. Skúsený tím, poistenie zahrnuté.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Pravidelné trasy z Francúzska",
        description: "Prevádzkujeme trasy z Francúzska na Slovensko — doručenie 3–5 dní.",
        link: "/stahovanie-z-francuzska-na-slovensko",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Celé Francúzsko",
        description: "Paríž, Lyon, Marseille, Toulouse, Bordeaux, Nice a všetky ďalšie francúzske mestá.",
        link: "/stahovanie-z-francuzska-na-slovensko",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Bez colných formalít",
        description: "EÚ-EÚ preprava — bez colných poplatkov a byrokracie.",
        link: "/stahovanie-z-francuzska-na-slovensko",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Profesionálne balenie",
        description: "Zosilnené baliace materiály pre dlhé trasy cez Európu.",
        link: "/stahovanie-z-francuzska-na-slovensko",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistená preprava",
        description: "Všetky veci sú poistené počas celej trasy z Francúzska na Slovensko.",
        link: "/stahovanie-z-francuzska-na-slovensko",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Montáž nábytku",
        description: "Demontáž vo Francúzsku, opätovná montáž na Slovensku.",
        link: "/stahovanie-z-francuzska-na-slovensko",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako dlho trvá preprava z Francúzska na Slovensko?",
      answer: "Preprava z Francúzska na Slovensko trvá štandardne 3–5 pracovných dní. Z Paríža a severného Francúzska je to rýchlejšie než z južného Francúzska.",
    },
    {
      question: "Sú potrebné colné formality pri sťahovaní z Francúzska na Slovensko?",
      answer: "Nie — obe krajiny sú v EÚ. Žiadne colné formality nie sú potrebné pri sťahovaní osobných vecí.",
    },
    {
      question: "Z akých miest vo Francúzsku zbieráte tovar?",
      answer: "Zbierame z celého Francúzska — Paríž, Lyon, Marseille, Toulouse, Bordeaux, Nice, Nantes, Štrasburg a všetky ostatné francúzske mestá a regióny.",
    },
    {
      question: "Môžem sa vrátiť aj z Francúzska späť na Slovensko po čiastočnom presťahovaní?",
      answer: "Áno, ponúkame skupinovú (grupážnu) prepravu pre menšie objemy, čo je ideálne, ak máte len niekoľko krabíc alebo kusov nábytku.",
    },
    {
      question: "Je prepravné poistenie zahrnuté?",
      answer: "Áno, všetky veci sú kryté prepravným poistením počas celej trasy z Francúzska na Slovensko.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
      <link
        rel="preload"
        href="/images/mascot/mascot-holding-boxes-mobile.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)"
      />
      <link
        rel="preload"
        href="/images/mascot/mascot-holding-boxes.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)"
      />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title="Sťahovanie z Francúzska na Slovensko"
          description="Vraciate sa z Francúzska na Slovensko? Sofoservis prevádzkuje trasy z Paríža, Lyonu, Marseille, Toulouse, Bordeaux a všetkých francúzskych miest priamo na vaše nové slovenské bydlisko."
          formTitle="Získajte bezplatnú cenovú ponuku"
          formSubtitle="Sťahovanie na Slovensko — kalkulácia zadarmo"
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          desktopMascotScaleMultiplier={1.03}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Sťahovanie z Francúzska na Slovensko"
          description="Vraciate sa z Francúzska na Slovensko? Sofoservis prevádzkuje trasy z Paríža, Lyonu, Marseille, Toulouse, Bordeaux a všetkých francúzskych miest priamo na vaše nové slovenské bydlisko."
          formTitle="Získajte bezplatnú cenovú ponuku"
          formSubtitle="Sťahovanie na Slovensko — kalkulácia zadarmo"
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
          showMascot
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          mobileMascotSrc="/images/mascot/mascot-holding-boxes-mobile.svg"
          mobileMascotOffsetY={-44}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>
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
          title="Často kladené otázky — sťahovanie z francúzska na slovensko"
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
          { title: "Sťahovanie do Francúzska", description: "Sťahovanie zo Slovenska do Francúzska.", href: "/medzinarodne-stahovanie/francuzsko", icon: "/icons/globe_icon.svg" },
          { title: "Medzinárodné sťahovanie", description: "Všetky medzinárodné trasy.", href: "/medzinarodne-stahovanie", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie na Slovensko", description: "Prehľad všetkých trás na Slovensko.", href: "/stahovanie-na-slovensko", icon: "/icons/truck_icon.svg" },
          { title: "Montáž nábytku", description: "Profesionálna montáž nábytku.", href: "/montaz-nabytku", icon: "/icons/wrench_icon.svg" },
        ]}
      />
    </main>
  );
}
