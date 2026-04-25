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
  title: "Moving to Denmark — International Removals | Sofoservis",
  description:
    "Moving to Denmark from Slovakia? Approximately 1,300 km to Copenhagen — 3-4 day delivery.",
  keywords:
    "moving to denmark, moving to denmark from slovakia, moving to denmark from bratislava, international moving denmark, relocation copenhagen",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-denmark",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/dansko",
      en: "https://www.sofoservis.sk/en/moving-to-denmark",
      "x-default": "https://www.sofoservis.sk/en/moving-to-denmark",
    },
  },
};

export default function MovingToDenmarkPage() {
  const faqItems = [
    {
      question: "Are there customs requirements for moving from Slovakia to Denmark?",
      answer: "No — both Slovakia and Denmark are EU members. No customs formalities apply to personal household goods on this route.",
    },
    {
      question: "How long does delivery from Slovakia to Denmark take?",
      answer: "We typically deliver from Slovakia to Denmark within 3-4 business days using our regular scheduled routes.",
    },
    {
      question: "Do you deliver to all Danish cities?",
      answer: "Yes — we deliver throughout Denmark including Copenhagen, Aarhus, Odense, Aalborg, Esbjerg, and all other cities and towns.",
    },
    {
      question: "Can I use a groupage service for a smaller move to Denmark?",
      answer: "Yes, groupage is available for smaller shipments. We consolidate with other Denmark-bound loads for cost-effective delivery.",
    },
    {
      question: "Is furniture assembly available in Denmark?",
      answer: "Yes, furniture disassembly at your Slovak home and reassembly in Denmark is available as part of our full-service package.",
    },
  ];

  const featuresData = {
    title: "Moving to Denmark — Reliable International Service",
    description:
      "Professional door-to-door removals from Slovakia to Denmark. 1,300 km — 3-4 days.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "3-4 Day Delivery to Denmark",
        description: "Scheduled departures ensure reliable 3-4 day delivery from Slovakia to Denmark.",
        link: "/en/moving-to-denmark",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Danish Cities",
        description: "Copenhagen, Aarhus, Odense, Aalborg, and all other Danish destinations.",
        link: "/en/moving-to-denmark",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs — EU to EU",
        description: "Denmark and Slovakia are both EU members — no customs formalities.",
        link: "/en/moving-to-denmark",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description: "Quality packing materials and expert techniques for this long-distance route.",
        link: "/en/moving-to-denmark",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description: "All belongings are insured throughout the journey to Denmark.",
        link: "/en/moving-to-denmark",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description: "Disassembly in Slovakia, full reassembly in Denmark.",
        link: "/en/furniture-assembly",
      },
    ],
  };

  return (
    <main className="bg-white">
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
      <link rel="preload"
        href="/images/mascot/2holding boxes mascot.svgz"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/2holding boxes mascot.svgz"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)" fetchPriority="high" />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title="Moving to Denmark from Slovakia"
          description="Relocating from Slovakia to Denmark? Sofoservis provides professional door-to-door removals to Copenhagen, Aarhus, Odense, and all Danish cities on this 1,300 km route."
          formTitle="Get a Free Quote"
          formSubtitle="Fill out the form for a no-obligation estimate"
          benefits={[]}
          ratingText="3500+ satisfied customers"
          lang="en"
          mascotSrc="/images/mascot/2holding boxes mascot.svgz"
          desktopMascotScaleMultiplier={1.03}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Moving to Denmark from Slovakia"
          description="Relocating from Slovakia to Denmark? Sofoservis provides professional door-to-door removals to Copenhagen, Aarhus, Odense, and all Danish cities on this 1,300 km route."
          formTitle="Get a Free Quote"
          formSubtitle="Fill out the form for a no-obligation estimate"
          benefits={[]}
          ratingText="3500+ satisfied customers"
          lang="en"
          showMascot
          mascotSrc="/images/mascot/2holding boxes mascot.svgz"
          mobileMascotSrc="/images/mascot/2holding boxes mascot.svgz"
          mobileMascotOffsetY={-44}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>
      <div><Clients /></div>
      <div><GoogleReviews title="Trusted for Moves to Denmark" /></div>
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
          title="FAQ — Moving to Denmark from Slovakia"
          subtitle="Common questions about relocating to Denmark"
          items={faqItems}
          callToActionText="Moving to Denmark? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to Denmark?"
          description="Get a free quote today. We deliver from Slovakia to Denmark in 3-4 business days."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving to Copenhagen", description: "Dedicated Copenhagen route page.", href: "/en/moving-to-copenhagen", icon: "/icons/globe_icon.svg" },
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
