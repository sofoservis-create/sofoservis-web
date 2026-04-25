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
  title: "Sťahovanie do Írska zo Slovenska | Sofoservis",
  description:
    "Profesionálne sťahovanie do Írska a z Írska na Slovensko. Trasy do Dublinu, Corku, Galway. EÚ formality, lodná preprava, poistenie zahrnuté.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/irsko",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/irsko",
      en: "https://www.sofoservis.sk/en/moving-to-ireland",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/irsko",
    },
  },
  keywords:
    "sťahovanie do Írska, medzinárodné sťahovanie Írsko, preprava do Dublinu, sťahovanie Slovensko Dublin, sťahovanie Cork",
  openGraph: {
    title: "Sťahovanie do Írska zo Slovenska | Sofoservis",
    description:
      "Profesionálne sťahovanie do Írska. Trasy do Dublinu, Corku. Lodná preprava, poistenie zahrnuté.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/irsko",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieIrskoPage() {
  const heroData = {
    title: "Sťahovanie do Írska",
    description:
      "Profesionálne medzinárodné sťahovanie zo Slovenska do Írska. Dublin (1 900 km + lodná preprava) je populárnou destináciou pre slovenských expatov.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Sťahovanie do Írska — kalkulácia zadarmo",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Prečo sťahovať do Írska cez Sofoservis",
    description:
      "Írsko na ostrove — trasa zahŕňa cestu cez Britániu a loďou. Máme skúsenosti aj s touto destináciou.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie domácností",
        description:
          "Kompletné sťahovanie bytu alebo domu zo Slovenska do Írska vrátane balenia, prepravy a lodného transportu.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie",
        description:
          "Presun kancelárií a firiem zo Slovenska do Írska s komplexnou logistikou.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Dublin a celé Írsko",
        description:
          "Sťahujeme do Dublinu, Corku, Galway, Limericku a ďalších írskych miest.",
        link: "/medzinarodne-stahovanie/dublin",
      },
      {
        image: "/icons/document_icon.svg",
        title: "EÚ formality",
        description:
          "Írsko je v EÚ — žiadne colné poplatky na osobné veci. Pomáhame aj s lodnou dokumentáciou.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Vodotesné balenie",
        description:
          "Pre lodný transport používame vodotesné baliace materiály pre maximálnu ochranu.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie prepravy",
        description:
          "Váš majetok je poistený počas celej trasy vrátane lodného transportu.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako prebieha sťahovanie do Írska — je potrebná loď?",
      answer:
        "Írsko je ostrov, takže trasa zahŕňa cestu autom cez kontinentálnu Európu a Britániu, potom prechod lodí cez Írske more (napríklad Holyhead – Dublin). Celá logistika je na nás — zákazník nemusí riešiť lodné lístky.",
    },
    {
      question: "Ako dlho trvá sťahovanie z Bratislavy do Dublinu?",
      answer:
        "Celá trasa vrátane lodného prechodu trvá 2–3 dni. Plánujeme individuálne podľa objemu a termínu zákazníka.",
    },
    {
      question: "Potrebujem špeciálne dokumenty na sťahovanie do Írska?",
      answer:
        "Írsko je v EÚ, takže colné formality sú minimálne. Stačí doklad totožnosti a inventárny zoznam. Pomáhame aj s lodnou dokumentáciou.",
    },
    {
      question: "Sťahujete aj z Írska späť na Slovensko?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch.",
    },
    {
      question: "Aká je cena sťahovania do Dublinu?",
      answer:
        "Írsko je vzdialenejšia destinácia vyžadujúca lodný transport — cena je vyššia ako pre kontinentálne krajiny. Kontaktujte nás pre bezplatnú kalkuláciu.",
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
          benefits={["Dublin, Cork, Galway a ďalšie", "Lodný transport v cene", "Poistenie prepravy zahrnuté"]}
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
          benefits={["Dublin, Cork, Galway a ďalšie", "Lodný transport v cene", "Poistenie prepravy zahrnuté"]}
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
          title="Často kladené otázky — sťahovanie do Írska"
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
          { title: "Sťahovanie do Dublinu", description: "Preprava do írskej metropoly.", href: "/medzinarodne-stahovanie/dublin", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Anglicka", description: "Profesionálne sťahovanie do UK.", href: "/medzinarodne-stahovanie/anglicko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
