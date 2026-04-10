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
  title: "Sťahovanie klavíra, pianína a krídla | Sofoservis",
  description:
    "Profesionálne sťahovanie klavírov, pianín a krídel ✅ Špeciálne klavírne vozíky a lyže ✅ Bezpečná manipulácia s cennými nástrojmi ✅ Obhliadka priestoru.",
  keywords:
    "sťahovanie klavíra, stahovanie klavira, sťahovanie pianína, preprava klavíra, sťahovanie krídla, sťahovanie hudobného nástroja Bratislava",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-klavira",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-klavira",
      en: "https://www.sofoservis.sk/en/piano-moving",
      "x-default": "https://www.sofoservis.sk/stahovanie-klavira",
    },
  },
  openGraph: {
    title: "Sťahovanie klavíra, pianína a krídla | Sofoservis",
    description:
      "Profesionálne sťahovanie klavírov, pianín a krídel. Špeciálne vybavenie, skúsený tím, bezpečná manipulácia.",
    url: "https://www.sofoservis.sk/stahovanie-klavira",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function StahovanieKlaviraPage() {
  const heroData = {
    title: "Sťahovanie klavíra a pianína",
    description:
      "Zverte sťahovanie vášho klavíra, pianína alebo krídla odborníkom. Disponujeme špeciálnymi klavírnymi vozíkmi, lyžami a obalovými materiálmi pre bezpečnú.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  const featuresData = {
    title: "Čo zahŕňa sťahovanie klavíra?",
    description:
      "Každý typ hudobného nástroja vyžaduje iný prístup. Náš tím má skúsenosti s presúvaním pianín, vzpriamených klavírov aj koncertných krídel.",
    features: [
      {
        image: "/icons/crane_icon.svg",
        title: "Pianíno (vzpriamený klavír)",
        description:
          "Pianíno váži spravidla 200–300 kg. Používame špeciálny klavírny vozík s nastaviteľnou výškou a mäkkými remienkami, ktorý chráni nástroj aj podlahu. Pri prenose po schodoch nasadzujeme klavírne lyže.",
        link: "/stahovanie-klavira",
      },
      {
        image: "/icons/crane_icon.svg",
        title: "Koncertné krídlo",
        description:
          "Krídlo je rozmerovo aj hmotnostne najnáročnejší nástroj — môže vážiť aj 500 kg. Demontujeme pedálovú lyru a veko, nástroj zabezpečíme špeciálnymi ochrannými obalmi a prepravíme na špeciálnom vozíku.",
        link: "/stahovanie-klavira",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Zabezpečenie a balenie",
        description:
          "Pred presúvaním klavír dôkladne zabalíme do ochranných diek a fólií, klávesy zafixujeme a mechanizmus zablokujeme. Nástroj tak ostane chránený pred nárazmi a výkyvmi teploty.",
        link: "/stahovanie-klavira",
      },
      {
        image: "/icons/wrench_icon.svg",
        title: "Sťahovanie cez okno alebo balkón",
        description:
          "V prípade úzkych schodísk alebo výťahu, ktorý kapacitne nestačí, využívame sťahovací výťah alebo žeriav. Tento postup je bezpečnejší ako snaha pretlačiť nástroj cez nevhodné priestory.",
        link: "/stahovanie-klavira",
      },
      {
        image: "/icons/house_icon.svg",
        title: "Ladenie po sťahovaní",
        description:
          "Po každom presune sa klavír potrebuje aklimatizovať a nasledne preladiť. Na požiadanie vieme sprostredkovať ladenie od skúseného ladičа, aby bol váš nástroj ihneď pripravený na hranie.",
        link: "/stahovanie-klavira",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Sťahovanie antických nástrojov",
        description:
          "Historické a antické klavíry vyžadujú mimoriadnu opatrnosť. Našou prioritou je zachovanie originálnych povrchov a mechanizmov. Každú zákazku konzultujeme individuálne.",
        link: "/stahovanie-klavira",
      },
    ],
  };

  const faqData = {
    title: "Často kladené otázky o sťahovaní klavíra",
    items: [
      {
        question: "Koľko stojí sťahovanie klavíra?",
        answer:
          "Cena sťahovania klavíra závisí od typu nástroja (pianíno, klavír, krídlo), vzdialenosti, poschodia a prístupových podmienok. Orientačne sa pohybujeme od 80 € za jednoduchý presun pianína v rámci jedného mesta. Presnejšiu cenu vypočítame po zadaní detailov — ponuku pripravíme zadarmo a nezáväzne.",
      },
      {
        question: "Ako prebieha sťahovanie klavíra krok za krokom?",
        answer:
          "Najskôr vykonáme obhliadku priestoru (prípadne virtuálnu cez fotky). Potom dohodneme termín a pripravíme potrebné vybavenie. V deň sťahovania klavír zabalíme, zafixujeme mechanizmus, odnesieme na vozík a naložíme do auta. Na novom mieste nástroj vyložíme, uložíme na dohodnuté miesto a postaráme sa o jeho rozbalenie.",
      },
      {
        question: "Musím vopred demontovať niečo na klavíri?",
        answer:
          "Nie, o všetko sa postará náš tím. Pri krídlach demontujeme pedálovú lyru a veko priamo na mieste. Klávesy a mechanizmus špeciálne zafixujeme, aby nedošlo k poškodeniu počas prepravy.",
      },
      {
        question: "Čo robiť, ak sa klavír nezmestí cez dvere alebo schodisko?",
        answer:
          "Toto je pomerne bežná situácia, najmä v starších bytovkách. Riešime to pomocou sťahovacieho výťahu upevneného na fasáde budovy alebo spustením cez okno/balkón. Pred sťahovaním vždy overíme rozmery a navrhneme optimálny postup.",
      },
      {
        question: "Poistenie klavíra počas sťahovania?",
        answer:
          "Áno, naša zodpovednosť za škodu je štandardne zahrnutá v cene zákazky. Pre mimoriadne cenné nástroje (antické klavíry, koncertné krídla) odporúčame uzavrieť dodatočné poistenie cez poisťovňu — radi vám poradíme.",
      },
      {
        question: "Kedy treba klavír preladiť po sťahovaní?",
        answer:
          "Odborníci odporúčajú počkať 4–6 týždňov, kým sa nástroj aklimatizuje na novú vlhkosť a teplotu, a až potom ho preladiť. Ak sa sťahujete v zime a klavír prechodil výraznou zmenou teploty, môže byť potrebné ladenie skôr.",
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
        benefits={["Špeciálne klavírne vozíky", "Poistenie zahrnuté", "Obhliadka zdarma"]}
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
            label: "Všetko o sťahovaní klavíra",
            panels: [
              {
                title: "Orientačný cenník sťahovania klavíra",
                content:
                  "Pianíno (do 3. poschodia, bez výťahu): od 80 €\nPianíno (4. poschodie a vyššie alebo cez okno): od 120 €\nKonvenčný klavír (vzpriamený, do 300 kg): od 100 €\nKoncertné krídlo (vrátane demontáže): od 200 €\nPreprava v rámci SR (mimo Bratislavy): cena závisí od vzdialenosti, pýtajte sa na cenovú ponuku.\n\nVšetky ceny sú orientačné. Presná cena závisí od konkrétnych podmienok — počtu poschodí, prístupovosti, vzdialenosti a ďalších faktorov. Cenovú ponuku pripravíme zadarmo.",
              },
              {
                title: "Prečo nezdravovať klavír sám?",
                content:
                  "Pokus o sťahovanie klavíra bez odbornej pomoci môže viesť k poraneniu, poškodeniu nástroja, poškodeniu stien a schodísk, alebo dokonca pádu z výšky. Klavír nie je iba ťažký predmet — je to citlivý mechanizmus zo stoviek súčiastok. Naša firma má potrebné vybavenie, skúsenosti aj zodpovednosť za škody, aby celý presun prebehol bezpečne.",
              },
              {
                title: "Sťahovanie klavíra v Bratislave a po celom Slovensku",
                content:
                  "Naše sťahovacie služby pre klavíre poskytujeme v Bratislave a v celom okolí, ale taktiež realizujeme prepravy po celom Slovensku. Ak potrebujete prepravu klavíra na väčšiu vzdialenosť — napríklad z Bratislavy do Košíc, Žiliny alebo Prešova — kontaktujte nás a pripravíme individuálnu cenovú ponuku.",
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
            title: "Sťahovanie pianína",
            description: "Dedikovaná stránka pre sťahovanie pianín a pián.",
            href: "/stahovanie-pianina",
            icon: "/icons/crane_icon.svg",
          },
          {
            title: "Sťahovanie trezorov",
            description: "Bezpečná preprava trezorov a sejfov každej hmotnosti.",
            href: "/stahovanie-trezorov",
            icon: "/icons/safe_icon.svg",
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
        ]}
      />
      <FAQJsonLd items={faqData.items} />
    </main>
  );
}
