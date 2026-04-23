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
  title: "Moving to Austria — International Removals | Sofoservis",
  description:
    "Moving to Austria from Slovakia? Vienna is just 70 km from Bratislava — same-day delivery.",
  keywords:
    "moving to austria, moving to austria from slovakia, moving to austria from bratislava, international moving austria, relocation vienna graz salzburg",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-austria",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/rakusko",
      en: "https://www.sofoservis.sk/en/moving-to-austria",
      "x-default": "https://www.sofoservis.sk/en/moving-to-austria",
    },
  },
};

export default function MovingToAustriaPage() {
  const faqItems = [
    {
      question: "How far is Vienna from Bratislava?",
      answer: "Vienna is approximately 70 km from Bratislava — less than 1 hour by truck. Vienna–Bratislava is one of the shortest capital-to-capital distances in the world.",
    },
    {
      question: "Are there customs requirements for moving from Slovakia to Austria?",
      answer: "No — both Slovakia and Austria are EU members. No customs formalities apply to personal household goods on this route.",
    },
    {
      question: "Can a Slovakia–Vienna move be done in a single day?",
      answer: "Yes — for most household sizes, the loading, transit, and delivery in Vienna can all be completed in a single working day.",
    },
    {
      question: "Do you deliver to all Austrian cities?",
      answer: "Yes — we deliver throughout Austria including Vienna, Graz, Salzburg, Linz, Innsbruck, Klagenfurt, Wels, and all other cities and towns.",
    },
    {
      question: "Is furniture assembly available in Austria?",
      answer: "Yes, furniture disassembly at your Slovak home and reassembly in Austria is available as part of our full-service package.",
    },
  ];

  const featuresData = {
    title: "Moving to Austria — Reliable International Service",
    description:
      "Professional door-to-door removals from Slovakia to Austria. 70 km to Vienna — 1 day.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Same-Day Delivery to Vienna",
        description: "Vienna is just 70 km from Bratislava — most moves completed within a single working day.",
        link: "/en/moving-to-austria",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Austrian Cities",
        description: "Vienna, Graz, Salzburg, Linz, Innsbruck, Klagenfurt, and all other Austrian destinations.",
        link: "/en/moving-to-austria",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs — EU to EU",
        description: "Austria and Slovakia are both EU members — seamless border crossing.",
        link: "/en/moving-to-austria",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description: "Professional packing available for moves to all Austrian destinations.",
        link: "/en/moving-to-austria",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description: "All items are insured throughout the journey.",
        link: "/en/moving-to-austria",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description: "Disassembly in Slovakia, full reassembly in Austria.",
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
          title="Moving to Austria from Slovakia"
          description="Relocating from Slovakia to Austria? With Vienna only 70 km from Bratislava, Austria is our closest international destination. We cover Vienna, Graz, Salzburg, Linz, Innsbruck, and all Austrian cities."
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
          title="Moving to Austria from Slovakia"
          description="Relocating from Slovakia to Austria? With Vienna only 70 km from Bratislava, Austria is our closest international destination. We cover Vienna, Graz, Salzburg, Linz, Innsbruck, and all Austrian cities."
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
      <div><Clients /></div>
      <div><GoogleReviews title="Trusted for Moves to Austria" /></div>
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
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Customers Who Moved to Austria" /></div>
      <div>
        <FAQ
          title="FAQ — Moving to Austria from Slovakia"
          subtitle="Common questions about relocating to Austria"
          items={faqItems}
          callToActionText="Moving to Austria? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to Austria?"
          description="Get a free quote today. We deliver from Slovakia to Vienna on the same day."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving to Vienna", description: "Dedicated Vienna route page.", href: "/en/moving-to-vienna", icon: "/icons/globe_icon.svg" },
          { title: "Moving Bratislava to Vienna", description: "Bratislava–Vienna moving route.", href: "/en/moving-bratislava-vienna", icon: "/icons/truck_icon.svg" },
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
