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
  title: "Piano Moving — Upright & Grand Piano | Sofoservis",
  description:
    "Professional piano moving service ✅ Upright pianos, grand pianos & baby grands ✅ Specialist piano dollies and skids ✅ Staircase & window hoisting ✅ Free.",
  keywords:
    "piano moving, upright piano moving, grand piano moving, piano transport, move a piano, piano movers Bratislava, piano relocation",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/piano-moving",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-klavira",
      en: "https://www.sofoservis.sk/en/piano-moving",
      "x-default": "https://www.sofoservis.sk/stahovanie-klavira",
    },
  },
  openGraph: {
    title: "Piano Moving Service | Sofoservis",
    description:
      "Professional piano moving. Specialist equipment, experienced team, fully insured transport of pianos, uprights and grand pianos.",
    url: "https://www.sofoservis.sk/en/piano-moving",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

export default function PianoMovingPage() {
  const featuresData = {
    title: "What's included in our piano moving service?",
    description:
      "We handle all types of pianos — upright pianos, grand pianos and baby grands. Each move is planned individually based on the instrument's weight, size and access conditions.",
    features: [
      {
        image: "/icons/crane_icon.svg",
        title: "Upright Piano",
        description:
          "Upright pianos typically weigh 200–300 kg. We use specialist piano dollies with height adjustment and soft straps to protect both the instrument and your floors. On staircases we fit piano skids for a controlled descent or ascent.",
        link: "/en/piano-moving",
      },
      {
        image: "/icons/crane_icon.svg",
        title: "Grand & Baby Grand Piano",
        description:
          "Grand pianos are the most challenging to move — some concert grands weigh over 500 kg. We disassemble the pedal lyre and lid, wrap the instrument in protective blankets, and transport it on a specialist grand piano board.",
        link: "/en/piano-moving",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Packing & Protection",
        description:
          "Before any move we wrap the piano in thick furniture blankets and stretch wrap, secure the keys to prevent slamming, and brace the action mechanism against vibration.",
        link: "/en/piano-moving",
      },
      {
        image: "/icons/wrench_icon.svg",
        title: "Window & Balcony Hoisting",
        description:
          "When stairwells are too narrow or a lift can't accommodate the instrument, we hoist the piano through a window or balcony using a façade-mounted moving lift — safer than forcing it through unsuitable spaces.",
        link: "/en/piano-moving",
      },
      {
        image: "/icons/house_icon.svg",
        title: "Placement at the New Location",
        description:
          "After delivery we carefully unwrap the piano and position it exactly where you want it. We advise keeping it away from radiators and damp walls to protect the soundboard.",
        link: "/en/piano-moving",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Tuning Referral After the Move",
        description:
          "Every piano needs to acclimatise and be tuned after relocation. On request we can refer you to an experienced piano tuner so your instrument is performance-ready as soon as possible.",
        link: "/en/piano-moving",
      },
    ],
  };

  const faqItems = [
    {
      question: "How much does it cost to move a piano?",
      answer:
        "The price depends on the type of piano (upright, grand), the floor level, distance and access conditions. As a guide, a straightforward upright piano move within the city starts from around €80. We provide a free, no-obligation quote — just fill in the form.",
    },
    {
      question: "How long does piano moving take?",
      answer:
        "Moving an upright piano within the same building usually takes 1–2 hours. When window hoisting is required, allow 2–4 hours including setup. Long-distance transport time depends on the distance.",
    },
    {
      question: "Do I need to prepare anything before the movers arrive?",
      answer:
        "No — our team handles everything. We recommend clearing a path to the piano and checking that the stairwell is free of obstacles. We take care of wrapping, disassembly of any legs or lyre, and securing the action.",
    },
    {
      question: "What if the piano won't fit through the door or stairwell?",
      answer:
        "This is common in older buildings. We solve it by using a façade-mounted moving lift to hoist the piano through a window or balcony opening. We always check dimensions in advance and agree the best approach with you.",
    },
    {
      question: "Is the piano insured during the move?",
      answer:
        "Our liability coverage is included in every job. For particularly valuable instruments (antique pianos, concert grands) we recommend additional insurance through your insurer — we're happy to advise.",
    },
    {
      question: "When should I tune the piano after moving?",
      answer:
        "Piano technicians recommend waiting 4–6 weeks for the instrument to acclimatise to the new humidity and temperature before tuning. If the move involved a significant temperature change (e.g. in winter), tuning may be needed sooner.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
      <link rel="preload"
        href="/images/mascot/mascot-holding-boxes-mobile.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/mascot-holding-boxes.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)" fetchPriority="high" />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title="Piano Moving Service"
          description="Trust the moving of your piano, upright or grand to our specialist team. We carry professional piano dollies, skids and protective materials for safe transport — including up and down staircases, to upper floors or through windows."
          formTitle="Get a free price quote"
          formSubtitle="Fill out the form for a no-obligation estimate"
          benefits={[]}
          ratingText="3500+ satisfied customers"
          lang="en"
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          desktopMascotScaleMultiplier={1.03}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Piano Moving Service"
          description="Trust the moving of your piano, upright or grand to our specialist team. We carry professional piano dollies, skids and protective materials for safe transport — including up and down staircases, to upper floors or through windows."
          formTitle="Get a free price quote"
          formSubtitle="Fill out the form for a no-obligation estimate"
          benefits={[]}
          ratingText="3500+ satisfied customers"
          lang="en"
          showMascot
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          mobileMascotSrc="/images/mascot/mascot-holding-boxes-mobile.svg"
          mobileMascotOffsetY={-44}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>

      <div>
        <Clients />
      </div>

      <div>
        <GoogleReviews title="Trusted by customers across Slovakia" />
      </div>

      <HowItWorks lang="en" />

      <div>
        <Reviews showHeadline={true} callToActionText="Get a Quote" />
      </div>

      <div>
        <Features
          title={featuresData.title}
          description={featuresData.description}
          features={featuresData.features}
          callToActionText="Get a Free Quote"
        />
      </div>

      <div>
        <InstagramFeed title="Follow Us on Instagram" />
      </div>

      <div>
        <GoogleReviews
          showReviewsShowcase={false}
          title="What customers say about our piano moving service"
        />
      </div>

      <div>
        <FAQ
          title="Frequently Asked Questions About Piano Moving"
          items={faqItems}
          expandableGroup={{
            label: "Everything about piano moving",
            panels: [
              {
                title: "Indicative piano moving prices",
                content:
                  "Upright piano (ground floor or floor with lift): from €80\nUpright piano (2nd–3rd floor, no lift): from €100\nUpright piano (4th floor and above): from €130\nWindow / balcony hoisting surcharge: from €50\nLong-distance transport outside Bratislava: price on request\n\nAll prices are indicative. The final price depends on specific conditions. We provide quotes free of charge.",
              },
              {
                title: "Why not move a piano yourself?",
                content:
                  "Attempting a DIY piano move risks injury, damage to the instrument, scratched floors and damaged walls — and in the worst case a dangerous fall on the stairs. A piano is not just heavy; it's a delicate mechanism of hundreds of parts that can be damaged by a single jolt or incorrect tilt.\n\nOur company has the right equipment, trained staff and liability insurance to carry out the move safely and efficiently.",
              },
              {
                title: "Piano moving in Bratislava and across Slovakia",
                content:
                  "We primarily serve Bratislava and the surrounding region, but also carry out piano transport throughout Slovakia. Whether you need a piano moved from Bratislava to Košice, Žilina, Nitra or Prešov, contact us and we will prepare an individual quote.",
              },
            ],
          }}
          callToActionText="Need help moving a piano? Contact us"
        />
      </div>

      <div>
        <CTA
          title="Need to move a piano?"
          description="Let our specialist team handle it safely with the right equipment and experience."
          buttonText="Get a free quote"
        />
      </div>

      <ServicePricing filter={["moving", "clearance", "international-moving"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />

      <RelatedServices
        title="Related Services"
        services={[
          {
            title: "Upright Piano Moving",
            description: "Dedicated page for upright piano (pianino) moving.",
            href: "/en/upright-piano-moving",
            icon: "/icons/crane_icon.svg",
          },
          {
            title: "Safe Moving",
            description: "Professional moving of safes and vaults of all weights.",
            href: "/en/safe-moving",
            icon: "/icons/safe_icon.svg",
          },
          {
            title: "Machinery Moving",
            description: "Relocation of industrial machines, CNC equipment and ATMs.",
            href: "/en/machinery-moving",
            icon: "/icons/heavy_machinery_icon.svg",
          },
          {
            title: "Moving Heavy Loads",
            description: "Hub page for all heavy item moving services.",
            href: "/en/moving-heavy-loads",
            icon: "/icons/crane_icon.svg",
          },
        ]}
      />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
