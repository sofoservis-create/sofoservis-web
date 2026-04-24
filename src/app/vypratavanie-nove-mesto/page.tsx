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
  title: "Vypratávanie Nové Mesto - byty, pivnice, garáže | Sofoservis",
  description:
    "Profesionálne vypratávanie bytov, pivníc a garáží na Novom Meste v Bratislave od 25€/hod. Jednoizbový byt od 200€. Obhliadka priestoru zadarmo.",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-nove-mesto",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-nove-mesto",
      en: "https://www.sofoservis.sk/en/home-clearance-nove-mesto",
      "x-default": "https://www.sofoservis.sk/vypratavanie-nove-mesto",
    },
  },
  keywords:
    "vypratavanie nove mesto bratislava, vypratanie bytu nove mesto, vypratavanie pivnic nove mesto, odvoz nabytku nove mesto",
  openGraph: {
    title: "Vypratávanie Nové Mesto - byty, pivnice, garáže | Sofoservis",
    description:
      "Profesionálne vypratávanie bytov, pivníc a garáží na Novom Meste od 25€/hod. Jednoizbový byt od 200€. Obhliadka zadarmo.",
    url: "https://www.sofoservis.sk/vypratavanie-nove-mesto",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function VypratavanieNoveMestoPage() {
  const heroData = {
    title: "Vypratávanie Nové Mesto: Rýchlo a spoľahlivo",
    description:
      "Vypratávame byty, pivnice a garáže po celom Novom Meste v Bratislave od 25€/hod. Vinohrady, Kramáre, Koliba — pokrývame celú mestskú časť. Odvoz odpadu.",
    formTitle: "Vypratávanie na Novom Meste — bezplatná ponuka",
    formSubtitle: "Vyplňte formulár pre rýchlu fixnú cenu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Komplexné vypratávacie služby na Novom Meste",
    description:
      "Postaráme sa o kompletné vypratávanie vašich priestorov na Novom Meste — od pivníc v panelákoch až po rodinné domy na Vinohradoch.",
    features: [
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Vypratávanie bytov na Novom Meste",
        description:
          "Kompletné vypratanie bytov na Novom Meste — Vinohrady, Kramáre, Koliba, Rača. Jednoizbový byt od 200€, dvojizbový od 300€. Odvoz všetkého nepotrebného.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/house_icon.svg",
        title: "Vypratávanie pivníc a garáží",
        description:
          "Vypratávame pivnice, garážové boxy a sklady na Novom Meste. Bežná pivnica od 60€. Odvoz a ekologická likvidácia všetkého obsahu zabezpečená.",
        link: "/vypratavanie-pivnic-garazi-nebytovych-priestorov",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Odvoz starého nábytku a spotrebičov",
        description:
          "Ekologická likvidácia starých sedačiek, skríň, práčok a elektrospotrebičov. Riadne triedime a likvidujeme odpad v súlade so zákonom o odpadoch.",
        link: "/vypratavanie-odvoz-stareho-nabytku",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Odvoz stavebného odpadu",
        description:
          "Po rekonštrukcii bytu alebo domu na Novom Meste rýchlo odvezieme suť, staré podlahy a stavebný materiál. Pristavíme kontajner alebo odvezieme priamo dodávkou.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/cash_icon.svg",
        title: "Transparentné ceny bez prekvapení",
        description:
          "Cenu dohodnem vopred po obhliadke alebo na základe fotografií. Žiadne skryté poplatky. Jednoizbový byt od 200€, pivnica od 60€, garážové miesto od 80€.",
        link: "/cennik",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Sťahovanie po vypratávaní",
        description:
          "Kombinujeme vypratávanie so sťahovaním — zvládneme obe služby v jednej návšteve. Sťahujeme kdekoľvek po Bratislave aj mimo nej.",
        link: "/stahovanie-nove-mesto",
      },
    ],
  };

  const mapData = {
    title: "Vypratávame po celom Novom Meste a okolí",
    description:
      "Pokrývame celé Nové Mesto — Vinohrady, Kramáre, Koliba, Pálenisko, Kuchajda aj priľahlé mestské časti.",
    locations: [
      "Nové Mesto — Vinohrady",
      "Nové Mesto — Kramáre",
      "Nové Mesto — Koliba",
      "Nové Mesto — Kuchajda",
      "Nové Mesto — Pálenisko",
      "Rača",
      "Vajnory",
      "Staré Mesto",
      "Karlova Ves",
    ],
    additionalText: "Vypratávame aj v okolitých obciach — Svätý Jur, Pezinok a ďalšie.",
  };

  const faqData = {
    title: "Často kladené otázky — vypratávanie na Novom Meste",
    items: [
      {
        question: "Koľko stojí vypratávanie bytu na Novom Meste?",
        answer:
          "Jednoizbový byt na Novom Meste vypratáme od 200€, dvojizbový od 300€. Presná cena závisí od množstva vecí a poschodia. Obhliadka a cenová ponuka sú zadarmo.",
      },
      {
        question: "Koľko stojí vypratávanie pivnice alebo garážového boxu?",
        answer:
          "Bežná pivnica od 60€, garážový box od 80€. Väčší sklad podľa rozsahu. Cena zahŕňa naloženie a odvoz všetkého obsahu na riadnu skládku.",
      },
      {
        question: "Vypratávate aj rodinné domy na Kolibe a Vinohradoch?",
        answer:
          "Áno, vypratávame rodinné domy, vily aj veľké garáže na Kolibe, Vinohradoch a v celom okolí Nového Mesta. Cenu dohodnem po obhliadke nehnuteľnosti.",
      },
      {
        question: "Odvezete aj starý nábytok a elektrospotrebiče?",
        answer:
          "Áno, odvoz starého nábytku, sedačiek, práčok a iných spotrebičov je súčasťou našej služby. Všetko ekologicky a zákonným spôsobom zlikvidujeme.",
      },
      {
        question: "Ako rýchlo môžete prísť vypratať na Novom Meste?",
        answer:
          "Väčšinou do 2–5 pracovných dní. Pri urgentných prípadoch sa snažíme prísť skôr. Kontaktujte nás a dohodnem termín podľa vašich potrieb.",
      },
      {
        question: "Môžem kombinovať vypratávanie so sťahovaním?",
        answer:
          "Áno, bežne kombinujeme tieto dve služby v jednej návšteve — ušetríte čas aj peniaze. Dohodnem celkovú cenu vopred.",
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
          mobileMascotOffsetY={-44}
          mobileMascotScale={0.847}
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
        services={[{"title":"Vypratávanie Bratislava","description":"Vypratávanie bytov a priestorov v Bratislave od 25€/hod.","href":"/vypratavanie-bratislava","icon":"/icons/vypratavanie_icon.svg"},{"title":"Vypratávanie bytov a domov","description":"Kompletné vypratanie bytu alebo domu.","href":"/vypratavanie-bytov-domov","icon":"/icons/vypratavanie_icon.svg"},{"title":"Vypratávanie pivníc a garáží","description":"Rýchle vypratanie pivníc, kobiek a garáží.","href":"/vypratavanie-pivnic-garazi-nebytovych-priestorov","icon":"/icons/house_icon.svg"},{"title":"Sťahovanie Nové Mesto","description":"Sťahovanie v Novom Meste od 25€/hod.","href":"/stahovanie-nove-mesto","icon":"/icons/truck_icon.svg"}]}
      />
      <FAQJsonLd items={faqData.items} />
    </main>
  );
}
