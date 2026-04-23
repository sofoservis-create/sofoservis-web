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
  title: "Moving to Norway — International Removals | Sofoservis",
  description:
    "Moving to Norway from Slovakia? Approximately 2,000 km to Oslo — 5-7 day delivery.",
  keywords:
    "moving to norway, moving to norway from slovakia, moving to norway from bratislava, international moving norway, relocation oslo bergen",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-norway",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/norsko",
      en: "https://www.sofoservis.sk/en/moving-to-norway",
      "x-default": "https://www.sofoservis.sk/en/moving-to-norway",
    },
  },
};

export default function MovingToNorwayPage() {
  const faqItems = [
    {
      question: "Are there customs requirements for moving from Slovakia to Norway?",
      answer: "Yes — Norway is not in the EU (it is in the EEA/Schengen area). Moving household goods to Norway requires Norwegian customs declaration. Permanent residents may qualify for a duty-free import allowance. Our team assists with documentation.",
    },
    {
      question: "How long does delivery from Slovakia to Norway take?",
      answer: "Door-to-door transit from Slovakia to Norway typically takes 5-7 business days depending on the destination city.",
    },
    {
      question: "Do you deliver to all Norwegian cities?",
      answer: "Yes — we deliver throughout Norway including Oslo, Bergen, Stavanger, Trondheim, Tromsø, Kristiansand, and all other cities.",
    },
    {
      question: "Can I use groupage for a smaller move to Norway?",
      answer: "Yes, groupage is available for smaller shipments to Norway. We consolidate with other Norway-bound loads for cost-effective delivery.",
    },
    {
      question: "Is furniture assembly available in Norway?",
      answer: "Yes, furniture disassembly at your Slovak home and reassembly in Norway is available as part of our full-service package.",
    },
  ];

  const featuresData = {
    title: "Moving to Norway — Reliable International Service",
    description:
      "Professional door-to-door removals from Slovakia to Norway. 2,000 km to Oslo — 5-7 days.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "5-7 Day Delivery to Norway",
        description: "Regular routes from Slovakia to Norway — 5-7 day delivery to all Norwegian cities.",
        link: "/en/moving-to-norway",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Norwegian Cities",
        description: "Oslo, Bergen, Stavanger, Trondheim, Tromsø, and all other Norwegian destinations.",
        link: "/en/moving-to-norway",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Customs Assistance Included",
        description: "Norway is EEA (non-EU) — our team handles all customs documentation for your move.",
        link: "/en/moving-to-norway",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description: "Reinforced packing for this long-distance northern European route.",
        link: "/en/moving-to-norway",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description: "All items are insured throughout the full journey to Norway.",
        link: "/en/moving-to-norway",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description: "Disassembly in Slovakia, full reassembly in Norway.",
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
          title="Moving to Norway from Slovakia"
          description="Relocating from Slovakia to Norway? Sofoservis provides professional door-to-door removals to Oslo, Bergen, Stavanger, Trondheim, and all Norwegian destinations on this long-distance route."
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
          title="Moving to Norway from Slovakia"
          description="Relocating from Slovakia to Norway? Sofoservis provides professional door-to-door removals to Oslo, Bergen, Stavanger, Trondheim, and all Norwegian destinations on this long-distance route."
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
      <div><GoogleReviews title="Trusted for Moves to Norway" /></div>
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
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Customers Who Moved to Norway" /></div>
      <div>
        <FAQ
          title="FAQ — Moving to Norway from Slovakia"
          subtitle="Common questions about relocating to Norway"
          items={faqItems}
          callToActionText="Moving to Norway? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to Norway?"
          description="Get a free quote today. We handle customs and deliver door-to-door across Norway."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving to Oslo", description: "Dedicated Oslo route page.", href: "/en/moving-to-oslo", icon: "/icons/globe_icon.svg" },
          { title: "Moving to Sweden", description: "Also moving to Sweden?", href: "/en/moving-to-sweden", icon: "/icons/globe_icon.svg" },
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
