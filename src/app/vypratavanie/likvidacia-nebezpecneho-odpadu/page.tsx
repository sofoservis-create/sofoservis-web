import React from "react";
import LabHero from "@/components/sections/LabHero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import ServicePricing from "@/components/sections/ServicePricing";
import ServicePriceTable from "@/components/sections/ServicePriceTable";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Likvidácia nebezpečného odpadu a starých spotrebičov | Sofoservis",
  description:
    "Likvidácia nebezpečného odpadu a starých spotrebičov ✅ Odvoz práčok, chladničiek, televízorov ✅ Ekologická likvidácia ✅ Kontaktujte nás ešte dnes!",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie/likvidacia-nebezpecneho-odpadu",
      languages: {
        sk: "https://www.sofoservis.sk/vypratavanie/likvidacia-nebezpecneho-odpadu",
        en: "https://www.sofoservis.sk/en/hazardous-waste-removal",
        "x-default": "https://www.sofoservis.sk/vypratavanie/likvidacia-nebezpecneho-odpadu",
      },
  },
  openGraph: {
    title: "Likvidácia nebezpečného odpadu a starých spotrebičov | Sofoservis",
    description: "Ekologická likvidácia starých spotrebičov, elektroniky a nebezpečného odpadu. Odvoz práčok, chladničiek, TV a ďalšieho. Obhliadka zadarmo.",
    url: "https://www.sofoservis.sk/vypratavanie/likvidacia-nebezpecneho-odpadu",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function LikvidaciaNebezpecnehoOdpadu() {
  const heroData = {
    title: "Likvidácia starých spotrebičov a nebezpečného odpadu",
    description:
      "Bezpečná a ekologická likvidácia starých spotrebičov, elektroniky a nebezpečného odpadu. Odveziéme práčky, chladničky, televízory a iný elektroodpad.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Kompletná likvidácia spotrebičov a nebezpečného odpadu",
    description:
      "Profesionálna a ekologická likvidácia starých spotrebičov, elektroniky a nebezpečného odpadu podľa platných environmentálnych predpisov.",
    features: [
      {
        image: "/icons/recycle_icon.svg",
        title: "Likvidácia starých spotrebičov",
        description:
          "Odvoz a ekologická likvidácia práčok, chladničiek, mrazničiek, umývačiek riadu a iných veľkých spotrebičov. Bezplatné alebo za symbolický poplatok.",
      },
      {
        image: "/icons/wrench_icon.svg",
        title: "Likvidácia elektroodpadu",
        description:
          "Odvoz a recyklácia počítačov, televízorov, monitorov, tlačiarní a iného elektroodpadu na autorizovaných zberných miestach.",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Likvidácia nebezpečného odpadu",
        description:
          "Bezpečná manipulácia a likvidácia chemikálií, starých farieb, riedidiel, pesticídov, batérií a iného nebezpečného domového odpadu.",
      },
      {
        image: "/icons/house_icon.svg",
        title: "Kompletné vypratanie bytu",
        description:
          "Pri komplexnom vypratávaní bytov, domov a iných priestorov zabezpečíme ekologickú likvidáciu všetkých typov odpadu vrátane spotrebičov.",
        link: "/vypratavanie/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Odvoz stavebného odpadu",
        description:
          "Odvoz a likvidácia stavebného odpadu vrátane materiálov obsahujúcich nebezpečné látky (starý azbest je nutné hlásiť vopred).",
        link: "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Odvoz starého nábytku",
        description:
          "Odvoz a ekologická likvidácia alebo darovanie starého nábytku, matracov a iného bytového zariadenia. Funkčné veci darujeme sociálne slabším.",
        link: "/vypratavanie/odvoz-stareho-nabytku",
      },
    ],
  };

  const faqItems = [
            {
              question: "Ako prebieha likvidácia starých spotrebičov?",
              answer:
                "Proces je jednoduchý: kontaktujte nás telefonicky alebo cez formulár, dohodneme termín a miesto vyzdvihnutia. Náš tím príde v dohodnutý čas, spotrebič (práčku, chladničku, televízor, atď.) odnesie priamo z vášho bytu alebo domu a odvezie ho do autorizovaného zberného centra elektroodpadu. Spotrebiče sú demontované a ich súčasti recyklované podľa platných predpisov. Freon z chladničiek sa zachytáva a neznehodnocuje atmosféru. Za likvidáciu niektorých typov spotrebičov môže byť účtovaný malý poplatok, závisiaci od ich veľkosti.",
            },
            {
              question: "Aké spotrebiče a nebezpečné odpady likvidujete?",
              answer:
                "Likvidujeme všetky bežné typy domácich spotrebičov: chladničky, mrazničky, práčky, sušičky, umývačky riadu, televízory, počítače, monitory, tlačiarne a ďalší elektroodpad. Z nebezpečného odpadu sa zaoberáme: starými farbami a lackami, riedidlami, lepidlami, pesticídmi a herbicídmi, batériami a akumulátormi, žiarivkami, výbojkami a úspornými žiarovkami, olejovými filtrami a malým množstvom motorových olejov. POZOR: Azbestový odpad je špeciálna kategória, ktorú odporúčame zveriť špecializovanej firme s príslušnými povoleniami.",
            },
            {
              question: "Je likvidácia starých spotrebičov spoplatnená?",
              answer:
                "Záleží od druhu a počtu spotrebičov. Malé domáce spotrebiče (mikrovlnky, mixéry, toastery) sú zvyčajne zadarmo pri skupinovom odvoze. Za veľké spotrebiče (chladničky, práčky, televízory) môže byť účtovaný poplatok od 10€ do 30€ za kus, závisiaci od veľkosti a hmotnosti. Tento poplatok pokrýva náklady na dopravu, manipuláciu a odovzdanie do autorizovaného zberného miesta. Pri väčšom množstve spotrebičov (napr. pri vypratávaní celého bytu alebo domu) dohodujeme zvýhodnenú cenovú ponuku.",
            },
            {
              question: "Čo s nebezpečnými chemikáliami, starými farbami a riedidlami?",
              answer:
                "Staré farby, riedidlá, lepidlá a iné chemikálie patria medzi nebezpečný odpad, ktorý nemožno vyhodiť do bežného komunálneho odpadu ani vylievať do kanalizácie. Tieto látky zbierame v uzavretých nádobách (pôvodných alebo iných vhodných kontajneroch) a odovzdávame do zberných dvorov s príslušným oprávnením na nakladanie s nebezpečným odpadom, kde sú ekologicky zneškodnené alebo recyklované ako palivá v certifikovaných spaľovniach. Zložky v aerosóloch sú tiež nebezpečný odpad – zaleštite kryty, aby nevyprskli.",
            },
            {
              question: "Ako naložiť so starými batériami a akumulátormi?",
              answer:
                "Batérie a akumulátory sú nebezpečný odpad obsahujúci ťažké kovy (kadmium, ortuť, lítium) a kyseliny, ktoré sú škodlivé pre životné prostredie. Patria do špeciálnych zberných nádob na batérie, ktoré nájdete v obchodoch, školách a na zberných dvoroch. V rámci väčšieho odvozu alebo vypratávania vám môžeme pomôcť s odovzdaním batérií na správne miesta. Automotive akumulátory (autobatérie) sa odovzdávajú pri kúpe novej batérie alebo na zberné dvory.",
            },
          ];

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
        desktopMascotFixedHeightPx={756}
        desktopMascotTopOffsetPct={-0.01}
        showMascot
        mobileMascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
        mobileMascotOffsetY={-57}
        mobileMascotOffsetX={-32}
        mobileMascotScale={1.02}
        pillsVariant="stahovanie"
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
          title="Často kladené otázky o likvidácii spotrebičov a nebezpečného odpadu"
          items={faqItems}
        />
      </div>
      <FAQJsonLd items={faqItems} />

      <div>
        <CTA
          title="Zbavte sa starých spotrebičov a nebezpečného odpadu"
          description="Ekologicky a bezpečne zlikvidujeme všetky vaše staré spotrebiče a nebezpečný domový odpad. Postaráme sa o správnu recykláciu a likvidáciu podľa platnej legislatívy. Kontaktujte nás ešte dnes!"
          buttonText="Objednať likvidáciu odpadu"
        />
      </div>

      <ServicePriceTable variant="vypratavanie" title="Cenník likvidácie nebezpečného odpadu" />
      <ServicePricing filter={["vypratavanie", "buracie-prace", "stahovanie"]} />
      <TrustBadges />
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[
          {"title":"Vypratávanie bytov a domov","description":"Kompletné vypratanie bytu alebo domu.","href":"/vypratavanie/vypratavanie-bytov-domov","icon":"/icons/vypratavanie_icon.svg"},
          {"title":"Odvoz starého nábytku","description":"Odvoz a ekologická likvidácia starého nábytku.","href":"/vypratavanie/odvoz-stareho-nabytku","icon":"/icons/furniture_icon.svg"},
          {"title":"Odvoz stavebného odpadu","description":"Rýchly odvoz suťa, podláh a stavebného odpadu.","href":"/vypratavanie/odvoz-likvidacia-stavebneho-odpadu","icon":"/icons/recycle_icon.svg"},
          {"title":"Čistenie a vypratávanie pozemkov","description":"Kompletné čistenie a vypratávanie pozemkov.","href":"/vypratavanie/cistenie-vypratavanie-pozemkov","icon":"/icons/landscape_icon.svg"}
        ]}
      />
    </main>
  );
}
