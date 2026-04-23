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
  title: "Moving to Hungary — International Removals | Sofoservis",
  description:
    "Moving to Hungary from Slovakia? Budapest is only 200 km from Bratislava — same-day or next-day delivery.",
  keywords:
    "moving to hungary, moving to hungary from slovakia, moving to hungary from bratislava, international moving hungary, relocation budapest",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-hungary",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/madarsko",
      en: "https://www.sofoservis.sk/en/moving-to-hungary",
      "x-default": "https://www.sofoservis.sk/en/moving-to-hungary",
    },
  },
};

export default function MovingToHungaryPage() {
  const faqItems = [
    {
      question: "How far is Budapest from Bratislava?",
      answer: "Budapest is approximately 200 km from Bratislava — about a 2 hour drive. Most Slovakia–Budapest moves can be completed within a single working day.",
    },
    {
      question: "Are there customs requirements for moving from Slovakia to Hungary?",
      answer: "No — both Slovakia and Hungary are EU members. No customs formalities apply to personal household goods on this route.",
    },
    {
      question: "Do you deliver to all Hungarian cities?",
      answer: "Yes — we deliver throughout Hungary including Budapest, Debrecen, Miskolc, Pécs, Győr, Szeged, and all other cities and towns.",
    },
    {
      question: "Can a Slovakia–Budapest move be done in a single day?",
      answer: "Yes, for most household sizes the loading, transit, and delivery in Budapest can all be completed in a single working day.",
    },
    {
      question: "Is furniture assembly available in Hungary?",
      answer: "Yes, furniture disassembly at your Slovak home and reassembly in Hungary is available as part of our full-service package.",
    },
  ];

  const featuresData = {
    title: "Moving to Hungary — Reliable International Service",
    description:
      "Professional door-to-door removals from Slovakia to Hungary. 200 km to Budapest — 1 day.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Same-Day Delivery to Budapest",
        description: "At only 200 km, Budapest deliveries are often completed on the same day.",
        link: "/en/moving-to-hungary",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Hungarian Cities",
        description: "Budapest, Debrecen, Miskolc, Pécs, Győr, Szeged, and all other Hungarian destinations.",
        link: "/en/moving-to-hungary",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs — EU to EU",
        description: "Hungary and Slovakia are both EU members — no customs paperwork.",
        link: "/en/moving-to-hungary",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description: "Professional packing available for moves to all Hungarian destinations.",
        link: "/en/moving-to-hungary",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description: "All items are insured throughout the journey.",
        link: "/en/moving-to-hungary",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description: "Disassembly in Slovakia, full reassembly in Hungary.",
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
          title="Moving to Hungary from Slovakia"
          description="Relocating from Slovakia to Hungary? With Budapest only 200 km from Bratislava, Hungary is one of our closest and quickest international routes. We cover all Hungarian cities."
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
          title="Moving to Hungary from Slovakia"
          description="Relocating from Slovakia to Hungary? With Budapest only 200 km from Bratislava, Hungary is one of our closest and quickest international routes. We cover all Hungarian cities."
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
      <div><GoogleReviews title="Trusted for Moves to Hungary" /></div>
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
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Customers Who Moved to Hungary" /></div>
      <div>
        <FAQ
          title="FAQ — Moving to Hungary from Slovakia"
          subtitle="Common questions about relocating to Hungary"
          items={faqItems}
          callToActionText="Moving to Hungary? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to Hungary?"
          description="Get a free quote today. We deliver from Slovakia to Budapest on the same day."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving to Budapest", description: "Dedicated Budapest route page.", href: "/en/moving-to-budapest", icon: "/icons/globe_icon.svg" },
          { title: "Moving Bratislava to Budapest", description: "Bratislava–Budapest moving route.", href: "/en/moving-bratislava-budapest", icon: "/icons/truck_icon.svg" },
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
