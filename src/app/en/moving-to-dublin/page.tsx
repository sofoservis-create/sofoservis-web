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
  title: "Moving to Dublin — International Removals | Sofoservis",
  description:
    "Moving to Dublin from Slovakia? Sea crossing included, 5-8 day door-to-door delivery to all Dublin areas. Professional removals with packing.",
  keywords:
    "moving to dublin, moving to dublin from slovakia, moving to ireland from slovakia, international moving dublin, relocation dublin ireland",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-dublin",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/dublin",
      en: "https://www.sofoservis.sk/en/moving-to-dublin",
      "x-default": "https://www.sofoservis.sk/en/moving-to-dublin",
    },
  },
};

export default function MovingToDublinPage() {
  const faqItems = [
    {
      question: "Are there customs requirements for moving from Slovakia to Dublin?",
      answer:
        "No — Slovakia and Ireland are both EU members. No customs formalities apply to personal household goods between the two countries.",
    },
    {
      question: "How does transport from Slovakia to Dublin work?",
      answer:
        "We drive from Slovakia to a Channel port, take a sea crossing to Ireland, and deliver to your Dublin address. The entire journey including the sea crossing is included in our service.",
    },
    {
      question: "How long does delivery from Slovakia to Dublin take?",
      answer:
        "Including the sea crossing, we typically deliver from Slovakia to Dublin within 5-8 business days.",
    },
    {
      question: "Which Dublin areas do you deliver to?",
      answer:
        "We deliver throughout Dublin — all postal districts (D1–D24) and County Dublin including Dun Laoghaire, Fingal, and South Dublin.",
    },
    {
      question: "Is my furniture insured during the sea crossing?",
      answer:
        "Yes, all items are insured throughout the entire journey including the sea crossing.",
    },
  ];

  const featuresData = {
    title: "Moving to Dublin — Complete Island-Crossing Service",
    description:
      "Our team manages everything — road transport, sea crossing, and final delivery to Dublin. One company, complete service.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Sea Crossing Fully Included",
        description:
          "We manage road transport from Slovakia, the ferry to Ireland, and final delivery to Dublin.",
        link: "/en/moving-to-dublin",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Dublin Postal Districts",
        description:
          "We deliver to all Dublin postal districts and County Dublin areas.",
        link: "/en/moving-to-dublin",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description:
          "Professional packing including materials suited for sea transit.",
        link: "/en/moving-to-dublin",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "Disassembly in Slovakia, full reassembly in Dublin.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Fully Insured Transport",
        description:
          "All belongings are insured for the full journey including the sea crossing.",
        link: "/en/moving-to-dublin",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs (EU–EU)",
        description:
          "Both Slovakia and Ireland are EU members — no customs declarations needed.",
        link: "/en/moving-to-dublin",
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
          title="Moving to Dublin from Slovakia"
          description="Relocating from Slovakia to Dublin? Sofoservis handles the full journey — road transport from Slovakia, sea crossing, and door-to-door delivery to your Dublin address. Professional service, 5-8 day delivery."
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
          title="Moving to Dublin from Slovakia"
          description="Relocating from Slovakia to Dublin? Sofoservis handles the full journey — road transport from Slovakia, sea crossing, and door-to-door delivery to your Dublin address. Professional service, 5-8 day delivery."
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
      <div><GoogleReviews title="Trusted for Moves to Dublin" /></div>
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
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Customers Who Moved to Dublin" /></div>
      <div>
        <FAQ
          title="FAQ — Moving to Dublin from Slovakia"
          subtitle="Common questions about relocating to Dublin"
          items={faqItems}
          callToActionText="Moving to Dublin? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to Dublin?"
          description="Get a free quote today. We handle everything — road, sea crossing, and delivery to Dublin."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving from Slovakia to Ireland", description: "Full Slovakia-to-Ireland coverage.", href: "/en/moving-from-slovakia-to-ireland", icon: "/icons/globe_icon.svg" },
          { title: "Moving Bratislava to Dublin", description: "Dedicated Bratislava–Dublin route page.", href: "/en/moving-to-dublin", icon: "/icons/truck_icon.svg" },
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
