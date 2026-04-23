import React from "react";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import CTA from "@/components/sections/CTA";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Sťahovanie do Švajčiarska zo Slovenska | Sofoservis",
  description:
    "Profesionálne sťahovanie do Švajčiarska a zo Švajčiarska na Slovensko. Trasy do Zürichu, Ženevy, Bernu. Pomoc s colnými formalitami mimo EÚ, poistenie.",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie/svajciarsko",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/svajciarsko",
      en: "https://www.sofoservis.sk/en/moving-from-slovakia-to-switzerland",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie/svajciarsko",
    },
  },
  keywords:
    "sťahovanie do Švajčiarska, medzinárodné sťahovanie Švajčiarsko, preprava do Zürichu, sťahovanie Slovensko Bern, sťahovanie mimo EÚ",
  openGraph: {
    title: "Sťahovanie do Švajčiarska zo Slovenska | Sofoservis",
    description:
      "Profesionálne sťahovanie do Švajčiarska. Pomoc s colnými formalitami, poistenie zahrnuté.",
    url: "https://www.sofoservis.sk/medzinarodne-stahovanie/svajciarsko",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieSvajciarskoPage() {
  const heroData = {
    title: "Sťahovanie do Švajčiarska",
    description:
      "Spoľahlivé medzinárodné sťahovanie zo Slovenska do Švajčiarska. Zürich (950 km), Bern (1 050 km) a Ženeva (1 200 km) sú populárne destinácie pre slovenských expatov. Švajčiarsko nie je v EÚ — pomáhame s colnými formalitami a zaisťujeme bezpečnú prepravu vašich vecí.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Sťahovanie do Švajčiarska — kalkulácia zadarmo",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Prečo sťahovať do Švajčiarska cez Sofoservis",
    description:
      "Švajčiarsko mimo EÚ vyžaduje špeciálny prístup — máme skúsenosti aj s touto destináciou.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Sťahovanie domácností",
        description:
          "Kompletné sťahovanie bytu alebo domu zo Slovenska do Švajčiarska vrátane balenia a prepravy.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Firemné sťahovanie",
        description:
          "Presun kancelárií a firiem zo Slovenska do Švajčiarska s komplexnou logistikou.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Zürich, Bern, Ženeva",
        description:
          "Sťahujeme do všetkých švajčiarskych kantónov a miest vrátane Zürichu, Bernu, Ženevy a Bazileja.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Colné formality mimo EÚ",
        description:
          "Švajčiarsko nie je v EÚ — pripravíme všetky potrebné colné dokumenty pre bezproblémový vstup vašich vecí.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Zosilnené balenie",
        description:
          "Pre trasy cez Alpy používame zosilnené baliace materiály a špeciálne ochranné prvky.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Poistenie prepravy",
        description:
          "Komplexné poistenie vášho majetku počas celej trasy zo Slovenska do Švajčiarska.",
        link: "/medzinarodne-stahovanie",
      },
    ],
  };

  const faqItems = [
    {
      question: "Aké colné formality treba splniť pri sťahovaní do Švajčiarska?",
      answer:
        "Švajčiarsko nie je členom EÚ, takže pri sťahovaní osobných vecí je potrebné vyplniť colné vyhlásenie a pripraviť inventárny zoznam s hodnotami všetkých vecí. Colníci overujú, že ide o osobnú potrebu a nie o komerčný import. Naši koordinátori vám pomôžu s prípravou dokumentácie.",
    },
    {
      question: "Ako dlho trvá sťahovanie z Bratislavy do Zürichu?",
      answer:
        "Vzdialenosť Bratislava – Zürich je cca 950 km, čo zodpovedá zhruba 9 hodinám jazdy. Realizujeme to ako celodenné sťahovanie s naložením v skorých ranných hodinách.",
    },
    {
      question: "Platia sa za sťahovanie osobných vecí do Švajčiarska clo alebo DPH?",
      answer:
        "Ak sa sťahujete natrvalo a veci sú vaším osobným majetkom (nie nové), zvyčajne sú od cla a DPH oslobodené. Presné podmienky záležia na švajčiarskej colnej legislatíve — informácie vám poskytneme pri objednávke.",
    },
    {
      question: "Sťahujete aj zo Švajčiarska späť na Slovensko?",
      answer:
        "Áno, realizujeme sťahovanie v oboch smeroch. Aj pri návrate zo Švajčiarska na Slovensko pomáhame s potrebnou dokumentáciou.",
    },
    {
      question: "Aká je cena sťahovania do Bernu alebo Ženevy?",
      answer:
        "Cena závisí od objemu vecí, vzdialenosti a doplnkových služieb. Ženeva je o niečo vzdialenejšia ako Zürich, čo sa odráža na cene. Kontaktujte nás pre bezplatnú kalkuláciu.",
    },
  ];

  return (
    <main className="bg-white">
      <Hero
        title={heroData.title}
        description={heroData.description}
        formTitle={heroData.formTitle}
        formSubtitle={heroData.formSubtitle}
        backgroundImage={heroData.backgroundImage}
        benefits={["Pomoc s colnými formalitami mimo EÚ", "Poistenie prepravy zahrnuté", "Skúsený tím pre dlhé trasy"]}
      />
      <div><Clients /></div>
      <div><GoogleReviews /></div>
      <HowItWorks />
      <ServicePricing filter={["medzinarodne-stahovanie", "stahovanie"]} />
      <div><Reviews showHeadline={true} /></div>
      <div>
        <Features
          title={featuresData.title}
          description={featuresData.description}
          features={featuresData.features}
        />
      </div>
      <div>
        <FAQ
          title="Často kladené otázky — sťahovanie do Švajčiarska"
          items={faqItems}
        />
      </div>
      <FAQJsonLd items={faqItems} />
      <div><CTA /></div>
      <TrustBadges />
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Medzinárodné sťahovanie", description: "Sťahovanie do celej Európy.", href: "/medzinarodne-stahovanie", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Zürichu", description: "Preprava do švajčiarskej metropoly.", href: "/medzinarodne-stahovanie/zurich", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie do Nemecka", description: "Profesionálne sťahovanie do Nemecka.", href: "/medzinarodne-stahovanie/nemecko", icon: "/icons/globe_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Spoľahlivé sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
        ]}
      />
    </main>
  );
}
