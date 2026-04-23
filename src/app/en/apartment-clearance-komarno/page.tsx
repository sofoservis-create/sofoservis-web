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
  title: "Apartment & House Clearance Komárno | Sofoservis",
  description:
    "Professional apartment and house clearance services in Komárno ✅ Affordable prices ✅ Free site inspection ✅ Contact us today!",
  keywords:
    "apartment clearance komárno, house clearance komárno, home clearance komárno, property clearance komárno",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/apartment-clearance-komarno",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-bytov-domov/komarno",
      en: "https://www.sofoservis.sk/en/apartment-clearance-komarno",
      "x-default": "https://www.sofoservis.sk/vypratavanie-bytov-domov/komarno",
    },
  },
};

export default function ApartmentClearanceKomarnoPage() {
  const faqItems = [
    { question: "How does the apartment clearance process work in Komárno?", answer: "The process starts with a free site inspection where we estimate the scope of work and prepare a quote. On the agreed day, our team arrives with all equipment needed. We sort items per your instructions, remove all unwanted materials, and leave the space clean." },
    { question: "How much does apartment clearance cost in Komárno?", answer: "Cost depends on the size of the apartment or house, the amount of items, accessibility (floor, lift), waste type, and any additional services. For a standard 2-bedroom apartment, prices typically range from €350 to €700. We provide a free, no-obligation quote after a site inspection." },
    { question: "How quickly can you arrange clearance in Komárno?", answer: "We can usually arrange clearance in Komárno within 2-4 working days." },
    { question: "Where do you take the waste from clearance?", answer: "All waste is transported to official licensed collection yards and landfills. Recyclable materials go to recycling facilities, hazardous waste (old appliances, batteries, chemicals) to specialized disposal facilities." },
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
          title="Apartment & House Clearance in Komárno"
          description="Professional apartment and house clearance services in Komárno. Our team handles sorting, removal, and ecological disposal of all items — at fair prices with a free site inspection."
          formTitle="Get a free price quote"
          formSubtitle="Fill out the form for a no-obligation estimate in Komárno"
          backgroundImage="/images/stahovanie-gauc.avif"
          lang="en"
          benefits={["Free site inspection", "No hidden fees", "Fixed price upfront"]}
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          desktopMascotScaleMultiplier={1.08}
          desktopMascotRightShiftPct={0.235}
          desktopMascotBehindForm
          desktopMascotFixedHeightPx={850}
          desktopMinHeroTextHeightPx={540}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Apartment & House Clearance in Komárno"
          description="Professional apartment and house clearance services in Komárno. Our team handles sorting, removal, and ecological disposal of all items — at fair prices with a free site inspection."
          formTitle="Get a free price quote"
          formSubtitle="Fill out the form for a no-obligation estimate in Komárno"
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
          title="Apartment Clearance in Komárno and Surroundings"
          description="We provide professional clearance services in Komárno and nearby areas"
          locations={["Komárno","Hurbanovo","Štúrovo","Nové Zámky","Kolárovo","Marcelová"]}
          additionalText="We serve Komárno and surrounding towns in the Nitra region."
        />
      </div>

      <div>
        <Features
          title="Complete Apartment & House Clearance Services"
          description="Professional property clearance with waste removal and disposal. We save your time and energy."
          features={[
            { image: "/icons/house_icon.svg", title: "Complete Apartment Clearance", description: "We clear entire apartments and houses including all rooms, basements, and attics. We sort items and arrange disposal or donation.", link: "/en/home-junk-removal" },
            { image: "/icons/vypratavanie_icon.svg", title: "Basement & Garage Clearance", description: "We specialize in clearing basements, garages, and storage areas. We remove all unwanted items and ensure clean spaces.", link: "/en/basement-garage-junk-removal" },
            { image: "/icons/furniture_icon.svg", title: "Old Furniture Removal", description: "Professional removal of old furniture, appliances, and other equipment with environmentally responsible disposal.", link: "/en/furniture-removal" },
            { image: "/icons/landscape_icon.svg", title: "Land & Property Clearance", description: "We clear your properties of unwanted items, construction waste, and vegetation.", link: "/en/property-land-junk-removal" },
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
          title="Frequently Asked Questions — Apartment Clearance in Komárno"
          items={faqItems}
        />
      </div>

      <div>
        <CTA
          title="Need apartment clearance in Komárno?"
          description="Our experienced team handles everything — from sorting items to final space cleaning in Komárno and surroundings."
          buttonText="Get a free quote"
        />
      </div>

      <RelatedServices
        title="Related Services"
        services={[
          { title: "Home Clearance", description: "Complete home clearance services.", href: "/en/home-junk-removal", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Basement & Garage Clearance", description: "Fast clearance of basements, garages and storage.", href: "/en/basement-garage-junk-removal", icon: "/icons/house_icon.svg" },
          { title: "Furniture Removal", description: "Old furniture pickup and ecological disposal.", href: "/en/furniture-removal", icon: "/icons/recycle_icon.svg" },
          { title: "Apartment Moving", description: "Professional apartment and home relocation.", href: "/en/moving-komarno", icon: "/icons/truck_icon.svg" },
        ]}
      />

      <ServicePricing filter={["clearance", "moving", "demolition"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
