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
  title: "Odvoz stavebného odpadu Senica — rýchlo | Sofoservis",
  description:
    "Profesionálny odvoz a likvidácia stavebného odpadu v Senici a okolí ✅ Rýchle pristavenie kontajnera ✅ Férové ceny ✅ Odvoz sute a odpadu po rekonštrukcii",
  alternates: {
    canonical: "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu/senica",
    languages: {
      sk: "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu/senica",
      en: "https://www.sofoservis.sk/en/construction-waste-removal-senica",
      "x-default": "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu/senica",
    },
  },
};

export default function OdvozStavebnehoOdpaduSenicaPage() {
  const faqItems = [
    {
      question: "Koľko stojí kontajner na stavebný odpad v Senici?",
      answer:
        "Cena za prenájom kontajnera v Senici a okolí začína od 70€ do 150€ za objem 5-7m³. Konečná cena závisí od typu odpadu a presnej lokality.",
    },
    {
      question: "Aké typy odpadu v Senici odvážate?",
      answer:
        "Odvážame všetok stavebný odpad: tehly, betón, omietky, sadrokartón, staré okná, podlahy a zmiešaný stavebný odpad.",
    },
    {
      question: "Ako rýchlo viete pristaviť kontajner v Senici?",
      answer:
        "V rámci Senice a okolia vieme kontajner pristaviť zvyčajne do 24-48 hodín od objednávky.",
    },
    {
      question: "Potrebujem v Senici povolenie na kontajner?",
      answer:
        "Ak kontajner stojí na vašom pozemku, povolenie nepotrebujete. Ak má stáť na verejnom priestranstve, je potrebné vybaviť povolenie na miestnom úrade.",
    },
  ];

  const heroData = {
    title: "Odvoz stavebného odpadu Senica",
    description:
      "Rýchly a spoľahlivý odvoz stavebného odpadu a sute v Senici a okolí. Zabezpečíme pristavenie kontajnera a jeho ekologickú likvidáciu s potvrdením.",
    formTitle: "Získajte cenovú ponuku",
    formSubtitle: "Kalkulácia odvozu odpadu v Senici",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Služby odvozu odpadu v Senici",
    description: "Kompletné riešenie pre váš stavebný odpad po rekonštrukcii alebo stavbe.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Rýchly odvoz sute",
        description: "Expresný odvoz stavebnej sute a odpadu v Senici a priľahlých obciach.",
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

  const senicaLocations = [
    { name: "Senica", href: "/odvoz-likvidacia-stavebneho-odpadu/senica" },
    { name: "Skalica", href: "/odvoz-likvidacia-stavebneho-odpadu/senica" },
    { name: "Holíč", href: "/odvoz-likvidacia-stavebneho-odpadu/senica" },
    { name: "Malacky", href: "/odvoz-likvidacia-stavebneho-odpadu/senica" },
  ];

  return (
    <main className="bg-white">
      <Hero
        title={heroData.title}
        description={heroData.description}
        formTitle={heroData.formTitle}
        formSubtitle={heroData.formSubtitle}
        backgroundImage={heroData.backgroundImage}
        benefits={["Pristavenie do 48h", "Férové ceny", "Legálna likvidácia"]}
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
          title="Odvoz odpadu v Senici a okolí"
          description="Pôsobíme v Senici a okolitých mestách a obciach."
          locations={senicaLocations}
          additionalText="Obsluhujeme aj priľahlé obce v okrese Senica."
        />
      </div>
      <InstagramFeed />
      <GoogleReviews showReviewsShowcase={false} />
      <FAQ
        title="Často kladené otázky o odvoze odpadu v Senici"
        items={faqItems}
      />
      <FAQJsonLd items={faqItems} />
      <CTA
        title="Potrebujete odvoz odpadu v Senici?"
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
          { title: "Vypratávanie Senica", description: "Odvoz starého nábytku.", href: "/vypratavanie-senica", icon: "/icons/vypratavanie_icon.svg" },
        ]}
      />
    </main>
  );
}
