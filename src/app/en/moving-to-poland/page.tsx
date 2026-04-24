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
  title: "Moving to Poland — International Removals | Sofoservis",
  description:
    "Moving to Poland from Slovakia? Kraków is only 400 km from Bratislava — 1-2 day delivery. Door-to-door removals to Warsaw, Kraków, Gdańsk and Wrocław.",
  keywords:
    "moving to poland, moving to poland from slovakia, moving to poland from bratislava, international moving poland, relocation warsaw krakow",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-poland",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/polsko",
      en: "https://www.sofoservis.sk/en/moving-to-poland",
      "x-default": "https://www.sofoservis.sk/en/moving-to-poland",
    },
  },
};

export default function MovingToPolandPage() {
  const faqItems = [
    {
      question: "Are there customs requirements for moving from Slovakia to Poland?",
      answer: "No — both Slovakia and Poland are EU members. No customs formalities apply to personal household goods on this route.",
    },
    {
      question: "How long does delivery from Slovakia to Poland take?",
      answer: "Transit times vary: Kraków 1 day, Warsaw 1-2 days, Gdańsk 2 days. We use regular scheduled routes for consistent delivery.",
    },
    {
      question: "Do you deliver to all Polish cities?",
      answer: "Yes — we deliver throughout Poland including Warsaw, Kraków, Gdańsk, Wrocław, Poznań, Łódź, Szczecin, and all other cities and towns.",
    },
    {
      question: "Can I move from Poland back to Slovakia?",
      answer: "Yes — we operate in both directions. Contact us for a free quote for your return move to Slovakia.",
    },
    {
      question: "Is furniture assembly available in Poland?",
      answer: "Yes, furniture disassembly at your Slovak home and reassembly in Poland is available as part of our full-service package.",
    },
  ];

  const featuresData = {
    title: "Moving to Poland — Reliable International Service",
    description:
      "Professional door-to-door removals from Slovakia to Poland. 400 km to Kraków — 1-2 days.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "1-2 Day Delivery to Poland",
        description: "Kraków in 1 day, Warsaw in 1-2 days from Slovakia.",
        link: "/en/moving-to-poland",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Polish Cities",
        description: "Warsaw, Kraków, Gdańsk, Wrocław, Poznań, and all other Polish destinations.",
        link: "/en/moving-to-poland",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs — EU to EU",
        description: "Poland and Slovakia are both EU members — seamless border crossing.",
        link: "/en/moving-to-poland",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description: "Professional packing and careful handling for all your belongings.",
        link: "/en/moving-to-poland",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description: "All items are insured throughout the journey to Poland.",
        link: "/en/moving-to-poland",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description: "Disassembly in Slovakia, full reassembly in Poland.",
        link: "/en/furniture-assembly",
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
          title="Moving to Poland from Slovakia"
          description="Relocating from Slovakia to Poland? Sofoservis provides professional door-to-door removals to Warsaw, Kraków, Gdańsk, Wrocław, Poznań, and all Polish destinations."
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
          title="Moving to Poland from Slovakia"
          description="Relocating from Slovakia to Poland? Sofoservis provides professional door-to-door removals to Warsaw, Kraków, Gdańsk, Wrocław, Poznań, and all Polish destinations."
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
      <div><GoogleReviews title="Trusted for Moves to Poland" /></div>
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
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Our Clients" /></div>
      <div>
        <FAQ
          title="FAQ — Moving to Poland from Slovakia"
          subtitle="Common questions about relocating to Poland"
          items={faqItems}
          callToActionText="Moving to Poland? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to Poland?"
          description="Get a free quote today. We deliver from Slovakia to Kraków in 1 day, Warsaw in 1-2 days."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving to Warsaw", description: "Dedicated Warsaw route page.", href: "/en/moving-to-warsaw", icon: "/icons/globe_icon.svg" },
          { title: "Moving Bratislava to Warsaw", description: "Bratislava–Warsaw moving route.", href: "/en/moving-to-warsaw", icon: "/icons/truck_icon.svg" },
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
