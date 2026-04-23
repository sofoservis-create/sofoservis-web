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
  title: "Moving to Frankfurt — International Removals | Sofoservis",
  description:
    "Moving to Frankfurt from Slovakia? Approximately 770 km from Bratislava — 2-3 day delivery. Professional door-to-door removals with packing.",
  keywords:
    "moving to frankfurt, moving to frankfurt from slovakia, moving to frankfurt from bratislava, international moving frankfurt, relocation frankfurt germany",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-frankfurt",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/frankfurt",
      en: "https://www.sofoservis.sk/en/moving-to-frankfurt",
      "x-default": "https://www.sofoservis.sk/en/moving-to-frankfurt",
    },
  },
};

export default function MovingToFrankfurtPage() {
  const faqItems = [
    {
      question: "How far is Frankfurt from Slovakia?",
      answer:
        "Frankfurt is approximately 770 km from Bratislava by road — about a 7-8 hour journey by truck.",
    },
    {
      question: "Are there customs requirements for moving from Slovakia to Frankfurt?",
      answer:
        "No — Slovakia and Germany are both EU members. No customs formalities apply to personal household goods.",
    },
    {
      question: "How long does delivery from Slovakia to Frankfurt take?",
      answer:
        "We typically deliver from Slovakia to Frankfurt within 2-3 business days.",
    },
    {
      question: "Do you deliver throughout Frankfurt am Main?",
      answer:
        "Yes, we deliver throughout Frankfurt am Main — all city districts and the wider Rhine-Main metropolitan area.",
    },
    {
      question: "Can I use a groupage service for my move to Frankfurt?",
      answer:
        "Yes, groupage is available for smaller shipments. We consolidate with other Germany-bound loads for cost-effective transport.",
    },
  ];

  const featuresData = {
    title: "Moving to Frankfurt — Germany's Financial Capital",
    description:
      "Frankfurt is one of Germany's most important business cities. Our regular Slovakia–Frankfurt routes ensure reliable 2-3 day delivery.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "2-3 Day Delivery to Frankfurt",
        description: "Scheduled departures ensure consistent delivery within 2-3 business days.",
        link: "/en/moving-to-frankfurt",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Frankfurt Districts",
        description: "We deliver throughout Frankfurt and the Rhine-Main region.",
        link: "/en/moving-to-frankfurt",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description: "Professional packing for safe delivery to Frankfurt.",
        link: "/en/moving-to-frankfurt",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description: "Disassembly in Slovakia, full reassembly in Frankfurt.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description: "All items insured throughout the journey to Frankfurt.",
        link: "/en/moving-to-frankfurt",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs",
        description: "EU-to-EU move — no customs declarations required.",
        link: "/en/moving-to-frankfurt",
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
          title="Moving to Frankfurt from Slovakia"
          description="Relocating from Slovakia to Frankfurt? Sofoservis provides professional door-to-door removals to Germany's financial hub. Regular routes, 2-3 day delivery, and a completely managed experience."
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
          title="Moving to Frankfurt from Slovakia"
          description="Relocating from Slovakia to Frankfurt? Sofoservis provides professional door-to-door removals to Germany's financial hub. Regular routes, 2-3 day delivery, and a completely managed experience."
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
      <div><GoogleReviews title="Trusted for Moves to Frankfurt" /></div>
      <div><Reviews showHeadline={true} callToActionText="Get a Quote" /></div>
      <div><Features title={featuresData.title} description={featuresData.description} features={featuresData.features} callToActionText="Get a Free Quote" /></div>
      <div><InstagramFeed title="Follow Us on Instagram" /></div>
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Customers Who Moved to Frankfurt" /></div>
      <div><FAQ title="FAQ — Moving to Frankfurt from Slovakia" subtitle="Common questions about relocating to Frankfurt" items={faqItems} callToActionText="Moving to Frankfurt? Get a free quote" /></div>
      <div><CTA title="Ready to Move to Frankfurt?" description="Get a free quote today. We deliver from Slovakia to Frankfurt in 2-3 business days." buttonText="Request a Quote" /></div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving from Slovakia to Germany", description: "Full Slovakia-to-Germany coverage.", href: "/en/moving-from-slovakia-to-germany", icon: "/icons/globe_icon.svg" },
          { title: "Moving to Munich", description: "Also moving to Munich?", href: "/en/moving-to-munich", icon: "/icons/truck_icon.svg" },
          { title: "Moving to Berlin", description: "Also moving to Berlin?", href: "/en/moving-to-berlin", icon: "/icons/truck_icon.svg" },
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
