import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import CTA from "@/components/sections/CTA";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Moving to Brno — Removals to Czech Republic | Sofoservis",
  description:
    "Moving to Brno from Slovakia? Only 130 km from Bratislava — same-day or next-day delivery. Door-to-door moving service to the Czech Republic's second city.",
  keywords:
    "moving to brno, moving to brno from slovakia, moving to brno from bratislava, removals brno, relocation brno czech republic",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-brno",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/brno",
      en: "https://www.sofoservis.sk/en/moving-to-brno",
      "x-default": "https://www.sofoservis.sk/en/moving-to-brno",
    },
  },
};

export default function MovingToBrnoPage() {
  const faqItems = [
    {
      question: "How far is Brno from Bratislava?",
      answer: "Brno is approximately 130 km from Bratislava — about a 1.5 hour drive. This makes it one of our shortest international routes, often completable in a single working day.",
    },
    {
      question: "Are there customs requirements for moving from Slovakia to Brno?",
      answer: "No — both Slovakia and the Czech Republic are EU members. No customs formalities apply to personal household goods on this route.",
    },
    {
      question: "Can you complete a Bratislava–Brno move in a single day?",
      answer: "Yes, for most household sizes the move can be completed in a single day: loading in the morning, delivery and unloading in Brno in the afternoon.",
    },
    {
      question: "Do you deliver to all areas of Brno?",
      answer: "Yes — we deliver to all Brno districts including Brno-střed, Brno-Kohoutovice, Brno-Bystrc, Brno-Líšeň, and all surrounding municipalities.",
    },
    {
      question: "Is furniture assembly available in Brno?",
      answer: "Yes, we offer furniture disassembly at your Slovak property and full reassembly in Brno as part of our full-service package.",
    },
  ];

  const featuresData = {
    title: "Moving to Brno — Reliable International Service",
    description:
      "Professional door-to-door removals from Slovakia to Brno. 130 km — 1 day.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Same-Day or Next-Day Delivery",
        description: "At only 130 km, most Bratislava–Brno moves are completed within a single working day.",
        link: "/en/moving-to-brno",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Brno Districts Covered",
        description: "We deliver to all Brno districts and the surrounding metropolitan region.",
        link: "/en/moving-to-brno",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs — EU to EU",
        description: "Czech Republic and Slovakia are both EU members — seamless border crossing.",
        link: "/en/moving-to-brno",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description: "Professional packing and unpacking available for the Bratislava–Brno route.",
        link: "/en/moving-to-brno",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description: "All belongings are insured during the short journey to Brno.",
        link: "/en/moving-to-brno",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description: "Disassembly in Slovakia, full reassembly in Brno.",
        link: "/en/furniture-assembly",
      },
    ],
  };

  return (
    <main className="bg-white">
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
      <link
        rel="preload"
        href="/images/mascot/mascot-holding-boxes-mobile.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)"
      />
      <link
        rel="preload"
        href="/images/mascot/mascot-holding-boxes.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)"
      />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title="Moving to Brno from Slovakia"
          description="Relocating from Slovakia to Brno? At just 130 km from Bratislava, Brno is one of the closest international destinations we serve. Same-day or next-day delivery, no customs formalities."
          formTitle="Get a Free Quote"
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
          title="Moving to Brno from Slovakia"
          description="Relocating from Slovakia to Brno? At just 130 km from Bratislava, Brno is one of the closest international destinations we serve. Same-day or next-day delivery, no customs formalities."
          formTitle="Get a Free Quote"
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
      <div><Clients /></div>
      <div><GoogleReviews title="Trusted for Moves to Brno" /></div>
      <div><Reviews showHeadline={true} callToActionText="Get a Quote" /></div>
      <div>
        <Features
          title={featuresData.title}
          description={featuresData.description}
          features={featuresData.features}
          callToActionText="Get a Free Quote"
        />
      </div>
      <div><InstagramFeed title="Follow Us on Instagram" /></div>
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Customers Who Moved to Brno" /></div>
      <div>
        <FAQ
          title="FAQ — Moving to Brno from Slovakia"
          subtitle="Common questions about relocating to Brno"
          items={faqItems}
          callToActionText="Moving to Brno? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to Brno?"
          description="Get a free quote today. We deliver from Slovakia to Brno in as little as one day."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving to Czech Republic", description: "Full Slovakia-to-Czech Republic coverage.", href: "/en/moving-to-czech-republic", icon: "/icons/globe_icon.svg" },
          { title: "Moving to Prague", description: "Also moving to Prague?", href: "/en/moving-to-prague", icon: "/icons/globe_icon.svg" },
          { title: "International Moving Services", description: "All international routes and destinations.", href: "/en/international-moving-services", icon: "/icons/globe_icon.svg" },
          { title: "Furniture Assembly", description: "Expert assembly and disassembly of all furniture.", href: "/en/furniture-assembly", icon: "/icons/wrench_icon.svg" },
        ]}
      />
      <ServicePricing filter={["international-moving", "moving"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
