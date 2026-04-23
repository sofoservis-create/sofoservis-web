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
  title: "Home Clearance Ružinov Bratislava | Sofoservis",
  description:
    "Professional home clearance services in Ružinov, Bratislava ✅ Affordable prices ✅ Free site inspection ✅ Contact us today!",
  keywords:
    "home clearance ružinov, house clearance ružinov, property clearance ružinov, estate clearance ružinov",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/home-clearance-ruzinov",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-ruzinov",
      en: "https://www.sofoservis.sk/en/home-clearance-ruzinov",
      "x-default": "https://www.sofoservis.sk/vypratavanie-ruzinov",
    },
  },
};

export default function HomeClearanceRuzinovPage() {
  const faqItems = [
    { question: "How does the clearance process work in Ružinov?", answer: "The process starts with a free site inspection where we estimate the scope of work and prepare a quote. On the agreed day, our team arrives with all necessary equipment. We sort items per your instructions, pack and remove all unwanted materials, and clean the space." },
    { question: "What is the cost of home clearance in Ružinov?", answer: "The cost depends on space size, amount of items, accessibility (floor number, elevator), waste type, and additional services. For a standard 2-bedroom apartment, prices range from €350 to €700. We provide a free on-site quote." },
    { question: "How quickly can you arrange clearance in Ružinov?", answer: "Being based in Bratislava, we can often arrange clearance in Ružinov within 24-48 hours. Contact us for the earliest available term." },
    { question: "Do you handle clearance in older apartment buildings in Ružinov?", answer: "Yes, we handle clearance in all types of buildings in Ružinov, from older brick apartment blocks to newer residential developments." },
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
          title="Home Clearance Services in Ružinov"
          description="Professional and fast home clearance services in Ružinov district of Bratislava. Our team handles everything from sorting items, packing and removal, to ecological waste disposal - all at fair prices."
          formTitle="Get a free price quote"
          formSubtitle="Fill out the form for a no-obligation estimate in Ružinov"
          backgroundImage="/images/stahovanie-gauc.avif"
          lang="en"
          benefits={["Insurance included", "No hidden fees", "Fixed price upfront"]}
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
          title="Home Clearance Services in Ružinov"
          description="Professional and fast home clearance services in Ružinov district of Bratislava. Our team handles everything from sorting items, packing and removal, to ecological waste disposal - all at fair prices."
          formTitle="Get a free price quote"
          formSubtitle="Fill out the form for a no-obligation estimate in Ružinov"
          backgroundImage="/images/stahovanie-gauc.avif"
          lang="en"
          benefits={["Insurance included", "No hidden fees", "Fixed price upfront"]}
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
        <GoogleReviews title="What our customers say" />
      </div>

      <div>
        <Reviews showHeadline={true} callToActionText="Get a Quote" />
      </div>

      <div>
        <LocationMap
          title="Home Clearance in Ružinov District"
          description="We provide professional services in Ružinov and surrounding Bratislava districts"
          locations={["Ružinov", "Trnávka", "Prievoz", "Nivy", "Vrakuňa", "Podunajské Biskupice", "Staré Mesto", "Nové Mesto"]}
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
          title="Frequently Asked Questions About Home Clearance in Ružinov"
          items={faqItems}
        />
      </div>

      <div>
        <CTA
          title="Need professional home clearance in Ružinov?"
          description="Let our experienced team handle everything - from sorting items to final space cleaning. We operate in all parts of Ružinov."
          buttonText="Get a free quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[{"title":"Home Clearance","description":"Complete home clearance services.","href":"/en/home-junk-removal","icon":"/icons/vypratavanie_icon.svg"},{"title":"Basement & Garage Clearance","description":"Fast clearance of basements, garages and storage.","href":"/en/basement-garage-junk-removal","icon":"/icons/house_icon.svg"},{"title":"Furniture Removal","description":"Old furniture pickup and ecological disposal.","href":"/en/furniture-removal","icon":"/icons/recycle_icon.svg"},{"title":"Apartment Moving","description":"Professional apartment and home relocation.","href":"/en/moving-ruzinov","icon":"/icons/truck_icon.svg"}]}
      />

      <ServicePricing filter={["clearance", "moving", "demolition"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
