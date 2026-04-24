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
  title: "Vypratávanie Karlova Ves - byty, pivnice, domy | Sofoservis",
  description:
    "Profesionálne vypratávanie bytov, pivníc a domov v Karlovej Vsi od 25€/hod. Jednoizbový byt od 200€. Dlhé diely, Líščie údolie. Obhliadka zadarmo.",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-karlova-ves",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-karlova-ves",
      en: "https://www.sofoservis.sk/en/home-clearance-karlova-ves",
      "x-default": "https://www.sofoservis.sk/vypratavanie-karlova-ves",
    },
  },
  keywords:
    "vypratavanie karlova ves, vypratanie bytu karlova ves, vypratavanie pivnic karlova ves, odvoz nabytku karlova ves, dlhe diely vypratavanie",
  openGraph: {
    title: "Vypratávanie Karlova Ves - byty, pivnice, domy | Sofoservis",
    description:
      "Profesionálne vypratávanie bytov, pivníc a domov v Karlovej Vsi od 25€/hod. Jednoizbový byt od 200€. Obhliadka zadarmo.",
    url: "https://www.sofoservis.sk/vypratavanie-karlova-ves",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function VypratavanieKarlovaVesPage() {
  const heroData = {
    title: "Vypratávanie Karlova Ves: Rýchlo a spoľahlivo",
    description:
      "Vypratávame byty, pivnice a rodinné domy v celej Karlovej Vsi od 25€/hod. Dlhé diely, Líščie údolie, Nad lúčkami — pokrývame celú mestskú časť. Odvoz.",
    formTitle: "Vypratávanie v Karlovej Vsi — bezplatná ponuka",
    formSubtitle: "Vyplňte formulár pre rýchlu fixnú cenu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Komplexné vypratávacie služby v Karlovej Vsi",
    description:
      "Postaráme sa o kompletné vypratávanie priestorov v Karlovej Vsi — od bytov na Dlhých dieloch po rodinné domy v Líščom údolí.",
    features: [
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Vypratávanie bytov v Karlovej Vsi",
        description:
          "Kompletné vypratanie bytov v Karlovej Vsi — Dlhé diely, Nad lúčkami, Dúbravka. Jednoizbový byt od 200€, dvojizbový od 300€. Odvoz všetkého nepotrebného.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/house_icon.svg",
        title: "Vypratávanie rodinných domov",
        description:
          "Vypratávame rodinné domy, chaty a vily v Líščom údolí a priľahlých častiach Karlovej Vsi. Poradíme si aj s väčšími nehnuteľnosťami a dlhoročne nazbiranými vecami.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Odvoz starého nábytku a spotrebičov",
        description:
          "Ekologická likvidácia starých sedačiek, skríň, práčok a elektrospotrebičov. Riadne triedime a likvidujeme odpad podľa platných predpisov.",
        link: "/vypratavanie-odvoz-stareho-nabytku",
      },
      {
        image: "/icons/house_icon.svg",
        title: "Vypratávanie pivníc a garáží",
        description:
          "Vypratávame pivnice, garážové boxy a záhradné domčeky v Karlovej Vsi. Bežná pivnica od 60€. Naložíme a odvezieme všetko.",
        link: "/vypratavanie-pivnic-garazi-nebytovych-priestorov",
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
        link: "/stahovanie-karlova-ves",
      },
    ],
  };

  const mapData = {
    title: "Vypratávame po celej Karlovej Vsi a okolí",
    description:
      "Pokrývame celú Karlovú Ves — Dlhé diely, Líščie údolie, Nad lúčkami, Staré Grunty aj priľahlé mestské časti Bratislavy.",
    locations: [
      "Karlova Ves — Dlhé diely",
      "Karlova Ves — Líščie údolie",
      "Karlova Ves — Nad lúčkami",
      "Karlova Ves — Staré Grunty",
      "Karlova Ves — Patrónka",
      "Dúbravka",
      "Lamač",
      "Staré Mesto",
      "Nové Mesto",
    ],
    additionalText: "Vypratávame aj v okolitých obciach — Stupava, Malacky a ďalšie.",
  };

  const faqData = {
    title: "Často kladené otázky — vypratávanie v Karlovej Vsi",
    items: [
      {
        question: "Koľko stojí vypratávanie bytu v Karlovej Vsi?",
        answer:
          "Jednoizbový byt v Karlovej Vsi vypratáme od 200€, dvojizbový od 300€. Rodinný dom podľa rozsahu — cenu dohodnem po obhliadke alebo na základe fotografií.",
      },
      {
        question: "Koľko stojí vypratávanie rodinného domu v Líščom údolí?",
        answer:
          "Cena závisí od veľkosti domu a množstva vecí. Menší rodinný dom od 500€, väčší od 800€. Obhliadka a cenová ponuka sú zadarmo.",
      },
      {
        question: "Odvezete aj starý záhradný nábytok a náradie?",
        answer:
          "Áno, odvážame záhradný nábytok, náradie, záhradné domčeky aj rôzny ďalší odpad zo záhrad. Všetko ekologicky a zákonným spôsobom zlikvidujeme.",
      },
      {
        question: "Vypratávate aj pivnice a garáže v Karlovej Vsi?",
        answer:
          "Áno, pivnica od 60€, garážové miesto od 80€. Cena zahŕňa naloženie a odvoz celého obsahu. Obhliadka zadarmo.",
      },
      {
        question: "Ako rýchlo môžete prísť vypratať v Karlovej Vsi?",
        answer:
          "Väčšinou do 2–5 pracovných dní. Pri urgentných prípadoch sa snažíme prísť skôr. Kontaktujte nás a dohodnem termín podľa vašich potrieb.",
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
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
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
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
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
        services={[{"title":"Vypratávanie Bratislava","description":"Vypratávanie bytov a priestorov v Bratislave od 25€/hod.","href":"/vypratavanie-bratislava","icon":"/icons/vypratavanie_icon.svg"},{"title":"Vypratávanie bytov a domov","description":"Kompletné vypratanie bytu alebo domu.","href":"/vypratavanie-bytov-domov","icon":"/icons/vypratavanie_icon.svg"},{"title":"Vypratávanie pivníc a garáží","description":"Rýchle vypratanie pivníc, kobiek a garáží.","href":"/vypratavanie-pivnic-garazi-nebytovych-priestorov","icon":"/icons/house_icon.svg"},{"title":"Sťahovanie Karlova Ves","description":"Sťahovanie v Karlovej Vsi od 25€/hod.","href":"/stahovanie-karlova-ves","icon":"/icons/truck_icon.svg"}]}
      />
      <FAQJsonLd items={faqData.items} />
    </main>
  );
}
