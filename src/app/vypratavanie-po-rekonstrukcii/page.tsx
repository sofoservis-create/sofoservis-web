import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Vypratávanie po rekonštrukcii — odvoz | Sofoservis",
  description:
    "Vypratávanie priestorov po rekonštrukcii. Odvoz stavebného odpadu a sute. Záverečné čistenie. Rýchle termíny. Obhliadka zadarmo.",
  keywords:
    "vypratavanie po rekonstrukcii, odvoz stavebneho odpadu po rekonstrukcii, upratovanie po rekonstrukcii, vynos sute, odvoz odpadu po rekonstrukcii, cistenie po stavbe",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-po-rekonstrukcii",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-po-rekonstrukcii",
      en: "https://www.sofoservis.sk/en/post-renovation-clearance",
      "x-default": "https://www.sofoservis.sk/vypratavanie-po-rekonstrukcii",
    },
  },
  openGraph: {
    title: "Vypratávanie po rekonštrukcii — odvoz stavebného odpadu | Sofoservis",
    description:
      "Vypratanie priestorov po rekonštrukcii. Odvoz sute, stavebného odpadu a záverečné upratovanie. Obhliadka zadarmo.",
    url: "https://www.sofoservis.sk/vypratavanie-po-rekonstrukcii",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

const faqSchemaItems = [
  {
    question: "Čo zahŕňa vypratávanie po rekonštrukcii?",
    answer:
      "Zahŕňa odvoz stavebného odpadu (suť, dlaždice, omietky, drevo), starého nábytku a zariadenia, záverečné hrubé upratovanie a prípravu priestoru na bývanie.",
  },
  {
    question: "Ako rýchlo viete odviezť odpad po rekonštrukcii?",
    answer:
      "V závislosti od množstva odpadu vieme zabezpečiť odvoz do 24-48 hodín od kontaktovania. Pracujeme rýchlo, aby sme neblokovali váš kolaudačný proces.",
  },
  {
    question: "Aká je cena za odvoz stavebného odpadu po rekonštrukcii?",
    answer:
      "Cena závisí od množstva a typu odpadu. Účtujeme podľa objemu (m³) alebo hmotnosti. Poskytujeme bezplatnú obhliadku a nezáväznú cenovú ponuku.",
  },
];

export default function VypratavaniePoRekonstrukciiPage() {
  const heroData = {
    title: "Vypratávanie po rekonštrukcii",
    description:
      "Dokončili ste rekonštrukciu? Postaráme sa o odvoz stavebného odpadu, sute a starého zariadenia. Rýchlo a efektívne vyčistíme priestor po stavbe.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre rýchlu kalkuláciu odvoz odpadu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Čo zahŕňa vypratávanie po rekonštrukcii",
    description:
      "Kompletné riešenie pre vyčistenie priestoru po stavebných prácach.",
    features: [
      {
        image: "/icons/hammer_icon.svg",
        title: "Odvoz sute a stavebného odpadu",
        description:
          "Odvezieme suť, staré dlaždice, omietky, drevo, sadrokartón a ďalší stavebný odpad. Účtujeme podľa objemu alebo hmotnosti.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Odvoz starého nábytku a zariadenia",
        description:
          "Pred alebo po rekonštrukcii odvezieme starý nábytok, spotrebiče, obklady a iné zariadenie, ktoré nahradíte novým.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Záverečné hrubé upratovanie",
        description:
          "Po odvoze odpadu vykonáme hrubé upratovanie priestoru — zametenie, vyčistenie od prachu a stavebných zvyškov.",
        link: "/vypratavanie-po-rekonstrukcii",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Rýchle termíny",
        description:
          "Chceme, aby ste sa čo najskôr mohli nasťahovať. Vieme zabezpečiť odvoz do 24-48 hodín od objednania.",
        link: "/vypratavanie-po-rekonstrukcii",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Ekologická likvidácia",
        description:
          "Stavebný odpad separujeme a odvážame na príslušné zberné dvory a skládky v súlade s legislatívou.",
        link: "/likvidacia-nebezpecneho-odpadu-starych-spotrebicov",
      },
      {
        image: "/icons/container_icon.svg",
        title: "Prenájom kontajnerov",
        description:
          "Pre dlhšie rekonštrukcie vieme zabezpečiť aj pristavenie kontajnera priamo na stavenisko.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
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
          desktopMascotBehindForm
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
        <GoogleReviews />
      </div>
      <div>
        <Reviews showHeadline={true} />
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
        <GoogleReviews showReviewsShowcase={false} />
      </div>
      <div>
        <FAQ
          title="Časté otázky o vypratávaní po rekonštrukcii"
          items={[
            {
              question: "Čo všetko odvezieme po rekonštrukcii?",
              answer:
                "Odvezieme všetky typy stavebného odpadu: suť, staré dlaždice a obklady, omietky, sadrokartón, drevo, staré okná a dvere, kovový odpad, starý nábytok a spotrebiče. Nebezpečný odpad (farby, chemikálie) spracovávame osobitne.",
            },
            {
              question: "Aká je cena za odvoz stavebného odpadu po rekonštrukcii?",
              answer:
                "Cena závisí od množstva a typu odpadu, prístupnosti a lokality. Účtujeme podľa objemu (m³) alebo paušálne po obhliadke. Orientačne: odvoz obsahu menšej rekonštrukcie (1-2 m³) od 150€, väčšia zákazka sa kalkuluje individuálne.",
            },
            {
              question: "Ako rýchlo viete prísť?",
              answer:
                "V naliehavých prípadoch vieme zabezpečiť odvoz do 24 hodín. Bežne do 48 hodín od objednania. Pracujeme aj cez víkendy, aby neblokovali váš kolaudačný harmonogram.",
            },
            {
              question: "Vypratávate aj po búraní stien a väčších rekonštrukciách?",
              answer:
                "Áno, špecializujeme sa práve na väčšie zákazky. Odvezieme suť po búraní stien, priečok a väčšie množstvo stavebného odpadu. Vieme zabezpečiť aj kontajner priamo na stavenisko.",
            },
            {
              question: "Zabezpečíte aj záverečné upratovanie po rekonštrukcii?",
              answer:
                "Áno, po odvoze odpadu môžeme vykonať záverečné hrubé upratovanie — zametenie a základné vyčistenie od prachu a stavebných zvyškov, aby bol priestor pripravený na dokončovacie práce alebo nasťahovanie.",
            },
          ]}
        />
      </div>
      <div>
        <CTA
          title="Potrebujete rýchlo odviezť odpad po rekonštrukcii?"
          description="Zabezpečíme rýchly odvoz stavebného odpadu, sute a starého zariadenia. Vieme prísť do 24-48 hodín od objednania."
          buttonText="Získať nezáväznú ponuku"
        />
      </div>
      <ServicePricing filter={["vypratavanie", "buracie-prace"]} />
      <TrustBadges />
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Odvoz stavebného odpadu", description: "Profesionálny odvoz sute a stavebného odpadu.", href: "/odvoz-likvidacia-stavebneho-odpadu", icon: "/icons/recycle_icon.svg" },
          { title: "Búracie a demolačné práce", description: "Búranie stien, priečok a demolácia.", href: "/buracie-demolacne-prace", icon: "/icons/hammer_icon.svg" },
          { title: "Vypratávanie bytov a domov", description: "Kompletné vypratanie bytu alebo domu.", href: "/vypratavanie-bytov-domov", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Hodinový manžel", description: "Drobné opravy a úpravy po rekonštrukcii.", href: "/hodinovy-manzel-majster", icon: "/icons/repair_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqSchemaItems} />
    </main>
  );
}
