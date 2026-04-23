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
  title: "Moving to Vienna — International Removals | Sofoservis",
  description:
    "Moving to Vienna from Slovakia? Bratislava is just 60 km from Vienna — one of Europe's fastest international moves.",
  keywords:
    "moving to vienna, moving to vienna from slovakia, moving to vienna from bratislava, international moving vienna, relocation vienna",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-vienna",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/vieden",
      en: "https://www.sofoservis.sk/en/moving-to-vienna",
      "x-default": "https://www.sofoservis.sk/en/moving-to-vienna",
    },
  },
};

export default function MovingToViennaPage() {
  const faqItems = [
    {
      question: "How far is Slovakia from Vienna?",
      answer:
        "Bratislava, Slovakia's capital, is just 60 km from Vienna — about a 45-60 minute drive. This makes Vienna one of the easiest and most affordable international moves from Slovakia.",
    },
    {
      question: "Are there customs requirements when moving from Slovakia to Vienna?",
      answer:
        "No — both Slovakia and Austria are EU member states. There are no customs formalities for moving personal household goods between the two countries. We handle all standard transport documentation.",
    },
    {
      question: "How quickly can you move my belongings to Vienna?",
      answer:
        "Thanks to the short distance, we can often arrange same-day or next-day collection and delivery from anywhere in Slovakia to Vienna. Contact us and we'll confirm the earliest available slot.",
    },
    {
      question: "Do you deliver to all Vienna districts?",
      answer:
        "Yes, we deliver throughout all 23 Vienna districts — from the 1st district (Innere Stadt) to outer areas like Floridsdorf, Donaustadt, Liesing, and Favoriten.",
    },
    {
      question: "Do you also offer packing and furniture assembly in Vienna?",
      answer:
        "Yes. Our team can pack your belongings at your Slovak address, transport them, and reassemble your furniture at your new Vienna home — all in one visit.",
    },
  ];

  const featuresData = {
    title: "Moving to Vienna — Slovakia's Closest International Destination",
    description:
      "Vienna is Slovakia's most popular international moving destination. Our team handles everything — from packing in Slovakia to delivery in Vienna.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Same-Day Service Available",
        description:
          "The 60 km between Bratislava and Vienna means we can often deliver the same day or next day after collection.",
        link: "/en/moving-to-vienna",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All 23 Vienna Districts",
        description:
          "We deliver to every Vienna district — city centre to outer residential areas — with no additional zone charges.",
        link: "/en/moving-to-vienna",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description:
          "We professionally pack and protect all your items so they arrive safely at your new Vienna address.",
        link: "/en/moving-to-vienna",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Disassembly & Assembly",
        description:
          "We disassemble furniture at your Slovak home and fully reassemble it in Vienna.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Fully Insured Transport",
        description:
          "All your belongings are insured throughout the journey to Vienna.",
        link: "/en/moving-to-vienna",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs Hassle",
        description:
          "EU-to-EU move — no customs declarations required. A smooth, quick relocation.",
        link: "/en/moving-to-vienna",
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
          title="Moving to Vienna from Slovakia"
          description="Relocating from Slovakia to Vienna? With Bratislava just 60 km away, this is one of Europe's quickest and most affordable international moves. Sofoservis provides professional door-to-door removals from anywhere in Slovakia to all Vienna districts — often same-day."
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
          title="Moving to Vienna from Slovakia"
          description="Relocating from Slovakia to Vienna? With Bratislava just 60 km away, this is one of Europe's quickest and most affordable international moves. Sofoservis provides professional door-to-door removals from anywhere in Slovakia to all Vienna districts — often same-day."
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
      <div><GoogleReviews title="Trusted for Moves to Vienna" /></div>
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
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Customers Who Moved to Vienna" /></div>
      <div>
        <FAQ
          title="FAQ — Moving to Vienna from Slovakia"
          subtitle="Common questions about relocating to Vienna"
          items={faqItems}
          callToActionText="Moving to Vienna? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to Vienna?"
          description="Get in touch for a fast, free quote. We can often arrange your Slovakia-to-Vienna move within 24 hours."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving from Slovakia to Austria", description: "Full country-to-country coverage.", href: "/en/moving-from-slovakia-to-austria", icon: "/icons/globe_icon.svg" },
          { title: "Moving Bratislava to Vienna", description: "City-to-city Bratislava–Vienna route.", href: "/en/moving-to-vienna", icon: "/icons/truck_icon.svg" },
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
