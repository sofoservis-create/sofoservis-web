import React from "react";
import Hero from "@/components/sections/Hero";
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
  title: "Likvidácia a odvoz nebezpečného odpadu | Sofoservis",
  description:
    "Ponúkame komplexné služby v oblasti likvidácie a odvozu nebezpečného odpadu a starých spotrebičov ✅ Lacné a férové ceny ✅ Kontaktujte nás ešte dnes!",
  alternates: {
    canonical:
      "https://www.sofoservis.sk/likvidacia-nebezpecneho-odpadu-starych-spotrebicov",
      languages: {
        sk: "https://www.sofoservis.sk/likvidacia-nebezpecneho-odpadu-starych-spotrebicov",
        en: "https://www.sofoservis.sk/en/hazardous-waste-removal",
        "x-default": "https://www.sofoservis.sk/likvidacia-nebezpecneho-odpadu-starych-spotrebicov",
      },
  },
  keywords:
    "likvidacia odpadov, likvidacia odpadu, likvidacia nebezpecneho odpadu, odvoz stareho spotrebica, odvoz starých spotrebičov",
  openGraph: {
      title: "Likvidácia a odvoz nebezpečného odpadu | Sofoservis",
      description: "Komplexná likvidácia a odvoz nebezpečného odpadu, starých spotrebičov a elektroodpadu. Ekologická a zákonná likvidácia v Bratislave a okolí.",
      url: "https://www.sofoservis.sk/likvidacia-nebezpecneho-odpadu-starych-spotrebicov",
      siteName: "Sofoservis",
      images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
      locale: "sk_SK",
      type: "website",
    },
  };

export default function LikvidaciaSpotrebicovPage() {
  // Custom data for Hero section
  const heroData = {
    title: "Likvidácia a odvoz nebezpečného odpadu, starých spotrebičov",
    description:
      "Spoľahlivé a ekologické riešenia pre likvidáciu nebezpečného odpadu a starých elektrospotrebičov. Zabezpečíme odborný odvoz a certifikovanú likvidáciu.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  // Custom data for Features section
  const featuresData = {
    title: "Komplexné služby likvidácie nebezpečného odpadu a spotrebičov",
    description:
      "Ekologická likvidácia nebezpečného odpadu, starých spotrebičov a elektroniky podľa platných predpisov s certifikátmi o likvidácii.",
    features: [
      {
        image: "/icons/house_icon.svg", // For home clearance with appliances
        title: "Vypratávanie bytov a domov",
        description:
          "Kompletné vypratanie nehnuteľností so súčasnou likvidáciou starých spotrebičov a nebezpečného odpadu. Ekologicky a bezpečne.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/vypratavanie_icon.svg", // For basement/garage clearing
        title: "Vypratávanie pivníc a garáží",
        description:
          "Vyčistenie pivničných priestorov a garáží kde sa často nachádzajú staré farby, chemikálie a poškodené spotrebiče.",
        link: "/vypratavanie-pivnic-garazi-nebytovych-priestorov",
      },
      {
        image: "/icons/appliance_icon.svg", // NEW ICON - For appliances disposal
        title: "Likvidácia starých spotrebičov",
        description:
          "Profesionálny odvoz a ekologická likvidácia chladničiek, práčok, televízorov, počítačov a ďalších elektrospotrebičov podľa EU smerníc.",
        link: "/likvidacia-nebezpecneho-odpadu-starych-spotrebicov",
      },
      {
        image: "/icons/hazmat_icon.svg", // NEW ICON - For hazardous materials
        title: "Likvidácia nebezpečných látok",
        description:
          "Bezpečná likvidácia chemikálií, farieb, rozpúšťadiel, olejov, batérií a iných nebezpečných materiálov v súlade s environmentálnymi predpismi.",
        link: "/likvidacia-nebezpecneho-odpadu-starych-spotrebicov",
      },
      {
        image: "/icons/truck_icon.svg", // For transport services
        title: "Odvoz stavebného odpadu",
        description:
          "Odvoz stavebného odpadu obsahujúceho nebezpečné látky ako azbest, oleje a iné kontaminované materiály.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/recycle_icon.svg", // For ecological processing
        title: "Ekologická recyklácia",
        description:
          "Maximalizujeme recykláciu materiálov - kovy, plasty a ďalšie komponenty spotrebičov spracovávame v autorizovaných zariadeniach.",
        link: "/likvidacia-nebezpecneho-odpadu-starych-spotrebicov",
      },
    ],
  };

  const faqItems = [
            {
              question: "Ako prebieha odvoz a likvidácia starých spotrebičov?",
              answer:
                "Proces odvozu a likvidácie starých spotrebičov začína vašou objednávkou služby. Dohodneme termín, ktorý vám vyhovuje. V dohodnutý deň náš tím príde, vyniesie spotrebiče z bytu, domu či kancelárie (aj z vyšších poschodí bez výťahu) a naloží ich do vozidla. Spotrebiče prevezieme do autorizovaného zberného miesta, kde prebehne ich ekologická recyklácia. Spotrebiče sú najprv zbavené nebezpečných látok (freóny, oleje, batérie), následne sú rozobrané na jednotlivé komponenty (kovy, plasty, sklo), ktoré sú ďalej spracované a recyklované. Na požiadanie vám môžeme vystaviť potvrdenie o ekologickej likvidácii.",
            },
            {
              question: "Koľko stojí odvoz a likvidácia starých spotrebičov?",
              answer:
                "Cena za odvoz a likvidáciu spotrebičov závisí od niekoľkých faktorov: množstvo a typ spotrebičov, lokalita odberu, dostupnosť (poschodie, výťah) a ďalšie špecifické požiadavky. Orientačné ceny: malé spotrebiče (mikrovlnka, vysávač) od 10€ do 20€, stredné spotrebiče (práčka, umývačka) od 20€ do 35€, veľké spotrebiče (chladnička, mraznička, kombinovaná chladnička) od 30€ do 50€. Pri väčšom počte spotrebičov poskytujeme množstevné zľavy. V cene je zahrnutý odvoz z bytu/domu a ekologická likvidácia. Niektoré typy spotrebičov môžu vyžadovať príplatok kvôli obsahu nebezpečných látok. Pre presnú cenovú ponuku nás kontaktujte s konkrétnymi informáciami.",
            },
            {
              question: "Aké druhy nebezpečného odpadu likvidujete?",
              answer:
                "Likvidujeme široké spektrum nebezpečných odpadov, medzi ktoré patria: chemikálie (rozpúšťadlá, kyseliny, zásady), ropné produkty (oleje, mazivá, pohonné hmoty), farby, laky a náterové hmoty, pesticídy a iné agrochemikálie, staré lieky a zdravotnícky materiál, batérie a akumulátory všetkých typov, žiarivky a iné výbojky obsahujúce ortuť, elektronický odpad s obsahom nebezpečných látok, azbestové materiály (za špeciálnych podmienok), znečistené obaly od nebezpečných látok. Pre firmy zabezpečujeme aj likvidáciu špecifických priemyselných odpadov. Všetky nebezpečné odpady likvidujeme v súlade s platnou legislatívou a environmentálnymi normami, pričom využívame služby autorizovaných spracovateľov.",
            },
            {
              question:
                "Likvidujete aj veľké množstvo odpadu z firiem a prevádzok?",
              answer:
                "Áno, špecializujeme sa aj na likvidáciu väčšieho množstva odpadu z firiem, výrobných prevádzok, skladov či administratívnych priestorov. Pre podnikateľské subjekty ponúkame komplexné riešenia zahŕňajúce odvoz, triedenie a likvidáciu rôznych typov odpadov. Vieme zabezpečiť aj pravidelnú likvidáciu odpadu vznikajúceho pri výrobe. Súčasťou našich služieb je potrebná dokumentácia - evidenčné listy odpadu, sprievodné listy nebezpečného odpadu a potvrdenia o likvidácii, ktoré môžete použiť pri kontrolách zo strany úradov. Pre firmy s väčším objemom odpadu pripravujeme individuálne cenové ponuky a možnosť dlhodobej spolupráce za výhodnejších podmienok.",
            },
            {
              question:
                "Je potrebné získať povolenie na likvidáciu nebezpečného odpadu?",
              answer:
                "Ako fyzická osoba nepotrebujete špeciálne povolenie na likvidáciu nebezpečného odpadu, ak túto službu zabezpečuje oprávnená firma ako je tá naša. My disponujeme všetkými potrebnými povoleniami a oprávneniami na nakladanie s nebezpečnými odpadmi. Právnické osoby a podnikatelia majú zo zákona povinnosť viesť evidenciu odpadov a ohlasovať údaje o vzniku a nakladaní s odpadmi príslušným úradom. Pri likvidácii nebezpečného odpadu prostredníctvom našej spoločnosti vám poskytneme všetku potrebnú dokumentáciu - sprievodné listy nebezpečného odpadu a potvrdenia o likvidácii, ktoré slúžia ako doklad pre vašu evidenciu a prípadné kontroly. Niektoré špecifické typy nebezpečných odpadov (napr. azbest) môžu vyžadovať špeciálne povolenia aj pre fyzické osoby, o čom vás budeme informovať.",
            },
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
            benefits={["Poistenie zahrnuté", "Bez skrytých poplatkov", "Záväzná cena vopred"]}
      />

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
          title="Často kladené otázky o likvidácii spotrebičov a nebezpečného odpadu"
          items={faqItems}
        />
      </div>
      <FAQJsonLd items={faqItems} />

      {/* CTA section */}
      <div>
        <CTA
          title="Zbavte sa starých spotrebičov a nebezpečného odpadu bezpečne a ekologicky"
          description="Neriešte odvoz a likvidáciu sami. Náš tím zabezpečí profesionálny odvoz a certifikovanú likvidáciu v súlade so všetkými predpismi. Chráňte životné prostredie a svoje zdravie správnou likvidáciou."
          buttonText="Vyžiadať bezplatnú cenovú ponuku"
        />
      </div>
    
      <ServicePricing filter={["buracie-prace", "vypratavanie", "stahovanie"]} />
      <TrustBadges />
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[{"title":"Odvoz starého nábytku","description":"Odvoz a ekologická likvidácia starého nábytku.","href":"/vypratavanie-odvoz-stareho-nabytku","icon":"/icons/recycle_icon.svg"},{"title":"Odvoz stavebného odpadu","description":"Rýchly odvoz suťa, podláh a stavebného odpadu.","href":"/odvoz-likvidacia-stavebneho-odpadu","icon":"/icons/recycle_icon.svg"},{"title":"Vypratávanie bytov a domov","description":"Kompletné vypratanie bytu alebo domu.","href":"/vypratavanie-bytov-domov","icon":"/icons/vypratavanie_icon.svg"},{"title":"Čistenie a vypratávanie pozemkov","description":"Kompletné čistenie a vypratávanie pozemkov.","href":"/cistenie-vypratavanie-pozemkov-nehnutelnosti","icon":"/icons/landscape_icon.svg"}]}
      />
    </main>
  );
}
