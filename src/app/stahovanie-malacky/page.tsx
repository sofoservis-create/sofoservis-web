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
  title: "Sťahovanie Malacky - byty, domy, nábytok a kancelárie",
  description:
    "Profesionálne sťahovacie služby v Malackách a okolí. Rýchlo, spoľahlivo a za výhodné ceny. Sťahujeme byty, domy, kancelárie a firmy po celých Malackách.",
  keywords:
    "stahovanie malacky, stahovanie bytov malacky, stahovacie služby malacky, stahovanie firiem malacky, preprava nabytku malacky, stahovanie zahorie",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-malacky",
      languages: {
        sk: "https://www.sofoservis.sk/stahovanie-malacky",
        en: "https://www.sofoservis.sk/en/moving-malacky",
        "x-default": "https://www.sofoservis.sk/stahovanie-malacky",
      },
  },
  openGraph: {
      title: "Sťahovanie Malacky - byty, domy, nábytok a kancelárie | Sofoservis",
      description: "Profesionálne sťahovacie služby v Malackách a okolí od 25€/hod. Rýchlo, spoľahlivo a za výhodné ceny. Sťahujeme byty, domy a kancelárie.",
      url: "https://www.sofoservis.sk/stahovanie-malacky",
      siteName: "Sofoservis",
      images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
      locale: "sk_SK",
      type: "website",
    },
  };

export default function StahovanieMalackyPage() {
  // Data for Hero section
  const heroData = {
    title: "Sťahovanie Malacky: Rýchlo a spoľahlivo",
    description:
      "Kompletné sťahovacie služby v Malackách a na Záhorí. Profesionálny tím, výhodné ceny, spokojnosť garantovaná. Sťahujeme byty, domy, kancelárie a firmy v celom meste aj okolí.",
    formTitle: "Sťahovanie v Malackách bez starostí s bezplatnou ponukou",
    formSubtitle: "Vyplňte formulár nižšie pre rýchlu fixnú cenu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  // Data for Features section
  const featuresData = {
    title: "Profesionálne sťahovacie služby v Malackách",
    description:
      "Kompletné služby sťahovania pre domácnosti a firmy v Malackách a okolí s dôrazom na kvalitu a spoľahlivosť prepravy.",
    features: [
      {
        image: "/icons/house_icon.svg", // Perfect for apartment/home moving
        title: "Sťahovanie bytov a domov v Malackách",
        description:
          "Kompletné služby sťahovania bytov a rodinných domov v Malackách. Zabezpečíme bezpečný a spoľahlivý presun vášho majetku s maximálnou opatrnosťou.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg", // Perfect for business moving
        title: "Sťahovanie firiem a kancelárií",
        description:
          "Profesionálne sťahovanie podnikov a kancelárií v Malackách. Minimalizujeme prestoje vašej firmy flexibilným sťahovaním aj počas víkendov.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/wrench_icon.svg", // Perfect for furniture assembly
        title: "Montáž a demontáž nábytku",
        description:
          "Odborná montáž a demontáž nábytku pri sťahovaní v Malackách. Postaráme sa o správne rozloženie a následné poskladanie vášho zariadenia.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/crane_icon.svg", // Perfect for heavy items
        title: "Sťahovanie ťažkých predmetov",
        description:
          "Špecializované sťahovanie pianín, trezorů a iných ťažkých bremien v Malackách s použitím profesionálneho vybavenia a bezpečnostných postupov.",
        link: "/stahovanie-tazkych-bremien",
      },
      {
        image: "/icons/globe_icon.svg", // Perfect for international moving (near Austria border)
        title: "Medzinárodné sťahovanie",
        description:
          "Sťahovanie z Malaciek do zahraničia alebo naopak. Výhodná poloha blízko Bratislavy a hraníc s Rakúskom pre efektívnu medzinárodnú prepravu.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/vypratavanie_icon.svg", // Perfect for clearance services
        title: "Vypratávanie nehnuteľností",
        description:
          "Kompletné vypratávanie bytov, domov a nebytových priestorov v Malackách. Ideálne pri predaji nehnuteľnosti alebo generálnej rekonštrukcii.",
        link: "/vypratavanie-bytov-domov",
      },
    ],
  };

  // Data for Map section
  const mapData = {
    title: "Sťahujeme v Malackách a celom Záhorí",
    description:
      "Naše služby poskytujeme v Malackách a všetkých okolitých obciach pre komplexné sťahovanie domácností a firiem.",
    locations: [
      "Malacky mesto",
      "Vinohrádok",
      "Veľké Leváre",
      "Malé Leváre",
      "Gajary",
      "Kostolište",
      "Jakubov",
      "Láb",
      "Plavecký Štvrtok",
      "Suchohrad",
      "Záhorská Ves",
      "Vysoká pri Morave",
      "Zohor",
      "Stupava",
    ],
    additionalText:
      "Lozorno, Pernek, Kuchyňa, Rohožník, Sološnica, Plavecké Podhradie a ďalšie obce na Záhorí.",
  };

  // Data for FAQ section
  const faqData = {
    title: "Často kladené otázky o sťahovaní v Malackách",
    items: [
      {
        question:
          "V ktorých lokalitách v okolí Malaciek poskytujete sťahovacie služby?",
        answer:
          "Naše služby poskytujeme v celom meste Malacky a v širokom okolí na Záhorí vrátane obcí ako Stupava, Zohor, Lozorno, Kostolište, Jakubov, Veľké Leváre, Malé Leváre, Gajary, Plavecký Štvrtok, Záhorská Ves a ďalšie.",
      },
      {
        question: "Aká je cena sťahovania v Malackách?",
        answer:
          "Cena sťahovania závisí od viacerých faktorov ako objem vecí, vzdialenosť, prístupové podmienky a potrebné služby. Pre presný cenový odhad vám radi pripravíme bezplatnú cenovú ponuku po vyplnení kontaktného formulára alebo po telefonickom rozhovore.",
      },
      {
        question:
          "Ako dlho vopred je potrebné objednať sťahovanie v Malackách?",
        answer:
          "Odporúčame objednať sťahovanie aspoň 7-14 dní vopred, aby sme mohli zabezpečiť termín podľa vašich potrieb. V prípade potreby vieme zabezpečiť aj expresné sťahovanie s realizáciou do 24-48 hodín.",
      },
      {
        question: "Poskytujete aj montáž a demontáž nábytku v Malackách?",
        answer:
          "Áno, naše služby zahŕňajú kompletnú demontáž nábytku na pôvodnom mieste a následnú montáž v novom priestore. Naši pracovníci majú skúsenosti s rôznymi typmi nábytku vrátane IKEA, Asko, Jysk a ďalších značiek.",
      },
      {
        question: "Sťahujete aj z Malaciek do Bratislavy a opačne?",
        answer:
          "Áno, jednou z našich hlavných trás je práve sťahovanie medzi Malackami a Bratislavou v oboch smeroch. Vďaka výbornej znalosti tejto trasy vieme ponúknuť efektívne a rýchle sťahovanie medzi týmito mestami za výhodné ceny.",
      },
      {
        question:
          "Poskytujete sťahovacie služby aj pre firmy v priemyselných parkoch v Malackách?",
        answer:
          "Áno, máme skúsenosti so sťahovaním firiem a kancelárií v priemyselných parkoch v Malackách a okolí. Disponujeme potrebným vybavením a skúsenosťami pre efektívne firemné sťahovanie s minimálnym prerušením vašej prevádzky.",
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
