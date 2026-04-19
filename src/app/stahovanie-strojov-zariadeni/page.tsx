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
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata = {
  title: "Sťahovanie strojov a zariadení | CNC, výrobné | Sofoservis",
  description:
    "Profesionálne sťahovanie priemyselných strojov a zariadení ✅ CNC stroje, výrobné linky, bankomatov ✅ Hydraulická technika ✅ Minimalizujeme prestoje.",
  keywords:
    "sťahovanie strojov, preprava CNC strojov, sťahovanie výrobných zariadení, preprava bankomatu, sťahovanie priemyselných strojov, transport strojov Bratislava",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-strojov-zariadeni",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-strojov-zariadeni",
      en: "https://www.sofoservis.sk/en/machinery-moving",
      "x-default": "https://www.sofoservis.sk/stahovanie-strojov-zariadeni",
    },
  },
  openGraph: {
    title: "Sťahovanie strojov a zariadení | Sofoservis",
    description:
      "Profesionálne sťahovanie priemyselných strojov, CNC zariadení a bankomátov. Skúsený tím, hydraulická technika.",
    url: "https://www.sofoservis.sk/stahovanie-strojov-zariadeni",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieStrojovZariadeniPage() {
  const heroData = {
    title: "Sťahovanie strojov a priemyselných zariadení",
    description:
      "Presun výrobných strojov, CNC zariadení, výrobných liniek alebo bankomátov si vyžaduje odborný prístup a špeciálnu techniku. Náš tím má skúsenosti s relokáciou priemyselných zariadení s minimálnym dopadom na prevádzku. Plánujeme presun na mieru — aj vo víkendoch a počas nočných zmien.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Typy zariadení, ktoré sťahujeme",
    description:
      "Od jednoduchých výrobných strojov až po celé výrobné linky — každú zákazku plánujeme individuálne s ohľadom na bezpečnosť a minimalizáciu prestojov.",
    features: [
      {
        image: "/icons/heavy_machinery_icon.svg",
        title: "CNC stroje a obrábacie centrá",
        description:
          "CNC stroje sú citlivé na otrasy a nesprávne manipulovanie. Pred demontážou zdokumentujeme stav zariadenia, zablokujeme pohyblivé časti a stroj zabezpečíme podľa pokynov výrobcu. Presun vykonávame hydraulickými plošinami.",
        link: "/stahovanie-strojov-zariadeni",
      },
      {
        image: "/icons/heavy_machinery_icon.svg",
        title: "Výrobné linky a automatizované zariadenia",
        description:
          "Presun výrobnej linky vyžaduje koordináciu s technológmi a elektrikármi. Zákazku naplánujeme tak, aby bola linka čo najskôr opäť v prevádzke na novom mieste. Pracujeme aj počas plánovaných odstávok.",
        link: "/stahovanie-strojov-zariadeni",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Bankomaty a finančné zariadenia",
        description:
          "Presun bankomatu si vyžaduje diskrétnosť, bezpečnostné opatrenia a koordináciu s bankou alebo leasingovou spoločnosťou. Máme skúsenosti s relokáciou bankomátov aj do priestorov s obmedzeným prístupom.",
        link: "/stahovanie-strojov-zariadeni",
      },
      {
        image: "/icons/crane_icon.svg",
        title: "Tlačiarenské a polygrafické stroje",
        description:
          "Ofsetové tlačiarne, rezačky a iné polygrafické stroje môžu vážiť niekoľko ton a mať presné geometrické požiadavky. Po presune vieme zabezpečiť aj ich urovnanie a prípadnú rekalibráciu.",
        link: "/stahovanie-strojov-zariadeni",
      },
      {
        image: "/icons/heavy_machinery_icon.svg",
        title: "Priemyselné lisy a hydraulické zariadenia",
        description:
          "Hydraulické lisy, ohraňovacie stroje a iné ťažké priemyselné zariadenia premiestnime pomocou hydraulických valcov a ťažkých plošín. Hmotnosť do niekoľkých desiatok ton nie je problém.",
        link: "/stahovanie-strojov-zariadeni",
      },
      {
        image: "/icons/wrench_icon.svg",
        title: "Klimatizačné a vzduchotechnické jednotky",
        description:
          "Veľké priemyselné klimatizácie a vzduchotechnické jednotky na strechách alebo v technických priestoroch sú ďalšou oblasťou, kde pomáhame s bezpečným demontážou a premiestnením.",
        link: "/stahovanie-strojov-zariadeni",
      },
    ],
  };

  const faqData = {
    title: "Často kladené otázky o sťahovaní strojov a zariadení",
    items: [
      {
        question: "Ako naplánujete sťahovanie výrobného stroja?",
        answer:
          "Proces začíname konzultáciou a obhliadkou. Posúdime hmotnosť a rozmery zariadenia, prístupové trasy, únosnosť podláh a požiadavky výrobcu. Následne vypracujeme plán presunu vrátane harmonogramu, potrebného vybavenia a počtu pracovníkov. Plán konzultujeme so zákazníkom pred samotnou realizáciou.",
      },
      {
        question: "Dá sa presťahovať výrobný stroj bez prerušenia výroby?",
        answer:
          "Pri správnom plánovaní je možné minimalizovať prestoje. Presun realizujeme počas víkendov alebo plánovaných odstávok. Vopred pripravíme nové miesto vrátane prívodov energií, aby technológovia mohli stroj čo najrýchlejšie zapojiť a otestovať.",
      },
      {
        question: "Postaráte sa aj o demontáž a opätovnú montáž zariadenia?",
        answer:
          "Poskytujeme mechanickú demontáž a montáž zariadení. Elektrickú a pneumatickú inštaláciu koordinujeme s externými technikmi zákazníka alebo dodávateľa zariadenia — to závisí od konkrétneho prípadu.",
      },
      {
        question: "Čo ak je zariadenie ukotvené do betónovej podlahy?",
        answer:
          "Kotviace skrutky a chemické ukotvenia zvyčajne demontujeme pred presúvaním. V prípade potreby spolupracujeme so stavebnými firmami pre vyvŕtanie alebo opravu podlahy.",
      },
      {
        question: "Aká je nosnosť vašej techniky?",
        answer:
          "Naša hydraulická technika zvládne zariadenia s hmotnosťou do 20 ton. Pre ťažšie zariadenia spolupracujeme s externými partnermi disponujúcimi ťažkou technikou (žeriavy, nízkoložné návesy).",
      },
      {
        question: "Sťahujete stroje aj mimo Bratislavy?",
        answer:
          "Áno, realizujeme zákazky po celom Slovensku. Pre väčšie projekty (relokácia celej výrobnej linky, strojový park) zabezpečujeme komplexnú logistiku vrátane prepravy na nové miesto.",
      },
    ],
  };

  return (
    <main className="bg-white">
      <Hero
        title={heroData.title}
        description={heroData.description}
        formTitle={heroData.formTitle}
        formSubtitle={heroData.formSubtitle}
        backgroundImage={heroData.backgroundImage}
        benefits={["Hydraulická technika", "Minimalizujeme prestoje", "Obhliadka zdarma"]}
      />

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
            label: "Všetko o sťahovaní strojov a zariadení",
            panels: [
              {
                title: "Ako prebieha sťahovanie výrobného stroja — krok za krokom",
                content:
                  "1. Konzultácia a obhliadka — zisťujeme typ, hmotnosť, rozmery a prístupové podmienky.\n2. Plán presunu — pripravíme harmonogram, potrebné vybavenie a kapacity.\n3. Príprava nového miesta — overenie nosnosti, prípojky energií.\n4. Demontáž — mechanická demontáž kotevných prvkov a ochrán.\n5. Presun — hydraulickými plošinami a vozíkmi, naloženie na transport.\n6. Preprava na nové miesto.\n7. Inštalácia — uloženie, urovnanie, mechanická montáž.\n8. Odovzdanie — stroj je pripravený na elektrickú inštaláciu a spustenie.",
              },
              {
                title: "Technické vybavenie pre sťahovanie strojov",
                content:
                  "Pre bezpečný presun priemyselných zariadení využívame: hydraulické zdviháky a valce (nosnosť do 20 t), motorové ploché vozíky a platformy, oceľové valce pre posúvanie po betóne, systémy Skates pre rotačný pohyb, sťahovacie pásy a upínacie reťaze, plošinové oje pre naklopenie a usadenie. Pre zákazky vyžadujúce ťažkú techniku spolupracujeme s partnermi disponujúcimi autodvihákmi a ťažkými žeriavmi.",
              },
              {
                title: "Kedy je vhodný čas na relokáciu výrobného zariadenia?",
                content:
                  "Ideálny čas pre presun výrobného stroja je počas plánovanej odstávky, údržbovej pauzy alebo pred/po dovolenkovom uzatvorení závodu. Pre zákazníkov, ktorí nemôžu prerušiť výrobu, plánujeme presun počas víkendov alebo nočných smien. Vždy odporúčame dostatočnú časovú rezervu pre prípadné komplikácie.",
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
            title: "Sťahovanie trezorov",
            description: "Bezpečná preprava trezorov a sejfov každej hmotnosti.",
            href: "/stahovanie-trezorov",
            icon: "/icons/safe_icon.svg",
          },
          {
            title: "Sťahovanie ťažkých bremien",
            description: "Komplexné služby pre sťahovanie všetkých typov ťažkých bremien.",
            href: "/stahovanie-tazkych-bremien",
            icon: "/icons/crane_icon.svg",
          },
          {
            title: "Sťahovanie kancelárií a firiem",
            description: "Profesionálne sťahovanie firiem s minimom prestojov.",
            href: "/stahovanie-kancelarii-firiem",
            icon: "/icons/briefcase_icon.svg",
          },
        ]}
      />
      <FAQJsonLd items={faqData.items} />
    </main>
  );
}
