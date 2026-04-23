import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Vypratávanie pozostalosti — diskrétne | Sofoservis",
  description:
    "Citlivé a diskrétne vypratávanie nehnuteľností po zosnulom ✅ Empatický prístup ✅ Triedenie cenností a osobných vecí ✅ Ekologická likvidácia ✅ Obhliadka.",
  keywords:
    "vypratavanie pozostalosti, vypratanie bytu po zosnulom, vypratavanie po zosnulom, vypratanie nehnutelnosti po zosnulom, vypratavanie dedictva, likvidacia pozostalosti",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-pozostalosti",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-pozostalosti",
      en: "https://www.sofoservis.sk/en/estate-clearance-bereavement",
      "x-default": "https://www.sofoservis.sk/vypratavanie-pozostalosti",
    },
  },
  openGraph: {
    title: "Vypratávanie pozostalosti — po zosnulom diskrétne | Sofoservis",
    description:
      "Citlivé a diskrétne vypratávanie nehnuteľností po zosnulom. Empatický prístup, triedenie cenností, ekologická likvidácia.",
    url: "https://www.sofoservis.sk/vypratavanie-pozostalosti",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

const faqSchemaItems = [
  {
    question: "Ako prebieha vypratávanie po zosnulom?",
    answer:
      "Celý proces začína diskrétnou obhliadkou. Pomôžeme vám roztriediť osobné veci, dokumenty a cennosti od vecí určených na likvidáciu. Nepretekáme — dávame vám priestor na rozhodnutia. Zabezpečíme šetrné a dôstojné vypratanie priestoru.",
  },
  {
    question: "Ako dlho trvá vypratanie po zosnulom?",
    answer:
      "Závisí od veľkosti nehnuteľnosti a množstva vecí. Štandardný 2-izbový byt zvyčajne vypraceme za 1 pracovný deň. Väčšie domy môžu trvať 2-3 dni.",
  },
  {
    question: "Ako naložíte s cennými predmetmi a dokumentmi?",
    answer:
      "Všetky cenné predmety, dokumenty, fotografie a šperky starostlivo odložíme a odovzdáme príbuzným. Nič cenné nezlikvidujeme bez vášho súhlasu.",
  },
];

export default function VypratavaniePozstalostiPage() {
  const heroData = {
    title: "Vypratávanie pozostalosti — diskrétne a s empatiou",
    description:
      "Chápeme, že strata blízkej osoby je ťažká. Ponúkame citlivé a diskrétne vypratanie nehnuteľnosti po zosnulom. Náš tím pristupuje k každej zákazke s maximálnou empatiou, rešpektom a profesionalitou.",
    formTitle: "Kontaktujte nás diskrétne",
    formSubtitle: "Vyplňte formulár — odpovieme do pár hodín",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Čo zahŕňa vypratávanie pozostalosti",
    description:
      "Kompletné služby pre diskrétne a citlivé vypratanie nehnuteľnosti po zosnulom.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Triedenie osobných vecí a cenností",
        description:
          "Starostlivo vytriedime osobné veci, dokumenty, fotografie a cennosti, ktoré odovzdáme rodine. Žiadna cenná vec nebude zlikvidovaná bez vášho vedomia.",
        link: "/vypratavanie-pozostalosti",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Diskrétne a šetrné vypratanie",
        description:
          "Celý proces prebieha s maximálnou empatiou a diskréciou. Dávame vám priestor na rozhodnutia a nepretekáme.",
        link: "/vypratavanie-pozostalosti",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Odvoz nábytku a zariadenia",
        description:
          "Zabezpečíme odvoz a ekologickú likvidáciu nábytku, spotrebičov a ostatného zariadenia, ktoré si nebudete ponechávať.",
        link: "/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Ekologická likvidácia odpadu",
        description:
          "Odpad separujeme a odvážame na príslušné zberné dvory. Funkčné veci darujeme charitám, elektroniku odovzdávame na autorizované miesta.",
        link: "/likvidacia-nebezpecneho-odpadu-starych-spotrebicov",
      },
      {
        image: "/icons/landscape_icon.svg",
        title: "Záverečné upratanie priestoru",
        description:
          "Po vypratávaní môžeme vykonať aj základné upratanie a dezinfekciu priestoru podľa vašich požiadaviek.",
        link: "/vypratavanie-pozostalosti",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Celé Slovensko",
        description:
          "Pôsobíme v celom Bratislavskom, Trnavskom a Nitrianskom kraji. Vypratávame nehnuteľnosti po zosnulých v Bratislave, Trnave, Nitre a okolí.",
        link: "/vypratavanie-bytov-domov",
      },
    ],
  };

  return (
    <main className="bg-white">
      <link rel="preload"
        href="/images/mascot/stary-gauc-nosi-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/stary-gauc-nosi-mascot.svg"
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
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          desktopMascotScaleMultiplier={1.08}
          desktopMascotRightShiftPct={0.235}
          desktopMascotBehindForm
          desktopMascotFixedHeightPx={756}
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
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          mobileMascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          mobileMascotOffsetY={-44}
          mobileMascotScale={0.847}
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
          title="Časté otázky o vypratávaní pozostalosti"
          items={[
            {
              question: "Ako prebieha vypratávanie po zosnulom?",
              answer:
                "Celý proces začína diskrétnou a bezplatnou obhliadkou. Spoločne preberieme, čo si ponecháte, čo darujete a čo zlikvidujeme. V dohodnutý deň príde náš tím, starostlivo vytriedime osobné veci, dokumenty a cennosti, ktoré odovzdáme vám. Ostatné veci odvezieme a ekologicky zlikvidujeme. Dávame vám priestor na rozhodnutia — nepretekáme.",
            },
            {
              question: "Ako naložíte s cennými predmetmi, šperkami a dokumentmi?",
              answer:
                "Všetky cenné predmety, šperky, dokumenty, fotografie a pamiatky starostlivo odložíme a odovzdáme vám alebo vami určenej osobe. Nič cenné nezlikvidujeme bez vášho výslovného súhlasu. Ak objavíme hodnoty, ktorých si nie ste vedomí, okamžite vás informujeme.",
            },
            {
              question: "Ako dlho trvá vypratanie po zosnulom?",
              answer:
                "Závisí od veľkosti nehnuteľnosti a množstva vecí. Štandardný 2-izbový byt zvyčajne vypraceme za 1 pracovný deň. Väčší dom so záhradou môže trvať 2-3 dni. Ak potrebujete viac času na rozhodovanie o veciach, vieme zákazku rozdeliť na viacero dní.",
            },
            {
              question: "Aká je cena za vypratanie pozostalosti?",
              answer:
                "Cena závisí od veľkosti nehnuteľnosti, množstva vecí a požadovaných doplnkových služieb. Pre 2-izbový byt sa ceny pohybujú od 350€ do 700€. Poskytujeme nezáväznú cenovú ponuku po bezplatnej obhliadke — žiadne prekvapenia.",
            },
            {
              question: "Môžem byť prítomný/á počas vypratávania?",
              answer:
                "Áno, vaša prítomnosť je vítaná a mnohí klienti to ocenia. Môžete priamo ukazovať, čo si ponechávate a čo môžeme odviezť. Ak však nechcete byť prítomní, plne vám dôverujeme a o všetkom vás budeme informovať.",
            },
          ]}
          expandableGroup={{
            label: "Viac o vypratávaní pozostalosti",
            panels: [
              {
                title: "Prečo zveriť vypratanie pozostalosti profesionálom?",
                content: "Vypratanie nehnuteľnosti po zosnulom je fyzicky aj emocionálne náročné. Profesionálna firma vám pomôže zvládnuť logistiku, odvoz odpadu a triedenie vecí, zatiaľ čo vy sa môžete sústrediť na to, čo je v tej chvíli dôležitejšie — spomienky na blízkych a vybavenie dedičských záležitostí.\n\nNáš tím má skúsenosti s citlivými situáciami. Pristupujeme k vypratávaniu pozostalosti s rešpektom, diskréciou a bez zbytočného pretekania.",
              },
              {
                title: "Čo sa stane s oblečením, nábytkom a spotrebičmi?",
                content: "Funkčné oblečenie odovzdávame do charitách organizácií. Nábytok a spotrebiče, ktoré sú ešte použiteľné, darujeme sociálne slabším rodinám alebo charitám. Ostatné veci separujeme a odvážame na príslušné zberné miesta.\n\nSnažíme sa maximalizovať recykláciu a minimalizovať skládkovanie. Po zákazke vám vieme poskytnúť prehľad, ako bolo s jednotlivými vecami naložené.",
              },
              {
                title: "Dezinfekcia a záverečné upratovanie",
                content: "Po vypratávaní môžeme na požiadanie vykonať záverečné upratovanie a dezinfekciu priestoru. Táto služba je vhodná najmä ak potrebujete nehnuteľnosť pripraviť na predaj, prenájom alebo odovzdanie.\n\nUpratovanie zahŕňa umytie podláh, vyčistenie kuchyne a kúpeľne a základnú dezinfekciu.",
              },
            ],
          }}
        />
      </div>
      <div>
        <CTA
          title="Kontaktujte nás pre diskrétnu pomoc"
          description="Sme tu pre vás v ťažkej chvíli. Zabezpečíme citlivé a profesionálne vypratanie nehnuteľnosti po zosnulom — s rešpektom a empatiou."
          buttonText="Získať nezáväznú ponuku"
        />
      </div>
      <ServicePricing filter={["vypratavanie"]} />
      <TrustBadges />
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Vypratávanie bytov a domov", description: "Kompletné vypratanie bytu alebo domu.", href: "/vypratavanie-bytov-domov", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Vypratávanie po rekonštrukcii", description: "Vypratanie odpadu po stavebných prácach.", href: "/vypratavanie-po-rekonstrukcii", icon: "/icons/hammer_icon.svg" },
          { title: "Odvoz stavebného odpadu", description: "Rýchly odvoz suťa a stavebného odpadu.", href: "/odvoz-likvidacia-stavebneho-odpadu", icon: "/icons/recycle_icon.svg" },
          { title: "Hodinový manžel", description: "Drobné opravy a úpravy po vypratávaní.", href: "/hodinovy-manzel-majster", icon: "/icons/repair_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqSchemaItems} />
    </main>
  );
}
