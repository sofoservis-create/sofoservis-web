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
  title: "Hodinový manžel Trnava — opravy, montáž | Sofoservis",
  description:
    "Profesionálny hodinový manžel v Trnave — montáž nábytku, drobné opravy, vŕtanie a údržba ✅ Od 25€/hod ✅ Rýchly nástup",
  alternates: {
    canonical: "https://www.sofoservis.sk/hodinovy-manzel-majster/trnava",
    languages: {
      sk: "https://www.sofoservis.sk/hodinovy-manzel-majster/trnava",
      en: "https://www.sofoservis.sk/en/handyman-trnava",
      "x-default": "https://www.sofoservis.sk/hodinovy-manzel-majster/trnava",
    },
  },
};

export default function HodinovyManzelTrnavaPage() {
  const faqItems = [
    {
      question: "Aké práce vykonáva hodinový manžel v Trnave?",
      answer:
        "V Trnave zabezpečujeme montáž nábytku, vešanie políc, obrazov, drobné inštalatérske práce (výmena batérií), výmenu vypínačov, zámkov a celkovú údržbu domácností.",
    },
    {
      question: "Koľko stojí hodinový manžel v Trnave?",
      answer:
        "Naša sadzba v Trnave je 25€ na hodinu. Minimálny rozsah prác je 1 hodina. Doprava v rámci Trnavy je účtovaná podľa platného cenníka.",
    },
    {
      question: "Ako rýchlo viete prísť v Trnave?",
      answer:
        "Zvyčajne vieme zabezpečiť termín do 24 až 48 hodín. V urgentných prípadoch sa snažíme reagovať ešte rýchlejšie.",
    },
    {
      question: "Máte náradie na vŕtanie do panelu v trnavských bytoch?",
      answer:
        "Áno, disponujeme profesionálnou technikou na vŕtanie do všetkých typov materiálov vrátane tvrdého panelu na sídliskách ako Družba alebo Prednádražie.",
    },
  ];

  const features = [
    {
      image: "/icons/wrench_icon.svg",
      title: "Montáž nábytku",
      description: "Skladanie skríň, postelí a komôd z IKEA, Decodom, JYSK a iných.",
      link: "/montaz-nabytku",
    },
    {
      image: "/icons/repair_icon.svg",
      title: "Drobné opravy",
      description: "Všetko od vŕtania poličiek až po opravu kvapkajúcich kohútikov.",
      link: "/hodinovy-manzel-majster",
    },
    {
      image: "/icons/electrical_icon.svg",
      title: "Elektro a voda",
      description: "Inštalácia svietidiel, výmena zásuviek a drobné inštalatérske úkony.",
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
          title="Hodinový manžel v Trnave"
          description="Váš majster pre Trnavu a okolie. Profesionálna pomoc s údržbou a opravami vo vašej domácnosti."
          formTitle="Rezervovať majstra"
          benefits={[]}
          ratingText="3500+ spokojných zákazníkov"
          mascotSrc="/images/mascot/montaz-mascot.svg"
          desktopMascotDynamicHeight
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Hodinový manžel v Trnave"
          description="Váš majster pre Trnavu a okolie. Profesionálna pomoc s údržbou a opravami vo vašej domácnosti."
          formTitle="Rezervovať majstra"
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
      <GoogleReviews title="Recenzie z Trnavy" />
      <Reviews showHeadline={true} />
      <ServicePricing filter={["hodinovy-manzel", "montaz-nabytku"]} />
      <Features title="Majstrovské služby v Trnave" description="Kvalitná práca pre váš spokojný domov." features={features} />
      <LocationMap
        title="Pôsobíme v celej Trnave"
        locations={["Trnava", "Modranka", "Biely Kostol", "Hrnčiarovce nad Parnou", "Zeleneč", "Zavar", "Brestovany", "Boleráz"]}
        additionalText="Obsluhujeme všetky mestské časti Trnavy a široké okolie."
      />
      <InstagramFeed />
      <FAQ title="Často kladené otázky — Trnava" items={faqItems} />
      <CTA
        title="Potrebujete hodinového manžela v Trnave?"
        description="Nečakajte na špecializované firmy. Náš majster vyrieši vaše drobné opravy rýchlo."
        buttonText="Kontaktovať majstra"
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
