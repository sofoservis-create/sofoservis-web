import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Čistenie a vypratávanie pozemku, nehnuteľnosti | Sofoservis",
  description:
    "Ponúkame lacné a rýchle čistenie a vypratávanie pozemku, nehnuteľností ✅ Obhliadka priestoru zadarmo ✅ Kontaktujte nás ešte dnes!",
  alternates: {
    canonical:
      "https://www.sofoservis.sk/cistenie-vypratavanie-pozemkov-nehnutelnosti",
      languages: {
        sk: "https://www.sofoservis.sk/cistenie-vypratavanie-pozemkov-nehnutelnosti",
        en: "https://www.sofoservis.sk/en/property-land-junk-removal",
        "x-default": "https://www.sofoservis.sk/cistenie-vypratavanie-pozemkov-nehnutelnosti",
      },
  },
  keywords:
    "čistenie pozemkov, čistenie pozemku, čistenie pozemkov od náletových drevín, vypratanie nehnuteľnosti, cistenie pozemkov cennik, cistenie pozemkov cena, cistenie pozemku cena, vypratanie pozemku, vypratávanie pozemkov, vypratavanie pozemkov",
};

export default function CisteniePozemkovPage() {
  // Custom data for Hero section
  const heroData = {
    title: "Čistenie a vypratávanie pozemku, nehnuteľnosti",
    description:
      "Profesionálne čistenie a vypratávanie pozemkov od 25€/hod. Odstraňujeme náletové dreviny, odpad a nežiaducu vegetáciu. Pripravíme váš pozemok na výstavbu.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  // Custom data for Features section
  const featuresData = {
    title: "Komplexné služby čistenia a vypratávania pozemkov",
    description:
      "Profesionálne služby pre kompletné vyčistenie a vypratanie pozemkov, záhrad a nehnuteľností s ekologickou likvidáciou odpadu.",
    features: [
      {
        image: "/icons/landscape_icon.svg", // NEW ICON - For land clearing and maintenance work
        title: "Čistenie a úprava pozemkov",
        description:
          "Kompletné vyčistenie pozemkov od náletových drevín, nežiaducej vegetácie a odpadu. Pripravíme váš pozemok na výstavbu alebo rekultiváciu.",
        link: "/cistenie-vypratavanie-pozemkov-nehnutelnosti",
      },

      {
        image: "/icons/vypratavanie_icon.svg", // For basement/garage cleaning
        title: "Vypratávanie pivníc a garáží",
        description:
          "Vyčistenie pivničných priestorov, garáží a skladov na vašom pozemku. Odstránime všetok nepotrebný majetok a odpady.",
        link: "/vypratavanie-pivnic-garazi-nebytovych-priestorov",
      },
      {
        image: "/icons/truck_icon.svg", // For construction waste removal
        title: "Odvoz stavebného odpadu",
        description:
          "Profesionálny odvoz a likvidácia stavebného odpadu, sutiny a demolačných materiálov z pozemku. Máme kontajnery rôznych veľkostí.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/recycle_icon.svg", // For hazardous waste disposal
        title: "Likvidácia nebezpečného odpadu",
        description:
          "Ekologická likvidácia starých spotrebičov, elektroniky a nebezpečného odpadu nachádzajúceho sa na pozemku podľa platných predpisov.",
        link: "/likvidacia-nebezpecneho-odpadu-starych-spotrebicov",
      },
      {
        image: "/icons/wrecking_ball_icon.svg", // Perfect for demolition work
        title: "Búranie a demolácia",
        description:
          "Bouranie starých stavieb, altánkov, garáží alebo iných konštrukcií na pozemku. Kompletná demolácia s odvozom materiálu.",
        link: "/buranie-demolacia-domov-bytov",
      },
      {
        image: "/icons/house_icon.svg", // For clearing out properties/buildings
        title: "Vypratávanie bytov a domov",
        description:
          "Kompletné vypratanie nehnuteľností pred predajom alebo rekonštrukciou. Vyčistíme všetky priestory a pripravíme ich na ďalšie využitie.",
        link: "/vypratavanie-bytov-domov",
      },
    ],
  };

  const faqItems = [
            {
              question: "Ako prebieha čistenie a vypratávanie pozemku?",
              answer:
                "Proces začína bezplatnou obhliadkou pozemku, počas ktorej vyhodnotíme stav, rozsah práce a prístupové možnosti. Následne pripravíme cenovú ponuku. Po odsúhlasení určíme termín a postup prác. Samotné čistenie pozemku zvyčajne pozostáva z niekoľkých fáz: najprv odstránime veľký odpad a prekážky, potom pristúpime k likvidácii náletových drevín a nežiaducej vegetácie. Pri väčších pozemkoch často používame mechanizáciu (traktory, nakladače). Vyčistený materiál triedime na biologický odpad, ktorý môže byť kompostovaný, a na ostatný odpad určený na recykláciu alebo likvidáciu. Po vyčistení môžeme realizovať základné terénne úpravy podľa vašich požiadaviek.",
            },
            {
              question: "Aká je cena za čistenie pozemku?",
              answer:
                "Cena za čistenie pozemku závisí od viacerých faktorov: veľkosť pozemku, stupeň zarastenia/znečistenia, typ vegetácie/odpadu, prístupnosť pre techniku a potreba použitia špeciálnych strojov. Orientačne sa ceny pohybujú od 2€ do 8€ za m² v závislosti od náročnosti. Pri menších pozemkoch (do 500m²) môže byť stanovená paušálna cena. Odstránenie náletových drevín sa pohybuje od 150€ do 500€ za 100m² v závislosti od hustoty a hrúbky stromov. Likvidácia čiernych skládok sa oceňuje individuálne podľa typu a množstva odpadu. Najlepší spôsob, ako získať presnú cenu, je využiť našu bezplatnú obhliadku.",
            },
            {
              question: "Aké povolenia sú potrebné na čistenie pozemku?",
              answer:
                "Potrebné povolenia závisia od lokality pozemku a rozsahu prác. Pri bežnom čistení súkromného pozemku od náletových drevín a odpadu zvyčajne nie sú potrebné špeciálne povolenia. Avšak, ak sa na pozemku nachádzajú vzrastlé stromy s obvodom kmeňa nad 40 cm (merané vo výške 130 cm), môže byť potrebné povolenie na výrub od príslušného úradu životného prostredia. Pri pozemkoch v chránených oblastiach alebo s chránenými druhmi rastlín môžu byť potrebné ďalšie povolenia. Rovnako, ak plánujete väčšie terénne úpravy alebo sa na pozemku nachádza veľké množstvo odpadu, môže byť potrebné stavebné povolenie alebo ohlásenie drobnej stavby. Všetky tieto náležitosti s vami prekonzultujeme pri obhliadke.",
            },
            {
              question: "Ako dlho trvá vyčistenie štandardného pozemku?",
              answer:
                "Doba čistenia pozemku závisí od jeho veľkosti a stavu. Menší pozemok (do 500m²) s bežným znečistením a náletovými drevinami vieme vyčistiť za 1-2 pracovné dni. Stredne veľké pozemky (500-2000m²) zvyčajne vyžadujú 2-5 dní práce. Pri väčších pozemkoch alebo veľmi zarastených plochách môže čistenie trvať týždeň i viac. Ak je na pozemku čierna skládka alebo stavebný odpad, doba sa predlžuje kvôli potrebe triedenia a postupného odvozu. Vhodné počasie môže proces urýchliť, zatiaľ čo daždivé počasie môže práce spomaliť, najmä ak je potrebné používať ťažkú techniku, ktorá by mohla poškodiť terén.",
            },
            {
              question: "Čo s vyťaženým drevom a zeleným odpadom?",
              answer:
                "S vyťaženým drevom a zeleným odpadom nakladáme podľa vašich požiadaviek a miestnych možností. Ponúkame niekoľko možností: 1) Drevo môžeme nechať na pozemku narezané na menšie kusy ako palivové drevo, ak ho chcete využiť. 2) Konáre a menšie dreviny môžeme poštiepkovať priamo na mieste a štiepku môžete použiť ako mulč, alebo ju odvezieme. 3) Všetok zelený odpad môžeme odviezť na najbližšiu kompostáreň, kde bude ekologicky spracovaný.",
            },
          ];
  return (
    <main className="bg-white">
      {/* Hero section - no wrapper needed as it has its own spacing */}
      <link
        rel="preload"
        href="/images/mascot/stary-gauc-nosi-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)"
      />
      <link
        rel="preload"
        href="/images/mascot/stary-gauc-nosi-mascot.svg"
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
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          desktopMascotScaleMultiplier={1.08}
          desktopMascotRightShiftPct={0.235}
          desktopMascotBehindForm
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
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          mobileMascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
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
        <GoogleReviews />
      </div>

      {/* Ako to funguje section */}
      <HowItWorks />

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
          title="Často kladené otázky o čistení a vypratávaní pozemkov"
          items={faqItems}
        />
      </div>
      <FAQJsonLd items={faqItems} />

      {/* CTA section */}
      <div>
        <CTA
          title="Obnovte potenciál vášho pozemku"
          description="Premeňte zanedbaný pozemok na hodnotný priestor pre výstavbu, záhradu alebo predaj. Náš tím sa postará o kompletné vyčistenie, odstránenie náletových drevín a ekologickú likvidáciu všetkého odpadu. Získajte cenovú ponuku ešte dnes!"
          buttonText="Bezplatná obhliadka pozemku"
        />
      </div>
    
      <ServicePricing filter={["buracie-prace", "vypratavanie", "stahovanie"]} />
      <TrustBadges />
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[{"title":"Vypratávanie bytov a domov","description":"Kompletné vypratanie bytu alebo domu.","href":"/vypratavanie-bytov-domov","icon":"/icons/vypratavanie_icon.svg"},{"title":"Vypratávanie pivníc a garáží","description":"Rýchle vypratanie pivníc, kobiek a garáží.","href":"/vypratavanie-pivnic-garazi-nebytovych-priestorov","icon":"/icons/house_icon.svg"},{"title":"Odvoz stavebného odpadu","description":"Rýchly odvoz suťa, podláh a stavebného odpadu.","href":"/odvoz-likvidacia-stavebneho-odpadu","icon":"/icons/recycle_icon.svg"},{"title":"Búranie a demolácia","description":"Profesionálne búranie stien, predelov a objektov.","href":"/buranie-demolacia-domov-bytov","icon":"/icons/crane_icon.svg"}]}
      />
    </main>
  );
}
