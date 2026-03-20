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

const stahovanieLocations = [
  { name: "Bratislava", href: "/stahovanie-bratislava" },
  { name: "Nitra", href: "/stahovanie-nitra" },
  { name: "Trnava", href: "/stahovanie-trnava" },
  { name: "Pezinok", href: "/stahovanie-pezinok" },
  { name: "Galanta", href: "/stahovanie-galanta" },
  { name: "Levice", href: "/stahovanie-levice" },
  { name: "Piešťany", href: "/stahovanie-piestany" },
  { name: "Senec", href: "/stahovanie-senec" },
  { name: "Senica", href: "/stahovanie-senica" },
  { name: "Stupava", href: "/stahovanie-stupava" },
  { name: "Komárno", href: "/stahovanie-komarno" },
  { name: "Malacky", href: "/stahovanie-malacky" },
  { name: "Šamorín", href: "/stahovanie-samorin" },
  { name: "Hlohovec", href: "/stahovanie-hlohovec" },
];

export const metadata = {
  title: "Sťahovanie bytov a domov - rýchlo a lacno | Sofoservis",
  description:
    "Ponúkame profesionálne sťahovanie bytov a domov ✅ Lacné a férové ceny ✅ Obhliadka priestoru zadarmo ✅ Kontaktujte nás ešte dnes!",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-bytov-domov",
  },
  keywords:
    "stahovanie bytov, sťahovanie bytov, stahovanie bytu, stahovanie domov, stahovanie nabytku, preprava nabytku, montaz nabytku, demontaz nabytku",
};

export default function StahovanieBytovDomovPage() {
  // Custom data for Hero section
  const heroData = {
    title: "Sťahovanie bytov a domov",
    description:
      "Profesionálne služby pre kompletné sťahovanie bytov a domov. Šetríme váš čas, energiu a nervy vďaka skúsenému tímu, ktorý sa postará o všetko od balenia až po vybalenie na novom mieste.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú cenovú kalkuláciu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Custom data for Features section
  const featuresData = {
    title: "Komplexné služby sťahovania bytov a domov",
    description:
      "Profesionálne sťahovacie služby pre domácnosti s kompletným servisom od balenia až po usporiadanie v novom domove.",
    features: [
      {
        image: "/icons/house_icon.svg", // Was: /images/icon1.webp
        title: "Sťahovanie v Bratislave a okolí",
        description:
          "Lokálne sťahovanie bytov a domov v Bratislave a priľahlých mestách. Rýchly a bezpečný presun v rámci regiónu s minimálnymi nákladmi.",
        link: "/stahovanie-bratislava",
      },
      {
        image: "/icons/wrench_icon.svg", // Was: /images/icon2.webp
        title: "Montáž a demontáž nábytku",
        description:
          "Profesionálna demontáž nábytku pred sťahovaním a následná montáž v novom domove. Zabezpečíme správne zloženie a poskladanie všetkého zariadenia.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/crane_icon.svg", // Was: /images/icon3.webp
        title: "Sťahovanie ťažkých predmetov",
        description:
          "Špecializované sťahovanie pián, trezorov, veľkých spotrebičov a iných ťažkých bremien. Používame profesionálne vybavenie pre bezpečnú manipuláciu.",
        link: "/stahovanie-tazkych-bremien",
      },
      {
        image: "/icons/globe_icon.svg", // Was: /images/icon4.webp
        title: "Medzinárodné sťahovanie domácností",
        description:
          "Sťahovanie domácností do zahraničia alebo zo zahraničia. Komplexné riešenie s vybavením formalít a bezpečnou medzinárodnou prepravou.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/broom_icon.svg", // Was: /images/icon5.webp
        title: "Vypratávanie pred sťahovaním",
        description:
          "Vypratanie nepotrebných vecí pred sťahovaním. Ekologická likvidácia starého nábytku a spotrebičov, ktoré už nechcete prenášať.",
        link: "/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/recycle_icon.svg", // Was: /images/icon6.webp
        title: "Odvoz stavebného odpadu",
        description:
          "Odvoz kartónových krabíc, obalových materiálov a odpadu po sťahovaní. Kompletné upratanie po presťahovaní do nového domova.",
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

      <div className="mb-[-100px]">
        <LocationMap
          title="Sťahovanie bytov a domov po celom Slovensku"
          description="Naše služby poskytujeme v nasledujúcich mestách a regiónach."
          locations={stahovanieLocations}
          additionalText="Poskytujeme profesionálne sťahovacie služby s plnou zodpovednosťou za váš majetok."
          supporText="Sťahujeme vo všetkých regiónoch:"
        />
      </div>

      {/* Google Reviews section */}
      <div>
        <GoogleReviews showReviewsShowcase={false} />
      </div>

      {/* FAQ section */}
      <div className="pt-10 md:pt-[100px]">
        <FAQ
          title="Často kladené otázky o sťahovaní bytov a domov"
          items={[
            {
              question: "Aká je približná cena za sťahovanie 2-izbového bytu?",
              answer:
                "Cena za sťahovanie 2-izbového bytu sa štandardne pohybuje od 200€ do 350€, v závislosti od množstva nábytku, vzdialenosti, poschodia a prístupových podmienok. Pre presný cenový odhad vám radi pripravíme bezplatnú cenovú ponuku po vyplnení kontaktného formulára.",
            },
            {
              question: "Poskytujete obalové materiály na zabalenie vecí?",
              answer:
                "Áno, na požiadanie dodáme všetky potrebné obalové materiály ako kartónové krabice, bublinkové fólie, ochranné deky, sťahovacie pásky a ďalšie. Tieto materiály môžete buď objednať vopred, alebo ich priamo dodáme v deň sťahovania.",
            },
            {
              question: "Ako dlho trvá sťahovanie priemerného 3-izbového bytu?",
              answer:
                "Sťahovanie 3-izbového bytu zvyčajne trvá 4-6 hodín, v závislosti od objemu vecí, vzdialenosti medzi lokalitami a prístupových podmienok. Pri objednávke dostanete presnejší časový odhad podľa vašej konkrétnej situácie.",
            },
            {
              question: "Robíte sťahovanie aj cez víkendy?",
              answer:
                "Áno, naše služby poskytujeme 6 dní v týždni okrem nedele bez príplatku.",
            },
            {
              question: "Je potrebné pripraviť nábytok pred sťahovaním?",
              answer:
                "Nie je to nevyhnutné. Naši profesionáli sa postarajú o demontáž, zabalenie a následné zloženie vášho nábytku. Ak máte však citlivé osobné veci, odporúčame ich zabaliť vopred. V prípade elektroniky je vhodné si urobiť zálohu dát.",
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
