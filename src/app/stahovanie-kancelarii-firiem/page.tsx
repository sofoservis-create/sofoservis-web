import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
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
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata = {
  title: "Sťahovanie kancelárií a firiem - rýchlo a lacno | Sofoservis",
  description:
    "Profesionálne sťahovanie kancelárií a firiem od 25€/hod ✅ Minimálne výpadky prevádzky ✅ Obhliadka zadarmo ✅ Kontaktujte nás ešte dnes!",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-kancelarii-firiem",
      languages: {
        sk: "https://www.sofoservis.sk/stahovanie-kancelarii-firiem",
        en: "https://www.sofoservis.sk/en/office-moving",
        "x-default": "https://www.sofoservis.sk/stahovanie-kancelarii-firiem",
      },
  },
  keywords:
    "stahovanie kancelarii, stahovanie kancelárií, stahovanie firiem, stahovanie firemneho nabytku, kancelárske sťahovanie, firemné sťahovanie, sťahovanie podnikov, montáž kancelárskeho nábytku",
  openGraph: {
      title: "Sťahovanie kancelárií a firiem - rýchlo a lacno | Sofoservis",
      description: "Profesionálne sťahovanie kancelárií a firiem od 25€/hod. Minimalizujeme výpadky vašej prevádzky. Obhliadka zadarmo. Kontaktujte nás ešte dnes!",
      url: "https://www.sofoservis.sk/stahovanie-kancelarii-firiem",
      siteName: "Sofoservis",
      images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
      locale: "sk_SK",
      type: "website",
    },
  };

export default function StahovanieKancelariiPage() {
  const faqItems = [
    { question: "Ako dlho vopred je potrebné plánovať sťahovanie kancelárie?", answer: "Pre menšie kancelárie odporúčame plánovať sťahovanie aspoň 1-2 týždne vopred, pre stredné firmy 3-4 týždne a pre veľké spoločnosti 5-6 týždňov. Včasné plánovanie nám umožní zabezpečiť všetky potrebné zdroje a minimalizovať dopad na vašu prevádzku." },
    { question: "Dokážete sťahovať počas víkendov, aby nebol narušený chod firmy?", answer: "Áno, často realizujeme sťahovanie kancelárií a firiem počas víkendov, večerov alebo sviatkov práve z tohto dôvodu. Naši pracovníci sú k dispozícii 6 dní v týždni a vieme sa prispôsobiť vašim prevádzkovým potrebám." },
    { question: "Ako zabezpečujete ochranu dôverných dokumentov a údajov?", answer: "Pri sťahovaní dokumentov a archívov postupujeme podľa prísnych bezpečnostných protokolov. Používame špeciálne uzamykateľné kontajnery, dokumenty označujeme a organizujeme podľa vašich požiadaviek a zabezpečujeme, aby k nim mali prístup len oprávnené osoby." },
    { question: "Ponúkate aj kompletnú demontáž a montáž systémového nábytku?", answer: "Áno, naši technici majú rozsiahle skúsenosti s demontážou a montážou všetkých typov systémového nábytku od rôznych výrobcov. Podrobne zdokumentujeme rozmiestnenie nábytku pred demontážou a zabezpečíme jeho presnú montáž na novom mieste." },
    { question: "Viete zabezpečiť aj sťahovanie IT zariadení a serverov?", answer: "Áno, máme skúsenosti so sťahovaním citlivých IT zariadení vrátane serverov, sieťových zariadení a dátových úložísk. Používame špeciálne antistatické obaly a tlmené prepravné systémy na ochranu elektroniky." },
  ];

  // Custom data for Hero section
  const heroData = {
    title: "Sťahovanie kancelárií a firiem",
    description:
      "Profesionálne sťahovanie kancelárií a firiem od 25€/hod. Minimalizujeme výpadky vašej prevádzky vďaka skúsenému tímu, ktorý sa postará o efektívny presun.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie-gauc.avif",
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
        image: "/icons/vypratavanie_icon.svg", // Was: /images/icon5.webp
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
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
<link
        rel="preload"
        href="/images/mascot/mascot-holding-boxes.svg"
        as="image"
        type="image/svg+xml"
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
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          desktopMascotScaleMultiplier={1.03}
        desktopMinHeroTextHeightPx={460}
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
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          mobileMascotSrc="/images/mascot/mascot-holding-boxes.svg"
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
          expandableGroup={{
            label: "Všetko o sťahovaní kancelárií a firiem",
            panels: [
              {
                title: "Čo obnáša firemné sťahovanie?",
                content: "Sťahovanie kancelárie alebo celej firmy je komplexnejší proces ako sťahovanie domácnosti. Zahŕňa nielen fyzickú prepravu nábytku a vybavenia, ale aj koordináciu s prevádzkou firmy tak, aby bol výpadok čo najkratší.\n\nTypická firemná zákazka zahŕňa: demontáž a presun kancelárskeho nábytku (stoly, stoličky, skrine, regály), bezpečnú prepravu IT vybavenia (servery, počítače, monitory), presun archívov a dokumentácie, prepravu recepčného a konferenčného vybavenia a montáž na novom mieste podľa vopred pripraveného plánu.",
              },
              {
                title: "Plánovanie firemného presťahovania — krok za krokom",
                content: "Úspešné firemné sťahovanie začína dobrou prípravou. Odporúčame začať plánovať aspoň 4-6 týždňov vopred. Prvým krokom je vytvoriť inventár všetkého zariadenia a nábytku. Ďalej označiť, čo sa sťahuje, čo sa vyraďuje a čo sa uskladní.\n\nPripravte plán nového priestoru s rozmiestnením nábytku ešte pred sťahovaním — ušetríte čas pri vykladaní. Informujte zamestnancov v dostatočnom predstihu a prideľte zodpovednosti. Coordinácia so správcom budovy oboch lokalít zabezpečí hladký priebeh.",
              },
              {
                title: "Minimalizácia výpadku prevádzky počas sťahovania",
                content: "Pre väčšinu firiem je výpadok prevádzky počas sťahovania najväčšou obavou. Existuje niekoľko spôsobov, ako ho minimalizovať: sťahovanie cez víkend (šetríte pracovné dni), postupné sťahovanie po oddeleniach, hybridný model — niektorí zamestnanci pracujú z domu počas sťahovania.\n\nDôležité je aj prioritizovať sťahovanie kritického vybavenia — IT infraštruktúra a serverové zariadenia by mali byť presťahované a sprístupnené ako prvé. S firmami koordinujeme termíny tak, aby sme maximálne vyhoveli potrebám prevádzky.",
              },
              {
                title: "Sťahovanie IT vybavenia a archivácie",
                content: "IT vybavenie vyžaduje špeciálnu starostlivosť pri preprave. Počítače, monitory a servery balíme do originálnych alebo špeciálnych ESD (elektrostaticky bezpečných) obalov. Káble a periférie etikujeme podľa miesta zapojenia, aby ich opätovné zapojenie prebehlo rýchlo.\n\nArchívne dokumenty a súbory prepravujeme v uzamykateľných archívnych boxoch. Zabezpečujeme diskrétnosť a integritu dokumentácie. Na požiadanie vieme zabezpečiť aj archiváciu starých dokumentov alebo ich likvidáciu podľa GDPR.",
              },
              {
                title: "Cena sťahovania kancelárie v Bratislave",
                content: "Cena firemného sťahovania závisí od rozsahu zákazky. Malá kancelária (do 10 zamestnancov) zvyčajne stojí 500-1500€. Stredná firma (10-50 zamestnancov) 1500-5000€. Väčšie zákazky oceňujeme individuálne po obhliadke.\n\nVopred pripravíme detailnú cenovú ponuku so špecifikáciou všetkých prác. Cena zahŕňa prácu, prepravu, základný baliaci materiál a montáž na novom mieste. Pre pravidelných firemných klientov ponúkame špeciálne podmienky a rámcové zmluvy.",
              },
            ],
          }}
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
        services={[
          { title: "Sťahovanie v Bratislave", description: "Lokálne sťahovanie po celej Bratislave.", href: "/stahovanie-bratislava", icon: "/icons/truck_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Profesionálne sťahovanie pre domácnosti.", href: "/stahovanie-bytov-domov", icon: "/icons/house_icon.svg" },
          { title: "Vypratávanie", description: "Kompletné vypratanie kancelárií a skladov.", href: "/vypratavanie-bytov-domov", icon: "/icons/vypratavanie_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
