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
  title: "Sťahovanie trezorov a sejfov | Sofoservis",
  description:
    "Profesionálne sťahovanie trezorov a sejfov ✅ Hydraulické zdviháky a plošiny ✅ Kategórie podľa hmotnosti ✅ Obhliadka priestoru zadarmo ✅ Cenová ponuka.",
  keywords:
    "sťahovanie trezoru, stahovanie trezoru, preprava sejfu, sťahovanie sejfu, sťahovanie trezoru Bratislava, preprava trezoru",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-trezorov",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-trezorov",
      en: "https://www.sofoservis.sk/en/safe-moving",
      "x-default": "https://www.sofoservis.sk/stahovanie-trezorov",
    },
  },
  openGraph: {
    title: "Sťahovanie trezorov a sejfov | Sofoservis",
    description:
      "Profesionálne sťahovanie trezorov a sejfov. Hydraulické zdviháky, skúsený tím, diskrétne a bezpečne.",
    url: "https://www.sofoservis.sk/stahovanie-trezorov",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieTrezorovPage() {
  const heroData = {
    title: "Sťahovanie trezorov a sejfov",
    description:
      "Presunutie trezoru alebo sejfu si vyžaduje špeciálne vybavenie, skúsenosti a diskrétnosť. Náš tím disponuje hydraulickými zdvihákmi, motorovými plošinami a ďalšou technikou pre bezpečné sťahovanie trezorov každej hmotnosti — od malých nástenných sejfov až po archívne a bankovné trezory vážiace niekoľko ton.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Sťahovanie trezorov podľa hmotnostnej kategórie",
    description:
      "Každý trezor je iný. Hmotnosť, rozmery a umiestnenie určujú, aké vybavenie a koľko pracovníkov budeme potrebovať.",
    features: [
      {
        image: "/icons/safe_icon.svg",
        title: "Malé sejfy (do 100 kg)",
        description:
          "Nástenné a voľne stojace sejfy do 100 kg zvyčajne zvládneme premiestniť ručne s pomocou manipulačného vozíka. Rýchle a cenovo dostupné riešenie vhodné pre domácnosti aj malé firmy.",
        link: "/stahovanie-trezorov",
      },
      {
        image: "/icons/safe_icon.svg",
        title: "Stredné trezory (100 – 500 kg)",
        description:
          "Trezory tejto hmotnosti vyžadujú hydraulické zariadenia a motorové vozíky. Postup zahŕňa správne zaistenie trezoru, jeho pozdvihnutie a kontrolovaný presun na nové miesto alebo do vozidla.",
        link: "/stahovanie-trezorov",
      },
      {
        image: "/icons/safe_icon.svg",
        title: "Ťažké trezory (500 kg – 2 tony)",
        description:
          "Pre trezory nad 500 kg nasadzujeme špeciálne motorové plošiny a hydraulické zdviháky. Pred realizáciou vždy overujeme nosnosť podlahy a únosnosť konštrukcie budovy.",
        link: "/stahovanie-trezorov",
      },
      {
        image: "/icons/crane_icon.svg",
        title: "Bankové a archívne trezory (nad 2 tony)",
        description:
          "Veľmi ťažké trezory, bankovné trezorové dvere alebo archívne boxy vyžadujú použitie ťažkej techniky vrátane žeriavov. Každú takúto zákazku riešime individuálne s detailným plánom presunu.",
        link: "/stahovanie-trezorov",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Diskrétna preprava",
        description:
          "Chápeme, že sťahovanie trezoru je citlivá záležitosť. Naši pracovníci sú zaviazaní mlčanlivosťou a celý proces prebieha diskrétne. Pracujeme aj mimo pracovného času, ak je to žiadúce.",
        link: "/stahovanie-trezorov",
      },
      {
        image: "/icons/wrench_icon.svg",
        title: "Inštalácia a kotvenie na novom mieste",
        description:
          "Po doprave trezoru na nové miesto zabezpečíme aj jeho inštaláciu a kotvenie do steny alebo podlahy, ak je to potrebné. Odovzdáme vám funkčný a riadne zaistený trezor.",
        link: "/stahovanie-trezorov",
      },
    ],
  };

  const faqData = {
    title: "Často kladené otázky o sťahovaní trezorov",
    items: [
      {
        question: "Koľko stojí sťahovanie trezoru?",
        answer:
          "Cena sťahovania trezoru závisí hlavne od hmotnosti trezoru, poschodia, vzdialenosti a prístupových podmienok. Orientačne: malý sejf do 100 kg od 60 €, stredný trezor 100–500 kg od 150 €, ťažký trezor nad 500 kg od 300 €. Presná cena vznikne po konzultácii a prípadnej obhliadke.",
      },
      {
        question: "Potrebujem na sťahovanie trezoru špeciálne povolenia?",
        answer:
          "Vo väčšine prípadov nie. Výnimkou sú mimoriadne ťažké trezory, pri ktorých je potrebné použiť žeriav na verejnom priestranstve — vtedy môže byť potrebné povolenie od miestneho úradu. Túto administratívu vieme pre vás zabezpečiť.",
      },
      {
        question: "Ako zaistíte, že sa trezor nepoškriabe ani nepoškodí?",
        answer:
          "Trezory balíme do ochranných diek a fólií pred každým presúvaním. Na podlahy ukladáme ochranné podložky. Pohyb trezoru je vždy pomalý a kontrolovaný — používame hydraulické zariadenia, nie hrubú silu.",
      },
      {
        question: "Dokážete presunúť trezor z pivnice alebo suterénu?",
        answer:
          "Áno. Suterény a pivnice sú jednou z náročnejších situácií — úzke priestory, schody bez zábradlia, nízke stropy. Máme skúsenosti s takýmito presunmi a vhodné vybavenie (nízke hydraulické vozíky, plošiny).",
      },
      {
        question: "Čo ak trezor neprejde cez dvere?",
        answer:
          "V takom prípade môžeme využiť sťahovanie cez okno pomocou výťahu alebo žeriavu. Prípadne vieme pomôcť s dočasným rozšírením otvoru — to ale vopred konzultujeme so zákazníkom.",
      },
      {
        question: "Viete sťahovať trezory aj mimo Bratislavy?",
        answer:
          "Áno, pôsobíme na celom Slovensku. Pre zákazky mimo Bratislavy pripravíme individuálnu cenovú ponuku zahŕňajúcu dopravu.",
      },
    ],
  };

  return (
    <main className="bg-white">
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
      <link rel="preload"
        href="/images/mascot/mascot-holding-boxes-mobile.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/mascot-holding-boxes.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)" fetchPriority="high" />

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
          mobileMascotSrc="/images/mascot/mascot-holding-boxes-mobile.svg"
          mobileMascotOffsetY={-44}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>

      <div>
        <Clients />
      </div>

      <div>
        <GoogleReviews />
      </div>

      <HowItWorks />

      <div>
        <Reviews showHeadline={true} />
      </div>

      <div>
        <Features
          title={featuresData.title}
          description={featuresData.description}
          features={featuresData.features}
        />
      </div>

      <div>
        <InstagramFeed />
      </div>

      <div>
        <GoogleReviews showReviewsShowcase={false} />
      </div>

      <div>
        <FAQ
          title={faqData.title}
          items={faqData.items}
          expandableGroup={{
            label: "Všetko o sťahovaní trezorov",
            panels: [
              {
                title: "Orientačný cenník sťahovania trezorov",
                content:
                  "Malý sejf (do 100 kg, prízemie): od 60 €\nStredný trezor (100–500 kg): od 150 €\nŤažký trezor (500 kg – 2 tony): od 300 €\nBankový / archívny trezor (nad 2 tony): individuálna cenová ponuka\n\nK základnej cene sa môže pripočítať príplatok za poschodie, sťahovanie cez okno / žeriav alebo dopravu mimo Bratislavy. Vždy informujeme o cene vopred.",
              },
              {
                title: "Prečo je dôležitá obhliadka pred sťahovaním trezoru?",
                content:
                  "Trezory sú ťažké predmety so špecifickými rozmermi. Pred realizáciou zákazky potrebujeme poznať: hmotnosť a rozmery trezoru, prístup k trezoru (poschodie, výťah, chodba), cieľové miesto a možnosti vstupu, nosnosť podlahy. Na základe obhliadky navrhneme optimálny postup a presné vybavenie. Obhliadku robíme zadarmo.",
              },
              {
                title: "Technické vybavenie pre sťahovanie trezorov",
                content:
                  "Disponujeme hydraulickými zdvihákmi s nosnosťou do 5 ton, motorovými manipulačnými vozíkmi, oceľovými valcami pre posúvanie po podlahe, sťahovacími plošinami a výťahmi na fasáde budovy a špeciálnymi plošinami pre schody. Toto vybavenie nám umožňuje bezpečne premiestniť trezor prakticky v akýchkoľvek podmienkach.",
              },
            ],
          }}
        />
      </div>

      <div>
        <CTA />
      </div>

      <ServicePricing filter={["stahovanie", "vypratavanie", "medzinarodne-stahovanie"]} />
      <TrustBadges />
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[
          {
            title: "Sťahovanie klavíra",
            description: "Špeciálna preprava klavírov, pianín a krídel.",
            href: "/stahovanie-klavira",
            icon: "/icons/crane_icon.svg",
          },
          {
            title: "Sťahovanie strojov a zariadení",
            description: "Presun priemyselných strojov, CNC zariadení a bankomátov.",
            href: "/stahovanie-strojov-zariadeni",
            icon: "/icons/heavy_machinery_icon.svg",
          },
          {
            title: "Sťahovanie ťažkých bremien",
            description: "Komplexné služby pre sťahovanie všetkých typov ťažkých bremien.",
            href: "/stahovanie-tazkych-bremien",
            icon: "/icons/crane_icon.svg",
          },
          {
            title: "Sťahovanie bytov a domov",
            description: "Spoľahlivé sťahovanie bytov a rodinných domov.",
            href: "/stahovanie-bytov-domov",
            icon: "/icons/house_icon.svg",
          },
        ]}
      />
      <FAQJsonLd items={faqData.items} />
    </main>
  );
}
