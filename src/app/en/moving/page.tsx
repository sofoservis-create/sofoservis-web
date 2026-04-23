import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import LocationMap from "@/components/sections/LocationMap";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";

const movingLocations = [
  { name: "Bratislava", href: "/en/moving-bratislava" },
  { name: "Nitra", href: "/en/moving-nitra" },
  { name: "Trnava", href: "/en/moving-trnava" },
  { name: "Pezinok", href: "/en/moving-pezinok" },
  { name: "Galanta", href: "/en/moving-galanta" },
  { name: "Levice", href: "/en/moving-levice" },
  { name: "Piešťany", href: "/en/moving-piestany" },
  { name: "Senec", href: "/en/moving-senec" },
  { name: "Senica", href: "/en/moving-senica" },
  { name: "Stupava", href: "/en/moving-stupava" },
  { name: "Komárno", href: "/en/moving-komarno" },
  { name: "Malacky", href: "/en/moving-malacky" },
  { name: "Šamorín", href: "/en/moving-samorin" },
  { name: "Hlohovec", href: "/en/moving-hlohovec" },
];

export const metadata = {
  title: "Moving Services - Professional & Affordable | Sofoservis",
  description:
    "Professional moving services for apartments, houses, offices and international relocations from €25/hr. Free site inspection. Fast, reliable.",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/moving",
    languages: {
      sk: "https://www.sofoservis.sk/stahovanie",
      en: "https://www.sofoservis.sk/en/moving",
      "x-default": "https://www.sofoservis.sk/en/moving",
    },
  },
  keywords:
    "moving services, professional movers, apartment moving, house moving, office moving, international moving, piano moving, safe moving, heavy item moving",
  openGraph: {
    title: "Moving Services - Professional & Affordable | Sofoservis",
    description:
      "Professional moving services for apartments, houses, offices and international relocations from €25/hr. Free inspection. Fast, reliable.",
    url: "https://www.sofoservis.sk/en/moving",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

const faqSchemaItems = [
  {
    question: "How much does moving cost?",
    answer:
      "The hourly rate starts from €25/hr for 2 workers. For a 2-bedroom apartment in Bratislava the typical price is €200–€350. The final cost depends on distance, floor level, volume of belongings and whether furniture disassembly is needed.",
  },
  {
    question: "Do you offer weekend moving services?",
    answer:
      "Yes, we provide our services 6 days a week except Sunday with no additional surcharge for Saturdays.",
  },
  {
    question: "Do you handle international moves?",
    answer:
      "Yes, we provide international moving services for households and businesses throughout Europe, including all necessary paperwork and logistics.",
  },
];

export default function MovingPage() {
  const featuresData = {
    title: "All Moving Services in One Place",
    description:
      "Complete solutions for every type of move — from a small apartment to a full international relocation.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Apartment & House Moving",
        description:
          "We move apartments and family homes across Slovakia. We handle packing, furniture disassembly, transport, and reassembly at your new place.",
        link: "/en/apartment-moving",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Office & Business Moving",
        description:
          "Corporate relocations carried out overnight or on weekends — minimising downtime and disruption to your business.",
        link: "/en/office-moving",
      },
      {
        image: "/icons/globe_icon.svg",
        title: "International Moving",
        description:
          "Moving households or businesses abroad or from abroad. Full-service solution including documentation and safe long-distance transport.",
        link: "/en/international-moving-services",
      },
      {
        image: "/icons/crane_icon.svg",
        title: "Moving Heavy Loads",
        description:
          "Professional handling of heavy and oversized items. We use specialist equipment for safe and damage-free transport.",
        link: "/en/moving-heavy-loads",
      },
      {
        image: "/icons/sofa_icon.svg",
        title: "Piano Moving",
        description:
          "Specialist techniques and experienced staff for the safe relocation of upright and grand pianos without any risk of damage.",
        link: "/en/piano-moving",
      },
      {
        image: "/icons/safe_icon.svg",
        title: "Safe & Vault Moving",
        description:
          "Secure relocation of safes and vaults of any size. We have the equipment and expertise to move them safely.",
        link: "/en/safe-moving",
      },
      {
        image: "/icons/heavy_machinery_icon.svg",
        title: "Machinery & Equipment Moving",
        description:
          "Relocation of industrial machinery, production equipment and technology. Full-service solution with expert handling.",
        link: "/en/moving-heavy-loads",
      },
      {
        image: "/icons/wrench_icon.svg",
        title: "Furniture Moving & Removal",
        description:
          "Professional disassembly before the move and reassembly at the destination. Fast and without damage to your furniture.",
        link: "/en/furniture-moving-removal",
      },
    ],
  };

  const heroTitle = "Moving Services";
  const heroDescription =
    "Professional moving services for households and businesses. We move apartments, houses, offices, pianos, safes, machinery and heavy loads — quickly, safely and at fair prices.";
  const heroFormTitle = "Get a free price quote";
  const heroFormSubtitle = "Fill out the form for a no-obligation estimate";

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
          title={heroTitle}
          description={heroDescription}
          formTitle={heroFormTitle}
          formSubtitle={heroFormSubtitle}
          benefits={[]}
          ratingText="3500+ satisfied customers"
          lang="en"
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          desktopMascotScaleMultiplier={1.03}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title={heroTitle}
          description={heroDescription}
          formTitle={heroFormTitle}
          formSubtitle={heroFormSubtitle}
          backgroundImage="/images/stahovanie-gauc.avif"
          benefits={[]}
          ratingText="3500+ satisfied customers"
          badgeText="Services available 6 days a week"
          lang="en"
          phoneCTAText="Call us now"
          phoneNumber="0951 735 130"
          hoursText="6 days a week 8:00-17:00"
          showMascot
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          mobileMascotSrc="/images/mascot/mascot-holding-boxes.svg"
          mobileMascotOffsetY={-44}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>

      <div>
        <Clients />
      </div>

      <div>
        <GoogleReviews title="Join our satisfied customers" />
      </div>

      <HowItWorks lang="en" />

      <ServicePricing filter={["moving", "clearance", "international-moving"]} lang="en" />

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

      <div className="md:mb-[-100px]">
        <LocationMap
          title="Moving Services Across Slovakia"
          description="We provide professional moving services in the following cities and regions."
          locations={movingLocations}
          additionalText="We provide professional moving services with full responsibility for your belongings."
          supporText="We move in all regions:"
          callToActionText="We move in your area too — get a quote"
        />
      </div>

      <div>
        <GoogleReviews showReviewsShowcase={false} title="What our customers say about us" />
      </div>

      <div>
        <FAQ
          title="Frequently Asked Questions About Moving"
          subtitle="Answers to the most common questions about our moving services"
          items={[
            {
              question: "How much does moving an apartment or house cost?",
              answer:
                "The hourly rate starts from €25/hr for 2 workers. For a 2-bedroom apartment in Bratislava the typical price is €200–€350, for a 3–4 bedroom apartment €350–€600. Family houses are priced individually. We always provide a clear, fixed quote upfront.",
            },
            {
              question: "How long does a move take?",
              answer:
                "It depends on the size and volume of belongings. A 2-bedroom apartment usually takes 3–5 hours, a 3-bedroom apartment 4–6 hours. You will receive a more accurate estimate when you book.",
            },
            {
              question: "Do you offer weekend moving services?",
              answer:
                "Yes, we provide our services 6 days a week except Sunday with no additional surcharge for Saturdays.",
            },
            {
              question: "Do you provide packing materials and packing help?",
              answer:
                "Yes, upon request we supply all necessary packing materials such as cardboard boxes, bubble wrap, protective blankets and tape. We can also pack items for you.",
            },
            {
              question: "Do you handle international moves?",
              answer:
                "Yes, we provide international moving services for households and businesses throughout Europe, including all necessary logistics and paperwork.",
            },
          ]}
          callToActionText="Questions about your move? Get in touch"
        />
      </div>

      <div>
        <CTA
          title="Ready for a stress-free move?"
          description="Let our professional team handle everything from packing to unpacking. Contact us today for a free, no-obligation quote."
          buttonText="Get a free quote"
        />
      </div>

      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />

      <RelatedServices
        title="Related Services"
        services={[
          { title: "Home Clearance", description: "Complete clearance — we remove everything you no longer need.", href: "/en/clearance", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Furniture Assembly", description: "Expert assembly and disassembly of all furniture types.", href: "/en/furniture-assembly", icon: "/icons/wrench_icon.svg" },
          { title: "Office Moving", description: "Efficient office relocation with minimal downtime.", href: "/en/office-moving", icon: "/icons/briefcase_icon.svg" },
          { title: "Handyman Services", description: "Professional repairs and installations for your home.", href: "/en/handyman-services", icon: "/icons/repair_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqSchemaItems} />
    </main>
  );
}
