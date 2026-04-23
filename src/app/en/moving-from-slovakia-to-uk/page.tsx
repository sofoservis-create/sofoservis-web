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
  title: "Moving to the UK — International Removals | Sofoservis",
  description:
    "Professional moving from Slovakia to the United Kingdom. We handle post-Brexit customs paperwork, full packing service, and safe door-to-door delivery.",
  keywords:
    "moving from slovakia to uk, moving from slovakia to england, moving from bratislava to london, slovakia to uk removals, international moving slovakia uk",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-from-slovakia-to-uk",
    languages: {
      en: "https://www.sofoservis.sk/en/moving-from-slovakia-to-uk",
      "x-default": "https://www.sofoservis.sk/en/moving-from-slovakia-to-uk",
    },
  },
};

export default function MovingFromSlovakiaToUKPage() {
  const faqItems = [
    {
      question: "What customs documents are needed when moving from Slovakia to the UK?",
      answer:
        "Since Brexit, the UK is no longer in the EU. Moving personal household goods from Slovakia to the UK requires a UK customs declaration. You may be eligible for Transfer of Residence (ToR) relief if you are permanently relocating to the UK. Our team prepares all necessary documentation.",
    },
    {
      question: "How long does shipping from Slovakia to the UK take?",
      answer:
        "Door-to-door transit typically takes 4-7 days from Slovakia to the UK, depending on your exact destination. We use direct routes to London and other major cities. Groupage shipments may take slightly longer due to consolidation.",
    },
    {
      question: "Where in the UK do you deliver?",
      answer:
        "We deliver anywhere in England, Scotland, and Wales — London, Manchester, Birmingham, Edinburgh, Leeds, Glasgow, Bristol, and all other towns and cities.",
    },
    {
      question: "Do you offer a packing service for Slovakia to UK moves?",
      answer:
        "Yes, our professional packing team uses double-walled boxes, bubble wrap, and specialist materials for fragile items. Full packing service is available at extra cost or as part of a full-service package.",
    },
    {
      question: "Is my furniture insured during transport from Slovakia to the UK?",
      answer:
        "Yes, all items are covered by transport insurance for the full duration of the move. Additional insurance for high-value items can also be arranged.",
    },
  ];

  const featuresData = {
    title: "Why Choose Sofoservis for Your Slovakia to UK Move?",
    description:
      "We make moving from Slovakia to the UK straightforward — including all post-Brexit customs handling and delivery anywhere in the UK.",
    features: [
      {
        image: "/icons/document_icon.svg",
        title: "Post-Brexit Customs Expertise",
        description:
          "Full guidance on UK import requirements. We handle all customs documentation for a smooth arrival of your belongings in the UK.",
        link: "/en/moving-from-slovakia-to-uk",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Door-to-Door Service",
        description:
          "We collect from your Slovak address and deliver directly to your new UK home. No depots, no hassle.",
        link: "/en/moving-from-slovakia-to-uk",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Professional Packing",
        description:
          "Trained packers protect all your items using materials suited for long international journeys.",
        link: "/en/moving-from-slovakia-to-uk",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Fully Insured Transport",
        description:
          "All belongings are insured for the complete journey from Slovakia to the UK.",
        link: "/en/moving-from-slovakia-to-uk",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "Nationwide UK Delivery",
        description:
          "We deliver to London, Manchester, Birmingham, Edinburgh, and anywhere else in the UK.",
        link: "/en/moving-from-slovakia-to-uk",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "We disassemble furniture before the move and reassemble it at your new UK address.",
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
          title="Moving from Slovakia to the UK"
          description="Relocating from Slovakia to the United Kingdom? Sofoservis provides professional door-to-door international removals from anywhere in Slovakia to any address in the UK. We handle all post-Brexit customs documentation and ensure your belongings arrive safely."
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
          title="Moving from Slovakia to the UK"
          description="Relocating from Slovakia to the United Kingdom? Sofoservis provides professional door-to-door international removals from anywhere in Slovakia to any address in the UK. We handle all post-Brexit customs documentation and ensure your belongings arrive safely."
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
        <GoogleReviews title="Trusted for Slovakia to UK Removals" />
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
          title="Reviews from Customers Who Moved from Slovakia to the UK"
        />
      </div>

      <div>
        <FAQ
          title="FAQ — Moving from Slovakia to the UK"
          subtitle="Common questions about relocating from Slovakia to the United Kingdom"
          items={faqItems}
          callToActionText="Moving from Slovakia to the UK? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Moving from Slovakia to the UK?"
          description="Our team is ready to handle your Slovakia-to-UK relocation from start to finish. Contact us for a free, detailed quote."
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
            title: "Moving Bratislava to London",
            description: "City-to-city route between Bratislava and London.",
            href: "/en/moving-bratislava-london",
            icon: "/icons/truck_icon.svg",
          },
          {
            title: "Moving from UK to Slovakia",
            description: "Moving the other direction? We cover that too.",
            href: "/en/moving-from-uk-to-slovakia",
            icon: "/icons/globe_icon.svg",
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
