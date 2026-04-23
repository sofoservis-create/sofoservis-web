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
  title: "Furniture Assembly & Disassembly Services | Sofoservis",
  description:
    "Professional furniture assembly, disassembly, and installation services ✅ Cheap and fair prices ✅ Contact us today!",
  keywords:
    "furniture assembly, furniture disassembly, IKEA assembly, flat pack assembly, wardrobe assembly, bed assembly, furniture installation",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/furniture-assembly",
    languages: {
      sk: "https://www.sofoservis.sk/montaz-nabytku",
      en: "https://www.sofoservis.sk/en/furniture-assembly",
      "x-default": "https://www.sofoservis.sk/montaz-nabytku",
      },
  },
  openGraph: {
    title: "Furniture Assembly & Disassembly Services | Sofoservis",
    description:
      "Professional furniture assembly services for all brands. Fast, precise, and affordable!",
    url: "https://www.sofoservis.sk/en/furniture-assembly",
    siteName: "Sofoservis",
    locale: "en_US",
    type: "website",
  },
};

export default function FurnitureAssemblyPage() {
  const faqItems = [
            {
              question:
                "How long does it take to assemble typical furniture?",
              answer:
                "Assembly time depends on the type and complexity of the furniture. For reference: simple dresser or nightstand: 30-60 minutes; bed: 45-90 minutes; standard wardrobe: 1.5-3 hours. Kitchen installation requires 2-3 working days as it involves complex work including precise measurements, cabinet mounting, appliance fitting, and finishing work.",
            },
            {
              question: "How much does furniture assembly cost?",
              answer:
                "The price depends on several factors: type and complexity of furniture, number of parts, time needed, and location. Our approximate prices: smaller items (table, shelf): €20-40; medium furniture (bed, dresser): €40-70; wardrobe: €90/m; kitchen: from €120/m (including appliance fitting, not connection). For larger projects we offer package deals.",
            },
            {
              question:
                "Do you only assemble furniture from specific stores?",
              answer:
                "No, we assemble furniture from all manufacturers and stores. We have extensive experience with furniture from IKEA, JYSK, Asko, Mobelix, Sconto, and many other retailers. We handle custom furniture equally well. Our team is trained to work with various assembly systems and can adapt to any instructions.",
            },
            {
              question:
                "Do I need to have my own tools for furniture assembly?",
              answer:
                "No, you do not need your own tools. Our assembly technicians come fully equipped with all necessary professional tools for assembling any type of furniture. We have complete sets of screwdrivers, wrenches, drills, saws, and other specialized tools. Just have the furniture ready (ideally still in original packaging) and ensure sufficient space for assembly.",
            },
            {
              question:
                "How do I order furniture assembly?",
              answer:
                "Ordering our services is simple. You can contact us by phone at 0952 044 363, fill out the contact form on our website, or send us an email. When ordering, it is helpful to provide: type and quantity of furniture, preferred date, exact address, and any specific requirements. After receiving your request, we will contact you to confirm the date and arrange details.",
            },
          ];
  const featuresData = {
    title: "Comprehensive Furniture Assembly Services",
    description:
      "Professional furniture assembly for all brands with our own tools and experienced team. Fast and quality assembly for your home.",
    features: [
      {
        image: "/icons/wrench_icon.svg",
        title: "Furniture Assembly & Installation",
        description:
          "Expert assembly of furniture from IKEA, JYSK, Asko, and other brands. We assemble any type of furniture according to instructions quickly and precisely.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/kitchen_icon.svg",
        title: "Kitchen Installation",
        description:
          "Complete kitchen installation including appliances and connections. Precise installation according to the project with a functional result.",
        link: "/en/kitchen-installation",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Furniture Moving",
        description:
          "Professional furniture disassembly before moving and reassembly at the new location. Safe transport and installation.",
        link: "/en/furniture-moving-removal",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Apartment & House Moving",
        description:
          "Complete moving services including furniture disassembly and assembly. We move your home with full service.",
        link: "/en/apartment-moving",
      },
      {
        image: "/icons/curtain_icon.svg",
        title: "Curtain Rod & Blind Installation",
        description:
          "Professional installation of curtain rods, hanging systems, and blinds. We ensure proper mounting to all types of walls with appropriate fixings.",
        link: "/en/furniture-assembly",
      },
      {
        image: "/icons/repair_icon.svg",
        title: "Furniture Repairs & Adjustments",
        description:
          "Minor repairs, adjustments, and finishing work on your furniture. We fix issues, drill cable holes, and ensure a perfect look.",
        link: "/en/handyman-services",
      },
    ],
  };

  return (
    <main className="bg-white">
      <link rel="preload"
        href="/images/mascot/montaz-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/montaz-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)" fetchPriority="high" />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title="Furniture Assembly & Disassembly"
          description="Professional furniture assembly, disassembly, and installation services for all types of furniture. Our experienced experts handle new furniture assembly or disassembly and relocation of existing furniture quickly, precisely, and without damage."
          formTitle="Get a free price quote"
          formSubtitle="Fill out the form for a no-obligation calculation"
          backgroundImage="/images/stahovanie-gauc.avif"
          badgeText="Services available 6 days a week"
          ratingText="Over 3500+ satisfied customers"
          benefits={[
          "All furniture brands",
          "Own professional tools",
          "Fast and precise",
        ]}
          lang="en"
          mascotSrc="/images/mascot/montaz-mascot.svg"
          desktopMascotDynamicHeight
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Furniture Assembly & Disassembly"
          description="Professional furniture assembly, disassembly, and installation services for all types of furniture. Our experienced experts handle new furniture assembly or disassembly and relocation of existing furniture quickly, precisely, and without damage."
          formTitle="Get a free price quote"
          formSubtitle="Fill out the form for a no-obligation calculation"
          backgroundImage="/images/stahovanie-gauc.avif"
          badgeText="Services available 6 days a week"
          ratingText="Over 3500+ satisfied customers"
          benefits={[
          "All furniture brands",
          "Own professional tools",
          "Fast and precise",
        ]}
          phoneCTAText="Call us now"
          phoneNumber="0952 044 363"
          hoursText="6 days a week 8:00-17:00"
          lang="en"
          showMascot
          mascotSrc="/images/mascot/montaz-mascot.svg"
          mobileMascotSrc="/images/mascot/montaz-mascot.svg"
          mobileMascotOffsetY={-45}
          mobileFormOffsetY={32}
          pillsVariant="hodinovy"
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
          title="Frequently Asked Questions About Furniture Assembly"
          items={[
            {
              question:
                "How long does it take to assemble typical furniture?",
              answer:
                "Assembly time depends on the type and complexity of the furniture. For reference: simple dresser or nightstand: 30-60 minutes; bed: 45-90 minutes; standard wardrobe: 1.5-3 hours. Kitchen installation requires 2-3 working days as it involves complex work including precise measurements, cabinet mounting, appliance fitting, and finishing work.",
            },
            {
              question: "How much does furniture assembly cost?",
              answer:
                "The price depends on several factors: type and complexity of furniture, number of parts, time needed, and location. Our approximate prices: smaller items (table, shelf): €20-40; medium furniture (bed, dresser): €40-70; wardrobe: €90/m; kitchen: from €120/m (including appliance fitting, not connection). For larger projects we offer package deals.",
            },
            {
              question:
                "Do you only assemble furniture from specific stores?",
              answer:
                "No, we assemble furniture from all manufacturers and stores. We have extensive experience with furniture from IKEA, JYSK, Asko, Mobelix, Sconto, and many other retailers. We handle custom furniture equally well. Our team is trained to work with various assembly systems and can adapt to any instructions.",
            },
            {
              question:
                "Do I need to have my own tools for furniture assembly?",
              answer:
                "No, you do not need your own tools. Our assembly technicians come fully equipped with all necessary professional tools for assembling any type of furniture. We have complete sets of screwdrivers, wrenches, drills, saws, and other specialized tools. Just have the furniture ready (ideally still in original packaging) and ensure sufficient space for assembly.",
            },
            {
              question:
                "How do I order furniture assembly?",
              answer:
                "Ordering our services is simple. You can contact us by phone at 0952 044 363, fill out the contact form on our website, or send us an email. When ordering, it is helpful to provide: type and quantity of furniture, preferred date, exact address, and any specific requirements. After receiving your request, we will contact you to confirm the date and arrange details.",
            },
          ]}
          callToActionText="Questions about assembly? Get in touch"
        />
      </div>

      <div>
        <CTA
          title="Need professional furniture assembly?"
          description="Save your time, nerves, and energy when assembling furniture. Our experts will assemble your furniture quickly, precisely, and without damage. Whether it is new furniture from a store or relocating existing furniture, rely on professionals."
          buttonText="Order furniture assembly"
          imageSrc="/images/sofoservis montaz.jpg"
        />
      </div>


      <RelatedServices
          title="Related Services"
          services={[{"title":"Apartment Moving","description":"Professional home and apartment relocation services.","href":"/en/apartment-moving","icon":"/icons/house_icon.svg"},{"title":"Handyman Services","description":"Professional repairs, installations and maintenance for your home.","href":"/en/handyman-services","icon":"/icons/repair_icon.svg"},{"title":"Kitchen Installation","description":"Expert kitchen assembly and installation.","href":"/en/kitchen-installation","icon":"/icons/kitchen_icon.svg"},{"title":"Old Furniture Removal","description":"Fast pickup and eco-friendly disposal of old furniture.","href":"/en/furniture-removal","icon":"/icons/truck_icon.svg"}]}
        />
      <ServicePricing filter={["furniture-assembly", "handyman", "moving"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
          <FAQJsonLd items={faqItems} />
    </main>
  );
}
