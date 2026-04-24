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
  title: "Vypratávanie bytov a domov Senica | Sofoservis",
  description:
    "Profesionálne vypratávanie bytov a domov v Senici ✅ Férové ceny ✅ Obhliadka zadarmo ✅ Spoľahlivé vypratanie nehnuteľností v Senici a záhorskom regióne.",
  keywords:
    "vypratavanie senica, vypratávanie bytov senica, vypratanie bytu senica, vypratanie domu senica, likvidacia odpadu senica",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-bytov-domov/senica",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-bytov-domov/senica",
      en: "https://www.sofoservis.sk/en/apartment-clearance-senica",
      "x-default": "https://www.sofoservis.sk/vypratavanie-bytov-domov/senica",
    },
  },
};

export default function VypratavanieSenicaPage() {
  const faqItems = [
    {
      question: "Ako prebieha proces vypratávania v Senici?",
      answer:
        "Vypratávanie v Senici začína bezplatnou obhliadkou. Po odsúhlasení ceny stanovíme termín. Náš tím príde vybavený všetkým potrebným, vytriedime veci a odvezieme odpad.",
    },
    {
      question: "Aká je cena za vypratanie bytu alebo domu v Senici?",
      answer:
        "Pre 2-izbový byt v Senici sa ceny pohybujú od 350€ do 700€, pre rodinný dom od 600€ do 1500€. Poskytujeme bezplatnú obhliadku a nezáväznú cenovú ponuku.",
    },
    {
      question: "Obsluhujete aj okolie Senice na Záhorí?",
      answer:
        "Áno, pôsobíme v Senici a celom záhorskom regióne — Skalica, Holíč, Myjava, Gbely a ďalšie obce Záhoria.",
    },
    {
      question: "Ako rýchlo dokážete prísť do Senice?",
      answer:
        "V naliehavých prípadoch dokážeme prísť do 24-48 hodín od kontaktovania. Pokrývame celý záhorský región.",
    },
    {
      question: "Vypratávate aj staré záhradné domy a hospodárske budovy v okolí Senice?",
      answer:
        "Áno, na Záhorí sa stretávame s vypratávaním starých usadlostí, hospodárskych budov a záhradných domov. Máme skúsenosti s každým typom nehnuteľností.",
    },
  ];

  const heroData = {
    title: "Vypratávanie bytov a domov v Senici",
    description:
      "Profesionálne vypratávanie bytov, domov a nehnuteľností v Senici a záhorskom regióne. Komplexné služby za férové ceny — od triedenia vecí po likvidáciu.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu v Senici",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Komplexné služby vypratávania v Senici",
    description: "Profesionálne vypratávanie nehnuteľností v Senici a záhorskom regióne.",
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
        description: "Vyčistíme pozemky od odpadu v Senici a okolí.",
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

  const senicaNearby = [
    "Senica centrum",
    "Skalica",
    "Holíč",
    "Gbely",
    "Myjava",
    "Borský Mikuláš",
    "Kúty",
    "Radošovce",
    "Prietržka",
    "Unín",
    "Cerová",
    "Rovensko",
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
          title="Vypratávanie v Senici a záhorskom regióne"
          description="Poskytujeme vypratávacie služby v Senici a priľahlých obciach Záhoria"
          locations={senicaNearby}
          additionalText="Okrem Senice pôsobíme aj v Skalici, Holíči, Myjave a ďalších obciach Záhoria."
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
        <FAQ title="Často kladené otázky o vypratávaní v Senici" items={faqItems} />
      </div>
      <div>
        <CTA
          title="Potrebujete profesionálne vypratávanie v Senici?"
          description="Náš tím sa postará o všetko — od triedenia vecí až po finálne vyčistenie priestoru v Senici a záhorskom regióne."
          buttonText="Získať nezáväznú ponuku"
        />
      </div>
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Vypratávanie bytov a domov", description: "Hlavná stránka vypratávania bytov a domov.", href: "/vypratavanie-bytov-domov", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Sťahovanie Senica", description: "Profesionálne sťahovanie v Senici a okolí.", href: "/stahovanie-senica", icon: "/icons/truck_icon.svg" },
          { title: "Vypratávanie Malacky", description: "Vypratávanie bytov a domov v Malackách.", href: "/vypratavanie-bytov-domov/malacky", icon: "/icons/house_icon.svg" },
          { title: "Odvoz stavebného odpadu", description: "Rýchly odvoz suťa a stavebného odpadu.", href: "/odvoz-likvidacia-stavebneho-odpadu", icon: "/icons/recycle_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
