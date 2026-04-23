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
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Property & Land Clearance Services | Sofoservis",
  description:
    "Professional property and land clearance services ✅ Fast and affordable ✅ Free site inspection ✅ Contact us today!",
  keywords:
    "property clearance, land clearance, site clearance, overgrown land clearing, vegetation removal, plot clearing, land preparation",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/property-land-junk-removal",
    languages: {
      sk: "https://www.sofoservis.sk/cistenie-vypratavanie-pozemkov-nehnutelnosti",
      en: "https://www.sofoservis.sk/en/property-land-junk-removal",
      "x-default": "https://www.sofoservis.sk/cistenie-vypratavanie-pozemkov-nehnutelnosti",
      },
  },
  openGraph: {
    title: "Property & Land Clearance Services | Sofoservis",
    description:
      "Professional property and land clearance with eco-friendly disposal. Prepare your land for construction or sale!",
    url: "https://www.sofoservis.sk/en/property-land-junk-removal",
    siteName: "Sofoservis",
    locale: "en_US",
    type: "website",
  },
};

export default function PropertyLandClearancePage() {
  const faqItems = [
            {
              question: "How does the property clearance process work?",
              answer:
                "The process starts with a free site inspection where we evaluate the condition, scope of work, and access options. Then we prepare a quote. After approval, we determine the schedule and work plan. The clearing typically consists of several phases: first we remove large debris and obstacles, then we deal with overgrown vegetation. For larger properties, we often use machinery (tractors, loaders). Cleared material is sorted into biodegradable waste for composting and other waste for recycling or disposal.",
            },
            {
              question: "What is the price for land clearance?",
              answer:
                "The price depends on several factors: size of the property, level of overgrowth/contamination, type of vegetation/waste, accessibility for equipment, and need for special machinery. Approximately, prices range from €2 to €8 per m² depending on difficulty. For smaller properties (up to 500m²), a flat rate may be offered. The best way to get an accurate price is to use our free site inspection.",
            },
            {
              question: "What permits are needed for land clearance?",
              answer:
                "Required permits depend on the location and scope of work. For regular clearance of private land from overgrown vegetation and waste, special permits are usually not needed. However, if there are mature trees with trunk circumference over 40 cm, you may need a permit from the environmental authority. For properties in protected areas, additional permits may be required.",
            },
            {
              question:
                "How long does it take to clear a standard property?",
              answer:
                "Clearance time depends on the property size and condition. A smaller property (up to 500m²) with normal contamination can be cleared in 1-2 working days. Medium properties (500-2000m²) usually require 2-5 days. For larger properties or heavily overgrown areas, clearance may take a week or more.",
            },
            {
              question: "What happens to cleared wood and green waste?",
              answer:
                "We handle cleared wood and green waste according to your preferences: 1) Wood can be left on site cut into smaller pieces as firewood, 2) Branches and smaller trees can be chipped on site and used as mulch, or we can remove it, 3) All green waste can be taken to the nearest composting facility for eco-friendly processing.",
            },
          ];
  const featuresData = {
    title: "Comprehensive Property & Land Clearance Services",
    description:
      "Professional services for complete clearing of properties, gardens, and land with eco-friendly waste disposal.",
    features: [
      {
        image: "/icons/landscape_icon.svg",
        title: "Land Clearing & Preparation",
        description:
          "Complete clearing of land from overgrown vegetation, unwanted trees, and waste. We prepare your property for construction or recultivation.",
        link: "/en/property-land-junk-removal",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Basement & Garage Clearance",
        description:
          "Clearing of basements, garages, and storage areas on your property. We remove all unwanted items and waste.",
        link: "/en/basement-garage-junk-removal",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Construction Waste Removal",
        description:
          "Professional removal and disposal of construction waste, rubble, and demolition materials from your property. We have containers of various sizes.",
        link: "/en/construction-waste-removal",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Hazardous Waste Disposal",
        description:
          "Eco-friendly disposal of old appliances, electronics, and hazardous waste found on the property according to current regulations.",
        link: "/en/hazardous-waste-removal",
      },
      {
        image: "/icons/wrecking_ball_icon.svg",
        title: "Demolition Services",
        description:
          "Demolition of old structures, sheds, garages, or other constructions on the property. Complete demolition with material removal.",
        link: "/en/demolition-services",
      },
      {
        image: "/icons/house_icon.svg",
        title: "Home Clearance",
        description:
          "Complete clearance of properties before sale or renovation. We clean all spaces and prepare them for further use.",
        link: "/en/home-junk-removal",
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
          title="Property & Land Clearance Services"
          description="Professional clearing and complete clean-up of properties from overgrown vegetation, waste, and unwanted items. We prepare your land for construction, sale, or recultivation quickly and at affordable prices."
          formTitle="Get a free price quote"
          formSubtitle="Fill out the form for a no-obligation calculation"
          backgroundImage="/images/stahovanie-gauc.avif"
          badgeText="Services available 6 days a week"
          ratingText="Over 3500+ satisfied customers"
          benefits={[
          "Free site inspection",
          "Complete land preparation",
          "Eco-friendly disposal",
        ]}
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
          title="Property & Land Clearance Services"
          description="Professional clearing and complete clean-up of properties from overgrown vegetation, waste, and unwanted items. We prepare your land for construction, sale, or recultivation quickly and at affordable prices."
          formTitle="Get a free price quote"
          formSubtitle="Fill out the form for a no-obligation calculation"
          backgroundImage="/images/stahovanie-gauc.avif"
          badgeText="Services available 6 days a week"
          ratingText="Over 3500+ satisfied customers"
          benefits={[
          "Free site inspection",
          "Complete land preparation",
          "Eco-friendly disposal",
        ]}
          phoneCTAText="Call us now"
          phoneNumber="0951 735 130"
          hoursText="6 days a week 8:00-17:00"
          lang="en"
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
        <GoogleReviews
          title="Join our satisfied customers"
        />
      </div>

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

      <div>
        <GoogleReviews
          showReviewsShowcase={false}
          title="What our customers say about us"
        />
      </div>

      <div>
        <FAQ
          title="Frequently Asked Questions About Property & Land Clearance"
          items={[
            {
              question: "How does the property clearance process work?",
              answer:
                "The process starts with a free site inspection where we evaluate the condition, scope of work, and access options. Then we prepare a quote. After approval, we determine the schedule and work plan. The clearing typically consists of several phases: first we remove large debris and obstacles, then we deal with overgrown vegetation. For larger properties, we often use machinery (tractors, loaders). Cleared material is sorted into biodegradable waste for composting and other waste for recycling or disposal.",
            },
            {
              question: "What is the price for land clearance?",
              answer:
                "The price depends on several factors: size of the property, level of overgrowth/contamination, type of vegetation/waste, accessibility for equipment, and need for special machinery. Approximately, prices range from €2 to €8 per m² depending on difficulty. For smaller properties (up to 500m²), a flat rate may be offered. The best way to get an accurate price is to use our free site inspection.",
            },
            {
              question: "What permits are needed for land clearance?",
              answer:
                "Required permits depend on the location and scope of work. For regular clearance of private land from overgrown vegetation and waste, special permits are usually not needed. However, if there are mature trees with trunk circumference over 40 cm, you may need a permit from the environmental authority. For properties in protected areas, additional permits may be required.",
            },
            {
              question:
                "How long does it take to clear a standard property?",
              answer:
                "Clearance time depends on the property size and condition. A smaller property (up to 500m²) with normal contamination can be cleared in 1-2 working days. Medium properties (500-2000m²) usually require 2-5 days. For larger properties or heavily overgrown areas, clearance may take a week or more.",
            },
            {
              question: "What happens to cleared wood and green waste?",
              answer:
                "We handle cleared wood and green waste according to your preferences: 1) Wood can be left on site cut into smaller pieces as firewood, 2) Branches and smaller trees can be chipped on site and used as mulch, or we can remove it, 3) All green waste can be taken to the nearest composting facility for eco-friendly processing.",
            },
          ]}
          callToActionText="Questions about land clearance? Get in touch"
        />
      </div>

      <div>
        <CTA
          title="Unlock the potential of your property"
          description="Transform a neglected property into a valuable space for construction, gardening, or sale. Our team handles complete clearance, vegetation removal, and eco-friendly disposal of all waste. Get a quote today!"
          buttonText="Free site inspection"
        />
      </div>


      <RelatedServices
          title="Related Services"
          services={[{"title":"Home Clearance","description":"Complete home clearance — we remove everything you no longer need.","href":"/en/home-junk-removal","icon":"/icons/vypratavanie_icon.svg"},{"title":"Demolition Services","description":"Professional interior demolition, wall removal and site clearance.","href":"/en/demolition-services","icon":"/icons/crane_icon.svg"},{"title":"Construction Waste Removal","description":"Quick removal of construction debris, rubble and building waste.","href":"/en/construction-waste-removal","icon":"/icons/recycle_icon.svg"},{"title":"Hazardous Waste Removal","description":"Safe and legal disposal of hazardous materials and old appliances.","href":"/en/hazardous-waste-removal","icon":"/icons/hazmat_icon.svg"}]}
        />
      <ServicePricing filter={["clearance", "moving", "demolition"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
          <FAQJsonLd items={faqItems} />
    </main>
  );
}
