import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import LocationMap from "@/components/sections/LocationMap";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata = {
  title: "Sťahovanie Senec - byty, domy, nábytok a kancelárie",
  description:
    "Profesionálne sťahovacie služby v Senci a okolí. Rýchlo, spoľahlivo a za výhodné ceny.",
  keywords:
    "stahovanie senec, stahovanie bytov senec, stahovacie služby senec, stahovanie firiem senec, preprava nabytku senec, stahovanie dom senec",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-senec",
      languages: {
        sk: "https://www.sofoservis.sk/stahovanie-senec",
        en: "https://www.sofoservis.sk/en/moving-senec",
        "x-default": "https://www.sofoservis.sk/stahovanie-senec",
      },
  },
};

export default function StahovanieSenecPage() {
  // Data for Hero section
  const heroData = {
    title: "Sťahovanie Senec: Rýchlo a spoľahlivo",
    description:
      "Kompletné sťahovacie služby v Senci a okolí. Profesionálny tím, výhodné ceny, spokojnosť garantovaná. Presťahujeme vás v rámci Senca alebo kamkoľvek.",
    formTitle: "Sťahovanie v Senci bez starostí s bezplatnou ponukou",
    formSubtitle: "Vyplňte formulár nižšie pre rýchlu fixnú cenu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  // Data for Features section
  const featuresData = {
    title: "Komplexné sťahovacie služby v Senci",
    description:
      "Bezpečne presúvame váš majetok v Senci a okolí s dôrazom na kvalitu a spokojnosť zákazníkov.",
    features: [
      {
        image: "/icons/house_icon.svg", // Perfect for apartment/home moving
        title: "Sťahovanie bytov a domov v Senci",
        description:
          "Profesionálne sťahovanie rodinných domov a bytov v Senci. Postaráme sa o kompletnú organizáciu vrátane balenia, prepravy a vybalenia na novom mieste.",
        link: "/stahovanie-bytov-domov", // Real URL from project
      },
      {
        image: "/icons/briefcase_icon.svg", // Perfect for business moving
        title: "Firemné sťahovanie v Senci",
        description:
          "Sťahujeme kancelárie a firmy v Senci s minimálnymi prestojmi. Organizujeme presun počas víkendov a sviatkov, aby váš tím mohol pokračovať v práci bez prerušenia.",
        link: "/stahovanie-kancelarii-firiem", // Real URL from project
      },
      {
        image: "/icons/truck_icon.svg", // Perfect for furniture transport
        title: "Preprava nábytku v Senci",
        description:
          "Bezpečná preprava nábytku a ťažkých predmetov v Senci. Používame špecializované techniki a zariadenia pre bezpečné manipulovanie s vašimi cennými kusmi.",
        link: "/stahovanie-preprava-nabytku", // Real URL from project
      },
      {
        image: "/icons/globe_icon.svg", // Perfect for international moving
        title: "Medzinárodné sťahovanie zo Senca",
        description:
          "Presťahujeme vás zo Senca kamkoľvek v Európe. S dôrazom na presné termíny a bezpečné balenie vám pomôžeme začať nový život v zahraničí.",
        link: "/medzinarodne-stahovanie", // Real URL from project
      },
      {
        image: "/icons/crane_icon.svg", // Perfect for heavy items
        title: "Sťahovanie ťažkých bremien v Senci",
        description:
          "Špecializujeme sa na presun pianín, trezoroch a iných ťažkých predmetov v Senci. Máme špeciálne vybavenie a skúsený tím pre bezpečnú manipuláciu.",
        link: "/stahovanie-tazkych-bremien", // Real URL from project
      },
      {
        image: "/icons/container_icon.svg", // Perfect for construction waste removal
        title: "Odvoz stavebného odpadu v Senci",
        description:
          "Ponúkame profesionálny odvoz a likvidáciu stavebného odpadu v Senci. Postaráme sa o environmentálne zodpovedné zneškodnenie všetkých materiálov.",
        link: "/odvoz-likvidacia-stavebneho-odpadu", // Real URL from project
      },
    ],
  };

  // Data for Map section
  const mapData = {
    title: "Sťahujeme v Senci a okolí",
    description:
      "Naše služby poskytujeme v celom meste Senec a v okolitých obciach seneckého okresu.",
    locations: [
      "Senec - centrum",
      "Senec - sídlisko",
      "Svätý Martin",
      "Červený majer",
      "Hrušky",
      "Mlynský klin",
      "Tureň",
      "Nový Svet",
      "Kráľová pri Senci",
      "Veľký Biel",
      "Malý Biel",
      "Reca",
      "Boldog",
      "Bernolákovo",
      "Ivanka pri Dunaji",
      "Nová Dedinka",
      "Veľký Grob",
    ],
    additionalText: "Pezinok, Modra, Galanta, Šamorín a ďalšie okolité obce.",
  };

  // Data for FAQ section
  const faqData = {
    title: "Často kladené otázky o sťahovaní v Senci",
    items: [
      {
        question:
          "V ktorých lokalitách v Senci a okolí poskytujete sťahovacie služby?",
        answer:
          "Naše služby poskytujeme v celom meste Senec a vo všetkých okolitých obciach seneckého okresu vrátane Kráľovej pri Senci, Veľkého Bielu, Malého Bielu, Rece, Boldogu, Novej Dedinky a ďalších. Pôsobíme tiež v širšom okolí - Pezinok, Modra, Galanta, ako aj v Bratislave.",
      },
      {
        question: "Aká je cena sťahovania v Senci?",
        answer:
          "Cena sťahovania závisí od viacerých faktorov ako objem vecí, vzdialenosť, prístupové podmienky a potrebné služby. Pre presný cenový odhad vám radi pripravíme bezplatnú cenovú ponuku po vyplnení kontaktného formulára alebo po telefonickom rozhovore.",
      },
      {
        question: "Ako dlho vopred je potrebné objednať sťahovanie v Senci?",
        answer:
          "Odporúčame objednať sťahovanie aspoň 7-14 dní vopred, aby sme mohli zabezpečiť termín podľa vašich potrieb. V prípade potreby vieme zabezpečiť aj expresné sťahovanie s realizáciou do 24-48 hodín.",
      },
      {
        question: "Poskytujete sťahovanie zo Senca do Bratislavy a naopak?",
        answer:
          "Áno, veľmi často realizujeme sťahovanie medzi Sencom a Bratislavou, v oboch smeroch. Vzhľadom na blízkosť týchto miest vieme poskytnúť rýchle a cenovo výhodné sťahovacie služby aj v ten istý deň.",
      },
      {
        question: "Poskytujete aj montáž a demontáž nábytku v Senci?",
        answer:
          "Áno, naše služby zahŕňajú kompletnú demontáž nábytku na pôvodnom mieste a následnú montáž v novom priestore. Naši pracovníci majú skúsenosti s rôznymi typmi nábytku vrátane IKEA, Asko, Jysk a ďalších značiek.",
      },
      {
        question: "Realizujete sťahovanie rodinných domov v okolí Senca?",
        answer:
          "Áno, špecializujeme sa na sťahovanie rodinných domov v Senci a okolitých obciach. Máme skúsenosti s manipuláciou veľkých a ťažkých kusov nábytku, záhradnej techniky a ďalšieho vybavenia typického pre rodinné domy.",
      },
    ],
  };

  return (
    <main className="bg-white">
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
<link
        rel="preload"
        href="/images/mascot/mascot-holding-boxes.svg"
        as="image"
        type="image/svg+xml"
      />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title={heroData.title}
          description={heroData.description}
          formTitle={heroData.formTitle}
          formSubtitle={heroData.formSubtitle}
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          desktopMascotScaleMultiplier={1.03}
        desktopMinHeroTextHeightPx={460}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title={heroData.title}
          description={heroData.description}
          formTitle={heroData.formTitle}
          formSubtitle={heroData.formSubtitle}
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
          showMascot
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          mobileMascotSrc="/images/mascot/mascot-holding-boxes.svg"
          mobileMascotOffsetY={-44}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>

      {/* Clients section */}
      <div>
        <Clients />
      </div>

      {/* Google Reviews section */}
      <div>
        <GoogleReviews showCarousel={true} />
      </div>

      {/* Features section */}
      <div className="">
        <Features
          title={featuresData.title}
          description={featuresData.description}
          features={featuresData.features}
        />
      </div>

      {/* Instagram Feed section */}
      <div>
        <InstagramFeed />
      </div>

      {/* Location Map section */}
      <div>
        <LocationMap
          title={mapData.title}
          description={mapData.description}
          locations={mapData.locations}
          additionalText={mapData.additionalText}
        />
      </div>

      {/* Reviews section */}
      <div>
        <Reviews />
      </div>

      {/* FAQ section */}
      <div>
        <FAQ title={faqData.title} items={faqData.items} />
      </div>

      {/* CTA section */}
      <div>
        <CTA />
      </div>
    
      <ServicePricing filter={["stahovanie", "vypratavanie", "medzinarodne-stahovanie"]} />
      <TrustBadges />
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[{"title":"Sťahovanie bytov a domov","description":"Spoľahlivé sťahovanie bytov a rodinných domov.","href":"/stahovanie-bytov-domov","icon":"/icons/house_icon.svg"},{"title":"Sťahovanie kancelárií","description":"Rýchle sťahovanie firiem s minimálnym prestojom.","href":"/stahovanie-kancelarii-firiem","icon":"/icons/briefcase_icon.svg"},{"title":"Vypratávanie bytov a domov","description":"Kompletné vypratanie bytu alebo domu.","href":"/vypratavanie-bytov-domov","icon":"/icons/vypratavanie_icon.svg"},{"title":"Montáž nábytku","description":"Profesionálna montáž a demontáž nábytku.","href":"/montaz-nabytku","icon":"/icons/wrench_icon.svg"}]}
      />
      <FAQJsonLd items={faqData.items} />
    </main>
  );
}
