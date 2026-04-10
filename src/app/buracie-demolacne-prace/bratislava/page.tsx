import React from "react";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import LocationMap from "@/components/sections/LocationMap";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Búracie práce Bratislava — priečky, obklady | Sofoservis",
  description:
    "Profesionálne búracie práce v Bratislave ✅ Búranie priečok, bytových jadier, obkladov a dlažieb ✅ Odvoz sute zabezpečený ✅ Obhliadka zadarmo",
  alternates: {
    canonical: "https://www.sofoservis.sk/buracie-demolacne-prace/bratislava",
    languages: {
      sk: "https://www.sofoservis.sk/buracie-demolacne-prace/bratislava",
      en: "https://www.sofoservis.sk/en/demolition-bratislava",
      "x-default": "https://www.sofoservis.sk/buracie-demolacne-prace/bratislava",
    },
  },
};

export default function BuraciePraceBratislavaPage() {
  const faqItems = [
    {
      question: "Koľko stojí búranie priečky v Bratislave?",
      answer:
        "Cena búrania priečky v Bratislave začína od 10€ do 20€ za m² v závislosti od materiálu (tehla, ytong, panel). K cene sa pripočítava odvoz sute.",
    },
    {
      question: "Ako dlho trvá búranie v byte v Bratislave?",
      answer:
        "Búranie bytového jadra alebo priečok v štandardnom bratislavskom byte zvyčajne trvá 1 až 3 pracovné dni vrátane odvozu odpadu.",
    },
    {
      question: "Odveziete po búraní v Bratislave aj sutiny?",
      answer:
        "Áno, zabezpečujeme kompletný odvoz a legálnu likvidáciu stavebnej sute v rámci celej Bratislavy a okolia.",
    },
    {
      question: "Potrebujem v Bratislave na búranie povolenie?",
      answer:
        "Na búranie nenosných priečok v Bratislave zvyčajne stačí ohlásenie stavebnému úradu danej mestskej časti. Pri nosných stenách je nevyhnutné stavebné povolenie a statický posudok.",
    },
  ];

  const heroData = {
    title: "Búracie práce Bratislava",
    description:
      "Realizujeme búracie a demolačné práce v Bratislave pre byty, domy aj kancelárie. Odborné búranie priečok, jadier a interiérov s minimálnym prachom.",
    formTitle: "Bezplatná cenová ponuka",
    formSubtitle: "Kalkulácia búracích prác v Bratislave",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  const featuresData = {
    title: "Búracie služby v Bratislave",
    description: "Profesionálne búranie s dôrazom na bezpečnosť a čistotu.",
    features: [
      {
        image: "/icons/wrecking_ball_icon.svg",
        title: "Búranie priečok a jadier",
        description: "Búranie nenosných stien a umakartových jadier v bratislavských bytoch.",
        link: "/buracie-demolacne-prace",
      },
      {
        image: "/icons/hammer_icon.svg",
        title: "Búranie podláh a dlažieb",
        description: "Odstraňovanie starých podláh, poterov, obkladov a dlažieb v kúpeľniach.",
        link: "/buracie-demolacne-prace",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Odvoz stavebnej sute",
        description: "Kompletný servis odvozu odpadu po búraní v rámci Bratislavy.",
        link: "/odvoz-likvidacia-stavebneho-odpadu/bratislava",
      },
      {
        image: "/icons/safety_icon.svg",
        title: "Bezpečný postup",
        description: "Pracujeme opatrne s ohľadom na susedov a spoločné priestory v Bratislave.",
        link: "/buracie-demolacne-prace",
      },
    ],
  };

  const bratislavaDistricts = [
    { name: "Staré Mesto", href: "/buracie-demolacne-prace/bratislava" },
    { name: "Ružinov", href: "/buracie-demolacne-prace/bratislava" },
    { name: "Petržalka", href: "/buracie-demolacne-prace/bratislava" },
    { name: "Nové Mesto", href: "/buracie-demolacne-prace/bratislava" },
    { name: "Dúbravka", href: "/buracie-demolacne-prace/bratislava" },
    { name: "Karlova Ves", href: "/buracie-demolacne-prace/bratislava" },
  ];

  return (
    <main className="bg-white">
      <Hero
        title={heroData.title}
        description={heroData.description}
        formTitle={heroData.formTitle}
        formSubtitle={heroData.formSubtitle}
        backgroundImage={heroData.backgroundImage}
        benefits={["Obhliadka zadarmo", "Minimálna prašnosť", "Odvoz sute v cene"]}
      />
      <Clients />
      <GoogleReviews />
      <HowItWorks />
      <Reviews showHeadline={true} />
      <Features
        title={featuresData.title}
        description={featuresData.description}
        features={featuresData.features}
      />
      <div className="md:mb-[-100px]">
        <LocationMap
          title="Búracie práce po celej Bratislave"
          description="Pôsobíme vo všetkých mestských častiach Bratislavy."
          locations={bratislavaDistricts}
          additionalText="Realizujeme búranie aj v okolí Bratislavy: Stupava, Senec, Pezinok."
        />
      </div>
      <InstagramFeed />
      <GoogleReviews showReviewsShowcase={false} />
      <FAQ
        title="Často kladené otázky o búracích prácach v Bratislave"
        items={faqItems}
      />
      <FAQJsonLd items={faqItems} />
      <CTA
        title="Plánujete búranie v Bratislave?"
        description="Získajte nezáväznú cenovú ponuku. Prídeme, obhliadneme a navrhneme najlepší postup pre vaše búracie práce."
        buttonText="Dohodnúť obhliadku"
      />
      <ServicePricing filter={["buracie-prace", "vypratavanie"]} />
      <TrustBadges />
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Odvoz odpadu Bratislava", description: "Likvidácia sute po búraní.", href: "/odvoz-likvidacia-stavebneho-odpadu/bratislava", icon: "/icons/truck_icon.svg" },
          { title: "Búracie práce", description: "Kompletné služby búrania.", href: "/buracie-demolacne-prace", icon: "/icons/wrecking_ball_icon.svg" },
          { title: "Hodinový manžel Bratislava", description: "Drobné opravy po rekonštrukcii.", href: "/hodinovy-manzel-majster/bratislava", icon: "/icons/repair_icon.svg" },
        ]}
      />
    </main>
  );
}
