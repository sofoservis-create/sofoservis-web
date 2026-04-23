import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import LocationMap from "@/components/sections/LocationMap";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Vypratávanie bytov a domov Malacky | Sofoservis",
  description:
    "Profesionálne vypratávanie bytov a domov v Malackách ✅ Férové ceny ✅ Obhliadka zadarmo ✅ Spoľahlivé vypratanie nehnuteľností v Malackách a záhorskom.",
  keywords:
    "vypratavanie malacky, vypratávanie bytov malacky, vypratanie bytu malacky, vypratanie domu malacky, likvidacia odpadu malacky",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-bytov-domov/malacky",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-bytov-domov/malacky",
      en: "https://www.sofoservis.sk/en/apartment-clearance-malacky",
      "x-default": "https://www.sofoservis.sk/vypratavanie-bytov-domov/malacky",
    },
  },
};

export default function VypratavanieMalackyPage() {
  const faqItems = [
    {
      question: "Ako prebieha proces vypratávania v Malackách?",
      answer:
        "Vypratávanie v Malackách začína bezplatnou obhliadkou. Po dohode stanovíme termín. Náš tím príde vybavený všetkým potrebným, vytriedime veci, odvezieme odpad a priestor vyčistíme.",
    },
    {
      question: "Aká je cena za vypratanie bytu alebo domu v Malackách?",
      answer:
        "Pre 2-izbový byt v Malackách sa ceny pohybujú od 350€ do 700€, pre rodinný dom od 600€ do 1500€. Obhliadka a cenová ponuka je bezplatná.",
    },
    {
      question: "Obsluhujete aj okolie Malaciek?",
      answer:
        "Áno, pôsobíme v Malackách a celom okolí — Stupava, Záhorská Bystrica, Lozorno, Borinka a ďalšie obce záhorského regiónu.",
    },
    {
      question: "Ako rýchlo môžete prísť vypratávať do Malaciek?",
      answer:
        "V naliehavých prípadoch dokážeme prísť do 24-48 hodín. Blízkosť Bratislavy umožňuje rýchlu reakciu.",
    },
    {
      question: "Zabezpečíte aj vypratávanie lesných chalúp a rekreačných objektov v okolí Malaciek?",
      answer:
        "Áno, v oblasti Malaciek a okolitých lesov sa stretávame s vypratávaním chalúp a záhradných domčekov. Máme skúsenosti s každým typom nehnuteľností.",
    },
  ];

  const heroData = {
    title: "Vypratávanie bytov a domov v Malackách",
    description:
      "Profesionálne vypratávanie bytov, domov a nehnuteľností v Malackách a záhorskom regióne. Komplexné služby za férové ceny — rýchlo a spoľahlivo.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu v Malackách",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Komplexné služby vypratávania v Malackách",
    description: "Profesionálne vypratávanie nehnuteľností v Malackách a záhorskom regióne.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Kompletné vypratanie bytu alebo domu",
        description: "Vypratáme celý byt alebo dom vrátane všetkých miestností.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Vypratávanie pivníc a garáží",
        description: "Špecializujeme sa na vypratávanie pivníc, garáží a skladov.",
        link: "/vypratavanie-pivnic-garazi-nebytovych-priestorov",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Odvoz a likvidácia starého nábytku",
        description: "Profesionálny odvoz starého nábytku a spotrebičov.",
        link: "/odvoz-likvidacia-stavebneho-odpadu/",
      },
      {
        image: "/icons/landscape_icon.svg",
        title: "Čistenie a vypratávanie pozemkov",
        description: "Vyčistíme pozemky od odpadu v Malackách a okolí.",
        link: "/cistenie-vypratavanie-pozemkov-nehnutelnosti",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Likvidácia nebezpečného odpadu",
        description: "Bezpečná likvidácia nebezpečného odpadu podľa predpisov.",
        link: "/likvidacia-nebezpecneho-odpadu-starych-spotrebicov",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Odvoz stavebného odpadu",
        description: "Odvoz stavebného odpadu a demolačných materiálov.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
    ],
  };

  const malackyNearby = [
    "Malacky centrum",
    "Stupava",
    "Lozorno",
    "Záhorská Bystrica",
    "Borinka",
    "Plavecké Podhradie",
    "Jakubov",
    "Kostolište",
    "Rohožník",
    "Záhorská Ves",
    "Gajary",
    "Sološnica",
  ];

  return (
    <main className="bg-white">
      <link rel="preload"
        href="/images/mascot/stary-gauc-nosi-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/stary-gauc-nosi-mascot.svg"
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
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          desktopMascotScaleMultiplier={1.08}
          desktopMascotRightShiftPct={0.235}
          desktopMascotBehindForm
          desktopMascotFixedHeightPx={756}
          desktopMinHeroTextHeightPx={460}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title={heroData.title}
          description={heroData.description}
          formTitle={heroData.formTitle}
          formSubtitle={heroData.formSubtitle}
          backgroundImage={heroData.backgroundImage}
          showMascot
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          mobileMascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          mobileMascotOffsetY={-44}
          mobileMascotScale={0.847}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>
      <div><Clients /></div>
      <div><GoogleReviews /></div>
      <div><Reviews showHeadline={true} /></div>
      <div>
        <LocationMap
          title="Vypratávanie v Malackách a záhorskom regióne"
          description="Poskytujeme vypratávacie služby v Malackách a priľahlých obciach"
          locations={malackyNearby}
          additionalText="Okrem Malaciek pôsobíme aj v Senici, Stupavy a ďalších obciach záhorského regiónu."
        />
      </div>
      <div>
        <Features
          title={featuresData.title}
          description={featuresData.description}
          features={featuresData.features}
        />
      </div>
      <div><InstagramFeed /></div>
      <div><GoogleReviews showReviewsShowcase={false} /></div>
      <div>
        <FAQ title="Často kladené otázky o vypratávaní v Malackách" items={faqItems} />
      </div>
      <div>
        <CTA
          title="Potrebujete profesionálne vypratávanie v Malackách?"
          description="Náš tím sa postará o všetko — od triedenia vecí až po finálne vyčistenie priestoru v Malackách a záhorskom regióne."
          buttonText="Získať nezáväznú ponuku"
        />
      </div>
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Vypratávanie bytov a domov", description: "Hlavná stránka vypratávania bytov a domov.", href: "/vypratavanie-bytov-domov", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Sťahovanie Malacky", description: "Profesionálne sťahovanie v Malackách a okolí.", href: "/stahovanie-malacky", icon: "/icons/truck_icon.svg" },
          { title: "Vypratávanie Stupava", description: "Vypratávanie bytov a domov v Stupave.", href: "/vypratavanie-bytov-domov/stupava", icon: "/icons/house_icon.svg" },
          { title: "Vypratávanie Bratislava", description: "Vypratávanie bytov v Bratislave.", href: "/vypratavanie-bytov-domov/bratislava", icon: "/icons/vypratavanie_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
