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
  title: "Moving to Germany — International Removals | Sofoservis",
  description:
    "Moving to Germany from Slovakia? Munich is only 620 km from Bratislava. Door-to-door removals to Munich, Berlin, Frankfurt, and Hamburg.",
  keywords:
    "moving to germany, moving to germany from slovakia, moving to germany from bratislava, international moving germany, relocation munich berlin frankfurt",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving-to-germany",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie/nemecko",
      en: "https://www.sofoservis.sk/en/moving-to-germany",
      "x-default": "https://www.sofoservis.sk/en/moving-to-germany",
    },
  },
};

export default function MovingToGermanyPage() {
  const faqItems = [
    {
      question: "Are there customs requirements for moving from Slovakia to Germany?",
      answer: "No — both Slovakia and Germany are EU members. No customs formalities apply to personal household goods on this route.",
    },
    {
      question: "How long does delivery from Slovakia to Germany take?",
      answer: "Transit times vary by destination: Munich 2 days, Berlin 2-3 days, Frankfurt 2-3 days, Hamburg 3 days. Contact us for a specific estimate for your destination.",
    },
    {
      question: "Do you deliver to all German cities?",
      answer: "Yes — we deliver throughout Germany. Munich, Berlin, Frankfurt, Hamburg, Cologne, Stuttgart, Düsseldorf, Dresden, Leipzig, and all other cities and towns.",
    },
    {
      question: "Can I move from Germany back to Slovakia?",
      answer: "Yes — we operate in both directions. If you are returning from Germany to Slovakia, contact us for a free quote.",
    },
    {
      question: "Is furniture assembly available in Germany?",
      answer: "Yes, furniture disassembly at your Slovak home and reassembly in Germany is available as part of our full-service package.",
    },
  ];

  const featuresData = {
    title: "Moving to Germany — Reliable International Service",
    description:
      "Professional door-to-door removals from Slovakia to Germany. 620 km to Munich — 2-3 days.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "2-3 Day Delivery to Germany",
        description: "Regular routes: Munich 2 days, Berlin 2-3 days, Frankfurt 2-3 days, Hamburg 3 days.",
        link: "/en/moving-to-germany",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "All German Cities",
        description: "Munich, Berlin, Frankfurt, Hamburg, Cologne, Stuttgart, and all other German destinations.",
        link: "/en/moving-to-germany",
      },
      {
        image: "/icons/document_icon.svg",
        title: "No Customs — EU to EU",
        description: "Germany and Slovakia are both EU members — no customs paperwork required.",
        link: "/en/moving-to-germany",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Full Packing Service",
        description: "Expert packing for safe delivery on all Slovakia–Germany routes.",
        link: "/en/moving-to-germany",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insured Transport",
        description: "All belongings are insured throughout the journey to Germany.",
        link: "/en/moving-to-germany",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Assembly",
        description: "Disassembly in Slovakia, full reassembly in Germany.",
        link: "/en/furniture-assembly",
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
          title="Moving to Germany from Slovakia"
          description="Relocating from Slovakia to Germany? Sofoservis operates regular routes to Munich (620 km), Berlin (900 km), Frankfurt (900 km), Hamburg (1,100 km), and all other German cities."
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
          title="Moving to Germany from Slovakia"
          description="Relocating from Slovakia to Germany? Sofoservis operates regular routes to Munich (620 km), Berlin (900 km), Frankfurt (900 km), Hamburg (1,100 km), and all other German cities."
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
      <div><GoogleReviews title="Trusted for Moves to Germany" /></div>
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
      <div><GoogleReviews showReviewsShowcase={false} title="Reviews from Customers Who Moved to Germany" /></div>
      <div>
        <FAQ
          title="FAQ — Moving to Germany from Slovakia"
          subtitle="Common questions about relocating to Germany"
          items={faqItems}
          callToActionText="Moving to Germany? Get a free quote"
        />
      </div>
      <div>
        <CTA
          title="Ready to Move to Germany?"
          description="Get a free quote today. We deliver from Slovakia to Munich in 2 days, Berlin in 2-3 days."
          buttonText="Request a Quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving to Munich", description: "Dedicated Munich route page.", href: "/en/moving-to-munich", icon: "/icons/globe_icon.svg" },
          { title: "Moving to Berlin", description: "Dedicated Berlin route page.", href: "/en/moving-to-berlin", icon: "/icons/globe_icon.svg" },
          { title: "Moving Bratislava to Munich", description: "Bratislava–Munich moving route.", href: "/en/moving-bratislava-munich", icon: "/icons/truck_icon.svg" },
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
