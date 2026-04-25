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
  title: "Moving to Prague — International Removals | Sofoservis",
  description:
    "Moving to Prague from Slovakia? Approximately 330 km from Bratislava. Fast 1-2 day door-to-door delivery with professional packing and furniture assembly.",
  keywords:
    "moving to prague, moving to prague from slovakia, moving to prague from bratislava, international moving prague, relocation prague",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-prague",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/praha",
      en: "https://www.sofoservis.sk/en/moving-to-prague",
      "x-default": "https://www.sofoservis.sk/en/moving-to-prague",
    },
  },
};

export default function MovingToPraguePage() {
  const faqItems = [
    {
      question: "How far is Prague from Slovakia?",
      answer:
        "Prague is approximately 330 km from Bratislava by road — about a 3-4 hour journey. It is one of the closest major European capitals for Slovaks moving abroad.",
    },
    {
      question: "Are there customs requirements when moving from Slovakia to Prague?",
      answer:
        "No — Slovakia and the Czech Republic are both EU members. No customs formalities apply to personal household goods. We handle all standard transport documentation.",
    },
    {
      question: "How quickly can you deliver my belongings to Prague?",
      answer:
        "We typically deliver from anywhere in Slovakia to Prague within 1-2 business days. For Bratislava to Prague, same-day service may be possible for smaller loads.",
    },
    {
      question: "Do you cover all Prague districts?",
      answer:
        "Yes, we deliver throughout all Prague districts (Praha 1–Praha 22) and the wider Prague metropolitan area.",
    },
    {
      question: "Can you move just a few items from Slovakia to Prague?",
      answer:
        "Yes, our groupage (part-load) service is ideal for smaller quantities. Your items share a vehicle with other Prague-bound shipments, keeping costs down.",
    },
  ];

  const featuresData = {
    title: "Moving to Prague — Fast, Affordable, Professional",
    description:
      "Prague is one of Slovakia's most popular international moving destinations. Our regular routes ensure fast delivery at competitive prices.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "1-2 Day Delivery to Prague",
        description:
          "Regular departures from Slovakia ensure delivery to Prague within 1-2 business days.",
        link: "/en/moving-to-prague",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Prague Districts Covered",
        description:
          "We deliver to all Prague districts and the surrounding metropolitan area.",
        link: "/en/moving-to-prague",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description:
          "Professional packing using quality materials for safe delivery to Prague.",
        link: "/en/moving-to-prague",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "We disassemble furniture at your Slovak home and fully reassemble it in Prague.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description:
          "All belongings are insured throughout the journey from Slovakia to Prague.",
        link: "/en/moving-to-prague",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs",
        description:
          "EU-to-EU move — no customs paperwork required.",
        link: "/en/moving-to-prague",
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
          title="Moving to Prague from Slovakia"
          description="Relocating from Slovakia to Prague? At just 330 km from Bratislava, Prague is one of Slovakia's most popular international destinations. Sofoservis provides professional door-to-door removals from anywhere in Slovakia to all Prague districts — with 1-2 day delivery."
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
          title="Moving to Prague from Slovakia"
          description="Relocating from Slovakia to Prague? At just 330 km from Bratislava, Prague is one of Slovakia's most popular international destinations. Sofoservis provides professional door-to-door removals from anywhere in Slovakia to all Prague districts — with 1-2 day delivery."
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
      <div><GoogleReviews title="Trusted for Moves to Prague" /></div>
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
          title="FAQ — Moving to Prague from Slovakia"
          subtitle="Common questions about relocating to Prague"
          items={faqItems}
          callToActionText="Moving to Prague? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to Prague?"
          description="Get a free quote today. We deliver from Slovakia to Prague in 1-2 business days."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving Bratislava to Prague", description: "Dedicated Bratislava–Prague route page.", href: "/en/moving-to-prague", icon: "/icons/truck_icon.svg" },
          { title: "International Moving Services", description: "All international routes and destinations.", href: "/en/international-moving-services", icon: "/icons/globe_icon.svg" },
          { title: "Moving from Slovakia", description: "Overview of all routes from Slovakia abroad.", href: "/en/moving-from-slovakia", icon: "/icons/globe_icon.svg" },
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
