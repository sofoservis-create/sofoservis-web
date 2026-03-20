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
  title: "Vypratávanie pivníc, garáži a nebytových priestorov | Sofoservis",
  description:
    "Ponúkame lacné a rýchle vypratávanie pivníc, garáži, nebytových priestorov ✅ Obhliadka priestoru zadarmo ✅ Kontaktujte nás ešte dnes!",
  keywords:
    "vypratavanie pivnic, vypratavanie priestorov, vypratanie garáže, vypratanie nebytového priestoru, vypratávanie pivníc, vypratavanie pivnic cena, vypratavanie poval, vypratávanie priestorov",
  alternates: {
    canonical:
      "https://www.sofoservis.sk/vypratavanie-pivnic-garazi-nebytovych-priestorov",
  },
};

export default function VypratavaniePivnicGaraziPage() {
  // Custom data for Hero section
  const heroData = {
    title: "Vypratávanie pivníc, garáži a nebytových priestorov",
    description:
      "Profesionálne a rýchle vypratávanie pivníc, garáží, skladov, povál a iných nebytových priestorov. Kompletne vyčistíme a vypraceme akýkoľvek priestor bez ohľadu na stupeň znečistenia či množstvo nahromadených vecí.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Custom data for Features section
  const featuresData = {
    title: "Špecializované vypratávanie pivníc, garáží a nebytových priestorov",
    description:
      "Profesionálne vypratávanie špecifických priestorov s následným odvozom a likvidáciou všetkých typov odpadu a nepotrebných vecí.",
    features: [
      {
        image: "/icons/broom_icon.svg", // Perfect for cleaning/clearing out spaces
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
          title="Často kladené otázky o vypratávaní pivníc, garáží a nebytových priestorov"
          items={[
            {
              question: "Ako dlho trvá vypratanie pivnice alebo garáže?",
              answer:
                "Doba vypratávania závisí od veľkosti priestoru a množstva nahromadených vecí. Štandardnú pivnicu alebo garáž (do 20m²) zvyčajne vypraceme za 2-4 hodiny. Väčšie priestory alebo priestory s veľkým množstvom odpadu môžu vyžadovať jeden celý pracovný deň. Pri komplikovaných prípadoch, ako sú zanesené povaly alebo extrémne znečistené pivnice, môže vypratávanie trvať aj 2 dni. Pri obhliadke vám vieme presne povedať, ako dlho bude trvať vypratanie vášho konkrétneho priestoru.",
            },
            {
              question: "Koľko stojí vypratávanie pivnice alebo garáže?",
              answer:
                "Cena za vypratávanie pivnice alebo garáže sa odvíja od niekoľkých faktorov: veľkosť priestoru, množstvo odpadu, prístupové podmienky a typ odpadu. Pre štandardnú pivnicu (do 15m²) sa ceny pohybujú od 150€ do 300€, pre garáž od 200€ do 400€. Cena zahŕňa prácu, odvoz a likvidáciu bežného odpadu. Pri špeciálnych typoch odpadu (chemikálie, stavebný odpad, elektronika) môžu byť účtované dodatočné poplatky za likvidáciu. Najlepšie je využiť našu bezplatnú obhliadku, po ktorej dostanete presnú cenovú ponuku bez skrytých poplatkov.",
            },
            {
              question:
                "Vediete vypratať aj ťažko dostupné priestory ako povaly?",
              answer:
                "Áno, špecializujeme sa aj na vypratávanie ťažko dostupných priestorov ako sú povaly, podkrovia a priestory s obmedzeným prístupom. Máme skúsenosti s prácou v stiesnených podmienkach a disponujeme špeciálnym vybavením pre bezpečné vypratávanie takýchto priestorov. Využívame mobilné kladkostroje, zdvíhacie zariadenia a v prípade potreby aj lešenia alebo rebríky, aby sme sa dostali aj do najťažšie prístupných miest. Náš tím je vyškolený na prácu vo výškach a v obmedzených priestoroch s dôrazom na bezpečnosť.",
            },
            {
              question: "Čo s vecami, ktoré sú ešte použiteľné?",
              answer:
                "S použiteľnými vecami nakladáme podľa vašich inštrukcií. Ponúkame niekoľko možností: 1) Odstránime len odpad a nepotrebné veci, použiteľné veci ponecháme na mieste alebo presunieme podľa vašich pokynov 2) Použiteľné veci môžeme odovzdať charitám alebo sociálne slabším rodinám, ak si to želáte. Vždy najprv s vami konzultujeme, čo chcete zachovať a čo odstrániť, aby nedošlo k omylu.",
            },
            {
              question: "Viete vypratať aj nebytové priestory po nájomníkoch?",
              answer:
                "Áno, ponúkame špecializované služby pre vypratávanie nebytových priestorov po ukončení nájmu. Či už ide o skladové priestory, obchodné priestory alebo kancelárie, postaráme sa o kompletné vypratanie, odvoz vybavenia a odpadu, a prípadnú základnú sanáciu priestoru. Táto služba je ideálna pre majiteľov komerčných nehnuteľností, ktorí potrebujú rýchlo pripraviť priestor pre nového nájomníka. Po vypratávaní môžeme priestor aj vyčistiť a dezinfikovať, aby bol pripravený na ďalšie využitie.",
            },
          ]}
        />
      </div>

      {/* CTA section */}
      <div className="pt-10 md:pt-[100px]">
        <CTA
          title="Získajte späť cenný úložný priestor"
          description="Zbavte sa roky nahromadeného neporiadku v pivnici, garáži či podkroví. Náš tím rýchlo a efektívne vyprace akýkoľvek priestor a postará sa o ekologickú likvidáciu odpadu. Kontaktujte nás ešte dnes!"
          buttonText="Získať cenovú ponuku zadarmo"
        />
      </div>
    
      <ContactFormSection />
    </main>
  );
}
