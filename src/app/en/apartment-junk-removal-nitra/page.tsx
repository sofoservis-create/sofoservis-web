import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import LocationMap from "@/components/sections/LocationMap";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Apartment & House Junk Removal Nitra | Sofoservis",
  description:
    "Professional apartment and house junk removal services in Nitra ✅ Affordable prices ✅ Free site inspection ✅ Contact us today!",
  keywords:
    "apartment junk removal nitra, house junk removal nitra, home junk removal nitra, property junk removal nitra",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/apartment-junk-removal-nitra",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-bytov-domov/nitra",
      en: "https://www.sofoservis.sk/en/apartment-junk-removal-nitra",
      "x-default": "https://www.sofoservis.sk/vypratavanie-bytov-domov/nitra",
    },
  },
};

export default function ApartmentJunkRemovalNitraPage() {
  const faqItems = [
    { question: "How does the apartment junk removal process work in Nitra?", answer: "The process starts with a free site inspection where we estimate the scope of work and prepare a quote. On the agreed day, our team arrives with all equipment needed. We sort items per your instructions, remove all unwanted materials, and leave the space clean." },
    { question: "How much does apartment junk removal cost in Nitra?", answer: "Cost depends on the size of the apartment or house, the amount of items, accessibility (floor, lift), waste type, and any additional services. For a standard 2-bedroom apartment, prices typically range from €350 to €700. We provide a free, no-obligation quote after a site inspection." },
    { question: "How quickly can you arrange junk removal in Nitra?", answer: "We can usually arrange junk removal in Nitra within 2-4 working days." },
    { question: "Where do you take the waste from junk removal?", answer: "All waste is transported to official licensed collection yards and landfills. Recyclable materials go to recycling facilities, hazardous waste (old appliances, batteries, chemicals) to specialized disposal facilities." },
  ];

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
          title="Apartment & House Junk Removal in Nitra"
          description="Professional apartment and house junk removal services in Nitra. Our team handles sorting, removal, and ecological disposal of all items — at fair prices with a free site inspection."
          formTitle="Get a free price quote"
          formSubtitle="Fill out the form for a no-obligation estimate in Nitra"
          backgroundImage="/images/stahovanie-gauc.avif"
          lang="en"
          benefits={["Free site inspection", "No hidden fees", "Fixed price upfront"]}
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
          title="Apartment & House Junk Removal in Nitra"
          description="Professional apartment and house junk removal services in Nitra. Our team handles sorting, removal, and ecological disposal of all items — at fair prices with a free site inspection."
          formTitle="Get a free price quote"
          formSubtitle="Fill out the form for a no-obligation estimate in Nitra"
          backgroundImage="/images/stahovanie-gauc.avif"
          lang="en"
          benefits={["Free site inspection", "No hidden fees", "Fixed price upfront"]}
          showMascot
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          mobileMascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          mobileMascotOffsetY={-44}
          mobileMascotScale={0.847}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>

      <div><Clients /></div>

      <div>
        <GoogleReviews title="What our customers say" />
      </div>

      <div>
        <Reviews showHeadline={true} callToActionText="Get a Quote" />
      </div>

      <div>
        <LocationMap
          title="Apartment Junk Removal in Nitra and Surroundings"
          description="We provide professional junk removal services in Nitra and nearby areas"
          locations={["Nitra","Zlaté Moravce","Šurany","Vráble","Komárno","Levice","Šaľa","Topoľčany"]}
          additionalText="We also serve surrounding towns in the Nitra region."
        />
      </div>

      <div>
        <Features
          title="Complete Apartment & House Junk Removal Services"
          description="Professional property junk removal with waste removal and disposal. We save your time and energy."
          features={[
            { image: "/icons/house_icon.svg", title: "Complete Apartment Junk Removal", description: "We clear entire apartments and houses including all rooms, basements, and attics. We sort items and arrange disposal or donation.", link: "/en/home-junk-removal" },
            { image: "/icons/vypratavanie_icon.svg", title: "Basement & Garage Junk Removal", description: "We specialize in clearing basements, garages, and storage areas. We remove all unwanted items and ensure clean spaces.", link: "/en/basement-garage-junk-removal" },
            { image: "/icons/furniture_icon.svg", title: "Old Furniture Removal", description: "Professional removal of old furniture, appliances, and other equipment with environmentally responsible disposal.", link: "/en/furniture-removal" },
            { image: "/icons/landscape_icon.svg", title: "Land & Property Junk Removal", description: "We clear your properties of unwanted items, construction waste, and vegetation.", link: "/en/property-land-junk-removal" },
            { image: "/icons/recycle_icon.svg", title: "Hazardous Waste Disposal", description: "We safely dispose of hazardous waste, old appliances, batteries, paints, and chemicals.", link: "/en/hazardous-waste-removal" },
            { image: "/icons/truck_icon.svg", title: "Construction Waste Removal", description: "We handle removal of construction waste, rubble, and demolition materials.", link: "/en/construction-waste-removal" },
          ]}
          callToActionText="Get a Free Quote"
        />
      </div>

      <div>
        <InstagramFeed title="Follow Us on Instagram" />
      </div>

      <div>
        <GoogleReviews showReviewsShowcase={false} title="Customer Reviews" />
      </div>

      <div>
        <FAQ
          title="Frequently Asked Questions — Apartment Junk Removal in Nitra"
          items={faqItems}
        />
      </div>

      <div>
        <CTA
          title="Need apartment junk removal in Nitra?"
          description="Our experienced team handles everything — from sorting items to final space cleaning in Nitra and surroundings."
          buttonText="Get a free quote"
        />
      </div>

      <RelatedServices
        title="Related Services"
        services={[
          { title: "Home Junk Removal", description: "Complete home junk removal services.", href: "/en/home-junk-removal", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Basement & Garage Junk Removal", description: "Fast junk removal of basements, garages and storage.", href: "/en/basement-garage-junk-removal", icon: "/icons/house_icon.svg" },
          { title: "Furniture Removal", description: "Old furniture pickup and ecological disposal.", href: "/en/furniture-removal", icon: "/icons/recycle_icon.svg" },
          { title: "Apartment Moving", description: "Professional apartment and home relocation.", href: "/en/moving-nitra", icon: "/icons/truck_icon.svg" },
        ]}
      />

      <ServicePricing filter={["junk removal", "moving", "demolition"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
