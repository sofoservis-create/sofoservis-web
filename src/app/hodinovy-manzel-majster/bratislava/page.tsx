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
  title: "Hodinový manžel a majster Bratislava | Sofoservis",
  description:
    "Ponúkame profesionálne služby hodinového manžela - opravy, skladanie, údržba bytov a domov v Bratislave ✅ Lacné a férové ceny ✅ Kontaktujte nás ešte dnes!",
  keywords:
    "hodinový manžel bratislava, hodinovy manzel bratislava, hodinový manžel bratislava ružinov, hodinový manžel cena, hodinovy manzel cena, hodinovy manzel cennik, hodinový manžel cenník, hodinový manžel bratislava cennik, hodinovy manzel bratislava cena, hodinový manžel bratislava dubravka, hodinový manžel bratislava petržalka, hodinovy manzel petrzalka, hodinový manžel devínska nová ves",
  alternates: {
    canonical: "https://www.sofoservis.sk/hodinovy-manzel-majster/bratislava",
      languages: {
        sk: "https://www.sofoservis.sk/hodinovy-manzel-majster/bratislava",
        en: "https://www.sofoservis.sk/en/handyman-bratislava",
        "x-default": "https://www.sofoservis.sk/hodinovy-manzel-majster/bratislava",
      },
  },
};

export default function HodinovyManzelMajsterBratislavaPage() {
  const faqItems = [
            {
              question: "Aké služby poskytuje hodinový manžel v Bratislave?",
              answer:
                "Hodinový manžel poskytuje široké spektrum služieb zahŕňajúcich drobné opravy a údržbu domácnosti: vešanie obrazov, zrkadiel, televízorov a poličiek; inštaláciu osvetlenia, výmenu vypínačov a zásuviek; montáž kuchynských spotrebičov a iné požiadavky podľa individuálnych potrieb. Prispôsobujeme sa Vašim potrebám a vždy sa snažíme flexibilne reagovať.",
            },
            {
              question: "Koľko stojí hodinový manžel v Bratislave?",
              answer:
                "Cena za služby hodinového manžela sa odvíja od viacerých faktorov, pričom najčastejšie používame hodinovú sadzbu. Štandardná hodinová sadzba je 25€ za hodinu práce. Pri niektorých bežných úkonoch ponúkame paušálne ceny. K cene práce sa pripočítava použitý materiál, ak nie je dodaný zákazníkom. Minimálna účtovaná doba je 1 hodina, potom účtujeme po 30-minútových intervaloch. Dopravné náklady účtujeme podľa vzdialenosti od 20€ v rámci Bratislavy a blízkeho okolia.",
            },
            {
              question: "Ako rýchlo viete prísť na obhliadku v Bratislave?",
              answer:
                "V Bratislave sme schopní reagovať veľmi flexibilne. V urgentných prípadoch sa snažíme zabezpečiť výjazd ešte v ten istý deň, štandardne však do 24-48 hodín od objednávky. Naša dostupnosť môže závisieť od vyťaženosti, mestskej časti Bratislavy a type požadovanej služby. Pri telefonickom kontakte na čísle 0951 735 130 vám vieme okamžite potvrdiť dostupnosť a dohodnúť konkrétny termín. Pre zákazníkov v Bratislave ponúkame prednostné termíny a flexibilné časové bloky vrátane víkendov. V prípade havarijných situácií (napr. pretekajúci radiátor, zaseknutý zámok) sa snažíme prísť čo najskôr.",
            },
            {
              question:
                "V ktorých mestských častiach Bratislavy poskytujete služby?",
              answer:
                "Naše služby hodinového manžela poskytujeme vo všetkých mestských častiach Bratislavy, vrátane: Staré Mesto, Ružinov, Nové Mesto, Rača, Vajnory, Karlova Ves, Dúbravka, Lamač, Devín, Devínska Nová Ves, Záhorská Bystrica, Petržalka, Jarovce, Rusovce, Čunovo, Vrakuňa a Podunajské Biskupice. Najčastejšie pôsobíme v husto obývaných častiach ako Petržalka, Ružinov a Staré Mesto, ale dostupní sme bez príplatku v celej Bratislave. Okrem samotnej Bratislavy poskytujeme služby aj v priľahlých obciach ako Stupava, Malinovo, Chorvátsky Grob, Bernolákovo, Ivanka pri Dunaji, Most pri Bratislave alebo Rovinka, pri ktorých môže byť účtovaný príplatok za dopravu.",
            },
            {
              question: "Aká je lehota čakania na termin v Bratislave?",
              answer:
                "V Bratislave sa snažíme zabezpečiť čo najrýchlejšiu realizáciu. Bežná čakacia lehota na termín je 1-3 pracovné dni, v závislosti od aktuálnej vyťaženosti našich technikov. Pri urgentných prípadoch sa snažíme reagovať ešte v deň objednávky alebo nasledujúci pracovný deň. Počas špičkových období (napríklad pred sviatkami alebo v období sťahovania) môže byť čakacia doba dlhšia. Pre prioritné termíny odporúčame objednať služby aspoň 5-7 dní vopred. Pri objednávke telefonicky na čísle 0951 735 130 vás vždy informujeme o aktuálnej dostupnosti a možných termínoch. Pre stálych zákazníkov v Bratislave ponúkame prednostné termíny a flexibilnejšie plánovanie.",
            },
            {
              question: "Poskytujete záruku na vykonané práce v Bratislave?",
              answer:
                "Áno, na všetky vykonané práce našich hodinových manželov v Bratislave poskytujeme štandardnú záruku 6 mesiacov. Táto záruka sa vzťahuje na kvalitu odvedenej práce a prípadné skryté vady. Na dodaný materiál sa vzťahuje záruka podľa zákonných podmienok (zvyčajne 24 mesiacov). V prípade reklamácie nás stačí kontaktovať telefonicky alebo emailom, a problém vyriešime v čo najkratšom čase bezplatnou opravou alebo náhradou. Naším cieľom je spokojnosť zákazníkov v Bratislave, preto sa vždy snažíme nájsť riešenie aj v prípadoch, ktoré priamo nespadajú pod záručné podmienky. Všetky naše práce vykonávame s maximálnou starostlivosťou a profesionalitou, aby k reklamáciám nedochádzalo.",
            },
          ];
  // Custom data for Hero section with Bratislava focus
  const heroData = {
    title: "Hodinový manžel a majster Bratislava",
    description:
      "Profesionálne služby hodinového manžela v Bratislave a okolí pre rýchle a spoľahlivé vyriešenie všetkých drobných opráv, montáží a údržby vo vašej domácnosti. Pôsobíme vo všetkých mestských častiach Bratislavy - Ružinov, Petržalka, Dúbravka, Karlova Ves, Nové Mesto a ďalšie.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle:
      "Najrýchlejší hodinový manžel v Bratislave - vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Custom data for Features section optimized for Bratislava
  const featuresData = {
    title: "Komplexné služby hodinového manžela v Bratislave",
    description:
      "Ponúkame široké spektrum služieb a prác v domácnosti, kancelárii alebo na záhrade v Bratislave a okolí. Od drobných opráv až po náročnejšie montáže - váš problém vyriešime rýchlo a profesionálne.",
    features: [
      {
        image: "/icons/furniture_icon.svg", // For furniture assembly
        title: "Montáž a skladanie nábytku",
        description:
          "Odborná montáž a skladanie všetkých typov nábytku, policových systémov, kuchynských liniek a domáceho vybavenia v Bratislave. Pomôžeme vám s nábytkom z IKEA, JYSK, Asko a ďalších predajní.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/curtain_icon.svg", // For curtains and hanging systems
        title: "Inštalácia a montáž doplnkov",
        description:
          "Profesionálna inštalácia a montáž záclon, závesov, žalúzií, svietidiel, obrazov, zrkadiel, držiakov na TV a ďalších bytových doplnkov v Bratislave a okolí. Spoľahlivo a precízne.",
        link: "/hodinovy-manzel-majster/bratislava",
      },
      {
        image: "/icons/plumbing_icon.svg", // For plumbing work
        title: "Vodoinštalačné práce v Bratislave",
        description:
          "Drobné vodoinštalačné opravy a výmeny - kvapkajúce kohútiky, výmena batérií, oprava splachovačov, čistenie odpadov, výmena umývadiel a ďalšie vodoinštalačné práce v Bratislave a okolí.",
        link: "/hodinovy-manzel-majster/bratislava",
      },
      {
        image: "/icons/electrical_icon.svg", // For electrical work
        title: "Elektroinštalačné práce",
        description:
          "Základné elektroinštalačné práce v Bratislave - výmena vypínačov a zásuviek, inštalácia svietidiel, výmena žiaroviek v ťažko dostupných miestach, kontrola elektrospotrebičov.",
        link: "/hodinovy-manzel-majster/bratislava",
      },
      {
        image: "/icons/paint_icon.svg", // For painting and maintenance work
        title: "Maliarske a údržbárske práce",
        description:
          "Drobné maliarske práce, oprava prasklín v stenách, tmelenie, tapetovanie, výmena podlahových krytín, základné murárske práce a ďalšie údržbárske zásahy v domácnostiach v Bratislave.",
        link: "/hodinovy-manzel-majster/bratislava",
      },
      {
        image: "/icons/garden_icon.svg", // For garden and exterior work
        title: "Záhradnícke a exteriérové práce",
        description:
          "Základná údržba záhrady, montáž záhradného nábytku, inštalácia zavlažovacích systémov, oprava plotov, montáž poštových schránok v Bratislave a blízkom okolí.",
        link: "/hodinovy-manzel-majster/bratislava",
      },
    ],
  };

  // Bratislava locations for LocationMap
  const bratislavaLocations = [
    "Staré Mesto",
    "Ružinov",
    "Nové Mesto",
    "Petržalka",
    "Dúbravka",
    "Karlova Ves",
    "Rača",
    "Vrakuňa",
    "Podunajské Biskupice",
    "Devínska Nová Ves",
    "Lamač",
    "Vajnory",
    "Záhorská Bystrica",
    "Devín",
    "Jarovce",
    "Rusovce",
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
        <GoogleReviews
          title="Recenzie našich zákazníkov v Bratislave"
        />
      </div>

      {/* Reviews section */}
      <div>
        <Reviews showHeadline={true} />
      </div>

      {/* Features section */}
      <div>
        <Features
          title={featuresData.title}
          description={featuresData.description}
          features={featuresData.features}
        />
      </div>

      {/* Bratislava locations section */}
      <div>
        <LocationMap
          title="Služby hodinového manžela v Bratislave"
          description="Pôsobíme vo všetkých mestských častiach Bratislavy"
          locations={bratislavaLocations}
          additionalText="Okrem Bratislavy poskytujeme naše služby aj v blízkych mestách a obciach ako Stupava, Svätý Jur, Ivanka pri Dunaji, Most pri Bratislave, Chorvátsky Grob, Bernolákovo, Malinovo či Rovinka."
          showCallToAction={true}
        />
      </div>

      {/* Instagram Feed section */}
      <div>
        <InstagramFeed />
      </div>

      {/* Google Reviews section with full display */}
      <div>
        <GoogleReviews
          showReviewsShowcase={false}
          title="Prečo si vybrať našu službu hodinového manžela v Bratislave"
        />
      </div>

      {/* FAQ section - Bratislava specific */}
      <div>
        <FAQ
          title="Často kladené otázky o službách hodinového manžela v Bratislave"
          items={[
            {
              question: "Aké služby poskytuje hodinový manžel v Bratislave?",
              answer:
                "Hodinový manžel poskytuje široké spektrum služieb zahŕňajúcich drobné opravy a údržbu domácnosti: vešanie obrazov, zrkadiel, televízorov a poličiek; inštaláciu osvetlenia, výmenu vypínačov a zásuviek; montáž kuchynských spotrebičov a iné požiadavky podľa individuálnych potrieb. Prispôsobujeme sa Vašim potrebám a vždy sa snažíme flexibilne reagovať.",
            },
            {
              question: "Koľko stojí hodinový manžel v Bratislave?",
              answer:
                "Cena za služby hodinového manžela sa odvíja od viacerých faktorov, pričom najčastejšie používame hodinovú sadzbu. Štandardná hodinová sadzba je 25€ za hodinu práce. Pri niektorých bežných úkonoch ponúkame paušálne ceny. K cene práce sa pripočítava použitý materiál, ak nie je dodaný zákazníkom. Minimálna účtovaná doba je 1 hodina, potom účtujeme po 30-minútových intervaloch. Dopravné náklady účtujeme podľa vzdialenosti od 20€ v rámci Bratislavy a blízkeho okolia.",
            },
            {
              question: "Ako rýchlo viete prísť na obhliadku v Bratislave?",
              answer:
                "V Bratislave sme schopní reagovať veľmi flexibilne. V urgentných prípadoch sa snažíme zabezpečiť výjazd ešte v ten istý deň, štandardne však do 24-48 hodín od objednávky. Naša dostupnosť môže závisieť od vyťaženosti, mestskej časti Bratislavy a type požadovanej služby. Pri telefonickom kontakte na čísle 0951 735 130 vám vieme okamžite potvrdiť dostupnosť a dohodnúť konkrétny termín. Pre zákazníkov v Bratislave ponúkame prednostné termíny a flexibilné časové bloky vrátane víkendov. V prípade havarijných situácií (napr. pretekajúci radiátor, zaseknutý zámok) sa snažíme prísť čo najskôr.",
            },
            {
              question:
                "V ktorých mestských častiach Bratislavy poskytujete služby?",
              answer:
                "Naše služby hodinového manžela poskytujeme vo všetkých mestských častiach Bratislavy, vrátane: Staré Mesto, Ružinov, Nové Mesto, Rača, Vajnory, Karlova Ves, Dúbravka, Lamač, Devín, Devínska Nová Ves, Záhorská Bystrica, Petržalka, Jarovce, Rusovce, Čunovo, Vrakuňa a Podunajské Biskupice. Najčastejšie pôsobíme v husto obývaných častiach ako Petržalka, Ružinov a Staré Mesto, ale dostupní sme bez príplatku v celej Bratislave. Okrem samotnej Bratislavy poskytujeme služby aj v priľahlých obciach ako Stupava, Malinovo, Chorvátsky Grob, Bernolákovo, Ivanka pri Dunaji, Most pri Bratislave alebo Rovinka, pri ktorých môže byť účtovaný príplatok za dopravu.",
            },
            {
              question: "Aká je lehota čakania na termin v Bratislave?",
              answer:
                "V Bratislave sa snažíme zabezpečiť čo najrýchlejšiu realizáciu. Bežná čakacia lehota na termín je 1-3 pracovné dni, v závislosti od aktuálnej vyťaženosti našich technikov. Pri urgentných prípadoch sa snažíme reagovať ešte v deň objednávky alebo nasledujúci pracovný deň. Počas špičkových období (napríklad pred sviatkami alebo v období sťahovania) môže byť čakacia doba dlhšia. Pre prioritné termíny odporúčame objednať služby aspoň 5-7 dní vopred. Pri objednávke telefonicky na čísle 0951 735 130 vás vždy informujeme o aktuálnej dostupnosti a možných termínoch. Pre stálych zákazníkov v Bratislave ponúkame prednostné termíny a flexibilnejšie plánovanie.",
            },
            {
              question: "Poskytujete záruku na vykonané práce v Bratislave?",
              answer:
                "Áno, na všetky vykonané práce našich hodinových manželov v Bratislave poskytujeme štandardnú záruku 6 mesiacov. Táto záruka sa vzťahuje na kvalitu odvedenej práce a prípadné skryté vady. Na dodaný materiál sa vzťahuje záruka podľa zákonných podmienok (zvyčajne 24 mesiacov). V prípade reklamácie nás stačí kontaktovať telefonicky alebo emailom, a problém vyriešime v čo najkratšom čase bezplatnou opravou alebo náhradou. Naším cieľom je spokojnosť zákazníkov v Bratislave, preto sa vždy snažíme nájsť riešenie aj v prípadoch, ktoré priamo nespadajú pod záručné podmienky. Všetky naše práce vykonávame s maximálnou starostlivosťou a profesionalitou, aby k reklamáciám nedochádzalo.",
            },
          ]}
        />
      </div>

      {/* CTA section */}
      <div>
        <CTA
          title="Potrebujete pomoc hodinového manžela v Bratislave?"
          description="Šetrite svoj čas a nervy. Zverte drobné opravy, montáže a údržbu vašej domácnosti v Bratislave do rúk profesionálov. Stačí jeden telefonát a váš problém bude vyriešený rýchlo, kvalitne a za rozumnú cenu."
          buttonText="Objednať hodinového manžela v Bratislave"
          buttonLink="/kontakt"
          imageSrc="/images/sofoservis montaz.jpg"
        />
      </div>
    
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[{"title":"Montáž nábytku","description":"Profesionálna montáž a demontáž nábytku.","href":"/montaz-nabytku","icon":"/icons/wrench_icon.svg"},{"title":"Búranie a demolácia","description":"Profesionálne búranie stien, predelov a objektov.","href":"/buranie-demolacia-domov-bytov","icon":"/icons/crane_icon.svg"},{"title":"Sťahovanie bytov a domov","description":"Spoľahlivé sťahovanie bytov a rodinných domov.","href":"/stahovanie-bytov-domov","icon":"/icons/house_icon.svg"},{"title":"Vypratávanie bytov a domov","description":"Kompletné vypratanie bytu alebo domu.","href":"/vypratavanie-bytov-domov","icon":"/icons/broom_icon.svg"}]}
      />
          <FAQJsonLd items={faqItems} />
    </main>
  );
}
