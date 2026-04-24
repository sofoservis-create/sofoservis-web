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
  title: "Moving to Lisbon — International Removals | Sofoservis",
  description:
    "Moving to Lisbon from Slovakia? Approximately 2,700 km — regular routes with 6-9 day delivery.",
  keywords:
    "moving to lisbon, moving to lisbon from slovakia, moving to portugal from slovakia, international moving lisbon, relocation lisbon portugal",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-lisbon",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/lisabon",
      en: "https://www.sofoservis.sk/en/moving-to-lisbon",
      "x-default": "https://www.sofoservis.sk/en/moving-to-lisbon",
    },
  },
};

export default function MovingToLisbonPage() {
  const faqItems = [
    {
      question: "Are there customs requirements for moving from Slovakia to Lisbon?",
      answer:
        "No — Slovakia and Portugal are both EU members. No customs formalities apply to personal household goods between the two countries.",
    },
    {
      question: "How long does delivery from Slovakia to Lisbon take?",
      answer:
        "We typically deliver from Slovakia to Lisbon within 6-9 business days. Portugal is one of our longest EU routes, but our regular departures ensure reliable delivery.",
    },
    {
      question: "Do you deliver throughout Lisbon and surrounding areas?",
      answer:
        "Yes, we deliver throughout the Lisbon metropolitan area — all Lisbon parishes and surrounding municipalities including Cascais, Sintra, Setúbal, and Almada.",
    },
    {
      question: "Can I use a groupage service for my move to Lisbon?",
      answer:
        "Yes, groupage is available for smaller shipments. We consolidate with other Iberian Peninsula-bound loads for cost-effective transport.",
    },
    {
      question: "Do you offer furniture assembly in Lisbon?",
      answer:
        "Yes, furniture disassembly at your Slovak home and reassembly in Lisbon is available as part of our full-service package.",
    },
  ];

  const featuresData = {
    title: "Moving to Lisbon — Long-Distance Iberian Route",
    description:
      "Lisbon and Portugal are increasingly popular with Slovaks moving abroad. Our regular routes make even this long journey manageable.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "6-9 Day Delivery to Lisbon",
        description: "Regular departures ensure reliable delivery from Slovakia to Lisbon within 6-9 business days.",
        link: "/en/moving-to-lisbon",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Greater Lisbon Area",
        description: "We deliver throughout the Lisbon metropolitan area and surrounding municipalities.",
        link: "/en/moving-to-lisbon",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description: "Expert packing for safe very long-distance delivery to Lisbon.",
        link: "/en/moving-to-lisbon",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description: "Disassembly in Slovakia, full reassembly in Lisbon.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description: "All belongings insured throughout the entire journey to Lisbon.",
        link: "/en/moving-to-lisbon",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs",
        description: "EU-to-EU move — no customs formalities required.",
        link: "/en/moving-to-lisbon",
      },
    ],
  };

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
          title="Moving to Lisbon from Slovakia"
          description="Relocating from Slovakia to Lisbon? Sofoservis provides professional door-to-door removals to Portugal's capital. Regular routes, 6-9 day delivery, and a fully managed experience for your long-distance move."
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
          title="Moving to Lisbon from Slovakia"
          description="Relocating from Slovakia to Lisbon? Sofoservis provides professional door-to-door removals to Portugal's capital. Regular routes, 6-9 day delivery, and a fully managed experience for your long-distance move."
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
      <div><GoogleReviews title="Trusted for Moves to Lisbon" /></div>
      <div><Reviews showHeadline={true} callToActionText="Get a Quote" /></div>
      <div><Features title={featuresData.title} description={featuresData.description} features={featuresData.features} callToActionText="Get a Free Quote" /></div>
      <div><InstagramFeed title="Follow Us on Instagram" /></div>
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Our Clients" /></div>
      <div><FAQ title="FAQ — Moving to Lisbon from Slovakia" subtitle="Common questions about relocating to Lisbon" items={faqItems} callToActionText="Moving to Lisbon? Get a free quote" /></div>
      <div><CTA title="Ready to Move to Lisbon?" description="Get a free quote today. We deliver from Slovakia to Lisbon — a long journey made easy." buttonText="Request a Quote" /></div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving to Barcelona", description: "Also moving to Barcelona?", href: "/en/moving-to-barcelona", icon: "/icons/truck_icon.svg" },
          { title: "Moving to Paris", description: "Also moving to Paris?", href: "/en/moving-to-paris", icon: "/icons/truck_icon.svg" },
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
