import React from "react";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata = {
  title: "Búracie práce Trnava | Sofoservis",
  description:
    "Ponúkame komplexné služby v oblasti búracích prác v Trnave ✅ Ohliadka priestoru zadarmo ✅ Lacné a férové ceny ✅ Kontaktujte nás ešte dnes!",
  alternates: {
    canonical: "https://www.sofoservis.sk/buracie-demolacne-prace/trnava",
  },
  keywords: "buracie prace trnava, búracie práce trnava",
};

export default function BuraciePraceTrnavaPage() {
  // Custom data for Hero section
  const heroData = {
    title: "Búracie práce Trnava",
    description:
      "Profesionálne a spoľahlivé búracie a demolačné práce v Trnave a okolí. Realizujeme búranie bytových jadier, priečok, nosných stien, podláh a kompletných objektov s ohľadom na bezpečnosť, minimalizáciu hluku a prašnosti. Všetky práce zabezpečujeme vrátane odvozu a ekologickej likvidácie odpadu.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu v Trnave",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Custom data for Features section
  const featuresData = {
    title: "Komplexné búracie služby v Trnave",
    description:
      "Ponúkame profesionálne búracie a demolačné služby v Trnave a blízkom okolí pre bytové aj nebytové priestory.",
    features: [
      {
        image: "/icons/plumbing_icon.svg", // For bathroom core demolition
        title: "Búranie bytových jadier v Trnave",
        description:
          "Špeciálne služby pre búranie umakartových a murovaných bytových jadier v panelových bytoch v Trnave. Práce realizujeme s ohľadom na čistotu, hluk a minimálne narušenie komfortu susedov.",
        link: "/buranie-stien-priecok",
      },
      {
        image: "/icons/hammer_icon.svg", // For wall demolition
        title: "Búranie stien a priečok",
        description:
          "Profesionálne búranie nenosných priečok a vytvorenie nových otvorov do nosných stien v bytoch a domoch v Trnave. Všetky práce zabezpečujeme so statickým posudkom a potrebnými povoleniami.",
        link: "/buranie-stien-priecok",
      },
      {
        image: "/icons/hazmat_icon.svg", // For floor removal
        title: "Vybúranie podláh a dlažieb",
        description:
          "Kompletné odstraňovanie starých podláh, dlažieb a poterov v Trnave. Priestor pripravíme na položenie nových podlahových krytín s dôrazom na presnosť a čistotu práce.",
        link: "/buracie-demolacne-prace/trnava",
      },
      {
        image: "/icons/kitchen_icon.svg", // For kitchen and bathroom demolition
        title: "Demolácia kúpeľní a kuchýň",
        description:
          "Špecializované služby pre kompletnú demoláciu kúpeľní a kuchýň v Trnave, vrátane odstránenia obkladov, sanity a rozvodov. Vytvoríme čistý priestor pre následnú rekonštrukciu.",
        link: "/buracie-demolacne-prace/trnava",
      },
      {
        image: "/icons/house_icon.svg", // For building demolition
        title: "Demolácia objektov v Trnave",
        description:
          "Bezpečná a ekologická demolácia celých objektov v Trnave a okolí - rodinné domy, garáže, hospodárske stavby a iné objekty. Zabezpečíme všetky potrebné povolenia a dokumentáciu.",
        link: "/buranie-demolacia-domov-bytov",
      },
      {
        image: "/icons/container_icon.svg", // For waste removal
        title: "Odvoz stavebného odpadu z Trnavy",
        description:
          "Rýchly a spoľahlivý odvoz stavebnej sute a odpadu z Trnavy. Zabezpečíme pristavenie kontajnerov, naloženie a ekologickú likvidáciu všetkého stavebného odpadu s dokladmi o likvidácii.",
        link: "/odvoz-likvidacia-stavebneho-odpadu/trnava",
      },
    ],
  };

  // FAQ Data specific for Trnava
  const faqItems = [
    {
      question: "Aké búracie práce v Trnave ponúkate?",
      answer:
        "V Trnave a okolí poskytujeme kompletné spektrum búracích a demolačných prác pre bytové aj nebytové priestory. Naše služby zahŕňajú: búranie bytových jadier v panelových domoch (umakartových aj murovaných), búranie nenosných priečok a deliacich stien, vybúranie otvorov do nosných stien (s potrebným statickým posudkom), kompletnú demoláciu kúpeľní a kuchýň, vybúranie starých podláh, poterov a dlažieb, odstránenie obkladov a omietok, demoláciu celých objektov (rodinné domy, garáže, hospodárske stavby), a tiež špecializované búracie práce v pamiatkovo chránených objektoch. Ku všetkým službám zabezpečujeme aj odvoz a ekologickú likvidáciu stavebného odpadu, pristavenie kontajnerov a potrebnú dokumentáciu vrátane statických posudkov a stavebných povolení.",
    },
    {
      question: "Koľko stoja búracie práce v Trnave?",
      answer:
        "Ceny búracích prác v Trnave sa odvíjajú od typu a rozsahu práce. Pre orientáciu uvádzame približné ceny bežných búracích prác: búranie nenosnej priečky: 10-15€/m², búranie bytového jadra v panelovom byte: 350-750€, vybúranie otvoru do nosnej steny: 450-850€, vybúranie a likvidácia starej dlažby: 10-20€/m², odstránenie omietok: 5-10€/m². K týmto cenám je potrebné pripočítať náklady na odvoz a likvidáciu odpadu, ktoré závisia od množstva (typicky 80-150€ za kontajner). V Trnave ponúkame časté akcie a množstevné zľavy. Pre presný cenový odhad vám odporúčame využiť našu bezplatnú obhliadku, po ktorej dostanete detailnú cenovú ponuku bez skrytých poplatkov.",
    },
    {
      question: "Aké povolenia sú potrebné na búracie práce v Trnave?",
      answer:
        "V Trnave, rovnako ako v iných mestách, sa požiadavky na povolenia pre búracie práce odvíjajú od ich rozsahu a typu zásahu do konštrukcie. Pre menšie úpravy ako búranie nenosných priečok alebo bytového jadra postačuje ohlásenie stavebných úprav na Stavebnom úrade v Trnave (Trhová 3). Pri zásahoch do nosných konštrukcií je potrebné stavebné povolenie so statickým posudkom a projektovou dokumentáciou. Pre bytové domy je nevyhnutný súhlas vlastníkov bytov alebo správcu. V historickej časti Trnavy alebo v pamiatkovo chránených objektoch sa vyžaduje súhlas Krajského pamiatkového úradu v Trnave. Naša spoločnosť vám s vybavením všetkých potrebných povolení a dokumentácie pomôže - máme bohaté skúsenosti s miestnymi úradmi a poznáme všetky požadované postupy a termíny.",
    },
    {
      question: "Ako dlho trvajú búracie práce v byte v Trnave?",
      answer:
        "Doba trvania búracích prác v byte v Trnave závisí najmä od rozsahu a typu prác. Štandardné búranie nenosnej priečky zvyčajne zaberie 1 pracovný deň. Kompletné búranie bytového jadra v panelovom byte trvá typicky 2-3 dni. Vytvorenie otvoru v nosnej stene je možné dokončiť za 1-2 dni vrátane statického zabezpečenia. Komplexná demolácia bytu pred kompletnou rekonštrukciou môže trvať 3-7 dní v závislosti od veľkosti bytu a rozsahu búrania. Na trvanie prác vplývajú aj ďalšie faktory ako dostupnosť výťahu, režim búracích prác stanovený bytovým domom (často len v pracovných dňoch medzi 8:00-18:00), alebo nutnosť ručného búrania v prípade nedostupnosti pre mechanizáciu. V Trnave sa snažíme maximálne prispôsobiť požiadavkám klienta a bytového domu, pričom práce realizujeme efektívne s ohľadom na minimalizáciu nepohodlia pre obyvateľov.",
    },
    {
      question: "Realizujete búracie práce aj v okolí Trnavy?",
      answer:
        "Áno, okrem samotnej Trnavy poskytujeme naše búracie a demolačné služby aj v širokom okolí mesta. Pôsobíme v okruhu približne 30-40 km od Trnavy, čo zahŕňa mestá a obce ako Hlohovec, Piešťany, Sereď, Galanta, Senec, Pezinok, Modra, Senica, Skalica, Holíč, Malacky a ďalšie. Pre vzdialenejšie lokality v Trnavskom, Bratislavskom a Nitrianskom kraji je možné dohodnúť individuálne podmienky. Pri väčších demolačných projektoch vieme pokryť aj širšie územie. V prípade záujmu o naše služby mimo mesta Trnava nás kontaktujte - radi vám poskytneme informácie o dostupnosti, termínoch a prípadných dodatočných nákladoch spojených s dopravou.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero section */}
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
          title="Často kladené otázky o búracích prácach v Trnave"
          items={faqItems}
        />
      </div>

      {/* CTA section */}
      <div className="pt-10 md:pt-[100px]">
        <CTA
          title="Potrebujete búracie práce v Trnave?"
          description="Zverte búracie a demolačné práce v Trnave profesionálom s bohatými skúsenosťami a kvalitnými referenciami. Pracujeme bezpečne, rýchlo a s ohľadom na minimalizáciu prašnosti a hluku. Kontaktujte nás pre bezplatnú konzultáciu a cenovú ponuku."
          buttonText="Získať bezplatnú ponuku v Trnave"
        />
      </div>
    
      <ContactFormSection />
    </main>
  );
}
