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
  title: "Sťahovanie Bratislava - byty, domy, nábytok a kancelárie",
  description:
    "Profesionálne sťahovacie služby v Bratislave od 25€/hod. Sťahujeme byty, domy, kancelárie a firmy v každej mestskej časti. Rýchlo a spoľahlivo.",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-bratislava",
      languages: {
        sk: "https://www.sofoservis.sk/stahovanie-bratislava",
        en: "https://www.sofoservis.sk/en/moving-bratislava",
        "x-default": "https://www.sofoservis.sk/stahovanie-bratislava",
      },
  },
  keywords:
    "stahovanie bratislava, stahovanie bytov bratislava, stahovacie služby, stahovanie firiem bratislava, preprava nabytku bratislava",
  openGraph: {
    title: "Sťahovanie Bratislava - byty, domy, nábytok a kancelárie",
    description:
      "Profesionálne sťahovacie služby v Bratislave a okolí od 25€/hod. Rýchlo, spoľahlivo, spokojnosť garantovaná.",
    url: "https://www.sofoservis.sk/stahovanie-bratislava",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieBratislavaPage() {
  // Data for Hero section
  const heroData = {
    title: "Sťahovanie Bratislava: Rýchlo a spoľahlivo",
    description:
      "Kompletné sťahovacie služby v Bratislave a okolí od 25€/hod. Profesionálny tím, spokojnosť garantovaná. Sťahujeme byty, domy, kancelárie a firmy.",
    formTitle: "Sťahovanie v Bratislave bez starostí s bezplatnou ponukou",
    formSubtitle: "Vyplňte formulár nižšie pre rýchlu fixnú cenu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  // Data for Features section
  const featuresData = {
    title: "Profesionálne sťahovacie služby v Bratislave",
    description:
      "Kompletné služby sťahovania pre domácnosti a firmy v celej Bratislave a okolí.",
    features: [
      {
        image: "/icons/house_icon.svg", // Perfect for apartment moving
        title: "Sťahovanie bytov v Bratislave",
        description:
          "Kompletné služby sťahovania bytov v Bratislave. Bezpečne prevezieme váš nábytok a osobné veci na nové miesto.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg", // Perfect for office/business moving
        title: "Sťahovanie kancelárií a firiem",
        description:
          "Profesionálne sťahovanie firiem a kancelárií v Bratislave. Minimalizujeme prestoje vašej firmy sťahovaním počas víkendov a sviatkov.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/wrench_icon.svg", // Perfect for assembly/disassembly
        title: "Montáž a demontáž nábytku",
        description:
          "Odborná montáž a demontáž akéhokoľvek nábytku pri sťahovaní v Bratislave. Šetríme váš čas a energiu.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/crane_icon.svg", // Perfect for heavy items
        title: "Sťahovanie ťažkých bremien",
        description:
          "Špecializujeme sa na presun ťažkých bremien ako sú klavíry, trezory či veľké kusy nábytku v Bratislave.",
        link: "/stahovanie-tazkych-bremien",
      },
      {
        image: "/icons/globe_icon.svg", // Perfect for international moving
        title: "Medzinárodné sťahovanie z Bratislavy",
        description:
          "Presťahovanie z Bratislavy do zahraničia alebo naopak. Komplexné riešenie pre medzinárodné sťahovanie s minimom starostí.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/vypratavanie_icon.svg", // Perfect for clearance/cleaning
        title: "Vypratávanie priestorov",
        description:
          "Kompletné vypratávanie nehnuteľností v Bratislave. Vhodné pri predaji, rekonštrukcii alebo dedičskom konaní.",
        link: "/vypratavanie-bytov-domov",
      },
    ],
  };

  // Data for Map section
  const mapData = {
    title: "Sťahujeme vo všetkých častiach Bratislavy",
    description:
      "Naše služby poskytujeme vo všetkých mestských častiach Bratislavy aj v okolitých obciach pre komplexné sťahovanie domácností a firiem.",
    locations: [
      { name: "Staré Mesto", href: "/stahovanie-stare-mesto" },
      { name: "Ružinov", href: "/stahovanie-ruzinov" },
      { name: "Nové Mesto", href: "/stahovanie-nove-mesto" },
      { name: "Petržalka", href: "/stahovanie-petrzalka" },
      { name: "Karlova Ves", href: "/stahovanie-karlova-ves" },
      { name: "Dúbravka", href: "/stahovanie-dubravka" },
      "Rača",
      "Vrakuňa",
      "Podunajské Biskupice",
      "Devínska Nová Ves",
      "Devín",
      "Lamač",
      "Záhorská Bystrica",
      "Vajnory",
      "Jarovce",
      "Rusovce",
      "Čunovo",
    ],
    additionalText: "Senec, Pezinok, Malacky, Stupava a ďalšie okolité obce.",
  };

  // Data for FAQ section
  const faqData = {
    title: "Často kladené otázky o sťahovaní v Bratislave",
    items: [
      {
        question:
          "V ktorých častiach Bratislavy poskytujete sťahovacie služby?",
        answer:
          "Naše služby poskytujeme vo všetkých mestských častiach Bratislavy vrátane Starého Mesta, Ružinova, Petržalky, Dúbravky, Karlovej Vsi, Nového Mesta, Rače a ďalších. Pôsobíme tiež v okolí Bratislavy - Senec, Pezinok, Malacky.",
      },
      {
        question: "Aká je cena sťahovania v Bratislave?",
        answer:
          "Cena sťahovania závisí od viacerých faktorov ako objem vecí, vzdialenosť, prístupové podmienky a potrebné služby. Pre presný cenový odhad vám radi pripravíme bezplatnú cenovú ponuku po vyplnení kontaktného formulára alebo po telefonickom rozhovore.",
      },
      {
        question:
          "Ako dlho vopred je potrebné objednať sťahovanie v Bratislave?",
        answer:
          "Odporúčame objednať sťahovanie aspoň 7-14 dní vopred, aby sme mohli zabezpečiť termín podľa vašich potrieb. V prípade potreby vieme zabezpečiť aj expresné sťahovanie s realizáciou do 24-48 hodín.",
      },
      {
        question: "Poskytujete aj montáž a demontáž nábytku v Bratislave?",
        answer:
          "Áno, naše služby zahŕňajú kompletnú demontáž nábytku na pôvodnom mieste a následnú montáž v novom priestore. Naši pracovníci majú skúsenosti s rôznymi typmi nábytku vrátane IKEA, Asko, Jysk a ďalších značiek.",
      },
      {
        question:
          "Sťahujete aj ťažké predmety ako klavíry alebo trezory v Bratislave?",
        answer:
          "Áno, špecializujeme sa aj na sťahovanie ťažkých a objemných predmetov ako sú klavíry, trezory, biliardové stoly či antický nábytok. Používame špeciálne vybavenie a techniky na bezpečnú manipuláciu s týmito predmetmi.",
      },
      {
        question:
          "Ako riešite parkovanie sťahovacieho auta v centre Bratislavy?",
        answer:
          "Máme skúsenosti s parkovaním v centre Bratislavy. V prípade potreby vieme zabezpečiť povolenia na dočasné parkovanie. O túto administratívu sa postaráme my, aby ste sa nemuseli zaťažovať byrokraciou.",
      },
    ],
  };

  return (
    <main className="bg-white">
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
      <link rel="preload"
        href="/images/mascot/mascot-holding-boxes-mobile.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/mascot-holding-boxes.svg"
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
        <FAQ
          title={faqData.title}
          items={faqData.items}
          expandableGroup={{
            label: "Všetko o sťahovaní v Bratislave",
            panels: [
              {
                title: "Prečo si vybrať profesionálne sťahovanie v Bratislave?",
                content: "Sťahovanie je jednou z najnáročnejších životných situácií — fyzicky aj psychicky. Profesionálna sťahovacia firma vám ušetrí nielen čas a sily, ale aj nervy. Skúsený tím vie, ako správne demontovať a zabaliť nábytok, ako ho bezpečne preniesť cez úzke schodiská starých bratislavských domov alebo výťahom v panelovom dome, a ako všetko opäť správne poskladať na novom mieste.\n\nV Bratislave pracujeme s rôznymi typmi nehnuteľností — od štúdií v centre cez veľké rodinné domy v Záhorskej Bystrici až po kancelárske priestory v biznis parkoch pri Diaľnici D1. Každý typ sťahovania má svoje špecifiká a naši pracovníci sú na ne pripravení.",
              },
              {
                title: "Čo ovplyvňuje cenu sťahovania v Bratislave?",
                content: "Cena sťahovania v Bratislave závisí od viacerých faktorov. Základná hodinová sadzba začína od 25€/hod, no výsledná suma sa odvíja od: počtu pracovníkov (štandardne 2, pri väčších zákazkách 3 alebo viac), objemu a hmotnosti vecí, vzdialenosti medzi starým a novým miestom, prístupových podmienok (poschodie, výťah, parkovanie), potreby demontáže a montáže nábytku a požiadavky na baliaci materiál.\n\nPre presný cenový odhad odporúčame vyplniť kontaktný formulár alebo nám zavolať. Bezplatnú obhliadku robíme priamo u vás, aby sme vedeli pripraviť reálnu cenovú ponuku bez skrytých poplatkov.",
              },
              {
                title: "Mestské časti Bratislavy a špeciality sťahovania",
                content: "Každá mestská časť Bratislavy má svoje sťahovacie špecifiká. V Petržalke sa stretávame najmä s panelovými domami — tu je kľúčová koordinácia s výťahom a načasovanie tak, aby sme neblokovali ostatných obyvateľov. Staré Mesto a Ružinov majú mix starých viedenských domov bez výťahu a moderných bytových komplexov. Karlova Ves a Dúbravka sú pre zmenu charakteristické prístupy cez úzke ulice a obmedzené parkovacie miesta.\n\nNaši pracovníci poznajú špecifiká každej mestskej časti a vedia sa prispôsobiť akejkoľvek situácii. Ak máte špeciálne požiadavky alebo obavy ohľadom prístupu, radi ich prediskutujeme vopred.",
              },
              {
                title: "Ako prebieha sťahovanie krok za krokom?",
                content: "Celý proces sťahovania s nami je jednoduchý. Najprv nás kontaktujete cez formulár alebo telefón. Na základe vašich požiadaviek pripravíme cenovú ponuku — bezplatne a nezáväzne. Po odsúhlasení termínu a ceny sa dostavíme v dohodnutý deň. Začneme demontážou a zabalením vecí (ak ste to nestiahli sami), potom naložíme vozidlo, prepravíme veci na nové miesto, vyložíme a na požiadanie aj poskladáme nábytok.\n\nCelý proces od príchodu po odovzdanie hotového bytu zvyčajne trvá 4-8 hodín pri bežnom 2-3-izbovom byte. Snažíme sa byť čo najefektívnejší, pretože účtujeme hodinovo.",
              },
              {
                title: "Tipy pre úspešné sťahovanie v Bratislave",
                content: "Pred sťahovaním odporúčame zbaliť osobné veci a drobnosti do krabíc vopred — ušetríte čas a teda aj peniaze. Označte krabice podľa miestnosti, do ktorej majú ísť v novom byte. Zabezpečte parkovacie miesto pri oboch adresách — ak je to možné, rezervujte miesto vopred. Informujte susedov, najmä ak budete používať výťah dlhšiu dobu.\n\nAk sa sťahujete s deťmi alebo domácimi zvieratami, zabezpečte pre nich bezpečné miesto mimo diania. A nezabudnite — čím viac nám poviete vopred o špeciálnych predmetoch (piano, trezor, umenie), tým lepšie vieme pripraviť správne vybavenie a kapacitu.",
              },
            ],
          }}
        />
      </div>

      {/* CTA section */}
      <div>
        <CTA />
      </div>
    
      <ServicePricing filter={["stahovanie", "vypratavanie", "medzinarodne-stahovanie"]} />
      <TrustBadges />
      <ContactFormSection />


      <RelatedServices
        title="Ďalšie služby v Bratislave"
        services={[
          { title: "Sťahovanie bytov a domov", description: "Profesionálne sťahovanie pre domácnosti od 25€/hod.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
          { title: "Vypratávanie bytov a domov", description: "Kompletné vypratanie a odvoz nepotrebných vecí.", href: "/vypratavanie-bytov-domov", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Montáž nábytku", description: "Skladanie a montáž nábytku všetkých značiek.", href: "/montaz-nabytku", icon: "/icons/wrench_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqData.items} />
    </main>
  );
}
