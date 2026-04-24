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
  title: "Home Junk Removal Staré Mesto Bratislava | Sofoservis",
  description:
    "Professional home junk removal services in Staré Mesto, Bratislava ✅ Affordable prices ✅ Free site inspection ✅ Contact us today!",
  keywords:
    "home junk removal staré mesto, house junk removal staré mesto, property junk removal staré mesto, estate junk removal staré mesto",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/home-junk-removal-stare-mesto",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-stare-mesto",
      en: "https://www.sofoservis.sk/en/home-junk-removal-stare-mesto",
      "x-default": "https://www.sofoservis.sk/vypratavanie-stare-mesto",
    },
  },
};

export default function HomeJunkRemovalStareMestoPage() {
  const faqItems = [
    { question: "How does the junk removal process work in Staré Mesto?", answer: "The process starts with a free site inspection where we estimate the scope of work and prepare a quote. On the agreed day, our team arrives with all necessary equipment. We sort items per your instructions, pack and remove all unwanted materials, and clean the space." },
    { question: "What is the cost of home junk removal in Staré Mesto?", answer: "The cost depends on space size, amount of items, accessibility (historic buildings often have narrow stairs/no elevators), waste type, and additional services. We provide a free on-site quote." },
    { question: "How quickly can you arrange junk removal in Staré Mesto?", answer: "Being based in Bratislava, we can often arrange junk removal in Staré Mesto within 24-48 hours. Contact us for the earliest available term." },
    { question: "Do you handle junk removal in historic buildings without elevators in Staré Mesto?", answer: "Yes, we specialize in junk removal in the Old Town's historic buildings. Our team is experienced in manual carry-down through narrow staircases where elevators are not available." },
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
          title="Home Junk Removal Services in Staré Mesto"
          description="Professional and fast home junk removal services in Staré Mesto (Old Town) district of Bratislava. Our team handles everything from sorting items, packing and removal, to ecological waste disposal - all at fair prices."
          formTitle="Get a free price quote"
          formSubtitle="Fill out the form for a no-obligation estimate in Staré Mesto"
          backgroundImage="/images/stahovanie-gauc.avif"
          lang="en"
          benefits={["Insurance included", "No hidden fees", "Fixed price upfront"]}
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          desktopMascotScaleMultiplier={1.08}
          desktopMascotRightShiftPct={0.235}
          desktopMascotFixedHeightPx={756}
          desktopMascotTopOffsetPct={-0.01}
          desktopMinHeroTextHeightPx={580}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Home Junk Removal Services in Staré Mesto"
          description="Professional and fast home junk removal services in Staré Mesto (Old Town) district of Bratislava. Our team handles everything from sorting items, packing and removal, to ecological waste disposal - all at fair prices."
          formTitle="Get a free price quote"
          formSubtitle="Fill out the form for a no-obligation estimate in Staré Mesto"
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
          title="Home Junk Removal in Staré Mesto District"
          description="We provide professional services in the historic center and surrounding Bratislava districts"
          locations={["Staré Mesto", "Hrad", "Palisády", "Ružinov", "Nové Mesto", "Petržalka", "Karlova Ves"]}
          additionalText="We also serve all other districts of Bratislava and nearby towns."
        />
      </div>

      <div>
        <Features
          title="Complete Home Junk Removal Services"
          description="Professional property junk removal with waste removal and disposal. We save your time and energy."
          features={[
            { image: "/icons/house_icon.svg", title: "Complete Home Junk Removal", description: "We clear entire apartments and houses including all rooms, basements, and attics. We sort items and arrange disposal or donation.", link: "/en/home-junk-removal" },
            { image: "/icons/vypratavanie_icon.svg", title: "Basement & Garage Junk Removal", description: "We specialize in clearing basements, garages, and storage areas. We remove all unwanted items and ensure clean spaces.", link: "/en/basement-garage-junk-removal" },
            { image: "/icons/furniture_icon.svg", title: "Old Furniture Removal", description: "Professional removal of old furniture, appliances, and other equipment with environmentally responsible disposal.", link: "/en/furniture-removal" },
            { image: "/icons/landscape_icon.svg", title: "Land & Property Junk Removal", description: "We clear your properties of unwanted items, construction waste, and vegetation. We prepare land for further use.", link: "/en/property-land-junk-removal" },
            { image: "/icons/recycle_icon.svg", title: "Hazardous Waste Disposal", description: "We safely dispose of hazardous waste, old appliances, batteries, paints, and chemicals according to regulations.", link: "/en/hazardous-waste-removal" },
            { image: "/icons/truck_icon.svg", title: "Construction Waste Removal", description: "After junk removal, we also handle removal of construction waste, rubble, and demolition materials.", link: "/en/construction-waste-removal" },
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
          title="Frequently Asked Questions About Home Junk Removal in Staré Mesto"
          items={faqItems}
        />
      </div>

      <div>
        <CTA
          title="Need professional home junk removal in Staré Mesto?"
          description="Let our experienced team handle everything - from sorting items to final space cleaning. We operate in all parts of Staré Mesto."
          buttonText="Get a free quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[{"title":"Home Junk Removal","description":"Complete home junk removal services.","href":"/en/home-junk-removal","icon":"/icons/vypratavanie_icon.svg"},{"title":"Basement & Garage Junk Removal","description":"Fast junk removal of basements, garages and storage.","href":"/en/basement-garage-junk-removal","icon":"/icons/house_icon.svg"},{"title":"Furniture Removal","description":"Old furniture pickup and ecological disposal.","href":"/en/furniture-removal","icon":"/icons/recycle_icon.svg"},{"title":"Apartment Moving","description":"Professional apartment and home relocation.","href":"/en/moving-stare-mesto","icon":"/icons/truck_icon.svg"}]}
      />

      <ServicePricing filter={["junk removal", "moving", "demolition"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
