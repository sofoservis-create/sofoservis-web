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

const junkRemovalLocations = [
  { name: "Bratislava", href: "/en/home-junk-removal-bratislava" },
  { name: "Nitra", href: "/en/home-junk-removal-nitra" },
  { name: "Trnava", href: "/en/home-junk-removal-trnava" },
  { name: "Pezinok", href: "/en/home-junk-removal-pezinok" },
  { name: "Galanta", href: "/en/home-junk-removal-galanta" },
  { name: "Levice", href: "/en/home-junk-removal-levice" },
  { name: "Piešťany", href: "/en/home-junk-removal-piestany" },
  { name: "Senec", href: "/en/home-junk-removal-senec" },
  { name: "Senica", href: "/en/home-junk-removal-senica" },
  { name: "Stupava", href: "/en/home-junk-removal-stupava" },
  { name: "Komárno", href: "/en/home-junk-removal-komarno" },
  { name: "Malacky", href: "/en/home-junk-removal-malacky" },
  { name: "Šamorín", href: "/en/home-junk-removal-samorin" },
  { name: "Hlohovec", href: "/en/home-junk-removal-hlohovec" },
  { name: "Šaľa", href: "/en/home-junk-removal-sala" },
];

const apartmentJunkRemovalLocations = [
  { name: "Bratislava", href: "/en/apartment-junk-removal-bratislava" },
  { name: "Nitra", href: "/en/apartment-junk-removal-nitra" },
  { name: "Trnava", href: "/en/apartment-junk-removal-trnava" },
  { name: "Pezinok", href: "/en/apartment-junk-removal-pezinok" },
  { name: "Galanta", href: "/en/apartment-junk-removal-galanta" },
  { name: "Levice", href: "/en/apartment-junk-removal-levice" },
  { name: "Piešťany", href: "/en/apartment-junk-removal-piestany" },
  { name: "Senec", href: "/en/apartment-junk-removal-senec" },
  { name: "Senica", href: "/en/apartment-junk-removal-senica" },
  { name: "Stupava", href: "/en/apartment-junk-removal-stupava" },
  { name: "Komárno", href: "/en/apartment-junk-removal-komarno" },
  { name: "Malacky", href: "/en/apartment-junk-removal-malacky" },
  { name: "Šamorín", href: "/en/apartment-junk-removal-samorin" },
  { name: "Hlohovec", href: "/en/apartment-junk-removal-hlohovec" },
  { name: "Šaľa", href: "/en/apartment-junk-removal-sala" },
];

export const metadata = {
  title: "Junk Removal Services - Professional, Eco-Friendly | Sofoservis",
  description:
    "Professional junk removal services for apartments, houses, offices, basements, cottages, post-renovation and estate junk removal. Free inspection.",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/junk-removal",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie",
      en: "https://www.sofoservis.sk/en/junk-removal",
      "x-default": "https://www.sofoservis.sk/en/junk-removal",
    },
  },
  keywords:
    "junk removal services, home junk removal, house junk removal, office junk removal, basement junk removal, estate junk removal, furniture removal, junk removal, post-renovation junk removal",
  openGraph: {
    title: "Junk Removal Services - Professional, Eco-Friendly | Sofoservis",
    description:
      "Professional junk removal services for any property — apartments, houses, offices, basements and cottages. Free inspection. Fast, eco-friendly.",
    url: "https://www.sofoservis.sk/en/junk-removal",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

const faqSchemaItems = [
  {
    question: "How much does a home junk removal cost?",
    answer:
      "The cost depends on the size of the property and volume of items. For a 1-bedroom apartment prices start from €200. The hourly rate is from €25/hr. We provide a free site inspection and a no-obligation fixed quote.",
  },
  {
    question: "How long does a junk removal take?",
    answer:
      "A standard 2-bedroom apartment is usually cleared in 1 day (4–8 hours). Larger houses or properties with a lot of belongings may require 2–3 days.",
  },
  {
    question: "Do you handle estate junkRemovals?",
    answer:
      "Yes, we specialise in sensitive and discreet estate junkRemovals with maximum empathy and respect for the bereaved family.",
  },
];

export default function JunkRemovalPage() {
  const featuresData = {
    title: "All Junk Removal Services in One Place",
    description:
      "We clear any type of property — from a simple furniture removal to a complete estate junk removal.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Home Junk Removal",
        description:
          "Complete junk removal of apartments and houses including all rooms, basement and attic. We sort, remove and dispose of everything eco-responsibly.",
        link: "/en/home-junk-removal",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Office Junk Removal",
        description:
          "Efficient junk removal of offices, warehouses and commercial premises. We work outside business hours to minimise disruption.",
        link: "/en/office-junk-removal",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Basement & Garage Junk Removal",
        description:
          "We specialise in clearing basements, garages and storage rooms. All unwanted items removed and space left clean.",
        link: "/en/basement-garage-junk-removal",
      },
      {
        image: "/icons/garden_icon.svg",
        title: "Cottage Junk Removal",
        description:
          "Junk Removal of cottages, garden houses and weekend retreats. Full emptying of the property including the garden.",
        link: "/en/cottage-junk-removal",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Post-Renovation Junk Removal",
        description:
          "Removal of construction debris, rubble and packaging materials after renovation. Quick clean-up to get your space ready for finishing work.",
        link: "/en/post-renovation-junk-removal",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Estate Junk Removal",
        description:
          "Discreet and empathetic junk removal of properties after bereavement. We help sort personal items with maximum sensitivity and respect.",
        link: "/en/estate-junk-removal-bereavement",
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
        title: "Property & Land Junk Removal",
        description:
          "We clear land and properties of unwanted items, construction waste and vegetation. Ready for your next project.",
        link: "/en/property-land-junk-removal",
      },
    ],
  };

  return (
    <main className="bg-white">
      <link rel="preload"
        href="/images/mascot/stary-gauc-nosi-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/stary-gauc-nosi-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)" fetchPriority="high" />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title="Junk Removal Services"
          description="Professional junk removal services for any property — apartments, houses, offices, basements, cottages and land. Discreet, eco-friendly, at fair prices. Our team handles everything from sorting to disposal."
          formTitle="Get a free price quote"
          formSubtitle="Fill out the form for a no-obligation estimate"
          backgroundImage="/images/stahovanie-gauc.avif"
          benefits={["Free site inspection", "No hidden fees", "Eco-friendly disposal"]}
          lang="en"
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          desktopMascotScaleMultiplier={1.08}
          desktopMascotRightShiftPct={0.235}
          desktopMascotFixedHeightPx={756}
          desktopMascotTopOffsetPct={-0.01}
          desktopMinHeroTextHeightPx={540}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Junk Removal Services"
          description="Professional junk removal services for any property — apartments, houses, offices, basements, cottages and land. Discreet, eco-friendly, at fair prices. Our team handles everything from sorting to disposal."
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

      <ServicePricing filter={["junk removal", "moving", "construction-waste"]} lang="en" />

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
          title="Junk Removal Services Across Slovakia"
          description="We provide professional junk removal services in the following cities and regions."
          locations={junkRemovalLocations}
          additionalText="We provide professional junk removal services with eco-friendly waste disposal."
          supporText="We operate in all regions:"
          callToActionText="We work in your area too — get a quote"
        />
      </div>

      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6 text-center">
            Apartment Junk Removal by City
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Specialised apartment junk removal services in your area
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {apartmentJunkRemovalLocations.map((loc) => (
              <a
                key={loc.href}
                href={loc.href}
                className="block px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-accent-500 hover:shadow-sm transition text-center text-sm font-medium text-primary-900 hover:text-accent-600"
              >
                Apartment Junk Removal {loc.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div>
        <GoogleReviews showReviewsShowcase={false} title="What our customers say about us" />
      </div>

      <div>
        <FAQ
          title="Frequently Asked Questions About Junk Removal"
          subtitle="Answers to the most common questions about our junk removal services"
          items={[
            {
              question: "How much does a home junk removal cost?",
              answer:
                "The cost depends on the size of the property, volume of items, access (floor, lift) and type of waste. For a 1-bedroom apartment prices start from €200, a 2-bedroom apartment €350–€500, a family house €600–€1,500. We always provide a clear fixed quote after a free site inspection.",
            },
            {
              question: "How long does a junk removal take?",
              answer:
                "A standard 2-bedroom apartment is usually cleared in 1 day (4–8 hours). Larger houses with many belongings may require 2–3 days. We will give you a more accurate estimate during the site inspection.",
            },
            {
              question: "Do you handle estate junkRemovals?",
              answer:
                "Yes, we specialise in sensitive and discreet estate junkRemovals. We understand this is an emotionally difficult time, so we approach it with maximum empathy, discretion and respect. We help sort personal items, documents and valuables from items to be disposed of.",
            },
            {
              question: "What happens to items after junk removal?",
              answer:
                "Functional furniture and appliances are donated to charities or families in need. Usable clothing goes to collections. Waste is separated and taken to recycling centres. We aim to minimise the amount of material that ends up in landfill.",
            },
            {
              question: "Do you clear properties after renovation?",
              answer:
                "Yes, we remove construction debris, rubble, packaging materials and everything left after a renovation. We quickly clear the space so you can move on to finishing work.",
            },
          ]}
          callToActionText="Questions about your junk removal? Get in touch"
        />
      </div>

      <div>
        <CTA
          title="Need professional junk removal services?"
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
