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
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";

export const metadata = {
  title: "Montáž, skladanie a demontáž nábytku | Sofoservis",
  description:
    "Profesionálna montáž a demontáž nábytku. Výjazd od 20€. IKEA, Asko, Jysk a všetky typy nábytku. Rýchlo a spoľahlivo. Kontaktujte nás ešte dnes!",
  alternates: {
    canonical: "https://www.sofoservis.sk/montaz-nabytku",
      languages: {
        sk: "https://www.sofoservis.sk/montaz-nabytku",
        en: "https://www.sofoservis.sk/en/furniture-assembly",
        "x-default": "https://www.sofoservis.sk/montaz-nabytku",
      },
  },
  keywords:
    "montáž nábytku, skladanie nábytku, demontáž nábytku, montovanie nábytku, skladanie nábytku ikea, poskladanie nábytku, montáž kuchynskej linky, montáž postele, montáž skrine, montáž komody, montáž nábytku bratislava",
  openGraph: {
    title: "Montáž, skladanie a demontáž nábytku | Sofoservis",
    description:
      "Profesionálna montáž a demontáž nábytku. Výjazd od 20€. IKEA, Asko, Jysk a všetky typy nábytku.",
    url: "https://www.sofoservis.sk/montaz-nabytku",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

const faqSchemaItems = [
  {
    question: "Aká je cena za montáž nábytku?",
    answer:
      "Cena za montáž nábytku závisí od typu a množstva nábytku. Výjazd začína od 20€. Pre presný cenový odhad nás kontaktujte s popisom nábytku.",
  },
  {
    question: "Robíte montáž nábytku IKEA?",
    answer:
      "Áno, montujeme nábytok všetkých značiek vrátane IKEA, Asko, Jysk a ďalších. Naši technici poznajú špecifické postupy montáže pre rôznych výrobcov.",
  },
  {
    question: "Ako postupovať pri objednaní montáže nábytku?",
    answer:
      "Môžete nás kontaktovať telefonicky na čísle 0952 044 363, vyplniť kontaktný formulár, alebo nám poslať e-mail. Po prijatí žiadosti vás kontaktujeme pre potvrdenie termínu.",
  },
];

export default function MontazNabytkuPage() {
  // Custom data for Hero section
  const heroData = {
    title: "Montáž, skladanie a demontáž nábytku",
    description:
      "Profesionálne montáž a skladanie nábytku od 20€/hod. Naši skúsení odborníci sa postarajú o poskladanie nového nábytku alebo demontáž a presun existujúceho.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  // Custom data for Features section
  const featuresData = {
    title: "Komplexné služby montáže nábytku",
    description:
      "Profesionálna montáž nábytku všetkých značiek s vlastným náradím a skúseným tímom. Rýchla a kvalitná montáž pre váš domov.",
    features: [
      {
        image: "/icons/wrench_icon.svg", // Perfect for assembly and tools
        title: "Montáž a skladanie nábytku",
        description:
          "Odborná montáž nábytku z IKEA, JYSK, Asko a iných značiek. Poskladáme akýkoľvek typ nábytku podľa návodu rýchlo a presne s vlastným náradím.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/kitchen_icon.svg", // NEW ICON - For kitchen assembly
        title: "Montáž kuchynských liniek",
        description:
          "Kompletná montáž kuchynských liniek vrátane spotrebičov. Presná inštalácia podľa projektu s funkčným výsledkom.",
        link: "/montaz-kuchyne",
      },
      {
        image: "/icons/furniture_icon.svg", // For furniture moving services
        title: "Sťahovanie nábytku",
        description:
          "Profesionálna demontáž nábytku pred sťahovaním a následná montáž na novom mieste. Bezpečná preprava a inštalácia.",
        link: "/stahovanie-preprava-nabytku",
      },
      {
        image: "/icons/truck_icon.svg", // For moving services
        title: "Sťahovanie bytov a domov",
        description:
          "Kompletné sťahovacie služby vrátane demontáže a montáže nábytku. Presťahujeme váš domov s kompletným servisom.",
        link: "/stahovanie-bytov-domov",
      },
      {
        image: "/icons/curtain_icon.svg", // NEW ICON - For curtains and blinds
        title: "Montáž garniží a závesných systémov",
        description:
          "Profesionálna montáž garniží, závesných systémov a roliet. Zabezpečíme správne upevnenie do rôznych typov stien so všetkými kotviacimi prvkami.",
        link: "/montaz-nabytku",
      },
      {
        image: "/icons/repair_icon.svg", // NEW ICON - For repairs and adjustments
        title: "Opravy a úpravy nábytku",
        description:
          "Drobné opravy, úpravy a dokončovacie práce na vašom nábytku. Odstránime nedostatky, vŕtame otvory pre káble a zabezpečíme perfektný vzhľad.",
        link: "/hodinovy-manzel-majster",
      },
    ],
  };

  return (
    <main className="bg-white">
      <link rel="preload"
        href="/images/mascot/montaz-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/montaz-mascot.svg"
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
          mascotSrc="/images/mascot/montaz-mascot.svg"
          desktopMascotDynamicHeight
          desktopMascotScaleMultiplier={1.1}
          desktopMascotTopOffsetPct={-0.05}
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
          mascotSrc="/images/mascot/montaz-mascot.svg"
          mobileMascotSrc="/images/mascot/montaz-mascot.svg"
          mobileMascotOffsetY={-45}
          mobileFormOffsetY={32}
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

      {/* Service Pricing section */}
      <ServicePricing filter={["montaz-nabytku", "montaz-kuchyne", "hodinovy-manzel"]} />

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
          title="Často kladené otázky o montáži a demontáži nábytku"
          items={[
            {
              question: "Ako dlho trvá montáž typického nábytku?",
              answer:
                "Doba montáže závisí od typu a komplexnosti nábytku. Pre orientáciu uvádzame približné časy: jednoduchá komoda alebo nočný stolík: 30-60 minút; posteľ: 45-90 minút; štandardná skriňa: 1,5-3 hodiny. Pre kuchynskú linku je potrebné počítať s 2-3 pracovnými dňami, pretože ide o komplexnú prácu zahŕňajúcu presné meranie, montáž skriniek, osadenie spotrebičov a dokončovacie práce. Tieto časy sú orientačné a môžu sa líšiť podľa konkrétneho modelu, výrobcu, prístupnosti priestoru a ďalších faktorov. Pri objednaní služby vám vieme poskytnúť presnejší odhad po zhodnotení vášho konkrétneho nábytku a situácie.",
            },
            {
              question: "Koľko stojí montáž nábytku?",
              answer:
                "Cena za montáž nábytku závisí od viacerých faktorov: typu a zložitosti nábytku, množstva častí, času potrebného na montáž a lokality. Naše orientačné ceny sú: menšie kusy nábytku (stolík, polica): 20-40€; stredne veľký nábytok (posteľ, komoda): 40-70€; šatník: 90€/m; kuchynská linka: od 120€/m (vrátane osadenia spotrebičov, bez zapojenia). Pre väčšie projekty alebo montáž viacerých kusov nábytku ponúkame výhodnejšie balíkové ceny. Presná cena vám bude stanovená po bezplatnej konzultácii alebo na základe fotografií a popisu, ktoré nám pošlete.",
            },
            {
              question: "Montujete nábytok len z konkrétnych obchodov?",
              answer:
                "Nie, montujeme nábytok od všetkých výrobcov a z akýchkoľvek obchodov. Máme rozsiahle skúsenosti s nábytkom z IKEA, JYSK, Asko, Möbelix, Sconto, Nábytok Tempo, Kika, Kinekus, Lidl a mnohých iných reťazcov. Rovnako dobre si poradíme aj s nábytkom od menších lokálnych výrobcov či s nábytkom na mieru. Náš tím je vyškolený na prácu s rôznymi typmi montážnych systémov a dokáže sa prispôsobiť akémukoľvek návodu. V prípade, že ide o špeciálny alebo atypický kus nábytku, prosíme o informáciu vopred, aby sme sa mohli pripraviť na prípadné špecifické požiadavky.",
            },
            {
              question: "Potrebujem mať vlastné náradie na montáž nábytku?",
              answer:
                "Nie, nemusíte mať vlastné náradie. Naši montážni technici prídu plne vybavení všetkým potrebným profesionálnym náradím pre montáž akéhokoľvek typu nábytku. Disponujeme kompletnými sadami skrutkovačov, kľúčov, vŕtačiek, píl a ďalších špecializovaných nástrojov potrebných pre precíznu a efektívnu montáž. Stačí, ak budete mať pripravený samotný nábytok (ideálne ešte v originálnom balení) a zabezpečíte dostatočný priestor pre montáž. V prípade montáže nábytku, ktorý vyžaduje pripevnenie na stenu, sa postaráme aj o vŕtanie a kotvenie. Ak by bol potrebný nejaký špecifický typ kotvenia pre váš typ steny, budeme vás o tom vopred informovať.",
            },
            {
              question: "Ako postupovať pri objednaní montáže nábytku?",
              answer:
                "Objednanie našich služieb montáže nábytku je jednoduché. Môžete nás kontaktovať telefonicky na čísle 0952 044 363, vyplniť kontaktný formulár na našej stránke, alebo nám poslať e-mail. Pri objednávke je užitočné uviesť: typ a množstvo nábytku, ktorý potrebujete zmontovať (ideálne s názvami produktov a výrobcom); preferovaný termín montáže; presnú adresu a kontaktné údaje; prípadné špecifické požiadavky alebo informácie o prístupe. Po prijatí vašej žiadosti vás budeme kontaktovať pre potvrdenie termínu a dohodnutie detailov. Ak máte k dispozícii fotografie nábytku alebo návodov, môžete nám ich poslať pre lepší odhad časovej a cenovej náročnosti. Montáž nábytku je možné objednať samostatne alebo ako súčasť našich sťahovacích služieb.",
            },
          ]}
          expandableGroup={{
            label: "Všetko o montáži nábytku",
            panels: [
              {
                title: "Prečo je profesionálna montáž lepšia ako svojpomocná?",
                content:
                  "Zdanlivo jednoduchá montáž nábytku môže skrývať prekvapenia — chýbajúce diely, nejasné návody, nevhodné náradie alebo nesprávne kotvenie do steny. Priemerný zákazník strávi montážou skrine 3-5 hodín, profesionálny technik zvládne tú istú skriňu za 1-1,5 hodiny.\n\nProfesionálna montáž tiež zabraňuje poškodeniu nábytku — zlé zarovnanie, prasknuté panely alebo nesprávne naskrutkované závesy sú bežné problémy pri svojpomocnej montáži. Náš tím prichádza s kompletným vybavením a rokmi skúseností s montážou nábytku všetkých značiek.",
              },
              {
                title: "Montáž nábytku pri sťahovaní — výhody balíčka",
                content:
                  "Kombinácia sťahovania a montáže nábytku v jednej zákazke šetrí čas aj peniaze. Naši pracovníci demontujú nábytok na starom mieste, bezpečne ho prevezú a na novom mieste opäť poskladajú — všetko v jeden deň.\n\nPri sťahovaní odporúčame demontovať skrine, postele a rozkladacie sedačky — šetríte tým miesto vo vozidle a znižujete riziko poškodenia pri preprave. Montáž na novom mieste prebieha hneď po dovoze, takže sa môžete ubytovať okamžite.",
              },
              {
                title: "Šatníky a vstavaný nábytok — špeciálna montáž",
                content:
                  "Montáž vstavaných šatníkov a nábytku na mieru vyžaduje presné meranie, úrovňovanie a kotvenie do stien, podlahy alebo stropu. Nesprávne kotvenie môže viesť k deformáciám alebo pádu skrine — preto odporúčame zveriť túto prácu profesionálom.\n\nNáš tím má skúsenosti s montážou systémov PAX (IKEA), Hülsta, Wiemann, Nolte a ďalších. Pri vstavaných skrinkách na mieru spolupracujeme so stolármi — doladíme posledné detaily priamo na stavbe.",
              },
              {
                title: "Záruky a zodpovednosť pri montáži nábytku",
                content:
                  "Na všetky naše montážne práce poskytujeme záruku 12 mesiacov. Táto záruka sa vzťahuje na kvalitu odvedenej práce — správne zarovnanie, pevnosť spojov, funkčnosť posuvných dverí a zásuviek.\n\nNa samotný nábytok sa vzťahuje záruka výrobcu (zvyčajne 2-5 rokov). V prípade, že počas montáže dôjde k poškodeniu materiálu alebo komponentu, bezodkladne to hlásite zákazníkovi a dohodujeme riešenie — buď objednanie náhradného dielu alebo adekvátna zľava.",
              },
            ],
          }}
        />
      </div>

      {/* CTA section */}
      <div>
        <CTA
          title="Potrebujete profesionálne poskladať nábytok?"
          description="Ušetrite si čas, nervy a energiu pri montáži nábytku. Naši odborníci poskladajú váš nábytok rýchlo, presne a bez poškodenia. Či už ide o nový nábytok z obchodu alebo presun existujúceho zariadenia, spoľahnite sa na profesionálov."
          buttonText="Objednať montáž nábytku"
          imageSrc="/images/sofoservis montaz.jpg"
        />
      </div>
    
      <TrustBadges />
      <ContactFormSection />


            <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Montáž kuchyne", description: "Montáž kuchynských liniek od 120€/m.", href: "/montaz-kuchyne", icon: "/icons/kitchen_icon.svg" },
          { title: "Hodinový manžel", description: "Drobné opravy a práce v domácnosti.", href: "/hodinovy-manzel-majster", icon: "/icons/repair_icon.svg" },
          { title: "Sťahovanie bytov a domov", description: "Vrátane demontáže a montáže nábytku.", href: "/stahovanie-bytov-domov", icon: "/icons/truck_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqSchemaItems} />
    </main>
  );
}
