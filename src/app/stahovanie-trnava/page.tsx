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
  title: "Sťahovanie Trnava - byty, domy, nábytok a kancelárie",
  description:
    "Profesionálne sťahovacie služby v Trnave a okolí. Rýchlo, spoľahlivo a za výhodné ceny. Sťahujeme byty, domy, kancelárie a firmy v celom meste a okolí.",
  keywords:
    "stahovanie trnava, stahovanie bytov trnava, stahovacie služby trnava, stahovanie firiem trnava, preprava nabytku trnava",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-trnava",
      languages: {
        sk: "https://www.sofoservis.sk/stahovanie-trnava",
        en: "https://www.sofoservis.sk/en/moving-trnava",
        "x-default": "https://www.sofoservis.sk/stahovanie-trnava",
      },
  },
  openGraph: {
      title: "Sťahovanie Trnava - byty, domy, nábytok a kancelárie | Sofoservis",
      description: "Profesionálne sťahovacie služby v Trnave a okolí od 25€/hod. Rýchlo, spoľahlivo a za výhodné ceny. Sťahujeme byty, domy, kancelárie a firmy.",
      url: "https://www.sofoservis.sk/stahovanie-trnava",
      siteName: "Sofoservis",
      images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
      locale: "sk_SK",
      type: "website",
    },
  };

export default function StahovanieTrnavaPage() {
  // Data for Hero section
  const heroData = {
    title: "Sťahovanie Trnava: Rýchlo a spoľahlivo",
    description:
      "Kompletné sťahovacie služby v Trnave a okolí. Profesionálny tím, výhodné ceny, spokojnosť garantovaná. Sťahujeme byty, domy, kancelárie a firmy v Trnave.",
    formTitle: "Sťahovanie v Trnave bez starostí s bezplatnou ponukou",
    formSubtitle: "Vyplňte formulár nižšie pre rýchlu fixnú cenu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  // Data for Features section
  const featuresData = {
    title: "Komplexné sťahovacie služby v Trnave",
    description:
      "Bezpečne presúvame váš majetok v Trnave a okolí s dôrazom na kvalitu a spokojnosť zákazníkov.",
    features: [
      {
        image: "/icons/house_icon.svg", // Perfect for apartment/home moving
        title: "Sťahovanie bytov a domov v Trnave",
        description:
          "Profesionálne sťahovanie rodinných domov a bytov v Trnave. Postaráme sa o kompletnú organizáciu vrátane balenia, prepravy a vybalenia na novom mieste.",
        link: "/stahovanie-bytov-domov", // Real URL from project
      },
      {
        image: "/icons/briefcase_icon.svg", // Perfect for business moving
        title: "Firemné sťahovanie v Trnave",
        description:
          "Sťahujeme kancelárie a firmy v Trnave s minimálnymi prestojmi. Organizujeme presun počas víkendov a sviatkov, aby váš tím mohol pokračovať v práci bez prerušenia.",
        link: "/stahovanie-kancelarii-firiem", // Real URL from project
      },
      {
        image: "/icons/truck_icon.svg", // Perfect for furniture transport
        title: "Preprava nábytku v Trnave",
        description:
          "Bezpečná preprava nábytku a ťažkých predmetov v Trnave. Používame špecializované techniki a zariadenia pre bezpečné manipulovanie s vašimi cennými kusmi.",
        link: "/stahovanie-preprava-nabytku", // Real URL from project
      },
      {
        image: "/icons/globe_icon.svg", // Perfect for international moving
        title: "Medzinárodné sťahovanie z Trnavy",
        description:
          "Presťahujeme vás z Trnavy kamkoľvek v Európe. S dôrazom na presné termíny a bezpečné balenie vám pomôžeme začať nový život v zahraničí.",
        link: "/medzinarodne-stahovanie", // Real URL from project
      },
      {
        image: "/icons/hammer_icon.svg", // Perfect for demolition work
        title: "Búracie a demolačné práce v Trnave",
        description:
          "Ponúkame profesionálne búracie a demolačné práce v Trnave. Špecializujeme sa na búranie stien, priečok a kompletnú demoláciu budov s následným odvozom sute.",
        link: "/buracie-demolacne-prace", // Real URL from project
      },
      {
        image: "/icons/container_icon.svg", // Perfect for construction waste removal
        title: "Odvoz stavebného odpadu v Trnave",
        description:
          "Zabezpečujeme profesionálny odvoz a likvidáciu stavebného odpadu v Trnave. Postaráme sa o environmentálne zodpovedné zneškodnenie všetkých materiálov.",
        link: "/odvoz-likvidacia-stavebneho-odpadu", // Real URL from project
      },
    ],
  };

  // Data for Map section - adjusted for Trnava
  const mapData = {
    title: "Sťahujeme v Trnave a okolí",
    description:
      "Naše služby poskytujeme v celej Trnave a v okolitých obciach pre komplexné sťahovanie domácností a firiem.",
    locations: [
      "Trnava mesto",
      "Špačince",
      "Bohdanovce",
      "Bučany",
      "Zavar",
      "Malženice",
      "Jaslovské Bohunice",
      "Voderady",
      "Zeleneč",
      "Hrnčiarovce nad Parnou",
      "Biely Kostol",
      "Ružindol",
      "Zvončín",
      "Suchá nad Parnou",
      "Dolné Lovčice",
      "Brestovany",
    ],
    additionalText: "Hlohovec, Sereď, Piešťany, Modra a ďalšie okolité obce.",
  };

  // Data for FAQ section
  const faqData = {
    title: "Často kladené otázky o sťahovaní v Trnave",
    items: [
      {
        question: "V ktorých častiach Trnavy poskytujete sťahovacie služby?",
        answer:
          "Naše služby poskytujeme v celom meste Trnava a vo všetkých okolitých obciach. Pôsobíme tiež v širšom okolí - Hlohovec, Sereď, Piešťany, a ďalšie lokality v Trnavskom kraji.",
      },
      {
        question: "Aká je cena sťahovania v Trnave?",
        answer:
          "Cena sťahovania závisí od viacerých faktorov ako objem vecí, vzdialenosť, prístupové podmienky a potrebné služby. Pre presný cenový odhad vám radi pripravíme bezplatnú cenovú ponuku po vyplnení kontaktného formulára alebo po telefonickom rozhovore.",
      },
      {
        question: "Ako dlho vopred je potrebné objednať sťahovanie v Trnave?",
        answer:
          "Odporúčame objednať sťahovanie aspoň 7-14 dní vopred, aby sme mohli zabezpečiť termín podľa vašich potrieb. V prípade potreby vieme zabezpečiť aj expresné sťahovanie s realizáciou do 24-48 hodín.",
      },
      {
        question: "Poskytujete aj montáž a demontáž nábytku v Trnave?",
        answer:
          "Áno, naše služby zahŕňajú kompletnú demontáž nábytku na pôvodnom mieste a následnú montáž v novom priestore. Naši pracovníci majú skúsenosti s rôznymi typmi nábytku vrátane IKEA, Asko, Jysk a ďalších značiek.",
      },
      {
        question:
          "Sťahujete aj ťažké predmety ako klavíry alebo trezory v Trnave?",
        answer:
          "Áno, špecializujeme sa aj na sťahovanie ťažkých a objemných predmetov ako sú klavíry, trezory, biliardové stoly či antický nábytok. Používame špeciálne vybavenie a techniky na bezpečnú manipuláciu s týmito predmetmi.",
      },
      {
        question: "Sťahujete aj z Trnavy do iných miest na Slovensku?",
        answer:
          "Áno, poskytujeme služby nielen v rámci Trnavy, ale aj z Trnavy do iných miest na Slovensku alebo opačne. Realizujeme sťahovanie medzi Trnavou a Bratislavou, Nitrou, Trenčínom, ale aj do vzdialenejších destinácií ako Košice či Prešov.",
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
      <div>
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
      <div className="pt-10">
        <FAQ title={faqData.title} items={faqData.items} />
      </div>

      {/* CTA section */}
      <div className="py-8 pb-16">
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
