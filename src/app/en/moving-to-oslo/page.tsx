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
  title: "Moving to Oslo — International Removals | Sofoservis",
  description:
    "Moving to Oslo from Slovakia? We handle Norwegian customs clearance and deliver door-to-door to Oslo. 5-8 day delivery with full packing and furniture.",
  keywords:
    "moving to oslo, moving to oslo from slovakia, moving to norway from slovakia, international moving oslo, relocation oslo norway",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-oslo",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/oslo",
      en: "https://www.sofoservis.sk/en/moving-to-oslo",
      "x-default": "https://www.sofoservis.sk/en/moving-to-oslo",
    },
  },
};

export default function MovingToOsloPage() {
  const faqItems = [
    {
      question: "Are there customs requirements for moving from Slovakia to Oslo?",
      answer:
        "Yes — Norway is not an EU member (it is EEA/EFTA). Moving household goods from Slovakia to Norway requires Norwegian customs clearance. You may qualify for customs duty relief if permanently relocating. Our team manages all documentation.",
    },
    {
      question: "How long does delivery from Slovakia to Oslo take?",
      answer:
        "Including customs clearance, we typically deliver from Slovakia to Oslo within 5-8 business days.",
    },
    {
      question: "Do you deliver throughout Oslo?",
      answer:
        "Yes, we deliver throughout Oslo — all city districts and the wider Oslo Metropolitan Area.",
    },
    {
      question: "What documents are needed for Norwegian customs?",
      answer:
        "You will typically need a detailed inventory, proof of change of residence, and a Norwegian customs declaration. Our team prepares all paperwork and guides you through the process.",
    },
    {
      question: "Do you offer furniture assembly in Oslo?",
      answer:
        "Yes, furniture disassembly at your Slovak home and reassembly in Oslo is available as part of our full-service package.",
    },
  ];

  const featuresData = {
    title: "Moving to Oslo — Norwegian Customs Experts",
    description:
      "Norway requires customs clearance — but our experienced team handles everything, making your move to Oslo smooth and stress-free.",
    features: [
      {
        image: "/icons/document_icon.svg",
        title: "Norwegian Customs Handled",
        description: "We prepare all Norwegian customs documentation and guide you through the import process.",
        link: "/en/moving-to-oslo",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "5-8 Day Delivery to Oslo",
        description: "Regular departures ensure delivery from Slovakia to Oslo within 5-8 business days.",
        link: "/en/moving-to-oslo",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Oslo Areas",
        description: "We deliver throughout Oslo and the wider metropolitan region.",
        link: "/en/moving-to-oslo",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description: "Quality packing for safe delivery to Oslo.",
        link: "/en/moving-to-oslo",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Fully Insured Transport",
        description: "All belongings insured throughout the journey to Oslo.",
        link: "/en/moving-to-oslo",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description: "Disassembly in Slovakia, full reassembly in Oslo.",
        link: "/en/furniture-assembly",
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
          title="Moving to Oslo from Slovakia"
          description="Relocating from Slovakia to Oslo? Sofoservis handles everything — Norwegian customs clearance, professional packing, and door-to-door delivery to your new Oslo address. 5-8 day delivery from anywhere in Slovakia."
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
          title="Moving to Oslo from Slovakia"
          description="Relocating from Slovakia to Oslo? Sofoservis handles everything — Norwegian customs clearance, professional packing, and door-to-door delivery to your new Oslo address. 5-8 day delivery from anywhere in Slovakia."
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
      <div><GoogleReviews title="Trusted for Moves to Oslo" /></div>
      <div><Reviews showHeadline={true} callToActionText="Get a Quote" /></div>
      <div><Features title={featuresData.title} description={featuresData.description} features={featuresData.features} callToActionText="Get a Free Quote" /></div>
      <div><InstagramFeed title="Follow Us on Instagram" /></div>
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Customers Who Moved to Oslo" /></div>
      <div><FAQ title="FAQ — Moving to Oslo from Slovakia" subtitle="Common questions about relocating to Oslo" items={faqItems} callToActionText="Moving to Oslo? Get a free quote" /></div>
      <div><CTA title="Ready to Move to Oslo?" description="Get a free quote today. We handle Norwegian customs and deliver door-to-door to Oslo." buttonText="Request a Quote" /></div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving from Slovakia to Norway", description: "Full Slovakia-to-Norway coverage.", href: "/en/moving-from-slovakia-to-norway", icon: "/icons/globe_icon.svg" },
          { title: "Moving to Stockholm", description: "Also moving to Stockholm?", href: "/en/moving-to-stockholm", icon: "/icons/truck_icon.svg" },
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
