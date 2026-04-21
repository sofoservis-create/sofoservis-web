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
  title: "Moving to Norway — International Removals | Sofoservis",
  description:
    "Professional international moving from Slovakia to Norway. We handle Norwegian customs clearance and deliver to Oslo, Bergen, Stavanger, and Trondheim.",
  keywords:
    "moving from slovakia to norway, moving from bratislava to oslo, slovakia to norway removals, international moving slovakia norway, moving to oslo from slovakia",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-from-slovakia-to-norway",
    languages: {
      en: "https://www.sofoservis.sk/en/moving-from-slovakia-to-norway",
      "x-default": "https://www.sofoservis.sk/en/moving-from-slovakia-to-norway",
    },
  },
};

export default function MovingFromSlovakiaToNorwayPage() {
  const faqItems = [
    {
      question: "Are there customs requirements when moving from Slovakia to Norway?",
      answer:
        "Yes — Norway is not an EU member state (it is EEA/EFTA). Moving personal household goods from Slovakia to Norway requires Norwegian customs clearance. You may qualify for customs duty relief if you are permanently relocating. Our team prepares all required documentation.",
    },
    {
      question: "How long does a move from Slovakia to Norway take?",
      answer:
        "Transit from Slovakia to Norway typically takes 5-8 days. To Oslo it is usually 5-6 days. Destinations in northern Norway may take longer. We provide regular updates throughout.",
    },
    {
      question: "Which Norwegian cities do you deliver to?",
      answer:
        "We deliver throughout Norway — Oslo, Bergen, Stavanger, Trondheim, Drammen, Fredrikstad, Kristiansand, and all other Norwegian cities and towns.",
    },
    {
      question: "What documents are needed for the Norwegian customs process?",
      answer:
        "You typically need a detailed inventory of items, proof of residency change, and a completed Norwegian customs declaration (Toll declaration). Our team guides you through every step and prepares all paperwork.",
    },
    {
      question: "Can I send a partial load from Slovakia to Norway?",
      answer:
        "Yes, our groupage (part-load) service lets you share a vehicle with other Norwegian shipments, making it cost-effective for smaller quantities.",
    },
  ];

  const featuresData = {
    title: "Slovakia to Norway — Expert Non-EU Removals",
    description:
      "Norway requires customs clearance — our experienced team handles all formalities so your move from Slovakia to Norway is smooth and stress-free.",
    features: [
      {
        image: "/icons/document_icon.svg",
        title: "Norwegian Customs Expertise",
        description:
          "We prepare all Norwegian customs documentation and guide you through the import process step by step.",
        link: "/en/moving-from-slovakia-to-norway",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Door-to-Door Delivery",
        description:
          "We collect from your Slovak address and deliver directly to Oslo, Bergen, Stavanger, or anywhere in Norway.",
        link: "/en/moving-from-slovakia-to-norway",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Professional Packing",
        description:
          "Quality packing materials and expert techniques for long Scandinavian routes.",
        link: "/en/moving-from-slovakia-to-norway",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Norwegian Destinations",
        description:
          "We deliver throughout Norway — from Oslo to the far north.",
        link: "/en/moving-from-slovakia-to-norway",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Fully Insured Transport",
        description:
          "Your belongings are insured for the complete journey from Slovakia to Norway.",
        link: "/en/moving-from-slovakia-to-norway",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "We disassemble furniture before the move and reassemble it at your new Norwegian home.",
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
          title="Moving from Slovakia to Norway"
          description="Relocating from Slovakia to Norway? Sofoservis provides professional door-to-door removals from anywhere in Slovakia to Oslo, Bergen, Stavanger, and all of Norway. Our team handles Norwegian customs clearance, professional packing, and safe final delivery."
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
          title="Moving from Slovakia to Norway"
          description="Relocating from Slovakia to Norway? Sofoservis provides professional door-to-door removals from anywhere in Slovakia to Oslo, Bergen, Stavanger, and all of Norway. Our team handles Norwegian customs clearance, professional packing, and safe final delivery."
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
        <GoogleReviews title="Trusted for Slovakia to Norway Removals" />
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
          title="Reviews from Customers Who Moved from Slovakia to Norway"
        />
      </div>

      <div>
        <FAQ
          title="FAQ — Moving from Slovakia to Norway"
          subtitle="Common questions about relocating from Slovakia to Norway"
          items={faqItems}
          callToActionText="Moving from Slovakia to Norway? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Moving from Slovakia to Norway?"
          description="Contact us today for a free quote. We handle Norwegian customs and deliver door-to-door anywhere in Norway."
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
            title: "Moving from Slovakia to Sweden",
            description: "Also moving to Sweden? We cover that route too.",
            href: "/en/moving-from-slovakia-to-sweden",
            icon: "/icons/truck_icon.svg",
          },
          {
            title: "International Moving Services",
            description: "All international moving routes and destinations.",
            href: "/en/international-moving-services",
            icon: "/icons/globe_icon.svg",
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
