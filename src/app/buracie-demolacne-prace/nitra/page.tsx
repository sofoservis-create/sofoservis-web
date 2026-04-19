import React from "react";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import LocationMap from "@/components/sections/LocationMap";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Búracie práce Nitra — priečky, obklady | Sofoservis",
  description:
    "Profesionálne búracie práce v Nitre a okolí ✅ Búranie priečok, bytových jadier, obkladov a dlažieb ✅ Odvoz sute zabezpečený ✅ Obhliadka zadarmo",
  alternates: {
    canonical: "https://www.sofoservis.sk/buracie-demolacne-prace/nitra",
    languages: {
      sk: "https://www.sofoservis.sk/buracie-demolacne-prace/nitra",
      en: "https://www.sofoservis.sk/en/demolition-nitra",
      "x-default": "https://www.sofoservis.sk/buracie-demolacne-prace/nitra",
    },
  },
};

export default function BuraciePraceNitraPage() {
  const faqItems = [
    {
      question: "Koľko stojí búranie priečky v Nitre?",
      answer:
        "Cena búrania priečky v Nitre začína od 10€ do 20€ za m² v závislosti od materiálu. K cene sa pripočítava odvoz sute.",
    },
    {
      question: "Ako dlho trvá búranie v byte v Nitre?",
      answer:
        "Búranie bytového jadra alebo priečok v Nitre zvyčajne trvá 1 až 3 pracovné dni vrátane odvozu odpadu.",
    },
    {
      question: "Odveziete po búraní v Nitre aj sutiny?",
      answer:
        "Áno, zabezpečujeme kompletný odvoz a legálnu likvidáciu stavebnej sute v rámci celej Nitry a okolia.",
    },
    {
      question: "Potrebujem v Nitre na búranie povolenie?",
      answer:
        "Na búranie nenosných priečok v Nitre zvyčajne stačí ohlásenie stavebnému úradu. Pri nosných stenách je nevyhnutné stavebné povolenie.",
    },
  ];

  const heroData = {
    title: "Búracie práce Nitra",
    description:
      "Realizujeme búracie a demolačné práce v Nitre pre byty, domy aj kancelárie. Odborné búranie priečok, jadier a interiérov s minimálnym prachom a hlukom.",
    formTitle: "Bezplatná cenovú ponuka",
    formSubtitle: "Kalkulácia búracích prác v Nitre",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Búracie služby v Nitre",
    description: "Profesionálne búranie s dôrazom na bezpečnosť a čistotu.",
    features: [
      {
        image: "/icons/wrecking_ball_icon.svg",
        title: "Búranie priečok a jadier",
        description: "Búranie nenosných stien a jadier v Nitre a okolí.",
        link: "/buracie-demolacne-prace",
      },
      {
        image: "/icons/hammer_icon.svg",
        title: "Búranie podláh a dlažieb",
        description: "Odstraňovanie starých podláh, obkladov a dlažieb v Nitre.",
        link: "/buracie-demolacne-prace",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Odvoz stavebnej sute",
        description: "Kompletný servis odvozu odpadu po búraní v Nitre.",
        link: "/odvoz-likvidacia-stavebneho-odpadu/nitra",
      },
      {
        image: "/icons/safety_icon.svg",
        title: "Bezpečný postup",
        description: "Pracujeme opatrne s ohľadom na susedov a spoločné priestory.",
        link: "/buracie-demolacne-prace",
      },
    ],
  };

  const nitraLocations = [
    { name: "Nitra", href: "/buracie-demolacne-prace/nitra" },
    { name: "Zlaté Moravce", href: "/buracie-demolacne-prace/nitra" },
    { name: "Vráble", href: "/buracie-demolacne-prace/nitra" },
    { name: "Šurany", href: "/buracie-demolacne-prace/nitra" },
  ];

  return (
    <main className="bg-white">
      <Hero
        title={heroData.title}
        description={heroData.description}
        formTitle={heroData.formTitle}
        formSubtitle={heroData.formSubtitle}
        backgroundImage={heroData.backgroundImage}
        benefits={["Obhliadka zadarmo", "Minimálna prašnosť", "Odvoz sute v cene"]}
      />
      <Clients />
      <GoogleReviews />
      <HowItWorks />
      <Reviews showHeadline={true} />
      <Features
        title={featuresData.title}
        description={featuresData.description}
        features={featuresData.features}
      />
      <div className="md:mb-[-100px]">
        <LocationMap
          title="Búracie práce v Nitre a okolí"
          description="Pôsobíme v meste Nitra a priľahlých obciach."
          locations={nitraLocations}
          additionalText="Realizujeme búranie aj v okresoch Nitra, Šaľa a Zlaté Moravce."
        />
      </div>
      <InstagramFeed />
      <GoogleReviews showReviewsShowcase={false} />
      <FAQ
        title="Často kladené otázky o búracích prácach v Nitre"
        items={faqItems}
      />
      <FAQJsonLd items={faqItems} />
      <CTA
        title="Plánujete búranie v Nitre?"
        description="Získajte nezáväznú cenovú ponuku. Prídeme, obhliadneme a navrhneme najlepší postup pre vaše búracie práce."
        buttonText="Dohodnúť obhliadku"
      />
      <ServicePricing filter={["buracie-prace", "vypratavanie"]} />
      <TrustBadges />
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Odvoz odpadu Nitra", description: "Likvidácia sute po búraní.", href: "/odvoz-likvidacia-stavebneho-odpadu/nitra", icon: "/icons/truck_icon.svg" },
          { title: "Búracie práce", description: "Kompletné služby búrania.", href: "/buracie-demolacne-prace", icon: "/icons/wrecking_ball_icon.svg" },
        ]}
      />
    </main>
  );
}
