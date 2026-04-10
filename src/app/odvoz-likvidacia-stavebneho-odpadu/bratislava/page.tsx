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
  title: "Odvoz stavebného odpadu Bratislava — rýchlo | Sofoservis",
  description:
    "Profesionálny odvoz a likvidácia stavebného odpadu v Bratislave ✅ Rýchle pristavenie kontajnera ✅ Férové ceny ✅ Odvoz sute a odpadu po rekonštrukcii",
  alternates: {
    canonical: "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu/bratislava",
    languages: {
      sk: "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu/bratislava",
      en: "https://www.sofoservis.sk/en/construction-waste-removal-bratislava",
      "x-default": "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu/bratislava",
    },
  },
};

export default function OdvozStavebnehoOdpaduBratislavaPage() {
  const faqItems = [
    {
      question: "Koľko stojí kontajner na stavebný odpad v Bratislave?",
      answer:
        "Cena za prenájom kontajnera v Bratislave začína od 70€ do 150€ za objem 5-7m³. Konečná cena závisí od typu odpadu a lokality v rámci Bratislavy.",
    },
    {
      question: "Aké typy odpadu v Bratislave odvážate?",
      answer:
        "Odvážame všetok stavebný odpad: tehly, betón, omietky, sadrokartón, staré okná, podlahy a zmiešaný stavebný odpad.",
    },
    {
      question: "Ako rýchlo viete pristaviť kontajner v Bratislave?",
      answer:
        "V rámci Bratislavy a okolia vieme kontajner pristaviť zvyčajne do 24 hodín od objednávky, v urgentných prípadoch aj v ten istý deň.",
    },
    {
      question: "Potrebujem v Bratislave povolenie na kontajner?",
      answer:
        "Ak kontajner stojí na vašom pozemku, povolenie nepotrebujete. Ak má stáť na verejnom priestranstve (chodník, cesta), je potrebné vybaviť povolenie na záber verejného priestranstva na miestnom úrade danej mestskej časti.",
    },
  ];

  const heroData = {
    title: "Odvoz stavebného odpadu Bratislava",
    description:
      "Rýchly a spoľahlivý odvoz stavebného odpadu a sute v Bratislave a okolí. Zabezpečíme pristavenie kontajnera, naloženie odpadu a jeho ekologickú likvidáciu.",
    formTitle: "Získajte cenovú ponuku",
    formSubtitle: "Kalkulácia odvozu odpadu v Bratislave",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  const featuresData = {
    title: "Služby odvozu odpadu v Bratislave",
    description: "Kompletné riešenie pre váš stavebný odpad po rekonštrukcii alebo stavbe.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Rýchly odvoz sute",
        description: "Expresný odvoz stavebnej sute a odpadu v rámci všetkých mestských častí Bratislavy.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/container_icon.svg",
        title: "Pristavenie kontajnerov",
        description: "Prenájom kontajnerov rôznych veľkostí (5m³, 7m³, 10m³) pre vaše potreby.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Ekologická likvidácia",
        description: "Odpad vozíme výhradne na legálne skládky a recyklačné dvory v Bratislave.",
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

  const bratislavaDistricts = [
    { name: "Staré Mesto", href: "/odvoz-likvidacia-stavebneho-odpadu/bratislava" },
    { name: "Ružinov", href: "/odvoz-likvidacia-stavebneho-odpadu/bratislava" },
    { name: "Petržalka", href: "/odvoz-likvidacia-stavebneho-odpadu/bratislava" },
    { name: "Nové Mesto", href: "/odvoz-likvidacia-stavebneho-odpadu/bratislava" },
    { name: "Dúbravka", href: "/odvoz-likvidacia-stavebneho-odpadu/bratislava" },
    { name: "Karlova Ves", href: "/odvoz-likvidacia-stavebneho-odpadu/bratislava" },
    { name: "Rača", href: "/odvoz-likvidacia-stavebneho-odpadu/bratislava" },
  ];

  return (
    <main className="bg-white">
      <Hero
        title={heroData.title}
        description={heroData.description}
        formTitle={heroData.formTitle}
        formSubtitle={heroData.formSubtitle}
        backgroundImage={heroData.backgroundImage}
        benefits={["Pristavenie do 24h", "Férové ceny", "Legálna likvidácia"]}
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
          title="Odvoz odpadu po celej Bratislave"
          description="Pôsobíme vo všetkých mestských častiach Bratislavy a blízkom okolí."
          locations={bratislavaDistricts}
          additionalText="Obsluhujeme aj priľahlé obce: Stupava, Ivanka pri Dunaji, Bernolákovo, Chorvátsky Grob a ďalšie."
        />
      </div>
      <InstagramFeed />
      <GoogleReviews showReviewsShowcase={false} />
      <FAQ
        title="Často kladené otázky o odvoze odpadu v Bratislave"
        items={faqItems}
      />
      <FAQJsonLd items={faqItems} />
      <CTA
        title="Potrebujete odvoz odpadu v Bratislave?"
        description="Kontaktujte nás pre rýchle nacenenie a rezerváciu termínu. Odvezieme vašu suť profesionálne a legálne."
        buttonText="Získať ponuku"
      />
      <ServicePricing filter={["buracie-prace", "vypratavanie"]} />
      <TrustBadges />
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Búracie práce Bratislava", description: "Búranie priečok a interiérov.", href: "/buracie-demolacne-prace/bratislava", icon: "/icons/wrecking_ball_icon.svg" },
          { title: "Odvoz odpadu", description: "Kompletné služby odvozu.", href: "/odvoz-likvidacia-stavebneho-odpadu", icon: "/icons/truck_icon.svg" },
          { title: "Vypratávanie Bratislava", description: "Odvoz starého nábytku.", href: "/vypratavanie-bratislava", icon: "/icons/vypratavanie_icon.svg" },
        ]}
      />
    </main>
  );
}
