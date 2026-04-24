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
import TrustBadges from "@/components/sections/TrustBadges";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Vypratávanie bytov a domov Trnava | Sofoservis",
  description:
    "Profesionálne vypratávanie bytov a domov v Trnave ✅ Lacné a férové ceny ✅ Obhliadka zadarmo ✅ Rýchle a spoľahlivé vypratanie nehnuteľností v Trnave.",
  keywords:
    "vypratavanie trnava, vypratávanie bytov trnava, vypratanie bytu trnava, vypratanie domu trnava, vypratanie pozostalosti trnava, likvidacia odpadu trnava",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-bytov-domov/trnava",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-bytov-domov/trnava",
      en: "https://www.sofoservis.sk/en/apartment-clearance-trnava",
      "x-default": "https://www.sofoservis.sk/vypratavanie-bytov-domov/trnava",
    },
  },
};

export default function VypratavanieTrnavaPage() {
  const faqItems = [
    {
      question: "Ako prebieha proces vypratávania v Trnave?",
      answer:
        "Proces vypratávania v Trnave začína bezplatnou obhliadkou priestoru. Po dohode stanovíme termín, v dohodnutý deň náš tím príde so všetkým potrebným vybavením. Najprv vytriedime veci podľa vašich požiadaviek, následne odvezieme nepotrebný materiál a priestor vyčistíme. Dobre poznáme zberné dvory a skládky v Trnave a okolí, čo zabezpečuje rýchly a efektívny priebeh.",
    },
    {
      question: "Aká je cena za vypratanie bytu alebo domu v Trnave?",
      answer:
        "Cena za vypratávanie v Trnave závisí od veľkosti priestoru, množstva vecí, dostupnosti a typu odpadu. Pre štandardný 2-izbový byt sa ceny pohybujú od 350€ do 700€, pre rodinný dom od 600€ do 1500€. Poskytujeme nezáväznú cenovú ponuku po bezplatnej obhliadke.",
    },
    {
      question: "Ako rýchlo viete zabezpečiť vypratávanie v Trnave?",
      answer:
        "V naliehavých prípadoch dokážeme zorganizovať vypratávanie do 24-48 hodín. Pre štandardné zákazky sa snažíme vyjsť v ústrety vašim časovým preferenciám. Pokrývame celú Trnavu a blízke okolie.",
    },
    {
      question: "Kam odvážate odpad z vypratávania v Trnave?",
      answer:
        "Odpad odvážame na oficiálne zberné dvory a skládky v Trnave a okolí v súlade s predpismi o odpadovom hospodárstve. Recyklovateľný materiál separujeme a smerujeme do recyklačných zariadení.",
    },
    {
      question: "Vypratávate aj po zosnulých v Trnave?",
      answer:
        "Áno, v Trnave a okolí zabezpečujeme aj citlivé vypratávanie nehnuteľností po zosnulých s maximálnou empatiou a diskréciou. Pomôžeme vám roztriediť osobné veci, dokumenty a cennosti.",
    },
  ];

  const heroData = {
    title: "Vypratávanie bytov a domov v Trnave",
    description:
      "Profesionálne a rýchle vypratávanie bytov, domov a nehnuteľností v Trnave a okolí. Náš tím sa postará o komplexné služby od triedenia vecí, cez odvoz, až.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu v Trnave",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Komplexné služby vypratávania v Trnave",
    description:
      "Profesionálne vypratávanie nehnuteľností s odvozom a likvidáciou nepotrebných vecí v Trnave.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Kompletné vypratanie bytu alebo domu",
        description:
          "Vypratáme celý byt alebo dom vrátane všetkých miestností, pivnice a podkrovia. Triedenie vecí a ekologická likvidácia.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Vypratávanie pivníc a garáží",
        description:
          "Špecializujeme sa na vypratávanie pivničných priestorov, garáží a skladov v Trnave.",
        link: "/vypratavanie-pivnic-garazi-nebytovych-priestorov",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Odvoz a likvidácia starého nábytku",
        description:
          "Profesionálny odvoz starého nábytku a spotrebičov s environmentálne zodpovednou likvidáciou.",
        link: "/odvoz-likvidacia-stavebneho-odpadu/",
      },
      {
        image: "/icons/landscape_icon.svg",
        title: "Čistenie a vypratávanie pozemkov",
        description:
          "Vyčistíme pozemky od nepotrebných vecí a stavebného odpadu v Trnave a okolí.",
        link: "/cistenie-vypratavanie-pozemkov-nehnutelnosti",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Likvidácia nebezpečného odpadu",
        description:
          "Bezpečne zlikvidujeme nebezpečný odpad, farby a chemikálie podľa platných predpisov.",
        link: "/likvidacia-nebezpecneho-odpadu-starych-spotrebicov",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Odvoz stavebného odpadu",
        description:
          "Po vypratávaní zabezpečíme odvoz stavebného odpadu, sute a demolačných materiálov.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
    ],
  };

  const trnavaNearby = [
    "Trnava centrum",
    "Špačince",
    "Bohdanovce",
    "Bučany",
    "Zavar",
    "Malženice",
    "Voderady",
    "Zeleneč",
    "Ružindol",
    "Suchá nad Parnou",
    "Brestovany",
    "Biely Kostol",
    "Dolné Lovčice",
    "Zvončín",
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
          desktopMascotTopOffsetPct={-0.01}
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
          mobileMascotOffsetY={-57}
          mobileMascotOffsetX={-32}
          mobileMascotScale={1.02}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>
      <div>
        <Clients />
      </div>
      <div>
        <GoogleReviews />
      </div>
      <div>
        <Reviews showHeadline={true} />
      </div>
      <div>
        <LocationMap
          title="Vypratávanie vo všetkých častiach Trnavy a okolia"
          description="Poskytujeme naše profesionálne vypratávacie služby v celej Trnave a priľahlých obciach"
          locations={trnavaNearby}
          additionalText="Okrem Trnavy pôsobíme aj v Hlohovci, Senci, Piešťanoch a ďalších obciach Trnavského kraja. Kontaktujte nás pre viac informácií."
        />
      </div>
      <div>
        <Features
          title={featuresData.title}
          description={featuresData.description}
          features={featuresData.features}
        />
      </div>
      <div>
        <InstagramFeed />
      </div>
      <div>
        <GoogleReviews showReviewsShowcase={false} />
      </div>
      <div>
        <FAQ
          title="Často kladené otázky o vypratávaní v Trnave"
          items={faqItems}
        />
      </div>
      <div>
        <CTA
          title="Potrebujete profesionálne vypratávanie v Trnave?"
          description="Náš skúsený tím sa postará o všetko — od triedenia vecí až po finálne vyčistenie priestoru. Pôsobíme v celej Trnave a okolí."
          buttonText="Získať nezáväznú ponuku"
        />
      </div>
      <TrustBadges />
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Vypratávanie bytov a domov", description: "Hlavná stránka vypratávania bytov a domov.", href: "/vypratavanie-bytov-domov", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Sťahovanie Trnava", description: "Profesionálne sťahovanie v Trnave a okolí.", href: "/stahovanie-trnava", icon: "/icons/truck_icon.svg" },
          { title: "Odvoz stavebného odpadu", description: "Rýchly odvoz suťa a stavebného odpadu.", href: "/odvoz-likvidacia-stavebneho-odpadu", icon: "/icons/recycle_icon.svg" },
          { title: "Vypratávanie pivníc a garáží", description: "Rýchle vypratanie pivníc, kobiek a garáží.", href: "/vypratavanie-pivnic-garazi-nebytovych-priestorov", icon: "/icons/house_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
