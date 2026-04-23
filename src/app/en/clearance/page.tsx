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

const clearanceLocations = [
  { name: "Bratislava", href: "/en/home-clearance-bratislava" },
  { name: "Nitra", href: "/en/home-clearance-nitra" },
  { name: "Trnava", href: "/en/home-clearance-trnava" },
  { name: "Pezinok", href: "/en/home-clearance-pezinok" },
  { name: "Galanta", href: "/en/home-clearance-galanta" },
  { name: "Levice", href: "/en/home-clearance-levice" },
  { name: "Piešťany", href: "/en/home-clearance-piestany" },
  { name: "Senec", href: "/en/home-clearance-senec" },
  { name: "Senica", href: "/en/home-clearance-senica" },
  { name: "Stupava", href: "/en/home-clearance-stupava" },
  { name: "Komárno", href: "/en/home-clearance-komarno" },
  { name: "Malacky", href: "/en/home-clearance-malacky" },
  { name: "Šamorín", href: "/en/home-clearance-samorin" },
  { name: "Hlohovec", href: "/en/home-clearance-hlohovec" },
];

export const metadata = {
  title: "Clearance Services - Professional, Eco-Friendly | Sofoservis",
  description:
    "Professional clearance services for apartments, houses, offices, basements, cottages, post-renovation and estate clearance. Free inspection.",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/clearance",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie",
      en: "https://www.sofoservis.sk/en/clearance",
      "x-default": "https://www.sofoservis.sk/en/clearance",
    },
  },
  keywords:
    "clearance services, home clearance, house clearance, office clearance, basement clearance, estate clearance, furniture removal, junk removal, post-renovation clearance",
  openGraph: {
    title: "Clearance Services - Professional, Eco-Friendly | Sofoservis",
    description:
      "Professional clearance services for any property — apartments, houses, offices, basements and cottages. Free inspection. Fast, eco-friendly.",
    url: "https://www.sofoservis.sk/en/clearance",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

const faqSchemaItems = [
  {
    question: "How much does a home clearance cost?",
    answer:
      "The cost depends on the size of the property and volume of items. For a 1-bedroom apartment prices start from €200. The hourly rate is from €25/hr. We provide a free site inspection and a no-obligation fixed quote.",
  },
  {
    question: "How long does a clearance take?",
    answer:
      "A standard 2-bedroom apartment is usually cleared in 1 day (4–8 hours). Larger houses or properties with a lot of belongings may require 2–3 days.",
  },
  {
    question: "Do you handle estate clearances?",
    answer:
      "Yes, we specialise in sensitive and discreet estate clearances with maximum empathy and respect for the bereaved family.",
  },
];

export default function ClearancePage() {
  const featuresData = {
    title: "All Clearance Services in One Place",
    description:
      "We clear any type of property — from a simple furniture removal to a complete estate clearance.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Home Clearance",
        description:
          "Complete clearance of apartments and houses including all rooms, basement and attic. We sort, remove and dispose of everything eco-responsibly.",
        link: "/en/home-junk-removal",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Office Clearance",
        description:
          "Efficient clearance of offices, warehouses and commercial premises. We work outside business hours to minimise disruption.",
        link: "/en/office-clearance",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Basement & Garage Clearance",
        description:
          "We specialise in clearing basements, garages and storage rooms. All unwanted items removed and space left clean.",
        link: "/en/basement-garage-junk-removal",
      },
      {
        image: "/icons/garden_icon.svg",
        title: "Cottage Clearance",
        description:
          "Clearance of cottages, garden houses and weekend retreats. Full emptying of the property including the garden.",
        link: "/en/cottage-clearance",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Post-Renovation Clearance",
        description:
          "Removal of construction debris, rubble and packaging materials after renovation. Quick clean-up to get your space ready for finishing work.",
        link: "/en/post-renovation-clearance",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Estate Clearance",
        description:
          "Discreet and empathetic clearance of properties after bereavement. We help sort personal items with maximum sensitivity and respect.",
        link: "/en/estate-clearance-bereavement",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Old Furniture Removal",
        description:
          "Fast removal of old furniture, appliances and unwanted items. We ensure eco-friendly disposal or donation to charity.",
        link: "/en/furniture-removal",
      },
      {
        image: "/icons/landscape_icon.svg",
        title: "Property & Land Clearance",
        description:
          "We clear land and properties of unwanted items, construction waste and vegetation. Ready for your next project.",
        link: "/en/property-land-junk-removal",
      },
    ],
  };

  return (
    <main className="bg-white">
      <link
        rel="preload"
        href="/images/mascot/stary-gauc-nosi-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)"
      />
      <link
        rel="preload"
        href="/images/mascot/stary-gauc-nosi-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)"
      />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title="Clearance Services"
          description="Professional clearance services for any property — apartments, houses, offices, basements, cottages and land. Discreet, eco-friendly, at fair prices. Our team handles everything from sorting to disposal."
          formTitle="Get a free price quote"
          formSubtitle="Fill out the form for a no-obligation estimate"
          backgroundImage="/images/stahovanie-gauc.avif"
          benefits={["Free site inspection", "No hidden fees", "Eco-friendly disposal"]}
          lang="en"
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          desktopMascotScaleMultiplier={1.08}
          desktopMascotRightShiftPct={0.235}
          desktopMascotBehindForm
          desktopMascotFixedHeightPx={756}
          desktopMinHeroTextHeightPx={460}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Clearance Services"
          description="Professional clearance services for any property — apartments, houses, offices, basements, cottages and land. Discreet, eco-friendly, at fair prices. Our team handles everything from sorting to disposal."
          formTitle="Get a free price quote"
          formSubtitle="Fill out the form for a no-obligation estimate"
          backgroundImage="/images/stahovanie-gauc.avif"
          benefits={["Free site inspection", "No hidden fees", "Eco-friendly disposal"]}
          lang="en"
          phoneCTAText="Call us now"
          phoneNumber="0951 735 130"
          hoursText="6 days a week 8:00-17:00"
          showMascot
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          mobileMascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          mobileMascotOffsetY={-44}
          mobileMascotScale={0.847}
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

      <ServicePricing filter={["clearance", "moving", "construction-waste"]} lang="en" />

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
          title="Clearance Services Across Slovakia"
          description="We provide professional clearance services in the following cities and regions."
          locations={clearanceLocations}
          additionalText="We provide professional clearance services with eco-friendly waste disposal."
          supporText="We operate in all regions:"
          callToActionText="We work in your area too — get a quote"
        />
      </div>

      <div>
        <GoogleReviews showReviewsShowcase={false} title="What our customers say about us" />
      </div>

      <div>
        <FAQ
          title="Frequently Asked Questions About Clearance"
          subtitle="Answers to the most common questions about our clearance services"
          items={[
            {
              question: "How much does a home clearance cost?",
              answer:
                "The cost depends on the size of the property, volume of items, access (floor, lift) and type of waste. For a 1-bedroom apartment prices start from €200, a 2-bedroom apartment €350–€500, a family house €600–€1,500. We always provide a clear fixed quote after a free site inspection.",
            },
            {
              question: "How long does a clearance take?",
              answer:
                "A standard 2-bedroom apartment is usually cleared in 1 day (4–8 hours). Larger houses with many belongings may require 2–3 days. We will give you a more accurate estimate during the site inspection.",
            },
            {
              question: "Do you handle estate clearances?",
              answer:
                "Yes, we specialise in sensitive and discreet estate clearances. We understand this is an emotionally difficult time, so we approach it with maximum empathy, discretion and respect. We help sort personal items, documents and valuables from items to be disposed of.",
            },
            {
              question: "What happens to items after clearance?",
              answer:
                "Functional furniture and appliances are donated to charities or families in need. Usable clothing goes to collections. Waste is separated and taken to recycling centres. We aim to minimise the amount of material that ends up in landfill.",
            },
            {
              question: "Do you clear properties after renovation?",
              answer:
                "Yes, we remove construction debris, rubble, packaging materials and everything left after a renovation. We quickly clear the space so you can move on to finishing work.",
            },
          ]}
          callToActionText="Questions about your clearance? Get in touch"
        />
      </div>

      <div>
        <CTA
          title="Need professional clearance services?"
          description="Let our experienced team handle everything — from sorting and packing to removal and eco-friendly disposal. Contact us today for a free consultation."
          buttonText="Get a free quote"
        />
      </div>

      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />

      <RelatedServices
        title="Related Services"
        services={[
          { title: "Moving Services", description: "Professional household and office moving.", href: "/en/moving", icon: "/icons/truck_icon.svg" },
          { title: "Construction Waste Removal", description: "Removal and disposal of construction debris.", href: "/en/construction-waste-removal", icon: "/icons/recycle_icon.svg" },
          { title: "Handyman Services", description: "Professional repairs and home maintenance.", href: "/en/handyman-services", icon: "/icons/repair_icon.svg" },
          { title: "Furniture Assembly", description: "Expert assembly of all furniture types.", href: "/en/furniture-assembly", icon: "/icons/wrench_icon.svg" },
        ]}
      />
      <FAQJsonLd items={faqSchemaItems} />
    </main>
  );
}
