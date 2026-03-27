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
  title: "Old Furniture Removal Bratislava | Sofoservis",
  description:
    "Professional old furniture removal and disposal services in Bratislava ✅ Affordable prices ✅ Contact us today!",
  keywords:
    "old furniture removal bratislava, furniture disposal bratislava, furniture clearance bratislava, junk removal bratislava",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/old-furniture-removal-bratislava",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-odvoz-stareho-nabytku/bratislava",
      en: "https://www.sofoservis.sk/en/old-furniture-removal-bratislava",
      "x-default": "https://www.sofoservis.sk/vypratavanie-odvoz-stareho-nabytku/bratislava",
      },
  },
};

export default function OldFurnitureRemovalBratislavaPage() {
  const faqItems = [
            { question: "What is the cost of old furniture removal in Bratislava?", answer: "The cost depends on the quantity and type of furniture, district, access conditions (floor, elevator), and whether disassembly is needed. Removal of a single piece (e.g., sofa, wardrobe) ranges from €40 to €80 including loading and disposal. Volume discounts are available." },
            { question: "How quickly can you pick up furniture in Bratislava?", answer: "We offer flexible pickup schedules, often with same-day service for urgent cases. Standard pickup is within 1-3 business days. Evening and weekend service available at an additional charge." },
            { question: "Will you carry furniture from upper floors without an elevator?", answer: "Yes, our workers are trained to handle furniture in apartment buildings, including carrying from top floors without an elevator. We use special carrying straps and protective equipment." },
            { question: "What happens to the collected furniture?", answer: "Functional furniture may be donated to charities. Unusable furniture is disassembled and sorted by material (wood, metal, textile, plastic) for recycling at authorized facilities." },
          ];
  const bratislavaDistricts = [
    "Staré Mesto","Ružinov","Nové Mesto","Karlova Ves","Petržalka","Dúbravka","Rača","Vajnory","Devín","Devínska Nová Ves","Záhorská Bystrica","Lamač","Vrakuňa","Podunajské Biskupice","Jarovce","Rusovce","Čunovo",
  ];

  return (
    <main className="bg-white">
      <Hero
        title="Old Furniture Removal in Bratislava"
        description="Professional services for fast and reliable removal and ecological disposal of old, unwanted furniture in Bratislava and surrounding areas. We clear and remove any furniture from individual pieces to complete household contents."
        formTitle="Get a free price quote"
        formSubtitle="Fill out the form for a no-obligation estimate"
        backgroundImage="/images/stahovanie_gauc.jpg"
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
        <Features
          title="Complete Furniture Removal Services"
          description="We offer a wide range of services for carrying out, removing, and ecologically disposing of all types of old and unwanted furniture."
          features={[
            { image: "/icons/furniture_icon.svg", title: "Individual Furniture Removal", description: "Fast and reliable removal of individual furniture pieces such as wardrobes, beds, sofas, tables, or chairs.", link: "/en/furniture-removal" },
            { image: "/icons/house_icon.svg", title: "Complete Apartment Clearance", description: "Removal of all furniture and equipment from apartments, houses, and other spaces. Ideal for renovations or property sales.", link: "/en/home-junk-removal" },
            { image: "/icons/crane_icon.svg", title: "Furniture Disassembly & Carrying", description: "Expert disassembly before removal and carrying from upper floors without elevator. We handle bulky items in tight spaces.", link: "/en/furniture-assembly" },
            { image: "/icons/recycle_icon.svg", title: "Ecological Furniture Disposal", description: "We ensure ecological disposal of all furniture types. We disassemble, sort by materials, and arrange recycling.", link: "/en/hazardous-waste-removal" },
            { image: "/icons/briefcase_icon.svg", title: "Office Furniture Removal", description: "We also specialize in removing furniture from offices and commercial spaces. Fast removal of large quantities of office furniture.", link: "/en/office-moving" },
          ]}
          callToActionText="Get a Free Quote"
        />
      </div>

      <div>
        <LocationMap
          title="We Serve All of Bratislava"
          description="We provide furniture removal services in all districts of Bratislava"
          locations={bratislavaDistricts}
          additionalText="We also serve nearby areas - Senec, Pezinok, Modra, Svätý Jur, Malacky, and other towns around Bratislava."
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
          title="Frequently Asked Questions About Furniture Removal in Bratislava"
          items={[
            { question: "What is the cost of old furniture removal in Bratislava?", answer: "The cost depends on the quantity and type of furniture, district, access conditions (floor, elevator), and whether disassembly is needed. Removal of a single piece (e.g., sofa, wardrobe) ranges from €40 to €80 including loading and disposal. Volume discounts are available." },
            { question: "How quickly can you pick up furniture in Bratislava?", answer: "We offer flexible pickup schedules, often with same-day service for urgent cases. Standard pickup is within 1-3 business days. Evening and weekend service available at an additional charge." },
            { question: "Will you carry furniture from upper floors without an elevator?", answer: "Yes, our workers are trained to handle furniture in apartment buildings, including carrying from top floors without an elevator. We use special carrying straps and protective equipment." },
            { question: "What happens to the collected furniture?", answer: "Functional furniture may be donated to charities. Unusable furniture is disassembled and sorted by material (wood, metal, textile, plastic) for recycling at authorized facilities." },
          ]}
        />
      </div>

      <div>
        <CTA
          title="Get rid of old furniture in Bratislava easily and ecologically"
          description="Unwanted furniture is no longer a problem. Our professionals handle fast removal, careful disassembly, and ecological disposal from any apartment, house, or office in Bratislava."
          buttonText="Order furniture removal"
          buttonLink="/en/contact"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[{"title":"Furniture Removal","description":"Old furniture pickup and ecological disposal.","href":"/en/furniture-removal","icon":"/icons/recycle_icon.svg"},{"title":"Home Clearance","description":"Complete home clearance services.","href":"/en/home-clearance","icon":"/icons/broom_icon.svg"},{"title":"Basement & Garage Clearance","description":"Fast clearance of basements, garages and storage.","href":"/en/basement-garage-clearance","icon":"/icons/house_icon.svg"},{"title":"Apartment Moving","description":"Professional apartment and home relocation.","href":"/en/apartment-moving","icon":"/icons/truck_icon.svg"}]}
      />

      <ServicePricing filter={["clearance", "moving", "demolition"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
          <FAQJsonLd items={faqItems} />
    </main>
  );
}
