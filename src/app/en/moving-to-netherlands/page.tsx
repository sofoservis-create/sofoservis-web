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
  title: "Moving to the Netherlands — International Removals | Sofoservis",
  description:
    "Moving to the Netherlands from Slovakia? Approximately 1,200 km — 3-5 day delivery. Door-to-door removals to Amsterdam, Rotterdam, The Hague, Utrecht.",
  keywords:
    "moving to netherlands, moving to netherlands from slovakia, moving to netherlands from bratislava, international moving netherlands, relocation amsterdam rotterdam",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-netherlands",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/holandsko",
      en: "https://www.sofoservis.sk/en/moving-to-netherlands",
      "x-default": "https://www.sofoservis.sk/en/moving-to-netherlands",
    },
  },
};

export default function MovingToNetherlandsPage() {
  const faqItems = [
    {
      question: "Are there customs requirements for moving from Slovakia to the Netherlands?",
      answer: "No — both Slovakia and the Netherlands are EU members. No customs formalities apply to personal household goods on this route.",
    },
    {
      question: "How long does delivery from Slovakia to the Netherlands take?",
      answer: "We typically deliver from Slovakia to the Netherlands within 3-5 business days using our regular scheduled routes.",
    },
    {
      question: "Do you deliver to all Dutch cities?",
      answer: "Yes — we deliver throughout the Netherlands including Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven, Groningen, and all other cities.",
    },
    {
      question: "Can I use groupage for a smaller move to the Netherlands?",
      answer: "Yes, groupage is ideal for smaller shipments. We consolidate your items with other Netherlands-bound loads for cost-effective delivery.",
    },
    {
      question: "Is furniture assembly available in the Netherlands?",
      answer: "Yes, furniture disassembly at your Slovak home and reassembly in the Netherlands is available as part of our full-service package.",
    },
  ];

  const featuresData = {
    title: "Moving to the Netherlands — Reliable International Service",
    description:
      "Professional door-to-door removals from Slovakia to the Netherlands. 1,200 km — 3-5 days.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "3-5 Day Delivery",
        description: "Regular scheduled routes from Slovakia to the Netherlands ensure 3-5 day delivery.",
        link: "/en/moving-to-netherlands",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Dutch Cities",
        description: "Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven, and all other Dutch destinations.",
        link: "/en/moving-to-netherlands",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs — EU to EU",
        description: "Netherlands and Slovakia are both EU members — no customs formalities.",
        link: "/en/moving-to-netherlands",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description: "Quality materials and expert packing for the long-distance journey.",
        link: "/en/moving-to-netherlands",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description: "All items are insured throughout the journey to the Netherlands.",
        link: "/en/moving-to-netherlands",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description: "Disassembly in Slovakia, reassembly in the Netherlands.",
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
          title="Moving to the Netherlands from Slovakia"
          description="Relocating from Slovakia to the Netherlands? Sofoservis provides professional door-to-door removals to Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven, and all Dutch cities."
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
          title="Moving to the Netherlands from Slovakia"
          description="Relocating from Slovakia to the Netherlands? Sofoservis provides professional door-to-door removals to Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven, and all Dutch cities."
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
      <div><GoogleReviews title="Trusted for Moves to the Netherlands" /></div>
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
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Customers Who Moved to the Netherlands" /></div>
      <div>
        <FAQ
          title="FAQ — Moving to the Netherlands from Slovakia"
          subtitle="Common questions about relocating to the Netherlands"
          items={faqItems}
          callToActionText="Moving to the Netherlands? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to the Netherlands?"
          description="Get a free quote today. We deliver from Slovakia to the Netherlands in 3-5 business days."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving to Amsterdam", description: "Dedicated Amsterdam route page.", href: "/en/moving-to-amsterdam", icon: "/icons/globe_icon.svg" },
          { title: "Moving Bratislava to Amsterdam", description: "Bratislava–Amsterdam moving route.", href: "/en/moving-bratislava-amsterdam", icon: "/icons/truck_icon.svg" },
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
