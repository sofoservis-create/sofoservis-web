import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import LocationMap from "@/components/sections/LocationMap";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import HowItWorks from "@/components/sections/HowItWorks";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";

export const metadata = {
  title: "Vypratávanie Bratislava - byty, pivnice, garáže | Sofoservis",
  description:
    "Profesionálne vypratávanie bytov, pivníc a garáží v Bratislave od 25€/hod. Jednoizbový byt od 200€.",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie-bratislava",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-bratislava",
      en: "https://www.sofoservis.sk/en/home-clearance-bratislava",
      "x-default": "https://www.sofoservis.sk/vypratavanie-bratislava",
    },
  },
  keywords:
    "vypratavanie bratislava, vypratanie bytu bratislava, vypratavanie pivnic bratislava, odvoz nabytku bratislava, vypratavanie garazi bratislava",
  openGraph: {
    title: "Vypratávanie Bratislava - byty, pivnice, garáže | Sofoservis",
    description:
      "Profesionálne vypratávanie bytov, pivníc a garáží v Bratislave od 25€/hod. Pokrývame všetky mestské časti. Obhliadka zadarmo.",
    url: "https://www.sofoservis.sk/vypratavanie-bratislava",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function VypratavanieBratislavaPage() {
  const heroData = {
    title: "Vypratávanie Bratislava: Rýchlo a spoľahlivo",
    description:
      "Vypratávame byty, pivnice, kobky a garáže v celej Bratislave od 25€/hod. Pokrývame Petržalku, Ružinov, Staré Mesto, Nové Mesto, Karlovú Ves a Dúbravku.",
    formTitle: "Vypratávanie v Bratislave — bezplatná ponuka",
    formSubtitle: "Vyplňte formulár pre rýchlu fixnú cenu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Vypratávanie vo všetkých mestských častiach Bratislavy",
    description:
      "Pôsobíme v celej Bratislave — vypratávame byty, pivnice, garáže a ďalšie priestory v každej mestskej časti.",
    features: [
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Vypratávanie Petržalka",
        description:
          "Kompletné vypratávanie bytov, pivníc a kobiek v Petržalke. Jednoizbový byt od 200€, kobka od 60€. Odvoz všetkého nepotrebného zabezpečíme.",
        link: "/vypratavanie-petrzalka",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Vypratávanie Ružinov",
        description:
          "Vypratávame byty, garáže a nebytové priestory v Ružinove. Skúsený tím, férové ceny. Jednoizbový byt od 200€.",
        link: "/vypratavanie-ruzinov",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Vypratávanie Staré Mesto",
        description:
          "Vypratávanie bytov a pivníc v Starom Meste. Vieme pracovať aj v historických budovách so schodišťami bez výťahu.",
        link: "/vypratavanie-stare-mesto",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Vypratávanie Nové Mesto",
        description:
          "Rýchle a spoľahlivé vypratávanie v Novom Meste. Odvoz starého nábytku, spotrebičov aj stavebného odpadu.",
        link: "/vypratavanie-nove-mesto",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Vypratávanie Karlova Ves",
        description:
          "Vypratávame byty, pivnice a garáže v Karlovej Vsi. Ekologická likvidácia odpadu. Obhliadka zadarmo.",
        link: "/vypratavanie-karlova-ves",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Vypratávanie Dúbravka",
        description:
          "Profesionálne vypratávanie v Dúbravke. Jednoizbový byt od 200€, pivnica od 60€. Cena zahŕňa odvoz odpadu.",
        link: "/vypratavanie-dubravka",
      },
    ],
  };

  const mapData = {
    title: "Pokrývame celú Bratislavu a okolie",
    description:
      "Vypratávame vo všetkých mestských častiach Bratislavy aj v okolitých obciach.",
    locations: [
      "Petržalka",
      "Ružinov",
      "Staré Mesto",
      "Nové Mesto",
      "Karlova Ves",
      "Dúbravka",
      "Lamač",
      "Devínska Nová Ves",
      "Rača",
      "Vajnory",
      "Vrakuňa",
      "Podunajské Biskupice",
    ],
    additionalText: "Vypratávame aj v okolitých obciach — Senec, Šamorín, Stupava, Malacky a ďalšie.",
  };

  const faqData = {
    title: "Často kladené otázky — vypratávanie v Bratislave",
    items: [
      {
        question: "Koľko stojí vypratávanie bytu v Bratislave?",
        answer:
          "Jednoizbový byt v Bratislave vypratáme od 200€, dvojizbový od 300€, trojpojový od 400€. Cena závisí od množstva vecí, poschodia a prístupu. Obhliadka a cenová ponuka sú zadarmo.",
      },
      {
        question: "Koľko stojí vypratávanie pivnice alebo kobky?",
        answer:
          "Malá kobka alebo pivnica od 60€, väčší sklad od 100€. Cena zahŕňa naloženie a odvoz celého obsahu. Garáž vypratáme od 80€.",
      },
      {
        question: "Pokrývate všetky mestské časti Bratislavy?",
        answer:
          "Áno, pôsobíme v celej Bratislave — Petržalka, Ružinov, Staré Mesto, Nové Mesto, Karlova Ves, Dúbravka, Lamač, Rača, Vrakuňa a ďalšie. Pokrývame aj okolité obce.",
      },
      {
        question: "Odvezete aj starý nábytok a spotrebiče?",
        answer:
          "Áno, odvoz a ekologická likvidácia starého nábytku, sedačiek, práčok, chladničiek a iných spotrebičov je súčasťou našej služby.",
      },
      {
        question: "Vypratávate byty bez výťahu?",
        answer:
          "Áno. Za každé poschodie bez výťahu účtujeme 15€ navyše. Máme skúsený tím zvyknutý na vynášku ťažkého nábytku po schodiskách.",
      },
      {
        question: "Ako rýchlo môžete prísť vypratať v Bratislave?",
        answer:
          "Väčšinou sme schopní prísť do 2–5 pracovných dní. V niektorých prípadoch aj skôr. Kontaktujte nás a dohodnem termín podľa vašich potrieb.",
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
        <GoogleReviews showCarousel={true} />
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
        <LocationMap
          title={mapData.title}
          description={mapData.description}
          locations={mapData.locations}
          additionalText={mapData.additionalText}
        />
      </div>
      {/* Ako to funguje section */}
      <HowItWorks />

      {/* Service Pricing section */}
      <ServicePricing filter={["vypratavanie", "stahovanie", "buracie-prace"]} />

      <div>
        <Reviews />
      </div>

      <div>
        <FAQ
          title={faqData.title}
          items={faqData.items}
          expandableGroup={{
            label: "Všetko o vypratávaní v Bratislave",
            panels: [
              {
                title: "Čo sa stane s vypratanými vecami?",
                content:
                  "Po vypratávaní sa všetky veci roztriedime — použiteľný nábytok a spotrebiče odovzdávame do secondhandov alebo charitatívnych organizácií, ak je to možné. Odpad triedime podľa platnej legislatívy SR a odvážame do zmluvných zberných dvorov a recyklačných zariadení v Bratislave a okolí.\n\nSo starými spotrebičmi (chladničky, práčky, televízory) pracujeme osobitne — majú špeciálny režim likvidácie kvôli nebezpečným látkam (chladivá, oleje, elektrické komponenty). Nikdy neskládame odpad na čierne skládky — zodpovedná likvidácia je základ našej práce.",
              },
              {
                title: "Veľké vs. malé zákazky — čo ovplyvňuje výslednú cenu?",
                content:
                  "Cena vypratávania závisí od viacerých faktorov: celkového objemu vecí (m³), poschodia a prístupu (výťah / bez výťahu), vzdialenosti od parkovacieho miesta a potreby špeciálnej likvidácie (nebezpečný odpad, elektroodpad).\n\nMalá zákazka — vypratanie pivnice alebo kobky začína od 60€. Vypratanie jednoizbového bytu od 200€, dvojizbového od 350€. Pri väčších objektoch (rodinné domy, komerčné priestory) cena závisí od obsahu a rozsahu — vždy ponúkame cenovú ponuku vopred.",
              },
              {
                title: "Príprava na vypratávanie — čo robiť pred príchodom tímu",
                content:
                  "Pred príchodom nášho tímu odporúčame odložiť osobné veci, dokumenty a cennosti, ktoré si chcete nechať. Ak máte predmety, o ktorých si nie ste istí (rodinné pamiatky, šperky ukryté v nábytku), prezrite ich vopred.\n\nPrístup do priestoru nechajte voľný — ak je vypratávaný byt v bytovom dome, upozornite správcu alebo susedov, že v daný deň bude prebiehať vývoz. Nemusíte byť prítomní počas celého procesu, ale odporúčame byť dostupní na telefóne pre prípadné otázky.",
              },
              {
                title: "Vypratávanie pri dedičstve alebo likvidácii nehnuteľnosti",
                content:
                  "Dedičské vypratávania majú svoje špecifiká — priestor môže byť dlho nevyužívaný, plný desaťročí nahromadeného obsahu, pričom časť vecí môže mať citovú alebo materiálnu hodnotu pre pozostalých. Preto odporúčame, aby bol na mieste prítomný aspoň jeden člen rodiny, ktorý rozhodne, čo sa zachová.\n\nNa žiadosť vieme pracovať pokojne a ohľaduplne, dávame dostatok času na rozhodovanie. Vystavujeme doklady o odvoze a likvidácii odpadu, čo môže byť relevantné pri dedičskom konaní alebo predaji nehnuteľnosti.",
              },
            ],
          }}
        />
      </div>
      <div>
        <CTA />
      </div>
      <TrustBadges />
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Sťahovanie Bratislava", description: "Profesionálne sťahovacie služby v celej Bratislave.", href: "/stahovanie-bratislava", icon: "/icons/truck_icon.svg" },
          { title: "Vypratávanie bytov a domov", description: "Kompletné vypratávanie domácností.", href: "/vypratavanie-bytov-domov", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Vypratávanie pivníc a garáží", description: "Rýchle vypratávanie pivníc, kobiek a garáží.", href: "/vypratavanie-pivnic-garazi-nebytovych-priestorov", icon: "/icons/house_icon.svg" },
          { title: "Odvoz starého nábytku", description: "Odvoz a ekologická likvidácia starého nábytku.", href: "/vypratavanie-odvoz-stareho-nabytku", icon: "/icons/recycle_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqData.items} />
    </main>
  );
}
