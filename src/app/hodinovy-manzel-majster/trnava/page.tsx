import React from "react";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import LocationMap from "@/components/sections/LocationMap";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata = {
  title: "Hodinový manžel a majster Trnava | Sofoservis",
  description:
    "Ponúkame profesionálne služby hodinového manžela - opravy, skladanie, údžba bytov a domov v Trnave ✅ Lacné a férové ceny ✅ Kontaktujte nás ešte dnes!",
  keywords:
    "hodinovy manzel trnava, hodinový manžel trnava, hodinovy majster trnava, hodinový manžel cena, hodinovy manzel cennik, hodinový manžel trnava cennik, opravy v domácnosti trnava, montáž nábytku trnava",
  alternates: {
    canonical: "https://www.sofoservis.sk/hodinovy-manzel-majster/trnava",
  },
};

export default function HodinovyManzelMajsterTrnavaPage() {
  // Custom data for Hero section with Trnava focus
  const heroData = {
    title: "Hodinový manžel a majster Trnava",
    description:
      "Profesionálne služby hodinového manžela v Trnave a okolí pre rýchle a spoľahlivé vyriešenie všetkých drobných opráv, montáží a údržby vo vašej domácnosti. Pôsobíme v celej Trnave aj v okolitých obciach.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle:
      "Spoľahlivý hodinový manžel v Trnave - vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Custom data for Features section optimized for Trnava
  const featuresData = {
    title: "Komplexné služby hodinového manžela v Trnave",
    description:
      "Ponúkame široké spektrum služieb a prác v domácnosti, kancelárii alebo na záhrade v Trnave a okolí. Od drobných opráv až po náročnejšie montáže - váš problém vyriešime rýchlo a profesionálne.",
    features: [
      {
        image: "/icons/furniture_icon.svg", // For furniture assembly
        title: "Montáž a skladanie nábytku",
        description:
          "Odborná montáž a skladanie všetkých typov nábytku, policových systémov, kuchynských liniek a domáceho vybavenia v Trnave. Pomôžeme vám s nábytkom z IKEA, JYSK, Asko a ďalších predajní.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/curtain_icon.svg", // For curtains and hanging systems
        title: "Inštalácia a montáž doplnkov",
        description:
          "Profesionálna inštalácia a montáž záclon, závesov, žalúzií, svietidiel, obrazov, zrkadiel, držiakov na TV a ďalších bytových doplnkov v Trnave a okolí. Spoľahlivo a precízne.",
        link: "/hodinovy-manzel-majster/trnava",
      },
      {
        image: "/icons/plumbing_icon.svg", // For plumbing work
        title: "Vodoinštalačné práce v Trnave",
        description:
          "Drobné vodoinštalačné opravy a výmeny - kvapkajúce kohútiky, výmena batérií, oprava splachovačov, čistenie odpadov, výmena umývadiel a ďalšie vodoinštalačné práce v Trnave a okolí.",
        link: "/hodinovy-manzel-majster/trnava",
      },
      {
        image: "/icons/electrical_icon.svg", // For electrical work
        title: "Elektroinštalačné práce",
        description:
          "Základné elektroinštalačné práce v Trnave - výmena vypínačov a zásuviek, inštalácia svietidiel, výmena žiaroviek v ťažko dostupných miestach, kontrola elektrospotrebičov.",
        link: "/hodinovy-manzel-majster/trnava",
      },
      {
        image: "/icons/paint_icon.svg", // For painting and maintenance work
        title: "Maliarske a údržbárske práce",
        description:
          "Drobné maliarske práce, oprava prasklín v stenách, tmelenie, tapetovanie, výmena podlahových krytín, základné murárske práce a ďalšie údržbárske zásahy v domácnostiach v Trnave.",
        link: "/hodinovy-manzel-majster/trnava",
      },
      {
        image: "/icons/garden_icon.svg", // For garden and exterior work
        title: "Záhradnícke a exteriérové práce",
        description:
          "Základná údržba záhrady, montáž záhradného nábytku, inštalácia zavlažovacích systémov, oprava plotov, montáž poštových schránok v Trnave a blízkom okolí.",
        link: "/hodinovy-manzel-majster/trnava",
      },
    ],
  };

  // Trnava locations for LocationMap
  const trnavaLocations = [
    "Trnava - centrum",
    "Trnava - Prednádražie",
    "Trnava - Družba",
    "Trnava - Na hlinách",
    "Trnava - Linčianska",
    "Trnava - Tulipán",
    "Trnava - Kopánka",
    "Modranka",
    "Biely Kostol",
    "Hrnčiarovce nad Parnou",
    "Zeleneč",
    "Brestovany",
    "Voderady",
    "Cífer",
    "Ružindol",
    "Zavar",
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
          title="Recenzie našich zákazníkov v Trnave a okolí"
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

      {/* Trnava locations section */}
      <div>
        <LocationMap
          title="Služby hodinového manžela v Trnave a okolí"
          description="Pôsobíme v Trnave aj v okolitých obciach a mestách"
          locations={trnavaLocations}
          additionalText="Okrem Trnavy a blízkeho okolia poskytujeme naše služby aj v ďalších mestách regiónu ako Hlohovec, Sereď, Piešťany a ich okolí."
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
          title="Prečo si vybrať našu službu hodinového manžela v Trnave"
        />
      </div>

      {/* FAQ section - Trnava specific */}
      <div className="pt-10 md:pt-[100px]">
        <FAQ
          title="Často kladené otázky o službách hodinového manžela v Trnave"
          items={[
            {
              question: "Aké služby poskytuje hodinový manžel v Trnave?",
              answer:
                "Náš hodinový manžel v Trnave poskytuje komplexné spektrum služieb zahŕňajúcich drobné opravy a údržbu domácnosti: montáž a skladanie nábytku (skrine, postele, poličky) vrátane nábytku z IKEA a ďalších predajní; vešanie obrazov, zrkadiel, televízorov a poličiek; výmenu vodovodných batérií, tesnení a sifónov; inštaláciu osvetlenia, vypínačov a zásuviek; opravy a výmeny zámkov a kľučiek; drobné stavebné úpravy (vŕtanie, upevňovanie, tmelenie); montáž kuchynských spotrebičov; inštaláciu tieniacej techniky (žalúzie, rolety); výmenu podlahových krytín a ďalšie služby podľa individuálnych potrieb. Pôsobíme vo všetkých mestských častiach Trnavy vrátane Prednádražia, Družby, Na hlinách, Linčianskej, Tulipánu, Kopánky a Modranky.",
            },
            {
              question: "Koľko stojí hodinový manžel v Trnave?",
              answer:
                "Cena za služby hodinového manžela v Trnave sa odvíja od viacerých faktorov. Štandardná hodinová sadzba je 15-25€ za hodinu práce, v závislosti od náročnosti a typu vykonávaných prác. Pri bežných úkonoch ponúkame transparentné paušálne ceny: montáž jednoduchého nábytku od 25€/kus; vešanie obrazov a poličiek od 10€/kus; výmena batérie/sifónu od 25€; inštalácia svietidla od 20€. K cene práce sa pripočítava použitý materiál, ak nie je dodaný zákazníkom. V prípade väčšieho rozsahu prác alebo pravidelnej spolupráce poskytujeme individuálne zľavy. Minimálna účtovaná doba je zvyčajne 1 hodina, potom účtujeme po 30-minútových intervaloch. Dopravné náklady do Trnavy účtujeme podľa vzdialenosti, presné informácie vám radi poskytneme telefonicky.",
            },
            {
              question:
                "Poskytujete služby pre študentské byty a internáty v Trnave?",
              answer:
                "Áno, v Trnave poskytujeme služby aj pre študentské byty, internáty a ubytovacie zariadenia. Vzhľadom na to, že Trnava je významným univerzitným mestom, máme bohaté skúsenosti s prácami v študentských bytoch a internátoch. Často realizujeme montáž nábytku, inštaláciu poličiek, opravu elektrických zásuviek, vešanie obrazov a iné drobné práce pre študentov aj majiteľov bytov, ktorí prenajímajú nehnuteľnosti študentom. Ponúkame priaznivé ceny a flexibilné termíny, ktoré vyhovujú študentskému rozvrhu. Práce dokážeme zrealizovať aj vo večerných hodinách alebo počas víkendov. Pre študentské domácnosti poskytujeme aj základné poradenstvo ohľadom údržby bytu a drobných opráv, ktoré si môžu vykonať svojpomocne.",
            },
            {
              question:
                "V ktorých častiach Trnavy a okolia poskytujete služby?",
              answer:
                "Naše služby hodinového manžela poskytujeme v celej Trnave vrátane všetkých mestských častí: centrum, Prednádražie, Družba, Na hlinách, Linčianska, Tulipán, Kopánka a Modranka. Okrem samotnej Trnavy pôsobíme aj v okolitých obciach ako Biely Kostol, Hrnčiarovce nad Parnou, Zeleneč, Brestovany, Voderady, Cífer, Ružindol a Zavar. Služby poskytujeme aj v širšom okolí Trnavy vrátane miest ako Hlohovec, Sereď, Piešťany a priľahlých obcí. Pri lokalitách mimo Trnavy môže byť účtovaný príplatok za dopravu podľa vzdialenosti.",
            },
            {
              question:
                "Ako sa objednávajú služby hodinového manžela v Trnave?",
              answer:
                "Objednanie služieb hodinového manžela v Trnave je jednoduché a flexibilné. Máte niekoľko možností: 1) Telefonicky na čísle 0951 735 130 - najrýchlejší spôsob, kde dokážeme okamžite konzultovať váš problém a dohodnúť termín. 2) Vyplnením kontaktného formulára na našej webstránke - odpovieme vám najneskôr do 24 hodín. 3) Emailom na doprava@sofoservis.sk s popisom požadovaných prác. Pri objednávke je užitočné uviesť: podrobný popis práce, ktorú potrebujete vykonať; presnú adresu v Trnave alebo okolí; vaše kontaktné údaje; fotografie problému (ak je to možné); preferovaný termín realizácie. V Trnave sa snažíme vyjsť v ústrety aj urgentným požiadavkám a v prípade voľných kapacít dokážeme zabezpečiť výjazd ešte v ten istý deň. Pre štandardné termíny odporúčame objednať služby aspoň 2-3 dni vopred, najmä ak ide o práce počas víkendu.",
            },
          ]}
        />
      </div>

      {/* CTA section */}
      <div className="pt-10 md:pt-[100px]">
        <CTA
          title="Potrebujete pomoc hodinového manžela v Trnave?"
          description="Šetrite svoj čas a nervy. Zverte drobné opravy, montáže a údržbu vašej domácnosti v Trnave do rúk profesionálov. Stačí jeden telefonát a váš problém bude vyriešený rýchlo, kvalitne a za rozumnú cenu."
          buttonText="Objednať hodinového manžela v Trnave"
          buttonLink="/kontakt"
          imageSrc="/images/sofoservis montaz.jpg"
        />
      </div>
    
      <ContactFormSection />
    </main>
  );
}
