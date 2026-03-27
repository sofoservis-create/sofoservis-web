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
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Búracie práce Pezinok | Sofoservis",
  description:
    "Ponúkame komplexné služby v oblasti búracích prác v Pezinku ✅ Obhliadka priestoru zadarmo ✅ Lacné a férové ceny ✅ Kontaktujte nás ešte dnes!",
  alternates: {
    canonical: "https://www.sofoservis.sk/buracie-demolacne-prace/pezinok",
      languages: {
        sk: "https://www.sofoservis.sk/buracie-demolacne-prace/pezinok",
        en: "https://www.sofoservis.sk/en/demolition-pezinok",
        "x-default": "https://www.sofoservis.sk/buracie-demolacne-prace/pezinok",
      },
  },
  keywords: "buracie prace pezinok",
};

export default function BuraciePracePezinokPage() {
  // Custom data for Hero section
  const heroData = {
    title: "Búracie práce Pezinok",
    description:
      "Profesionálne a spoľahlivé búracie a demolačné práce v Pezinku a okolí. Realizujeme búranie bytových jadier, priečok, stien, podláh a kompletných objektov s ohľadom na bezpečnosť, minimalizáciu hluku a prašnosti. Všetky práce zabezpečujeme vrátane odvozu a ekologickej likvidácie odpadu.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu v Pezinku",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Custom data for Features section
  const featuresData = {
    title: "Komplexné búracie služby v Pezinku",
    description:
      "Ponúkame profesionálne búracie a demolačné služby v Pezinku a blízkom okolí pre bytové aj nebytové priestory.",
    features: [
      {
        image: "/icons/plumbing_icon.svg", // For bathroom core demolition
        title: "Búranie bytových jadier v Pezinku",
        description:
          "Špeciálne služby pre búranie umakartových a murovaných bytových jadier v bytových domoch v Pezinku. Práce realizujeme s ohľadom na čistotu, hluk a minimálne narušenie komfortu susedov.",
        link: "/buranie-stien-priecok",
      },
      {
        image: "/icons/hammer_icon.svg", // For wall demolition
        title: "Búranie stien a priečok",
        description:
          "Profesionálne búranie nenosných priečok a vytvorenie nových otvorov do nosných stien v bytoch a domoch v Pezinku. Všetky práce zabezpečujeme so statickým posudkom a potrebnými povoleniami.",
        link: "/buranie-stien-priecok",
      },
      {
        image: "/icons/hazmat_icon.svg", // For floor removal
        title: "Vybúranie podláh a dlažieb",
        description:
          "Kompletné odstraňovanie starých podláh, dlažieb a poterov v Pezinku. Priestor pripravíme na položenie nových podlahových krytín s dôrazom na presnosť a čistotu práce.",
        link: "/buracie-demolacne-prace/pezinok",
      },
      {
        image: "/icons/kitchen_icon.svg", // For kitchen and bathroom demolition
        title: "Demolácia kúpeľní a kuchýň",
        description:
          "Špecializované služby pre kompletnú demoláciu kúpeľní a kuchýň v Pezinku, vrátane odstránenia obkladov, sanity a rozvodov. Vytvoríme čistý priestor pre následnú rekonštrukciu.",
        link: "/buracie-demolacne-prace/pezinok",
      },
      {
        image: "/icons/house_icon.svg", // For building demolition
        title: "Demolácia objektov v Pezinku",
        description:
          "Bezpečná a ekologická demolácia celých objektov v Pezinku a okolí - rodinné domy, garáže, hospodárske stavby a pivnice. Zabezpečíme všetky potrebné povolenia a dokumentáciu.",
        link: "/buranie-demolacia-domov-bytov",
      },
      {
        image: "/icons/container_icon.svg", // For waste removal
        title: "Odvoz stavebného odpadu z Pezinka",
        description:
          "Rýchly a spoľahlivý odvoz stavebnej sute a odpadu z Pezinka. Zabezpečíme pristavenie kontajnerov, naloženie a ekologickú likvidáciu všetkého stavebného odpadu s dokladmi o likvidácii.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
    ],
  };

  // FAQ Data specific for Pezinok
  const faqItems = [
    {
      question: "Aké búracie práce v Pezinku ponúkate?",
      answer:
        "V Pezinku a okolí poskytujeme kompletné spektrum búracích a demolačných prác pre bytové aj nebytové priestory. Naše služby zahŕňajú: búranie bytových jadier v bytových domoch (umakartových aj murovaných), búranie nenosných priečok a deliacich stien, vybúranie otvorov do nosných stien (s potrebným statickým posudkom), kompletnú demoláciu kúpeľní a kuchýň, vybúranie starých podláh, poterov a dlažieb, odstránenie obkladov a omietok, demoláciu celých objektov (rodinné domy, garáže, hospodárske stavby), a tiež špecializované búracie práce v pamiatkovo chránených objektoch Pezinka. Ku všetkým službám zabezpečujeme aj odvoz a ekologickú likvidáciu stavebného odpadu, pristavenie kontajnerov a potrebnú dokumentáciu vrátane statických posudkov a stavebných povolení.",
    },
    {
      question: "Koľko stoja búracie práce v Pezinku?",
      answer:
        "Ceny búracích prác v Pezinku sa odvíjajú od typu a rozsahu práce. Pre orientáciu uvádzame približné ceny bežných búracích prác: búranie nenosnej priečky: 10-15€/m², búranie bytového jadra v bytovom dome: 350-750€, vybúranie otvoru do nosnej steny: 450-850€, vybúranie a likvidácia starej dlažby: 10-20€/m², odstránenie omietok: 5-10€/m². K týmto cenám je potrebné pripočítať náklady na odvoz a likvidáciu odpadu, ktoré závisia od množstva (typicky 80-150€ za kontajner). V Pezinku ponúkame časté akcie a množstevné zľavy. Pre presný cenový odhad vám odporúčame využiť našu bezplatnú obhliadku, po ktorej dostanete detailnú cenovú ponuku bez skrytých poplatkov.",
    },
    {
      question: "Aké povolenia sú potrebné na búracie práce v Pezinku?",
      answer:
        "V Pezinku, rovnako ako v iných mestách, sa požiadavky na povolenia pre búracie práce odvíjajú od ich rozsahu a typu zásahu do konštrukcie. Pre menšie úpravy ako búranie nenosných priečok alebo bytového jadra postačuje ohlásenie stavebných úprav na Stavebnom úrade v Pezinku. Pri zásahoch do nosných konštrukcií je potrebné stavebné povolenie so statickým posudkom a projektovou dokumentáciou. Pre bytové domy je nevyhnutný súhlas vlastníkov bytov alebo správcu. V historickej časti Pezinka alebo v pamiatkovo chránených objektoch (ktorých je v Pezinku niekoľko) sa vyžaduje súhlas Krajského pamiatkového úradu. Naša spoločnosť vám s vybavením všetkých potrebných povolení a dokumentácie pomôže - máme bohaté skúsenosti s miestnymi úradmi a poznáme všetky požadované postupy a termíny.",
    },
    {
      question: "Ako dlho trvajú búracie práce v byte v Pezinku?",
      answer:
        "Doba trvania búracích prác v byte v Pezinku závisí najmä od rozsahu a typu prác. Štandardné búranie nenosnej priečky zvyčajne zaberie 1 pracovný deň. Kompletné búranie bytového jadra v bytovom dome trvá typicky 2-3 dni. Vytvorenie otvoru v nosnej stene je možné dokončiť za 1-2 dni vrátane statického zabezpečenia. Komplexná demolácia bytu pred kompletnou rekonštrukciou môže trvať 3-7 dní v závislosti od veľkosti bytu a rozsahu búrania. Na trvanie prác vplývajú aj ďalšie faktory ako dostupnosť výťahu, režim búracích prác stanovený bytovým domom (často len v pracovných dňoch medzi 8:00-18:00), alebo nutnosť ručného búrania v prípade nedostupnosti pre mechanizáciu. V Pezinku sa snažíme maximálne prispôsobiť požiadavkám klienta a bytového domu, pričom práce realizujeme efektívne s ohľadom na minimalizáciu nepohodlia pre obyvateľov.",
    },
    {
      question: "Realizujete búracie práce aj v okolí Pezinka?",
      answer:
        "Áno, okrem samotného Pezinka poskytujeme naše búracie a demolačné služby aj v širokom okolí mesta. Pôsobíme v okruhu približne 30-40 km od Pezinka, čo zahŕňa mestá a obce ako Modra, Svätý Jur, Senec, Bratislava, Šenkvice, Vinosady, Limbach, Slovenský Grob, Viničné, Báhoň, Budmerice, Častá, Doľany, Dubová, Jablonec a ďalšie lokality v Malokarpatskom regióne. Pre vzdialenejšie lokality v Bratislavskom a Trnavskom kraji je možné dohodnúť individuálne podmienky. Pri väčších demolačných projektoch vieme pokryť aj širšie územie. V prípade záujmu o naše služby mimo mesta Pezinok nás kontaktujte - radi vám poskytneme informácie o dostupnosti, termínoch a prípadných dodatočných nákladoch spojených s dopravou.",
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
      <div>
        <FAQ
          title="Často kladené otázky o búracích prácach v Pezinku"
          items={faqItems}
        />
      </div>

      {/* CTA section */}
      <div>
        <CTA
          title="Potrebujete búracie práce v Pezinku?"
          description="Zverte búracie a demolačné práce v Pezinku profesionálom s bohatými skúsenosťami a kvalitnými referenciami. Pracujeme bezpečne, rýchlo a s ohľadom na minimalizáciu prašnosti a hluku. Kontaktujte nás pre bezplatnú konzultáciu a cenovú ponuku."
          buttonText="Získať bezplatnú ponuku v Pezinku"
        />
      </div>
    
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[{"title":"Búranie a demolácia","description":"Profesionálne búranie stien, predelov a objektov.","href":"/buranie-demolacia-domov-bytov","icon":"/icons/crane_icon.svg"},{"title":"Odvoz stavebného odpadu","description":"Rýchly odvoz suťa, podláh a stavebného odpadu.","href":"/odvoz-likvidacia-stavebneho-odpadu","icon":"/icons/recycle_icon.svg"},{"title":"Hodinový manžel","description":"Drobné opravy, inštalácie a domáce práce.","href":"/hodinovy-manzel-majster","icon":"/icons/repair_icon.svg"},{"title":"Montáž nábytku","description":"Profesionálna montáž a demontáž nábytku.","href":"/montaz-nabytku","icon":"/icons/wrench_icon.svg"}]}
      />
          <FAQJsonLd items={faqItems} />
    </main>
  );
}
