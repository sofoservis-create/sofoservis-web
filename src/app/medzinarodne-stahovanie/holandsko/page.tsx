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
  title: "Sťahovanie do Holandska zo Slovenska | Sofoservis",
  description:
    "Profesionálne sťahovanie do Holandska a z Holandska na Slovensko. Trasy do Amsterdamu, Rotterdamu, Haagu. Poistenie zahrnuté.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/holandsko",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/holandsko",
      en: "https://www.sofoservis.sk/en/moving-to-netherlands",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/holandsko",
    },
  },
  keywords:
    "sťahovanie do Holandska, sťahovanie Nizozemsko, medzinárodné sťahovanie Holandsko, preprava do Amsterdamu, sťahovanie Slovensko Holandsko",
  openGraph: {
    title: "Sťahovanie do Holandska (Nizozemska) zo Slovenska | Sofoservis",
    description:
      "Profesionálne sťahovanie do Holandska. Trasy do Amsterdamu, Rotterdamu a Haagu. Poistenie zahrnuté.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/holandsko",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieHolandskoPage() {
  const heroData = {
    title: "Sťahovanie do Holandska",
    description:
      "Spoľahlivé medzinárodné sťahovanie zo Slovenska do Holandska (Nizozemska). Amsterdam (1 250 km), Rotterdam, Haag — sťahujeme do celého Holandska.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Sťahovanie do Holandska — kalkulácia zadarmo",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Prečo sťahovať do Holandska cez Sofoservis",
    description:
      "Holandsko je populárna destinácia pre pracovné aj životné príležitosti. Máme overené trasy.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie domácností",
        description:
          "Kompletné sťahovanie bytu alebo domu zo Slovenska do Holandska vrátane balenia a prepravy.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie",
        description:
          "Presun kancelárií a firiem zo Slovenska do Holandska s minimálnym prestojom.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Amsterdam a celé Holandsko",
        description:
          "Sťahujeme do Amsterdamu, Rotterdamu, Haagu, Utrechtu a ďalších holandských miest.",
        link: "/medzinarodne-stahovanie/amsterdam",
      },
      {
        image: "/icons/document_icon.svg",
        title: "EÚ formality",
        description:
          "Holandsko je v EÚ — žiadne colné poplatky na osobné veci, jednoduchá administratíva.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Zosilnené balenie",
        description:
          "Pre dlhú trasu cez Európu používame zosilnené baliace materiály.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie prepravy",
        description:
          "Váš majetok je poistený počas celej trasy zo Slovenska do Holandska.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako dlho trvá sťahovanie z Bratislavy do Amsterdamu?",
      answer:
        "Vzdialenosť Bratislava – Amsterdam je cca 1 250 km, čo zodpovedá zhruba 12 hodinám jazdy. Zvyčajne realizujeme 2-dňovú expedíciu.",
    },
    {
      question: "Potrebujem špeciálne dokumenty na sťahovanie do Holandska?",
      answer:
        "Holandsko je v EÚ, takže colné formality sú minimálne. Stačí doklad totožnosti a inventárny zoznam vecí.",
    },
    {
      question: "Sťahujete aj z Holandska späť na Slovensko?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch — zo Slovenska do Holandska aj opačne.",
    },
    {
      question: "Aká je cena sťahovania do Amsterdamu?",
      answer:
        "Cena závisí od objemu vecí a doplnkových služieb. Amsterdam je vzdialenejšia destinácia. Kontaktujte nás pre bezplatnú kalkuláciu.",
    },
    {
      question: "Sťahujete aj do iných holandských miest?",
      answer:
        "Áno, sťahujeme do celého Holandska — Amsterdam, Rotterdam, Haag, Utrecht, Eindhoven a ďalšie mestá.",
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
          benefits={["Amsterdam, Rotterdam, Haag a ďalšie", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          benefits={["Amsterdam, Rotterdam, Haag a ďalšie", "Poistenie prepravy zahrnuté", "Transparentná cena vopred"]}
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
          title="Často kladené otázky — sťahovanie do Holandska"
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
          { title: "Sťahovanie do Amsterdamu", description: "Preprava do holandskej metropoly.", href: "/medzinarodne-stahovanie/amsterdam", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Belgicka", description: "Profesionálne sťahovanie do Belgicka.", href: "/medzinarodne-stahovanie/belgicko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
