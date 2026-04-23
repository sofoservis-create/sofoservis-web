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
  title: "Moving to Zurich — International Removals | Sofoservis",
  description:
    "Moving to Zurich from Slovakia? We handle Swiss customs clearance, full packing, and door-to-door delivery to Zurich.",
  keywords:
    "moving to zurich, moving to zurich from slovakia, moving to zurich from bratislava, international moving zurich, relocation zurich switzerland",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-zurich",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/zurich",
      en: "https://www.sofoservis.sk/en/moving-to-zurich",
      "x-default": "https://www.sofoservis.sk/en/moving-to-zurich",
    },
  },
};

export default function MovingToZurichPage() {
  const faqItems = [
    {
      question: "Are there customs requirements when moving from Slovakia to Zurich?",
      answer:
        "Yes — Switzerland is not an EU member state. Moving household goods from Slovakia to Switzerland requires Swiss customs clearance. You may qualify for duty-free import under Transfer of Residence rules. Our team manages all documentation.",
    },
    {
      question: "How long does delivery from Slovakia to Zurich take?",
      answer:
        "Including customs clearance, we typically deliver from Slovakia to Zurich within 2-4 business days.",
    },
    {
      question: "How far is Zurich from Slovakia?",
      answer:
        "Zurich is approximately 800 km from Bratislava by road — about a 7-8 hour journey by truck.",
    },
    {
      question: "What documents do I need to move to Switzerland?",
      answer:
        "You will typically need a detailed inventory of items, proof of change of residence, and a Swiss customs declaration. Our team prepares and guides you through all paperwork.",
    },
    {
      question: "Do you deliver to areas of Zurich outside the city centre?",
      answer:
        "Yes, we deliver throughout Zurich city and the wider Zurich canton, including suburbs and surrounding municipalities.",
    },
  ];

  const featuresData = {
    title: "Moving to Zurich — Swiss Customs Experts",
    description:
      "Switzerland requires customs clearance — but our experienced team handles everything, making your move to Zurich straightforward.",
    features: [
      {
        image: "/icons/document_icon.svg",
        title: "Swiss Customs Fully Managed",
        description:
          "We prepare all Swiss customs documentation and guide you through the import process.",
        link: "/en/moving-to-zurich",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "2-4 Day Delivery to Zurich",
        description:
          "Regular departures ensure delivery from Slovakia to Zurich within 2-4 business days.",
        link: "/en/moving-to-zurich",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Zurich Areas",
        description:
          "We deliver throughout Zurich city and the wider canton.",
        link: "/en/moving-to-zurich",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Professional Packing",
        description:
          "Quality packing materials and expert techniques for safe delivery.",
        link: "/en/moving-to-zurich",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Fully Insured Transport",
        description:
          "All belongings are insured throughout the entire journey to Zurich.",
        link: "/en/moving-to-zurich",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "Disassembly in Slovakia, full reassembly in Zurich.",
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
          title="Moving to Zurich from Slovakia"
          description="Relocating from Slovakia to Zurich? Sofoservis handles everything — Swiss customs clearance, professional packing, and door-to-door delivery to your new Zurich address. 2-4 day delivery from anywhere in Slovakia."
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
          title="Moving to Zurich from Slovakia"
          description="Relocating from Slovakia to Zurich? Sofoservis handles everything — Swiss customs clearance, professional packing, and door-to-door delivery to your new Zurich address. 2-4 day delivery from anywhere in Slovakia."
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
      <div><GoogleReviews title="Trusted for Moves to Zurich" /></div>
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
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Customers Who Moved to Zurich" /></div>
      <div>
        <FAQ
          title="FAQ — Moving to Zurich from Slovakia"
          subtitle="Common questions about relocating to Zurich"
          items={faqItems}
          callToActionText="Moving to Zurich? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to Zurich?"
          description="Get a free quote today. We handle Swiss customs and deliver door-to-door to Zurich."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving from Slovakia to Switzerland", description: "Full Slovakia-to-Switzerland coverage.", href: "/en/moving-from-slovakia-to-switzerland", icon: "/icons/globe_icon.svg" },
          { title: "Moving Bratislava to Zurich", description: "Dedicated Bratislava–Zurich route page.", href: "/en/moving-to-zurich", icon: "/icons/truck_icon.svg" },
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
