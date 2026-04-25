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
  title: "Sťahovanie do Nórska zo Slovenska | Sofoservis",
  description:
    "Profesionálne sťahovanie do Nórska a z Nórska na Slovensko. Trasy do Osla a ďalších nórskych miest. Pomoc s colnými formalitami mimo EÚ, poistenie.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/norsko",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/norsko",
      en: "https://www.sofoservis.sk/en/moving-to-norway",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/norsko",
    },
  },
  keywords:
    "sťahovanie do Nórska, medzinárodné sťahovanie Nórsko, preprava do Osla, sťahovanie Slovensko Nórsko, sťahovanie mimo EÚ sever",
  openGraph: {
    title: "Sťahovanie do Nórska zo Slovenska | Sofoservis",
    description:
      "Profesionálne sťahovanie do Nórska. Pomoc s colnými formalitami, poistenie zahrnuté.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/norsko",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieNorskoPage() {
  const heroData = {
    title: "Sťahovanie do Nórska",
    description:
      "Profesionálne medzinárodné sťahovanie zo Slovenska do Nórska. Oslo (1 800 km) je populárna destinácia pre slovenských pracovníkov. Nórsko nie je v EÚ — pomáhame s colnými formalitami a zaisťujeme bezpečnú prepravu vašich vecí.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Sťahovanie do Nórska — kalkulácia zadarmo",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Prečo sťahovať do Nórska cez Sofoservis",
    description:
      "Nórsko mimo EÚ — špeciálny prístup k colným formalitám a logistike pre severnú Európu.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie domácností",
        description:
          "Kompletné sťahovanie bytu alebo domu zo Slovenska do Nórska vrátane balenia a prepravy.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie",
        description:
          "Presun kancelárií a firiem zo Slovenska do Nórska s komplexnou logistikou.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Oslo a celé Nórsko",
        description:
          "Sťahujeme do Osla, Bergenu, Stavangeru, Trondheimu a ďalších nórskych miest.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Colné formality mimo EÚ",
        description:
          "Nórsko nie je v EÚ — pripravíme colné dokumenty a inventárny zoznam pre nórsku colnú správu.",
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
          "Váš majetok je poistený počas celej trasy zo Slovenska do Nórska.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Aké colné formality treba splniť pri sťahovaní do Nórska?",
      answer:
        "Nórsko nie je členom EÚ, ale je súčasťou Európskeho hospodárskeho priestoru (EHP). Pri sťahovaní osobných vecí je potrebné colné vyhlásenie a inventárny zoznam. Osobné veci sú pri trvalej zmene bydliska zvyčajne od cla oslobodené.",
    },
    {
      question: "Ako dlho trvá sťahovanie z Bratislavy do Osla?",
      answer:
        "Vzdialenosť Bratislava – Oslo je cca 1 800 km, čo zodpovedá zhruba 17 hodinám jazdy. Realizujeme to ako 2-dňovú expedíciu.",
    },
    {
      question: "Sťahujete aj z Nórska späť na Slovensko?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch.",
    },
    {
      question: "Aká je cena sťahovania do Osla?",
      answer:
        "Nórsko je vzdialenejšia a nákladnejšia destinácia. Cena závisí od objemu vecí. Kontaktujte nás pre bezplatnú kalkuláciu.",
    },
    {
      question: "Sťahujete aj do severnejšieho Nórska?",
      answer:
        "Sťahujeme do celého Nórska — Oslo, Bergen, Stavanger, Trondheim. Pre ďaleký sever kontaktujte nás pre individuálnu ponuku.",
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
          benefits={["Pomoc s colnými formalitami mimo EÚ", "Poistenie prepravy zahrnuté", "Skúsený tím pre dlhé trasy"]}
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
          benefits={["Pomoc s colnými formalitami mimo EÚ", "Poistenie prepravy zahrnuté", "Skúsený tím pre dlhé trasy"]}
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
          title="Často kladené otázky — sťahovanie do Nórska"
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
          { title: "Sťahovanie do Švédska", description: "Profesionálne sťahovanie do Švédska.", href: "/medzinarodne-stahovanie/svedsko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Dánska", description: "Preprava do Dánska a Kodane.", href: "/medzinarodne-stahovanie/dansko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
