import React from "react";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Privacy Policy | GDPR | Sofoservis",
  description:
    "Personal data processing policy and personal data protection system according to GDPR regulation of Sofoservices s.r.o.",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/privacy-policy",
    languages: {
      sk: "https://www.sofoservis.sk/zasady-spracovania-osobnych-udajov",
      en: "https://www.sofoservis.sk/en/privacy-policy",
    },
  },
};

export default function PrivacyPolicyPageEN() {
  return (
    <main className="min-h-screen bg-white">
      <Container>
        <div className="py-6 sm:py-16 lg:py-24 mt-0 md:mt-4 lg:mt-28">
          <div className="max-w-4xl mx-auto">
            <header className="mb-8 sm:mb-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Personal Data Processing Policy and Data Protection System
                Under GDPR
              </h1>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <p className="text-gray-800 leading-relaxed">
                  <strong className="text-yellow-600">
                    The Controller (administrator)
                  </strong>{" "}
                  of your personal data pursuant to Article 4(7) of Regulation
                  (EU) 2016/679 of the European Parliament and of the Council on
                  the protection of natural persons with regard to the processing
                  of personal data and on the free movement of such data
                  (hereinafter referred to as GDPR) is:{" "}
                  <strong className="text-gray-900">
                    Sofoservices s. r. o., Lermontovova 3, 811 05 Bratislava –
                    Old Town district, Company ID: 55 333 800
                  </strong>
                </p>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-yellow-400 mr-4 rounded"></span>
                  Controller Contact Information
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-3 text-gray-800">
                    <li className="flex items-center">
                      <strong className="w-20 text-yellow-600">Email:</strong>
                      <a
                        href="mailto:info@sofoservis.sk"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        info@sofoservis.sk
                      </a>
                    </li>
                    <li className="flex items-center">
                      <strong className="w-20 text-yellow-600">Phone:</strong>
                      <a
                        href="tel:+421905771151"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        +421 905 771 151
                      </a>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-yellow-400 mr-4 rounded"></span>
                  What is Personal Data?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Personal data means data relating to an identified natural
                  person, or an identifiable natural person who can be identified
                  directly or indirectly, in particular by reference to a
                  generally applicable identifier, another identifier such as
                  name, surname, identification number, location data, or an
                  online identifier, or by reference to one or more factors
                  specific to the physical, physiological, genetic, mental,
                  economic, cultural, or social identity of that natural person.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-yellow-400 mr-4 rounded"></span>
                  What is Personal Data Processing?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Processing of personal data means any processing operation or
                  set of processing operations performed on personal data or
                  sets of personal data, including collection, recording,
                  organization, structuring, storage, adaptation or alteration,
                  retrieval, consultation, use, disclosure by transmission,
                  dissemination or otherwise making available, alignment or
                  combination, restriction, erasure or destruction, whether or
                  not by automated means.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Note:</strong> The Controller is not required to
                    appoint/designate a Data Protection Officer.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-yellow-400 mr-4 rounded"></span>
                  Sources and Categories of Personal Data
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Controller processes personal data (directly from you)
                  that you have provided or personal data obtained on the basis
                  of fulfilling your order.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Your identification and contact data and data necessary for
                  the performance of the contract.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-yellow-400 mr-4 rounded"></span>
                  Legal Basis and Purpose of Processing
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  The legal basis for processing is:
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">
                      Your consent to the processing of personal data for the
                      purposes of direct marketing pursuant to Article 6(1)(a)
                      GDPR
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">
                      Performance of a contract between you and the Controller
                      pursuant to Article 6(1)(b) GDPR
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">
                      Processing is necessary for compliance with a legal
                      obligation to which the Controller is subject pursuant to
                      Article 6(1)(c) GDPR
                    </span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  The purpose of personal data processing is:
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Processing your order and exercising rights and obligations
                    arising from the contractual relationship between you and the
                    Controller. When placing an order, personal data necessary
                    for successful order processing are required pursuant to
                    Article 6(1)(b) of the Regulation (this includes subsequent
                    payment, delivery of goods, services, handling of
                    complaints, etc.); processing of customer personal data takes
                    place without customer consent, as the legal basis for
                    processing their personal data for the purpose of contract
                    performance is the specific order between the customer and
                    the Controller.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    When operating a profile on social networks (Facebook,
                    Instagram, YouTube, LinkedIn, Twitter, TikTok), our interest
                    is to raise awareness of the Controller in the online
                    environment and communicate with customers.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-yellow-400 mr-4 rounded"></span>
                  Social Networks
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Personal data that you publish on our social media pages, such
                  as comments, likes, videos, images, etc., are published
                  through the social network platform. We do not subsequently
                  process personal data for any other purpose. Social network
                  operators have their own adopted rules, service infrastructure,
                  and their own personal data protection provisions. We have no
                  influence over the transfer and use of your data by social
                  network operators. We recommend that you familiarize yourself
                  with the privacy terms of the social network platform
                  provider:
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                  <p className="text-yellow-800 text-sm">
                    <strong>Right to object:</strong> The data subject has the
                    right to object at any time, on grounds relating to their
                    particular situation, to the processing of personal data
                    concerning them. Objections can be sent by email to the
                    Controller&apos;s contact address{" "}
                    <a
                      href="mailto:info@sofoservis.sk"
                      className="text-yellow-600 hover:text-yellow-800 underline"
                    >
                      info@sofoservis.sk
                    </a>
                  </p>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Privacy terms of social networks:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li>
                      <strong className="text-yellow-600">Facebook:</strong>{" "}
                      <a
                        href="https://www.facebook.com/policy.php"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        facebook.com/policy.php
                      </a>
                    </li>
                    <li>
                      <strong className="text-yellow-600">Instagram:</strong>{" "}
                      <a
                        href="https://help.instagram.com/519522125107875"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        help.instagram.com/519522125107875
                      </a>
                    </li>
                    <li>
                      <strong className="text-yellow-600">YouTube:</strong>{" "}
                      <a
                        href="https://www.youtube.com/intl/ALL_sk/howyoutubeworks/user-settings/privacy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        youtube.com privacy
                      </a>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li>
                      <strong className="text-yellow-600">TikTok:</strong>{" "}
                      <a
                        href="https://www.tiktok.com/legal/new-privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        tiktok.com/legal/new-privacy-policy
                      </a>
                    </li>
                    <li>
                      <strong className="text-yellow-600">Twitter:</strong>{" "}
                      <a
                        href="https://twitter.com/en/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        twitter.com/en/privacy
                      </a>
                    </li>
                    <li>
                      <strong className="text-yellow-600">LinkedIn:</strong>{" "}
                      <a
                        href="https://www.linkedin.com/legal/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        linkedin.com/legal/privacy-policy
                      </a>
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  In certain processing operations, we act with social network
                  operators as joint controllers within the meaning of Article
                  26(4) GDPR.
                </p>
              </section>

              <section className="mb-12">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-blue-800">
                    <strong>Automated decision-making:</strong> The Controller
                    does not carry out automated individual decision-making
                    within the meaning of Article 22 GDPR.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-yellow-400 mr-4 rounded"></span>
                  Data Retention Period
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>The Controller retains personal data:</strong>
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        For the period necessary for the exercise of rights and
                        obligations arising from the contractual relationship
                        between you and the Controller and the enforcement of
                        claims arising from these contractual relationships.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        Until consent to the processing of personal data for
                        marketing purposes is revoked.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        After the expiration of the personal data retention
                        period arising from Act No. 395/2002 Coll. on Archives
                        and Registries, the Controller shall delete the personal
                        data.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-yellow-400 mr-4 rounded"></span>
                  Recipients of Personal Data
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Who is a recipient?
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A recipient is anyone to whom personal data is provided,
                    regardless of whether they are a third party. A public
                    authority that processes personal data on the basis of a
                    special regulation is not considered a recipient.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    These are persons involved in the delivery of goods,
                    services, and the execution of payments on the basis of a
                    contract.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg mt-4">
                  <p className="text-green-800 text-sm">
                    <strong>Important:</strong> The Controller does not provide,
                    publish, or make personal data available to third countries.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-yellow-400 mr-4 rounded"></span>
                  Personal Data Security Conditions
                </h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">
                          The Controller declares that it has adopted appropriate
                          personnel, technical, and organizational measures to
                          ensure the protection of personal data.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">
                          The Controller has adopted technical measures to secure
                          data storage and personal data storage in paper form.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">
                          The Controller declares that only persons authorized by
                          the Controller have access to personal data.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-yellow-400 mr-4 rounded"></span>
                  Your Rights
                </h2>
                <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                  <p className="text-yellow-800 leading-relaxed">
                    <strong>Under the conditions set out in the GDPR, you have:</strong>
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        The right of access to your personal data pursuant to
                        Article 15 GDPR
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        The right to rectification of personal data pursuant to
                        Article 16 GDPR
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        The right to restriction of processing
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        The right to erasure pursuant to Article 17 GDPR
                      </span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        The right to data portability pursuant to Article 20 GDPR
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        The right to object to processing pursuant to Article 21
                        GDPR
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        The right to withdraw consent at any time
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        The right to lodge a complaint with the Office for
                        Personal Data Protection
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-2 h-8 bg-yellow-400 mr-4 rounded"></span>
                    Final Provisions
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      By submitting an order through the online order form, you
                      confirm that you have been informed of the terms of
                      personal data protection and that you accept them in their
                      entirety.
                    </p>
                    <p>
                      The Controller is entitled to change these conditions. The
                      new version of the personal data protection conditions will
                      be published on their website or sent directly to your
                      email address.
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                      These conditions are effective from 01.01.2024
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
