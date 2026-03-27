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
  title: "Sťahovanie Karlova Ves Bratislava - byty, domy | Sofoservis",
  description:
    "Profesionálne sťahovanie v Karlovej Vsi. Sťahujeme byty, domy a kancelárie v celej Karlovej Vsi a okolí. Rýchlo, spoľahlivo, za výhodné ceny. Cenová ponuka zadarmo.",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-karlova-ves",
  },
  keywords:
    "stahovanie karlova ves, stahovanie bytov karlova ves, stahovacie sluzby karlova ves bratislava, stahovanie karlova ves bratislava",
  openGraph: {
    title: "Sťahovanie Karlova Ves Bratislava - byty, domy | Sofoservis",
    description:
      "Profesionálne sťahovanie v Karlovej Vsi od 25€/hod. Byty, domy, paneláky. Skúsený tím, férové ceny.",
    url: "https://www.sofoservis.sk/stahovanie-karlova-ves",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieKarlovaVesPage() {
  const heroData = {
    title: "Sťahovanie Karlova Ves: Rýchlo a spoľahlivo",
    description:
      "Sťahujeme byty, domy a kancelárie v celej Karlovej Vsi Bratislavy. Skúsený tím, výhodné ceny, spokojnosť garantovaná. Pokrývame Patrónku, Líščie údolie aj celú Karlovú Ves.",
    formTitle: "Sťahovanie v Karlovej Vsi — bezplatná ponuka",
    formSubtitle: "Vyplňte formulár pre rýchlu fixnú cenu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  const featuresData = {
    title: "Profesionálne sťahovacie služby v Karlovej Vsi",
    description:
      "Kompletné sťahovanie pre domácnosti a firmy v Karlovej Vsi — bytové domy, rodinné domy aj vilové štvrte.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie bytov v Karlovej Vsi",
        description:
          "Kompletné sťahovanie bytov v Karlovej Vsi. Bezpečne prevezieme váš nábytok a osobné veci na nové miesto.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Sťahovanie kancelárií",
        description:
          "Sťahujeme kancelárie a firmy v Karlovej Vsi. Sťahujeme aj cez víkend, aby sme minimalizovali prestoje vašej firmy.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/wrench_icon.svg",
        title: "Montáž a demontáž nábytku",
        description:
          "Odborná montáž a demontáž nábytku pri sťahovaní v Karlovej Vsi. Šetríme váš čas a energiu.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/crane_icon.svg",
        title: "Sťahovanie ťažkých predmetov",
        description:
          "Sťahovanie klavírov, trezorov a ťažkého nábytku v Karlovej Vsi. Špeciálne vybavenie a skúsení pracovníci.",
        link: "/stahovanie-tazkych-bremien",
      },
      {
        image: "/icons/broom_icon.svg",
        title: "Vypratávanie priestorov",
        description:
          "Vypratávanie bytov, domov a pivníc v Karlovej Vsi. Vhodné pri predaji alebo rekonštrukcii nehnuteľnosti.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Sťahovanie po celej Bratislave",
        description:
          "Sťahujeme z Karlovej Vsi do akejkoľvek časti Bratislavy aj do okolitých obcí. Rýchlo a spoľahlivo.",
        link: "/stahovanie-bratislava",
      },
    ],
  };

  const mapData = {
    title: "Sťahujeme po celej Karlovej Vsi a okolí",
    description:
      "Pokrývame celú Karlovú Ves vrátane Patrónky, Líščieho údolia, Molecovej a priľahlých mestských častí.",
    locations: [
      "Karlova Ves — Patrónka",
      "Karlova Ves — Líščie údolie",
      "Karlova Ves — Molecova",
      "Dúbravka",
      "Devínska Nová Ves",
      "Lamač",
      "Záhorská Bystrica",
      "Staré Mesto",
      "Nové Mesto",
    ],
    additionalText: "Sťahujeme aj do okolitých obcí — Stupava, Malacky a ďalšie.",
  };

  const faqData = {
    title: "Často kladené otázky — sťahovanie v Karlovej Vsi",
    items: [
      {
        question: "Sťahujete aj z vilových oblastí v Karlovej Vsi?",
        answer:
          "Áno, máme skúsenosti so sťahovaním z rodinných domov a víl v Líščom údolí a Patrónke. Prístupové komunikácie ani strmé cesty nám nerobia problém.",
      },
      {
        question: "Aká je cena sťahovania v Karlovej Vsi?",
        answer:
          "Sťahovanie v Karlovej Vsi účtujeme od 25€/hod na pracovníka. Najobľúbenejšia možnosť sú 3 pracovníci za 67€/hod. Sťahovanie v rámci mesta od 40€. Pre presný odhad vyplňte formulár — ponuka je zadarmo.",
      },
      {
        question: "Ako dlho trvá sťahovanie bytu v Karlovej Vsi?",
        answer:
          "Jednoizbový byt trvá zvyčajne 2–4 hodiny, dvojizbový 4–6 hodín. Pri rodinných domoch počítajte s celým pracovným dňom.",
      },
      {
        question: "Sťahujete aj do Dúbravky alebo Lamača?",
        answer:
          "Áno, sťahujeme z Karlovej Vsi do Dúbravky, Lamača, Devínskej Novej Vsi aj ďalších mestských častí Bratislavy. Sťahovanie v rámci mesta od 40€.",
      },
      {
        question: "Pomáhate aj s balením vecí pred sťahovaním?",
        answer:
          "Áno, na požiadanie zabezpečíme aj balenie vecí do krabíc. Dodáme baliaci materiál a všetko odborne zabalíme, aby sa nič nepoškodilo počas prepravy.",
      },
      {
        question: "Sťahujete aj cez víkend?",
        answer:
          "Áno, pracujeme 6 dní v týždni vrátane soboty od 8:00 do 17:00. Za sobotu neúčtujeme príplatok. Nedeľa je možná po dohode.",
      },
    ],
  };

  return (
    <main className="bg-white">
      <Hero
        title={heroData.title}
        description={heroData.description}
        formTitle={heroData.formTitle}
        formSubtitle={heroData.formSubtitle}
        backgroundImage={heroData.backgroundImage}
            benefits={["Poistenie nábytku zahrnuté", "Bez skrytých poplatkov", "Záväzná cena vopred"]}
      />
      <div>
        <Clients />
      </div>
      <div>
        <GoogleReviews showCarousel={true} />
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
        <LocationMap
          title={mapData.title}
          description={mapData.description}
          locations={mapData.locations}
          additionalText={mapData.additionalText}
        />
      </div>
      <div>
        <Reviews />
      </div>
      <div>
        <FAQ title={faqData.title} items={faqData.items} />
      </div>
      <div>
        <CTA />
      </div>
      <ServicePricing filter={["stahovanie", "vypratavanie", "medzinarodne-stahovanie"]} />
      <TrustBadges />
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[{"title":"Sťahovanie Bratislava","description":"Profesionálne sťahovanie v celej Bratislave.","href":"/stahovanie-bratislava","icon":"/icons/truck_icon.svg"},{"title":"Sťahovanie bytov a domov","description":"Spoľahlivé sťahovanie bytov a rodinných domov.","href":"/stahovanie-bytov-domov","icon":"/icons/house_icon.svg"},{"title":"Vypratávanie Bratislava","description":"Vypratávanie bytov a priestorov v Bratislave od 25€/hod.","href":"/vypratavanie-bratislava","icon":"/icons/broom_icon.svg"},{"title":"Montáž nábytku","description":"Profesionálna montáž a demontáž nábytku.","href":"/montaz-nabytku","icon":"/icons/wrench_icon.svg"}]}
      />
      <FAQJsonLd items={faqData.items} />
    </main>
  );
}
