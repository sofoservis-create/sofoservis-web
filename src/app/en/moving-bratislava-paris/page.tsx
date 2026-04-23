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
  title: "Moving Bratislava to Paris — International Removals | Sofoservis",
  description:
    "Professional moving from Bratislava to Paris. Approximately 1,300 km — regular routes with 4-5 day delivery.",
  keywords:
    "moving bratislava paris, moving from bratislava to paris, bratislava to paris removals, moving to paris from slovakia, stahovanie bratislava paríž",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-bratislava-paris",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/pariz",
      en: "https://www.sofoservis.sk/en/moving-bratislava-paris",
      "x-default": "https://www.sofoservis.sk/en/moving-bratislava-paris",
    },
  },
};

export default function MovingBratislavaParis() {
  const faqItems = [
    {
      question: "How far is it from Bratislava to Paris?",
      answer:
        "The road distance from Bratislava to Paris is approximately 1,300 km. The journey by truck takes around 12-13 hours.",
    },
    {
      question: "How long does the Bratislava to Paris move take?",
      answer:
        "We typically deliver from Bratislava to Paris within 4-5 business days using our regular scheduled routes.",
    },
    {
      question: "Are there customs requirements for moving from Bratislava to Paris?",
      answer:
        "No — both Slovakia and France are EU members. No customs formalities apply to personal household goods on this route.",
    },
    {
      question: "Do you deliver to all Paris arrondissements?",
      answer:
        "Yes, we deliver throughout Paris — all 20 arrondissements and the wider Île-de-France region including suburbs.",
    },
    {
      question: "Is a groupage service available for the Bratislava–Paris route?",
      answer:
        "Yes, groupage is available for smaller shipments. We consolidate your items with other France-bound loads for cost efficiency.",
    },
  ];

  const featuresData = {
    title: "Bratislava–Paris: Long-Distance Removals to the French Capital",
    description:
      "Paris is a popular destination from Bratislava. Our regular routes ensure reliable 4-5 day delivery to all Paris arrondissements.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "4-5 Day Delivery to Paris",
        description:
          "Regular departures from Bratislava ensure reliable delivery to Paris within 4-5 business days.",
        link: "/en/moving-bratislava-paris",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Paris Arrondissements",
        description:
          "We deliver to all 20 Paris arrondissements and the wider Île-de-France region.",
        link: "/en/moving-bratislava-paris",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Professional Packing",
        description:
          "Expert packing for safe delivery on this long-distance route.",
        link: "/en/moving-bratislava-paris",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "Disassembly in Bratislava, reassembly in Paris.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description:
          "All items are insured throughout the journey from Bratislava to Paris.",
        link: "/en/moving-bratislava-paris",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs",
        description:
          "EU-to-EU move — no customs paperwork required.",
        link: "/en/moving-bratislava-paris",
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
          title="Moving from Bratislava to Paris"
          description="Moving from Bratislava to Paris? Sofoservis provides professional door-to-door removals to the French capital. Regular routes, 4-5 day delivery, and a fully managed moving experience for all 20 Paris arrondissements."
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
          title="Moving from Bratislava to Paris"
          description="Moving from Bratislava to Paris? Sofoservis provides professional door-to-door removals to the French capital. Regular routes, 4-5 day delivery, and a fully managed moving experience for all 20 Paris arrondissements."
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
        <GoogleReviews title="Trusted for Bratislava–Paris Moves" />
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
          title="Reviews from Bratislava–Paris Customers"
        />
      </div>

      <div>
        <FAQ
          title="FAQ — Moving from Bratislava to Paris"
          subtitle="Common questions about the Bratislava–Paris moving route"
          items={faqItems}
          callToActionText="Moving from Bratislava to Paris? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Moving from Bratislava to Paris?"
          description="Get a free quote today. We deliver from Bratislava to Paris in 4-5 business days."
          buttonText="Request a Quote"
        />
      </div>

      <RelatedServices
        title="Related Services"
        services={[
          {
            title: "Moving from Slovakia to France",
            description: "Full country-to-country coverage for Slovakia to France.",
            href: "/en/moving-from-slovakia-to-france",
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
