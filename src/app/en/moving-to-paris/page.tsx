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
  title: "Moving to Paris — International Removals | Sofoservis",
  description:
    "Moving to Paris from Slovakia? Approximately 1,300 km from Bratislava — regular routes with 4-5 day delivery.",
  keywords:
    "moving to paris, moving to paris from slovakia, moving to paris from bratislava, international moving paris, relocation paris france",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-paris",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/pariz",
      en: "https://www.sofoservis.sk/en/moving-to-paris",
      "x-default": "https://www.sofoservis.sk/en/moving-to-paris",
    },
  },
};

export default function MovingToParis() {
  const faqItems = [
    {
      question: "Are there customs requirements for moving from Slovakia to Paris?",
      answer:
        "No — Slovakia and France are both EU members. No customs formalities apply to personal household goods between the two countries.",
    },
    {
      question: "How long does delivery from Slovakia to Paris take?",
      answer:
        "We typically deliver from Slovakia to Paris within 4-5 business days using our regular routes.",
    },
    {
      question: "Do you deliver to all Paris arrondissements?",
      answer:
        "Yes, we deliver to all 20 Paris arrondissements as well as the wider Île-de-France region including suburbs and surrounding towns.",
    },
    {
      question: "Can I use a groupage service for my move to Paris?",
      answer:
        "Yes, groupage is ideal for smaller shipments. We consolidate with other France-bound loads for cost-effective transport.",
    },
    {
      question: "Do you offer furniture assembly in Paris?",
      answer:
        "Yes, furniture disassembly at your Slovak home and reassembly in Paris is available as part of our full-service package.",
    },
  ];

  const featuresData = {
    title: "Moving to Paris — Professionals in Long-Distance Removals",
    description:
      "Paris is a dream destination for many Slovaks. Our regular Slovakia–France routes make the move reliable and affordable.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "4-5 Day Delivery to Paris",
        description:
          "Regular departures ensure reliable delivery from Slovakia to Paris within 4-5 business days.",
        link: "/en/moving-to-paris",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Paris Arrondissements",
        description:
          "We deliver to all 20 arrondissements and the wider Île-de-France region.",
        link: "/en/moving-to-paris",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description:
          "Expert packing for safe long-distance delivery to Paris.",
        link: "/en/moving-to-paris",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "Disassembly in Slovakia, full reassembly in Paris.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description:
          "All items are insured throughout the journey to Paris.",
        link: "/en/moving-to-paris",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs",
        description:
          "EU-to-EU move — no customs paperwork required.",
        link: "/en/moving-to-paris",
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
          title="Moving to Paris from Slovakia"
          description="Relocating from Slovakia to Paris? Sofoservis provides professional door-to-door removals to the French capital. Regular routes, 4-5 day delivery, and a fully managed experience for all 20 Paris arrondissements."
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
          title="Moving to Paris from Slovakia"
          description="Relocating from Slovakia to Paris? Sofoservis provides professional door-to-door removals to the French capital. Regular routes, 4-5 day delivery, and a fully managed experience for all 20 Paris arrondissements."
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
      <div><GoogleReviews title="Trusted for Moves to Paris" /></div>
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
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Customers Who Moved to Paris" /></div>
      <div>
        <FAQ
          title="FAQ — Moving to Paris from Slovakia"
          subtitle="Common questions about relocating to Paris"
          items={faqItems}
          callToActionText="Moving to Paris? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to Paris?"
          description="Get a free quote today. We deliver from Slovakia to Paris in 4-5 business days."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving from Slovakia to France", description: "Full Slovakia-to-France coverage.", href: "/en/moving-to-france", icon: "/icons/globe_icon.svg" },
          { title: "Moving Bratislava to Paris", description: "Dedicated Bratislava–Paris route page.", href: "/en/moving-to-paris", icon: "/icons/truck_icon.svg" },
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
