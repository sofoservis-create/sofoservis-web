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
  title: "Safe Moving Service — Vault & Safe Transport | Sofoservis",
  description:
    "Professional safe and vault moving ✅ Hydraulic jacks & motor platforms ✅ Weight categories from small safes to bank vaults ✅ Discreet service ✅ Free quote!",
  keywords:
    "safe moving, vault moving, moving a safe, safe transport, move heavy safe, safe movers Bratislava, vault relocation",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/safe-moving",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-trezorov",
      en: "https://www.sofoservis.sk/en/safe-moving",
      "x-default": "https://www.sofoservis.sk/stahovanie-trezorov",
    },
  },
  openGraph: {
    title: "Safe Moving Service | Sofoservis",
    description:
      "Professional moving of safes and vaults. Hydraulic equipment, discreet team, all weight categories covered.",
    url: "https://www.sofoservis.sk/en/safe-moving",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

export default function SafeMovingPage() {
  const featuresData = {
    title: "Safe moving by weight category",
    description:
      "Every safe is different. Weight, dimensions and location determine what equipment and how many crew members we need.",
    features: [
      {
        image: "/icons/safe_icon.svg",
        title: "Small safes (up to 100 kg)",
        description:
          "Wall-mounted and freestanding safes up to 100 kg can usually be relocated by hand with a specialist trolley. Quick and cost-effective — suitable for homes.",
        link: "/en/safe-moving",
      },
      {
        image: "/icons/safe_icon.svg",
        title: "Medium safes (100–500 kg)",
        description:
          "Safes in this weight range require hydraulic equipment and powered trolleys. The process involves correctly securing the safe, lifting it and moving it in a controlled manner to its new position or into the vehicle.",
        link: "/en/safe-moving",
      },
      {
        image: "/icons/safe_icon.svg",
        title: "Heavy safes (500 kg – 2 tonnes)",
        description:
          "For safes above 500 kg we deploy specialist motor platforms and hydraulic jacks. We always verify floor load capacity and building structure before the move.",
        link: "/en/safe-moving",
      },
      {
        image: "/icons/crane_icon.svg",
        title: "Bank & archive vaults (2+ tonnes)",
        description:
          "Very heavy safes, bank vault doors or archive boxes require heavy machinery including cranes. Every job in this category is planned individually with a detailed relocation plan.",
        link: "/en/safe-moving",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Discreet transport",
        description:
          "We understand that moving a safe is a sensitive matter. Our crew is bound by confidentiality and the entire operation is conducted discreetly. We can also work outside business hours if required.",
        link: "/en/safe-moving",
      },
      {
        image: "/icons/wrench_icon.svg",
        title: "Installation & anchoring",
        description:
          "After delivering the safe to its new location we also handle installation and anchoring to the wall or floor where required. We hand over a fully secured and functional safe.",
        link: "/en/safe-moving",
      },
    ],
  };

  const faqItems = [
    {
      question: "How much does it cost to move a safe?",
      answer:
        "The price depends primarily on the safe's weight, floor level, distance and access conditions. As a guide: small safe up to 100 kg from €60; medium safe 100–500 kg from €150; heavy safe over 500 kg from €300. An accurate price is provided after consultation and, if needed, a site visit.",
    },
    {
      question: "Do I need special permits to move a safe?",
      answer:
        "In most cases no permits are required. The exception is exceptionally heavy safes where a crane must be used in a public space — in that case a temporary road/pavement use permit from the local authority may be needed. We can handle this paperwork on your behalf.",
    },
    {
      question: "How do you make sure the safe isn't scratched or damaged?",
      answer:
        "We wrap safes in protective blankets and film before any movement. Floor protection pads are laid throughout the route. All movement is slow and controlled using hydraulic equipment — not brute force.",
    },
    {
      question: "Can you move a safe from a basement or underground garage?",
      answer:
        "Yes. Basements and underground garages are among the more challenging environments — tight spaces, steps without handrails, low ceilings. We have the appropriate equipment (low-profile hydraulic trolleys, platforms) and the experience to handle them.",
    },
    {
      question: "What if the safe won't fit through the doorway?",
      answer:
        "In that case we can use window hoisting with a moving lift or crane. We can also advise on temporary widening of an opening if necessary — but this is always discussed and agreed with the client first.",
    },
    {
      question: "Do you move safes outside Bratislava?",
      answer:
        "Yes, we operate nationwide. For jobs outside Bratislava we prepare an individual quote including transport costs.",
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
          title="Safe & Vault Moving Service"
          description="Moving a safe or vault requires specialist equipment, experience and discretion. Our team uses hydraulic jacks, motor platforms and other equipment to relocate safes of any weight — from small wall safes to large bank vaults weighing several tonnes."
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
          title="Safe & Vault Moving Service"
          description="Moving a safe or vault requires specialist equipment, experience and discretion. Our team uses hydraulic jacks, motor platforms and other equipment to relocate safes of any weight — from small wall safes to large bank vaults weighing several tonnes."
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
          title="What customers say about our safe moving service"
        />
      </div>

      <div>
        <FAQ
          title="Frequently Asked Questions About Safe Moving"
          items={faqItems}
          expandableGroup={{
            label: "Everything about safe moving",
            panels: [
              {
                title: "Indicative safe moving prices",
                content:
                  "Small safe (up to 100 kg, ground floor): from €60\nMedium safe (100–500 kg): from €150\nHeavy safe (500 kg – 2 tonnes): from €300\nBank / archive vault (2+ tonnes): individual quote\n\nSurcharges may apply for upper floors, window/crane hoisting or transport outside Bratislava. We always inform you of the full price upfront.",
              },
              {
                title: "Why a site inspection matters for safe moving",
                content:
                  "Safes are heavy objects with specific dimensions. Before we start we need to know: weight and dimensions of the safe, access route (floor, lift, corridor width), destination location and entry options, floor load capacity.\n\nBased on the inspection we recommend the optimal approach and the exact equipment needed. Site inspections are free of charge.",
              },
              {
                title: "Technical equipment for safe moving",
                content:
                  "We carry hydraulic jacks (capacity up to 5 tonnes), powered manipulation trolleys, steel rollers for sliding on concrete floors, façade-mounted lifting platforms, and specialist staircase platforms. This equipment allows us to safely relocate a safe in virtually any conditions.",
              },
            ],
          }}
          callToActionText="Need help moving a safe? Contact us"
        />
      </div>

      <div>
        <CTA
          title="Need to move a safe or vault?"
          description="Let our specialist team handle it safely, discreetly and with the right equipment."
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
            title: "Piano Moving",
            description: "Specialist transport of pianos, uprights and grand pianos.",
            href: "/en/piano-moving",
            icon: "/icons/crane_icon.svg",
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
          {
            title: "Apartment Moving",
            description: "Professional home and apartment relocation services.",
            href: "/en/apartment-moving",
            icon: "/icons/house_icon.svg",
          },
        ]}
      />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
