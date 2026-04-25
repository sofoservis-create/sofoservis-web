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
  title: "Sťahovanie do Stockholmu zo Slovenska | Sofoservis",
  description:
    "Profesionálne medzinárodné sťahovanie do Stockholmu zo Slovenska. Vzdialenosť 1 600 km, tranzit 2-3 dni. Fixná cena, poistenie a skúsený tím.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/stockholm",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/stockholm",
      en: "https://www.sofoservis.sk/en/moving-to-stockholm",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/stockholm",
    },
  },
  keywords:
    "sťahovanie do Stockholmu, preprava Slovensko Stockholm, sťahovanie Stockholm, medzinárodné sťahovanie Stockholm, sťahovanie do Švédska",
  openGraph: {
    title: "Sťahovanie do Stockholmu zo Slovenska | Sofoservis",
    description:
      "Sťahovanie do Stockholmu zo Slovenska — 1 600 km. Poistenie zahrnuté, transparentná cena.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/stockholm",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieStockholmPage() {
  const heroData = {
    title: "Sťahovanie do Stockholmu",
    description:
      "Zabezpečujeme sťahovanie zo Slovenska do Stockholmu — moderného hlavného mesta Švédska. Vzdialenosť cca 1 600 km, tranzitný čas 2–3 dni. Preprava prebieha.",
    formTitle: "Cenová ponuka — sťahovanie do Stockholmu",
    formSubtitle: "Vyplňte formulár pre rýchlu kalkuláciu zadarmo",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Prečo sťahovať do Stockholmu cez Sofoservis",
    description:
      "Stockholm — Benátky severu na štrnástich ostrovoch. Váš domov tam presťahujeme spoľahlivo a bezpečne.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie bytov do Stockholmu",
        description:
          "Kompletné sťahovanie domácností zo Slovenska až na švédsku adresu.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie",
        description:
          "Profesionálny presun vašej kancelárie do Stockholmu s dôrazom na efektivitu.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Celý Stockholm a Švédsko",
        description:
          "Sťahujeme do všetkých štvrtí Stockholmu aj do ďalších švédskych miest ako Göteborg či Malmö.",
        link: "/medzinarodne-stahovanie/svedsko",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Bez colných poplatkov",
        description:
          "Švédsko je v EÚ — preprava osobného majetku prebieha bez colných formalít.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Balenie na dlhé trasy",
        description:
          "Používame špeciálne baliace techniky a materiály pre bezpečnú prepravu cez Nemecko a Baltské more.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie je základ",
        description:
          "Počas celej trasy do Stockholmu je váš majetok plne krytý poistením.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Ako dlho trvá sťahovanie zo Slovenska do Stockholmu?",
      answer:
        "Vzdialenosť je približne 1 600 km. Preprava sťahovacím vozidlom trvá zvyčajne 2 až 3 dni v závislosti od konkrétnej trasy a spojenia trajektov.",
    },
    {
      question: "Sťahujete aj zo Švédska na Slovensko?",
      answer:
        "Áno, naše služby sú dostupné v oboch smeroch, pravidelne jazdíme trasu Švédsko – Slovensko.",
    },
    {
      question: "Aká je cena sťahovania do Stockholmu?",
      answer:
        "Cena sa počíta individuálne podľa objemu vecí a miesta vykládky. Kontaktujte nás pre nezáväznú cenovú ponuku.",
    },
    {
      question: "Zabezpečujete aj prevoz cez trajekty?",
      answer:
        "Áno, všetka koordinácia spojená s trajektmi je v našej réžii a je zahrnutá v cene sťahovania.",
    },
    {
      question: "Potrebujem nejaký špeciálny zoznam vecí?",
      answer:
        "Odporúčame vypracovať si zoznam balíkov a nábytku, čo uľahčuje kontrolu pri vykládke aj proces poistenia.",
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
          benefits={["Slovensko – Stockholm ~1 600 km", "Tranzit 2–3 dni", "Poistenie a fixná cena"]}
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
          benefits={["Slovensko – Stockholm ~1 600 km", "Tranzit 2–3 dni", "Poistenie a fixná cena"]}
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
          title="Často kladené otázky — sťahovanie do Stockholmu"
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
          { title: "Sťahovanie do Švédska", description: "Sťahovanie do celého Švédska.", href: "/medzinarodne-stahovanie/svedsko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Dánska", description: "Preprava do susedného Dánska.", href: "/medzinarodne-stahovanie/dansko", icon: "/icons/globe_icon.svg" },
          { title: "Medzinárodné sťahovanie", description: "Sťahovanie do celej Európy.", href: "/medzinarodne-stahovanie", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
