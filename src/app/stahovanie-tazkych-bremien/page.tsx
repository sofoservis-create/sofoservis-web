import React from "react";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Sťahovanie klavírov a ťažkých bremien | Sofoservis",
  description:
    "Ponúkame profesionálne sťahovanie ťažkých bremien ✅ Klavíry, trezory, výrobné zariadenia ✅ Špeciálne techniky a vybavenie ✅ Obhliadka priestoru zadarmo ✅ Kontaktujte nás ešte dnes!",
  keywords:
    "stahovanie tazkych bremien, sťahovanie klavíra, sťahovanie trezoru, preprava ťažkých predmetov, sťahovanie výrobných strojov, sťahovanie bankomatu, ťažké bremená, nadrozmerné predmety",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-tazkych-bremien",
      languages: {
        sk: "https://www.sofoservis.sk/stahovanie-tazkych-bremien",
        en: "https://www.sofoservis.sk/en/moving-heavy-loads",
        "x-default": "https://www.sofoservis.sk/stahovanie-tazkych-bremien",
      },
  },
};

export default function StahovanieTazkychBremienPage() {
  // Custom data for Hero section
  const heroData = {
    title: "Sťahovanie ťažkých bremien",
    description:
      "Špecializované služby pre bezpečné sťahovanie ťažkých a objemných predmetov. Náš profesionálny tím s dlhoročnými skúsenosťami a špeciálnym vybavením zabezpečí prepravu ťažkých bremien ako klavíry, trezory, výrobné stroje či iné nadrozmerné predmety.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Custom data for Features section
  const featuresData = {
    title: "Komplexné služby sťahovania ťažkých bremien",
    description:
      "Špecializované služby pre bezpečný presun a transport ťažkých, objemných a hodnotných predmetov s profesionálnym vybavením.",
    features: [
      {
        image: "/icons/crane_icon.svg", // Perfect for heavy lifting
        title: "Sťahovanie pianín a klavírov",
        description:
          "Špecializovaný presun pianín, klavírov a ďalších hudobných nástrojov. Používame profesionálne vybavenie a techniky pre bezpečnú manipuláciu s týmito cennými predmetmi.",
        link: "/stahovanie-tazkych-bremien",
      },
      {
        image: "/icons/safe_icon.svg", // NEW ICON - For safes and vaults
        title: "Preprava trezorů a sejfov",
        description:
          "Odborný presun trezorů, sejfov a ďalších bezpečnostných zariadení. Zabezpečíme bezpečnú prepravu aj najťažších trezorů s váhou niekoľko stoviek kilogramov.",
        link: "/stahovanie-tazkych-bremien",
      },
      {
        image: "/icons/heavy_machinery_icon.svg", // NEW ICON - For heavy machinery
        title: "Transport ťažkých strojov",
        description:
          "Presun ťažkých strojov, priemyselných zariadení a výrobných liniek. Disponujeme špeciálnym vybavením pre manipuláciu s objemnými a ťažkými predmetmi.",
        link: "/stahovanie-tazkych-bremien",
      },
      {
        image: "/icons/furniture_icon.svg", // For heavy furniture
        title: "Objemný nábytok a zariadenie",
        description:
          "Presun objemného nábytku ako sú veľké sedačky, skrine, americké chladničky, práčky a iné ťažké domáce spotrebiče s profesionálnou technikou.",
        link: "/stahovanie-preprava-nabytku",
      },
      {
        image: "/icons/artwork_icon.svg", // NEW ICON - For art and antiques
        title: "Umelecké diela a starožitnosti",
        description:
          "Špeciálna preprava umeleckých diel, sôch, starožitností a iných hodnotných predmetov vyžadujúcich mimoriadnu opatrnosť a ochranu.",
        link: "/stahovanie-tazkych-bremien",
      },
      {
        image: "/icons/truck_icon.svg", // For specialized transport
        title: "Špeciálna prepravná technika",
        description:
          "Využívame špeciálne vozidlá, hydraulické zdvíhacie zariadenia, sťahovacie výťahy a ďalšie profesionálne vybavenie pre bezpečný transport ťažkých bremien.",
        link: "/stahovanie-tazkych-bremien",
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
            benefits={["Poistenie nábytku zahrnuté", "Bez skrytých poplatkov", "Záväzná cena vopred"]}
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
          title="Často kladené otázky o sťahovaní ťažkých bremien"
          items={[
            {
              question: "Aký najťažší predmet dokážete presťahovať?",
              answer:
                "Naša spoločnosť má skúsenosti s predmetmi vážiacimi až niekoľko ton. Prepravovali sme priemyselné stroje, veľké trezory a iné ťažké objekty s hmotnosťou presahujúcou 3 tony. Každé sťahovanie ťažkého bremena si vyžaduje individuálne posúdenie, preto odporúčame obhliadku, na základe ktorej navrhneme optimálne riešenie pre váš konkrétny prípad.",
            },
            {
              question: "Ako prebieha sťahovanie klavíra?",
              answer:
                "Sťahovanie klavíra vyžaduje špecializovaný prístup. Najskôr ho zabezpečíme proti otrasenia a poškodeniu pomocou špeciálnych obalov. Následne využívame klavírny vozík a sťahovacie popruhy pre jeho bezpečnú manipuláciu. V úzkych priestoroch môžeme použiť tzv. klavírne lyže. Tím školených pracovníkov zabezpečí presun do vozidla a vyloženie na novom mieste. Na požiadanie vieme zabezpečiť aj ladenie nástroja po presťahovaní.",
            },
            {
              question: "Potrebujem na sťahovanie trezoru špeciálne povolenia?",
              answer:
                "Vo väčšine prípadov nie sú potrebné špeciálne povolenia na sťahovanie trezoru, pokiaľ sa nejedná o obzvlášť ťažký trezor (nad 1000 kg), ktorý by vyžadoval použitie žeriavu na verejnom priestranstve. V takom prípade môže byť potrebné zabezpečiť povolenie na krátkodobé zabratie verejného priestranstva od miestneho úradu. Túto administratívu vieme pre vás zabezpečiť v rámci našich komplexných služieb.",
            },
            {
              question:
                "Dá sa presťahovať výrobný stroj bez prerušenia výroby?",
              answer:
                "Áno, pri správnom plánovaní je možné minimalizovať prestoje výroby. Dôkladne naplánujeme celý proces presunu, pripravíme nové miesto vopred, zabezpečíme prívody energií a iné potrebné náležitosti. Samotné sťahovanie výrobného stroja realizujeme počas víkendov alebo plánovaných odstávok, aby mal váš tím technikov dostatok času na zapojenie a otestovanie zariadenia pred obnovením prevádzky.",
            },
            {
              question:
                "Čo robiť, ak sa ťažký predmet nezmestí cez dvere alebo schodisko?",
              answer:
                "V takýchto prípadoch máme niekoľko alternatívnych riešení. Môžeme využiť techniku spúšťania cez balkón alebo okno pomocou žeriavu, hydraulické plošiny z exteriéru budovy, alebo v krajnom prípade dočasné stavebné úpravy (rozšírenie otvorov). Naši technici pri obhliadke posúdia všetky možnosti a navrhnú najvhodnejšie a najšetrnejšie riešenie pre váš konkrétny prípad.",
            },
          ]}
        />
      </div>

      {/* CTA section */}
      <div>
        <CTA />
      </div>
    
      <ServicePricing filter={["stahovanie", "vypratavanie", "medzinarodne-stahovanie"]} />
      <TrustBadges />
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[{"title":"Sťahovanie bytov a domov","description":"Spoľahlivé sťahovanie bytov a rodinných domov.","href":"/stahovanie-bytov-domov","icon":"/icons/house_icon.svg"},{"title":"Preprava nábytku","description":"Bezpečná preprava nábytku a ťažkých bremien.","href":"/stahovanie-preprava-nabytku","icon":"/icons/truck_icon.svg"},{"title":"Sťahovanie Bratislava","description":"Profesionálne sťahovanie v celej Bratislave.","href":"/stahovanie-bratislava","icon":"/icons/truck_icon.svg"},{"title":"Búranie a demolácia","description":"Profesionálne búranie stien, predelov a objektov.","href":"/buranie-demolacia-domov-bytov","icon":"/icons/crane_icon.svg"}]}
      />
    </main>
  );
}
