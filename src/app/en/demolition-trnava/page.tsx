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
  title: "Demolition Services Trnava | Sofoservis",
  description:
    "We offer comprehensive demolition services in Trnava ✅ Free site inspection ✅ Affordable and fair prices ✅ Contact us today!",
  keywords:
    "demolition trnava, demolition services trnava, building demolition Trnava, house demolition Trnava",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/demolition-trnava",
    languages: {
      sk: "https://www.sofoservis.sk/buracie-demolacne-prace/trnava",
      en: "https://www.sofoservis.sk/en/demolition-trnava",
      "x-default": "https://www.sofoservis.sk/buracie-demolacne-prace/trnava",
      },
  },
};

export default function DemolitionTrnavaPage() {
  const faqItems = [
            {
              question: "What permits do I need for demolition work in Trnava?",
              answer:
                "Demolition work typically requires a demolition permit issued by the local building authority. Our company will help you prepare the necessary documentation and communicate with the relevant offices.",
            },
            {
              question: "How much do demolition services cost in Trnava?",
              answer:
                "Prices depend on the size and type of building, materials used, accessibility, and the amount of waste. For smaller structures like garages, prices start from €2,500. For family houses, prices typically range from €6,000 to €20,000. We offer a free on-site inspection for an accurate estimate.",
            },
            {
              question: "How long does demolition take in Trnava?",
              answer:
                "For an average family house (100-150m²), the work takes 3-7 days. This includes preparation, main demolition, waste sorting, and removal. Administrative preparation for permits may take 30-90 days.",
            },
            {
              question: "Do you handle smaller demolition jobs in Trnava?",
              answer:
                "Yes, besides complete demolitions, we also handle smaller jobs such as wall demolition, partition removal, bathroom renovation demolition, and floor removal. We use modern techniques to minimize noise and dust.",
            },
          ];
  const heroData = {
    title: "Demolition Services in Trnava",
    description:
      "Professional demolition services in Trnava and surrounding areas. We ensure safe demolition of houses, buildings, barns and other structures.",
    formTitle: "Get a free price quote",
    formSubtitle: "Fill out the form for a no-obligation estimate in Trnava",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Demolition Services in Trnava and Surroundings",
    description:
      "We offer a wide range of demolition services in Trnava and surrounding areas.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "House Demolition in Trnava",
        description:
          "Complete demolition of old houses in Trnava with emphasis on safety. We handle all necessary permits and documentation.",
        link: "/en/demolition-services",
      },
      {
        image: "/icons/landscape_icon.svg",
        title: "Agricultural Building Demolition",
        description:
          "We specialize in demolition of agricultural buildings and barns. Old structures removed quickly and efficiently.",
        link: "/en/demolition-services",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Commercial Building Demolition",
        description:
          "Professional demolition of commercial and industrial buildings in Trnava following a detailed plan.",
        link: "/en/demolition-services",
      },
      {
        image: "/icons/container_icon.svg",
        title: "Construction Waste Removal",
        description:
          "Complete services for removal and ecological disposal of construction waste in Trnava and surrounding areas.",
        link: "/en/construction-waste-removal",
      },
      {
        image: "/icons/hammer_icon.svg",
        title: "Wall & Partition Demolition",
        description:
          "We perform interior wall and partition demolition in apartments and houses. Ideal for renovations or layout changes.",
        link: "/en/demolition-services",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Ecological Disposal & Recycling",
        description:
          "We carefully sort, recycle, and ecologically dispose of construction waste in compliance with environmental regulations.",
        link: "/en/demolition-services",
      },
    ],
  };

  return (
    <main className="bg-white">
      <Hero
        title={heroData.title}
        description={heroData.description}
        formTitle={heroData.formTitle}
        formSubtitle={heroData.formSubtitle}
        backgroundImage={heroData.backgroundImage}
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
          title={featuresData.title}
          description={featuresData.description}
          features={featuresData.features}
          callToActionText="Get a Free Quote"
        />
      </div>

      <div>
        <LocationMap
          title="We Serve All of Trnava"
          description="Our demolition services are available throughout Trnava"
          locations={["Trnava city center","Špačince","Bohdanovce","Bučany","Zavar","Malženice","Jaslovské Bohunice","Voderady","Zeleneč","Hrnčiarovce nad Parnou","Biely Kostol","Ružindol"]}
          additionalText="We also serve Hlohovec, Sereď, Piešťany, and other surrounding towns."
        />
      </div>

      <div>
        <InstagramFeed title="Follow Us on Instagram" />
      </div>

      <div>
        <GoogleReviews
          title="Customer Reviews"
          showReviewsShowcase={false}
        />
      </div>

      <div>
        <FAQ
          title="Frequently Asked Questions About Demolition in Trnava"
          items={[
            {
              question: "What permits do I need for demolition work in Trnava?",
              answer:
                "Demolition work typically requires a demolition permit issued by the local building authority. Our company will help you prepare the necessary documentation and communicate with the relevant offices.",
            },
            {
              question: "How much do demolition services cost in Trnava?",
              answer:
                "Prices depend on the size and type of building, materials used, accessibility, and the amount of waste. For smaller structures like garages, prices start from €2,500. For family houses, prices typically range from €6,000 to €20,000. We offer a free on-site inspection for an accurate estimate.",
            },
            {
              question: "How long does demolition take in Trnava?",
              answer:
                "For an average family house (100-150m²), the work takes 3-7 days. This includes preparation, main demolition, waste sorting, and removal. Administrative preparation for permits may take 30-90 days.",
            },
            {
              question: "Do you handle smaller demolition jobs in Trnava?",
              answer:
                "Yes, besides complete demolitions, we also handle smaller jobs such as wall demolition, partition removal, bathroom renovation demolition, and floor removal. We use modern techniques to minimize noise and dust.",
            },
          ]}
        />
      </div>

      <div>
        <CTA
          title="Need demolition services in Trnava?"
          description="Trust your demolition work to experienced professionals. We handle all permits, safe demolition, waste removal, and ecological disposal. Get a free site inspection and no-obligation quote today."
          buttonText="Get a free quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[{"title":"Demolition Services","description":"Professional demolition of buildings and structures.","href":"/en/demolition-services","icon":"/icons/wrecking_ball_icon.svg"},{"title":"Wall Demolition","description":"Expert removal of walls and partitions.","href":"/en/wall-demolition","icon":"/icons/hammer_icon.svg"},{"title":"Construction Waste Removal","description":"Fast removal and ecological disposal of all construction waste.","href":"/en/construction-waste-removal","icon":"/icons/container_icon.svg"},{"title":"Home Clearance","description":"Complete clearance before or after demolition.","href":"/en/home-junk-removal","icon":"/icons/vypratavanie_icon.svg"}]}
      />

      <ServicePricing filter={["demolition", "clearance", "moving"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
          <FAQJsonLd items={faqItems} />
    </main>
  );
}
