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
  title: "Moving to Budapest — International Removals | Sofoservis",
  description:
    "Moving to Budapest from Slovakia? Only 200 km from Bratislava — fast 1-day delivery. Professional door-to-door removals with packing and furniture.",
  keywords:
    "moving to budapest, moving to budapest from slovakia, moving to budapest from bratislava, international moving budapest, relocation budapest",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-budapest",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/budapest",
      en: "https://www.sofoservis.sk/en/moving-to-budapest",
      "x-default": "https://www.sofoservis.sk/en/moving-to-budapest",
    },
  },
};

export default function MovingToBudapestPage() {
  const faqItems = [
    {
      question: "How far is Budapest from Slovakia?",
      answer:
        "Budapest is approximately 200 km from Bratislava by road — about a 2-2.5 hour drive. It is one of the closest major capitals for Slovaks moving abroad.",
    },
    {
      question: "Are there customs requirements when moving from Slovakia to Budapest?",
      answer:
        "No — Slovakia and Hungary are both EU members. No customs formalities apply to personal household goods between the two countries.",
    },
    {
      question: "How quickly can you deliver to Budapest?",
      answer:
        "For moves from Slovakia to Budapest we typically deliver within 1 business day. Same-day service is possible for smaller loads.",
    },
    {
      question: "Which Budapest districts do you deliver to?",
      answer:
        "We deliver throughout all Budapest districts (kerületek) — from the city centre to outer residential areas such as Kispest, Zugló, Óbuda, and all other districts.",
    },
    {
      question: "Do you offer furniture reassembly in Budapest?",
      answer:
        "Yes, furniture disassembly and reassembly is included in our full-service move. Our team will have everything set up at your new Budapest home.",
    },
  ];

  const featuresData = {
    title: "Moving to Budapest — Quick Cross-Border Service",
    description:
      "At just 200 km from Bratislava, Budapest is one of the easiest and most affordable international moves from Slovakia.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Fast 1-Day Delivery",
        description:
          "We collect in Slovakia and deliver to Budapest within 1 business day — often the same day for smaller loads.",
        link: "/en/moving-to-budapest",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Budapest Districts",
        description:
          "We deliver to all Budapest districts, from the city centre to the outer boroughs.",
        link: "/en/moving-to-budapest",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description:
          "Professional packing for safe delivery to Budapest.",
        link: "/en/moving-to-budapest",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "Disassembly in Slovakia, full reassembly in Budapest.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description:
          "All items are insured for the journey from Slovakia to Budapest.",
        link: "/en/moving-to-budapest",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs",
        description:
          "EU-to-EU move — no customs paperwork required.",
        link: "/en/moving-to-budapest",
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
          title="Moving to Budapest from Slovakia"
          description="Relocating from Slovakia to Budapest? At just 200 km from Bratislava, Budapest is one of the closest international destinations. Sofoservis provides fast, professional door-to-door removals from anywhere in Slovakia to Budapest — often within 1 day."
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
          title="Moving to Budapest from Slovakia"
          description="Relocating from Slovakia to Budapest? At just 200 km from Bratislava, Budapest is one of the closest international destinations. Sofoservis provides fast, professional door-to-door removals from anywhere in Slovakia to Budapest — often within 1 day."
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
      <div><GoogleReviews title="Trusted for Moves to Budapest" /></div>
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
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Customers Who Moved to Budapest" /></div>
      <div>
        <FAQ
          title="FAQ — Moving to Budapest from Slovakia"
          subtitle="Common questions about relocating to Budapest"
          items={faqItems}
          callToActionText="Moving to Budapest? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to Budapest?"
          description="Get a free quote today. We deliver from Slovakia to Budapest in as little as 1 day."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving Bratislava to Budapest", description: "Dedicated Bratislava–Budapest route page.", href: "/en/moving-to-budapest", icon: "/icons/truck_icon.svg" },
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
