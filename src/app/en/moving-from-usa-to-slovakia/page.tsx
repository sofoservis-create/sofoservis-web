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
  title: "Moving from USA to Slovakia — Intercontinental | Sofoservis",
  description:
    "Moving from the United States to Slovakia? We coordinate sea freight, customs clearance, and door-to-door delivery to Bratislava and all of Slovakia.",
  keywords:
    "moving from usa to slovakia, moving from america to slovakia, moving from new york to slovakia, usa to slovakia removals, intercontinental moving usa slovakia",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-from-usa-to-slovakia",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie-z-usa-na-slovensko",
      en: "https://www.sofoservis.sk/en/moving-from-usa-to-slovakia",
      "x-default": "https://www.sofoservis.sk/en/moving-from-usa-to-slovakia",
    },
  },
};

export default function MovingFromUSAToSlovakiaPage() {
  const faqItems = [
    {
      question: "How long does it take to ship household goods from the USA to Slovakia?",
      answer:
        "Transatlantic sea freight from the USA to Slovakia typically takes 4-8 weeks in total, depending on the departure port and final destination in Slovakia. This includes sea transit, port handling, customs clearance, and final delivery. Air freight options are available for urgent smaller shipments.",
    },
    {
      question: "What customs documents are needed when moving from the USA to Slovakia?",
      answer:
        "As Slovakia is an EU member state, moving goods from the USA into Slovakia requires EU customs clearance. You will typically need proof of residency change, a detailed inventory list, and proof that items are personal-use belongings. Import duty relief (Transfer of Residence) may apply. Our team handles all customs paperwork.",
    },
    {
      question: "Do I need to pay import duties on my household goods?",
      answer:
        "If you qualify for Transfer of Residence (ToR) relief — meaning you are permanently relocating from the USA to Slovakia — your personal household goods can be imported duty-free. We guide you through the qualification process and paperwork.",
    },
    {
      question: "Can you arrange packing in the USA?",
      answer:
        "We work with partner companies in the USA for professional packing and loading. We coordinate the entire process from the US to your new address in Slovakia.",
    },
    {
      question: "What happens to my goods at the European port?",
      answer:
        "On arrival at the European port, your shipment clears customs and is transferred to our trucks for the final leg to Slovakia. We manage the entire port-to-door process on your behalf.",
    },
  ];

  const featuresData = {
    title: "Moving from the USA to Slovakia — Full Intercontinental Service",
    description:
      "We coordinate everything — sea freight, customs clearance, and final delivery — for a smooth intercontinental move from the United States to Slovakia.",
    features: [
      {
        image: "/icons/globe_icon.svg",
        title: "Sea Freight Coordination",
        description:
          "We arrange FCL (full container) or LCL (groupage) sea freight from any US port to Europe and onwards to Slovakia.",
        link: "/en/moving-from-usa-to-slovakia",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Full Customs Management",
        description:
          "Our experienced team handles all EU customs clearance and Transfer of Residence relief applications on your behalf.",
        link: "/en/moving-from-usa-to-slovakia",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "US Packing Coordination",
        description:
          "We work with partner packing companies in the USA to ensure your belongings are properly packed for ocean transit.",
        link: "/en/moving-from-usa-to-slovakia",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Door-to-Door Delivery in Slovakia",
        description:
          "From port arrival in Europe to final delivery at your new Slovak address — we handle the complete final leg.",
        link: "/en/moving-from-usa-to-slovakia",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Marine and Transit Insurance",
        description:
          "We arrange comprehensive marine insurance for your shipment covering the entire USA-to-Slovakia journey.",
        link: "/en/moving-from-usa-to-slovakia",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly in Slovakia",
        description:
          "Once delivered, our team can reassemble your furniture so you settle in as quickly as possible.",
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
          title="Moving from the USA to Slovakia"
          description="Relocating from the United States to Slovakia? Sofoservis coordinates the full intercontinental move — US packing, sea freight, EU customs clearance, and door-to-door delivery to your new Slovak home. One company, complete service."
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
          title="Moving from the USA to Slovakia"
          description="Relocating from the United States to Slovakia? Sofoservis coordinates the full intercontinental move — US packing, sea freight, EU customs clearance, and door-to-door delivery to your new Slovak home. One company, complete service."
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

      <div>
        <Clients />
      </div>

      <div>
        <GoogleReviews title="Trusted for USA to Slovakia Relocations" />
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
          title="Reviews from Our Clients"
        />
      </div>

      <div>
        <FAQ
          title="FAQ — Moving from the USA to Slovakia"
          subtitle="Common questions about relocating from the United States to Slovakia"
          items={faqItems}
          callToActionText="Moving from the USA to Slovakia? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Moving from the USA to Slovakia?"
          description="Contact us today for a comprehensive quote on your transatlantic move. We handle everything from the US to your new Slovak home."
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
            title: "International Moving Services",
            description: "All international moving routes and destinations.",
            href: "/en/international-moving-services",
            icon: "/icons/globe_icon.svg",
          },
          {
            title: "Apartment Moving",
            description: "Professional home and apartment relocation services.",
            href: "/en/apartment-moving",
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
