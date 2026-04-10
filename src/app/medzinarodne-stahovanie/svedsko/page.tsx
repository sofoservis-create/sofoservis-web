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
  title: "Sťahovanie do Švédska zo Slovenska | Sofoservis",
  description:
    "Profesionálne sťahovanie do Švédska a zo Švédska na Slovensko. Trasy do Štokholmu, Göteborgu, Malmö. Transparentné ceny, poistenie zahrnuté.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/svedsko",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/svedsko",
      en: "https://www.sofoservis.sk/en/moving-to-sweden",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/svedsko",
    },
  },
  keywords:
    "sťahovanie do Švédska, medzinárodné sťahovanie Švédsko, preprava do Štokholmu, sťahovanie Slovensko Švédsko, sťahovanie Göteborg",
  openGraph: {
    title: "Sťahovanie do Švédska zo Slovenska | Sofoservis",
    description:
      "Profesionálne sťahovanie do Švédska. Trasy do Štokholmu, Göteborgu. Poistenie zahrnuté.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/svedsko",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovaneSvedskoPage() {
  const heroData = {
    title: "Sťahovanie do Švédska",
    description:
      "Profesionálne medzinárodné sťahovanie zo Slovenska do Švédska. Štokholm (1 700 km), Göteborg (1 650 km) — dlhá trasa zvládnutá s naším skúseným tímom.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Sťahovanie do Švédska — kalkulácia zadarmo",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  const featuresData = {
    title: "Prečo sťahovať do Švédska cez Sofoservis",
    description:
      "Švédsko v EÚ — skandinávska destinácia oblíbená pre prácu aj životné príležitosti.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie domácností",
        description:
          "Kompletné sťahovanie bytu alebo domu zo Slovenska do Švédska vrátane balenia a prepravy.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie",
        description:
          "Presun kancelárií a firiem zo Slovenska do Švédska s komplexnou logistikou.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Štokholm a celé Švédsko",
        description:
          "Sťahujeme do Štokholmu, Göteborgu, Malmö, Uppsaly a ďalších švédskych miest.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/document_icon.svg",
        title: "EÚ formality",
        description:
          "Švédsko je v EÚ — žiadne colné poplatky na osobné veci pri sťahovaní.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Zosilnené balenie",
        description:
          "Pre dlhú trasu cez severnú Európu používame zosilnené baliace materiály.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie prepravy",
        description:
          "Váš majetok je poistený počas celej trasy zo Slovenska do Švédska.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako dlho trvá sťahovanie z Bratislavy do Štokholmu?",
      answer:
        "Vzdialenosť Bratislava – Štokholm je cca 1 700 km vrátane prechodu cez most Öresund alebo loďou. Realizujeme to ako 2-dňovú expedíciu.",
    },
    {
      question: "Potrebujem špeciálne dokumenty na sťahovanie do Švédska?",
      answer:
        "Švédsko je v EÚ, takže colné formality sú minimálne. Stačí doklad totožnosti a inventárny zoznam vecí.",
    },
    {
      question: "Sťahujete aj zo Švédska späť na Slovensko?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch.",
    },
    {
      question: "Aká je cena sťahovania do Göteborgu?",
      answer:
        "Göteborg je na juhozápade Švédska — vzdialenosť je podobná ako do Štokholmu. Kontaktujte nás pre bezplatnú kalkuláciu.",
    },
    {
      question: "Je potrebná lodná preprava pri sťahovaní do Švédska?",
      answer:
        "Závisí od trasy. Niektoré trate vedú cez Dánsko a most Öresund bez potreby lode. Konkrétnu trasu určíme pri objednávke.",
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
        benefits={["Štokholm, Göteborg, Malmö a ďalšie", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          title="Často kladené otázky — sťahovanie do Švédska"
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
          { title: "Sťahovanie do Nórska", description: "Profesionálne sťahovanie do Nórska.", href: "/medzinarodne-stahovanie/norsko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Dánska", description: "Preprava do Dánska.", href: "/medzinarodne-stahovanie/dansko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
