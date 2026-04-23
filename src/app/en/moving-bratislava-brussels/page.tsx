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
  title: "Moving Bratislava to Brussels — International | Sofoservis",
  description:
    "Professional moving from Bratislava to Brussels. Approximately 1,150 km — regular routes with 3-4 day delivery.",
  keywords:
    "moving bratislava brussels, moving from bratislava to brussels, bratislava to brussels removals, moving to brussels from slovakia, stahovanie bratislava brusel",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-bratislava-brussels",
    languages: {
      en: "https://www.sofoservis.sk/en/moving-bratislava-brussels",
      "x-default": "https://www.sofoservis.sk/en/moving-bratislava-brussels",
    },
  },
};

export default function MovingBratislavaBrusselsPage() {
  const faqItems = [
    {
      question: "How far is it from Bratislava to Brussels?",
      answer:
        "The road distance from Bratislava to Brussels is approximately 1,150 km. The journey by truck takes around 10-11 hours.",
    },
    {
      question: "How long does the Bratislava to Brussels move take?",
      answer:
        "We typically deliver from Bratislava to Brussels within 3-4 business days using our regular scheduled routes.",
    },
    {
      question: "Are there customs requirements for moving from Bratislava to Brussels?",
      answer:
        "No — both Slovakia and Belgium are EU members. No customs formalities apply to personal household goods on this route.",
    },
    {
      question: "Do you deliver to all Brussels communes?",
      answer:
        "Yes, we deliver throughout the Brussels Capital Region — all 19 communes — as well as the wider Brussels metropolitan area.",
    },
    {
      question: "What is the best option for moving a partial household from Bratislava to Brussels?",
      answer:
        "For partial loads our groupage service is the most economical option. We consolidate your items with other Belgium-bound shipments.",
    },
  ];

  const featuresData = {
    title: "Bratislava–Brussels: Professional EU Capital Removals",
    description:
      "Brussels — the EU capital — is a popular destination from Bratislava. Our regular routes ensure reliable 3-4 day delivery.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "3-4 Day Delivery to Brussels",
        description:
          "Scheduled services from Bratislava deliver to Brussels within 3-4 business days.",
        link: "/en/moving-bratislava-brussels",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Brussels Communes",
        description:
          "We deliver to all 19 Brussels communes and the greater metropolitan region.",
        link: "/en/moving-bratislava-brussels",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description:
          "Professional packing for safe delivery on this popular long-distance route.",
        link: "/en/moving-bratislava-brussels",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "Disassembly in Bratislava, reassembly in Brussels.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description:
          "All items are insured throughout the journey from Bratislava to Brussels.",
        link: "/en/moving-bratislava-brussels",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs",
        description:
          "EU-to-EU move — no customs formalities required.",
        link: "/en/moving-bratislava-brussels",
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
          title="Moving from Bratislava to Brussels"
          description="Moving from Bratislava to Brussels? Sofoservis provides professional door-to-door removals to the EU capital. Regular routes, 3-4 day delivery, and a fully managed moving experience — from Bratislava to all Brussels communes."
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
          title="Moving from Bratislava to Brussels"
          description="Moving from Bratislava to Brussels? Sofoservis provides professional door-to-door removals to the EU capital. Regular routes, 3-4 day delivery, and a fully managed moving experience — from Bratislava to all Brussels communes."
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

      <div>
        <Clients />
      </div>

      <div>
        <GoogleReviews title="Trusted for Bratislava–Brussels Moves" />
      </div>

      <div>
        <Reviews showHeadline={true} callToActionText="Get a Quote" />
      </div>

      <div>
        <Features
          title={featuresData.title}
          description={featuresData.description}
          features={featuresData.features}
          callToActionText="Get a Free Quote"
        />
      </div>

      <div>
        <InstagramFeed title="Follow Us on Instagram" />
      </div>

      <div>
        <GoogleReviews
          showReviewsShowcase={false}
          title="Reviews from Bratislava–Brussels Customers"
        />
      </div>

      <div>
        <FAQ
          title="FAQ — Moving from Bratislava to Brussels"
          subtitle="Common questions about the Bratislava–Brussels moving route"
          items={faqItems}
          callToActionText="Moving from Bratislava to Brussels? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Moving from Bratislava to Brussels?"
          description="Get a free quote today. We deliver from Bratislava to Brussels in 3-4 business days."
          buttonText="Request a Quote"
        />
      </div>

      <RelatedServices
        title="Related Services"
        services={[
          {
            title: "International Moving Services",
            description: "All international moving routes and destinations.",
            href: "/en/international-moving-services",
            icon: "/icons/globe_icon.svg",
          },
          {
            title: "Moving Bratislava to Amsterdam",
            description: "The Bratislava–Amsterdam moving route.",
            href: "/en/moving-bratislava-amsterdam",
            icon: "/icons/truck_icon.svg",
          },
          {
            title: "Moving Bratislava",
            description: "Local moving services in Bratislava.",
            href: "/en/moving-bratislava",
            icon: "/icons/house_icon.svg",
          },
          {
            title: "Furniture Assembly",
            description: "Expert assembly and disassembly of all furniture types.",
            href: "/en/furniture-assembly",
            icon: "/icons/wrench_icon.svg",
          },
        ]}
      />

      <ServicePricing filter={["international-moving", "moving"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
