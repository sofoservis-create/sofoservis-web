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
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import LocationMap from "@/components/sections/LocationMap";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Odvoz stavebného odpadu Nitra — rýchlo | Sofoservis",
  description:
    "Profesionálny odvoz a likvidácia stavebného odpadu v Nitre a okolí ✅ Rýchle pristavenie kontajnera ✅ Férové ceny ✅ Odvoz sute a odpadu po rekonštrukcii",
  alternates: {
    canonical: "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu/nitra",
    languages: {
      sk: "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu/nitra",
      en: "https://www.sofoservis.sk/en/construction-waste-removal-nitra",
      "x-default": "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu/nitra",
    },
  },
};

export default function OdvozStavebnehoOdpaduNitraPage() {
  const faqItems = [
    {
      question: "Koľko stojí kontajner na stavebný odpad v Nitre?",
      answer:
        "Cena za prenájom kontajnera v Nitre a okolí začína od 70€ do 150€ za objem 5-7m³. Konečná cena závisí od typu odpadu a presnej lokality.",
    },
    {
      question: "Aké typy odpadu v Nitre odvážate?",
      answer:
        "Odvážame všetok stavebný odpad: tehly, betón, omietky, sadrokartón, staré okná, podlahy a zmiešaný stavebný odpad.",
    },
    {
      question: "Ako rýchlo viete pristaviť kontajner v Nitre?",
      answer:
        "V rámci Nitry a okolia vieme kontajner pristaviť zvyčajne do 24-48 hodín od objednávky.",
    },
    {
      question: "Potrebujem v Nitre povolenie na kontajner?",
      answer:
        "Ak kontajner stojí na vašom pozemku, povolenie nepotrebujete. Ak má stáť na verejnom priestranstve, je potrebné vybaviť povolenie na miestnom úrade.",
    },
  ];

  const heroData = {
    title: "Odvoz stavebného odpadu Nitra",
    description:
      "Rýchly a spoľahlivý odvoz stavebného odpadu a sute v Nitre a okolí. Zabezpečíme pristavenie kontajnera a jeho ekologickú likvidáciu s potvrdením.",
    formTitle: "Získajte cenovú ponuku",
    formSubtitle: "Kalkulácia odvozu odpadu v Nitre",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Služby odvozu odpadu v Nitre",
    description: "Kompletné riešenie pre váš stavebný odpad po rekonštrukcii alebo stavbe.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Rýchly odvoz sute",
        description: "Expresný odvoz stavebnej sute a odpadu v Nitre a priľahlých obciach.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/container_icon.svg",
        title: "Pristavenie kontajnerov",
        description: "Prenájom kontajnerov rôznych veľkostí pre vaše potreby.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Ekologická likvidácia",
        description: "Odpad vozíme výhradne na legálne skládky a recyklačné dvory.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Doklad o likvidácii",
        description: "Ku každej zákazke vystavujeme potvrdenie o legálnej likvidácii odpadu.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
    ],
  };

  const nitraLocations = [
    { name: "Nitra", href: "/odvoz-likvidacia-stavebneho-odpadu/nitra" },
    { name: "Zlaté Moravce", href: "/odvoz-likvidacia-stavebneho-odpadu/nitra" },
    { name: "Vráble", href: "/odvoz-likvidacia-stavebneho-odpadu/nitra" },
    { name: "Šaľa", href: "/odvoz-likvidacia-stavebneho-odpadu/nitra" },
    { name: "Hlohovec", href: "/odvoz-likvidacia-stavebneho-odpadu/nitra" },
  ];

  return (
    <main className="bg-white">
      <link rel="preload"
        href="/images/mascot/buranie-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/buranie-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)" fetchPriority="high" />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title={heroData.title}
          description={heroData.description}
          formTitle={heroData.formTitle}
          formSubtitle={heroData.formSubtitle}
          backgroundImage={heroData.backgroundImage}
          benefits={["Pristavenie do 48h", "Férové ceny", "Legálna likvidácia"]}
          mascotSrc="/images/mascot/buranie-mascot.svg"
          desktopMascotDynamicHeight
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title={heroData.title}
          description={heroData.description}
          formTitle={heroData.formTitle}
          formSubtitle={heroData.formSubtitle}
          backgroundImage={heroData.backgroundImage}
          benefits={["Pristavenie do 48h", "Férové ceny", "Legálna likvidácia"]}
          showMascot
          mascotSrc="/images/mascot/buranie-mascot.svg"
          mobileMascotSrc="/images/mascot/buranie-mascot.svg"
          mobileMascotOffsetY={-24}
          mobileMascotScale={0.847}
          mobileFormOffsetY={39}
          pillsVariant="stahovanie"
        />
      </div>
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
          title="Odvoz odpadu v Nitre a okolí"
          description="Pôsobíme v Nitre a okolitých mestách a obciach."
          locations={nitraLocations}
          additionalText="Obsluhujeme aj priľahlé obce v okrese Nitra."
        />
      </div>
      <InstagramFeed />
      <GoogleReviews showReviewsShowcase={false} />
      <FAQ
        title="Často kladené otázky o odvoze odpadu v Nitre"
        items={faqItems}
      />
      <FAQJsonLd items={faqItems} />
      <CTA
        title="Potrebujete odvoz odpadu v Nitre?"
        description="Kontaktujte nás pre rýchle nacenenie a rezerváciu termínu. Odvezieme vašu suť profesionálne a legálne."
        buttonText="Získať ponuku"
      />
      <ServicePricing filter={["buracie-prace", "vypratavanie"]} />
      <TrustBadges />
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Odvoz odpadu", description: "Kompletné služby odvozu.", href: "/odvoz-likvidacia-stavebneho-odpadu", icon: "/icons/truck_icon.svg" },
          { title: "Vypratávanie Nitra", description: "Odvoz starého nábytku.", href: "/vypratavanie-nitra", icon: "/icons/vypratavanie_icon.svg" },
        ]}
      />
    </main>
  );
}
