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
  title: "Moving to Ireland — International Removals | Sofoservis",
  description:
    "Moving to Ireland from Slovakia? Approximately 2,000 km including sea crossing — 5-7 day delivery.",
  keywords:
    "moving to ireland, moving to ireland from slovakia, moving to ireland from bratislava, international moving ireland, relocation dublin cork",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-ireland",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/irsko",
      en: "https://www.sofoservis.sk/en/moving-to-ireland",
      "x-default": "https://www.sofoservis.sk/en/moving-to-ireland",
    },
  },
};

export default function MovingToIrelandPage() {
  const faqItems = [
    {
      question: "Are there customs requirements for moving from Slovakia to Ireland?",
      answer: "No — both Slovakia and Ireland are EU members. No customs formalities apply to personal household goods on this route.",
    },
    {
      question: "How long does delivery from Slovakia to Ireland take?",
      answer: "Door-to-door transit from Slovakia to Ireland typically takes 5-7 business days. The route includes a sea crossing (usually via ferry from France or Wales to Ireland).",
    },
    {
      question: "Do you deliver to all Irish cities?",
      answer: "Yes — we deliver throughout Ireland including Dublin, Cork, Galway, Limerick, Waterford, Kilkenny, and all other cities and towns.",
    },
    {
      question: "Does the sea crossing affect my goods?",
      answer: "All goods are secured inside the truck for the ferry crossing. Sea freight is fully insured and professionally managed by our team.",
    },
    {
      question: "Is furniture assembly available in Ireland?",
      answer: "Yes, furniture disassembly at your Slovak home and reassembly in Ireland is available as part of our full-service package.",
    },
  ];

  const featuresData = {
    title: "Moving to Ireland — Reliable International Service",
    description:
      "Professional door-to-door removals from Slovakia to Ireland. 2,000 km — 5-7 days.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "5-7 Day Delivery to Ireland",
        description: "Including sea crossing — reliable door-to-door delivery from Slovakia to Ireland.",
        link: "/en/moving-to-ireland",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Irish Cities",
        description: "Dublin, Cork, Galway, Limerick, Waterford, and all other Irish destinations.",
        link: "/en/moving-to-ireland",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs — EU to EU",
        description: "Ireland and Slovakia are both EU members — no customs formalities for personal goods.",
        link: "/en/moving-to-ireland",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description: "Reinforced packing for this long international journey including sea crossing.",
        link: "/en/moving-to-ireland",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description: "All items are insured for the full journey including the sea crossing.",
        link: "/en/moving-to-ireland",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description: "Disassembly in Slovakia, full reassembly in Ireland.",
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
          title="Moving to Ireland from Slovakia"
          description="Relocating from Slovakia to Ireland? Sofoservis provides professional door-to-door removals to Dublin, Cork, Galway, Limerick, and all Irish destinations — including the sea crossing."
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
          title="Moving to Ireland from Slovakia"
          description="Relocating from Slovakia to Ireland? Sofoservis provides professional door-to-door removals to Dublin, Cork, Galway, Limerick, and all Irish destinations — including the sea crossing."
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
      <div><GoogleReviews title="Trusted for Moves to Ireland" /></div>
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
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Customers Who Moved to Ireland" /></div>
      <div>
        <FAQ
          title="FAQ — Moving to Ireland from Slovakia"
          subtitle="Common questions about relocating to Ireland"
          items={faqItems}
          callToActionText="Moving to Ireland? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to Ireland?"
          description="Get a free quote today. We deliver from Slovakia to Ireland including sea crossing."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving to Dublin", description: "Dedicated Dublin route page.", href: "/en/moving-to-dublin", icon: "/icons/globe_icon.svg" },
          { title: "Moving Bratislava to Dublin", description: "Bratislava–Dublin moving route.", href: "/en/moving-bratislava-dublin", icon: "/icons/truck_icon.svg" },
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
