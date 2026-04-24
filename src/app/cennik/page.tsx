import React from "react";
import LabHero from "@/components/sections/LabHero";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import Container from "@/components/ui/Container";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Cenník – Sťahovanie, Vypratávanie, Montáž | Sofoservis",
  description:
    "Transparentné ceny za naše služby. Sťahovanie od 25€/hod, vypratávanie od 25€/hod, montáž nábytku od 20€. Obhliadka zadarmo!",
  alternates: {
    canonical: "https://www.sofoservis.sk/cennik",
      languages: {
        sk: "https://www.sofoservis.sk/cennik",
        en: "https://www.sofoservis.sk/en/pricing",
        "x-default": "https://www.sofoservis.sk/cennik",
      },
  },
  keywords:
    "cenník sťahovanie, ceny sťahovanie, cenník vypratávanie, ceny montáž nábytku, cenník sofoservis, ceny služieb bratislava",
  openGraph: {
      title: "Cenník – Sťahovanie, Vypratávanie, Montáž | Sofoservis",
      description: "Transparentné ceny za naše služby. Sťahovanie od 25€/hod, vypratávanie od 25€/hod, montáž nábytku od 20€. Obhliadka zadarmo!",
      url: "https://www.sofoservis.sk/cennik",
      siteName: "Sofoservis",
      images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
      locale: "sk_SK",
      type: "website",
    },
  };

// Clean Pricing Card Component
interface PricingCardProps {
  title: string;
  items: Array<{
    label: string;
    price: string;
    isHighlighted?: boolean;
  }>;
  buttonText: string;
}

function PricingCard({ title, items, buttonText }: PricingCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 h-full flex flex-col">
      {/* Title */}
      <h3 className="text-xl font-bold text-primary-900 text-center mb-6">
        {title}
      </h3>

      {/* Pricing Items */}
      <div className="flex-grow space-y-3 mb-6">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex justify-between items-center py-2 px-3 rounded-lg ${
              item.isHighlighted
                ? "bg-accent-100 font-semibold text-accent-700"
                : "text-primary-700"
            }`}
          >
            <span className="text-sm">{item.label}</span>
            <span className="text-sm font-bold">{item.price}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <a
        href="/kontakt"
        className="w-full bg-primary-900 hover:bg-primary-800 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 text-sm text-center block"
      >
        {buttonText}
      </a>
    </div>
  );
}

export default function CennikPage() {
  const pricingData = {
    stahovanie: {
      title: "SŤAHOVANIE",
      items: [
        { label: "Obhliadka", price: "zadarmo" },
        { label: "1 pracovník", price: "25€/hod" },
        { label: "2 pracovníci", price: "50€/hod" },
        {
          label: "3 pracovníci - AKCIA",
          price: "67€/hod",
          isHighlighted: true,
        },
        { label: "Každý ďalší", price: "17€/hod" },
        { label: "Vynáška bez výťahu", price: "15€/poschodie" },
        { label: "Sťahovanie v rámci mesta", price: "od 40€" },
        { label: "Sťahovanie mimo mesta", price: "0.70€/Km" },
        { label: "Medzinárodné sťahovanie", price: "dohodou" },
        { label: "Sťahovanie bremien", price: "od 80€" },
        { label: "Sťahovanie skladov", price: "dohodou" },
        { label: "Sťahovanie kancelárií", price: "dohodou" },
      ],
      buttonText: "ZÍSKAŤ OBHLIADKU ZADARMO",
    },
    vypratavanie: {
      title: "VYPRATÁVANIE",
      items: [
        { label: "Obhliadka", price: "zadarmo" },
        { label: "1 pracovník", price: "25€/hod" },
        { label: "2 pracovníci", price: "50€/hod" },
        {
          label: "3 pracovníci - AKCIA",
          price: "67€/hod",
          isHighlighted: true,
        },
        { label: "Plná dodávka 17 m2", price: "200€" },
        { label: "Pivnica klasik (kobka)", price: "od 60€" },
        { label: "Väčšia pivnica", price: "dohodou" },
        { label: "Garáž", price: "od 70€" },
        { label: "Byt jednoizbový", price: "od 200€" },
        { label: "Každá ďalšia miestnosť", price: "60€" },
      ],
      buttonText: "ZÍSKAŤ OBHLIADKU ZADARMO",
    },
    montazNabytku: {
      title: "MONTÁŽ NÁBYTKU",
      items: [
        { label: "Montáž/demontáž", price: "podľa typu nábytku" },
        { label: "Výjazd", price: "od 20€" },
      ],
      buttonText: "REZERVÁCIA ZDARMA",
    },
    montazKuchyne: {
      title: "MONTÁŽ KUCHYNE",
      items: [
        { label: "Montáž", price: "od 120€/m" },
        { label: "Demontáž", price: "od 60€/m" },
        { label: "Výjazd", price: "od 20€" },
      ],
      buttonText: "REZERVÁCIA ZDARMA",
    },
  };

  return (
    <main className="bg-white">
      {/* Hero section */}
      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title="Cenník našich služieb"
          description="Transparentné a férové ceny za profesionálne sťahovacie služby, vypratávanie a montáž nábytku. Všetky ceny sú konečné bez skrytých poplatkov."
          backgroundImage="/images/stahovanie-gauc.avif"
          formTitle="Získajte presnú cenovú ponuku"
          formSubtitle="Vyplňte formulár pre nezáväznú kalkuláciu"
          badgeText="Obhliadka priestoru zadarmo"
          ratingText="3500+ spokojných zákazníkov"
          benefits={[
            "Transparentné ceny",
            "Bez skrytých poplatkov",
            "Obhliadka zadarmo",
          ]}
          desktopMascotDynamicHeight
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Cenník našich služieb"
          description="Transparentné a férové ceny za profesionálne sťahovacie služby, vypratávanie a montáž nábytku. Všetky ceny sú konečné bez skrytých poplatkov."
          backgroundImage="/images/stahovanie-gauc.avif"
          formTitle="Získajte presnú cenovú ponuku"
          formSubtitle="Vyplňte formulár pre nezáväznú kalkuláciu"
          badgeText="Obhliadka priestoru zadarmo"
          ratingText="3500+ spokojných zákazníkov"
          benefits={[
            "Transparentné ceny",
            "Bez skrytých poplatkov",
            "Obhliadka zadarmo",
          ]}
          showMascot
          pillsVariant="home"
        />
      </div>

      {/* Clients section */}
      <div>
        <Clients />
      </div>

      {/* NEW Pricing Section - replaces existing Pricing component */}
      <section className="pt-10 md:pt-[100px] pb-10 md:pb-[80px] bg-white overflow-hidden" id="cennik">
        <Container>
          <div className="text-center mx-auto max-w-4xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Cenník služieb
            </h2>
            <p className="text-lg text-primary-600/90 mx-auto">
              Konečná cena závisí od rozsahu prác a konkrétnych požiadaviek. Všetky ceny sú uvedené bez DPH.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <PricingCard
              title={pricingData.stahovanie.title}
              items={pricingData.stahovanie.items}
              buttonText={pricingData.stahovanie.buttonText}
            />
            <PricingCard
              title={pricingData.vypratavanie.title}
              items={pricingData.vypratavanie.items}
              buttonText={pricingData.vypratavanie.buttonText}
            />
            <PricingCard
              title={pricingData.montazNabytku.title}
              items={pricingData.montazNabytku.items}
              buttonText={pricingData.montazNabytku.buttonText}
            />
            <PricingCard
              title={pricingData.montazKuchyne.title}
              items={pricingData.montazKuchyne.items}
              buttonText={pricingData.montazKuchyne.buttonText}
            />
          </div>
        </Container>
      </section>

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
          title="Často kladené otázky o cenách"
          items={[
            {
              question: "Sú ceny uvedené v cenníku konečné?",
              answer:
                "Konečná cena závisí od rozsahu práce, ktorý presne určíme pri bezplatnej obhliadke.",
            },
            {
              question: "Ako funguje bezplatná obhliadka?",
              answer:
                "Bezplatná obhliadka je služba, ktorú poskytujeme úplne zadarmo a bez záväzkov. Náš odborník si prezrie priestory, zhodnotí rozsah práce a pripraví presnú cenovú ponuku na mieru vašim potrebám.",
            },
            {
              question: "Poskytujete služby aj cez víkendy?",
              answer:
                "Áno, naše služby poskytujeme 6 dní v týždni vrátane soboty od 8:00 do 17:00. Nedeľa je podľa dohody. Za prácu počas soboty neúčtujeme žiadny príplatok.",
            },
            {
              question: "Čo zahŕňa akciová cena pre 3 pracovníkov?",
              answer:
                "Akciová cena 67€/hod pre 3 pracovníkov je našou najobľúbenejšou možnosťou, ktorá poskytuje vynikajúci pomer ceny a výkonu. Pri štandardnom účtovaní by 3 pracovníci stáli 75€/hod (3 × 25€), takže ušetríte 8€ za každú hodinu.",
            },
            {
              question: "Ako sa počítajú cestovné náklady?",
              answer:
                "Pre sťahovanie v rámci mesta účtujeme paušálnu sumu od 40€. Pre vzdialenejšie destinácie účtujeme 0,70€ za kilometer. Presná cena cestovného sa určí pri obhliadke na základe konkrétnej trasy.",
            },
          ]}
        />
      </div>

      <div>
        <CTA />
      </div>

      <ContactFormSection />

      <RelatedServices
        title="Naše služby"
        services={[
          {
            title: "Sťahovanie bytov a domov",
            description: "Profesionálne sťahovanie bytov, domov a chalúp po celom Slovensku.",
            href: "/stahovanie-bytov-domov",
            icon: "/icons/truck_icon.svg",
          },
          {
            title: "Vypratávanie priestorov",
            description: "Vypratávanie bytov, pivníc, garáží a firemných priestorov vrátane odvozu odpadu.",
            href: "/vypratavanie-bytov-domov",
            icon: "/icons/vypratavanie_icon.svg",
          },
          {
            title: "Montáž nábytku",
            description: "Montáž nábytku IKEA, kuchynských liniek a nábytku všetkých značiek.",
            href: "/montaz-nabytku",
            icon: "/icons/hammer_icon.svg",
          },
          {
            title: "Medzinárodné sťahovanie",
            description: "Sťahovanie do zahraničia a zo zahraničia na Slovensko za férové ceny.",
            href: "/medzinarodne-stahovanie",
            icon: "/icons/globe_icon.svg",
          },
        ]}
      />
    </main>
  );
}
