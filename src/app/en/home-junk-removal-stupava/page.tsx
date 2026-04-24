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
  title: "Home Junk Removal Stupava | Sofoservis",
  description:
    "Professional home junk removal services in Stupava ✅ Affordable prices ✅ Free site inspection ✅ Contact us today!",
  keywords:
    "home junk removal stupava, house junk removal stupava, property junk removal stupava, estate junk removal stupava",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/home-junk-removal-stupava",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-stupava",
      en: "https://www.sofoservis.sk/en/home-junk-removal-stupava",
      "x-default": "https://www.sofoservis.sk/vypratavanie-stupava",
    },
  },
};

export default function HomeJunkRemovalStupavaPage() {
  const faqItems = [
    { question: "How does the junk removal process work in Stupava?", answer: "The process starts with a free site inspection where we estimate the scope of work and prepare a quote. On the agreed day, our team arrives with all necessary equipment. We sort items per your instructions, pack and remove all unwanted materials, and clean the space." },
    { question: "What is the cost of home junk removal in Stupava?", answer: "The cost depends on space size, amount of items, accessibility, waste type, and additional services. For a standard 2-bedroom apartment, prices range from €350 to €700. For a family house, from €600 to €1,500. We provide a free on-site quote." },
    { question: "How quickly can you arrange junk removal in Stupava?", answer: "We can usually arrange junk removal within 2-5 working days. In urgent cases, we try to accommodate your schedule and arrive even sooner. Contact us for availability." },
    { question: "Where do you take the waste from junk removal in Stupava?", answer: "We transport waste to official collection yards and landfills in compliance with waste management regulations. Recyclable materials go to recycling facilities, hazardous waste to specialized disposal facilities." },
  ];

  const cityIntro =
    "Stupava is a charming town at the foot of the Little Carpathians near Bratislava, surrounded by vineyards and forests. Many older family homes here contain decades of accumulated items that require professional clearing before sale, inheritance settlement, or renovation.";

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
          title="Home Junk Removal Services in Stupava"
          description="Professional and fast home junk removal services in Stupava and surrounding areas. Our team handles everything from sorting items, packing and removal, to ecological waste disposal - all at fair prices."
          formTitle="Get a free price quote"
          formSubtitle="Fill out the form for a no-obligation estimate in Stupava"
          backgroundImage="/images/stahovanie-gauc.avif"
          lang="en"
          benefits={["Insurance included", "No hidden fees", "Fixed price upfront"]}
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
          title="Home Junk Removal Services in Stupava"
          description="Professional and fast home junk removal services in Stupava and surrounding areas. Our team handles everything from sorting items, packing and removal, to ecological waste disposal - all at fair prices."
          formTitle="Get a free price quote"
          formSubtitle="Fill out the form for a no-obligation estimate in Stupava"
          backgroundImage="/images/stahovanie-gauc.avif"
          lang="en"
          benefits={["Insurance included", "No hidden fees", "Fixed price upfront"]}
          showMascot
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          mobileMascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          mobileMascotOffsetY={-57}
          mobileMascotOffsetX={-32}
          mobileMascotScale={1.02}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>

      <div>
        <Clients />
      </div>


      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-gray-700 text-base leading-relaxed">{cityIntro}</p>
        </div>
      </section>

      <div>
        <GoogleReviews title="What our customers say" />
      </div>

      <div>
        <Reviews showHeadline={true} callToActionText="Get a Quote" />
      </div>

      <div>
        <LocationMap
          title="Home Junk Removal in Stupava and Surroundings"
          description="We provide professional services in Stupava and nearby towns"
          locations={["Stupava", "Malacky", "Bratislava", "Pezinok", "Záhorská Bystrica", "Marianka", "Borinka", "Lozorno"]}
          additionalText="We also serve other towns in the Bratislava region."
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
          title="Frequently Asked Questions About Home Junk Removal in Stupava"
          items={faqItems}
        />
      </div>

      <div>
        <CTA
          title="Need professional home junk removal in Stupava?"
          description="Let our experienced team handle everything - from sorting items to final space cleaning. We operate in all parts of Stupava and surroundings."
          buttonText="Get a free quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[{"title":"Home Junk Removal","description":"Complete home junk removal services.","href":"/en/home-junk-removal","icon":"/icons/vypratavanie_icon.svg"},{"title":"Basement & Garage Junk Removal","description":"Fast junk removal of basements, garages and storage.","href":"/en/basement-garage-junk-removal","icon":"/icons/house_icon.svg"},{"title":"Furniture Removal","description":"Old furniture pickup and ecological disposal.","href":"/en/furniture-removal","icon":"/icons/recycle_icon.svg"},{"title":"Apartment Moving","description":"Professional apartment and home relocation.","href":"/en/moving-stupava","icon":"/icons/truck_icon.svg"}]}
      />

      <ServicePricing filter={["junk removal", "moving", "demolition"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
