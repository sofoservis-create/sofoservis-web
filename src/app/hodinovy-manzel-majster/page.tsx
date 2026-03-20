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
  title: "Hodinový manžel, majster a kutil | Sofoservis",
  description:
    "Ponúkame profesionálne služby hodinového manžela - opravy, skladanie, údržba bytov a domov ✅ Lacné a férové ceny ✅ Kontaktujte nás ešte dnes!",
  alternates: {
    canonical: "https://www.sofoservis.sk/hodinovy-manzel-majster",
  },
  keywords:
    "hodinový manžel, hodinový majster, domáce opravy, údržba bytu, drobné opravy v domácnosti, montáž nábytku, oprava kvapkajúceho kohútika, výmena batérie, drobné stavebné práce, vešanie obrazov, inštalácia svietidiel, hodinový manžel bratislava, hodinový manžel cena",
};

const hodinyManzealLocations = [
  { name: "Bratislava", href: "/hodinovy-manzel-majster/bratislava" },
  { name: "Galanta", href: "/hodinovy-manzel-majster/galanta" },
  { name: "Levice", href: "/hodinovy-manzel-majster/levice" },
  { name: "Nitra", href: "/hodinovy-manzel-majster/nitra" },
  { name: "Piešťany", href: "/hodinovy-manzel-majster/piestany" },
  { name: "Šaľa", href: "/hodinovy-manzel-majster/sala" },
  { name: "Trnava", href: "/hodinovy-manzel-majster/trnava" },
];

export default function HodinovyManzelMajsterPage() {
  // Custom data for Hero section
  const heroData = {
    title: "Hodinový manžel a majster",
    description:
      "Profesionálne služby hodinového manžela pre rýchle a spoľahlivé vyriešenie všetkých drobných opráv, montáží a údržby vo vašej domácnosti. Pomôžeme vám s prácami, na ktoré nemáte čas, náradie alebo zručnosti.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Custom data for Features section
  const featuresData = {
    title: "Komplexné služby hodinového manžela",
    description:
      "Profesionálne handyman služby pre všetky drobné práce v domácnosti, kancelárii či na pozemku s vlastným náradím a skúsenosťami.",
    features: [
      {
        image: "/icons/wrench_icon.svg", // Perfect for general handyman work
        title: "Drobné opravy a údržba",
        description:
          "Opravy a údržba v domácnosti - výmena batérií, oprava kohútikov, montáž políc, maľovanie, vŕtanie otvorov a ďalšie drobné práce.",
        link: "/hodinovy-manzel-majster",
      },
      {
        image: "/icons/furniture_icon.svg", // For furniture assembly
        title: "Montáž nábytku a zariadenia",
        description:
          "Poskladanie nábytku z IKEA, JYSK a iných značiek. Montáž skríň, postelí, stolov, políc a ďalšieho bytového zariadenia s vlastným náradím.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/electrical_icon.svg", // NEW ICON - For electrical work
        title: "Elektrické práce",
        description:
          "Základné elektrické práce - výmena vypínačov, zásuviek, svetiel, pripojenie lustrov, inštalácia zvoničiek a jednoduchých elektrických zariadení.",
        link: "/hodinovy-manzel-majster",
      },
      {
        image: "/icons/curtain_icon.svg", // For hanging systems
        title: "Montáž garniží a závesov",
        description:
          "Profesionálna montáž garniží, závesných systémov, roliet a žalúzií. Vŕtanie do rôznych typov stien s vhodnými kotviacimi prvkami.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/garden_icon.svg", // NEW ICON - For outdoor work
        title: "Záhradné a vonkajšie práce",
        description:
          "Údržba záhrady, čistenie pozemkov, drobné stavebné práce, montáž plotov, altánkov a ďalšie práce na vonkajších priestoroch.",
        link: "/cistenie-vypratavanie-pozemkov-nehnutelnosti",
      },
      {
        image: "/icons/paint_icon.svg", // NEW ICON - For painting work
        title: "Maľovanie a dokončovacie práce",
        description:
          "Maľovanie miestností, natieranie dreva, dokončovacie práce po rekonštrukcii, tmely, silikóny a ďalšie úpravy povrchov.",
        link: "/hodinovy-manzel-majster",
      },
    ],
  };

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

      {/* Features section */}
      <div>
        <Features
          title={featuresData.title}
          description={featuresData.description}
          features={featuresData.features}
        />
      </div>

      <div className="mb-[-100px]">
        <LocationMap
          title="Hodinový manžel a majster po celom Slovensku"
          description="Naše služby poskytujeme v nasledujúcich mestách a regiónoch."
          locations={hodinyManzealLocations}
          additionalText="Poskytujeme spoľahlivé služby hodinového manžela s profesionálnym prístupom k každej úlohe."
          supporText="Opravujeme a montujeme vo všetkých regiónoch:"
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
      <div className="pt-10 md:pt-[100px]">
        <FAQ
          title="Často kladené otázky o službách hodinového manžela"
          items={[
            {
              question: "Aké služby poskytuje hodinový manžel?",
              answer:
                "Hodinový manžel poskytuje široké spektrum služieb zahŕňajúcich drobné opravy a údržbu domácnosti: vešanie obrazov, zrkadiel, televízorov a poličiek; inštaláciu osvetlenia, výmenu vypínačov a zásuviek; montáž kuchynských spotrebičov a iné požiadavky podľa individuálnych potrieb. Prispôsobujeme sa Vašim potrebám a vždy sa snažíme flexibilne reagovať.",
            },
            {
              question: "Koľko stojí hodinový manžel?",
              answer:
                "Cena za služby hodinového manžela sa odvíja od viacerých faktorov, pričom najčastejšie používame hodinovú sadzbu. Štandardná hodinová sadzba je 25€ za hodinu práce. Pri niektorých bežných úkonoch ponúkame paušálne ceny. K cene práce sa pripočítava použitý materiál, ak nie je dodaný zákazníkom. Minimálna účtovaná doba je 1 hodina, potom účtujeme po 30-minútových intervaloch. Dopravné náklady účtujeme podľa vzdialenosti od 20€ v rámci Bratislavy a blízkeho okolia.",
            },
            {
              question: "Ako sa objednávajú služby hodinového manžela?",
              answer:
                "Objednanie služieb hodinového manžela je jednoduché a môžete si vybrať z niekoľkých možností: 1) Telefonicky na čísle 0952 044 363, kde s vami okamžite prekonzultujeme váš problém a dohodneme termín. 2) Vyplnením kontaktného formulára na našej webstránke, po ktorom vás budeme kontaktovať najneskôr do 24 hodín. 3) Emailom na montaz@sofoservis.sk s popisom požadovaných prác. Pri objednávke je užitočné uviesť: podrobný popis práce, ktorú potrebujete vykonať; adresu a kontaktné údaje; fotografiu problému alebo priestoru (ak je to možné); preferovaný termín realizácie. Po prijatí objednávky vás kontaktujeme pre potvrdenie termínu a dohodnutie detailov. V urgentných prípadoch sa snažíme zabezpečiť výjazd ešte v ten istý deň alebo nasledujúci pracovný deň.",
            },
            {
              question:
                "V ktorých lokalitách poskytujete služby hodinového manžela?",
              answer:
                "Naše služby hodinového manžela poskytujeme primárne v Bratislave a jej širšom okolí. Konkrétne pokrývame všetky mestské časti Bratislavy: Staré Mesto, Ružinov, Nové Mesto, Rača, Vajnory, Karlova Ves, Dúbravka, Lamač, Devín, Devínska Nová Ves, Záhorská Bystrica, Petržalka, Jarovce, Rusovce, Čunovo, Vrakuňa a Podunajské Biskupice. Okrem toho pôsobíme aj v okolí Bratislavy do vzdialenosti približne 30-40 km, čo zahŕňa mestá a obce ako Senec, Pezinok, Modra, Svätý Jur, Stupava, Malacky, Šamorín a ďalšie. Pri väčších zákazkách alebo pravidelnej spolupráci vieme poskytnúť služby aj vo vzdialenejších lokalitách. V prípade záujmu o služby mimo uvedených lokalít nás kontaktujte a dohodneme individuálne podmienky.",
            },
            {
              question: "Aké náradie a vybavenie si mám pripraviť?",
              answer:
                "Nemusíte si pripravovať žiadne náradie ani vybavenie. Naši hodinoví manželi prichádzajú plne vybavení profesionálnym náradím a základným spotrebným materiálom na všetky bežné typy prác v domácnosti. Disponujeme: elektrickým náradím (vŕtačky, skrutkovače, brúsky, píly); ručným náradím (skrutkovače, kliešte, kladivá, pilníky); meracími prístrojmi; rebríkmi a pracovnými plošinami; špecializovaným náradím pre vodoinštalácie a elektroinštalácie. Ak práca vyžaduje špecifický materiál (náhradné diely, upevňovacie prvky, farby a pod.), môžete ho zabezpečiť sami alebo ho po dohode zabezpečíme my. V prípade, že máte vlastný materiál alebo náhradné diely, ktoré chcete použiť, pripravte ich, prosím, pred príchodom technika, aby práca prebiehala efektívne.",
            },
          ]}
        />
      </div>

      {/* CTA section */}
      <div className="pt-10 md:pt-[100px]">
        <CTA
          title="Potrebujete pomoc hodinového manžela?"
          description="Šetrite svoj čas a nervy. Zverte drobné opravy, montáže a údržbu vašej domácnosti do rúk profesionálov. Stačí jeden telefonát a váš problém bude vyriešený rýchlo, kvalitne a za rozumnú cenu."
          buttonText="Objednať hodinového manžela"
          imageSrc="/images/sofoservis montaz.jpg"
        />
      </div>
    
      <ContactFormSection />
    </main>
  );
}
