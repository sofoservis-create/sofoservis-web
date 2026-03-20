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
  title: "Sťahovanie kancelárií a firiem - rýchlo a lacno | Sofoservis",
  description:
    "Ponúkame profesionálne sťahovanie kancelárií a firiem ✅ Lacné a férové ceny ✅ Obhliadka priestoru zadarmo ✅ Kontaktujte nás ešte dnes!",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-kancelarii-firiem",
  },
  keywords:
    "stahovanie kancelarii, stahovanie kancelárií, stahovanie firiem, stahovanie firemneho nabytku, kancelárske sťahovanie, firemné sťahovanie, sťahovanie podnikov, montáž kancelárskeho nábytku",
};

export default function StahovanieKancelariiPage() {
  // Custom data for Hero section
  const heroData = {
    title: "Sťahovanie kancelárií a firiem",
    description:
      "Profesionálne služby pre kompletné sťahovanie kancelárií a firiem. Minimalizujeme výpadky vašej prevádzky vďaka skúsenému tímu, ktorý sa postará o efektívny a bezpečný presun celej vašej spoločnosti.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  // Custom data for Features section
  const featuresData = {
    title: "Komplexné služby sťahovania kancelárií a firiem",
    description:
      "Profesionálne firemné sťahovanie s minimálnymi prestojmi. Špecializujeme sa na sťahovanie kancelárií, obchodov a priemyselných objektov.",
    features: [
      {
        image: "/icons/briefcase_icon.svg", // Was: /images/icon1.webp
        title: "Sťahovanie kancelárií v Bratislave",
        description:
          "Lokálne sťahovanie kancelárií a firemných sídiel v Bratislave a okolí. Rýchly presun s minimálnym vplyvom na chod vašej firmy.",
        link: "/stahovanie-bratislava",
      },
      {
        image: "/icons/globe_icon.svg", // Was: /images/icon2.webp
        title: "Medzinárodné sťahovanie firiem",
        description:
          "Presun firmy do zahraničia alebo expanzia na slovenský trh. Komplexné riešenie s vybavením formalít a bezpečnou medzinárodnou prepravou.",
        link: "/medzinarodne-stahovanie",
      },
      {
        image: "/icons/wrench_icon.svg", // Was: /images/icon3.webp
        title: "Montáž kancelárskeho nábytku",
        description:
          "Profesionálna demontáž a montáž kancelárskeho nábytku, pracovných stolov, skríň a modulárnych systémov. Presná inštalácia podľa pôvodného rozloženia.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/crane_icon.svg", // Was: /images/icon4.webp
        title: "Sťahovanie ťažkého vybavenia",
        description:
          "Špecializované sťahovanie trezorů, serverov, priemyselných strojov a iného ťažkého firemného vybavenia s profesionálnym prístupom.",
        link: "/stahovanie-tazkych-bremien",
      },
      {
        image: "/icons/broom_icon.svg", // Was: /images/icon5.webp
        title: "Vypratávanie starých kancelárií",
        description:
          "Kompletné vypratanie starých kancelárskych priestorov. Ekologická likvidácia starého nábytku, IT techniky a kancelárskych potrieb.",
        link: "/vypratavanie-bytov-domov", // Consider if this link is the best fit. A link to a general vypratávanie page or a specific one for offices might be better if available.
      },
      {
        image: "/icons/recycle_icon.svg", // Was: /images/icon6.webp
        title: "Odvoz kancelárskeho odpadu",
        description:
          "Odvoz a likvidácia odpadu po firemnom sťahovaní. Zabezpečíme kontajnery a ekologickú likvidáciu kartónov, obalových materiálov a odpadu.",
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
          title="Často kladené otázky o sťahovaní kancelárií a firiem"
          items={[
            {
              question:
                "Ako dlho vopred je potrebné plánovať sťahovanie kancelárie?",
              answer:
                "Pre menšie kancelárie odporúčame plánovať sťahovanie aspoň 1-2 týždne vopred, pre stredné firmy 3-4 týždne a pre veľké spoločnosti 5-6 týždňov. Včasné plánovanie nám umožní zabezpečiť všetky potrebné zdroje a minimalizovať dopad na vašu prevádzku.",
            },
            {
              question:
                "Dokážete sťahovať počas víkendov, aby nebol narušený chod firmy?",
              answer:
                "Áno, často realizujeme sťahovanie kancelárií a firiem počas víkendov, večerov alebo sviatkov práve z tohto dôvodu. Naši pracovníci sú k dispozícii 6 dní v týždni a vieme sa prispôsobiť vašim prevádzkovým potrebám. Tento prístup umožňuje, že v piatok skončíte prácu na starom mieste a v pondelok môžete začať na novom.",
            },
            {
              question:
                "Ako zabezpečujete ochranu dôverných dokumentov a údajov?",
              answer:
                "Pri sťahovaní dokumentov a archívov postupujeme podľa prísnych bezpečnostných protokolov. Používame špeciálne uzamykateľné kontajnery, dokumenty označujeme a organizujeme podľa vašich požiadaviek a zabezpečujeme, aby k nim mali prístup len oprávnené osoby. Naši pracovníci sú vyškolení na zaobchádzanie s dôvernými materiálmi.",
            },
            {
              question:
                "Ponúkate aj kompletnú demontáž a montáž systémového nábytku?",
              answer:
                "Áno, naši technici majú rozsiahle skúsenosti s demontážou a montážou všetkých typov systémového nábytku od rôznych výrobcov. Podrobne zdokumentujeme rozmiestnenie nábytku pred demontážou a zabezpečíme jeho presnú montáž na novom mieste podľa vašich požiadaviek alebo priestorových plánov.",
            },
            {
              question:
                "Viete zabezpečiť aj sťahovanie IT zariadení a serverov?",
              answer:
                "Áno, máme skúsenosti so sťahovaním citlivých IT zariadení vrátane serverov, sieťových zariadení a dátových úložísk. Používame špeciálne antistatické obaly a tlmené prepravné systémy na ochranu elektroniky. Na požiadanie vieme zabezpečiť aj odpojenie a opätovné zapojenie zariadení prostredníctvom našich IT partnerov.",
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
