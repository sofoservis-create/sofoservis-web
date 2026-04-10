import React from "react";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import LocationMap from "@/components/sections/LocationMap";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Vypratávanie bytov a domov Bratislava | Sofoservis",
  description:
    "Ponúkame profesionálne vypratávanie bytov a domov v Bratislave ✅ Lacné a férové ceny ✅ Obhliadka priestoru zadarmo ✅ Kontaktujte nás ešte dnes!",
  keywords:
    "vypratavanie bratislava, vypratávanie bytov bratislava, vypratanie bytu bratislava, vypratanie domu bratislava, vypratanie pozostalosti bratislava, likvidacia odpadu bratislava",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-bytov-domov/bratislava",
      languages: {
        sk: "https://www.sofoservis.sk/vypratavanie-bytov-domov/bratislava",
        en: "https://www.sofoservis.sk/en/apartment-clearance-bratislava",
        "x-default": "https://www.sofoservis.sk/vypratavanie-bytov-domov/bratislava",
      },
  },
};

export default function VypratavanieBytovDomovBratislavaPage() {
  const faqItems = [
            {
              question: "Ako prebieha proces vypratávania v Bratislave?",
              answer:
                "Proces vypratávania v Bratislave začína bezplatnou obhliadkou priestoru, počas ktorej odhadneme rozsah prác a pripravíme cenovú ponuku. Po dohode stanovíme termín. V dohodnutý deň náš tím príde so všetkým potrebným vybavením. Najprv vytriedime veci podľa vašich požiadaviek (čo zachovať, čo darovať, čo zlikvidovať), následne zabalíme a odvezieme všetok nepotrebný materiál a nakoniec priestor vyčistíme. Vďaka dobrej znalosti Bratislavy a lokálnym kontaktom na zberné dvory a skládky je celý proces efektívny a rýchly.",
            },
            {
              question:
                "Aká je cena za vypratanie bytu alebo domu v Bratislave?",
              answer:
                "Cena za vypratávanie v Bratislave závisí od viacerých faktorov: veľkosť priestoru, množstvo vecí, dostupnosť (poschodie, výťah), typ odpadu (bežný, stavebný, nebezpečný) a doplnkové služby. Pre štandardný 2-izbový byt v Bratislave sa ceny pohybujú od 350€ do 700€, pre rodinný dom od 600€ do 1500€. Poskytujeme nezáväznú cenovú ponuku po bezplatnej obhliadke. V Bratislave navyše ponúkame výhodnejšie ceny vďaka nižším nákladom na dopravu a likvidáciu odpadu.",
            },
            {
              question:
                "Ako rýchlo viete zabezpečiť vypratávanie v Bratislave?",
              answer:
                "Keďže naša firma sídli v Bratislave, vieme zabezpečiť vypratávanie v rýchlom čase. V naliehavých prípadoch (napríklad pred predajom nehnuteľnosti) dokážeme zorganizovať vypratávanie do 24-48 hodín od kontaktovania. Pre štandardné termíny sa snažíme vyjsť v ústrety vašim časovým preferenciám. Vďaka viacerým tímom, ktoré máme k dispozícii, zvládame aj väčšie zákazky v kratšom čase a pokrývame všetky mestské časti Bratislavy.",
            },
            {
              question: "Kam odvážate odpad z vypratávania v Bratislave?",
              answer:
                "Odpad z vypratávania odvážame na oficiálne zberné dvory a skládky v Bratislave a okolí v súlade s predpismi o odpadovom hospodárstve. Bežný komunálny odpad smeruje na skládky, recyklovateľný materiál do recyklačných zariadení, nebezpečný odpad do špecializovaných zariadení na jeho likvidáciu. Všetok odpad je riadne evidovaný a ekologicky spracovaný. V rámci Bratislavy máme dobré kontakty so zbernými dvormi, čo nám umožňuje efektívnejšie a cenovo výhodnejšie spracovanie odpadu.",
            },
            {
              question:
                "Vypratávate aj nebezpečný odpad a chemikálie v Bratislave?",
              answer:
                "Áno, v rámci Bratislavy a okolia zabezpečujeme aj vypratávanie a odbornú likvidáciu nebezpečného odpadu. Máme potrebné povolenia a vybavenie na bezpečnú manipuláciu s chemikáliami, starými farbami, riedidlami, pesticídmi, elektroodpadom obsahujúcim nebezpečné látky a ďalšími rizikovými materiálmi. Spolupracujeme so špecializovanými firmami v Bratislave, ktoré zabezpečujú ekologickú likvidáciu týchto látok v súlade so všetkými environmentálnymi predpismi a normami.",
            },
          ];
  // Custom data for Hero section
  const heroData = {
    title: "Vypratávanie bytov a domov v Bratislave",
    description:
      "Profesionálne a rýchle vypratávanie bytov, domov a nehnuteľností v Bratislave a okolí. Náš tím sa postará o komplexné služby od triedenia vecí po odvoz.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu v Bratislave",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Custom data for Features section
  const featuresData = {
    title: "Komplexné služby vypratávania bytov a domov",
    description:
      "Profesionálne vypratávanie nehnuteľností s následným odvozom a likvidáciou nepotrebných vecí. Ušetríme vám čas a energiu.",
    features: [
      {
        image: "/icons/house_icon.svg", // Was: /images/icon1.webp
        title: "Kompletné vypratanie bytu alebo domu",
        description:
          "Vypratáme celý byt alebo dom vrátane všetkých miestností, pivnice a podkrovia. Postaráme sa o triedenie vecí a ich následné zneškodnenie alebo darovanie.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/vypratavanie_icon.svg", // Was: /images/icon2.webp
        title: "Vypratávanie pivníc a garáží",
        description:
          "Špecializujeme sa na vypratávanie pivničných priestorov, garáží a skladov. Odstránime všetky nepotrebné veci a zabezpečíme čistotu priestorov.",
        link: "/vypratavanie-pivnic-garazi-nebytovych-priestorov",
      },
      {
        image: "/icons/furniture_icon.svg", // Was: /images/icon3.webp
        title: "Odvoz a likvidácia starého nábytku",
        description:
          "Profesionálny odvoz starého nábytku, spotrebičov a iného zariadenia. Zabezpečujeme environmentálne zodpovednú likvidáciu všetkých materiálov.",
        link: "/odvoz-likvidacia-stavebneho-odpadu/",
      },
      {
        image: "/icons/landscape_icon.svg", // Was: /images/icon4.webp - **NEW ICON**
        title: "Čistenie a vypratávanie pozemkov",
        description:
          "Vyčistíme a vypratáme vaše pozemky od nepotrebných vecí, stavebného odpadu a rastlinných zvyškov. Pripravíme pozemok na ďalšie využitie.",
        link: "/cistenie-vypratavanie-pozemkov-nehnutelnosti",
      },
      {
        image: "/icons/recycle_icon.svg", // Was: /images/icon5.webp
        title: "Likvidácia nebezpečného odpadu",
        description:
          "Bezpečne zlikvidujeme nebezpečný odpad, staré spotrebiče, batérie, farby a chemikálie podľa platných predpisov a noriem.",
        link: "/likvidacia-nebezpecneho-odpadu-starych-spotrebicov",
      },
      {
        image: "/icons/truck_icon.svg", // Was: /images/icon6.webp
        title: "Odvoz stavebného odpadu",
        description:
          "Po vypratávaní zabezpečíme aj odvoz stavebného odpadu, sute a demolačných materiálov. Kompletná služba na jednom mieste.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
    ],
  };

  // Bratislava districts list
  const bratislavaDistricts = [
    "Staré Mesto",
    "Ružinov",
    "Nové Mesto",
    "Petržalka",
    "Karlova Ves",
    "Dúbravka",
    "Rača",
    "Vajnory",
    "Podunajské Biskupice",
    "Vrakuňa",
    "Devínska Nová Ves",
    "Devín",
    "Záhorská Bystrica",
    "Lamač",
    "Rusovce",
    "Jarovce",
    "Čunovo",
  ];

  return (
    <main className="bg-white">
      {/* Hero section - no wrapper needed as it has its own spacing */}
      <Hero
        title={heroData.title}
        description={heroData.description}
        formTitle={heroData.formTitle}
        formSubtitle={heroData.formSubtitle}
        backgroundImage={heroData.backgroundImage}
      />

      {/* Clients section */}
      <div>
        <Clients />
      </div>

      {/* Google Reviews section */}
      <div>
        <GoogleReviews />
      </div>

      {/* Reviews section */}
      <div>
        <Reviews showHeadline={true} />
      </div>

      {/* Location Map - Bratislava districts */}
      <div>
        <LocationMap
          title="Vypratávanie bytov vo všetkých častiach Bratislavy"
          description="Poskytujeme naše profesionálne služby vo všetkých mestských častiach Bratislavy"
          locations={bratislavaDistricts}
          additionalText="Okrem Bratislavy ponúkame naše služby aj v okolitých mestách ako Senec, Pezinok, Malacky, Stupava, Modra a ďalšie obce v Bratislavskom kraji. Kontaktujte nás pre bližšie informácie o dostupnosti služieb vo vašej lokalite."
        />
      </div>

      {/* Features section */}
      <div>
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

      {/* Google Reviews section */}
      <div>
        <GoogleReviews showReviewsShowcase={false} />
      </div>

      {/* FAQ section */}
      <div>
        <FAQ
          title="Často kladené otázky o vypratávaní bytov a domov v Bratislave"
          items={[
            {
              question: "Ako prebieha proces vypratávania v Bratislave?",
              answer:
                "Proces vypratávania v Bratislave začína bezplatnou obhliadkou priestoru, počas ktorej odhadneme rozsah prác a pripravíme cenovú ponuku. Po dohode stanovíme termín. V dohodnutý deň náš tím príde so všetkým potrebným vybavením. Najprv vytriedime veci podľa vašich požiadaviek (čo zachovať, čo darovať, čo zlikvidovať), následne zabalíme a odvezieme všetok nepotrebný materiál a nakoniec priestor vyčistíme. Vďaka dobrej znalosti Bratislavy a lokálnym kontaktom na zberné dvory a skládky je celý proces efektívny a rýchly.",
            },
            {
              question:
                "Aká je cena za vypratanie bytu alebo domu v Bratislave?",
              answer:
                "Cena za vypratávanie v Bratislave závisí od viacerých faktorov: veľkosť priestoru, množstvo vecí, dostupnosť (poschodie, výťah), typ odpadu (bežný, stavebný, nebezpečný) a doplnkové služby. Pre štandardný 2-izbový byt v Bratislave sa ceny pohybujú od 350€ do 700€, pre rodinný dom od 600€ do 1500€. Poskytujeme nezáväznú cenovú ponuku po bezplatnej obhliadke. V Bratislave navyše ponúkame výhodnejšie ceny vďaka nižším nákladom na dopravu a likvidáciu odpadu.",
            },
            {
              question:
                "Ako rýchlo viete zabezpečiť vypratávanie v Bratislave?",
              answer:
                "Keďže naša firma sídli v Bratislave, vieme zabezpečiť vypratávanie v rýchlom čase. V naliehavých prípadoch (napríklad pred predajom nehnuteľnosti) dokážeme zorganizovať vypratávanie do 24-48 hodín od kontaktovania. Pre štandardné termíny sa snažíme vyjsť v ústrety vašim časovým preferenciám. Vďaka viacerým tímom, ktoré máme k dispozícii, zvládame aj väčšie zákazky v kratšom čase a pokrývame všetky mestské časti Bratislavy.",
            },
            {
              question: "Kam odvážate odpad z vypratávania v Bratislave?",
              answer:
                "Odpad z vypratávania odvážame na oficiálne zberné dvory a skládky v Bratislave a okolí v súlade s predpismi o odpadovom hospodárstve. Bežný komunálny odpad smeruje na skládky, recyklovateľný materiál do recyklačných zariadení, nebezpečný odpad do špecializovaných zariadení na jeho likvidáciu. Všetok odpad je riadne evidovaný a ekologicky spracovaný. V rámci Bratislavy máme dobré kontakty so zbernými dvormi, čo nám umožňuje efektívnejšie a cenovo výhodnejšie spracovanie odpadu.",
            },
            {
              question:
                "Vypratávate aj nebezpečný odpad a chemikálie v Bratislave?",
              answer:
                "Áno, v rámci Bratislavy a okolia zabezpečujeme aj vypratávanie a odbornú likvidáciu nebezpečného odpadu. Máme potrebné povolenia a vybavenie na bezpečnú manipuláciu s chemikáliami, starými farbami, riedidlami, pesticídmi, elektroodpadom obsahujúcim nebezpečné látky a ďalšími rizikovými materiálmi. Spolupracujeme so špecializovanými firmami v Bratislave, ktoré zabezpečujú ekologickú likvidáciu týchto látok v súlade so všetkými environmentálnymi predpismi a normami.",
            },
          ]}
        />
      </div>

      {/* CTA section */}
      <div>
        <CTA
          title="Potrebujete profesionálne vypratávanie v Bratislave?"
          description="Zbavte sa starostí s vypratávaním. Náš skúsený tím sa postará o všetko - od triedenia vecí až po finálne vyčistenie priestoru. Pôsobíme vo všetkých častiach Bratislavy a zabezpečíme aj odvoz odpadu."
          buttonText="Získať nezáväznú ponuku"
        />
      </div>
    
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[{"title":"Vypratávanie Bratislava","description":"Vypratávanie bytov a priestorov v Bratislave od 25€/hod.","href":"/vypratavanie-bratislava","icon":"/icons/vypratavanie_icon.svg"},{"title":"Vypratávanie pivníc a garáží","description":"Rýchle vypratanie pivníc, kobiek a garáží.","href":"/vypratavanie-pivnic-garazi-nebytovych-priestorov","icon":"/icons/house_icon.svg"},{"title":"Sťahovanie Bratislava","description":"Profesionálne sťahovanie v celej Bratislave.","href":"/stahovanie-bratislava","icon":"/icons/truck_icon.svg"},{"title":"Odvoz stavebného odpadu","description":"Rýchly odvoz suťa, podláh a stavebného odpadu.","href":"/odvoz-likvidacia-stavebneho-odpadu","icon":"/icons/recycle_icon.svg"}]}
      />
          <FAQJsonLd items={faqItems} />
    </main>
  );
}
