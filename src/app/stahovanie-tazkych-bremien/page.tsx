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
  title: "Sťahovanie ťažkých bremien | Klavíry, trezory, | Sofoservis",
  description:
    "Ponúkame profesionálne sťahovanie ťažkých bremien ✅ Klavíry, trezory, výrobné zariadenia ✅ Špeciálne techniky a vybavenie ✅ Obhliadka priestoru zadarmo.",
  keywords:
    "stahovanie tazkych bremien, sťahovanie klavíra, sťahovanie trezoru, preprava ťažkých predmetov, sťahovanie výrobných strojov, sťahovanie bankomatu, ťažké bremená, nadrozmerné predmety",
  alternates: {
    canonical: "https://www.sofoservis.sk/stahovanie-tazkych-bremien",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-tazkych-bremien",
      en: "https://www.sofoservis.sk/en/moving-heavy-loads",
      "x-default": "https://www.sofoservis.sk/stahovanie-tazkych-bremien",
    },
  },
};

export default function StahovanieTazkychBremienPage() {
  const faqItems = [
    { question: "Aký najťažší predmet dokážete presťahovať?", answer: "Naša spoločnosť má skúsenosti s predmetmi vážiacimi až niekoľko ton. Prepravovali sme priemyselné stroje, veľké trezory a iné ťažké objekty s hmotnosťou presahujúcou 3 tony. Každé sťahovanie ťažkého bremena si vyžaduje individuálne posúdenie, preto odporúčame obhliadku." },
    { question: "Ako prebieha sťahovanie klavíra?", answer: "Sťahovanie klavíra vyžaduje špecializovaný prístup. Najskôr ho zabezpečíme proti otrasenia a poškodeniu pomocou špeciálnych obalov. Následne využívame klavírny vozík a sťahovacie popruhy pre jeho bezpečnú manipuláciu. Tím školených pracovníkov zabezpečí presun do vozidla a vyloženie na novom mieste." },
    { question: "Potrebujem na sťahovanie trezoru špeciálne povolenia?", answer: "Vo väčšine prípadov nie sú potrebné špeciálne povolenia na sťahovanie trezoru, pokiaľ sa nejedná o obzvlášť ťažký trezor (nad 1000 kg), ktorý by vyžadoval použitie žeriavu na verejnom priestranstve." },
    { question: "Dá sa presťahovať výrobný stroj bez prerušenia výroby?", answer: "Áno, pri správnom plánovaní je možné minimalizovať prestoje výroby. Dôkladne naplánujeme celý proces presunu, pripravíme nové miesto vopred a zabezpečíme prívody energií. Samotné sťahovanie realizujeme počas víkendov alebo plánovaných odstávok." },
    { question: "Čo robiť, ak sa ťažký predmet nezmestí cez dvere alebo schodisko?", answer: "V takýchto prípadoch máme niekoľko alternatívnych riešení. Môžeme využiť techniku spúšťania cez balkón alebo okno pomocou žeriavu, hydraulické plošiny z exteriéru budovy, alebo v krajnom prípade dočasné stavebné úpravy." },
  ];

  const heroData = {
    title: "Sťahovanie ťažkých bremien",
    description:
      "Špecializované služby pre bezpečné sťahovanie ťažkých a objemných predmetov. Náš profesionálny tím s dlhoročnými skúsenosťami a špeciálnym vybavením zabezpečí prepravu ťažkých bremien ako klavíry, trezory, výrobné stroje či iné nadrozmerné predmety.",
    formTitle: "Získajte bezplatnú cenovú ponuku",
    formSubtitle: "Vyplňte formulár pre nezáväznú kalkuláciu",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Komplexné služby sťahovania ťažkých bremien",
    description:
      "Špecializované služby pre bezpečný presun a transport ťažkých, objemných a hodnotných predmetov s profesionálnym vybavením.",
    features: [
      {
        image: "/icons/crane_icon.svg",
        title: "Sťahovanie pianín a klavírov",
        description:
          "Špecializovaný presun pianín, klavírov a krídel. Špeciálne klavírne vozíky, lyže a ochranné obaly pre bezpečnú manipuláciu s týmito cennými nástrojmi. Vrátane sťahovania cez okno a balkón.",
        link: "/stahovanie-klavira",
      },
      {
        image: "/icons/safe_icon.svg",
        title: "Sťahovanie trezorov a sejfov",
        description:
          "Odborný presun trezorov a sejfov každej hmotnosti. Hydraulické zdviháky a motorové plošiny pre bezpečnú a diskrétnu prepravu — od malých domácich sejfov po bankové trezory.",
        link: "/stahovanie-trezorov",
      },
      {
        image: "/icons/heavy_machinery_icon.svg",
        title: "Sťahovanie strojov a zariadení",
        description:
          "Presun priemyselných strojov, CNC zariadení, výrobných liniek a bankomátov. Plánujeme zákazky na mieru s cieľom minimalizovať prestoje výroby.",
        link: "/stahovanie-strojov-zariadeni",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Objemný nábytok a zariadenie",
        description:
          "Presun objemného nábytku ako sú veľké sedačky, skrine, americké chladničky, práčky a iné ťažké domáce spotrebiče s profesionálnou technikou.",
        link: "/stahovanie-preprava-nabytku",
      },
      {
        image: "/icons/artwork_icon.svg",
        title: "Umelecké diela a starožitnosti",
        description:
          "Špeciálna preprava umeleckých diel, sôch, starožitností a iných hodnotných predmetov vyžadujúcich mimoriadnu opatrnosť a ochranu.",
        link: "/stahovanie-tazkych-bremien",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Špeciálna prepravná technika",
        description:
          "Využívame špeciálne vozidlá, hydraulické zdvíhacie zariadenia, sťahovacie výťahy a ďalšie profesionálne vybavenie pre bezpečný transport ťažkých bremien.",
        link: "/stahovanie-tazkych-bremien",
      },
    ],
  };

  return (
    <main className="bg-white">
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
      <link rel="preload"
        href="/images/mascot/2holding boxes mascot.svgz"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/2holding boxes mascot.svgz"
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
          mascotSrc="/images/mascot/2holding boxes mascot.svgz"
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
          mascotSrc="/images/mascot/2holding boxes mascot.svgz"
          mobileMascotSrc="/images/mascot/2holding boxes mascot.svgz"
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
          title="Často kladené otázky o sťahovaní ťažkých bremien"
          items={[
            {
              question: "Aký najťažší predmet dokážete presťahovať?",
              answer:
                "Naša spoločnosť má skúsenosti s predmetmi vážiacimi až niekoľko ton. Prepravovali sme priemyselné stroje, veľké trezory a iné ťažké objekty s hmotnosťou presahujúcou 3 tony. Každé sťahovanie ťažkého bremena si vyžaduje individuálne posúdenie, preto odporúčame obhliadku, na základe ktorej navrhneme optimálne riešenie pre váš konkrétny prípad.",
            },
            {
              question: "Ako prebieha sťahovanie klavíra?",
              answer:
                "Sťahovanie klavíra vyžaduje špecializovaný prístup. Najskôr ho zabezpečíme proti otrasenia a poškodeniu pomocou špeciálnych obalov. Následne využívame klavírny vozík a sťahovacie popruhy pre jeho bezpečnú manipuláciu. V úzkych priestoroch môžeme použiť tzv. klavírne lyže. Tím školených pracovníkov zabezpečí presun do vozidla a vyloženie na novom mieste. Na požiadanie vieme zabezpečiť aj ladenie nástroja po presťahovaní.",
            },
            {
              question: "Potrebujem na sťahovanie trezoru špeciálne povolenia?",
              answer:
                "Vo väčšine prípadov nie sú potrebné špeciálne povolenia na sťahovanie trezoru, pokiaľ sa nejedná o obzvlášť ťažký trezor (nad 1000 kg), ktorý by vyžadoval použitie žeriavu na verejnom priestranstve. V takom prípade môže byť potrebné zabezpečiť povolenie na krátkodobé zabratie verejného priestranstva od miestneho úradu. Túto administratívu vieme pre vás zabezpečiť v rámci našich komplexných služieb.",
            },
            {
              question: "Dá sa presťahovať výrobný stroj bez prerušenia výroby?",
              answer:
                "Áno, pri správnom plánovaní je možné minimalizovať prestoje výroby. Dôkladne naplánujeme celý proces presunu, pripravíme nové miesto vopred, zabezpečíme prívody energií a iné potrebné náležitosti. Samotné sťahovanie výrobného stroja realizujeme počas víkendov alebo plánovaných odstávok, aby mal váš tím technikov dostatok času na zapojenie a otestovanie zariadenia pred obnovením prevádzky.",
            },
            {
              question: "Čo robiť, ak sa ťažký predmet nezmestí cez dvere alebo schodisko?",
              answer:
                "V takýchto prípadoch máme niekoľko alternatívnych riešení. Môžeme využiť techniku spúšťania cez balkón alebo okno pomocou žeriavu, hydraulické plošiny z exteriéru budovy, alebo v krajnom prípade dočasné stavebné úpravy (rozšírenie otvorov). Naši technici pri obhliadke posúdia všetky možnosti a navrhnú najvhodnejšie a najšetrnejšie riešenie pre váš konkrétny prípad.",
            },
          ]}
        />
      </div>

      <div>
        <CTA />
      </div>

      <ServicePricing filter={["stahovanie", "vypratavanie", "medzinarodne-stahovanie"]} />
      <TrustBadges />
      <ContactFormSection />

      <RelatedServices
        title="Špecializované služby sťahovania ťažkých bremien"
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
            title: "Sťahovanie strojov a zariadení",
            description: "Presun CNC strojov, výrobných liniek a bankomátov.",
            href: "/stahovanie-strojov-zariadeni",
            icon: "/icons/heavy_machinery_icon.svg",
          },
          {
            title: "Sťahovanie bytov a domov",
            description: "Spoľahlivé sťahovanie bytov a rodinných domov.",
            href: "/stahovanie-bytov-domov",
            icon: "/icons/house_icon.svg",
          },
        ]}
      />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
