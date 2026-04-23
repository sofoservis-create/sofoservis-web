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
  title: "Moving to Berlin — International Removals | Sofoservis",
  description:
    "Moving to Berlin from Slovakia? Approximately 690 km from Bratislava — 2-3 day delivery. Professional door-to-door removals to all Berlin districts.",
  keywords:
    "moving to berlin, moving to berlin from slovakia, moving to berlin from bratislava, international moving berlin, relocation berlin",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-berlin",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/berlin",
      en: "https://www.sofoservis.sk/en/moving-to-berlin",
      "x-default": "https://www.sofoservis.sk/en/moving-to-berlin",
    },
  },
};

export default function MovingToBerlinPage() {
  const faqItems = [
    {
      question: "How far is Berlin from Slovakia?",
      answer:
        "Berlin is approximately 690 km from Bratislava by road — about a 6-7 hour journey by truck.",
    },
    {
      question: "Do I need customs documents to move from Slovakia to Berlin?",
      answer:
        "No — Slovakia and Germany are both EU members. No customs formalities apply to personal household goods between the two countries.",
    },
    {
      question: "How long does delivery from Slovakia to Berlin take?",
      answer:
        "We typically deliver from Slovakia to Berlin within 2-3 business days using our regular scheduled routes.",
    },
    {
      question: "Do you deliver to all Berlin boroughs?",
      answer:
        "Yes, we deliver to all 12 Berlin boroughs — Mitte, Prenzlauer Berg, Kreuzberg, Charlottenburg, Neukölln, Schöneberg, Pankow, Spandau, Steglitz, Treptow, Marzahn, Lichtenberg, and all other areas.",
    },
    {
      question: "Is a groupage service available for the Slovakia–Berlin route?",
      answer:
        "Yes, groupage is available for smaller shipments. We consolidate with other Berlin-bound loads for cost-effective transport.",
    },
  ];

  const featuresData = {
    title: "Moving to Berlin — Slovakia to Germany's Capital",
    description:
      "Berlin attracts thousands of new residents every year. Our regular Slovakia–Berlin routes ensure reliable 2-3 day delivery.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "2-3 Day Delivery to Berlin",
        description:
          "Regular scheduled departures ensure consistent 2-3 day delivery from Slovakia to Berlin.",
        link: "/en/moving-to-berlin",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Berlin Boroughs Covered",
        description:
          "We deliver to all 12 Berlin boroughs — city centre to outer districts.",
        link: "/en/moving-to-berlin",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description:
          "Expert packing for safe delivery on this popular long-distance route.",
        link: "/en/moving-to-berlin",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "Disassembly in Slovakia, full reassembly in Berlin.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description:
          "All items are insured throughout the journey to Berlin.",
        link: "/en/moving-to-berlin",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs",
        description:
          "EU-to-EU move — no customs paperwork required.",
        link: "/en/moving-to-berlin",
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
          title="Moving to Berlin from Slovakia"
          description="Relocating from Slovakia to Berlin? Sofoservis provides professional door-to-door removals from anywhere in Slovakia to Germany's capital. Regular routes, 2-3 day delivery, and a completely managed moving experience."
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
          title="Moving to Berlin from Slovakia"
          description="Relocating from Slovakia to Berlin? Sofoservis provides professional door-to-door removals from anywhere in Slovakia to Germany's capital. Regular routes, 2-3 day delivery, and a completely managed moving experience."
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
      <div><GoogleReviews title="Trusted for Moves to Berlin" /></div>
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
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Customers Who Moved to Berlin" /></div>
      <div>
        <FAQ
          title="FAQ — Moving to Berlin from Slovakia"
          subtitle="Common questions about relocating to Berlin"
          items={faqItems}
          callToActionText="Moving to Berlin? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to Berlin?"
          description="Get a free quote today. We deliver from Slovakia to Berlin in 2-3 business days."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving from Slovakia to Germany", description: "Full Slovakia-to-Germany coverage.", href: "/en/moving-from-slovakia-to-germany", icon: "/icons/globe_icon.svg" },
          { title: "Moving Bratislava to Berlin", description: "Dedicated Bratislava–Berlin route page.", href: "/en/moving-bratislava-berlin", icon: "/icons/truck_icon.svg" },
          { title: "Moving to Munich", description: "Also moving to Munich?", href: "/en/moving-to-munich", icon: "/icons/globe_icon.svg" },
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
