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
  title: "Medzinárodné sťahovanie - Česko a Rakúsko | Sofoservis",
  description:
    "Ponúkame profesionálne medzinárodné sťahovanie ✅ Lacné a férové ceny ✅ Obhliadka priestoru zadarmo ✅ Kontaktujte nás ešte dnes!",
  alternates: {
    canonical: "https://www.sofoservis.sk/medzinarodne-stahovanie",
  },
  keywords:
    "medzinárodné sťahovanie, sťahovanie do zahraničia, sťahovanie zo zahraničia, sťahovanie do Európy, zahraničné sťahovanie, preprava vecí do zahraničia, sťahovanie z ČR, sťahovanie do Rakúska, sťahovanie do Nemecka",
};

export default function MedzinarodneStahovaniePage() {
  // Custom data for Hero section
  const heroData = {
    title: "Medzinárodné sťahovanie",
    description:
      "Komplexné služby pre sťahovanie do a zo zahraničia s minimom starostí. Zabezpečíme profesionálny presun vašej domácnosti alebo firmy kamkoľvek v Európe so všetkými potrebnými náležitosťami a formalitami.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Custom data for Features section
  const featuresData = {
    title: "Komplexné služby pre medzinárodné sťahovanie",
    description:
      "Ponúkame riešenia pre sťahovanie osôb aj firiem do a zo zahraničia so všetkými potrebnými službami na jednom mieste.",
    features: [
      {
        image: "/icons/house_icon.svg", // For household moving internationally
        title: "Sťahovanie bytov a domov",
        description:
          "Profesionálne medzinárodné sťahovanie domácností. Kompletné balenie, transport a rozbalenie vašej domácnosti v novej krajine s colnými formalitami.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/briefcase_icon.svg", // For office/company moving internationally
        title: "Sťahovanie kancelárií a firiem",
        description:
          "Medzinárodné sťahovanie firiem a kancelárií s minimálnym prestojom. Presun celej firmy do novej krajiny s profesionálnou koordináciou a dokumentáciou.",
        link: "/stahovanie-kancelarii-firiem",
      },
      {
        image: "/icons/globe_icon.svg", // Perfect for international scope
        title: "Sťahovanie po celej Európe",
        description:
          "Poskytujeme služby sťahovania do všetkých krajín Európskej únie aj mimo nej. Špecializujeme sa na trasy do Česka, Rakúska, Nemecka a ďalších krajín.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/document_icon.svg", // For customs and documentation
        title: "Colné a právne formaliny",
        description:
          "Zabezpečujeme všetky potrebné dokumenty, colné vyhlásenia a povolenia pre medzinárodný presun. Poradíme s právnymi požiadavkami cieľovej krajiny.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/packing_box_icon.svg", // For international packing
        title: "Špecializované balenie pre dlhé trasy",
        description:
          "Používame zosilnené balenie a ochranu pre medzinárodné trasy. Každý predmet je individuálne chránený proti poškodeniu počas dlhej prepravy.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/insurance_icon.svg", // NEW ICON - For insurance coverage
        title: "Poistenie a bezpečnosť",
        description:
          "Komplexné poistenie prepravovaného majetku počas celej medzinárodnej prepravy. Poskytujeme finančnú ochranu a záruky bezpečnosti.",
        link: "/medzinarodne-stahovanie",
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
          title="Často kladené otázky o medzinárodnom sťahovaní"
          items={[
            {
              question:
                "Ako dlho vopred treba naplánovať medzinárodné sťahovanie?",
              answer:
                "Medzinárodné sťahovanie odporúčame plánovať aspoň 1-2 týždne vopred, ideálne však 3-4 týždňov. Pri presunoch do vzdialenejších krajín alebo mimo EÚ je vhodné začať s prípravami ešte skôr. Skoršie plánovanie vám umožní zabezpečiť optimálny termín a získať lepšiu cenu. V urgentných prípadoch však vieme zabezpečiť aj expresné medzinárodné sťahovanie, najmä pre najbližšie krajiny ako Česko, Rakúsko či Nemecko.",
            },
            {
              question: "Aké dokumenty potrebujem pri sťahovaní do zahraničia?",
              answer:
                "Pri sťahovaní v rámci EÚ zvyčajne stačí občiansky preukaz alebo cestovný pas a zoznam prepravovaných vecí (inventár). Pre krajiny mimo EÚ môžu byť potrebné dodatočné dokumenty ako colné vyhlásenia, potvrdenia o pôvode vecí, faktúry alebo doklady o kúpe pre hodnotnejšie predmety. V niektorých prípadoch môžu byť požadované špeciálne povolenia pre prepravu určitých druhov predmetov. Naši koordinátori vám pripravia presný zoznam dokumentov potrebných pre vašu konkrétnu destináciu.",
            },
            {
              question:
                "Ako sú moje veci chránené počas medzinárodnej prepravy?",
              answer:
                "Pre medzinárodnú prepravu používame špeciálne zosilnené kartónové krabice, bublinkové fólie, ochranné penové materiály a drevené debny pre krehké predmety. Každý kus nábytku je individuálne zabalený a chránený. V prepravnom vozidle sú všetky veci zabezpečené proti pohybu pomocou popruhov a fixačných prostriedkov. Navyše, všetok prepravovaný majetok je poistený počas celej trasy medzinárodnej prepravy, čo vám poskytuje dodatočnú finančnú ochranu.",
            },
            {
              question: "Prepravujete aj automobily do zahraničia?",
              answer:
                "Áno, v rámci našich služieb medzinárodného sťahovania vieme zabezpečiť aj prepravu osobných automobilov, motocyklov a iných vozidiel. Preprava prebieha na špeciálnych autotransportéroch alebo pomocou odťahovej služby, v závislosti od typu vozidla a destinácie. Zabezpečujeme tiež všetky potrebné doklady a poistenie na prepravu vozidla. Táto služba je ideálna, ak sa sťahujete do zahraničia natrvalo a potrebujete presunúť aj svoje vozidlo.",
            },
            {
              question:
                "Existujú obmedzenia na to, čo môžem presťahovať do zahraničia?",
              answer:
                "Áno, jednotlivé krajiny majú svoje špecifické obmedzenia a regulácie. V rámci EÚ je presun osobných vecí zvyčajne bez obmedzení, ale existujú regulácie pre určité kategórie predmetov ako zbrane, lieky, alkohol nad určité množstvo, umelecké diela, starožitnosti a chránené druhy rastlín či zvierat. Krajiny mimo EÚ môžu mať prísnejšie pravidlá a colné predpisy. Vždy vám poskytneme aktuálne informácie o obmedzeniach pre vašu cieľovú krajinu a pomôžeme vám pripraviť všetky potrebné doklady pre legálny presun vašich vecí.",
            },
          ]}
        />
      </div>

      {/* CTA section */}
      <div className="pt-10 md:pt-[100px]">
        <CTA />
      </div>
    
      <ContactFormSection />
    </main>
  );
}
