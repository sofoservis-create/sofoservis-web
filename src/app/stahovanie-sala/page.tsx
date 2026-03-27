import React from "react";
import Hero from "@/components/sections/Hero";
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
  title: "Sťahovanie Šaľa - byty, domy, nábytok a kancelárie",
  description:
    "Profesionálne sťahovacie služby v Šali a okolí. Rýchlo, spoľahlivo a za výhodné ceny. Sťahujeme byty, domy, kancelárie a firmy v celej Šali a priľahlých obciach.",
  keywords:
    "stahovanie sala, stahovanie bytov sala, stahovacie služby sala, stahovanie firiem sala, preprava nabytku sala, stahovanie dom sala",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-sala",
      languages: {
        sk: "https://www.sofoservis.sk/stahovanie-sala",
        en: "https://www.sofoservis.sk/en/moving-sala",
        "x-default": "https://www.sofoservis.sk/stahovanie-sala",
      },
  },
  openGraph: {
      title: "Sťahovanie Šaľa - byty, domy, nábytok a kancelárie",
      description: "Profesionálne sťahovacie služby v Šali a okolí od 25€/hod. Rýchlo, spoľahlivo a za výhodné ceny. Sťahujeme byty, domy a kancelárie.",
      url: "https://www.sofoservis.sk/stahovanie-sala",
      siteName: "Sofoservis",
      images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
      locale: "sk_SK",
      type: "website",
    },
  };

export default function StahovanieSalaPage() {
  // Data for Hero section
  const heroData = {
    title: "Sťahovanie Šaľa: Rýchlo a spoľahlivo",
    description:
      "Kompletné sťahovacie služby v Šali a okolí. Profesionálny tím, výhodné ceny, spokojnosť garantovaná. Sťahujeme byty, domy, kancelárie a firmy v celej Šali a priľahlých obciach.",
    formTitle: "Sťahovanie v Šali bez starostí s bezplatnou ponukou",
    formSubtitle: "Vyplňte formulár nižšie pre rýchlu fixnú cenu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Data for Features section
  const featuresData = {
    title: "Profesionálne sťahovacie služby v Šali",
    description:
      "Kompletné služby sťahovania pre domácnosti a firmy v celej Šali a okolí.",
    features: [
      {
        image: "/icons/house_icon.svg", // Perfect for apartment moving
        title: "Sťahovanie bytov v Šali",
        description:
          "Kompletné služby sťahovania bytov v Šali. Bezpečne prevezieme váš nábytok a osobné veci na nové miesto.",
        link: "/sluzby/stahovanie-bytov",
      },
      {
        image: "/icons/briefcase_icon.svg", // Perfect for office/business moving
        title: "Sťahovanie kancelárií a firiem",
        description:
          "Profesionálne sťahovanie firiem a kancelárií v Šali. Minimalizujeme prestoje vašej firmy sťahovaním počas víkendov a sviatkov.",
        link: "/sluzby/stahovanie-firiem",
      },
      {
        image: "/icons/wrench_icon.svg", // Perfect for furniture assembly
        title: "Montáž a demontáž nábytku",
        description:
          "Odborná montáž a demontáž akéhokoľvek nábytku pri sťahovaní v Šali. Šetríme váš čas a energiu.",
        link: "/sluzby/montaz-nabytku",
      },
      {
        image: "/icons/crane_icon.svg", // Perfect for heavy items
        title: "Sťahovanie ťažkých bremien",
        description:
          "Špecializujeme sa na presun ťažkých bremien ako sú klavíry, trezoroch či veľké kusy nábytku v Šali a okolí.",
        link: "/sluzby/stahovanie-tazkych-bremien",
      },
      {
        image: "/icons/calendar_icon.svg", // Perfect for express/24-7 services
        title: "Expresné sťahovanie v Šali",
        description:
          "Potrebujete sa sťahovať rýchlo? Naše expresné sťahovanie v Šali vám zaručí presun do 24 hodín od objednávky.",
        link: "/sluzby/stahovanie-24-7",
      },
      {
        image: "/icons/broom_icon.svg", // Perfect for clearance services
        title: "Vypratávanie priestorov",
        description:
          "Kompletné vypratávanie nehnuteľností v Šali. Vhodné pri predaji, rekonštrukcii alebo dedičskom konaní.",
        link: "/sluzby/vypratavanie-bytov",
      },
    ],
  };

  // Data for Map section
  const mapData = {
    title: "Sťahujeme v Šali a okolí",
    description:
      "Naše služby poskytujeme v celej Šali a priľahlých obciach pre komplexné sťahovanie domácností a firiem.",
    locations: [
      "Šaľa - Veča",
      "Šaľa - centrum",
      "Diakovce",
      "Trnovec nad Váhom",
      "Dlhá nad Váhom",
      "Kráľová nad Váhom",
      "Horná Kráľová",
      "Tešedíkovo",
      "Vlčany",
      "Neded",
      "Diakovce",
      "Selice",
      "Žihárec",
      "Močenok",
    ],
    additionalText:
      "Galanta, Nové Zámky, Nitra, Sereď a ďalšie okolité mestá a obce v regióne.",
  };

  // Data for FAQ section
  const faqData = {
    title: "Často kladené otázky o sťahovaní v Šali",
    items: [
      {
        question: "V ktorých častiach Šale poskytujete sťahovacie služby?",
        answer:
          "Naše služby poskytujeme v celej Šali vrátane mestskej časti Veča, ako aj v okolí Šale. Pôsobíme v obciach ako Trnovec nad Váhom, Diakovce, Tešedíkovo, Vlčany, Neded, Selice, Žihárec, Močenok a ďalších obciach v okrese Šaľa.",
      },
      {
        question: "Aká je cena sťahovania v Šali?",
        answer:
          "Cena sťahovania závisí od viacerých faktorov ako objem vecí, vzdialenosť, prístupové podmienky a potrebné služby. Pre presný cenový odhad vám radi pripravíme bezplatnú cenovú ponuku po vyplnení kontaktného formulára alebo po telefonickom rozhovore.",
      },
      {
        question: "Ako dlho vopred je potrebné objednať sťahovanie v Šali?",
        answer:
          "Odporúčame objednať sťahovanie aspoň 7-14 dní vopred, aby sme mohli zabezpečiť termín podľa vašich potrieb. V prípade potreby vieme zabezpečiť aj expresné sťahovanie s realizáciou do 24-48 hodín.",
      },
      {
        question: "Poskytujete aj montáž a demontáž nábytku v Šali?",
        answer:
          "Áno, naše služby zahŕňajú kompletnú demontáž nábytku na pôvodnom mieste a následnú montáž v novom priestore. Naši pracovníci majú skúsenosti s rôznymi typmi nábytku vrátane IKEA, Asko, Jysk a ďalších značiek.",
      },
      {
        question: "Sťahujete aj z/do okolitých obcí a miest v blízkosti Šale?",
        answer:
          "Áno, okrem mesta Šaľa pokrývame všetky okolité obce a mestá. Realizujeme sťahovanie v celom okrese Šaľa, ako aj sťahovanie medzi Šaľou a mestami ako Galanta, Nové Zámky, Nitra či Sereď. Naše vozidlá sú pripravené premiestniť váš majetok bezpečne kamkoľvek potrebujete.",
      },
      {
        question: "Ponúkate aj balenie vecí pred sťahovaním v Šali?",
        answer:
          "Áno, v rámci našich komplexných služieb ponúkame profesionálne balenie majetku pred sťahovaním. Naši skúsení pracovníci vedia, ako správne zabaliť a ochrániť rôzne druhy predmetov vrátane krehkých vecí, elektroniky či cenností. Taktiež dodávame všetok potrebný obalový materiál.",
      },
    ],
  };

  return (
    <main className="bg-white">
      {/* Hero section - no wrapper needed as it has its own spacing */}
      <Hero
        title={heroData.title}
        description={heroData.description}
        formTitle={heroData.formTitle}
        formSubtitle={heroData.formSubtitle}
        backgroundImage={heroData.backgroundImage}
            benefits={["Poistenie nábytku zahrnuté", "Bez skrytých poplatkov", "Záväzná cena vopred"]}
      />

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
        services={[{"title":"Sťahovanie bytov a domov","description":"Spoľahlivé sťahovanie bytov a rodinných domov.","href":"/stahovanie-bytov-domov","icon":"/icons/house_icon.svg"},{"title":"Sťahovanie kancelárií","description":"Rýchle sťahovanie firiem s minimálnym prestojom.","href":"/stahovanie-kancelarii-firiem","icon":"/icons/briefcase_icon.svg"},{"title":"Vypratávanie bytov a domov","description":"Kompletné vypratanie bytu alebo domu.","href":"/vypratavanie-bytov-domov","icon":"/icons/broom_icon.svg"},{"title":"Montáž nábytku","description":"Profesionálna montáž a demontáž nábytku.","href":"/montaz-nabytku","icon":"/icons/wrench_icon.svg"}]}
      />
      <FAQJsonLd items={faqData.items} />
    </main>
  );
}
