import React from "react";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Cookie Policy | SofoServis",
  description:
    "Detailed information about the use of cookies on the SofoServis website. How we use cookies and how you can manage them.",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/cookie-policy",
    languages: {
      sk: "https://www.sofoservis.sk/zasady-pouzivania-cookies",
      en: "https://www.sofoservis.sk/en/cookie-policy",
      "x-default": "https://www.sofoservis.sk/zasady-pouzivania-cookies",
      },
  },
};

export default function CookiePolicyPageEN() {
  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-12 pt-10 md:pt-18 lg:pt-44">
      <Container>
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-accent-500 px-4 sm:px-8 py-6">
            <h1 className="text-3xl font-bold text-primary-900">
              Cookie Policy
            </h1>
            <p className="text-lg text-primary-900/80 mt-2">
              Last updated: {new Date().toLocaleDateString("en-US")}
            </p>
          </div>

          <div className="px-4 sm:px-8 py-6 sm:py-8">
            <div className="prose prose-lg max-w-none">
              <article className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-primary-900 mb-4 pb-2 border-b-2 border-accent-500">
                    Article I - USE OF COOKIES
                  </h2>
                  <div className="space-y-4 text-primary-700">
                    <p>
                      <strong>1.</strong> This website uses cookies that
                      distinguish its visitors (hereinafter referred to as
                      &quot;you&quot;) from other users. This allows us to
                      improve our website and provide a better experience when
                      browsing.
                    </p>
                    <p>
                      <strong>2.</strong> This cookie policy describes:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>
                        the processing of data collected using cookies and
                        similar technologies, and
                      </li>
                      <li>the purposes for which we use these cookies.</li>
                    </ul>
                    <p>
                      <strong>3.</strong> Further important information about how
                      personal data obtained through this website is processed
                      can be found in the section referred to as terms of use.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-900 mb-4 pb-2 border-b-2 border-accent-500">
                    Article II - WHAT ARE COOKIES
                  </h2>
                  <div className="space-y-4 text-primary-700">
                    <p>
                      <strong>Cookies</strong> are small files downloaded to
                      your device (computer, tablet, mobile phone, etc.)
                      containing certain information that allows a website to
                      recognize you as a user while using the website. The
                      operator uses cookies to examine the effectiveness of the
                      website.
                    </p>
                    <p>
                      Cookies generally do not contain any information used to
                      identify individuals, but are instead used to identify a
                      browser on a specific device. In this document, we also
                      use the term cookies for other files that collect
                      information in a similar way (e.g., pixels, beacons,
                      etc.).
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-accent-50 p-4 rounded-lg border border-accent-200">
                        <h3 className="font-semibold text-primary-900 mb-2">
                          By lifespan:
                        </h3>
                        <ul className="space-y-1 text-sm">
                          <li>
                            <strong>Session cookies</strong> - temporary cookies
                            that are automatically deleted when you close your
                            browser
                          </li>
                          <li>
                            <strong>Persistent cookies</strong> - remain on your
                            device even after closing your browser
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h3 className="font-semibold text-primary-900 mb-2">
                          By origin:
                        </h3>
                        <ul className="space-y-1 text-sm">
                          <li>
                            <strong>Our cookies</strong> - cookies placed by our
                            company
                          </li>
                          <li>
                            <strong>Third-party cookies</strong> - cookies
                            placed by another company (e.g., Microsoft Clarity)
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-accent-500">
                      <p>
                        <strong>Important:</strong> If you completely exclude
                        the use of cookies, you may not be able to use certain
                        functionalities of our website.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-900 mb-4 pb-2 border-b-2 border-accent-500">
                    Article III - SCOPE AND PURPOSES OF COOKIE USE
                  </h2>
                  <div className="space-y-6 text-primary-700">
                    <p>
                      We use the following categories of cookies on our website:
                    </p>

                    <div className="space-y-4">
                      <div className="border border-gray-200 rounded-lg p-5">
                        <h3 className="font-bold text-primary-900 text-lg mb-2 flex items-center">
                          <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                          a. Strictly necessary cookies
                        </h3>
                        <p>
                          Strictly necessary cookies enable basic website
                          functions such as user login and account management.
                          The website cannot function properly without strictly
                          necessary cookies.
                        </p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-5">
                        <h3 className="font-bold text-primary-900 text-lg mb-2 flex items-center">
                          <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                          b. Performance cookies
                        </h3>
                        <p>
                          Performance cookies are used to understand how
                          visitors use the website, e.g., analytics cookies.
                          These cookies cannot be used to directly identify a
                          specific visitor.
                        </p>
                        <div className="mt-3 bg-blue-50 p-3 rounded border border-blue-200">
                          <p className="text-sm">
                            <strong>Specifically, we use:</strong> Microsoft
                            Clarity - a visitor behavior analysis tool that
                            helps us understand how you use our website and how
                            we can improve it.
                          </p>
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-5">
                        <h3 className="font-bold text-primary-900 text-lg mb-2 flex items-center">
                          <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                          c. Targeting cookies
                        </h3>
                        <p>
                          Targeting cookies are used to identify visitors across
                          different websites, e.g., content partners, advertising
                          networks. These cookies may be used by companies to
                          build a profile of visitor interests or to display
                          relevant advertisements on other websites.
                        </p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-5">
                        <h3 className="font-bold text-primary-900 text-lg mb-2 flex items-center">
                          <span className="w-3 h-3 bg-gray-500 rounded-full mr-3"></span>
                          d. Unclassified cookies
                        </h3>
                        <p>
                          Unclassified cookies are those that do not belong to
                          any other category or are in the process of being
                          categorized.
                        </p>
                      </div>
                    </div>

                    <p>
                      <strong>2.</strong> These cookies may be set through our
                      website by our advertising partners, who may use them to
                      profile your interests and display relevant advertisements
                      on other websites, in accordance with the cookie policies
                      available on the websites of these partners displayed in
                      the advanced cookie settings.
                    </p>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-bold text-primary-900 mb-4">
                        We may use cookies for these specific purposes:
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          a. Analysis conducted to inform our marketing
                          strategies and improve your visit
                        </li>
                        <li>
                          b. Identifying and recording when you opened the
                          website
                        </li>
                        <li>
                          c. Recording when you engaged in electronic
                          communication
                        </li>
                        <li>
                          d. Evaluating and improving our services so that your
                          visit and use of the website are more useful
                        </li>
                        <li>
                          e. Assessing web usage so we can provide enhanced
                          services
                        </li>
                        <li>
                          f. Quality control, website performance, and system
                          administration
                        </li>
                        <li>
                          g. Tracking your browser on other websites and
                          creating a profile of your interests to display
                          relevant advertisements on other websites
                        </li>
                        <li>
                          h. Security purposes such as fraud prevention or
                          detection
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-900 mb-4 pb-2 border-b-2 border-accent-500">
                    Article IV - COOKIE SETTINGS
                  </h2>
                  <div className="space-y-4 text-primary-700">
                    <p>
                      <strong>1.</strong> On your first visit to our website,
                      only strictly necessary cookies are stored on your device.
                      This setting will not change unless you accept/enable all
                      cookies or select your individual cookie preferences.
                    </p>

                    <p>
                      <strong>2.</strong> Some cookies we use are necessary for
                      our website to function. For example, when you first visit
                      our website, a pop-up message will appear alerting you to
                      our use of cookies.
                    </p>

                    <p>
                      <strong>3.</strong> By clicking the appropriate button in
                      the pop-up, you agree to our use of necessary cookies as
                      described in this cookie policy.
                    </p>

                    <p>
                      <strong>4.</strong> If you consent to cookies, you also
                      give us and the relevant third parties consent to use your
                      personal data as described in our terms of use.
                    </p>

                    <p>
                      <strong>5.</strong> To disable cookies that are used based
                      on consent, you can revoke your consent to the use of
                      cookies at any time. This is done using the cookie icon in
                      the relevant section of our website.
                    </p>

                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-accent-500">
                      <p>
                        <strong>Note:</strong> Cookies may remain on your device
                        even after you decide not to use them. For more
                        information on how to remove these files from your
                        device, see below or in your browser&apos;s help section.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-900 mb-4 pb-2 border-b-2 border-accent-500">
                    Article V - HANDLING OF INFORMATION
                  </h2>
                  <div className="space-y-4 text-primary-700">
                    <p>
                      <strong>1.</strong> In this section of the cookie policy,
                      we describe how we use personal data obtained through
                      cookies used on our website, on what legal grounds, and
                      for what purposes.
                    </p>

                    <p>
                      <strong>2.</strong> For the contractual reason for
                      necessary cookies, we may use your personal data to
                      fulfill our contractual obligations under our terms of
                      use.
                    </p>

                    <p>
                      <strong>3.</strong> For the legal reason for necessary
                      cookies, we may use your personal data to fulfill our
                      legal obligations.
                    </p>

                    <p>
                      <strong>4.</strong> For the legitimate interest reason for
                      necessary cookies, we may use your personal data within
                      our legitimate interest to operate the website in cases
                      where there is no legal reason for processing.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-900 mb-4 pb-2 border-b-2 border-accent-500">
                    Article VI - MANAGING AND DELETING COOKIES
                  </h2>
                  <div className="space-y-4 text-primary-700">
                    <p>
                      <strong>1.</strong> To disable or opt out of cookies, use
                      the cookie icons on your device where you can change
                      cookie settings at any time. You may need to refresh the
                      page for the settings to take effect.
                    </p>

                    <p>
                      <strong>2.</strong> Various files, scripts, codes, and
                      other information related to cookies may remain stored on
                      your device. You can remove these by clearing your
                      browser&apos;s cookies and cache through your web browser
                      settings.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-primary-900 mb-2">
                          Browser settings
                        </h4>
                        <p className="text-sm">
                          You can set your browser to notify you about the use
                          of cookies or block them entirely.
                        </p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-primary-900 mb-2">
                          Microsoft Clarity
                        </h4>
                        <p className="text-sm">
                          You can disable Microsoft Clarity analytics cookies at
                          any time in the cookie settings on our website.
                        </p>
                      </div>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                      <p>
                        <strong>Warning:</strong> If you reject or revoke
                        consent to the use of any non-essential cookies, the
                        corresponding website functionality may not work
                        properly or at all.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-900 mb-4 pb-2 border-b-2 border-accent-500">
                    Article VII - FIRST-PARTY AND THIRD-PARTY COOKIES
                  </h2>
                  <div className="space-y-4 text-primary-700">
                    <p>
                      <strong>1.</strong> By clicking the Cookie Details link on
                      the banner, you can access the list of first-party cookies
                      we use on our website.
                    </p>

                    <p>
                      <strong>2.</strong> We recommend that you review the
                      privacy policies of the relevant third parties.
                    </p>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-bold text-primary-900 mb-4">
                        Third-party cookies used on our website:
                      </h3>
                      <div className="space-y-3">
                        <div className="bg-white p-4 rounded border border-gray-200">
                          <h4 className="font-semibold text-primary-900">
                            Microsoft Clarity
                          </h4>
                          <p className="text-sm mt-1">
                            An analytics tool for tracking user behavior and
                            improving the user experience on our website.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-900 mb-4 pb-2 border-b-2 border-accent-500">
                    Article VIII - EMAIL TRACKING
                  </h2>
                  <div className="space-y-4 text-primary-700">
                    <p>
                      <strong>1.</strong> Some emails sent by our company may
                      contain pixel tags, web beacons, transparent images, or
                      tracked links that allow us to determine when you opened
                      the email and verify which links in the email you visited.
                    </p>

                    <p>
                      <strong>2.</strong> You can remove the pixel tag by
                      deleting the email. If you do not wish to download the
                      pixel to your computer or other device, you can choose to
                      receive emails in plain text format or not open images in
                      the email.
                    </p>

                    <p>
                      <strong>3.</strong> To unsubscribe from our mailing list,
                      you can use our contact email address listed in the terms
                      of use.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary-900 mb-4 pb-2 border-b-2 border-accent-500">
                    Article IX - CHANGES AND CONTACT
                  </h2>
                  <div className="space-y-4 text-primary-700">
                    <p>
                      <strong>1.</strong> This cookie policy may be changed at
                      any time by our company, either by sending an email with
                      amended provisions or by publishing them on our website.
                    </p>

                    <p>
                      <strong>2.</strong> Any changes shall take effect 7 days
                      after the date of sending the email as described above or
                      after the date of publication of the amended provisions on
                      the website, whichever occurs first.
                    </p>

                    <p>
                      <strong>3.</strong> If you have any questions or need
                      further information about cookies or personal data
                      processing, please contact us using the contact details
                      provided in our terms of use.
                    </p>
                  </div>
                </section>

                <section className="bg-accent-50 p-6 rounded-lg border border-accent-200">
                  <h2 className="text-2xl font-bold text-primary-900 mb-4">
                    Contact Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-primary-900 mb-2">
                        Operator
                      </h3>
                      <p className="text-primary-700">
                        <strong>Sofoservices s. r. o.</strong>
                        <br />
                        Lermontovova 3<br />
                        811 05 Bratislava
                        <br />
                        Company ID: 55333800
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-900 mb-2">
                        Contact
                      </h3>
                      <p className="text-primary-700">
                        <strong>Email:</strong>{" "}
                        <a
                          href="mailto:doprava@sofoservis.sk"
                          className="text-accent-600 hover:text-accent-700"
                        >
                          doprava@sofoservis.sk
                        </a>
                        <br />
                        <strong>Phone:</strong>{" "}
                        <a
                          href="tel:+421951735130"
                          className="text-accent-600 hover:text-accent-700"
                        >
                          +421 951 735 130
                        </a>
                        <br />
                        <strong>Web:</strong>{" "}
                        <a
                          href="https://www.sofoservis.sk"
                          className="text-accent-600 hover:text-accent-700"
                        >
                          www.sofoservis.sk
                        </a>
                      </p>
                    </div>
                  </div>
                </section>
              </article>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
