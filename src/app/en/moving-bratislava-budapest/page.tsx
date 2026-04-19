import React from "react";
import Hero from "@/components/sections/Hero";
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
  title: "Moving Bratislava to Budapest — International | Sofoservis",
  description:
    "Professional moving from Bratislava to Budapest. Only 200 km apart — fast, affordable door-to-door removals with packing service and furniture assembly.",
  keywords:
    "moving bratislava budapest, moving from bratislava to budapest, bratislava to budapest removals, moving to budapest from slovakia, stahovanie bratislava budapešť",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-bratislava-budapest",
    languages: {
      en: "https://www.sofoservis.sk/en/moving-bratislava-budapest",
      "x-default": "https://www.sofoservis.sk/en/moving-bratislava-budapest",
    },
  },
};

export default function MovingBratislavaBudapestPage() {
  const faqItems = [
    {
      question: "How far is it from Bratislava to Budapest?",
      answer:
        "Bratislava and Budapest are approximately 200 km apart by road. The journey takes around 2-2.5 hours by truck.",
    },
    {
      question: "How quickly can you move my belongings from Bratislava to Budapest?",
      answer:
        "For moves between Bratislava and Budapest, we can typically arrange collection and delivery within 1 day. Same-day service is possible for smaller loads.",
    },
    {
      question: "Are there customs requirements on the Bratislava–Budapest route?",
      answer:
        "No — both Slovakia and Hungary are EU members. No customs formalities apply to personal household goods. We handle all standard transport documentation.",
    },
    {
      question: "Do you deliver to all areas of Budapest?",
      answer:
        "Yes, we deliver to all Budapest districts (kerületek) — from the city centre (District V) to outer residential areas like Kispest, Zugló, or Óbuda.",
    },
    {
      question: "Do you offer packing materials or a full packing service?",
      answer:
        "Yes, we offer both. Our team can professionally pack your entire household, or we can supply packing materials for self-packing.",
    },
  ];

  const featuresData = {
    title: "Bratislava–Budapest: Fast Cross-Border Removals",
    description:
      "Just 200 km apart, Bratislava and Budapest are easily connected. We provide fast, professional removals between these two capitals.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Fast 1-Day Delivery",
        description:
          "We typically collect in Bratislava and deliver in Budapest within the same day or next business day.",
        link: "/en/moving-bratislava-budapest",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All Budapest Districts",
        description:
          "We deliver to all Budapest districts, from the centre to the outer boroughs.",
        link: "/en/moving-bratislava-budapest",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description:
          "Professional packing using quality materials for safe delivery.",
        link: "/en/moving-bratislava-budapest",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description:
          "Disassembly in Bratislava, reassembly in Budapest.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description:
          "All items are insured for the journey from Bratislava to Budapest.",
        link: "/en/moving-bratislava-budapest",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs",
        description:
          "EU-to-EU move — no customs documentation required.",
        link: "/en/moving-bratislava-budapest",
      },
    ],
  };

  return (
    <main className="bg-white">
      <Hero
        title="Moving from Bratislava to Budapest"
        description="Moving from Bratislava to Budapest? At just 200 km, this is one of the quickest international moves between EU capitals. Sofoservis provides professional door-to-door removals with fast 1-day delivery, packing service, and furniture assembly."
        backgroundImage="/images/stahovanie-gauc.avif"
        formTitle="Get a Free Quote"
        formSubtitle="Fill out the form for a no-obligation estimate"
        badgeText="Services available 6 days a week"
        ratingText="Over 3500+ satisfied customers"
        benefits={[
          "Fast 1-day delivery",
          "Door-to-door service",
          "Fully insured",
        ]}
        phoneCTAText="Call us now"
        phoneNumber="0951 735 130"
        hoursText="6 days a week 8:00-17:00"
        lang="en"
      />

      <div>
        <Clients />
      </div>

      <div>
        <GoogleReviews title="Trusted for Bratislava–Budapest Moves" />
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
          title="Reviews from Bratislava–Budapest Customers"
        />
      </div>

      <div>
        <FAQ
          title="FAQ — Moving from Bratislava to Budapest"
          subtitle="Common questions about the Bratislava–Budapest moving route"
          items={faqItems}
          callToActionText="Moving from Bratislava to Budapest? Get a free quote"
        />
      </div>

      <div>
        <CTA
          title="Moving from Bratislava to Budapest?"
          description="Get a free quote today. We deliver from Bratislava to Budapest in as little as 1 day."
          buttonText="Request a Quote"
        />
      </div>

      <RelatedServices
        title="Related Services"
        services={[
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
            title: "Moving Bratislava to Vienna",
            description: "The popular Bratislava–Vienna route.",
            href: "/en/moving-bratislava-vienna",
            icon: "/icons/truck_icon.svg",
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
