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
  title: "Moving to Amsterdam — International Removals | Sofoservis",
  description:
    "Moving to Amsterdam from Slovakia? Approximately 1,200 km — regular routes with 3-5 day delivery.",
  keywords:
    "moving to amsterdam, moving to amsterdam from slovakia, moving to amsterdam from bratislava, international moving amsterdam, relocation amsterdam netherlands",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-amsterdam",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/amsterdam",
      en: "https://www.sofoservis.sk/en/moving-to-amsterdam",
      "x-default": "https://www.sofoservis.sk/en/moving-to-amsterdam",
    },
  },
};

export default function MovingToAmsterdamPage() {
  const faqItems = [
    {
      question: "Are there customs requirements for moving from Slovakia to Amsterdam?",
      answer:
        "No — Slovakia and the Netherlands are both EU members. No customs formalities apply to personal household goods between the two countries.",
    },
    {
      question: "How long does delivery from Slovakia to Amsterdam take?",
      answer:
        "We typically deliver from Slovakia to Amsterdam within 3-5 business days using our regular scheduled routes.",
    },
    {
      question: "Do you deliver to all Amsterdam neighbourhoods?",
      answer:
        "Yes, we deliver throughout Amsterdam — all city districts and the Amsterdam Metropolitan Area including suburbs and surrounding municipalities.",
    },
    {
      question: "Can I use a groupage service for my move to Amsterdam?",
      answer:
        "Yes, groupage is ideal for smaller shipments. We consolidate your items with other Netherlands-bound loads for cost-effective transport.",
    },
    {
      question: "Do you offer furniture assembly in Amsterdam?",
      answer:
        "Yes, furniture disassembly at your Slovak home and reassembly in Amsterdam is available as part of our full-service package.",
    },
  ];

  const featuresData = {
    title: "Moving to Amsterdam — Reliable Long-Distance Service",
    description:
      "Regular Slovakia–Amsterdam routes ensure competitive prices and consistent 3-5 day delivery for your relocation.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "3-5 Day Delivery to Amsterdam",
        description:
          "Scheduled departures ensure reliable delivery from Slovakia to Amsterdam within 3-5 business days.",
        link: "/en/moving-to-amsterdam",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Amsterdam Areas",
        description:
          "We deliver throughout Amsterdam and the wider metropolitan region.",
        link: "/en/moving-to-amsterdam",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description:
          "Quality packing materials and expert techniques for long-distance delivery.",
        link: "/en/moving-to-amsterdam",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "Disassembly in Slovakia, full reassembly in Amsterdam.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description:
          "All belongings are insured throughout the journey to Amsterdam.",
        link: "/en/moving-to-amsterdam",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs",
        description:
          "EU-to-EU move — no customs formalities required.",
        link: "/en/moving-to-amsterdam",
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
          title="Moving to Amsterdam from Slovakia"
          description="Relocating from Slovakia to Amsterdam? Sofoservis provides professional door-to-door removals on this popular 1,200 km route. Regular departures, 3-5 day delivery, and a fully managed moving experience."
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
          title="Moving to Amsterdam from Slovakia"
          description="Relocating from Slovakia to Amsterdam? Sofoservis provides professional door-to-door removals on this popular 1,200 km route. Regular departures, 3-5 day delivery, and a fully managed moving experience."
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
      <div><GoogleReviews title="Trusted for Moves to Amsterdam" /></div>
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
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Customers Who Moved to Amsterdam" /></div>
      <div>
        <FAQ
          title="FAQ — Moving to Amsterdam from Slovakia"
          subtitle="Common questions about relocating to Amsterdam"
          items={faqItems}
          callToActionText="Moving to Amsterdam? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to Amsterdam?"
          description="Get a free quote today. We deliver from Slovakia to Amsterdam in 3-5 business days."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving from Slovakia to Netherlands", description: "Full Slovakia-to-Netherlands coverage.", href: "/en/moving-from-slovakia-to-netherlands", icon: "/icons/globe_icon.svg" },
          { title: "Moving Bratislava to Amsterdam", description: "Dedicated Bratislava–Amsterdam route page.", href: "/en/moving-bratislava-amsterdam", icon: "/icons/truck_icon.svg" },
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
