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
  title: "Moving to Munich — International Removals | Sofoservis",
  description:
    "Moving to Munich from Slovakia? Approximately 360 km from Bratislava — 1-2 day delivery. Professional door-to-door removals with packing and furniture.",
  keywords:
    "moving to munich, moving to munich from slovakia, moving to munich from bratislava, international moving munich, relocation munich",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-munich",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/mnichov",
      en: "https://www.sofoservis.sk/en/moving-to-munich",
      "x-default": "https://www.sofoservis.sk/en/moving-to-munich",
    },
  },
};

export default function MovingToMunichPage() {
  const faqItems = [
    {
      question: "How far is Munich from Slovakia?",
      answer:
        "Munich is approximately 360 km from Bratislava by road. The journey takes around 3.5-4.5 hours by truck, making it one of the closer German cities for Slovaks moving to Germany.",
    },
    {
      question: "Are there customs requirements for moving from Slovakia to Munich?",
      answer:
        "No — Slovakia and Germany are both EU members. No customs formalities apply to personal household goods between the two countries.",
    },
    {
      question: "How long does delivery to Munich take?",
      answer:
        "From Slovakia to Munich we typically deliver within 1-2 business days using our regular routes.",
    },
    {
      question: "Do you cover all Munich districts?",
      answer:
        "Yes, we deliver throughout Munich — all city districts including Schwabing, Maxvorstadt, Haidhausen, Neuhausen, Bogenhausen, Sendling, and outlying suburbs.",
    },
    {
      question: "Can I send just a few boxes or items from Slovakia to Munich?",
      answer:
        "Yes, our groupage (part-load) service is ideal for smaller quantities. We consolidate with other Munich-bound shipments to keep costs affordable.",
    },
  ];

  const featuresData = {
    title: "Moving to Munich — Slovakia's Gateway to Bavaria",
    description:
      "Munich is one of the most popular German cities for Slovaks relocating abroad. Our regular routes ensure fast, reliable delivery.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "1-2 Day Delivery to Munich",
        description:
          "Regular departures from Slovakia ensure delivery to Munich within 1-2 business days.",
        link: "/en/moving-to-munich",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Munich Areas Covered",
        description:
          "We deliver to all Munich districts and the wider metropolitan area.",
        link: "/en/moving-to-munich",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description:
          "Professional packing using quality materials for safe delivery.",
        link: "/en/moving-to-munich",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "Disassembly in Slovakia, full reassembly in Munich.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description:
          "All belongings are insured throughout the journey to Munich.",
        link: "/en/moving-to-munich",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs",
        description:
          "EU-to-EU move — no customs declarations required.",
        link: "/en/moving-to-munich",
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
          title="Moving to Munich from Slovakia"
          description="Relocating from Slovakia to Munich? At just 360 km from Bratislava, Munich is one of the most accessible German cities. Sofoservis provides professional door-to-door removals from anywhere in Slovakia to Munich — with 1-2 day delivery."
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
          title="Moving to Munich from Slovakia"
          description="Relocating from Slovakia to Munich? At just 360 km from Bratislava, Munich is one of the most accessible German cities. Sofoservis provides professional door-to-door removals from anywhere in Slovakia to Munich — with 1-2 day delivery."
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
      <div><GoogleReviews title="Trusted for Moves to Munich" /></div>
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
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Customers Who Moved to Munich" /></div>
      <div>
        <FAQ
          title="FAQ — Moving to Munich from Slovakia"
          subtitle="Common questions about relocating to Munich from Slovakia"
          items={faqItems}
          callToActionText="Moving to Munich? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to Munich?"
          description="Get a free quote today. We deliver from Slovakia to Munich in 1-2 business days."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving from Slovakia to Germany", description: "Full Slovakia-to-Germany coverage.", href: "/en/moving-from-slovakia-to-germany", icon: "/icons/globe_icon.svg" },
          { title: "Moving Bratislava to Munich", description: "Dedicated Bratislava–Munich route page.", href: "/en/moving-bratislava-munich", icon: "/icons/truck_icon.svg" },
          { title: "Moving to Berlin", description: "Relocating to Berlin from Slovakia.", href: "/en/moving-to-berlin", icon: "/icons/globe_icon.svg" },
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
