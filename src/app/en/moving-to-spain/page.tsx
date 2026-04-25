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
  title: "Moving to Spain — International Removals | Sofoservis",
  description:
    "Moving to Spain from Slovakia? Approximately 2,000 km to Madrid — 5-7 day delivery.",
  keywords:
    "moving to spain, moving to spain from slovakia, moving to spain from bratislava, international moving spain, relocation madrid barcelona",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-spain",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/spanielsko",
      en: "https://www.sofoservis.sk/en/moving-to-spain",
      "x-default": "https://www.sofoservis.sk/en/moving-to-spain",
    },
  },
};

export default function MovingToSpainPage() {
  const faqItems = [
    {
      question: "Are there customs requirements for moving from Slovakia to Spain?",
      answer: "No — both Slovakia and Spain are EU members. No customs formalities apply to personal household goods on this route.",
    },
    {
      question: "How long does delivery from Slovakia to Spain take?",
      answer: "We typically deliver from Slovakia to Spain within 5-7 business days. Transit time varies by destination: Barcelona is faster than Madrid or cities in southern Spain.",
    },
    {
      question: "Do you deliver to all Spanish regions?",
      answer: "Yes — we deliver throughout Spain including Madrid, Barcelona, Valencia, Seville, Malaga, Alicante, Bilbao, Zaragoza, and all other cities and regions.",
    },
    {
      question: "Do you also deliver to the Canary Islands or Balearic Islands?",
      answer: "We deliver to mainland Spain. Island deliveries are handled case by case — contact us to discuss your specific destination.",
    },
    {
      question: "Is furniture assembly available in Spain?",
      answer: "Yes, furniture disassembly at your Slovak home and reassembly in Spain is available as part of our full-service package.",
    },
  ];

  const featuresData = {
    title: "Moving to Spain — Reliable International Service",
    description:
      "Professional door-to-door removals from Slovakia to Spain. 2,000 km to Madrid — 5-7 days.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "5-7 Day Delivery to Spain",
        description: "Regular routes from Slovakia to Spain — 5-7 day delivery depending on destination.",
        link: "/en/moving-to-spain",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Spanish Regions",
        description: "Madrid, Barcelona, Valencia, Seville, Malaga, and all other Spanish destinations.",
        link: "/en/moving-to-spain",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs — EU to EU",
        description: "Spain and Slovakia are both EU members — no customs paperwork required.",
        link: "/en/moving-to-spain",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description: "Reinforced packing for this long-distance route across Europe.",
        link: "/en/moving-to-spain",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description: "All belongings are insured throughout the full journey to Spain.",
        link: "/en/moving-to-spain",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description: "Disassembly in Slovakia, full reassembly in Spain.",
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
          title="Moving to Spain from Slovakia"
          description="Relocating from Slovakia to Spain? Sofoservis provides professional door-to-door removals to Madrid, Barcelona, Valencia, Seville, Malaga, Alicante, and all Spanish cities."
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
          title="Moving to Spain from Slovakia"
          description="Relocating from Slovakia to Spain? Sofoservis provides professional door-to-door removals to Madrid, Barcelona, Valencia, Seville, Malaga, Alicante, and all Spanish cities."
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
      <div><GoogleReviews title="Trusted for Moves to Spain" /></div>
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
          title="FAQ — Moving to Spain from Slovakia"
          subtitle="Common questions about relocating to Spain"
          items={faqItems}
          callToActionText="Moving to Spain? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to Spain?"
          description="Get a free quote today. We deliver from Slovakia to Spain in 5-7 business days."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving to Barcelona", description: "Dedicated Barcelona route page.", href: "/en/moving-to-barcelona", icon: "/icons/globe_icon.svg" },
          { title: "Moving to Madrid", description: "Also moving to Madrid?", href: "/en/moving-to-madrid", icon: "/icons/globe_icon.svg" },
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
