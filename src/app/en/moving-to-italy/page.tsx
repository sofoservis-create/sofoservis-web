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
  title: "Moving to Italy — International Removals | Sofoservis",
  description:
    "Moving to Italy from Slovakia? Rome is approximately 1,000 km from Bratislava — 3-4 day delivery.",
  keywords:
    "moving to italy, moving to italy from slovakia, moving to italy from bratislava, international moving italy, relocation rome milan florence",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-italy",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/taliansko",
      en: "https://www.sofoservis.sk/en/moving-to-italy",
      "x-default": "https://www.sofoservis.sk/en/moving-to-italy",
    },
  },
};

export default function MovingToItalyPage() {
  const faqItems = [
    {
      question: "Are there customs requirements for moving from Slovakia to Italy?",
      answer: "No — both Slovakia and Italy are EU members. No customs formalities apply to personal household goods on this route.",
    },
    {
      question: "How long does delivery from Slovakia to Italy take?",
      answer: "We typically deliver from Slovakia to Italy within 3-4 business days. Northern Italy (Milan, Turin) is faster than Rome or southern destinations.",
    },
    {
      question: "Do you deliver to all Italian regions?",
      answer: "Yes — we deliver throughout Italy including Rome, Milan, Turin, Florence, Venice, Naples, Bologna, Genoa, and all other cities and regions.",
    },
    {
      question: "Can I use groupage for a smaller move to Italy?",
      answer: "Yes, groupage is available for smaller shipments. We consolidate with other Italy-bound loads for cost-effective delivery.",
    },
    {
      question: "Is furniture assembly available in Italy?",
      answer: "Yes, furniture disassembly at your Slovak home and reassembly in Italy is available as part of our full-service package.",
    },
  ];

  const featuresData = {
    title: "Moving to Italy — Reliable International Service",
    description:
      "Professional door-to-door removals from Slovakia to Italy. 1,000 km to Rome — 3-4 days.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "3-4 Day Delivery to Italy",
        description: "Regular routes from Slovakia to Italy — 3-4 day delivery depending on destination.",
        link: "/en/moving-to-italy",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Italian Regions",
        description: "Rome, Milan, Turin, Florence, Venice, Naples, and all other Italian destinations.",
        link: "/en/moving-to-italy",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs — EU to EU",
        description: "Italy and Slovakia are both EU members — no customs paperwork required.",
        link: "/en/moving-to-italy",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description: "Expert packing for safe delivery across the Alps to Italy.",
        link: "/en/moving-to-italy",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description: "All belongings are insured throughout the full journey to Italy.",
        link: "/en/moving-to-italy",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description: "Disassembly in Slovakia, full reassembly in Italy.",
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
          title="Moving to Italy from Slovakia"
          description="Relocating from Slovakia to Italy? Sofoservis provides professional door-to-door removals to Rome, Milan, Turin, Florence, Venice, Naples, Bologna, and all Italian destinations."
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
          title="Moving to Italy from Slovakia"
          description="Relocating from Slovakia to Italy? Sofoservis provides professional door-to-door removals to Rome, Milan, Turin, Florence, Venice, Naples, Bologna, and all Italian destinations."
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
      <div><GoogleReviews title="Trusted for Moves to Italy" /></div>
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
          title="FAQ — Moving to Italy from Slovakia"
          subtitle="Common questions about relocating to Italy"
          items={faqItems}
          callToActionText="Moving to Italy? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to Italy?"
          description="Get a free quote today. We deliver from Slovakia to Italy in 3-4 business days."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving to Rome", description: "Dedicated Rome route page.", href: "/en/moving-to-rome", icon: "/icons/globe_icon.svg" },
          { title: "Moving to Milan", description: "Also moving to Milan?", href: "/en/moving-to-milan", icon: "/icons/globe_icon.svg" },
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
