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
  title: "Sťahovanie pianína | Bezpečná preprava pianína | Sofoservis",
  description:
    "Profesionálne sťahovanie pianína ✅ Špeciálne klavírne vozíky a lyže ✅ Sťahovanie po schodoch aj cez okno ✅ Poistenie zahrnuté ✅ Cenová ponuka zdarma!",
  keywords:
    "sťahovanie pianína, stahovanie pianina, preprava pianína, sťahovanie piana, sťahovanie pianína Bratislava, presun pianína",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-pianina",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-pianina",
      en: "https://www.sofoservis.sk/en/upright-piano-moving",
      "x-default": "https://www.sofoservis.sk/stahovanie-pianina",
    },
  },
  openGraph: {
    title: "Sťahovanie pianína | Sofoservis",
    description:
      "Profesionálne sťahovanie pianína. Špeciálne vybavenie, skúsený tím, bezpečná a poistená preprava.",
    url: "https://www.sofoservis.sk/stahovanie-pianina",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovaniePianinaPage() {
  const heroData = {
    title: "Sťahovanie pianína",
    description:
      "Pianíno je ťažký a citlivý nástroj — bežne váži 200 až 300 kg a je plné jemných mechanizmov. Zverte jeho presun odborníkom. Náš tím disponuje špeciálnymi.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  const featuresData = {
    title: "Ako sťahujeme pianíno?",
    description:
      "Každé sťahovanie pianína riešime individuálne. Postup závisí od hmotnosti nástroja, poschodia a prístupových podmienok.",
    features: [
      {
        image: "/icons/crane_icon.svg",
        title: "Špeciálny klavírny vozík",
        description:
          "Na presun pianína používame profesionálne klavírne vozíky s nastaviteľnou výškou a mäkkými remienkami, ktoré chránia nástroj aj podlahu. Vozík umožňuje kontrolovaný pohyb aj v úzkych chodbách.",
        link: "/stahovanie-pianina",
      },
      {
        image: "/icons/crane_icon.svg",
        title: "Klavírne lyže na schody",
        description:
          "Pri sťahovaní pianína po schodoch nasadzujeme špeciálne klavírne lyže — kovové kolejnice, po ktorých sa nástroj bezpečne a kontrolovane spúšťa alebo zdvíha po schodišti.",
        link: "/stahovanie-pianina",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Balenie a ochrana nástroja",
        description:
          "Pred presúvaním pianíno zabalíme do hrubých ochranných diek a fólií. Klávesy zafixujeme, aby sa počas prepravy nezabuchávali, a mechanizmus zablokujeme proti otrasom.",
        link: "/stahovanie-pianina",
      },
      {
        image: "/icons/wrench_icon.svg",
        title: "Sťahovanie cez okno alebo balkón",
        description:
          "Ak schodisko nie je vhodné — príliš úzke, ostré zatáčky alebo schody bez zábradlia — pianíno spustíme cez okno alebo balkón pomocou sťahovacieho výťahu uchyteného na fasáde budovy.",
        link: "/stahovanie-pianina",
      },
      {
        image: "/icons/house_icon.svg",
        title: "Uloženie na novom mieste",
        description:
          "Po doprave pianína na nové miesto ho opatrne rozbalíme a uložíme presne tam, kde ho chcete mať. Dbáme na to, aby sa nástroj nedostal do blízkosti radiátorov alebo vlhkých stien.",
        link: "/stahovanie-pianina",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Sprostredkovanie ladenia",
        description:
          "Po každom presune sa pianíno potrebuje aklimatizovať a preladiť. Na požiadanie vieme sprostredkovať skúseného ladiča, ktorý váš nástroj naladí na novom mieste.",
        link: "/stahovanie-pianina",
      },
    ],
  };

  const faqData = {
    title: "Často kladené otázky o sťahovaní pianína",
    items: [
      {
        question: "Koľko stojí sťahovanie pianína?",
        answer:
          "Cena sťahovania pianína sa pohybuje orientačne od 80 € pri jednoduchom presune v rámci jedného mesta. Výsledná cena závisí od počtu poschodí, prístupových podmienok, vzdialenosti a potreby sťahovania cez okno. Cenovú ponuku pripravíme zadarmo po vyplnení formulára.",
      },
      {
        question: "Ako dlho trvá sťahovanie pianína?",
        answer:
          "Samotný presun pianína v rámci jednej budovy zvyčajne trvá 1 až 2 hodiny. Ak je potrebné sťahovanie cez okno, plánujeme viac času — spravidla 2 až 4 hodiny vrátane prípravy výťahu. Preprava medzi mestami sa pohybuje podľa vzdialenosti.",
      },
      {
        question: "Musím pred sťahovaním pianína niečo urobiť?",
        answer:
          "Nie, o všetko sa postará náš tím. Odporúčame len uvoľniť prístup k nástroju a skontrolovať, či nie sú na schodisku žiadne prekážky. Samotné balenie, demontáž nôh (ak je potrebná) a zaistenie mechanizmu vykonáme my.",
      },
      {
        question: "Čo ak sa pianíno nezmestí cez dvere alebo schodisko?",
        answer:
          "Toto je pomerne bežná situácia, najmä v starších bytovkách. V takom prípade využijeme sťahovací výťah na fasáde budovy alebo spustíme pianíno cez balkón či okno. Vždy vopred overíme rozmery a navrhneme optimálny postup.",
      },
      {
        question: "Kedy treba pianíno preladiť po sťahovaní?",
        answer:
          "Odborníci odporúčajú počkať 4 až 6 týždňov po sťahovaní, kým sa nástroj aklimatizuje na novú vlhkosť a teplotu, a až potom ho preladiť. V zimnom období, keď je zmena teploty výrazná, môže byť ladenie potrebné skôr.",
      },
      {
        question: "Sťahujete pianíná aj mimo Bratislavy?",
        answer:
          "Áno, pôsobíme na celom Slovensku. Pre presun pianína mimo Bratislavy pripravíme individuálnu cenovú ponuku zahŕňajúcu dopravu. Kontaktujte nás s detailami a my vám pošleme kalkuláciu zadarmo.",
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
        benefits={["Klavírne lyže na schody", "Poistenie zahrnuté", "Obhliadka zdarma"]}
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
            label: "Všetko o sťahovaní pianína",
            panels: [
              {
                title: "Orientačný cenník sťahovania pianína",
                content:
                  "Pianíno (prízemie alebo 1. poschodie s výťahom): od 80 €\nPianíno (2.–3. poschodie bez výťahu): od 100 €\nPianíno (4. poschodie a vyššie): od 130 €\nSťahovanie cez okno / balkón (sťahovací výťah): príplatok od 50 €\nPreprava mimo Bratislavy: cena závisí od vzdialenosti\n\nVšetky ceny sú orientačné. Presná cena závisí od konkrétnych podmienok. Cenovú ponuku pripravíme zadarmo.",
              },
              {
                title: "Prečo nesťahovať pianíno svojpomocne?",
                content:
                  "Pianíno nie je len ťažký predmet — je to jemný mechanizmus zo stoviek súčiastok, ktoré môže poškodiť aj jediný nárazy alebo nesprávne naklonenie. Okrem toho hrozí poranenie pri prenose po schodoch, poškodenie stien a schodísk a v horšom prípade aj pád nástroja.\n\nNaša firma má potrebné vybavenie, vyškolený personál aj poistenie zodpovednosti. Celý presun prebehne rýchlo, bezpečne a bez nervov.",
              },
              {
                title: "Sťahovanie pianína v Bratislave a po celom Slovensku",
                content:
                  "Naše sťahovacie služby pre pianíná poskytujeme predovšetkým v Bratislave a okolí, ale realizujeme aj prepravy po celom Slovensku. Pianíno vám prevezieme kamkoľvek — z Bratislavy do Košíc, Žiliny, Nitry, Prešova alebo iného mesta. Kontaktujte nás pre individuálnu cenovú ponuku.",
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
            title: "Sťahovanie klavíra a krídla",
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
