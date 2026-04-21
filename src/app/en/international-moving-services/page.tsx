import React from "react";
import Link from "next/link";
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
  title: "International Moving Services | Sofoservis",
  description:
    "We offer professional international moving services ✅ Cheap and fair prices ✅ Free site inspection ✅ Contact us today for a quote!",
  keywords:
    "international moving, international moving company, international moving services, moving austria, moving belgium, moving france, moving germany, moving italy, moving spain, moving czech republic, moving poland, moving switzerland, moving united kingdom",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/international-moving-services",
    languages: {
      sk: "https://www.sofoservis.sk/medzinarodne-stahovanie",
      en: "https://www.sofoservis.sk/en/international-moving-services",
      "x-default": "https://www.sofoservis.sk/medzinarodne-stahovanie",
      },
  },
};

export default function InternationalMovingServicesPage() {
  const faqItems = [
            {
              question:
                "How far in advance should I plan my international move?",
              answer:
                "We recommend planning international relocations at least 1-2 weeks in advance, ideally 3-4 weeks. For moves to more distant countries or outside the EU, it's advisable to start preparations even earlier. Earlier planning allows you to secure an optimal date and get a better price. In urgent cases, however, we can also arrange express international moving, especially for the closest countries such as the Czech Republic, Austria, or Germany.",
            },
            {
              question: "What documents do I need when moving abroad?",
              answer:
                "When moving within the EU, you usually need an ID card or passport and a list of transported items (inventory). For countries outside the EU, additional documents may be required such as customs declarations, certificates of origin, invoices, or purchase documents for more valuable items. In some cases, special permits may be required for transporting certain types of items. Our coordinators will prepare a precise list of documents needed for your specific destination.",
            },
            {
              question:
                "How are my belongings protected during international transport?",
              answer:
                "For international transport, we use specially reinforced cardboard boxes, bubble wrap, protective foam materials, and wooden crates for fragile items. Each piece of furniture is individually wrapped and protected. In the transport vehicle, all items are secured against movement using straps and fixation devices. Additionally, all transported property is insured throughout the entire international transport route, providing you with additional financial protection.",
            },
            {
              question: "Can you also transport vehicles abroad?",
              answer:
                "Yes, as part of our international moving services, we can also arrange transport of personal cars, motorcycles, and other vehicles. Transport takes place on special car transporters or using towing services, depending on the type of vehicle and destination. We also provide all necessary documentation and insurance for vehicle transport. This service is ideal if you're moving abroad permanently and need to relocate your vehicle as well.",
            },
            {
              question: "Are there restrictions on what I can move abroad?",
              answer:
                "Yes, individual countries have their specific restrictions and regulations. Within the EU, the transfer of personal belongings is usually without restrictions, but there are regulations for certain categories of items such as weapons, medicines, alcohol above certain quantities, artworks, antiques, and protected species of plants or animals. Countries outside the EU may have stricter rules and customs regulations. We will always provide you with up-to-date information on restrictions for your destination country and help you prepare all necessary documents for the legal transfer of your belongings.",
            },
          ];
  // Custom data for Features section
  const featuresData = {
    title: "Comprehensive International Moving Solutions",
    description:
      "We offer solutions for both personal and business relocations to and from abroad with all necessary services in one place.",
    features: [
      {
        image: "/icons/globe_icon.svg",
        title: "Moving to Slovakia",
        description:
          "Relocating to Slovakia from the UK, Germany, Austria, Netherlands, France, or USA? We manage the full move door-to-door.",
        link: "/en/moving-to-slovakia",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Moving from Slovakia",
        description:
          "Leaving Slovakia for Austria, Germany, UK, Switzerland, Netherlands, France, Ireland, Sweden, or Norway? We've got you covered.",
        link: "/en/moving-from-slovakia",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Transport of Individual Furniture Pieces",
        description:
          "We also provide transport of individual furniture pieces and smaller shipments abroad. An ideal solution when you need to move only part of your household.",
        link: "/en/furniture-moving-removal",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Customs Formalities and Documentation",
        description:
          "We'll help you prepare all necessary documents for smooth border crossing and customs clearance. Our experienced staff knows what permits and documents are required.",
        link: "/en/international-moving-services",
      },
      {
        image: "/icons/packing_box_icon.svg",
        title: "Packing and Protection for Long Routes",
        description:
          "For international moving, we use specially reinforced packaging and protective materials that ensure the safety of your belongings even on long routes across multiple countries.",
        link: "/en/international-moving-services",
      },
      {
        image: "/icons/insurance_icon.svg",
        title: "Insurance for International Transport",
        description:
          "Complete insurance of your property during the entire route of international transport. We guarantee safe transport and financial coverage in case of unforeseen events.",
        link: "/en/international-moving-services",
      },
    ],
  };

  // European countries we service
  const europeanCountries = [
    "Austria",
    "Belgium",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Hungary",
    "Ireland",
    "Italy",
    "Latvia",
    "Lithuania",
    "Luxembourg",
    "Malta",
    "Netherlands",
    "Poland",
    "Portugal",
    "Romania",
    "Slovenia",
    "Spain",
    "Sweden",
    "Switzerland",
    "United Kingdom",
  ];

  return (
    <main className="bg-white">
      {/* Preload hero mascot SVG for instant paint with other hero elements */}
      <link
        rel="preload"
        href="/images/mascot/mascot-holding-boxes-mobile.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)"
      />
      <link
        rel="preload"
        href="/images/mascot/mascot-holding-boxes.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)"
      />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title="International Moving Services"
          description="Comprehensive services for relocating to and from abroad with minimum hassle. We ensure professional transport of your household or business anywhere in Europe with all necessary formalities handled for you."
          formTitle="Get a Free Quote"
          formSubtitle="Fill out the form for a no-obligation estimate"
          benefits={[]}
          ratingText="3500+ satisfied customers"
          lang="en"
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          desktopMascotScaleMultiplier={1.03}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="International Moving Services"
          description="Comprehensive services for relocating to and from abroad with minimum hassle. We ensure professional transport of your household or business anywhere in Europe with all necessary formalities handled for you."
          formTitle="Get a Free Quote"
          formSubtitle="Fill out the form for a no-obligation estimate"
          benefits={[]}
          ratingText="3500+ satisfied customers"
          lang="en"
          showMascot
          mascotSrc="/images/mascot/mascot-holding-boxes.svg"
          mobileMascotSrc="/images/mascot/mascot-holding-boxes-mobile.svg"
          mobileMascotOffsetY={-44}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>

      {/* Clients section */}
      <div>
        <Clients />
      </div>

      {/* Google Reviews section */}
      <div>
        <GoogleReviews
          title="Trusted International Moving Services"
        />
      </div>

      {/* Reviews section */}
      <div>
        <Reviews showHeadline={true} callToActionText="Get a Quote" />
      </div>

      {/* Features section */}
      <div>
        <Features
          title={featuresData.title}
          description={featuresData.description}
          features={featuresData.features}
          callToActionText="Get a Free Quote"
        />
      </div>

      {/* Route directory section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Find Your Route
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Browse our dedicated route pages for detailed information about your specific move. Each page includes pricing guidance, transit times, customs info, and a direct quote form.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Moving TO Slovakia */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-orange-500">
                Moving TO Slovakia
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/en/moving-to-slovakia" className="text-orange-600 hover:text-orange-700 font-medium block py-1">
                    Moving to Slovakia (hub)
                  </Link>
                </li>
                <li>
                  <Link href="/en/moving-from-uk-to-slovakia" className="text-gray-700 hover:text-orange-600 block py-1 pl-3">
                    From UK to Slovakia
                  </Link>
                </li>
                <li>
                  <Link href="/en/moving-from-germany-to-slovakia" className="text-gray-700 hover:text-orange-600 block py-1 pl-3">
                    From Germany to Slovakia
                  </Link>
                </li>
                <li>
                  <Link href="/en/moving-from-austria-to-slovakia" className="text-gray-700 hover:text-orange-600 block py-1 pl-3">
                    From Austria to Slovakia
                  </Link>
                </li>
                <li>
                  <Link href="/en/moving-from-netherlands-to-slovakia" className="text-gray-700 hover:text-orange-600 block py-1 pl-3">
                    From Netherlands to Slovakia
                  </Link>
                </li>
                <li>
                  <Link href="/en/moving-from-france-to-slovakia" className="text-gray-700 hover:text-orange-600 block py-1 pl-3">
                    From France to Slovakia
                  </Link>
                </li>
                <li>
                  <Link href="/en/moving-from-usa-to-slovakia" className="text-gray-700 hover:text-orange-600 block py-1 pl-3">
                    From USA to Slovakia
                  </Link>
                </li>
              </ul>
            </div>

            {/* Moving FROM Slovakia */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-orange-500">
                Moving FROM Slovakia
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/en/moving-from-slovakia" className="text-orange-600 hover:text-orange-700 font-medium block py-1">
                    Moving from Slovakia (hub)
                  </Link>
                </li>
                <li>
                  <Link href="/en/moving-from-slovakia-to-austria" className="text-gray-700 hover:text-orange-600 block py-1 pl-3">
                    Slovakia to Austria
                  </Link>
                </li>
                <li>
                  <Link href="/en/moving-from-slovakia-to-germany" className="text-gray-700 hover:text-orange-600 block py-1 pl-3">
                    Slovakia to Germany
                  </Link>
                </li>
                <li>
                  <Link href="/en/moving-from-slovakia-to-uk" className="text-gray-700 hover:text-orange-600 block py-1 pl-3">
                    Slovakia to UK
                  </Link>
                </li>
                <li>
                  <Link href="/en/moving-from-slovakia-to-switzerland" className="text-gray-700 hover:text-orange-600 block py-1 pl-3">
                    Slovakia to Switzerland
                  </Link>
                </li>
                <li>
                  <Link href="/en/moving-from-slovakia-to-netherlands" className="text-gray-700 hover:text-orange-600 block py-1 pl-3">
                    Slovakia to Netherlands
                  </Link>
                </li>
                <li>
                  <Link href="/en/moving-from-slovakia-to-france" className="text-gray-700 hover:text-orange-600 block py-1 pl-3">
                    Slovakia to France
                  </Link>
                </li>
                <li>
                  <Link href="/en/moving-from-slovakia-to-ireland" className="text-gray-700 hover:text-orange-600 block py-1 pl-3">
                    Slovakia to Ireland
                  </Link>
                </li>
                <li>
                  <Link href="/en/moving-from-slovakia-to-sweden" className="text-gray-700 hover:text-orange-600 block py-1 pl-3">
                    Slovakia to Sweden
                  </Link>
                </li>
                <li>
                  <Link href="/en/moving-from-slovakia-to-norway" className="text-gray-700 hover:text-orange-600 block py-1 pl-3">
                    Slovakia to Norway
                  </Link>
                </li>
              </ul>
            </div>

            {/* Moving TO City */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-orange-500">
                Moving TO a City
              </h3>
              <ul className="space-y-2">
                <li><Link href="/en/moving-to-vienna" className="text-gray-700 hover:text-orange-600 block py-1">Moving to Vienna</Link></li>
                <li><Link href="/en/moving-to-prague" className="text-gray-700 hover:text-orange-600 block py-1">Moving to Prague</Link></li>
                <li><Link href="/en/moving-to-budapest" className="text-gray-700 hover:text-orange-600 block py-1">Moving to Budapest</Link></li>
                <li><Link href="/en/moving-to-munich" className="text-gray-700 hover:text-orange-600 block py-1">Moving to Munich</Link></li>
                <li><Link href="/en/moving-to-berlin" className="text-gray-700 hover:text-orange-600 block py-1">Moving to Berlin</Link></li>
                <li><Link href="/en/moving-to-frankfurt" className="text-gray-700 hover:text-orange-600 block py-1">Moving to Frankfurt</Link></li>
                <li><Link href="/en/moving-to-hamburg" className="text-gray-700 hover:text-orange-600 block py-1">Moving to Hamburg</Link></li>
                <li><Link href="/en/moving-to-zurich" className="text-gray-700 hover:text-orange-600 block py-1">Moving to Zurich</Link></li>
                <li><Link href="/en/moving-to-london" className="text-gray-700 hover:text-orange-600 block py-1">Moving to London</Link></li>
                <li><Link href="/en/moving-to-amsterdam" className="text-gray-700 hover:text-orange-600 block py-1">Moving to Amsterdam</Link></li>
                <li><Link href="/en/moving-to-brussels" className="text-gray-700 hover:text-orange-600 block py-1">Moving to Brussels</Link></li>
                <li><Link href="/en/moving-to-paris" className="text-gray-700 hover:text-orange-600 block py-1">Moving to Paris</Link></li>
                <li><Link href="/en/moving-to-dublin" className="text-gray-700 hover:text-orange-600 block py-1">Moving to Dublin</Link></li>
                <li><Link href="/en/moving-to-warsaw" className="text-gray-700 hover:text-orange-600 block py-1">Moving to Warsaw</Link></li>
                <li><Link href="/en/moving-to-barcelona" className="text-gray-700 hover:text-orange-600 block py-1">Moving to Barcelona</Link></li>
                <li><Link href="/en/moving-to-rome" className="text-gray-700 hover:text-orange-600 block py-1">Moving to Rome</Link></li>
                <li><Link href="/en/moving-to-stockholm" className="text-gray-700 hover:text-orange-600 block py-1">Moving to Stockholm</Link></li>
                <li><Link href="/en/moving-to-oslo" className="text-gray-700 hover:text-orange-600 block py-1">Moving to Oslo</Link></li>
                <li><Link href="/en/moving-to-copenhagen" className="text-gray-700 hover:text-orange-600 block py-1">Moving to Copenhagen</Link></li>
                <li><Link href="/en/moving-to-lisbon" className="text-gray-700 hover:text-orange-600 block py-1">Moving to Lisbon</Link></li>
              </ul>
            </div>
          </div>

          {/* Bratislava City Routes — separate row */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-orange-500 inline-block">
              Bratislava City Routes
            </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/en/moving-bratislava-vienna" className="text-gray-700 hover:text-orange-600 block py-1">
                    Bratislava → Vienna (60 km)
                  </Link>
                </li>
                <li>
                  <Link href="/en/moving-bratislava-budapest" className="text-gray-700 hover:text-orange-600 block py-1">
                    Bratislava → Budapest (200 km)
                  </Link>
                </li>
                <li>
                  <Link href="/en/moving-bratislava-prague" className="text-gray-700 hover:text-orange-600 block py-1">
                    Bratislava → Prague (330 km)
                  </Link>
                </li>
                <li>
                  <Link href="/en/moving-bratislava-munich" className="text-gray-700 hover:text-orange-600 block py-1">
                    Bratislava → Munich (360 km)
                  </Link>
                </li>
                <li>
                  <Link href="/en/moving-bratislava-warsaw" className="text-gray-700 hover:text-orange-600 block py-1">
                    Bratislava → Warsaw (660 km)
                  </Link>
                </li>
                <li>
                  <Link href="/en/moving-bratislava-berlin" className="text-gray-700 hover:text-orange-600 block py-1">
                    Bratislava → Berlin (690 km)
                  </Link>
                </li>
                <li>
                  <Link href="/en/moving-bratislava-zurich" className="text-gray-700 hover:text-orange-600 block py-1">
                    Bratislava → Zurich (800 km)
                  </Link>
                </li>
                <li>
                  <Link href="/en/moving-bratislava-brussels" className="text-gray-700 hover:text-orange-600 block py-1">
                    Bratislava → Brussels (1,150 km)
                  </Link>
                </li>
                <li>
                  <Link href="/en/moving-bratislava-amsterdam" className="text-gray-700 hover:text-orange-600 block py-1">
                    Bratislava → Amsterdam (1,200 km)
                  </Link>
                </li>
                <li>
                  <Link href="/en/moving-bratislava-paris" className="text-gray-700 hover:text-orange-600 block py-1">
                    Bratislava → Paris (1,300 km)
                  </Link>
                </li>
                <li>
                  <Link href="/en/moving-bratislava-london" className="text-gray-700 hover:text-orange-600 block py-1">
                    Bratislava → London (~1,500 km)
                  </Link>
                </li>
                <li>
                  <Link href="/en/moving-bratislava-dublin" className="text-gray-700 hover:text-orange-600 block py-1">
                    Bratislava → Dublin (sea incl.)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
      </section>

      {/* European Countries section */}
      <div>
        <LocationMap
          title="Our European Coverage"
          description="We provide international moving services to and from these countries"
          locations={europeanCountries}
          supporText="We also operate outside Bratislava:"
          callToActionText="We move in your area too, get a quote"
          additionalText="We can also arrange moving services to other countries outside Europe. Contact us for details about your specific destination."
        />
      </div>

      {/* Instagram Feed section */}
      <div>
        <InstagramFeed title="Follow Us on Instagram" />
      </div>

      {/* Google Reviews section */}
      <div>
        <GoogleReviews
          showReviewsShowcase={false}
          title="Reviews from Our International Clients"
        />
      </div>

      {/* FAQ section */}
      <div>
        <FAQ
          title="Frequently Asked Questions About International Moving"
          subtitle="Important information about moving your belongings between countries"
          items={[
            {
              question:
                "How far in advance should I plan my international move?",
              answer:
                "We recommend planning international relocations at least 1-2 weeks in advance, ideally 3-4 weeks. For moves to more distant countries or outside the EU, it's advisable to start preparations even earlier. Earlier planning allows you to secure an optimal date and get a better price. In urgent cases, however, we can also arrange express international moving, especially for the closest countries such as the Czech Republic, Austria, or Germany.",
            },
            {
              question: "What documents do I need when moving abroad?",
              answer:
                "When moving within the EU, you usually need an ID card or passport and a list of transported items (inventory). For countries outside the EU, additional documents may be required such as customs declarations, certificates of origin, invoices, or purchase documents for more valuable items. In some cases, special permits may be required for transporting certain types of items. Our coordinators will prepare a precise list of documents needed for your specific destination.",
            },
            {
              question:
                "How are my belongings protected during international transport?",
              answer:
                "For international transport, we use specially reinforced cardboard boxes, bubble wrap, protective foam materials, and wooden crates for fragile items. Each piece of furniture is individually wrapped and protected. In the transport vehicle, all items are secured against movement using straps and fixation devices. Additionally, all transported property is insured throughout the entire international transport route, providing you with additional financial protection.",
            },
            {
              question: "Can you also transport vehicles abroad?",
              answer:
                "Yes, as part of our international moving services, we can also arrange transport of personal cars, motorcycles, and other vehicles. Transport takes place on special car transporters or using towing services, depending on the type of vehicle and destination. We also provide all necessary documentation and insurance for vehicle transport. This service is ideal if you're moving abroad permanently and need to relocate your vehicle as well.",
            },
            {
              question: "Are there restrictions on what I can move abroad?",
              answer:
                "Yes, individual countries have their specific restrictions and regulations. Within the EU, the transfer of personal belongings is usually without restrictions, but there are regulations for certain categories of items such as weapons, medicines, alcohol above certain quantities, artworks, antiques, and protected species of plants or animals. Countries outside the EU may have stricter rules and customs regulations. We will always provide you with up-to-date information on restrictions for your destination country and help you prepare all necessary documents for the legal transfer of your belongings.",
            },
          ]}
          callToActionText="Planning an international move? Get a free quote"
        />
      </div>

      {/* CTA section */}
      <div>
        <CTA
          title="Moving Abroad? Get a Professional Quote"
          description="Our team specializes in international relocations. Contact us today for a detailed estimate tailored to your specific needs."
          buttonText="Request a Quote"
        />
      </div>
    

      <RelatedServices
          title="Related Services"
          services={[{"title":"Apartment Moving","description":"Professional home and apartment relocation services.","href":"/en/apartment-moving","icon":"/icons/house_icon.svg"},{"title":"Office Moving","description":"Efficient office and business relocation with minimal downtime.","href":"/en/office-moving","icon":"/icons/briefcase_icon.svg"},{"title":"Furniture Assembly","description":"Expert assembly and disassembly of all furniture types.","href":"/en/furniture-assembly","icon":"/icons/wrench_icon.svg"},{"title":"Home Clearance","description":"Complete home clearance — we remove everything you no longer need.","href":"/en/home-junk-removal","icon":"/icons/vypratavanie_icon.svg"}]}
        />
      <ServicePricing filter={["international-moving", "moving", "clearance"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
          <FAQJsonLd items={faqItems} />
    </main>
  );
}
