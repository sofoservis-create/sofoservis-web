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
  title: "Vypratávanie Dúbravka - byty, pivnice, domy | Sofoservis",
  description:
    "Profesionálne vypratávanie bytov, pivníc a domov v Dúbravke od 25€/hod. Jednoizbový byt od 200€. Rýchlo a spoľahlivo. Obhliadka priestoru zadarmo.",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-dubravka",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-dubravka",
      en: "https://www.sofoservis.sk/en/home-clearance-dubravka",
      "x-default": "https://www.sofoservis.sk/vypratavanie-dubravka",
    },
  },
  keywords:
    "vypratavanie dubravka, vypratanie bytu dubravka, vypratavanie pivnic dubravka, odvoz nabytku dubravka, vypratavanie bratislava dubravka",
  openGraph: {
    title: "Vypratávanie Dúbravka - byty, pivnice, domy | Sofoservis",
    description:
      "Profesionálne vypratávanie bytov, pivníc a domov v Dúbravke od 25€/hod. Jednoizbový byt od 200€. Obhliadka zadarmo.",
    url: "https://www.sofoservis.sk/vypratavanie-dubravka",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function VypratavanieDubravkaPage() {
  const heroData = {
    title: "Vypratávanie Dúbravka: Rýchlo a spoľahlivo",
    description:
      "Vypratávame byty, pivnice a rodinné domy v celej Dúbravke od 25€/hod. Odvoz a likvidácia starého nábytku, spotrebičov aj stavebného odpadu — všetko.",
    formTitle: "Vypratávanie v Dúbravke — bezplatná ponuka",
    formSubtitle: "Vyplňte formulár pre rýchlu fixnú cenu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Komplexné vypratávacie služby v Dúbravke",
    description:
      "Postaráme sa o kompletné vypratávanie priestorov v Dúbravke — od pivníc v panelákoch po rodinné domy s garáž.",
    features: [
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Vypratávanie bytov v Dúbravke",
        description:
          "Kompletné vypratanie bytov v Dúbravke. Jednoizbový byt od 200€, dvojizbový od 300€. Odvoz a ekologická likvidácia nábytku, spotrebičov a odpadu zabezpečená.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/house_icon.svg",
        title: "Vypratávanie pivníc a garáží",
        description:
          "Vypratávame pivnice, garážové boxy a záhradné domčeky v Dúbravke. Klasická pivnica od 60€, garáž od 80€. Naložíme a odvezieme všetko nepotrebné.",
        link: "/vypratavanie-pivnic-garazi-nebytovych-priestorov",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Odvoz starého nábytku a spotrebičov",
        description:
          "Ekologická likvidácia starých sedačiek, skríň, práčok, chladničiek a elektrospotrebičov. Všetko riadne zlikvidujeme podľa platných predpisov.",
        link: "/vypratavanie-odvoz-stareho-nabytku",
      },
      {
        image: "/icons/house_icon.svg",
        title: "Vypratávanie rodinných domov",
        description:
          "Vypratávame rodinné domy v Dúbravke vrátane záhrad, garáží a pivníc. Poradíme si aj s väčšími nehnuteľnosťami a dlhoročne nazbiranými vecami.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Odvoz stavebného odpadu",
        description:
          "Po rekonštrukcii rýchlo odvezieme suť, staré podlahy a stavebný materiál. Pristavíme kontajner alebo odvezieme priamo dodávkou.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Sťahovanie po vypratávaní",
        description:
          "Kombinujeme vypratávanie so sťahovaním v jednej návšteve. Sťahujeme kdekoľvek po Bratislave aj mimo nej. Ušetríte čas aj peniaze.",
        link: "/stahovanie-dubravka",
      },
    ],
  };

  const mapData = {
    title: "Vypratávame po celej Dúbravke a okolí",
    description:
      "Pokrývame celú Dúbravku aj priľahlé mestské časti Bratislavy — Karlova Ves, Lamač, Devínska Nová Ves.",
    locations: [
      "Dúbravka — centrum",
      "Dúbravka — Saratov",
      "Dúbravka — Brnianska",
      "Dúbravka — Molecova",
      "Lamač",
      "Devínska Nová Ves",
      "Karlova Ves",
      "Záhorská Bystrica",
      "Stupava",
    ],
    additionalText: "Vypratávame aj v okolitých obciach — Stupava, Malacky a ďalšie.",
  };

  const faqData = {
    title: "Často kladené otázky — vypratávanie v Dúbravke",
    items: [
      {
        question: "Koľko stojí vypratávanie bytu v Dúbravke?",
        answer:
          "Jednoizbový byt v Dúbravke vypratáme od 200€, dvojizbový od 300€. Presná cena závisí od množstva vecí a poschodia. Obhliadka a cenová ponuka sú zadarmo.",
      },
      {
        question: "Koľko stojí vypratávanie garáže v Dúbravke?",
        answer:
          "Bežná garáž od 80€, väčšia garáž alebo dielňa podľa rozsahu. Cena zahŕňa naloženie a odvoz celého obsahu vrátane starých pneumatík, olejov a náradí.",
      },
      {
        question: "Odvezete aj starý záhradný nábytok a náradie?",
        answer:
          "Áno, odvážame záhradný nábytok, náradie, komposty aj rôzny iný odpad. Nebezpečný odpad ako staré oleje a farby likvidujeme zákonným spôsobom.",
      },
      {
        question: "Koľko stojí vypratávanie pivnice v Dúbravke?",
        answer:
          "Bežná pivnica od 60€. Väčšia pivnica alebo sklad podľa rozsahu. Cena zahŕňa naloženie a odvoz všetkého obsahu.",
      },
      {
        question: "Ako rýchlo môžete prísť vypratať v Dúbravke?",
        answer:
          "Väčšinou do 2–5 pracovných dní. Kontaktujte nás a dohodnem termín podľa vašich potrieb.",
      },
      {
        question: "Môžem kombinovať vypratávanie so sťahovaním?",
        answer:
          "Áno, bežne kombinujeme tieto dve služby — ušetríte čas aj peniaze. Dohodnem celkovú cenu vopred a naplánujeme všetko na jeden deň.",
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
      <ServicePricing filter={["vypratavanie", "stahovanie", "buracie-prace"]} />
      <TrustBadges />
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[{"title":"Vypratávanie Bratislava","description":"Vypratávanie bytov a priestorov v Bratislave od 25€/hod.","href":"/vypratavanie-bratislava","icon":"/icons/vypratavanie_icon.svg"},{"title":"Vypratávanie bytov a domov","description":"Kompletné vypratanie bytu alebo domu.","href":"/vypratavanie-bytov-domov","icon":"/icons/vypratavanie_icon.svg"},{"title":"Vypratávanie pivníc a garáží","description":"Rýchle vypratanie pivníc, kobiek a garáží.","href":"/vypratavanie-pivnic-garazi-nebytovych-priestorov","icon":"/icons/house_icon.svg"},{"title":"Sťahovanie Dúbravka","description":"Sťahovanie v Dúbravke od 25€/hod.","href":"/stahovanie-dubravka","icon":"/icons/truck_icon.svg"}]}
      />
      <FAQJsonLd items={faqData.items} />
    </main>
  );
}
