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
  title: "Moving to Switzerland — International Removals | Sofoservis",
  description:
    "Moving to Switzerland from Slovakia? Zurich is approximately 800 km from Bratislava — 2-3 day delivery. Non-EU customs handled.",
  keywords:
    "moving to switzerland, moving to switzerland from slovakia, moving to switzerland from bratislava, international moving switzerland, relocation zurich geneva",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-switzerland",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/svajciarsko",
      en: "https://www.sofoservis.sk/en/moving-to-switzerland",
      "x-default": "https://www.sofoservis.sk/en/moving-to-switzerland",
    },
  },
};

export default function MovingToSwitzerlandPage() {
  const faqItems = [
    {
      question: "Are there customs requirements for moving from Slovakia to Switzerland?",
      answer: "Yes — Switzerland is not in the EU. Moving household goods to Switzerland requires Swiss customs clearance. Permanent residents relocating to Switzerland may qualify for duty-free import of personal effects. Our team assists with all documentation.",
    },
    {
      question: "How long does delivery from Slovakia to Switzerland take?",
      answer: "We typically deliver from Slovakia to Switzerland within 2-3 business days. Zurich and northern Swiss cities are faster than Geneva or southern Switzerland.",
    },
    {
      question: "Do you deliver to all Swiss cities?",
      answer: "Yes — we deliver throughout Switzerland including Zurich, Geneva, Bern, Basel, Lausanne, Winterthur, Lucerne, St. Gallen, and all other cities.",
    },
    {
      question: "Can I use groupage for a smaller move to Switzerland?",
      answer: "Yes, groupage is available for smaller shipments to Switzerland. We consolidate with other Switzerland-bound loads for cost-effective delivery.",
    },
    {
      question: "Is furniture assembly available in Switzerland?",
      answer: "Yes, furniture disassembly at your Slovak home and reassembly in Switzerland is available as part of our full-service package.",
    },
  ];

  const featuresData = {
    title: "Moving to Switzerland — Reliable International Service",
    description:
      "Professional door-to-door removals from Slovakia to Switzerland. 800 km to Zurich — 2-3 days.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "2-3 Day Delivery to Switzerland",
        description: "Regular routes from Slovakia to Switzerland — 2-3 day delivery to all Swiss cities.",
        link: "/en/moving-to-switzerland",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Swiss Cities",
        description: "Zurich, Geneva, Bern, Basel, Lausanne, Lucerne, and all other Swiss destinations.",
        link: "/en/moving-to-switzerland",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Swiss Customs Handled",
        description: "Switzerland is non-EU — our team manages all customs paperwork for your move.",
        link: "/en/moving-to-switzerland",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description: "Expert packing for safe delivery on the Slovakia–Switzerland route.",
        link: "/en/moving-to-switzerland",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description: "All items are insured throughout the journey to Switzerland.",
        link: "/en/moving-to-switzerland",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description: "Disassembly in Slovakia, full reassembly in Switzerland.",
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
          title="Moving to Switzerland from Slovakia"
          description="Relocating from Slovakia to Switzerland? Sofoservis provides professional door-to-door removals to Zurich, Geneva, Bern, Basel, Lausanne, and all Swiss cities — including customs handling."
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
          title="Moving to Switzerland from Slovakia"
          description="Relocating from Slovakia to Switzerland? Sofoservis provides professional door-to-door removals to Zurich, Geneva, Bern, Basel, Lausanne, and all Swiss cities — including customs handling."
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
      <div><GoogleReviews title="Trusted for Moves to Switzerland" /></div>
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
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Customers Who Moved to Switzerland" /></div>
      <div>
        <FAQ
          title="FAQ — Moving to Switzerland from Slovakia"
          subtitle="Common questions about relocating to Switzerland"
          items={faqItems}
          callToActionText="Moving to Switzerland? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to Switzerland?"
          description="Get a free quote today. We handle Swiss customs and deliver door-to-door to all Swiss cities."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving to Zurich", description: "Dedicated Zurich route page.", href: "/en/moving-to-zurich", icon: "/icons/globe_icon.svg" },
          { title: "Moving Bratislava to Zurich", description: "Bratislava–Zurich moving route.", href: "/en/moving-bratislava-zurich", icon: "/icons/truck_icon.svg" },
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
