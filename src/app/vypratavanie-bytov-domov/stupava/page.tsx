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
  title: "Vypratávanie bytov a domov Stupava | Sofoservis",
  description:
    "Profesionálne vypratávanie bytov a domov v Stupave ✅ Férové ceny ✅ Obhliadka zadarmo ✅ Spoľahlivé vypratanie nehnuteľností v Stupave a okolí Bratislavy.",
  keywords:
    "vypratavanie stupava, vypratávanie bytov stupava, vypratanie bytu stupava, vypratanie domu stupava, likvidacia odpadu stupava",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-bytov-domov/stupava",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-bytov-domov/stupava",
      en: "https://www.sofoservis.sk/en/apartment-clearance-stupava",
      "x-default": "https://www.sofoservis.sk/vypratavanie-bytov-domov/stupava",
    },
  },
};

export default function VypratavanieStupavaPage() {
  const faqItems = [
    {
      question: "Ako prebieha proces vypratávania v Stupave?",
      answer:
        "Vypratávanie v Stupave začína bezplatnou obhliadkou. Po dohode stanovíme termín a náš tím príde vybavený všetkým potrebným. Vytriedime veci, odvezieme odpad a priestor vyčistíme.",
    },
    {
      question: "Aká je cena za vypratanie bytu alebo domu v Stupave?",
      answer:
        "Pre 2-izbový byt v Stupave sa ceny pohybujú od 350€ do 700€, pre rodinný dom od 600€ do 1500€. Bezplatná obhliadka a nezáväzná cenová ponuka.",
    },
    {
      question: "Pokrývate aj okolie Stupavy?",
      answer:
        "Áno, pôsobíme v Stupave a okolí — Záhorská Bystrica, Devínska Nová Ves, Lozorno, Borinka a ďalšie obce záhorského regiónu.",
    },
    {
      question: "Ako rýchlo dokážete prísť do Stupavy?",
      answer:
        "Stupava je blízko Bratislavy, takže vieme reagovať veľmi rýchlo. V naliehavých prípadoch dokážeme prísť do 24 hodín.",
    },
    {
      question: "Vypratávate aj väčšie domy a záhradné domy v okolí Stupavy?",
      answer:
        "Áno, v okolí Stupavy sa stretávame s vypratávaním starších rodinných domov, záhradných domčekov a rekreačných objektov. Máme bohaté skúsenosti s každým typom nehnuteľností.",
    },
  ];

  const heroData = {
    title: "Vypratávanie bytov a domov v Stupave",
    description:
      "Profesionálne vypratávanie bytov, domov a nehnuteľností v Stupave a záhorskom okolí Bratislavy. Rýchla reakcia, férové ceny a komplexné služby.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu v Stupave",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Komplexné služby vypratávania v Stupave",
    description: "Profesionálne vypratávanie nehnuteľností v Stupave a záhorskom okolí Bratislavy.",
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
        description: "Vyčistíme pozemky od odpadu v Stupave a okolí.",
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

  const stupavaNearby = [
    "Stupava centrum",
    "Záhorská Bystrica",
    "Devínska Nová Ves",
    "Lozorno",
    "Borinka",
    "Devín",
    "Lamač",
    "Marianka",
    "Rohožník",
    "Plavecký Mikuláš",
    "Sološnica",
    "Kostolište",
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
          title="Vypratávanie v Stupave a záhorskom okolí"
          description="Poskytujeme vypratávacie služby v Stupave a priľahlých obciach"
          locations={stupavaNearby}
          additionalText="Okrem Stupavy pôsobíme aj v Malackách, Bratislave a ďalších obciach záhorského regiónu."
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
        <FAQ title="Často kladené otázky o vypratávaní v Stupave" items={faqItems} />
      </div>
      <div>
        <CTA
          title="Potrebujete profesionálne vypratávanie v Stupave?"
          description="Náš tím sa postará o všetko — od triedenia vecí až po finálne vyčistenie priestoru v Stupave a záhorskom okolí."
          buttonText="Získať nezáväznú ponuku"
        />
      </div>
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Vypratávanie bytov a domov", description: "Hlavná stránka vypratávania bytov a domov.", href: "/vypratavanie-bytov-domov", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Sťahovanie Stupava", description: "Profesionálne sťahovanie v Stupave a okolí.", href: "/stahovanie-stupava", icon: "/icons/truck_icon.svg" },
          { title: "Vypratávanie Malacky", description: "Vypratávanie bytov a domov v Malackách.", href: "/vypratavanie-bytov-domov/malacky", icon: "/icons/house_icon.svg" },
          { title: "Vypratávanie Bratislava", description: "Vypratávanie bytov v Bratislave.", href: "/vypratavanie-bytov-domov/bratislava", icon: "/icons/vypratavanie_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
