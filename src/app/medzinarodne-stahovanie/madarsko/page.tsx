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
  title: "Sťahovanie do Maďarska zo Slovenska | Sofoservis",
  description:
    "Profesionálne sťahovanie do Maďarska a z Maďarska na Slovensko. Trasa Bratislava – Budapešť len 200 km. Rýchla preprava, transparentné ceny, poistenie.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/madarsko",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/madarsko",
      en: "https://www.sofoservis.sk/en/moving-to-hungary",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/madarsko",
    },
  },
  keywords:
    "sťahovanie do Maďarska, medzinárodné sťahovanie Maďarsko, preprava do Budapešti, sťahovanie Bratislava Budapešť, sťahovanie Slovensko Maďarsko",
  openGraph: {
    title: "Sťahovanie do Maďarska zo Slovenska | Sofoservis",
    description:
      "Profesionálne sťahovanie do Maďarska. Trasa Bratislava – Budapešť len 200 km. Poistenie zahrnuté.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/madarsko",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieAdarskoPage() {
  const heroData = {
    title: "Sťahovanie do Maďarska",
    description:
      "Spoľahlivé medzinárodné sťahovanie zo Slovenska do Maďarska a z Maďarska späť. Trasa Bratislava – Budapešť je len 200 km — jedna z najkratších medzinárodných trás. Skúsený tím, rýchla preprava, poistenie zahrnuté.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Sťahovanie do Maďarska — kalkulácia zadarmo",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Prečo sťahovať do Maďarska cez Sofoservis",
    description:
      "Maďarsko je susedná krajina — krátka trasa, jednoduché formality, rýchla preprava.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie domácností",
        description:
          "Kompletné sťahovanie bytu alebo domu zo Slovenska do Maďarska vrátane balenia a prepravy.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie",
        description:
          "Presun kancelárií a firiem medzi Slovenskom a Maďarskom s minimálnym prestojom.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Budapešť a celé Maďarsko",
        description:
          "Sťahujeme do Budapešti, Debrecenu, Győru, Pécsu a ďalších maďarských miest.",
        link: "/medzinarodne-stahovanie/budapest",
      },
      {
        image: "/icons/document_icon.svg",
        title: "EÚ formality",
        description:
          "Maďarsko je v EÚ — žiadne colné poplatky, jednoduchá administratíva.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Profesionálne balenie",
        description:
          "Bezpečná preprava nábytku a krehkých predmetov na trase Slovensko – Maďarsko.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie prepravy",
        description:
          "Váš majetok je poistený počas celej trasy zo Slovenska do Maďarska.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako dlho trvá sťahovanie z Bratislavy do Budapešti?",
      answer:
        "Vzdialenosť Bratislava – Budapešť je cca 200 km, čo zodpovedá zhruba 2 hodinám jazdy. Je to jedna z najkratších medzinárodných trás — sťahovanie zvyčajne zvládneme za jeden deň.",
    },
    {
      question: "Potrebujem špeciálne dokumenty na sťahovanie do Maďarska?",
      answer:
        "Maďarsko je v EÚ, takže colné formality sú minimálne. Stačí doklad totožnosti a inventárny zoznam vecí.",
    },
    {
      question: "Sťahujete aj z Maďarska späť na Slovensko?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch — zo Slovenska do Maďarska aj opačne.",
    },
    {
      question: "Aká je cena sťahovania do Budapešti?",
      answer:
        "Budapešť je blízka destinácia, takže cena je nižšia ako pri vzdialenejších krajinách. Kontaktujte nás pre bezplatnú kalkuláciu.",
    },
    {
      question: "Sťahujete aj do iných maďarských miest?",
      answer:
        "Áno, sťahujeme do celého Maďarska — Budapešť, Debrecen, Győr, Pécs, Miskolc a ďalšie mestá.",
    },
  ];

  return (
    <main className="bg-white">
      <link rel="preload"
        href="/images/mascot/2holding boxes mascot.svgz"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/2holding boxes mascot.svgz"
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
          benefits={["Bratislava – Budapešť len 200 km", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
          mascotSrc="/images/mascot/2holding boxes mascot.svgz"
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
          benefits={["Bratislava – Budapešť len 200 km", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
          showMascot
          mascotSrc="/images/mascot/2holding boxes mascot.svgz"
          mobileMascotSrc="/images/mascot/2holding boxes mascot.svgz"
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
          title="Často kladené otázky — sťahovanie do Maďarska"
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
          { title: "Sťahovanie do Budapešti", description: "Preprava do maďarskej metropoly.", href: "/medzinarodne-stahovanie/budapest", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Rakúska", description: "Profesionálne sťahovanie do Rakúska.", href: "/medzinarodne-stahovanie/rakusko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
