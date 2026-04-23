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
  title: "Moving Bratislava to Dublin — International Removals | Sofoservis",
  description:
    "Professional moving from Bratislava to Dublin. Sea crossing included, 5-8 day delivery.",
  keywords:
    "moving bratislava dublin, moving from bratislava to dublin, bratislava to dublin removals, moving to dublin from slovakia, stahovanie bratislava dublin",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-bratislava-dublin",
    languages: {
      en: "https://www.sofoservis.sk/en/moving-bratislava-dublin",
      "x-default": "https://www.sofoservis.sk/en/moving-bratislava-dublin",
    },
  },
};

export default function MovingBratislavaDublinPage() {
  const faqItems = [
    {
      question: "How do you transport belongings from Bratislava to Dublin?",
      answer:
        "We drive from Bratislava to a Channel port, cross via ferry to Ireland, and deliver to your Dublin address. The sea crossing is fully included in our service.",
    },
    {
      question: "How long does the Bratislava to Dublin move take?",
      answer:
        "Including the sea crossing, we typically deliver from Bratislava to Dublin within 5-8 business days.",
    },
    {
      question: "Are there customs requirements for moving from Bratislava to Dublin?",
      answer:
        "No — both Slovakia and Ireland are EU members. No customs formalities apply to personal household goods on this route.",
    },
    {
      question: "Do you deliver to all Dublin postal districts?",
      answer:
        "Yes, we deliver to all Dublin postal districts (D1–D24) and County Dublin areas including Dun Laoghaire, Fingal, and South Dublin.",
    },
    {
      question: "Can I send just a few boxes from Bratislava to Dublin?",
      answer:
        "Yes, our groupage service is perfect for smaller shipments. Your items share a vehicle with other Ireland-bound loads.",
    },
  ];

  const featuresData = {
    title: "Bratislava–Dublin: Complete Island-Crossing Service",
    description:
      "The Dublin route includes a sea crossing. Our team manages the full journey — road, ferry, and final delivery.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Full Sea Crossing Included",
        description:
          "We manage road transport from Bratislava, the ferry crossing to Ireland, and final delivery to Dublin.",
        link: "/en/moving-bratislava-dublin",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Dublin Districts",
        description:
          "We deliver to all Dublin postal districts and County Dublin areas.",
        link: "/en/moving-bratislava-dublin",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description:
          "Professional packing using materials suited for long international journeys including sea transit.",
        link: "/en/moving-bratislava-dublin",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "Disassembly in Bratislava, reassembly in Dublin.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Fully Insured Transport",
        description:
          "All belongings are insured for the entire journey including the sea crossing.",
        link: "/en/moving-bratislava-dublin",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs (EU–EU)",
        description:
          "Both Slovakia and Ireland are EU members — no customs declarations required.",
        link: "/en/moving-bratislava-dublin",
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
          title="Moving from Bratislava to Dublin"
          description="Moving from Bratislava to Dublin? Sofoservis handles the full journey — road transport, sea crossing, and final delivery to your Dublin address. Professional service, 5-8 day delivery, and door-to-door convenience."
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
          title="Moving from Bratislava to Dublin"
          description="Moving from Bratislava to Dublin? Sofoservis handles the full journey — road transport, sea crossing, and final delivery to your Dublin address. Professional service, 5-8 day delivery, and door-to-door convenience."
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
        <GoogleReviews title="Trusted for Bratislava–Dublin Moves" />
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
          title="Reviews from Bratislava–Dublin Customers"
        />
      </div>

      <div>
        <FAQ
          title="FAQ — Moving from Bratislava to Dublin"
          subtitle="Common questions about the Bratislava–Dublin moving route"
          items={faqItems}
          callToActionText="Moving from Bratislava to Dublin? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Moving from Bratislava to Dublin?"
          description="Get a free quote today. We handle the entire journey — road, sea crossing, and delivery to your Dublin address."
          buttonText="Request a Quote"
        />
      </div>

      <RelatedServices
        title="Related Services"
        services={[
          {
            title: "Moving from Slovakia to Ireland",
            description: "Full country-to-country coverage for Slovakia to Ireland.",
            href: "/en/moving-from-slovakia-to-ireland",
            icon: "/icons/globe_icon.svg",
          },
          {
            title: "International Moving Services",
            description: "All international moving routes and destinations.",
            href: "/en/international-moving-services",
            icon: "/icons/globe_icon.svg",
          },
          {
            title: "Moving Bratislava",
            description: "Local moving services in Bratislava.",
            href: "/en/moving-bratislava",
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
