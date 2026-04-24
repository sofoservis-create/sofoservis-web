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
  title: "Home Junk Removal — Apartments & Houses | Sofoservis",
  description:
    "Professional junk removal services for apartments and houses ✅ Cheap and fair prices ✅ Free site inspection ✅ Contact us today!",
  keywords:
    "junk removal, house junk removal, apartment junk removal, property junk removal, furniture removal, junk removal, estate junk removal",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/home-junk-removal",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-bytov-domov",
      en: "https://www.sofoservis.sk/en/home-junk-removal",
      "x-default": "https://www.sofoservis.sk/vypratavanie-bytov-domov",
      },
  },
  openGraph: {
    title: "Home Junk Removal Services - Apartments & Houses | Sofoservis",
    description:
      "Professional junk removal services with free estimates. Fast, reliable, and eco-friendly disposal!",
    url: "https://www.sofoservis.sk/en/home-junk-removal",
    siteName: "Sofoservis",
    locale: "en_US",
    type: "website",
  },
};

export default function HomeJunkRemovalPage() {
  const faqItems = [
            {
              question: "How does the junk removal process work?",
              answer:
                "The process begins with a free site inspection where we estimate the scope of work and prepare a quote. After agreement, we set a date for junk removal. On the agreed day, our team arrives with all necessary materials and equipment. We work systematically: first sorting items according to your requirements (what to keep, donate, or dispose of), then packing and removing all unwanted materials, and finally cleaning the space.",
            },
            {
              question:
                "What is the price for clearing an apartment or house?",
              answer:
                "The price depends on several factors: size of the space, amount of items to clear, accessibility (floor level, elevator), type of waste (regular, construction, hazardous), and additional services needed (cleaning, disinfection). For a standard 2-bedroom apartment, prices range from €350 to €700, for a family house from €600 to €1,500. We provide a non-binding quote after a free site inspection.",
            },
            {
              question:
                "How long does it take to clear an apartment or house?",
              answer:
                "The duration depends on the size of the space and amount of items. A standard 2-bedroom apartment usually takes 1 day (4-8 hours). Larger houses or apartments with many items may require 2-3 days. For particularly large properties like old family houses with accumulated belongings, junk removal may take several days.",
            },
            {
              question:
                "What do you do with functional items and furniture?",
              answer:
                "We handle functional furniture and usable items according to your preferences. We offer several options: 1) Keeping and moving items to a location of your choice, 2) Donating to charities or families in need, or 3) Eco-friendly disposal. We aim to minimize waste and prioritize further use of items that are still in good condition.",
            },
            {
              question: "Do you provide estate junk removal services?",
              answer:
                "Yes, we specialize in sensitive and discreet estate junk removal. We understand this is an emotionally difficult situation, so we approach this service with maximum empathy and respect. We help you sort personal items, documents, and valuables from unwanted items. We ensure careful and dignified junk removal of the space including possible cleaning and disinfection.",
            },
          ];
  const featuresData = {
    title: "Comprehensive Home Junk Removal Services",
    description:
      "Professional property junk removal with responsible disposal and recycling of unwanted items. We save you time and energy.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Complete Home Junk Removal",
        description:
          "We clear entire apartments or houses including all rooms, basements, and attics. We sort items and handle disposal or donation.",
        link: "/en/home-junk-removal",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Basement Basement & Garage Junk Removal Garage Junk Removal",
        description:
          "We specialize in clearing basements, garages, and storage areas. We remove all unwanted items and ensure clean spaces.",
        link: "/en/basement-garage-junk-removal",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Old Furniture Removal & Disposal",
        description:
          "Professional removal of old furniture, appliances, and equipment. We ensure environmentally responsible disposal of all materials.",
        link: "/en/furniture-removal",
      },
      {
        image: "/icons/landscape_icon.svg",
        title: "Property Property & Land Junk Removal Land Junk Removal",
        description:
          "We clear your properties and land of unwanted items, construction waste, and overgrown vegetation. We prepare the site for further use.",
        link: "/en/property-land-junk-removal",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Hazardous Waste Removal",
        description:
          "Safe disposal of hazardous waste, old appliances, batteries, paints, and chemicals according to current regulations.",
        link: "/en/hazardous-waste-removal",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Construction Waste Removal",
        description:
          "After junk removal, we also handle construction waste removal, rubble, and demolition materials. Complete service in one place.",
        link: "/en/construction-waste-removal",
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
          title="Home Junk Removal Services"
          description="Comprehensive services for fast and efficient junk removal of apartments, houses, and properties. Our professional team handles everything from sorting items, through packing and removal, to eco-friendly disposal of unwanted waste."
          formTitle="Get a free price quote"
          formSubtitle="Fill out the form for a no-obligation calculation"
          backgroundImage="/images/stahovanie-gauc.avif"
          badgeText="Services available 6 days a week"
          ratingText="Over 3500+ satisfied customers"
          benefits={[
          "Free site inspection",
          "Eco-friendly disposal",
          "Complete service",
        ]}
          lang="en"
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
          title="Home Junk Removal Services"
          description="Comprehensive services for fast and efficient junk removal of apartments, houses, and properties. Our professional team handles everything from sorting items, through packing and removal, to eco-friendly disposal of unwanted waste."
          formTitle="Get a free price quote"
          formSubtitle="Fill out the form for a no-obligation calculation"
          backgroundImage="/images/stahovanie-gauc.avif"
          badgeText="Services available 6 days a week"
          ratingText="Over 3500+ satisfied customers"
          benefits={[
          "Free site inspection",
          "Eco-friendly disposal",
          "Complete service",
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
          title="Frequently Asked Questions About Home Junk Removal"
          items={[
            {
              question: "How does the junk removal process work?",
              answer:
                "The process begins with a free site inspection where we estimate the scope of work and prepare a quote. After agreement, we set a date for junk removal. On the agreed day, our team arrives with all necessary materials and equipment. We work systematically: first sorting items according to your requirements (what to keep, donate, or dispose of), then packing and removing all unwanted materials, and finally cleaning the space.",
            },
            {
              question:
                "What is the price for clearing an apartment or house?",
              answer:
                "The price depends on several factors: size of the space, amount of items to clear, accessibility (floor level, elevator), type of waste (regular, construction, hazardous), and additional services needed (cleaning, disinfection). For a standard 2-bedroom apartment, prices range from €350 to €700, for a family house from €600 to €1,500. We provide a non-binding quote after a free site inspection.",
            },
            {
              question:
                "How long does it take to clear an apartment or house?",
              answer:
                "The duration depends on the size of the space and amount of items. A standard 2-bedroom apartment usually takes 1 day (4-8 hours). Larger houses or apartments with many items may require 2-3 days. For particularly large properties like old family houses with accumulated belongings, junk removal may take several days.",
            },
            {
              question:
                "What do you do with functional items and furniture?",
              answer:
                "We handle functional furniture and usable items according to your preferences. We offer several options: 1) Keeping and moving items to a location of your choice, 2) Donating to charities or families in need, or 3) Eco-friendly disposal. We aim to minimize waste and prioritize further use of items that are still in good condition.",
            },
            {
              question: "Do you provide estate junk removal services?",
              answer:
                "Yes, we specialize in sensitive and discreet estate junk removal. We understand this is an emotionally difficult situation, so we approach this service with maximum empathy and respect. We help you sort personal items, documents, and valuables from unwanted items. We ensure careful and dignified junk removal of the space including possible cleaning and disinfection.",
            },
          ]}
          callToActionText="Questions about junk removal? Get in touch"
        />
      </div>

      <div>
        <CTA
          title="Need professional junk removal?"
          description="Let our experienced team handle everything - from sorting items to final cleaning of the space. Contact us today for a free consultation."
          buttonText="Get a free quote"
        />
      </div>


      <RelatedServices
          title="Related Services"
          services={[{"title":"Home Junk Removal","description":"Complete home junk removal — we remove everything you no longer need.","href":"/en/home-junk-removal","icon":"/icons/vypratavanie_icon.svg"},{"title":"Old Furniture Removal","description":"Fast pickup and eco-friendly disposal of old furniture.","href":"/en/furniture-removal","icon":"/icons/truck_icon.svg"},{"title":"Construction Waste Removal","description":"Quick removal of construction debris, rubble and building waste.","href":"/en/construction-waste-removal","icon":"/icons/recycle_icon.svg"},{"title":"Hazardous Waste Removal","description":"Safe and legal disposal of hazardous materials and old appliances.","href":"/en/hazardous-waste-removal","icon":"/icons/hazmat_icon.svg"}]}
        />
      <ServicePricing filter={["junk removal", "moving", "demolition"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
          <FAQJsonLd items={faqItems} />
    </main>
  );
}
