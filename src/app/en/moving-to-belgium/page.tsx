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
  title: "Moving to Belgium — International Removals | Sofoservis",
  description:
    "Moving to Belgium from Slovakia? Approximately 1,000 km — 2-3 day delivery to Brussels, Antwerp, Ghent and all Belgian cities. Door-to-door EU service.",
  keywords:
    "moving to belgium, moving to belgium from slovakia, moving to belgium from bratislava, international moving belgium, relocation belgium",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-belgium",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/belgicko",
      en: "https://www.sofoservis.sk/en/moving-to-belgium",
      "x-default": "https://www.sofoservis.sk/en/moving-to-belgium",
    },
  },
};

export default function MovingToBelgiumPage() {
  const faqItems = [
    {
      question: "Are there customs requirements for moving from Slovakia to Belgium?",
      answer: "No — both Slovakia and Belgium are EU members. No customs formalities apply to personal household goods on this route.",
    },
    {
      question: "How long does delivery from Slovakia to Belgium take?",
      answer: "We typically deliver from Slovakia to Belgium within 2-3 business days using our regular scheduled routes.",
    },
    {
      question: "Do you deliver to all Belgian cities and regions?",
      answer: "Yes — we deliver to Brussels, Antwerp, Ghent, Bruges, Liège, Namur, and all other Belgian cities and towns.",
    },
    {
      question: "Can I use a groupage service for my move to Belgium?",
      answer: "Yes, groupage is ideal for smaller shipments. We consolidate with other Belgium-bound loads for cost-effective transport.",
    },
    {
      question: "Is furniture assembly available in Belgium?",
      answer: "Yes, furniture disassembly at your Slovak home and reassembly in Belgium is available as part of our full-service package.",
    },
  ];

  const featuresData = {
    title: "Moving to Belgium — Reliable International Service",
    description:
      "Professional door-to-door removals from Slovakia to Belgium. 1,000 km — 2-3 days.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "2-3 Day Delivery to Belgium",
        description: "Scheduled departures ensure reliable 2-3 day delivery from Slovakia to Belgium.",
        link: "/en/moving-to-belgium",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Belgian Cities",
        description: "Brussels, Antwerp, Ghent, Bruges, Liège, and all other Belgian destinations.",
        link: "/en/moving-to-belgium",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs — EU to EU",
        description: "Belgium and Slovakia are both EU members — no customs formalities for personal goods.",
        link: "/en/moving-to-belgium",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description: "Quality packing materials and expert techniques for long-distance delivery.",
        link: "/en/moving-to-belgium",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description: "All belongings are insured throughout the journey to Belgium.",
        link: "/en/moving-to-belgium",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description: "Disassembly in Slovakia, full reassembly in Belgium.",
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
          title="Moving to Belgium from Slovakia"
          description="Relocating from Slovakia to Belgium? Sofoservis provides professional door-to-door removals on this popular EU route. We cover Brussels, Antwerp, Ghent, Bruges, and all Belgian cities."
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
          title="Moving to Belgium from Slovakia"
          description="Relocating from Slovakia to Belgium? Sofoservis provides professional door-to-door removals on this popular EU route. We cover Brussels, Antwerp, Ghent, Bruges, and all Belgian cities."
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
      <div><GoogleReviews title="Trusted for Moves to Belgium" /></div>
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
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Our Clients" /></div>
      <div>
        <FAQ
          title="FAQ — Moving to Belgium from Slovakia"
          subtitle="Common questions about relocating to Belgium"
          items={faqItems}
          callToActionText="Moving to Belgium? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to Belgium?"
          description="Get a free quote today. We deliver from Slovakia to Belgium in 2-3 business days."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving to Brussels", description: "Dedicated Brussels route page.", href: "/en/moving-to-brussels", icon: "/icons/globe_icon.svg" },
          { title: "Moving Bratislava to Brussels", description: "Bratislava–Brussels moving route.", href: "/en/moving-to-brussels", icon: "/icons/truck_icon.svg" },
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
