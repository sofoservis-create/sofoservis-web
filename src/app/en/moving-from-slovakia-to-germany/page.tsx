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
  title: "Moving to Germany — International Removals | Sofoservis",
  description:
    "Professional international moving from Slovakia to Germany. Regular routes to Munich, Berlin, Hamburg, Frankfurt, and all German cities.",
  keywords:
    "moving from slovakia to germany, moving from bratislava to munich, slovakia to germany removals, international moving slovakia germany, moving to munich from slovakia",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-from-slovakia-to-germany",
    languages: {
      en: "https://www.sofoservis.sk/en/moving-from-slovakia-to-germany",
      "x-default": "https://www.sofoservis.sk/en/moving-from-slovakia-to-germany",
    },
  },
};

export default function MovingFromSlovakiaToGermanyPage() {
  const faqItems = [
    {
      question: "How long does moving from Slovakia to Germany take?",
      answer:
        "Transit from Slovakia to Germany typically takes 2-4 days. To Munich, it is usually 1-2 days. To northern Germany (Hamburg, Berlin) it may take 3-4 days. We operate regular routes to ensure minimal waiting times.",
    },
    {
      question: "Are there customs formalities for moving from Slovakia to Germany?",
      answer:
        "No — both countries are EU members. No customs declarations are required for moving personal household goods between Slovakia and Germany. We handle all standard transport documentation.",
    },
    {
      question: "Which German cities do you deliver to?",
      answer:
        "We deliver throughout Germany — Munich, Berlin, Hamburg, Frankfurt, Cologne, Stuttgart, Düsseldorf, Leipzig, Dresden, Nuremberg, and all other cities and towns.",
    },
    {
      question: "Can I send a partial load from Slovakia to Germany?",
      answer:
        "Yes, our groupage service is ideal if you have a partial household. We consolidate your shipment with others going in the same direction, making it cost-effective.",
    },
    {
      question: "Do you disassemble and reassemble furniture?",
      answer:
        "Yes, furniture disassembly is available before the move, and our team will reassemble everything at your new German address.",
    },
  ];

  const featuresData = {
    title: "Slovakia to Germany — One of Our Most Popular Routes",
    description:
      "Regular departures between Slovakia and Germany mean fast transit times and competitive pricing for your international move.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Regular Slovakia–Germany Routes",
        description:
          "We operate scheduled services between Slovakia and Germany, keeping transit times short and prices competitive.",
        link: "/en/moving-from-slovakia-to-germany",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Nationwide German Delivery",
        description:
          "We deliver to Munich, Berlin, Hamburg, Frankfurt, Cologne, Stuttgart, and all other German cities.",
        link: "/en/moving-from-slovakia-to-germany",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description:
          "Professional packing using materials suited for long-distance international moves.",
        link: "/en/moving-from-slovakia-to-germany",
      },
      {
        image: "/icons/document_icon.svg",
        title: "All Documentation Handled",
        description:
          "We manage all transport paperwork so your move proceeds without delays.",
        link: "/en/moving-from-slovakia-to-germany",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description:
          "All belongings are insured throughout the entire journey from Slovakia to Germany.",
        link: "/en/moving-from-slovakia-to-germany",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "We disassemble furniture before loading and reassemble it at your new German address.",
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
          title="Moving from Slovakia to Germany"
          description="Relocating from Slovakia to Germany? Sofoservis offers professional door-to-door international removals from anywhere in Slovakia to all German cities. Regular routes, competitive prices, and a completely managed moving experience."
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
          title="Moving from Slovakia to Germany"
          description="Relocating from Slovakia to Germany? Sofoservis offers professional door-to-door international removals from anywhere in Slovakia to all German cities. Regular routes, competitive prices, and a completely managed moving experience."
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

      <div>
        <Clients />
      </div>

      <div>
        <GoogleReviews title="Trusted for Slovakia to Germany Removals" />
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
          title="Reviews from Customers Who Moved from Slovakia to Germany"
        />
      </div>

      <div>
        <FAQ
          title="FAQ — Moving from Slovakia to Germany"
          subtitle="Common questions about relocating from Slovakia to Germany"
          items={faqItems}
          callToActionText="Moving from Slovakia to Germany? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Moving from Slovakia to Germany?"
          description="Contact us today for a free, detailed quote. Our team is ready to help you relocate from Slovakia to Germany."
          buttonText="Request a Quote"
        />
      </div>

      <RelatedServices
        title="Related Services"
        services={[
          {
            title: "Moving from Slovakia",
            description: "Overview of all routes from Slovakia abroad.",
            href: "/en/moving-from-slovakia",
            icon: "/icons/globe_icon.svg",
          },
          {
            title: "Moving Bratislava to Munich",
            description: "City-to-city route between Bratislava and Munich.",
            href: "/en/moving-bratislava-munich",
            icon: "/icons/truck_icon.svg",
          },
          {
            title: "Moving Bratislava to Berlin",
            description: "City-to-city route between Bratislava and Berlin.",
            href: "/en/moving-bratislava-berlin",
            icon: "/icons/truck_icon.svg",
          },
          {
            title: "International Moving Services",
            description: "All international moving routes and destinations.",
            href: "/en/international-moving-services",
            icon: "/icons/globe_icon.svg",
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
