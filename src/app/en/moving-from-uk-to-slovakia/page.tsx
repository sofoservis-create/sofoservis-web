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
  title: "Moving from UK to Slovakia | Sofoservis",
  description:
    "Professional international moving from the UK to Slovakia. We handle post-Brexit customs paperwork, full packing service, and safe door-to-door delivery.",
  keywords:
    "moving from uk to slovakia, moving from england to slovakia, moving from london to slovakia, uk to slovakia removals, international moving uk slovakia",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-from-uk-to-slovakia",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-z-anglie-na-slovensko",
      en: "https://www.sofoservis.sk/en/moving-from-uk-to-slovakia",
      "x-default": "https://www.sofoservis.sk/en/moving-from-uk-to-slovakia",
    },
  },
};

export default function MovingFromUKToSlovakiaPage() {
  const faqItems = [
    {
      question: "What customs documents are needed when moving from the UK to Slovakia?",
      answer:
        "Since Brexit, the UK is no longer in the EU. Moving personal household goods from the UK to Slovakia requires a customs declaration and proof of change of residence. You will need a Transfer of Residence (ToR) relief application to import your belongings duty-free. Our team prepares all the necessary documentation and guides you through the process.",
    },
    {
      question: "How long does shipping from the UK to Slovakia take?",
      answer:
        "Door-to-door transit typically takes 4-7 days from the UK to Slovakia, depending on exact origin and destination. We use direct routes from London and other major cities. Groupage shipments may take slightly longer due to consolidation.",
    },
    {
      question: "Can you collect my belongings from anywhere in the UK?",
      answer:
        "Yes, we collect from anywhere in England, Scotland, and Wales. We serve London, Manchester, Birmingham, Edinburgh, Leeds, Glasgow, and all other towns and cities across the UK.",
    },
    {
      question: "Do you offer a packing service for UK to Slovakia moves?",
      answer:
        "Yes, our professional packing team can pack your entire household using double-walled boxes, bubble wrap, and specialist packing materials for fragile items. Packing is available at extra cost or as part of a full-service package.",
    },
    {
      question: "Is my furniture insured during transport from the UK to Slovakia?",
      answer:
        "All items are covered by transport insurance for the full duration of the move. We can also arrange additional goods-in-transit insurance for high-value items such as antiques, artworks, or electronics.",
    },
  ];

  const featuresData = {
    title: "Why Choose Sofoservis for Your UK to Slovakia Move?",
    description:
      "We make moving from the UK to Slovakia straightforward — from collection to delivery, including all post-Brexit customs handling.",
    features: [
      {
        image: "/icons/document_icon.svg",
        title: "Post-Brexit Customs Expertise",
        description:
          "Full guidance and preparation of all UK-to-EU customs documentation. We ensure your belongings enter Slovakia without delays or unexpected charges.",
        link: "/en/moving-from-uk-to-slovakia",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Door-to-Door Service",
        description:
          "We collect from your UK address and deliver directly to your new home in Slovakia. No depots, no hassle.",
        link: "/en/moving-from-uk-to-slovakia",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Professional Packing",
        description:
          "Our trained packers protect all your items using high-quality materials suitable for long international journeys.",
        link: "/en/moving-from-uk-to-slovakia",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Fully Insured Transport",
        description:
          "All your belongings are insured throughout the entire journey from the UK to Slovakia.",
        link: "/en/moving-from-uk-to-slovakia",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Nationwide UK Collection",
        description:
          "We collect from London, Manchester, Birmingham, Edinburgh, and anywhere else in the UK.",
        link: "/en/moving-from-uk-to-slovakia",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "We disassemble furniture before the move and reassemble it at your new Slovak address.",
        link: "/en/furniture-assembly",
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
          title="Moving from the UK to Slovakia"
          description="Relocating from the United Kingdom to Slovakia? Sofoservis provides professional door-to-door international removals from anywhere in the UK. We handle post-Brexit customs documentation, secure packing, and safe delivery to your new Slovak home."
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
          title="Moving from the UK to Slovakia"
          description="Relocating from the United Kingdom to Slovakia? Sofoservis provides professional door-to-door international removals from anywhere in the UK. We handle post-Brexit customs documentation, secure packing, and safe delivery to your new Slovak home."
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
        <GoogleReviews title="Trusted for UK to Slovakia Removals" />
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
          title="Reviews from Customers Who Moved from the UK"
        />
      </div>

      <div>
        <FAQ
          title="FAQ — Moving from the UK to Slovakia"
          subtitle="Common questions about relocating from the United Kingdom to Slovakia"
          items={faqItems}
          callToActionText="Moving from the UK to Slovakia? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Moving from the UK to Slovakia?"
          description="Our team is ready to handle your UK-to-Slovakia relocation from start to finish. Contact us for a free, detailed quote."
          buttonText="Request a Quote"
        />
      </div>

      <RelatedServices
        title="Related Services"
        services={[
          {
            title: "Moving to Slovakia",
            description: "Overview of all routes to Slovakia from abroad.",
            href: "/en/moving-to-slovakia",
            icon: "/icons/globe_icon.svg",
          },
          {
            title: "Moving from Slovakia to the UK",
            description: "Moving the other direction? We cover that too.",
            href: "/en/moving-from-slovakia-to-uk",
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
