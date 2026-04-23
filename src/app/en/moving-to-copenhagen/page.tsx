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
  title: "Moving to Copenhagen — International Removals | Sofoservis",
  description:
    "Moving to Copenhagen from Slovakia? Approximately 1,100 km — 4-5 day delivery. Professional door-to-door removals with packing and furniture assembly.",
  keywords:
    "moving to copenhagen, moving to copenhagen from slovakia, moving to denmark from slovakia, international moving copenhagen, relocation copenhagen denmark",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-copenhagen",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/kodane",
      en: "https://www.sofoservis.sk/en/moving-to-copenhagen",
      "x-default": "https://www.sofoservis.sk/en/moving-to-copenhagen",
    },
  },
};

export default function MovingToCopenhagenPage() {
  const faqItems = [
    {
      question: "Are there customs requirements for moving from Slovakia to Copenhagen?",
      answer:
        "No — Slovakia and Denmark are both EU members. No customs formalities apply to personal household goods between the two countries.",
    },
    {
      question: "How long does delivery from Slovakia to Copenhagen take?",
      answer:
        "We typically deliver from Slovakia to Copenhagen within 4-5 business days.",
    },
    {
      question: "Do you deliver throughout Copenhagen?",
      answer:
        "Yes, we deliver to all Copenhagen districts and the wider Capital Region of Denmark.",
    },
    {
      question: "Can I use a groupage service for my move to Copenhagen?",
      answer:
        "Yes, groupage is available for smaller shipments. We consolidate with other Scandinavian-bound loads for cost efficiency.",
    },
    {
      question: "Do you offer furniture assembly in Copenhagen?",
      answer:
        "Yes, furniture disassembly and reassembly is available as part of our full-service move.",
    },
  ];

  const featuresData = {
    title: "Moving to Copenhagen — Scandinavian Capital Service",
    description:
      "Copenhagen is a popular destination for Slovaks moving to Scandinavia. Our regular routes deliver within 4-5 days.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "4-5 Day Delivery to Copenhagen",
        description: "Scheduled departures ensure delivery from Slovakia within 4-5 business days.",
        link: "/en/moving-to-copenhagen",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Copenhagen Districts",
        description: "We deliver throughout Copenhagen and the Capital Region of Denmark.",
        link: "/en/moving-to-copenhagen",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description: "Expert packing for safe long-distance delivery to Copenhagen.",
        link: "/en/moving-to-copenhagen",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description: "Disassembly in Slovakia, full reassembly in Copenhagen.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description: "All belongings insured throughout the journey to Copenhagen.",
        link: "/en/moving-to-copenhagen",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs",
        description: "EU-to-EU move — no customs paperwork required.",
        link: "/en/moving-to-copenhagen",
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
          title="Moving to Copenhagen from Slovakia"
          description="Relocating from Slovakia to Copenhagen? Sofoservis provides professional door-to-door removals to Denmark's capital. Regular routes, 4-5 day delivery, and a fully managed moving experience."
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
          title="Moving to Copenhagen from Slovakia"
          description="Relocating from Slovakia to Copenhagen? Sofoservis provides professional door-to-door removals to Denmark's capital. Regular routes, 4-5 day delivery, and a fully managed moving experience."
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
      <div><GoogleReviews title="Trusted for Moves to Copenhagen" /></div>
      <div><Reviews showHeadline={true} callToActionText="Get a Quote" /></div>
      <div><Features title={featuresData.title} description={featuresData.description} features={featuresData.features} callToActionText="Get a Free Quote" /></div>
      <div><InstagramFeed title="Follow Us on Instagram" /></div>
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Customers Who Moved to Copenhagen" /></div>
      <div><FAQ title="FAQ — Moving to Copenhagen from Slovakia" subtitle="Common questions about relocating to Copenhagen" items={faqItems} callToActionText="Moving to Copenhagen? Get a free quote" /></div>
      <div><CTA title="Ready to Move to Copenhagen?" description="Get a free quote today. We deliver from Slovakia to Copenhagen in 4-5 business days." buttonText="Request a Quote" /></div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving to Stockholm", description: "Also moving to Stockholm?", href: "/en/moving-to-stockholm", icon: "/icons/truck_icon.svg" },
          { title: "Moving to Oslo", description: "Also moving to Oslo?", href: "/en/moving-to-oslo", icon: "/icons/truck_icon.svg" },
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
