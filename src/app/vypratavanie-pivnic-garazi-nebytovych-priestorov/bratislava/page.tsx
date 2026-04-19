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

/**
 * Metadata for the page - improved for SEO with consistent branding
 */
export const metadata = {
  title: "Vypratávanie pivníc a nebytových priestorov | Sofoservis",
  description:
    "Ponúkame lacné a rýchle vypratávanie pivníc, garáži, nebytových priestorov v Bratislave ✅ Obhliadka priestoru zadarmo ✅ Kontaktujte nás ešte dnes!",
  keywords:
    "vypratavanie pivnic bratislava, vypratávanie pivníc bratislava, vypratávanie pivníc odvoz starého nábytku bratislava, vypratanie garáže bratislava, vypratanie nebytového priestoru bratislava",
  alternates: {
    canonical:
      "https://www.sofoservis.sk/vypratavanie-pivnic-garazi-nebytovych-priestorov/bratislava",
      languages: {
        sk: "https://www.sofoservis.sk/vypratavanie-pivnic-garazi-nebytovych-priestorov/bratislava",
        en: "https://www.sofoservis.sk/en/basement-clearance-bratislava",
        "x-default": "https://www.sofoservis.sk/vypratavanie-pivnic-garazi-nebytovych-priestorov/bratislava",
      },
  },
};

export default function VypratavaniePivnicGaraziBratislavaPage() {
  // Hero section data with Bratislava specifics
  const heroData = {
    title: "Vypratávanie pivníc a iných nebytových priestorov Bratislava",
    description:
      "Profesionálne a rýchle vypratávanie pivníc, garáží, skladov, povál a ďalších nebytových priestorov v Bratislave a okolí. Zabezpečíme kompletné vyčistenie.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle:
      "Vyplňte formulár pre nezáväznú kalkuláciu na vypratanie v Bratislave",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  // Features section data with Bratislava specifics
  const featuresData = {
    title: "Špecializované vypratávanie pivníc, garáží a nebytových priestorov",
    description:
      "Profesionálne vypratávanie špecifických priestorov s následným odvozom a likvidáciou všetkých typov odpadu a nepotrebných vecí.",
    features: [
      {
        image: "/icons/vypratavanie_icon.svg", // Perfect for cleaning/clearing out spaces
        title: "Vypratávanie pivničných priestorov",
        description:
          "Kompletné vypratanie pivníc vrátane starého nábytku, spotrebičov, konzerv a iných predmetov. Postaráme sa o dezinfekciu a vyčistenie priestoru.",
        link: "/vypratavanie-pivnic-garazi-nebytovych-priestorov",
      },
      {
        image: "/icons/wrench_icon.svg", // For garage/workshop clearing (tools, equipment)
        title: "Vypratávanie garáží a dielní",
        description:
          "Vyčistíme garáže, dielne a technické miestnosti od starých nástrojov, náhradných dielov, pneumatík a ropných produktov s ich bezpečnou likvidáciou.",
        link: "/vypratavanie-pivnic-garazi-nebytovych-priestorov",
      },
      {
        image: "/icons/briefcase_icon.svg", // For office/commercial space clearing
        title: "Vypratávanie skladov a archívov",
        description:
          "Profesionálne vypratanie skladových priestorov, archívov a kancelárskych priestorov vrátane triedenia dokumentov a ich bezpečného zneškodnenia.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/recycle_icon.svg", // For hazardous waste disposal
        title: "Likvidácia nebezpečného odpadu",
        description:
          "Bezpečná likvidácia nebezpečných látok, starých farieb, rozpúšťadiel, batérií a chemikálií podľa platných environmentálnych predpisov.",
        link: "/likvidacia-nebezpecneho-odpadu-starych-spotrebicov",
      },
      {
        image: "/icons/furniture_icon.svg", // For furniture removal
        title: "Odvoz starého nábytku a spotrebičov",
        description:
          "Kompletný odvoz a likvidácia starého nábytku, spotrebičov, elektroniky a iného zariadenia s environmentálne zodpovedným spracovaním.",
        link: "/vypratavanie-odvoz-stareho-nabytku/bratislava",
      },
      {
        image: "/icons/truck_icon.svg", // For construction waste removal
        title: "Odvoz stavebného odpadu a sute",
        description:
          "Po vypratávaní zabezpečíme odvoz stavebného odpadu, betónovej sute, tehál a iných stavebných materiálov s ich riadnou likvidáciou.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
    ],
  };

  // Bratislava locations data
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
    "Devín",
    "Záhorská Bystrica",
    "Jarovce",
    "Rusovce",
    "Čunovo",
  ];

  // FAQ data
  const faqItems = [
    {
      question:
        "V ktorých častiach Bratislavy poskytujete vypratávanie pivníc a nebytových priestorov?",
      answer:
        "Naše služby vypratávania pivníc, garáží a nebytových priestorov poskytujeme vo všetkých mestských častiach Bratislavy vrátane Starého Mesta, Ružinova, Nového Mesta, Petržalky, Dúbravky, Karlovej Vsi, Rače, Vrakune a ďalších. Pôsobíme tiež v okolitých obciach a mestách Bratislavského kraja ako Senec, Pezinok, Modra či Malacky. Bez ohľadu na lokalitu v rámci Bratislavy a okolia vám zabezpečíme rýchle a profesionálne vypratávanie.",
    },
    {
      question: "Koľko stojí vypratávanie pivnice alebo garáže v Bratislave?",
      answer:
        "Cena za vypratávanie pivnice alebo garáže v Bratislave sa odvíja od niekoľkých faktorov: veľkosť priestoru, množstvo odpadu, prístupové podmienky a typ odpadu. Pre štandardnú pivnicu (do 15m²) sa ceny pohybujú od 150€ do 300€, pre garáž od 200€ do 400€. Cena zahŕňa prácu, odvoz a likvidáciu bežného odpadu. Pri špeciálnych typoch odpadu (chemikálie, stavebný odpad, elektronika) môžu byť účtované dodatočné poplatky za likvidáciu. Ponúkame bezplatnú obhliadku priamo v Bratislave, po ktorej dostanete presnú cenovú ponuku bez skrytých poplatkov.",
    },
    {
      question: "Ako rýchlo viete zrealizovať vypratávanie v Bratislave?",
      answer:
        "V Bratislave a okolí sme schopní zrealizovať vypratávanie veľmi flexibilne a rýchlo. V urgentných prípadoch dokážeme nastúpiť na vypratávanie už do 24-48 hodín od objednávky. Štandardne realizujeme zákazky do 3-5 pracovných dní od potvrdenia objednávky, v závislosti od aktuálnej vyťaženosti. Presný termín si môžete dohodnúť pri objednávke alebo po bezplatnej obhliadke. Vypratávanie realizujeme 6 dní v týždni (pondelok až sobota) v čase od 8:00-17:00, nedeľa je podľa dohody, v prípade potreby je možné dohodnúť aj prácu vo večerných hodinách.",
    },
    {
      question: "Je potrebná obhliadka pred vypratávaním v Bratislave?",
      answer:
        "Obhliadka pred vypratávaním v Bratislave nie je povinná, ale rozhodne ju odporúčame pre presnejšiu cenovú kalkuláciu a lepšie naplánovanie prác. Obhliadka je úplne bezplatná a nezáväzná. Počas obhliadky zhodnotíme rozsah prác, množstvo a typ odpadu, prístupové podmienky a na mieste vám vieme poskytnúť presnú cenovú ponuku. V prípade, že obhliadka nie je možná, stačí nám poslať niekoľko fotografií priestoru s popisom a pripravíme vám predbežnú cenovú ponuku. Obhliadku v Bratislave vieme zrealizovať často už v deň vašej požiadavky alebo nasledujúci pracovný deň.",
    },
    {
      question:
        "Viete vypratať aj nebytové priestory po nájomníkoch v Bratislave?",
      answer:
        "Áno, v Bratislave a okolí ponúkame špecializované služby pre vypratávanie nebytových priestorov po ukončení nájmu. Či už ide o skladové priestory, obchodné priestory alebo kancelárie, postaráme sa o kompletné vypratanie, odvoz vybavenia a odpadu, ako aj o základnú sanáciu priestoru. Táto služba je ideálna pre majiteľov komerčných nehnuteľností v Bratislave, ktorí potrebujú rýchlo pripraviť priestor pre nového nájomníka. Po vypratávaní môžeme priestor aj vyčistiť a dezinfikovať, aby bol ihneď pripravený na ďalšie využitie. Vďaka našej lokalite priamo v Bratislave vieme zabezpečiť rýchly nástup a efektívnu realizáciu.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero section - optimized for Bratislava */}
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

      {/* Location Map - added for Bratislava locations */}
      <div>
        <LocationMap
          title="Pôsobíme vo všetkých častiach Bratislavy"
          description="Naše služby vypratávania poskytujeme v nasledujúcich lokalitách"
          locations={bratislavaLocations}
          additionalText="Naše služby poskytujeme v celej EU"
        />
      </div>

      {/* Google Reviews section */}
      <div>
        <GoogleReviews
          title="Prečo si nás bratislavskí zákazníci vyberajú"
        />
      </div>

      {/* Reviews section */}
      <div>
        <Reviews showHeadline={true} />
      </div>

      {/* Features section - optimized for Bratislava */}
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
        <GoogleReviews
          title="Späťväzba od našich klientov v Bratislave"
          showReviewsShowcase={false}
        />
      </div>

      {/* FAQ section - optimized for Bratislava */}
      <div>
        <FAQ
          title="Často kladené otázky o vypratávaní pivníc a nebytových priestorov v Bratislave"
          items={faqItems}
        />
      </div>

      {/* CTA section - optimized for Bratislava */}
      <div>
        <CTA
          title="Profesionálne vypratávanie v Bratislave bez starostí"
          description="Zbavte sa roky nahromadeného neporiadku v pivnici, garáži či podkroví v Bratislave a okolí. Náš tím rýchlo a efektívne vyprace akýkoľvek priestor a postará sa o ekologickú likvidáciu odpadu. Kontaktujte nás ešte dnes!"
          buttonText="Získať cenovú ponuku v Bratislave zadarmo"
        />
      </div>
    
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[{"title":"Vypratávanie Bratislava","description":"Vypratávanie bytov a priestorov v Bratislave od 25€/hod.","href":"/vypratavanie-bratislava","icon":"/icons/vypratavanie_icon.svg"},{"title":"Vypratávanie bytov a domov","description":"Kompletné vypratanie bytu alebo domu.","href":"/vypratavanie-bytov-domov","icon":"/icons/vypratavanie_icon.svg"},{"title":"Odvoz stavebného odpadu","description":"Rýchly odvoz suťa, podláh a stavebného odpadu.","href":"/odvoz-likvidacia-stavebneho-odpadu","icon":"/icons/recycle_icon.svg"},{"title":"Sťahovanie Bratislava","description":"Profesionálne sťahovanie v celej Bratislave.","href":"/stahovanie-bratislava","icon":"/icons/truck_icon.svg"}]}
      />
          <FAQJsonLd items={faqItems} />
    </main>
  );
}
