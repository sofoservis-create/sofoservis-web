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
  title: "Furniture Assembly Bratislava | Sofoservis",
  description:
    "Professional furniture assembly services in Bratislava ✅ Affordable prices ✅ Contact us today!",
  keywords:
    "furniture assembly bratislava, furniture assembly service bratislava, ikea assembly bratislava, kitchen assembly bratislava",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/furniture-assembly-bratislava",
    languages: {
      sk: "https://www.sofoservis.sk/montaz-nabytku/bratislava",
      en: "https://www.sofoservis.sk/en/furniture-assembly-bratislava",
      "x-default": "https://www.sofoservis.sk/montaz-nabytku/bratislava",
      },
  },
};

export default function FurnitureAssemblyBratislavaPage() {
  const faqItems = [
            { question: "How quickly can you arrange furniture assembly in Bratislava?", answer: "In most cases, we can arrange assembly within 24-48 hours. In urgent cases, we try to provide same-day service. The fastest way to book is by calling 0952 044 363." },
            { question: "What are the prices for furniture assembly in Bratislava?", answer: "Prices depend on furniture type, complexity, and location. Smaller items (table, shelf): €20-40; medium items (bed, dresser): €40-70; kitchen units: from €120/m. Volume discounts available for multiple items." },
            { question: "Do you cover all of Bratislava?", answer: "Yes, we serve all districts of Bratislava and surrounding towns. Travel surcharge may apply for locations outside Bratislava." },
            { question: "What types of furniture do you assemble?", answer: "We assemble all furniture types regardless of brand: beds, wardrobes, dressers, kitchen units, desks, shelving, curtain rods, children's furniture, garden furniture, office furniture, and more." },
            { question: "Do you also install curtain rods in Bratislava?", answer: "Yes, we professionally install all types of curtain rods including ceiling-mounted, wall-mounted, and tension rods. We ensure proper anchoring into various wall materials." },
          ];
  const bratislavaDistricts = [
    "Staré Mesto","Ružinov","Nové Mesto","Petržalka","Karlova Ves","Dúbravka","Lamač","Devín","Devínska Nová Ves","Záhorská Bystrica","Rača","Vajnory","Vrakuňa","Podunajské Biskupice","Jarovce","Rusovce","Čunovo",
  ];

  return (
    <main className="bg-white">
      <Hero
        title="Furniture Assembly in Bratislava"
        description="Professional furniture assembly services in Bratislava and surrounding areas. Our experienced experts handle new furniture assembly or disassembly and relocation of existing furniture quickly, precisely, and at competitive prices."
        formTitle="Get a free price quote"
        formSubtitle="Fill out the form for a no-obligation estimate in Bratislava"
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
        <Features
          title="Complete Furniture Assembly Services"
          description="Professional furniture assembly for all brands with our own tools and experienced team."
          features={[
            { image: "/icons/wrench_icon.svg", title: "Furniture Assembly", description: "Expert assembly of furniture from IKEA, JYSK, Asko, and other brands. We assemble any type of furniture according to instructions.", link: "/en/furniture-assembly" },
            { image: "/icons/kitchen_icon.svg", title: "Kitchen Installation", description: "Complete kitchen unit installation including appliances and connections. Precise installation according to project specifications.", link: "/en/kitchen-installation" },
            { image: "/icons/furniture_icon.svg", title: "Furniture Moving", description: "Professional furniture disassembly before moving and reassembly at the new location. Safe transport and installation.", link: "/en/furniture-moving-removal" },
            { image: "/icons/truck_icon.svg", title: "Apartment & House Moving", description: "Complete moving services including furniture disassembly and assembly. Full-service relocation.", link: "/en/apartment-moving" },
            { image: "/icons/curtain_icon.svg", title: "Curtain Rod & Rail Mounting", description: "Professional mounting of curtain rods, rails, and blinds. We ensure proper anchoring into various wall types.", link: "/en/furniture-assembly" },
            { image: "/icons/repair_icon.svg", title: "Furniture Repairs & Adjustments", description: "Minor repairs, adjustments, and finishing work on your furniture. We fix issues, drill cable holes, and ensure a perfect look.", link: "/en/handyman-services" },
          ]}
          callToActionText="Get a Free Quote"
        />
      </div>

      <div className="-mb-[50px]">
        <LocationMap
          title="Services Available Throughout Bratislava"
          description="Our furniture assembly services are available in all districts of Bratislava"
          locations={bratislavaDistricts}
          additionalText="We also serve surrounding towns including Senec, Pezinok, Stupava, Malacky, Šamorín, and more. Contact us for details about services in your area."
        />
      </div>

      <div>
        <InstagramFeed title="Follow Us on Instagram" />
      </div>

      <div>
        <GoogleReviews title="Customer Reviews" showReviewsShowcase={false} />
      </div>

      <div>
        <FAQ
          title="Frequently Asked Questions About Furniture Assembly in Bratislava"
          items={[
            { question: "How quickly can you arrange furniture assembly in Bratislava?", answer: "In most cases, we can arrange assembly within 24-48 hours. In urgent cases, we try to provide same-day service. The fastest way to book is by calling 0952 044 363." },
            { question: "What are the prices for furniture assembly in Bratislava?", answer: "Prices depend on furniture type, complexity, and location. Smaller items (table, shelf): €20-40; medium items (bed, dresser): €40-70; kitchen units: from €120/m. Volume discounts available for multiple items." },
            { question: "Do you cover all of Bratislava?", answer: "Yes, we serve all districts of Bratislava and surrounding towns. Travel surcharge may apply for locations outside Bratislava." },
            { question: "What types of furniture do you assemble?", answer: "We assemble all furniture types regardless of brand: beds, wardrobes, dressers, kitchen units, desks, shelving, curtain rods, children's furniture, garden furniture, office furniture, and more." },
            { question: "Do you also install curtain rods in Bratislava?", answer: "Yes, we professionally install all types of curtain rods including ceiling-mounted, wall-mounted, and tension rods. We ensure proper anchoring into various wall materials." },
          ]}
        />
      </div>

      <div>
        <CTA
          title="Professional Furniture Assembly in Bratislava"
          description="Save your time and effort with furniture assembly. Our experts will assemble your furniture quickly, precisely, and without damage. Get a free quote today!"
          buttonText="Order furniture assembly"
          imageSrc="/images/sofoservis montaz.jpg"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[{"title":"Furniture Assembly","description":"Expert assembly and disassembly of all furniture types.","href":"/en/furniture-assembly","icon":"/icons/wrench_icon.svg"},{"title":"Handyman Services","description":"Professional repairs, assembly and home maintenance.","href":"/en/handyman-services","icon":"/icons/repair_icon.svg"},{"title":"Kitchen Installation","description":"Professional kitchen fitting and installation.","href":"/en/kitchen-installation","icon":"/icons/plumbing_icon.svg"},{"title":"Apartment Moving","description":"Professional apartment and home relocation.","href":"/en/apartment-moving","icon":"/icons/house_icon.svg"}]}
      />

      <ServicePricing filter={["furniture-assembly", "handyman", "moving"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
          <FAQJsonLd items={faqItems} />
    </main>
  );
}
