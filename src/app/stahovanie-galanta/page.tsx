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
  title: "Sťahovanie Galanta - byty, domy, nábytok a kancelárie",
  description:
    "Profesionálne sťahovacie služby v Galante a okolí. Rýchlo, spoľahlivo a za výhodné ceny. Sťahujeme byty, domy, kancelárie a firmy v Galante a celom.",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-galanta",
      languages: {
        sk: "https://www.sofoservis.sk/stahovanie-galanta",
        en: "https://www.sofoservis.sk/en/moving-galanta",
        "x-default": "https://www.sofoservis.sk/stahovanie-galanta",
      },
  },
  keywords:
    "stahovanie galanta, stahovanie bytov galanta, stahovacie služby galanta, stahovanie firiem galanta, preprava nabytku galanta, stahovanie dom galanta",
  openGraph: {
      title: "Sťahovanie Galanta - byty, domy, nábytok a kancelárie | Sofoservis",
      description: "Profesionálne sťahovacie služby v Galante a okolí od 25€/hod. Rýchlo, spoľahlivo a za výhodné ceny. Sťahujeme byty, domy, kancelárie a firmy.",
      url: "https://www.sofoservis.sk/stahovanie-galanta",
      siteName: "Sofoservis",
      images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
      locale: "sk_SK",
      type: "website",
    },
  };

export default function StahovanieGalantaPage() {
  // Data for Hero section
  const heroData = {
    title: "Sťahovanie Galanta: Rýchlo a spoľahlivo",
    description:
      "Kompletné sťahovacie služby v Galante a okolí. Profesionálny tím, výhodné ceny, spokojnosť garantovaná. Sťahujeme byty, domy, kancelárie a firmy v celej Galante a priľahlých obciach.",
    formTitle: "Sťahovanie v Galante bez starostí s bezplatnou ponukou",
    formSubtitle: "Vyplňte formulár nižšie pre rýchlu fixnú cenu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  // Data for Features section
  const featuresData = {
    title: "Profesionálne sťahovacie služby v Galante",
    description:
      "Kompletné služby sťahovania pre domácnosti a firmy v Galante a okolí s dôrazom na kvalitu a spoľahlivosť.",
    features: [
      {
        image: "/icons/house_icon.svg", // Perfect for apartment/home moving
        title: "Sťahovanie bytov a domov v Galante",
        description:
          "Kompletné služby sťahovania bytov a rodinných domov v Galante. Bezpečne presunieme váš majetok s maximálnou opatrnosťou a profesionalitou.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg", // Perfect for business moving
        title: "Sťahovanie firiem a kancelárií",
        description:
          "Profesionálne sťahovanie podnikov a kancelárií v Galante. Minimalizujeme prestoje vašej firmy sťahovaním počas víkendov.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/wrench_icon.svg", // Perfect for furniture assembly
        title: "Montáž a demontáž nábytku",
        description:
          "Odborná montáž a demontáž nábytku pri sťahovaní v Galante. Postaráme sa o správne rozloženie a zloženie vášho zariadenia.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/crane_icon.svg", // Perfect for heavy items transport
        title: "Preprava ťažkých bremien",
        description:
          "Špecializujeme sa na sťahovanie pianín, trezorů a iných ťažkých predmetov v Galante s použitím profesionálneho vybavenia.",
        link: "/stahovanie-tazkych-bremien",
      },
      {
        image: "/icons/vypratavanie_icon.svg", // Perfect for clearance services
        title: "Vypratávanie nehnuteľností",
        description:
          "Kompletné vypratávanie bytov, domov a nebytových priestorov v Galante. Ideálne pri predaji nehnuteľnosti alebo rekonštrukcii.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/hammer_icon.svg", // Perfect for handyman services
        title: "Hodinový manžel - drobné práce",
        description:
          "Služby hodinového manžela v Galante pre drobné opravy, montáže a pomocné práce súvisiace so sťahovaním alebo zariaďovaním.",
        link: "/hodinovy-manzel-majster",
      },
    ],
  };

  // Data for Map section
  const mapData = {
    title: "Sťahujeme v Galante a okolí",
    description:
      "Naše služby poskytujeme v celej Galante a v okolitých obciach pre komplexné sťahovanie domácností a firiem.",
    locations: [
      "Galanta",
      "Kolónia",
      "Nebojsa",
      "Hody",
      "Sereď",
      "Šaľa",
      "Matúškovo",
      "Topoľnica",
      "Čierna Voda",
      "Jelka",
      "Veľké Úľany",
      "Dolné Saliby",
      "Kráľov Brod",
      "Kajal",
      "Váhovce",
      "Mostová",
    ],
    additionalText:
      "Sládkovičovo, Trnava, Dunajská Streda, Šamorín a celý Trnavský kraj.",
  };

  // Data for FAQ section
  const faqData = {
    title: "Často kladené otázky o sťahovaní v Galante",
    items: [
      {
        question:
          "V ktorých lokalitách okolo Galanty poskytujete sťahovacie služby?",
        answer:
          "Naše služby poskytujeme v celej Galante a širokom okolí vrátane obcí ako Sereď, Šaľa, Matúškovo, Topoľnica, Jelka, Veľké Úľany a ďalšie. Pokrývame celý Galantský okres a presahujeme aj do okolitých okresov.",
      },
      {
        question: "Aká je cena sťahovania v Galante?",
        answer:
          "Cena sťahovania závisí od viacerých faktorov ako objem vecí, vzdialenosť, prístupové podmienky a potrebné služby. Pre presný cenový odhad vám radi pripravíme bezplatnú cenovú ponuku po vyplnení kontaktného formulára alebo po telefonickom rozhovore.",
      },
      {
        question:
          "Poskytujete sťahovanie z Galanty do Bratislavy alebo iných miest?",
        answer:
          "Áno, okrem lokálneho sťahovania v rámci Galanty poskytujeme medzimestské sťahovanie z Galanty do Bratislavy, Trnavy a ďalších miest na Slovensku, ako aj medzinárodné sťahovanie. Tím Sofoservis zabezpečí bezpečný a efektívny presun vášho majetku kamkoľvek potrebujete.",
      },
      {
        question: "Poskytujete aj balenie vecí pri sťahovaní v Galante?",
        answer:
          "Áno, ponúkame kompletné balenie všetkých vašich vecí vrátane krehkých predmetov, elektroniky a oblečenia. Dodáme všetky potrebné obalové materiály ako krabice, bublinkové fólie, ochranné deky a fixačné materiály. Váš majetok je u nás v bezpečí.",
      },
      {
        question:
          "Sťahujete aj ťažké predmety ako klavíry alebo trezory v Galante?",
        answer:
          "Áno, špecializujeme sa aj na sťahovanie ťažkých a objemných predmetov ako sú klavíry, trezory, biliardové stoly či antický nábytok. Používame špeciálne vybavenie a techniky na bezpečnú manipuláciu s týmito predmetmi.",
      },
      {
        question: "Koľko vopred si mám objednať sťahovanie v Galante?",
        answer:
          "Odporúčame objednať sťahovanie aspoň 7-14 dní vopred, aby sme mohli zabezpečiť termín podľa vašich potrieb. V urgentných prípadoch však vieme zrealizovať sťahovanie aj do 24-48 hodín od objednávky. Flexibilne sa prispôsobíme vašim časovým možnostiam.",
      },
    ],
  };

  return (
    <main className="bg-white">
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
      <link
        rel="preload"
        href="/images/mascot/mascot-holding-boxes-mobile.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)"
      />
      <link
        rel="preload"
        href="/images/mascot/mascot-holding-boxes.svg"
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
          mobileMascotSrc="/images/mascot/mascot-holding-boxes-mobile.svg"
          mobileMascotOffsetY={-44}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>

      {/* Clients section */}
      <div>
        <Clients />
      </div>

      {/* Google Reviews section */}
      <div>
        <GoogleReviews showCarousel={true} />
      </div>

      {/* Features section */}
      <div className="">
        <Features
          title={featuresData.title}
          description={featuresData.description}
          features={featuresData.features}
        />
      </div>

      {/* Instagram Feed section */}
      <div>
        <InstagramFeed />
      </div>

      {/* Location Map section */}
      <div>
        <LocationMap
          title={mapData.title}
          description={mapData.description}
          locations={mapData.locations}
          additionalText={mapData.additionalText}
        />
      </div>

      {/* Reviews section */}
      <div>
        <Reviews />
      </div>

      {/* FAQ section */}
      <div>
        <FAQ title={faqData.title} items={faqData.items} />
      </div>

      {/* CTA section */}
      <div>
        <CTA />
      </div>
    
      <ServicePricing filter={["stahovanie", "vypratavanie", "medzinarodne-stahovanie"]} />
      <TrustBadges />
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[{"title":"Sťahovanie bytov a domov","description":"Spoľahlivé sťahovanie bytov a rodinných domov.","href":"/stahovanie-bytov-domov","icon":"/icons/house_icon.svg"},{"title":"Sťahovanie kancelárií","description":"Rýchle sťahovanie firiem s minimálnym prestojom.","href":"/stahovanie-kancelarii-firiem","icon":"/icons/briefcase_icon.svg"},{"title":"Vypratávanie bytov a domov","description":"Kompletné vypratanie bytu alebo domu.","href":"/vypratavanie-bytov-domov","icon":"/icons/vypratavanie_icon.svg"},{"title":"Montáž nábytku","description":"Profesionálna montáž a demontáž nábytku.","href":"/montaz-nabytku","icon":"/icons/wrench_icon.svg"}]}
      />
      <FAQJsonLd items={faqData.items} />
    </main>
  );
}
