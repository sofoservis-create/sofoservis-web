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
  title: "Moving to Czech Republic — International Removals | Sofoservis",
  description:
    "Moving to Czech Republic from Slovakia? Prague just 330 km from Bratislava — 1-2 day delivery.",
  keywords:
    "moving to czech republic, moving to czech republic from slovakia, moving to czech republic from bratislava, removals czech republic, relocation prague",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-czech-republic",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/ceska-republika",
      en: "https://www.sofoservis.sk/en/moving-to-czech-republic",
      "x-default": "https://www.sofoservis.sk/en/moving-to-czech-republic",
    },
  },
};

export default function MovingToCzechRepublicPage() {
  const faqItems = [
    {
      question: "How far is Prague from Bratislava?",
      answer: "Prague is approximately 330 km from Bratislava — about a 3 hour drive. Most Slovakia–Prague moves are completed within a single long day or as a 2-day service.",
    },
    {
      question: "Are there customs requirements for moving from Slovakia to the Czech Republic?",
      answer: "No — both countries are EU members. No customs formalities apply to personal household goods on this route.",
    },
    {
      question: "Do you deliver to all Czech cities?",
      answer: "Yes — we deliver to Prague, Brno, Ostrava, Plzeň, Olomouc, Liberec, and all other Czech cities and towns.",
    },
    {
      question: "How long does a Slovakia–Prague move take?",
      answer: "A typical Slovakia–Prague move (including loading, transit, and unloading) is usually completed within a single day or two days for larger households.",
    },
    {
      question: "Is furniture assembly available in the Czech Republic?",
      answer: "Yes, furniture disassembly at your Slovak property and full reassembly in any Czech city is available as part of our full-service package.",
    },
  ];

  const featuresData = {
    title: "Moving to the Czech Republic — Reliable International Service",
    description:
      "Professional door-to-door removals from Slovakia to the Czech Republic. 330 km to Prague — 1-2 days.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "1-2 Day Delivery",
        description: "Prague in 1-2 days, Brno often in a single day from Bratislava.",
        link: "/en/moving-to-czech-republic",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Czech Cities",
        description: "Prague, Brno, Ostrava, Plzeň, Olomouc, and all other Czech destinations.",
        link: "/en/moving-to-czech-republic",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs — EU to EU",
        description: "Czech Republic and Slovakia are both EU members — no customs paperwork.",
        link: "/en/moving-to-czech-republic",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description: "Professional packing and careful handling for all your belongings.",
        link: "/en/moving-to-czech-republic",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description: "All belongings are insured throughout the journey.",
        link: "/en/moving-to-czech-republic",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description: "Disassembly in Slovakia, full reassembly in any Czech city.",
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
          title="Moving to the Czech Republic from Slovakia"
          description="Relocating from Slovakia to the Czech Republic? With Prague only 330 km from Bratislava, it is one of our most popular routes. We cover Prague, Brno, Ostrava, Plzeň, and all Czech cities."
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
          title="Moving to the Czech Republic from Slovakia"
          description="Relocating from Slovakia to the Czech Republic? With Prague only 330 km from Bratislava, it is one of our most popular routes. We cover Prague, Brno, Ostrava, Plzeň, and all Czech cities."
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
      <div><GoogleReviews title="Trusted for Moves to the Czech Republic" /></div>
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
          title="FAQ — Moving to the Czech Republic from Slovakia"
          subtitle="Common questions about relocating to the Czech Republic"
          items={faqItems}
          callToActionText="Moving to the Czech Republic? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to the Czech Republic?"
          description="Get a free quote today. We deliver from Slovakia to Prague in 1-2 business days."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving to Prague", description: "Dedicated Prague route page.", href: "/en/moving-to-prague", icon: "/icons/globe_icon.svg" },
          { title: "Moving Bratislava to Prague", description: "Bratislava–Prague moving route.", href: "/en/moving-to-prague", icon: "/icons/truck_icon.svg" },
          { title: "Moving to Brno", description: "Dedicated Brno route page.", href: "/en/moving-to-brno", icon: "/icons/globe_icon.svg" },
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
