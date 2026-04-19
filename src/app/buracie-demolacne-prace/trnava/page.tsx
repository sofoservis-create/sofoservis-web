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
  title: "Búracie práce Trnava — priečky, obklady | Sofoservis",
  description:
    "Profesionálne búracie práce v Trnave a okolí ✅ Búranie priečok, bytových jadier, obkladov a dlažieb ✅ Odvoz sute zabezpečený ✅ Obhliadka zadarmo",
  alternates: {
    canonical: "https://www.sofoservis.sk/buracie-demolacne-prace/trnava",
    languages: {
      sk: "https://www.sofoservis.sk/buracie-demolacne-prace/trnava",
      en: "https://www.sofoservis.sk/en/demolition-trnava",
      "x-default": "https://www.sofoservis.sk/buracie-demolacne-prace/trnava",
    },
  },
};

export default function BuraciePraceTrnavaPage() {
  const faqItems = [
    {
      question: "Koľko stojí búranie priečky v Trnave?",
      answer:
        "Cena búrania priečky v Trnave začína od 10€ do 20€ za m² v závislosti od materiálu. K cene sa pripočítava odvoz sute.",
    },
    {
      question: "Ako dlho trvá búranie v byte v Trnave?",
      answer:
        "Búranie bytového jadra alebo priečok v Trnave zvyčajne trvá 1 až 3 pracovné dni vrátane odvozu odpadu.",
    },
    {
      question: "Odveziete po búraní v Trnave aj sutiny?",
      answer:
        "Áno, zabezpečujeme kompletný odvoz a legálnu likvidáciu stavebnej sute v rámci celej Trnavy a okolia.",
    },
    {
      question: "Potrebujem v Trnave na búranie povolenie?",
      answer:
        "Na búranie nenosných priečok v Trnave zvyčajne stačí ohlásenie stavebnému úradu. Pri nosných stenách je nevyhnutné stavebné povolenie.",
    },
  ];

  const heroData = {
    title: "Búracie práce Trnava",
    description:
      "Realizujeme búracie a demolačné práce v Trnave pre byty, domy aj kancelárie. Odborné búranie priečok, jadier a interiérov s minimálnym prachom a hlukom.",
    formTitle: "Bezplatná cenová ponuka",
    formSubtitle: "Kalkulácia búracích prác v Trnave",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Búracie služby v Trnave",
    description: "Profesionálne búranie s dôrazom na bezpečnosť a čistotu.",
    features: [
      {
        image: "/icons/wrecking_ball_icon.svg",
        title: "Búranie priečok a jadier",
        description: "Búranie nenosných stien a jadier v Trnave a okolí.",
        link: "/buracie-demolacne-prace",
      },
      {
        image: "/icons/hammer_icon.svg",
        title: "Búranie podláh a dlažieb",
        description: "Odstraňovanie starých podláh, obkladov a dlažieb v Trnave.",
        link: "/buracie-demolacne-prace",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Odvoz stavebnej sute",
        description: "Kompletný servis odvozu odpadu po búraní v Trnave.",
        link: "/odvoz-likvidacia-stavebneho-odpadu/trnava",
      },
      {
        image: "/icons/safety_icon.svg",
        title: "Bezpečný postup",
        description: "Pracujeme opatrne s ohľadom na susedov a spoločné priestory.",
        link: "/buracie-demolacne-prace",
      },
    ],
  };

  const trnavaLocations = [
    { name: "Trnava", href: "/buracie-demolacne-prace/trnava" },
    { name: "Hlohovec", href: "/buracie-demolacne-prace/trnava" },
    { name: "Piešťany", href: "/buracie-demolacne-prace/trnava" },
    { name: "Senec", href: "/buracie-demolacne-prace/trnava" },
    { name: "Galanta", href: "/buracie-demolacne-prace/trnava" },
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
          title="Búracie práce v Trnave a okolí"
          description="Pôsobíme v meste Trnava a priľahlých obciach."
          locations={trnavaLocations}
          additionalText="Realizujeme búranie aj v okresoch Trnava, Hlohovec a Piešťany."
        />
      </div>
      <InstagramFeed />
      <GoogleReviews showReviewsShowcase={false} />
      <FAQ
        title="Často kladené otázky o búracích prácach v Trnave"
        items={faqItems}
      />
      <FAQJsonLd items={faqItems} />
      <CTA
        title="Plánujete búranie v Trnave?"
        description="Získajte nezáväznú cenovú ponuku. Prídeme, obhliadneme a navrhneme najlepší postup pre vaše búracie práce."
        buttonText="Dohodnúť obhliadku"
      />
      <ServicePricing filter={["buracie-prace", "vypratavanie"]} />
      <TrustBadges />
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Odvoz odpadu Trnava", description: "Likvidácia sute po búraní.", href: "/odvoz-likvidacia-stavebneho-odpadu/trnava", icon: "/icons/truck_icon.svg" },
          { title: "Búracie práce", description: "Kompletné služby búrania.", href: "/buracie-demolacne-prace", icon: "/icons/wrecking_ball_icon.svg" },
        ]}
      />
    </main>
  );
}
