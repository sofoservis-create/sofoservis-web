import React from "react";
import Hero from "@/components/sections/Hero";
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
  title: "Home Clearance Dúbravka Bratislava | Sofoservis",
  description:
    "Professional home clearance services in Dúbravka, Bratislava ✅ Affordable prices ✅ Free site inspection ✅ Contact us today!",
  keywords:
    "home clearance dúbravka, house clearance dúbravka, property clearance dúbravka, estate clearance dúbravka",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/home-clearance-dubravka",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-dubravka",
      en: "https://www.sofoservis.sk/en/home-clearance-dubravka",
      "x-default": "https://www.sofoservis.sk/vypratavanie-dubravka",
    },
  },
};

export default function HomeClearanceDubravkaPage() {
  const faqItems = [
    { question: "How does the clearance process work in Dúbravka?", answer: "The process starts with a free site inspection where we estimate the scope of work and prepare a quote. On the agreed day, our team arrives with all necessary equipment. We sort items per your instructions, pack and remove all unwanted materials, and clean the space." },
    { question: "What is the cost of home clearance in Dúbravka?", answer: "The cost depends on space size, amount of items, accessibility (floor number, elevator), waste type, and additional services. For a standard 2-bedroom apartment, prices range from €350 to €700. We provide a free on-site quote." },
    { question: "How quickly can you arrange clearance in Dúbravka?", answer: "Being based in Bratislava, we can often arrange clearance in Dúbravka within 24-48 hours. Contact us for the earliest available term." },
    { question: "Do you handle clearance in apartments without elevators in Dúbravka?", answer: "Yes, we handle clearance in all types of buildings, including those without elevators. We have an experienced team for manual carry-down. A small additional fee may apply per floor." },
  ];

  return (
    <main className="bg-white">
      <Hero
        title="Home Clearance Services in Dúbravka"
        description="Professional and fast home clearance services in Dúbravka district of Bratislava. Our team handles everything from sorting items, packing and removal, to ecological waste disposal - all at fair prices."
        formTitle="Get a free price quote"
        formSubtitle="Fill out the form for a no-obligation estimate in Dúbravka"
        backgroundImage="/images/stahovanie-gauc.avif"
        lang="en"
        benefits={["Furniture insurance included", "No hidden fees", "Fixed price upfront"]}
      />

      <div>
        <Clients />
      </div>

      <div>
        <GoogleReviews title="What our customers say" />
      </div>

      <div>
        <Reviews showHeadline={true} callToActionText="Get a Quote" />
      </div>

      <div>
        <LocationMap
          title="Home Clearance in Dúbravka District"
          description="We provide professional services in Dúbravka and surrounding Bratislava districts"
          locations={["Dúbravka", "Karlova Ves", "Lamač", "Devínska Nová Ves", "Záhorská Bystrica", "Staré Mesto", "Petržalka"]}
          additionalText="We also serve all other districts of Bratislava and nearby towns."
        />
      </div>

      <div>
        <Features
          title="Complete Home Clearance Services"
          description="Professional property clearance with waste removal and disposal. We save your time and energy."
          features={[
            { image: "/icons/house_icon.svg", title: "Complete Home Clearance", description: "We clear entire apartments and houses including all rooms, basements, and attics. We sort items and arrange disposal or donation.", link: "/en/home-junk-removal" },
            { image: "/icons/vypratavanie_icon.svg", title: "Basement & Garage Clearance", description: "We specialize in clearing basements, garages, and storage areas. We remove all unwanted items and ensure clean spaces.", link: "/en/basement-garage-junk-removal" },
            { image: "/icons/furniture_icon.svg", title: "Old Furniture Removal", description: "Professional removal of old furniture, appliances, and other equipment with environmentally responsible disposal.", link: "/en/furniture-removal" },
            { image: "/icons/landscape_icon.svg", title: "Land & Property Clearance", description: "We clear your properties of unwanted items, construction waste, and vegetation. We prepare land for further use.", link: "/en/property-land-junk-removal" },
            { image: "/icons/recycle_icon.svg", title: "Hazardous Waste Disposal", description: "We safely dispose of hazardous waste, old appliances, batteries, paints, and chemicals according to regulations.", link: "/en/hazardous-waste-removal" },
            { image: "/icons/truck_icon.svg", title: "Construction Waste Removal", description: "After clearance, we also handle removal of construction waste, rubble, and demolition materials.", link: "/en/construction-waste-removal" },
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
          title="Frequently Asked Questions About Home Clearance in Dúbravka"
          items={faqItems}
        />
      </div>

      <div>
        <CTA
          title="Need professional home clearance in Dúbravka?"
          description="Let our experienced team handle everything - from sorting items to final space cleaning. We operate in all parts of Dúbravka."
          buttonText="Get a free quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[{"title":"Home Clearance","description":"Complete home clearance services.","href":"/en/home-junk-removal","icon":"/icons/vypratavanie_icon.svg"},{"title":"Basement & Garage Clearance","description":"Fast clearance of basements, garages and storage.","href":"/en/basement-garage-junk-removal","icon":"/icons/house_icon.svg"},{"title":"Furniture Removal","description":"Old furniture pickup and ecological disposal.","href":"/en/furniture-removal","icon":"/icons/recycle_icon.svg"},{"title":"Apartment Moving","description":"Professional apartment and home relocation.","href":"/en/moving-dubravka","icon":"/icons/truck_icon.svg"}]}
      />

      <ServicePricing filter={["clearance", "moving", "demolition"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
