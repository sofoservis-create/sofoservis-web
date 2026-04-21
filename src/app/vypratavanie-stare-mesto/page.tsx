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
  title: "Vypratávanie Staré Mesto - byty, pivnice, domy | Sofoservis",
  description:
    "Vypratávanie bytov, pivníc a domov na Starom Meste od 25€/hod. Skúsenosti so starou zástavbou a úzkymi uličkami. Obhliadka zadarmo.",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-stare-mesto",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-stare-mesto",
      en: "https://www.sofoservis.sk/en/home-clearance-stare-mesto",
      "x-default": "https://www.sofoservis.sk/vypratavanie-stare-mesto",
    },
  },
  keywords:
    "vypratavanie stare mesto bratislava, vypratanie bytu stare mesto, vypratavanie pivnic stare mesto, odvoz nabytku stare mesto",
  openGraph: {
    title: "Vypratávanie Staré Mesto - byty, pivnice, domy | Sofoservis",
    description:
      "Profesionálne vypratávanie bytov, pivníc a starých domov na Starom Meste od 25€/hod. Skúsenosti so starou zástavbou a úzkymi uličkami.",
    url: "https://www.sofoservis.sk/vypratavanie-stare-mesto",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function VypratavanieStareMestoPage() {
  const heroData = {
    title: "Vypratávanie Staré Mesto: Rýchlo a spoľahlivo",
    description:
      "Vypratávame byty, pivnice a staré domy na Starom Meste od 25€/hod. Máme skúsenosti so starou zástavbou, úzkymi schodiskami a historickými domami.",
    formTitle: "Vypratávanie na Starom Meste — bezplatná ponuka",
    formSubtitle: "Vyplňte formulár pre rýchlu fixnú cenu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Vypratávacie služby na Starom Meste",
    description:
      "Postaráme sa o kompletné vypratávanie priestorov na Starom Meste — od historických bytov po pivnice v starej zástavbe.",
    features: [
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Vypratávanie bytov na Starom Meste",
        description:
          "Kompletné vypratanie historických bytov a apartmánov na Starom Meste. Skúsenosti s úzkymi schodiskami a bytmi bez výťahu. Jednoizbový byt od 200€.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/house_icon.svg",
        title: "Vypratávanie pivníc a sklepov",
        description:
          "Vypratávame historické pivnice, sklepy a kobky v starých domoch na Starom Meste. Aj tie najzapratanejšie pivnice zvládneme. Klasická pivnica od 60€.",
        link: "/vypratavanie-pivnic-garazi-nebytovych-priestorov",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Odvoz starého nábytku a starožitností",
        description:
          "Odvoz a ekologická likvidácia starého nábytku zo starých domov. Vieme opatrne manipulovať aj s väčšími kusmi cez úzke schodiská a dvere.",
        link: "/vypratavanie-odvoz-stareho-nabytku",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Odvoz stavebného odpadu",
        description:
          "Po rekonštrukcii bytu na Starom Meste odvezieme suť, staré podlahy a stavebný odpad. Riešime aj odvoz z pivníc a sklepov bez prístupu pre väčšie auto.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/crane_icon.svg",
        title: "Vynáška z historických budov",
        description:
          "Historické domy na Starom Meste majú často úzke schodiská bez výťahu. Máme skúsenosti s bezpečnou vynáškou veľkých kusov nábytku aj za sťažených podmienok.",
        link: "/stahovanie-tazkych-bremien",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Vypratávanie nebytových priestorov",
        description:
          "Vypratávame kancelárie, obchody a iné nebytové priestory na Starom Meste. Pracujeme aj mimo pracovných hodín, aby sme nenarušili váš biznis.",
        link: "/vypratavanie-pivnic-garazi-nebytovych-priestorov",
      },
    ],
  };

  const mapData = {
    title: "Vypratávame po celom Starom Meste a okolí",
    description:
      "Pokrývame celé Staré Mesto — centrum, Námestie SNP, Obchodná, Zámocká, Kapitulská aj priľahlé ulice.",
    locations: [
      "Staré Mesto — centrum",
      "Staré Mesto — Zámocká",
      "Staré Mesto — Kapitulská",
      "Staré Mesto — Obchodná",
      "Staré Mesto — Mudroňova",
      "Staré Mesto — Patrónka",
      "Nové Mesto",
      "Ružinov",
      "Karlova Ves",
    ],
    additionalText: "Pracujeme po celej Bratislave vrátane všetkých mestských časti.",
  };

  const faqData = {
    title: "Často kladené otázky — vypratávanie na Starom Meste",
    items: [
      {
        question: "Koľko stojí vypratávanie bytu na Starom Meste?",
        answer:
          "Jednoizbový byt na Starom Meste vypratáme od 200€, dvojizbový od 300€. V historických budovách s úzkymi schodiskami môže byť cena mierne vyššia. Obhliadka je zadarmo.",
      },
      {
        question: "Zvládate aj domy s úzkymi schodiskami a bez výťahu?",
        answer:
          "Áno, toto je naša každodenná práca na Starom Meste. Máme skúsenosti s vynáškou nábytku z historických budov s úzkymi schodiskami. Za každé poschodie bez výťahu účtujeme 15€.",
      },
      {
        question: "Viete vypratať historickú pivnicu alebo sklep?",
        answer:
          "Áno, historické pivnice a sklepy na Starom Meste sú našou špecialitou. Bežná pivnica od 60€. Staré, zapratanejšie pivnice podľa rozsahu práce — obhliadka zadarmo.",
      },
      {
        question: "Ako riešite parkovanie pri vypratávaní na Starom Meste?",
        answer:
          "Parkovanie na Starom Meste je náročnejšie. Koordinujeme príjazd dodávky a v prípade potreby využívame vjazd do dvora alebo parkovanie v najbližšej dostupnej zóne.",
      },
      {
        question: "Ako rýchlo môžete prísť vypratať na Starom Meste?",
        answer:
          "Väčšinou sme schopní prísť do 2–5 pracovných dní. Kontaktujte nás a dohodnem termín podľa vašich potrieb.",
      },
      {
        question: "Odvezete aj staré spotrebiče a elektroniku?",
        answer:
          "Áno, odvoz a ekologická likvidácia starých spotrebičov, elektroniky a nábytku je súčasťou našej služby. Všetko riadne zlikvidujeme v súlade so zákonom.",
      },
    ],
  };

  return (
    <main className="bg-white">
      <link
        rel="preload"
        href="/images/mascot/stary-gauc-nosi-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)"
      />
      <link
        rel="preload"
        href="/images/mascot/stary-gauc-nosi-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)"
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
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          desktopMascotScaleMultiplier={1.08}
          desktopMascotRightShiftPct={0.235}
          desktopMascotBehindForm
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
        services={[{"title":"Vypratávanie Bratislava","description":"Vypratávanie bytov a priestorov v Bratislave od 25€/hod.","href":"/vypratavanie-bratislava","icon":"/icons/vypratavanie_icon.svg"},{"title":"Vypratávanie bytov a domov","description":"Kompletné vypratanie bytu alebo domu.","href":"/vypratavanie-bytov-domov","icon":"/icons/vypratavanie_icon.svg"},{"title":"Vypratávanie pivníc a garáží","description":"Rýchle vypratanie pivníc, kobiek a garáží.","href":"/vypratavanie-pivnic-garazi-nebytovych-priestorov","icon":"/icons/house_icon.svg"},{"title":"Sťahovanie Staré Mesto","description":"Sťahovanie v Starom Meste od 25€/hod.","href":"/stahovanie-stare-mesto","icon":"/icons/truck_icon.svg"}]}
      />
      <FAQJsonLd items={faqData.items} />
    </main>
  );
}
