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
  title: "Sťahovanie Nové Mesto Bratislava - byty, domy, | Sofoservis",
  description:
    "Profesionálne sťahovanie v Novom Meste Bratislava. Sťahujeme byty, rodinné domy a kancelárie. Pokrývame Kramáre, Kolibu, Vinohrady aj celé Nové Mesto.",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-nove-mesto",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-nove-mesto",
      en: "https://www.sofoservis.sk/en/moving-nove-mesto",
      "x-default": "https://www.sofoservis.sk/stahovanie-nove-mesto",
    },
  },
  keywords:
    "stahovanie nove mesto bratislava, stahovanie bytu nove mesto, stahovanie kramáre bratislava, stahovacie sluzby nove mesto",
  openGraph: {
    title: "Sťahovanie Nové Mesto Bratislava - byty, domy, kancelárie | Sofoservis",
    description:
      "Profesionálne sťahovanie v Novom Meste Bratislava od 25€/hod. Byty, domy, kancelárie. Spoľahlivý tím, výhodné ceny.",
    url: "https://www.sofoservis.sk/stahovanie-nove-mesto",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieNoveMestoPage() {
  const heroData = {
    title: "Sťahovanie Nové Mesto: Rýchlo a spoľahlivo",
    description:
      "Sťahujeme byty, domy a kancelárie v celom Novom Meste Bratislavy. Pokrývame Kramáre, Kolibu, Vinohrady aj ďalšie časti. Profesionálny tím, výhodné ceny.",
    formTitle: "Sťahovanie v Novom Meste — bezplatná ponuka",
    formSubtitle: "Vyplňte formulár pre rýchlu fixnú cenu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Profesionálne sťahovacie služby v Novom Meste",
    description:
      "Kompletné sťahovanie pre domácnosti a firmy v Novom Meste Bratislavy — od bytových domov po rodinné domy na Kolibe.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie bytov v Novom Meste",
        description:
          "Kompletné sťahovanie bytov a domov v Novom Meste Bratislavy. Bezpečne prevezieme váš nábytok na nové miesto.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Sťahovanie kancelárií",
        description:
          "Sťahujeme kancelárie a firmy v Novom Meste. Minimalizujeme prestoje sťahovaním cez víkend alebo mimo pracovných hodín.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/wrench_icon.svg",
        title: "Montáž a demontáž nábytku",
        description:
          "Odborná montáž a demontáž nábytku pri sťahovaní v Novom Meste. Pracujeme rýchlo a precízne.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/crane_icon.svg",
        title: "Sťahovanie ťažkých bremien",
        description:
          "Sťahovanie klavírov, trezorov a ťažkého nábytku v Novom Meste. Špeciálne vybavenie a skúsený tím.",
        link: "/stahovanie-tazkych-bremien",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Vypratávanie priestorov",
        description:
          "Vypratávanie bytov a domov v Novom Meste. Vhodné pri predaji, rekonštrukcii alebo dedičskom konaní.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Sťahovanie po celej Bratislave",
        description:
          "Sťahujeme z Nového Mesta do akejkoľvek časti Bratislavy aj do okolia. Rýchlo, bezpečne, za férovú cenu.",
        link: "/stahovanie-bratislava",
      },
    ],
  };

  const mapData = {
    title: "Sťahujeme po celom Novom Meste a okolí",
    description:
      "Pokrývame všetky časti Nového Mesta vrátane Kramárov, Koliby, Vinohradov, Kuchajdy a priľahlých oblastí.",
    locations: [
      "Nové Mesto — Kramáre",
      "Nové Mesto — Koliba",
      "Nové Mesto — Vinohrady",
      "Nové Mesto — Kuchajda",
      "Nové Mesto — Vajnory",
      "Rača",
      "Záhorská Bystrica",
      "Devínska Nová Ves",
      "Staré Mesto",
      "Ružinov",
    ],
    additionalText: "Sťahujeme aj do okolitých obcí — Senec, Pezinok, Malacky a ďalšie.",
  };

  const faqData = {
    title: "Často kladené otázky — sťahovanie v Novom Meste",
    items: [
      {
        question: "Sťahujete aj rodinné domy na Kolibe alebo Vinohradoch?",
        answer:
          "Áno, máme skúsenosti so sťahovaním rodinných domov na Kolibe, Vinohradoch aj iných vilových častiach Nového Mesta. Prístupové komunikácie a strmé cesty nám nerobia problém.",
      },
      {
        question: "Aká je cena sťahovania v Novom Meste?",
        answer:
          "Sťahovanie v Novom Meste účtujeme od 25€/hod na pracovníka. Najobľúbenejšia možnosť sú 3 pracovníci za 67€/hod. Sťahovanie v rámci mesta od 40€. Pre presný odhad vyplňte formulár — ponuka je zadarmo.",
      },
      {
        question: "Ako dlho trvá sťahovanie bytu v Novom Meste?",
        answer:
          "Jednoizbový byt trvá zvyčajne 2–4 hodiny, dvojizbový 4–6 hodín. Pri rodinných domoch počítajte s celým pracovným dňom. Závisí od množstva nábytku a prístupu.",
      },
      {
        question: "Sťahujete aj z Nového Mesta do iných miest?",
        answer:
          "Áno, sťahujeme z Nového Mesta do celého Slovenska. Okrem Bratislavy aj do Nitry, Trnavy, Senca, Pezinka a ďalších miest. Cestovné mimo mesta je 0,70€/km.",
      },
      {
        question: "Poskytujete montáž nábytku po sťahovaní?",
        answer:
          "Áno, v rámci sťahovania ponúkame aj kompletnú demontáž nábytku pred odchodom a montáž v novom domove. Pracujeme so všetkými typmi nábytku vrátane IKEA, Asko a Jysk.",
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
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
<link
        rel="preload"
        href="/images/mascot/mascot-holding-boxes.svg"
        as="image"
        type="image/svg+xml"
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
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          desktopMascotScaleMultiplier={1.03}
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
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          mobileMascotSrc="/images/mascot/mascot-holding-boxes.svg"
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
