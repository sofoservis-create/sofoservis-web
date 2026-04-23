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
  title: "Sťahovanie do Ríma zo Slovenska | Sofoservis",
  description:
    "Profesionálne medzinárodné sťahovanie do Ríma zo Slovenska. Vzdialenosť 1 200 km, tranzit 1-2 dni. Fixná cena, poistenie zahrnuté a skúsený tím.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/rim",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/rim",
      en: "https://www.sofoservis.sk/en/moving-to-rome",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/rim",
    },
  },
  keywords:
    "sťahovanie do Ríma, preprava Slovensko Rím, sťahovanie Rím, medzinárodné sťahovanie Rím, sťahovanie do Talianska",
  openGraph: {
    title: "Sťahovanie do Ríma zo Slovenska | Sofoservis",
    description:
      "Sťahovanie do Ríma zo Slovenska — 1 200 km. Poistenie zahrnuté, transparentná cena.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/rim",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieRimPage() {
  const heroData = {
    title: "Sťahovanie do Ríma",
    description:
      "Zabezpečujeme sťahovanie zo Slovenska do Ríma — večného mesta v srdci Talianska. Vzdialenosť cca 1 200 km, tranzitný čas 1–2 dni. S naším skúseným tímom.",
    formTitle: "Cenová ponuka — sťahovanie do Ríma",
    formSubtitle: "Vyplňte formulár pre rýchlu kalkuláciu zadarmo",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Prečo sťahovať do Ríma cez Sofoservis",
    description:
      "Rím — mesto histórie a kultúry. Postaráme sa o váš hladký presun do talianskej metropoly.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie bytov do Ríma",
        description:
          "Kompletné sťahovanie domácností zo Slovenska priamo na taliansku adresu.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie",
        description:
          "Profesionálne presťahovanie vašej kancelárie do Ríma s minimálnym prerušením práce.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Celý Rím a okolie",
        description:
          "Sťahujeme do všetkých štvrtí Ríma aj do okolitých miest v regióne Lazio.",
        link: "/medzinarodne-stahovanie/taliansko",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Bez hraníc",
        description:
          "Taliansko je v EÚ — preprava osobného majetku je bez colných zdržaní.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Kvalitné balenie",
        description:
          "Váš nábytok a krehké predmety zabalíme tak, aby bezpečne zvládli cestu cez Alpy.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie v cene",
        description:
          "Každá medzinárodná preprava je krytá poistením pre váš maximálny pokoj.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako dlho trvá sťahovanie zo Slovenska do Ríma?",
      answer:
        "Vzdialenosť je približne 1 200 km. Preprava sťahovacím vozidlom trvá zvyčajne 1 až 2 dni.",
    },
    {
      question: "Sťahujete aj z Ríma na Slovensko?",
      answer:
        "Áno, pravidelne realizujeme medzinárodné sťahovania v oboch smeroch.",
    },
    {
      question: "Aká je cena sťahovania do Ríma?",
      answer:
        "Cena sa odvíja od objemu sťahovaných vecí. Kontaktujte nás a my vám vypracujeme bezplatnú kalkuláciu na mieru.",
    },
    {
      question: "Máte skúsenosti so sťahovaním v historickom centre Ríma?",
      answer:
        "Áno, centrum Ríma má úzke uličky a obmedzenia, vieme však zabezpečiť vhodné vozidlo a potrebné povolenia.",
    },
    {
      question: "Zabezpečujete aj parkovanie pred domom?",
      answer:
        "Poradíme vám, ako vybaviť parkovanie, prípadne pomôžeme s koordináciou miestnych úradov.",
    },
  ];

  return (
    <main className="bg-white">
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
          title={heroData.title}
          description={heroData.description}
          formTitle={heroData.formTitle}
          formSubtitle={heroData.formSubtitle}
          backgroundImage={heroData.backgroundImage}
          benefits={["Slovensko – Rím ~1 200 km", "Tranzit 1–2 dni", "Poistenie a fixná cena"]}
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          desktopMascotScaleMultiplier={1.03}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title={heroData.title}
          description={heroData.description}
          formTitle={heroData.formTitle}
          formSubtitle={heroData.formSubtitle}
          backgroundImage={heroData.backgroundImage}
          benefits={["Slovensko – Rím ~1 200 km", "Tranzit 1–2 dni", "Poistenie a fixná cena"]}
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
          title="Často kladené otázky — sťahovanie do Ríma"
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
          { title: "Sťahovanie do Talianska", description: "Sťahovanie do celého Talianska.", href: "/medzinarodne-stahovanie/taliansko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Rakúska", description: "Preprava do Rakúska.", href: "/medzinarodne-stahovanie/rakusko", icon: "/icons/globe_icon.svg" },
          { title: "Medzinárodné sťahovanie", description: "Sťahovanie do celej Európy.", href: "/medzinarodne-stahovanie", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
