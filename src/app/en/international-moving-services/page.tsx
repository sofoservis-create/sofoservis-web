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
      <link rel="preload"
        href="/images/mascot/mascot-holding-boxes-mobile.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/mascot-holding-boxes.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)" fetchPriority="high" />

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

          {(() => {
            const chevron = (
              <svg
                className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            );
            const detailsCls =
              "group bg-white rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all open:shadow-md open:border-blue-500";
            const summaryCls =
              "relative cursor-pointer list-none p-5 pr-14 font-semibold text-gray-900 text-lg sm:text-xl text-center";
            const ulCls = "border-t border-gray-200 divide-y divide-gray-100";
            const itemCls =
              "flex items-baseline justify-between gap-4 px-5 py-3 hover:bg-gray-50 transition-colors group/item";
            const labelCls = "font-medium text-gray-900 group-hover/item:text-blue-600";
            const hubLabelCls = "font-semibold text-gray-900 group-hover/item:text-blue-600";
            const subCls = "text-sm text-gray-500 whitespace-nowrap";

            const toSlovakia: Array<{ href: string; label: string; hub?: boolean }> = [
              { href: "/en/moving-to-slovakia", label: "Moving to Slovakia (hub)", hub: true },
              { href: "/en/moving-from-uk-to-slovakia", label: "From UK to Slovakia" },
              { href: "/en/moving-from-germany-to-slovakia", label: "From Germany to Slovakia" },
              { href: "/en/moving-from-austria-to-slovakia", label: "From Austria to Slovakia" },
              { href: "/en/moving-from-netherlands-to-slovakia", label: "From Netherlands to Slovakia" },
              { href: "/en/moving-from-france-to-slovakia", label: "From France to Slovakia" },
              { href: "/en/moving-from-usa-to-slovakia", label: "From USA to Slovakia" },
            ];
            const fromSlovakia: Array<{ href: string; label: string; hub?: boolean }> = [
              { href: "/en/moving-from-slovakia", label: "Moving from Slovakia (hub)", hub: true },
              { href: "/en/moving-to-austria", label: "Slovakia to Austria" },
              { href: "/en/moving-to-germany", label: "Slovakia to Germany" },
              { href: "/en/moving-to-uk", label: "Slovakia to UK" },
              { href: "/en/moving-to-switzerland", label: "Slovakia to Switzerland" },
              { href: "/en/moving-to-netherlands", label: "Slovakia to Netherlands" },
              { href: "/en/moving-to-france", label: "Slovakia to France" },
              { href: "/en/moving-to-ireland", label: "Slovakia to Ireland" },
              { href: "/en/moving-to-sweden", label: "Slovakia to Sweden" },
              { href: "/en/moving-to-norway", label: "Slovakia to Norway" },
            ];
            const toCity: Array<{ href: string; label: string }> = [
              { href: "/en/moving-to-vienna", label: "Moving to Vienna" },
              { href: "/en/moving-to-prague", label: "Moving to Prague" },
              { href: "/en/moving-to-budapest", label: "Moving to Budapest" },
              { href: "/en/moving-to-munich", label: "Moving to Munich" },
              { href: "/en/moving-to-berlin", label: "Moving to Berlin" },
              { href: "/en/moving-to-frankfurt", label: "Moving to Frankfurt" },
              { href: "/en/moving-to-hamburg", label: "Moving to Hamburg" },
              { href: "/en/moving-to-zurich", label: "Moving to Zurich" },
              { href: "/en/moving-to-london", label: "Moving to London" },
              { href: "/en/moving-to-amsterdam", label: "Moving to Amsterdam" },
              { href: "/en/moving-to-brussels", label: "Moving to Brussels" },
              { href: "/en/moving-to-paris", label: "Moving to Paris" },
              { href: "/en/moving-to-dublin", label: "Moving to Dublin" },
              { href: "/en/moving-to-warsaw", label: "Moving to Warsaw" },
              { href: "/en/moving-to-barcelona", label: "Moving to Barcelona" },
              { href: "/en/moving-to-rome", label: "Moving to Rome" },
              { href: "/en/moving-to-stockholm", label: "Moving to Stockholm" },
              { href: "/en/moving-to-oslo", label: "Moving to Oslo" },
              { href: "/en/moving-to-copenhagen", label: "Moving to Copenhagen" },
              { href: "/en/moving-to-lisbon", label: "Moving to Lisbon" },
            ];
            const fromBratislava: Array<{ href: string; label: string; distance: string }> = [
              { href: "/en/moving-to-vienna", label: "Bratislava → Vienna", distance: "60 km" },
              { href: "/en/moving-to-budapest", label: "Bratislava → Budapest", distance: "200 km" },
              { href: "/en/moving-to-prague", label: "Bratislava → Prague", distance: "330 km" },
              { href: "/en/moving-to-munich", label: "Bratislava → Munich", distance: "360 km" },
              { href: "/en/moving-to-warsaw", label: "Bratislava → Warsaw", distance: "660 km" },
              { href: "/en/moving-to-berlin", label: "Bratislava → Berlin", distance: "690 km" },
              { href: "/en/moving-to-zurich", label: "Bratislava → Zurich", distance: "800 km" },
              { href: "/en/moving-to-brussels", label: "Bratislava → Brussels", distance: "1,150 km" },
              { href: "/en/moving-to-amsterdam", label: "Bratislava → Amsterdam", distance: "1,200 km" },
              { href: "/en/moving-to-paris", label: "Bratislava → Paris", distance: "1,300 km" },
              { href: "/en/moving-to-london", label: "Bratislava → London", distance: "~1,500 km" },
              { href: "/en/moving-to-dublin", label: "Bratislava → Dublin", distance: "sea incl." },
            ];

            const renderLinkList = (
              items: Array<{ href: string; label: string; hub?: boolean }>,
            ) => (
              <ul className={ulCls}>
                {items.map((it) => (
                  <li key={it.href}>
                    <Link href={it.href} className={itemCls}>
                      <span className={it.hub ? hubLabelCls : labelCls}>{it.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            );

            return (
              <div className="max-w-2xl mx-auto space-y-4">
                <details className={detailsCls}>
                  <summary className={summaryCls}>
                    <span>Moving TO Slovakia — pick origin</span>
                    {chevron}
                  </summary>
                  {renderLinkList(toSlovakia)}
                </details>

                <details className={detailsCls}>
                  <summary className={summaryCls}>
                    <span>Moving FROM Slovakia — pick destination</span>
                    {chevron}
                  </summary>
                  {renderLinkList(fromSlovakia)}
                </details>

                <details className={detailsCls}>
                  <summary className={summaryCls}>
                    <span>Moving to a city — pick a city</span>
                    {chevron}
                  </summary>
                  {renderLinkList(toCity)}
                </details>

                <details className={detailsCls}>
                  <summary className={summaryCls}>
                    <span>Moving from Bratislava — choose a city</span>
                    {chevron}
                  </summary>
                  <ul className={ulCls}>
                    {fromBratislava.map((it) => (
                      <li key={it.href}>
                        <Link href={it.href} className={itemCls}>
                          <span className={labelCls}>{it.label}</span>
                          <span className={subCls}>{it.distance}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            );
          })()}
        </div>
      </section>

      {/* European Countries section */}
      <div>
        <LocationMap
          title="Our European Coverage"
          description="We provide international moving services to and from these countries"
          locations={europeanCountries}
          supporText="We also operate outside Slovakia:"
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
          title="Reviews from Our Clients"
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
