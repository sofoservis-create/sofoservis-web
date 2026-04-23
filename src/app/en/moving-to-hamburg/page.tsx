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
  title: "Moving to Hamburg — International Removals | Sofoservis",
  description:
    "Moving to Hamburg from Slovakia? Approximately 1,000 km from Bratislava — 3-4 day delivery. Professional door-to-door removals with packing.",
  keywords:
    "moving to hamburg, moving to hamburg from slovakia, moving to hamburg from bratislava, international moving hamburg, relocation hamburg germany",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-hamburg",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/hamburg",
      en: "https://www.sofoservis.sk/en/moving-to-hamburg",
      "x-default": "https://www.sofoservis.sk/en/moving-to-hamburg",
    },
  },
};

export default function MovingToHamburgPage() {
  const faqItems = [
    {
      question: "How far is Hamburg from Slovakia?",
      answer:
        "Hamburg is approximately 1,000 km from Bratislava by road — about a 9-10 hour journey by truck.",
    },
    {
      question: "Are there customs requirements for moving from Slovakia to Hamburg?",
      answer:
        "No — Slovakia and Germany are both EU members. No customs formalities apply to personal household goods.",
    },
    {
      question: "How long does delivery from Slovakia to Hamburg take?",
      answer:
        "We typically deliver from Slovakia to Hamburg within 3-4 business days.",
    },
    {
      question: "Do you cover all Hamburg districts?",
      answer:
        "Yes, we deliver throughout Hamburg — all 7 boroughs (Bezirke) and all residential districts including Altona, Eimsbüttel, Hamburg-Nord, Wandsbek, Bergedorf, Harburg, and Hamburg-Mitte.",
    },
    {
      question: "Can I use a groupage service for my move to Hamburg?",
      answer:
        "Yes, groupage is available for smaller shipments. We consolidate with other north-Germany-bound loads.",
    },
  ];

  const featuresData = {
    title: "Moving to Hamburg — North Germany Service",
    description:
      "Hamburg is Germany's second-largest city and a major destination. Our regular routes ensure reliable 3-4 day delivery.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "3-4 Day Delivery to Hamburg",
        description: "Scheduled departures ensure delivery from Slovakia to Hamburg within 3-4 business days.",
        link: "/en/moving-to-hamburg",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Hamburg Boroughs",
        description: "We deliver to all Hamburg boroughs and residential districts.",
        link: "/en/moving-to-hamburg",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description: "Professional packing for safe delivery to Hamburg.",
        link: "/en/moving-to-hamburg",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description: "Disassembly in Slovakia, full reassembly in Hamburg.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description: "All items insured throughout the journey to Hamburg.",
        link: "/en/moving-to-hamburg",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs",
        description: "EU-to-EU move — no customs declarations required.",
        link: "/en/moving-to-hamburg",
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
          title="Moving to Hamburg from Slovakia"
          description="Relocating from Slovakia to Hamburg? Sofoservis provides professional door-to-door removals to Germany's port city. Regular routes, 3-4 day delivery, and a completely managed moving experience."
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
          title="Moving to Hamburg from Slovakia"
          description="Relocating from Slovakia to Hamburg? Sofoservis provides professional door-to-door removals to Germany's port city. Regular routes, 3-4 day delivery, and a completely managed moving experience."
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
      <div><GoogleReviews title="Trusted for Moves to Hamburg" /></div>
      <div><Reviews showHeadline={true} callToActionText="Get a Quote" /></div>
      <div><Features title={featuresData.title} description={featuresData.description} features={featuresData.features} callToActionText="Get a Free Quote" /></div>
      <div><InstagramFeed title="Follow Us on Instagram" /></div>
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Customers Who Moved to Hamburg" /></div>
      <div><FAQ title="FAQ — Moving to Hamburg from Slovakia" subtitle="Common questions about relocating to Hamburg" items={faqItems} callToActionText="Moving to Hamburg? Get a free quote" /></div>
      <div><CTA title="Ready to Move to Hamburg?" description="Get a free quote today. We deliver from Slovakia to Hamburg in 3-4 business days." buttonText="Request a Quote" /></div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving from Slovakia to Germany", description: "Full Slovakia-to-Germany coverage.", href: "/en/moving-from-slovakia-to-germany", icon: "/icons/globe_icon.svg" },
          { title: "Moving to Berlin", description: "Also moving to Berlin?", href: "/en/moving-to-berlin", icon: "/icons/truck_icon.svg" },
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
