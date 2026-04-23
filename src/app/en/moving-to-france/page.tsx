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
  title: "Moving to France — International Removals | Sofoservis",
  description:
    "Moving to France from Slovakia? Paris is approximately 1,400 km from Bratislava — 3-5 day delivery.",
  keywords:
    "moving to france, moving to france from slovakia, moving to france from bratislava, international moving france, relocation paris lyon",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-france",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/francuzsko",
      en: "https://www.sofoservis.sk/en/moving-to-france",
      "x-default": "https://www.sofoservis.sk/en/moving-to-france",
    },
  },
};

export default function MovingToFrancePage() {
  const faqItems = [
    {
      question: "Are there customs requirements for moving from Slovakia to France?",
      answer: "No — both Slovakia and France are EU members. No customs formalities apply to personal household goods on this route.",
    },
    {
      question: "How long does delivery from Slovakia to France take?",
      answer: "We typically deliver from Slovakia to France within 3-5 business days depending on the destination. Paris and northern France are faster than southern cities.",
    },
    {
      question: "Do you deliver to all French cities?",
      answer: "Yes — we deliver throughout France including Paris, Lyon, Marseille, Toulouse, Bordeaux, Nice, Nantes, Strasbourg, and all other cities and regions.",
    },
    {
      question: "Can I move from France back to Slovakia?",
      answer: "Yes — we operate in both directions. If you are returning from France to Slovakia, contact us for a free quote.",
    },
    {
      question: "Is furniture assembly available in France?",
      answer: "Yes, furniture disassembly at your Slovak home and reassembly in France is available as part of our full-service package.",
    },
  ];

  const featuresData = {
    title: "Moving to France — Reliable International Service",
    description:
      "Professional door-to-door removals from Slovakia to France. 1,400 km to Paris — 3-5 days.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "3-5 Day Delivery to France",
        description: "Regular routes from Slovakia to France — 3-5 day delivery depending on destination city.",
        link: "/en/moving-to-france",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All French Regions",
        description: "Paris, Lyon, Marseille, Toulouse, Bordeaux, Nice, and all other French cities.",
        link: "/en/moving-to-france",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs — EU to EU",
        description: "France and Slovakia are both EU members — no customs paperwork required.",
        link: "/en/moving-to-france",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description: "Reinforced packing for this long-distance route across Europe.",
        link: "/en/moving-to-france",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description: "All belongings are insured throughout the full journey to France.",
        link: "/en/moving-to-france",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description: "Disassembly in Slovakia, full reassembly in France.",
        link: "/en/furniture-assembly",
      },
    ],
  };

  return (
    <main className="bg-white">
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
<link
        rel="preload"
        href="/images/mascot/mascot-holding-boxes.svg"
        as="image"
        type="image/svg+xml"
      />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title="Moving to France from Slovakia"
          description="Relocating from Slovakia to France? Sofoservis provides professional door-to-door removals to Paris, Lyon, Marseille, Toulouse, Bordeaux, Nice, and all French destinations."
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
          title="Moving to France from Slovakia"
          description="Relocating from Slovakia to France? Sofoservis provides professional door-to-door removals to Paris, Lyon, Marseille, Toulouse, Bordeaux, Nice, and all French destinations."
          formTitle="Get a Free Quote"
          formSubtitle="Fill out the form for a no-obligation estimate"
          benefits={[]}
          ratingText="3500+ satisfied customers"
          lang="en"
          showMascot
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          mobileMascotSrc="/images/mascot/mascot-holding-boxes.svg"
          mobileMascotOffsetY={-44}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>
      <div><Clients /></div>
      <div><GoogleReviews title="Trusted for Moves to France" /></div>
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
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Customers Who Moved to France" /></div>
      <div>
        <FAQ
          title="FAQ — Moving to France from Slovakia"
          subtitle="Common questions about relocating to France"
          items={faqItems}
          callToActionText="Moving to France? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to France?"
          description="Get a free quote today. We deliver from Slovakia to France in 3-5 business days."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving to Paris", description: "Dedicated Paris route page.", href: "/en/moving-to-paris", icon: "/icons/globe_icon.svg" },
          { title: "Moving Bratislava to Paris", description: "Bratislava–Paris moving route.", href: "/en/moving-bratislava-paris", icon: "/icons/truck_icon.svg" },
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
