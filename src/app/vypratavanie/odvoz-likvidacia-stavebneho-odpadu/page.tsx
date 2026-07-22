import React from "react";
import Hero from "@/components/sections/Hero";
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
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Odvoz a likvidácia stavebného odpadu | Sofoservis",
  description:
    "Ponúkame lacný odvoz a likvidáciu stavebného odpadu ✅ Odvoz sutí, obkladov a starých podláh ✅ Obhliadka zadarmo ✅ Kontaktujte nás ešte dnes!",
  keywords:
    "odvoz stavebného odpadu, likvidácia stavebného odpadu, odvoz suti, odvoz sutin, likvidacia sutiny, odvoz dlazby, odvoz obkladov, odvoz sutinx, stavebný odpad odvoz",
  alternates: {
    canonical: "https://www.sofoservis.sk/vypratavanie/odvoz-likvidacia-stavebneho-odpadu",
      languages: {
        sk: "https://www.sofoservis.sk/vypratavanie/odvoz-likvidacia-stavebneho-odpadu",
        en: "https://www.sofoservis.sk/en/construction-waste-removal",
        "x-default": "https://www.sofoservis.sk/vypratavanie/odvoz-likvidacia-stavebneho-odpadu",
      },
  },
  openGraph: {
    title: "Odvoz a likvidácia stavebného odpadu | Sofoservis",
    description: "Rýchly a lacný odvoz stavebného odpadu a suti. Odvoz dlažby, obkladov, podláh a stavebných materiálov. Obhliadka zadarmo.",
    url: "https://www.sofoservis.sk/vypratavanie/odvoz-likvidacia-stavebneho-odpadu",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
};

export default function OdvozLikvidaciaStavebnehoodpadu() {
  const heroData = {
    title: "Odvoz a likvidácia stavebného odpadu",
    description:
      "Rýchly odvoz a ekologická likvidácia stavebného odpadu od 25€/hod. Odvezieme suť, staré obklady, dlažbu, sadrokartón a akýkoľvek stavebný materiál.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Kompletný odvoz stavebného odpadu",
    description:
      "Profesionálny odvoz a ekologická likvidácia všetkých typov stavebného odpadu. Rýchle, spoľahlivé a za výhodné ceny.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Odvoz sute a demolačného odpadu",
        description:
          "Rýchly odvoz betónovej sute, tehál, vápennej omietky a ostatného demolačného odpadu. Disponujeme vozidlami rôznych kapacít.",
        link: "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Odvoz obkladov a dlažby",
        description:
          "Odvoz starých obkladačiek, dlažby, parkiet a laminátových podláh po rekonštrukcii kúpeľne, kuchyne alebo iných priestorov.",
        link: "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/wrench_icon.svg",
        title: "Odvoz sadrokartónu a izolácií",
        description:
          "Ekologický odvoz a recyklácia sadrokartónových dosiek, minerálnej vlny, polystyrénu a iných izolačných materiálov.",
        link: "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu",
      },
      {
        image: "/icons/wrecking_ball_icon.svg",
        title: "Búranie stien a odvoz",
        description:
          "Kombinácia búracích prác a odvozu odpadu na jednom mieste. Zbúrame priečky a odveziéme všetok materiál v jednej zákazke.",
        link: "/buranie-stien-priecok",
      },
      {
        image: "/icons/house_icon.svg",
        title: "Odvoz odpadu po vypratávaní",
        description:
          "Pri komplexnom vypratávaní bytov, domov a iných priestorov zabezpečíme odvoz všetkých typov odpadu vrátane stavebného.",
        link: "/vypratavanie/vypratavanie-bytov-domov",
      },
      {
        image: "/icons/landscape_icon.svg",
        title: "Čistenie staveniska",
        description:
          "Kompletné vyčistenie a upratanie staveniska vrátane odvozu stavebného odpadu a prípravy priestoru na odovzdanie alebo ďalšie práce.",
        link: "/vypratavanie/cistenie-vypratavanie-pozemkov",
      },
    ],
  };

  const faqItems = [
            {
              question: "Koľko stojí odvoz stavebného odpadu?",
              answer:
                "Cena za odvoz stavebného odpadu závisí od množstva odpadu, jeho druhu a vzdialenosti od skládky. Hodinová sadzba je od 25€/hod. Pre orientáciu: odvoz jednej auto-tačky (około 5m³) suče vyjde od 100€ do 200€ vrátane práce a poplatkov za skládku. Väčšie množstvá stavebného odpadu (od 10m³) vieme odvoziéme kontajnerovými vozidlami za výhodnejšie ceny. Kontaktujte nás pre presný cenový odhad podľa vašej konkrétnej situácie.",
            },
            {
              question: "Aké typy stavebného odpadu odvágate?",
              answer:
                "Odvážame všetky bežné typy stavebného odpadu: betón, tehly, omietku, dlaždice, obklady, parkety, laminát, sadrokartón, minerálnu vlnu, polystyrén, staré rúry, káble a iné stavebné materiály. Neodvážame nebezpečný odpad (azbestové dosky, chemikálie), na ktorý je potrebná špeciálna licencia. Ak máte pochybnosti o type odpadu, radi vám poradíme pri telefonickej konzultácii.",
            },
            {
              question: "Ako rýchlo viete prísť odviesť stavebný odpad?",
              answer:
                "V Bratislave a okolí zvyčajne vieme prísť do 24-48 hodín od zavolania. Pri plánovaných rekonštrukciách odporúčame dohodnúť termín vopred, aby sme mohli zarezervovať vhodné vozidlo. V iných častiach Slovenska zvyčajne do 2-4 pracovných dní. V naliehavých prípadoch sa snažíme vyjsť v ústrety.",
            },
            {
              question: "Musím si zaobstarať vlastný kontajner na stavebný odpad?",
              answer:
                "Nie, vlastný kontajner nie je potrebný. My disponujeme vozidlami s hydraulickými plošinami, vrecovými kontajnermi aj veľkokapacitnými kontajnermi pre väčšie zákazky. Vhodné riešenie vyberieme podľa množstva a druhu vášho odpadu. Ak preferujete prenajať si kontajner na niekoľko dní počas rekonštrukcie, vieme to tiež zabezpečiť.",
            },
            {
              question: "Odvezete stavebný odpad aj z vyšších poschodí bez výťahu?",
              answer:
                "Áno, zabezpečujeme odvoz stavebného odpadu aj z vyšších poschodí bez výťahu. Náš tím je zvyknutý na náročné podmienky a disponuje pomôckami na prenášanie ťažkého odpadu po schodoch (nosítka, vaky na suť). V prípade veľmi vysokých poschodí alebo veľkého množstva odpadu môžeme použiť externé výťahy alebo špeciálne staveniskové výťahy. Upozornite nás vopred na tieto podmienky, aby sme mohli adekvátne naplánovať práce.",
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
          desktopMascotFixedHeightPx={756}
          desktopMascotTopOffsetPct={-0.01}
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
          mobileMascotOffsetY={-57}
          mobileMascotOffsetX={-32}
          mobileMascotScale={1.02}
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
          title="Často kladené otázky o odvoze a likvidácii stavebného odpadu"
          items={faqItems}
        />
      </div>
      <FAQJsonLd items={faqItems} />

      <div>
        <CTA
          title="Rýchly odvoz stavebného odpadu"
          description="Netrápte sa s odvozom stavebného odpadu. Náš tím príde, naloží a odvezie suť, obklady, dlažbu aj starý nábytok. Vhodné vozidlá pre každé množstvo odpadu. Kontaktujte nás ešte dnes!"
          buttonText="Objednať odvoz odpadu"
        />
      </div>

      <ServicePricing filter={["buracie-prace", "vypratavanie", "stahovanie"]} />
      <TrustBadges />
      <ContactFormSection />

      <RelatedServices
        title="Súvisiace služby"
        services={[
          {"title":"Búranie stien a priečok","description":"Búranie sadrokartónu, murovaných priečok a stien.","href":"/buranie-stien-priecok","icon":"/icons/crane_icon.svg"},
          {"title":"Vypratávanie bytov a domov","description":"Kompletné vypratanie bytu alebo domu.","href":"/vypratavanie/vypratavanie-bytov-domov","icon":"/icons/vypratavanie_icon.svg"},
          {"title":"Odvoz starého nábytku","description":"Odvoz a ekologická likvidácia starého nábytku.","href":"/vypratavanie/odvoz-stareho-nabytku","icon":"/icons/furniture_icon.svg"},
          {"title":"Likvidácia nebezpečného odpadu","description":"Ekologická likvidácia starých spotrebičov a chémie.","href":"/vypratavanie/likvidacia-nebezpecneho-odpadu","icon":"/icons/recycle_icon.svg"}
        ]}
      />
    </main>
  );
}
