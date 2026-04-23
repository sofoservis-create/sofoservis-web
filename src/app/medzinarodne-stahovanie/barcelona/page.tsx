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
  title: "Sťahovanie do Barcelony zo Slovenska | Sofoservis",
  description:
    "Profesionálne medzinárodné sťahovanie do Barcelony zo Slovenska. Zabalíme, prevezieme a vyložíme. Fixná cena, poistenie. Kalkulácia zadarmo.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/barcelona",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/barcelona",
      en: "https://www.sofoservis.sk/en/moving-to-barcelona",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/barcelona",
    },
  },
  keywords:
    "sťahovanie do Barcelony, preprava Slovensko Barcelona, sťahovanie Barcelona, medzinárodné sťahovanie Barcelona, sťahovanie do Španielska Barcelona",
  openGraph: {
    title: "Sťahovanie do Barcelony zo Slovenska | Sofoservis",
    description:
      "Sťahovanie do Barcelony zo Slovenska — 1 900 km. Poistenie zahrnuté, transparentná cena.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/barcelona",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieBarcelonaPage() {
  const heroData = {
    title: "Sťahovanie do Barcelony",
    description:
      "Sťahujeme zo Slovenska do Barcelony — katalánskej metropoly na pobreží Stredozemného mora. Vzdialenosť cca 1 900 km, tranzitný čas 2–3 dni. Zabalíme.",
    formTitle: "Cenová ponuka — sťahovanie do Barcelony",
    formSubtitle: "Vyplňte formulár pre rýchlu kalkuláciu zadarmo",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Prečo sťahovať do Barcelony cez Sofoservis",
    description:
      "Barcelona — mesto umenia a mora. Zabezpečíme hladký priebeh vášho sťahovania do Španielska.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie bytov do Barcelony",
        description:
          "Kompletné sťahovanie domácností vrátane odborného balenia na dlhú trasu.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie",
        description:
          "Profesionálny presun kancelárií a firiem zo Slovenska do Barcelony.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Celá Barcelona a okolie",
        description:
          "Sťahujeme do všetkých častí Barcelony aj do okolitých miest v Katalánsku.",
        link: "/medzinarodne-stahovanie/spanielsko",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Bez colných formalít",
        description:
          "Španielsko je členom EÚ — sťahovanie osobných vecí prebieha bez prekážok.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Zosilnené balenie",
        description:
          "Používame najkvalitnejšie materiály, aby sme ochránili veci počas 1 900 km trasy.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie v cene",
        description:
          "Každé medzinárodné sťahovanie je kryté poistením počas celej prepravy.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako dlho trvá sťahovanie zo Slovenska do Barcelony?",
      answer:
        "Vzdialenosť je približne 1 900 km. Samotná preprava trvá zvyčajne 2–3 dni v závislosti od konkrétnej trasy a podmienok.",
    },
    {
      question: "Koľko stojí sťahovanie do Barcelony?",
      answer:
        "Cena je individuálna a závisí od objemu sťahovaných vecí a doplnkových služieb. Kontaktujte nás pre nezáväznú kalkuláciu na mieru.",
    },
    {
      question: "Sťahujete aj v opačnom smere, z Barcelony na Slovensko?",
      answer:
        "Áno, pravidelne realizujeme sťahovania v rámci celej Európy v oboch smeroch.",
    },
    {
      question: "Musím si veci zabaliť sám?",
      answer:
        "Ponúkame kompletný servis — ak si prajete, naši pracovníci všetko profesionálne zabalia do certifikovaných materiálov.",
    },
    {
      question: "Je sťahovanie do Španielska komplikované kvôli hraniciam?",
      answer:
        "Nie, keďže Slovensko aj Španielsko sú v EÚ, sťahovanie osobného majetku nepodlieha colnému konaniu.",
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
          benefits={["Slovensko – Barcelona ~1 900 km", "Tranzitný čas 2–3 dni", "Poistenie a fixná cena"]}
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
          benefits={["Slovensko – Barcelona ~1 900 km", "Tranzitný čas 2–3 dni", "Poistenie a fixná cena"]}
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
          title="Často kladené otázky — sťahovanie do Barcelony"
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
          { title: "Sťahovanie do Španielska", description: "Sťahovanie do celého Španielska.", href: "/medzinarodne-stahovanie/spanielsko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Francúzska", description: "Preprava do Francúzska.", href: "/medzinarodne-stahovanie/francuzsko", icon: "/icons/globe_icon.svg" },
          { title: "Medzinárodné sťahovanie", description: "Sťahovanie do celej Európy.", href: "/medzinarodne-stahovanie", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
