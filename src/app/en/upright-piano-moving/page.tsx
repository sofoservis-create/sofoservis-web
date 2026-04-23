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
  title: "Upright Piano Moving | Pianino Transport | Sofoservis",
  description:
    "Professional upright piano (pianino) moving service ✅ Specialist piano dollies & skids ✅ Staircase & window hoisting ✅ Insurance included ✅ Free quote!",
  keywords:
    "upright piano moving, pianino moving, move upright piano, upright piano transport, piano movers, upright piano removal Bratislava",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/upright-piano-moving",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-pianina",
      en: "https://www.sofoservis.sk/en/upright-piano-moving",
      "x-default": "https://www.sofoservis.sk/stahovanie-pianina",
    },
  },
  openGraph: {
    title: "Upright Piano Moving | Sofoservis",
    description:
      "Professional upright piano moving. Specialist equipment, safe staircase transport, insurance included.",
    url: "https://www.sofoservis.sk/en/upright-piano-moving",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

export default function UprightPianoMovingPage() {
  const featuresData = {
    title: "How we move an upright piano",
    description:
      "Every upright piano move is planned individually. Our approach depends on the instrument's weight, floor level and access conditions.",
    features: [
      {
        image: "/icons/crane_icon.svg",
        title: "Specialist Piano Dolly",
        description:
          "We use professional piano dollies with adjustable height and soft straps that protect the instrument and your flooring.",
        link: "/en/upright-piano-moving",
      },
      {
        image: "/icons/crane_icon.svg",
        title: "Piano Skids on Staircases",
        description:
          "When moving an upright piano up or down stairs we fit specialist piano skids — metal rails that allow the instrument to slide smoothly and safely, fully controlled at every step.",
        link: "/en/upright-piano-moving",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Packing & Protection",
        description:
          "Before the move we wrap the piano in thick blankets and stretch film, lock the keys to prevent slamming and secure the action against vibration during transport.",
        link: "/en/upright-piano-moving",
      },
      {
        image: "/icons/wrench_icon.svg",
        title: "Window & Balcony Hoisting",
        description:
          "If the stairwell is too narrow or the lift too small, we hoist the upright piano through a window or balcony using a façade-mounted electric moving lift. This is often the safest option in older buildings.",
        link: "/en/upright-piano-moving",
      },
      {
        image: "/icons/house_icon.svg",
        title: "Placement & Setup",
        description:
          "Once at the new location we unwrap the piano and position it precisely where you want it. We advise on the best spot to avoid humidity and temperature extremes.",
        link: "/en/upright-piano-moving",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Tuning Referral",
        description:
          "After every relocation the piano needs time to settle and then a tune-up. On request we can put you in touch with a qualified piano tuner.",
        link: "/en/upright-piano-moving",
      },
    ],
  };

  const faqItems = [
    {
      question: "How much does it cost to move an upright piano?",
      answer:
        "As a guide, moving an upright piano on the ground floor or with a lift starts from around €80. Upper floors without a lift or window hoisting incur a surcharge. We provide a free, no-obligation quote — just fill in the form with your details.",
    },
    {
      question: "How long does it take to move an upright piano?",
      answer:
        "Moving an upright piano within the same building typically takes 1–2 hours. When window hoisting is involved, allow 2–4 hours. Long-distance transport time depends on the journey.",
    },
    {
      question: "Do I need to do anything before the movers arrive?",
      answer:
        "No preparation is needed on your part. We recommend clearing the path to the piano and making sure the stairwell is free of obstacles. We handle all wrapping, any leg removal and mechanical securing.",
    },
    {
      question: "What if the piano won't fit through the doorway or stairwell?",
      answer:
        "This is a common situation in older apartment buildings. We solve it with a façade-mounted moving lift and hoist the piano through a window or balcony. We always check measurements beforehand and agree the method with you.",
    },
    {
      question: "Is the piano insured during the move?",
      answer:
        "Yes, our standard liability coverage applies to every job. For antique or very high-value instruments we recommend additional insurance through your own insurer.",
    },
    {
      question: "When should I have the piano tuned after the move?",
      answer:
        "Tuning professionals recommend waiting 4–6 weeks after the move for the piano to acclimatise to the new room's humidity and temperature. In winter, when temperature changes are greater, tuning may be needed a little sooner.",
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
          title="Upright Piano Moving"
          description="An upright piano typically weighs 200–300 kg and houses hundreds of delicate components. Trust its relocation to specialists. Our team brings professional piano dollies, staircase skids and protective materials to move your upright piano safely — up or down any staircase, to any floor, or through a window when needed."
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
          title="Upright Piano Moving"
          description="An upright piano typically weighs 200–300 kg and houses hundreds of delicate components. Trust its relocation to specialists. Our team brings professional piano dollies, staircase skids and protective materials to move your upright piano safely — up or down any staircase, to any floor, or through a window when needed."
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
          title="Frequently Asked Questions About Upright Piano Moving"
          items={faqItems}
          expandableGroup={{
            label: "Everything about upright piano moving",
            panels: [
              {
                title: "Indicative upright piano moving prices",
                content:
                  "Ground floor or floor with lift: from €80\n2nd–3rd floor, no lift: from €100\n4th floor and above: from €130\nWindow / balcony hoisting surcharge: from €50\nTransport outside Bratislava: price on request\n\nAll prices are indicative. The final price depends on specific conditions. Free quote available.",
              },
              {
                title: "Why you should not move an upright piano yourself",
                content:
                  "A DIY piano move risks serious injury, damage to the instrument, scratched floors and damaged walls. An upright piano is not simply a heavy box — it is a precision mechanism that can be thrown out of regulation by a single hard knock or tilt.\n\nOur crew has the correct equipment, trained technique and liability insurance to complete the move safely, quickly and without stress.",
              },
              {
                title: "Upright piano moving in Bratislava and across Slovakia",
                content:
                  "We mainly serve Bratislava and its surroundings, but we also transport upright pianos across Slovakia. From Bratislava to Košice, Žilina, Nitra, Prešov or any other destination — contact us for an individual quote.",
              },
            ],
          }}
          callToActionText="Need help moving an upright piano? Contact us"
        />
      </div>

      <div>
        <CTA
          title="Ready to move your upright piano?"
          description="Let our specialist team handle it with the right equipment, care and experience."
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
            title: "Piano & Grand Piano Moving",
            description: "Full piano moving service including grand pianos.",
            href: "/en/piano-moving",
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
            description: "All heavy item moving services in one place.",
            href: "/en/moving-heavy-loads",
            icon: "/icons/crane_icon.svg",
          },
        ]}
      />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
