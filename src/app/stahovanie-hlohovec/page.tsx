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
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata = {
  title: "Sťahovanie Hlohovec - byty, domy, nábytok a kancelárie",
  description:
    "Profesionálne sťahovacie služby v Hlohovci a okolí. Rýchlo, spoľahlivo a za výhodné ceny. Sťahujeme byty, domy, kancelárie a firmy v celom meste a blízkom okolí.",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-hlohovec",
  },
  keywords:
    "stahovanie hlohovec, stahovanie bytov hlohovec, stahovacie služby hlohovec, stahovanie firiem hlohovec, preprava nabytku hlohovec, stahovanie dom hlohovec",
};

export default function StahovanieHlohovecPage() {
  // Data for Hero section
  const heroData = {
    title: "Sťahovanie Hlohovec: Rýchlo a spoľahlivo",
    description:
      "Kompletné sťahovacie služby v Hlohovci a okolí. Profesionálny tím, výhodné ceny, spokojnosť garantovaná. Sťahujeme byty, domy, kancelárie a firmy v Hlohovci a blízkom okolí.",
    formTitle: "Sťahovanie v Hlohovci bez starostí s bezplatnou ponukou",
    formSubtitle: "Vyplňte formulár nižšie pre rýchlu fixnú cenu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Data for Features section
  const featuresData = {
    title: "Profesionálne sťahovacie služby v Hlohovci",
    description:
      "Kompletné služby sťahovania pre domácnosti a firmy v Hlohovci a okolí s dôrazom na bezpečnosť a spoľahlivosť.",
    features: [
      {
        image: "/icons/house_icon.svg", // Perfect for apartment/home moving
        title: "Sťahovanie bytov a domov v Hlohovci",
        description:
          "Kompletné služby sťahovania bytov a rodinných domov v Hlohovci. Zabezpečíme bezpečný presun vášho majetku s maximálnou starostlivosťou.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg", // Perfect for business moving
        title: "Sťahovanie firiem a kancelárií",
        description:
          "Profesionálne sťahovanie podnikov a kancelárií v Hlohovci. Sťahujeme aj počas víkendov pre minimalizáciu prestojov vašej firmy.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/wrench_icon.svg", // Perfect for furniture assembly
        title: "Montáž a demontáž nábytku",
        description:
          "Odborná montáž a demontáž nábytku pri sťahovaní v Hlohovci. Zabezpečíme správne rozloženie a následné poskladanie vášho zariadenia.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/crane_icon.svg", // Perfect for heavy items
        title: "Sťahovanie ťažkých predmetov",
        description:
          "Špecializované sťahovanie pianín, trezorů a iných ťažkých bremien v Hlohovci s použitím profesionálneho vybavenia a techník.",
        link: "/stahovanie-tazkych-bremien",
      },
      {
        image: "/icons/broom_icon.svg", // Perfect for clearance services
        title: "Vypratávanie priestorov",
        description:
          "Kompletné vypratávanie bytov, domov a nebytových priestorov v Hlohovci. Vhodné pri predaji nehnuteľnosti alebo generálnej rekonštrukcii.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/container_icon.svg", // Perfect for construction waste removal
        title: "Odvoz stavebného odpadu",
        description:
          "Odvoz a likvidácia stavebného odpadu v Hlohovci. Zabezpečíme kontajnery a ekologickú likvidáciu odpadu po rekonštrukcii alebo sťahovaní.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
    ],
  };

  // Data for Map section
  const mapData = {
    title: "Sťahujeme v Hlohovci a okolí",
    description:
      "Naše služby poskytujeme v celom Hlohovci a v okolitých obciach pre komplexné sťahovanie domácností a firiem.",
    locations: [
      "Hlohovec - centrum",
      "Peter",
      "Šulekovo",
      "Pribinova",
      "Čepenská",
      "Nábrežie",
      "Svätopeterská",
      "Sihoť",
      "Bojničky",
      "Sasinkova",
      "Nitrianska",
      "Tehelňa",
      "Koperníkova",
      "Bernoláka",
    ],
    additionalText:
      "Leopoldov, Červeník, Madunice, Trakovice, Koplotovce, Pastuchov, Pečeňady a ďalšie okolité obce v regióne.",
  };

  // Data for FAQ section
  const faqData = {
    title: "Často kladené otázky o sťahovaní v Hlohovci",
    items: [
      {
        question: "V ktorých častiach Hlohovca poskytujete sťahovacie služby?",
        answer:
          "Naše služby poskytujeme v celom Hlohovci vrátane všetkých mestských častí ako Peter, Šulekovo, centrum, Pribinova, Čepenská, Nábrežie a ďalšie. Pôsobíme tiež v okolitých obciach - Leopoldov, Červeník, Madunice, Trakovice a v celom regióne.",
      },
      {
        question: "Aká je cena sťahovania v Hlohovci?",
        answer:
          "Cena sťahovania závisí od viacerých faktorov ako objem vecí, vzdialenosť, prístupové podmienky a potrebné služby. Pre presný cenový odhad vám radi pripravíme bezplatnú cenovú ponuku po vyplnení kontaktného formulára alebo po telefonickom rozhovore.",
      },
      {
        question: "Ako dlho vopred je potrebné objednať sťahovanie v Hlohovci?",
        answer:
          "Odporúčame objednať sťahovanie aspoň 7-14 dní vopred, aby sme mohli zabezpečiť termín podľa vašich potrieb. V prípade potreby vieme zabezpečiť aj expresné sťahovanie s realizáciou do 24-48 hodín.",
      },
      {
        question: "Poskytujete aj montáž a demontáž nábytku v Hlohovci?",
        answer:
          "Áno, naše služby zahŕňajú kompletnú demontáž nábytku na pôvodnom mieste a následnú montáž v novom priestore. Naši pracovníci majú skúsenosti s rôznymi typmi nábytku vrátane IKEA, Asko, Jysk a ďalších značiek.",
      },
      {
        question: "Poskytujete aj sťahovanie z Hlohovca do iných miest?",
        answer:
          "Áno, okrem lokálneho sťahovania v rámci Hlohovca poskytujeme aj medzimestské sťahovanie, napríklad z Hlohovca do Bratislavy, Trnavy, Nitry či iných miest na Slovensku, ako aj medzinárodné sťahovanie. Zabezpečíme bezpečný presun vášho majetku na akúkoľvek vzdialenosť.",
      },
      {
        question:
          "Je možné si objednať iba časť služieb, napríklad len prepravu?",
        answer:
          "Áno, naše služby sú modulárne a vieme ich prispôsobiť presne podľa vašich potrieb. Môžete si objednať komplexnú službu alebo len niektoré jej časti, ako napríklad prepravu nábytku, balenie vecí, montáž/demontáž či vypratávanie. Vždy sa prispôsobíme vašim požiadavkám.",
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
      <div className="pt-10 md:pt-[100px]">
        <FAQ title={faqData.title} items={faqData.items} />
      </div>

      {/* CTA section */}
      <div className="pt-10 md:pt-[100px]">
        <CTA />
      </div>
    
      <ContactFormSection />
    </main>
  );
}
