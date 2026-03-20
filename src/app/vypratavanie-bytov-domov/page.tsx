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
  title: "Vypratávanie bytov a domov | Sofoservis",
  description:
    "Ponúkame profesionálne vypratávanie bytov a domov ✅ Lacné a férové ceny ✅ Obhliadka priestoru zadarmo ✅ Kontaktujte nás ešte dnes!",
  keywords:
    "vypratanie bytov, vypratavanie domov, vypratavanie, vypratanie bytu cena, vypratavanie bytov, vypratávanie bytov, vypratavanie domov po starych rodicoch, vypratávanie starých domov, vypratávanie, vypratávanie domov, ponukam vypratavanie",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-bytov-domov",
  },
};

export default function VypratavanieBytovDomovPage() {
  // Custom data for Hero section
  const heroData = {
    title: "Vypratávanie bytov a domov",
    description:
      "Komplexné služby pre rýchle a efektívne vypratávanie bytov, domov a nehnuteľností. Náš profesionálny tím sa postará o všetko od triedenia vecí, cez balenie a odvoz, až po ekologickú likvidáciu nepotrebného odpadu.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Custom data for Features section
  const featuresData = {
    title: "Komplexné služby vypratávania bytov a domov",
    description:
      "Profesionálne vypratávanie nehnuteľností s následným odvozom a likvidáciou nepotrebných vecí. Ušetríme vám čas a energiu.",
    features: [
      {
        image: "/icons/house_icon.svg", // Was: /images/icon1.webp
        title: "Kompletné vypratanie bytu alebo domu",
        description:
          "Vypratáme celý byt alebo dom vrátane všetkých miestností, pivnice a podkrovia. Postaráme sa o triedenie vecí a ich následné zneškodnenie alebo darovanie.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/broom_icon.svg", // Was: /images/icon2.webp
        title: "Vypratávanie pivníc a garáží",
        description:
          "Špecializujeme sa na vypratávanie pivničných priestorov, garáží a skladov. Odstránime všetky nepotrebné veci a zabezpečíme čistotu priestorov.",
        link: "/vypratavanie-pivnic-garazi-nebytovych-priestorov",
      },
      {
        image: "/icons/furniture_icon.svg", // Was: /images/icon3.webp
        title: "Odvoz a likvidácia starého nábytku",
        description:
          "Profesionálny odvoz starého nábytku, spotrebičov a iného zariadenia. Zabezpečujeme environmentálne zodpovednú likvidáciu všetkých materiálov.",
        link: "/odvoz-likvidacia-stavebneho-odpadu/",
      },
      {
        image: "/icons/landscape_icon.svg", // Was: /images/icon4.webp - **NEW ICON**
        title: "Čistenie a vypratávanie pozemkov",
        description:
          "Vyčistíme a vypratáme vaše pozemky od nepotrebných vecí, stavebného odpadu a rastlinných zvyškov. Pripravíme pozemok na ďalšie využitie.",
        link: "/cistenie-vypratavanie-pozemkov-nehnutelnosti",
      },
      {
        image: "/icons/recycle_icon.svg", // Was: /images/icon5.webp
        title: "Likvidácia nebezpečného odpadu",
        description:
          "Bezpečne zlikvidujeme nebezpečný odpad, staré spotrebiče, batérie, farby a chemikálie podľa platných predpisov a noriem.",
        link: "/likvidacia-nebezpecneho-odpadu-starych-spotrebicov",
      },
      {
        image: "/icons/truck_icon.svg", // Was: /images/icon6.webp
        title: "Odvoz stavebného odpadu",
        description:
          "Po vypratávaní zabezpečíme aj odvoz stavebného odpadu, sute a demolačných materiálov. Kompletná služba na jednom mieste.",
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
          title="Často kladené otázky o vypratávaní bytov a domov"
          items={[
            {
              question: "Ako prebieha proces vypratávania?",
              answer:
                "Proces začína bezplatnou obhliadkou priestoru, počas ktorej odhadneme rozsah prác a pripravíme cenovú ponuku. Po dohode stanovíme termín vypratávania. V dohodnutý deň náš tím príde vybavený všetkým potrebným materiálom a technikou. Postupujeme systematicky: najprv vytriedime veci podľa vašich požiadaviek (čo zachovať, čo darovať, čo zlikvidovať), následne zabalíme a odvezieme všetok nepotrebný materiál a nakoniec priestor vyčistíme. Celý proces je efektívny a rýchly, pričom minimalizujeme narušenie vášho denného režimu.",
            },
            {
              question: "Aká je cena za vypratanie bytu alebo domu?",
              answer:
                "Cena závisí od viacerých faktorov: veľkosť priestoru, množstvo vecí na vypratanie, dostupnosť (poschodie, výťah), typ odpadu (bežný, stavebný, nebezpečný) a potrebné doplnkové služby (čistenie, dezinfekcia). Pre štandardný 2-izbový byt sa ceny pohybujú od 350€ do 700€, pre rodinný dom od 600€ do 1500€. Poskytujeme však nezáväznú cenovú ponuku po bezplatnej obhliadke, takže presne budete vedieť, s akými nákladmi môžete počítať.",
            },
            {
              question: "Ako dlho trvá vypratanie bytu alebo domu?",
              answer:
                "Doba vypratávania závisí od veľkosti priestoru a množstva vecí. Štandardný 2-izbový byt zvyčajne vypraceme za 1 deň (4-8 hodín). Väčšie domy alebo byty s množstvom vecí môžu vyžadovať 2-3 dni. Pri obzvlášť veľkých objektoch ako sú staré rodinné domy s množstvom nahromadených vecí môže vypratávanie trvať aj viac dní. Pri obhliadke vám vieme poskytnúť presnejší časový odhad pre vašu konkrétnu situáciu.",
            },
            {
              question: "Ako naložíte s funkčnými vecami a nábytkom?",
              answer:
                "S funkčným nábytkom a použiteľnými vecami nakladáme podľa vašich požiadaviek. Ponúkame niekoľko možností: 1) Zachovanie a presun na miesto podľa vašich potrieb, 2) Darovanie charitám alebo sociálne slabším rodinám, alebo 3) Ekologická likvidácia. Snažíme sa minimalizovať množstvo odpadu a uprednostňujeme ďalšie využitie vecí, ktoré sú ešte v dobrom stave.",
            },
            {
              question: "Zabezpečujete aj vypratávanie po zosnulých?",
              answer:
                "Áno, špecializujeme sa aj na citlivé a diskrétne vypratávanie nehnuteľností po zosnulých. Chápeme, že ide o emocionálne náročnú situáciu, preto k tejto službe pristupujeme s maximálnou empatiou a rešpektom. Pomôžeme vám roztriediť osobné veci, dokumenty a cennosti od nepotrebných vecí. Zabezpečíme šetrné a dôstojné vypratanie priestoru vrátane prípadného vyčistenia a dezinfekcie. Všetko prebieha podľa vašich predstáv a v súlade s pietou voči zosnulému.",
            },
          ]}
        />
      </div>

      {/* CTA section */}
      <div className="pt-10 md:pt-[100px]">
        <CTA
          title="Potrebujete profesionálne vypratávanie?"
          description="Zbavte sa starostí s vypratávaním. Náš skúsený tím sa postará o všetko - od triedenia vecí až po finálne vyčistenie priestoru. Kontaktujte nás ešte dnes pre bezplatnú konzultáciu."
          buttonText="Získať nezáväznú ponuku"
        />
      </div>
    
      <ContactFormSection />
    </main>
  );
}
