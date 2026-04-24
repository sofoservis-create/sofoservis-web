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
import LocationMap from "@/components/sections/LocationMap";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";

export const metadata = {
  title: "Hodinový manžel Piešťany — opravy, montáž | Sofoservis",
  description:
    "Profesionálny hodinový manžel v Piešťanoch — montáž nábytku, drobné opravy, vŕtanie a údržba ✅ Od 25€/hod ✅ Rýchly nástup",
  alternates: {
    canonical: "https://www.sofoservis.sk/hodinovy-manzel-majster/piestany",
    languages: {
      sk: "https://www.sofoservis.sk/hodinovy-manzel-majster/piestany",
      en: "https://www.sofoservis.sk/en/handyman-piestany",
      "x-default": "https://www.sofoservis.sk/hodinovy-manzel-majster/piestany",
    },
  },
};

export default function HodinovyManzelPiestanyPage() {
  const faqItems = [
    {
      question: "Aké služby ponúkate v Piešťanoch?",
      answer:
        "V Piešťanoch zabezpečujeme montáž nábytku, vešanie obrazov, garniž a políc, drobné opravy v kúpeľni a kuchyni, inštaláciu svietidiel a základnú údržbu bytov a apartmánov.",
    },
    {
      question: "Koľko stojí hodinový manžel v Piešťanoch?",
      answer:
        "Cena práce je 25€ za hodinu. Minimálna objednávka je 1 hodina. Doprava v rámci Piešťan je účtovaná paušálne od 20€.",
    },
    {
      question: "Ste k dispozícii aj cez víkendy v Piešťanoch?",
      answer:
        "Áno, po predchádzajúcej dohode vieme prísť aj v sobotu, čo oceňujú najmä majitelia víkendových apartmánov v Piešťanoch.",
    },
    {
      question: "Montujete aj nábytok z IKEA a JYSK?",
      answer:
        "Samozrejme, montáž nábytku z týchto a iných reťazcov je našou dennou rutinou. Máme všetky potrebné vedomosti a náradie.",
    },
  ];

  const features = [
    {
      image: "/icons/wrench_icon.svg",
      title: "Montáž nábytku",
      description: "Odborné skladanie nábytku pre váš domov alebo apartmán v Piešťanoch.",
      link: "/montaz-nabytku",
    },
    {
      image: "/icons/repair_icon.svg",
      title: "Údržba a opravy",
      description: "Všetko od vŕtania do stien až po nastavenie pántov na dverách.",
      link: "/hodinovy-manzel-majster",
    },
    {
      image: "/icons/plumbing_icon.svg",
      title: "Voda a inštalácie",
      description: "Výmena batérií, oprava sifónov a drobné inštalatérske práce.",
      link: "/hodinovy-manzel-majster",
    },
  ];

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
          title="Hodinový manžel v Piešťanoch"
          description="Váš osobný majster pre Piešťany a okolie. Postaráme sa o drobné opravy a montáže vo vašej domácnosti profesionálne a rýchlo."
          formTitle="Zarezervovať majstra"
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
          mascotSrc="/images/mascot/montaz-mascot.svg"
          desktopMascotDynamicHeight
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Hodinový manžel v Piešťanoch"
          description="Váš osobný majster pre Piešťany a okolie. Postaráme sa o drobné opravy a montáže vo vašej domácnosti profesionálne a rýchlo."
          formTitle="Zarezervovať majstra"
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
          showMascot
          mascotSrc="/images/mascot/montaz-mascot.svg"
          mobileMascotSrc="/images/mascot/montaz-mascot.svg"
          mobileMascotOffsetY={-45}
          mobileFormOffsetY={32}
          pillsVariant="hodinovy"
          phoneNumber="421952044363"
        />
      </div>
      <Clients />
      <GoogleReviews title="Recenzie našich klientov" />
      <Reviews showHeadline={true} />
      <ServicePricing filter={["hodinovy-manzel", "montaz-nabytku"]} />
      <Features title="Majstrovské služby v Piešťanoch" description="Pomocná ruka pre každú domácnosť v kúpeľnom meste." features={features} />
      <LocationMap
        title="Pôsobíme v Piešťanoch a okolí"
        locations={["Piešťany", "Banka", "Moravany nad Váhom", "Trebatice", "Veľké Orvište", "Drahovce", "Vrbové"]}
        additionalText="Pôsobíme v celom regióne Piešťan a blízkych obcí."
      />
      <InstagramFeed />
      <FAQ title="Často kladené otázky — Piešťany" items={faqItems} />
      <CTA
        title="Potrebujete majstra v Piešťanoch?"
        description="Zverte svoje opravy do rúk odborníka. Sme tu pre vás v Piešťanoch a okolí."
        buttonText="Kontaktujte nás"
        imageSrc="/images/sofoservis montaz.jpg"
      />
      <TrustBadges />
      <ContactFormSection />
      <RelatedServices
        title="Súvisiace služby"
        services={[
          { title: "Montáž nábytku", description: "Profesionálne skladanie nábytku.", href: "/montaz-nabytku", icon: "/icons/wrench_icon.svg" },
          { title: "Montáž kuchyne", description: "Inštalácia kuchynských liniek.", href: "/montaz-kuchyne", icon: "/icons/kitchen_icon.svg" },
          { title: "Hodinový manžel", description: "Všetky handyman služby.", href: "/hodinovy-manzel-majster", icon: "/icons/repair_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
