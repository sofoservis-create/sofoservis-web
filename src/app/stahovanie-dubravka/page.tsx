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
  title: "Sťahovanie Dúbravka Bratislava - byty, paneláky | Sofoservis",
  description:
    "Profesionálne sťahovanie v Dúbravke. Sťahujeme byty z panelových domov aj rodinné domy. Skúsenosti s vynáškou bez výťahu. Rýchlo a za výhodné ceny.",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-dubravka",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-dubravka",
      en: "https://www.sofoservis.sk/en/moving-dubravka",
      "x-default": "https://www.sofoservis.sk/stahovanie-dubravka",
    },
  },
  keywords:
    "stahovanie dubravka, stahovanie bytov dubravka, stahovanie dubravka bratislava, stahovacie sluzby dubravka",
  openGraph: {
    title: "Sťahovanie Dúbravka Bratislava - byty, paneláky | Sofoservis",
    description:
      "Profesionálne sťahovanie v Dúbravke od 25€/hod. Paneláky, byty, rodinné domy. Spoľahlivý tím, výhodné ceny.",
    url: "https://www.sofoservis.sk/stahovanie-dubravka",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieDubravkaPage() {
  const heroData = {
    title: "Sťahovanie Dúbravka: Rýchlo a spoľahlivo",
    description:
      "Sťahujeme byty a domácnosti v celej Dúbravke. Máme skúsenosti so sťahovaním z panelových domov vrátane vynášky po schodoch bez výťahu. Profesionálny tím, výhodné ceny.",
    formTitle: "Sťahovanie v Dúbravke — bezplatná ponuka",
    formSubtitle: "Vyplňte formulár pre rýchlu fixnú cenu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Profesionálne sťahovacie služby v Dúbravke",
    description:
      "Kompletné sťahovanie pre domácnosti v Dúbravke — panelové domy, rodinné domy aj vynáška bez výťahu.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie bytov v Dúbravke",
        description:
          "Kompletné sťahovanie bytov v Dúbravke vrátane panelových domov. Bezpečne prevezieme váš nábytok na nové miesto.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Sťahovanie kancelárií",
        description:
          "Sťahujeme kancelárie a menšie firmy v Dúbravke aj okolí. Sťahujeme aj cez víkend bez príplatku.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/wrench_icon.svg",
        title: "Montáž a demontáž nábytku",
        description:
          "Odborná montáž a demontáž nábytku pri sťahovaní v Dúbravke. Rýchlo, precízne a bez poškodenia.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/crane_icon.svg",
        title: "Vynáška bez výťahu",
        description:
          "Vynáška nábytku po schodoch bez výťahu v panelových domoch v Dúbravke. Za každé poschodie transparentný poplatok 15€.",
        link: "/stahovanie-tazkych-bremien",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Vypratávanie priestorov",
        description:
          "Vypratávanie bytov, pivníc a garáží v Dúbravke. Odnos starého nábytku a likvidácia odpadu.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Sťahovanie po celej Bratislave",
        description:
          "Sťahujeme z Dúbravky do akejkoľvek časti Bratislavy aj do okolitých obcí. Rýchlo a spoľahlivo.",
        link: "/stahovanie-bratislava",
      },
    ],
  };

  const mapData = {
    title: "Sťahujeme po celej Dúbravke a okolí",
    description:
      "Pokrývame celú Dúbravku vrátane všetkých sídlisk, ulíc a priľahlých mestských častí.",
    locations: [
      "Dúbravka",
      "Karlova Ves",
      "Devínska Nová Ves",
      "Záhorská Bystrica",
      "Lamač",
      "Staré Mesto",
      "Nové Mesto",
      "Rača",
    ],
    additionalText: "Sťahujeme aj do okolitých obcí — Stupava, Malacky a ďalšie.",
  };

  const faqData = {
    title: "Často kladené otázky — sťahovanie v Dúbravke",
    items: [
      {
        question: "Sťahujete aj z vyšších poschodí panelákových domov v Dúbravke?",
        answer:
          "Áno, toto je naša bežná práca. Máme skúsenosti s vynáškou nábytku z akéhokoľvek poschodia bez výťahu. Za každé poschodie bez výťahu účtujeme 15€ — transparentný a férový poplatok.",
      },
      {
        question: "Aká je cena sťahovania v Dúbravke?",
        answer:
          "Sťahovanie v Dúbravke účtujeme od 25€/hod na pracovníka. Najobľúbenejšia možnosť sú 3 pracovníci za 67€/hod. Sťahovanie v rámci Bratislavy od 40€. Pre presný odhad vyplňte formulár — ponuka je zadarmo.",
      },
      {
        question: "Ako dlho trvá sťahovanie bytu v Dúbravke?",
        answer:
          "Jednoizbový byt trvá zvyčajne 2–4 hodiny, dvojizbový 4–6 hodín. Závisí od poschodia, množstva nábytku a vzdialenosti nového bytu.",
      },
      {
        question: "Sťahujete aj z Dúbravky do Karlovej Vsi alebo Devínskej?",
        answer:
          "Áno, sťahujeme z Dúbravky do akejkoľvek časti Bratislavy — Karlova Ves, Devínska Nová Ves, Lamač, centrum a ďalšie. Sťahovanie v rámci mesta od 40€.",
      },
      {
        question: "Pomáhate aj s rozobraním a zložením nábytku?",
        answer:
          "Áno, v rámci sťahovania ponúkame kompletnú demontáž nábytku pred odchodom a montáž v novom byte. Šetríme váš čas a zaručujeme bezpečnosť nábytku počas celého procesu.",
      },
      {
        question: "Sťahujete aj cez víkend?",
        answer:
          "Áno, pracujeme 6 dní v týždni vrátane soboty od 8:00 do 17:00. Za sobotu neúčtujeme žiadny príplatok. Nedeľa je možná po dohode.",
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
        services={[{"title":"Sťahovanie Bratislava","description":"Profesionálne sťahovanie v celej Bratislave.","href":"/stahovanie-bratislava","icon":"/icons/truck_icon.svg"},{"title":"Sťahovanie bytov a domov","description":"Spoľahlivé sťahovanie bytov a rodinných domov.","href":"/stahovanie-bytov-domov","icon":"/icons/house_icon.svg"},{"title":"Vypratávanie Bratislava","description":"Vypratávanie bytov a priestorov v Bratislave od 25€/hod.","href":"/vypratavanie-bratislava","icon":"/icons/vypratavanie_icon.svg"},{"title":"Montáž nábytku","description":"Profesionálna montáž a demontáž nábytku.","href":"/montaz-nabytku","icon":"/icons/wrench_icon.svg"}]}
      />
      <FAQJsonLd items={faqData.items} />
    </main>
  );
}
