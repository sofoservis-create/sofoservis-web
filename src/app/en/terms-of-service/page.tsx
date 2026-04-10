import React from "react";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Terms of Service | Sofoservis",
  description:
    "General Terms and Conditions of Sofoservices s.r.o. – conditions for providing moving, clearance, furniture assembly and handyman services.",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/terms-of-service",
    languages: {
      sk: "https://www.sofoservis.sk/vseobecne-obchodne-podmienky",
      en: "https://www.sofoservis.sk/en/terms-of-service",
      "x-default": "https://www.sofoservis.sk/vseobecne-obchodne-podmienky",
    },
  },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <span className="w-2 h-8 bg-yellow-400 mr-4 rounded flex-shrink-0"></span>
        {title}
      </h2>
      <div className="bg-gray-50 p-6 rounded-lg space-y-4">{children}</div>
    </section>
  );
}

function Ul({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2 ml-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start">
          <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Ol({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="space-y-3 list-none">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-yellow-600 font-semibold flex-shrink-0 min-w-[1.5rem]">{i + 1}.</span>
          <span className="text-gray-700 leading-relaxed">{item}</span>
        </li>
      ))}
    </ol>
  );
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white">
      <Container>
        <div className="py-6 sm:py-16 lg:py-24 mt-0 md:mt-4 lg:mt-28">
          <div className="max-w-4xl mx-auto">

            <header className="mb-8 sm:mb-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Terms of Service
              </h1>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg space-y-3">
                <p className="text-gray-800 leading-relaxed">
                  <strong className="text-gray-900">Sofoservices s. r. o.</strong>, with registered office at{" "}
                  <strong className="text-gray-900">Lermontovova 3, 811 05 Bratislava – Staré Mesto borough</strong>,
                  Company ID: 55 333 800, registered in the Commercial Register of the Bratislava III Municipal Court,
                  section: Sro, file no. 167437/B (hereinafter the &ldquo;<strong>Company</strong>&rdquo; or &ldquo;<strong>Sofoservices</strong>&rdquo;),
                  issues these General Terms and Conditions (hereinafter &ldquo;<strong>GTC</strong>&rdquo;), which govern the legal
                  relationships between the Company and its clients in the provision of services.
                </p>
                <ul className="space-y-1 text-gray-800 text-sm">
                  <li>
                    <strong className="text-yellow-600">Website:</strong>{" "}
                    <a href="https://www.sofoservis.sk" className="text-blue-600 hover:text-blue-800 transition-colors">
                      www.sofoservis.sk
                    </a>
                  </li>
                  <li>
                    <strong className="text-yellow-600">Email:</strong>{" "}
                    <a href="mailto:info@sofoservis.sk" className="text-blue-600 hover:text-blue-800 transition-colors">
                      info@sofoservis.sk
                    </a>
                  </li>
                  <li>
                    <strong className="text-yellow-600">Phone:</strong>{" "}
                    <a href="tel:+421905771151" className="text-blue-600 hover:text-blue-800 transition-colors">
                      +421 905 771 151
                    </a>
                  </li>
                </ul>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">

              <Section title="I. Introductory Provisions">
                <Ol items={[
                  "These GTC govern the rights and obligations of the Company and clients in the provision of services, particularly in the areas of moving, clearance, furniture assembly and disassembly, kitchen installation, waste removal and disposal, handyman services and other related activities.",
                  "These GTC form an inseparable part of every service agreement concluded between the Company and a client, unless otherwise agreed in writing between the parties.",
                  "If a separate written agreement is concluded between the Company and a client, its provisions shall take precedence over these GTC.",
                ]} />
              </Section>

              <Section title="II. Definitions">
                <Ol items={[
                  <><strong>Services</strong> means activities provided by the Company, particularly moving of flats, houses, offices and businesses, international removals, clearance of flats, houses, cellars, garages and non-residential premises, waste removal and disposal, furniture assembly and disassembly, kitchen installation, handyman work and other agreed activities.</>,
                  <><strong>Subject of service</strong> means a space, property, movable item or set of items in relation to which or with which the service is to be performed.</>,
                  <><strong>Client</strong> means a natural or legal person who orders a service from the Company.</>,
                  <><strong>Consumer</strong> means a natural person who, when concluding and fulfilling a contract, does not act within the scope of their business, employment or profession.</>,
                  <><strong>Entrepreneur</strong> means a client who is not a consumer, in particular a legal entity or a natural person acting as an entrepreneur.</>,
                  <><strong>Contract</strong> means a service agreement concluded between the Company and a client.</>,
                  <><strong>Order</strong> means a client&apos;s request for a service submitted to the Company by phone, email, web form, WhatsApp, Messenger or any other communication channel.</>,
                  <><strong>Order confirmation</strong> means the Company&apos;s acceptance of an order sent to the client by email, SMS, WhatsApp, Messenger or any other verifiable means.</>,
                  <><strong>Service price</strong> means the price agreed between the Company and the client for the provision of the service; unless expressly stated otherwise, prices are quoted exclusive of VAT. Where the client is a consumer, the Company shall inform them of the total final price including VAT before binding confirmation of the order, where VAT applies.</>,
                  <><strong>Additional works</strong> means work, actions, time or costs beyond the originally agreed scope of service.</>,
                  <><strong>Service start time window</strong> means the indicative interval within which the service is to begin.</>,
                  <><strong>Handover protocol</strong> means a written or electronic confirmation of the progress, scope, handover, receipt, any reservations, price settlement or other material information relating to the service. An electronic handover protocol also includes confirmation of service completion by email, SMS, WhatsApp or any other verifiable electronic means.</>,
                ]} />
              </Section>

              <Section title="III. Contract Conclusion">
                <Ol items={[
                  "The client expresses interest in a service by submitting an enquiry or order to the Company.",
                  "Based on the enquiry, the Company will typically send the client a price quote, indicative scope of service, proposed date, and any further conditions.",
                  "The contract is only concluded at the moment the Company confirms the client's order.",
                  "Order confirmation may be made by email, SMS, by phone with a subsequent record, via WhatsApp, Messenger or any other verifiable means.",
                  "The contract includes in particular: the client's order, the order confirmation, the individually agreed price quote, these GTC and any handover or acceptance protocols.",
                  "By concluding the contract, the client declares that they are authorised to enter into the contract, that they have provided the Company with truthful and complete information, and that they have read these GTC.",
                  "An order confirmed by the Company is binding.",
                ]} />
              </Section>

              <Section title="IV. Subject and Scope of Services">
                <Ol items={[
                  "The Company provides services based on individual agreement with the client.",
                  "The specific scope of the service is always determined in the order, order confirmation, price quote or other verifiable communication between the parties.",
                  <>
                    The Company is entitled to refuse or interrupt the performance of a service if:
                    <Ul items={[
                      "its performance would be contrary to legal regulations,",
                      "its performance would be contrary to safety rules,",
                      "the client fails to provide the necessary cooperation,",
                      "it subsequently becomes apparent that the actual scope or conditions of the service differ materially from the information provided by the client.",
                    ]} />
                  </>,
                  "The Company provides services with professional care, within the scope and under the conditions agreed with the client.",
                ]} />
              </Section>

              <Section title="V. Client Obligations and Cooperation">
                <Ol items={[
                  <>
                    Before the service begins, the client is obliged to truthfully, completely and timely inform the Company in particular about:
                    <Ul items={[
                      "the scope of items or work,",
                      "floor, lift, accessibility of the premises and parking options,",
                      "heavy loads, oversized items and particularly sensitive items,",
                      "route obstacles, time restrictions of the premises or specific rules of the premises,",
                      "required cooperation of third parties,",
                      "hazardous, risky or specially protected items.",
                    ]} />
                  </>,
                  <>
                    The client is obliged to ensure in particular:
                    <Ul items={[
                      "access to the place of performance,",
                      "their presence or that of an authorised person, unless otherwise agreed,",
                      "safe and unobstructed movement of workers,",
                      "access to electricity, water or other utilities if required,",
                      "instructions for placing items if necessary for the proper performance of the service.",
                    ]} />
                  </>,
                  <>
                    If the client fails to provide the necessary cooperation, the Company is entitled to appropriately suspend, postpone or terminate the service. In such case, the Company is entitled to at least payment for:
                    <Ul items={[
                      "work already performed,",
                      "demonstrably incurred costs,",
                      "costs of an abortive trip,",
                      "reserved capacity,",
                      "agreed or incurred additional works.",
                    ]} />
                  </>,
                  "The client is responsible for the accuracy and completeness of the information provided to the Company. If during the performance of the service it becomes apparent that such information was incomplete, untrue or misleading, the Company is entitled to appropriately adjust the price, time, staffing or technical provision of the service.",
                  "The client is obliged to immediately notify the Company of any circumstances that may lead to damage or endanger the life and health of persons.",
                ]} />
              </Section>

              <Section title="VI. Time and Place of Service">
                <Ol items={[
                  "The place, date and estimated start time window of the service are determined by agreement of the parties.",
                  "The service start time is indicative given the nature of the services, unless expressly agreed otherwise.",
                  "The Company is entitled to appropriately adjust the start time, progress or duration of the service for operational, traffic, technical, safety or other objective reasons. The client will be notified of such a change as soon as possible.",
                  "The client is obliged to be reachable on the agreed contact details on the day of service provision.",
                  "If the client is not reachable, does not provide access to the place of service or fails to provide information necessary for the proper performance of the service, the Company is entitled to at least the payment referred to in Article V, paragraph 3 of these GTC.",
                ]} />
              </Section>

              <Section title="VII. Service in the Client's Absence">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg -mx-2 mb-2">
                  <p className="text-sm text-yellow-800">
                    <strong>Recommendation:</strong> The Company recommends that the client or an authorised person is always present during the provision of the service.
                  </p>
                </div>
                <Ol items={[
                  "The Company recommends that the client or an authorised person is present during service provision.",
                  "At the client's express request, the service may be provided in their absence.",
                  "If the client requests service performance in their absence, they acknowledge that this limits their ability to raise immediate objections regarding the progress, scope or manner of performance of the service on site.",
                  "If the client provides the Company with keys, access credentials or other means of entry to the premises, the client is responsible for having done so lawfully. The Company is authorised to use these access means solely for the purpose of performing the service.",
                ]} />
              </Section>

              <Section title="VIII. Service Pricing">
                <Ol items={[
                  "Service prices are determined individually based on the type of service, scope, time, number of workers, vehicle requirements, equipment, difficulty of handling, transport distance, accessibility of the premises, packaging material requirements, waste disposal and other circumstances.",
                  "Unless expressly stated otherwise, prices quoted by the Company are exclusive of VAT.",
                  "Where the client is a consumer, the Company will inform them of the final price including VAT before binding confirmation of the order, where VAT applies.",
                  <>
                    The price may be agreed as:
                    <Ul items={[
                      <><strong>a fixed price</strong>, or</>,
                      <><strong>an hourly rate</strong>, or a combination of both.</>,
                    ]} />
                  </>,
                  "Where the price is agreed as a fixed price, it applies exclusively to the scope and conditions of service agreed prior to order confirmation.",
                  "If after order confirmation it becomes apparent that the actual scope of service or the conditions of its performance differ from those agreed, the Company is entitled to adjust the price accordingly.",
                  "Where the price is agreed as an hourly rate, the client pays based on actual hours worked and other agreed items.",
                  "Where the Company provides only an indicative price estimate, this does not constitute a fixed price. The final price shall in such case be determined based on actual work performed, time and costs.",
                  "Additional works beyond the originally agreed price are charged in accordance with Article IX of these GTC.",
                ]} />
              </Section>

              <Section title="IX. Additional Works and Change of Scope">
                <Ol items={[
                  <>
                    Additional works include in particular:
                    <Ul items={[
                      "work or actions beyond the original order,",
                      "a higher volume of items or waste than originally stated,",
                      "undisclosed floors, absence or non-functionality of a lift,",
                      "inability to park within a reasonable distance,",
                      "subsequently discovered heavy loads or oversized items,",
                      "additional disassembly, assembly, packing or handling,",
                      "waiting caused by the client,",
                      "obstacles in the premises or restrictions not disclosed by the client in advance,",
                      "need for additional workers, vehicles, materials or time.",
                    ]} />
                  </>,
                  "Extension of the service scope on site is only possible with the Company's approval.",
                  "Reduction of service scope by the client after order confirmation does not automatically result in a reduction of the agreed fixed price if capacity, workers, vehicles, time or other resources have already been reserved.",
                  "Additional works may be approved in person on site, by phone, email, SMS, via WhatsApp or any other verifiable means; such approval is binding.",
                  "If the circumstances of the case do not allow immediate approval of additional works but their performance is necessary for the safe, proper or possible completion of the service, the Company is entitled to perform the necessary scope of such works and the client is obliged to pay the reasonably incurred costs.",
                ]} />
              </Section>

              <Section title="X. Special Regime for Valuables and High-Value Items">
                <Ol items={[
                  <>
                    The client is obliged to notify the Company in writing in advance of items of extraordinary value or requiring special handling, in particular:
                    <Ul items={[
                      "cash,",
                      "jewellery, watches and precious metals,",
                      "weapons and ammunition,",
                      "works of art, antiques and collectibles,",
                      "important documents, data carriers and documents of extraordinary value,",
                      "items of extraordinary sentimental value,",
                      "technical equipment or items requiring special handling,",
                      "items whose value typically exceeds the standard equipment of a household or business.",
                    ]} />
                  </>,
                  "The client is obliged to specially mark and secure such items, or to agree on a special handling regime for them.",
                  "If the client fails to fulfil their notification obligation under this article, the Company shall not be liable for damage to the extent to which it was unable to take appropriate protective measures for such items.",
                  "The Company is entitled to refuse to handle items where, given their nature, value, risk or the need for special permits, it would not be possible to ensure adequate professional, technical or insurance protection.",
                ]} />
              </Section>

              <Section title="XI. Payment Terms">
                <Ol items={[
                  "The client is obliged to pay the service price properly and on time.",
                  "Unless otherwise agreed, the price for a one-time service is due on the day the service is provided, no later than the date stated on the invoice.",
                  "Where the price is paid based on an invoice, the client's obligation is fulfilled on the day the full amount owed is credited to the Company's account.",
                  "The Company is entitled to request a reasonable advance payment or deposit from the client.",
                  <>
                    In the event of the client&apos;s delay in payment, the Company is entitled to:
                    <Ul items={[
                      "statutory interest on late payment,",
                      "a contractual penalty, if agreed,",
                      "reimbursement of reasonably incurred costs associated with enforcing the claim,",
                      "in the case of an entrepreneur, also a flat-rate reimbursement of costs associated with enforcing the claim, if the Company is entitled to such reimbursement under applicable law.",
                    ]} />
                  </>,
                  "Where the client is an entrepreneur, in the event of late payment they undertake to pay the Company a contractual penalty of 0.1% of the outstanding amount for each commenced day of delay, unless otherwise provided by law. This does not affect the right to damages and statutory interest on late payment.",
                  "The Company is entitled to suspend the provision of further services in the event of the client's late payment until all outstanding obligations of the client are fully settled.",
                ]} />
              </Section>

              <Section title="XII. Electronic Invoicing and Delivery">
                <Ol items={[
                  "The client agrees that the Company may deliver invoices, reminders, handover protocols, order confirmations and other documentation electronically, in particular by email or via another agreed electronic communication channel.",
                  "The client is obliged to provide the Company with correct and functional contact details and to notify the Company of any changes without delay.",
                  "An electronic document is deemed delivered on the day it is sent to the client's last notified email address or other agreed electronic contact, unless proven otherwise.",
                  "The Company is entitled to issue and deliver invoices exclusively in electronic form, unless applicable law or a special agreement requires another form.",
                ]} />
              </Section>

              <Section title="XIII. Handover Protocol, Service Acceptance and Evidence Provisions">
                <Ol items={[
                  "Upon completion of the service, the client is obliged to immediately accept the service, inspect it and, where possible, confirm its acceptance.",
                  <>
                    Evidence of proper performance and handover of the service includes in particular:
                    <Ul items={[
                      "a signed handover protocol,",
                      "an electronic handover protocol,",
                      "email, SMS or WhatsApp confirmation from the client,",
                      "photo or video documentation,",
                      "a record of telephone approval,",
                      "the Company's internal work report, if the client refused confirmation without raising specific objections,",
                      "any other verifiable record of service handover and acceptance.",
                    ]} />
                  </>,
                  "If the client raises no specific objections upon acceptance, it shall be deemed that the service was accepted without apparent reservations.",
                  "If the client refuses to sign the handover protocol or otherwise confirm acceptance of the service without raising specific objections, this fact alone does not affect the Company's right to payment for the service, provided that the performance of the service has been established by other means.",
                  "If the client fails to accept the service promptly after its completion for reasons on their side, the service shall be deemed properly performed and handed over at the moment the Company made it available for acceptance.",
                ]} />
              </Section>

              <Section title="XIV. Complaints and Liability for Service Defects">
                <Ol items={[
                  "The Company is liable for service defects to the extent provided by applicable law.",
                  "A service defect means in particular that the service was not performed within the agreed scope or was not performed with the reasonable professional care customary for that type of service.",
                  "The client is obliged to raise apparent defects without undue delay, ideally directly during service provision or upon acceptance.",
                  "If a defect only manifests after the service is completed, or could not reasonably be detected during its provision, the client is obliged to notify the Company of it without undue delay after discovery, no later than 48 hours after discovery.",
                  <>
                    A complaint must be submitted in writing, in particular by email, and must contain at least:
                    <Ul items={[
                      "the client's identification,",
                      "the service identification,",
                      "a description of the complained defect,",
                      "the time when the defect was discovered,",
                      "available photo documentation or other documentation, where the nature of the matter allows.",
                    ]} />
                  </>,
                  "Where possible, the client is obliged to allow the Company to inspect the complained condition and take appropriate steps to remedy the defect.",
                  "Late or insufficiently documented submission of a complaint may complicate or prevent the assessment of the complaint and the establishment of the client's claim.",
                  "This article does not affect consumer rights that cannot be excluded or limited under applicable law.",
                ]} />
              </Section>

              <Section title="XV. Liability for Damage">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg -mx-2 mb-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Insurance:</strong> The Company is insured with{" "}
                    <strong>Generali Poisťovňa a. s.</strong> — general liability up to{" "}
                    <strong>€100,000</strong> and liability for damage to received/stored items up to{" "}
                    <strong>€10,000</strong>.
                  </p>
                </div>
                <Ol items={[
                  "The Company is liable for damage caused to the client during service provision in accordance with applicable law.",
                  "The client is obliged to notify the Company of any damage they consider to have been caused in connection with service provision without undue delay after discovery, no later than 48 hours after discovery.",
                  <>
                    Notification of damage must be in writing and must contain at least:
                    <Ul items={[
                      "a description of the damage,",
                      "the circumstances under which it allegedly arose,",
                      "the time of its discovery,",
                      "photo documentation or other available documentation, where the nature of the case allows.",
                    ]} />
                  </>,
                  "The client is obliged to take appropriate steps to prevent the damage from increasing.",
                  "The client is obliged to provide the Company and, where applicable, the insurer with the necessary cooperation in verifying the occurrence and extent of the damage.",
                  "Late notification of damage or insufficient evidence of the circumstances of its occurrence may complicate or prevent the establishment of a causal link between the damage and the Company's activities.",
                  <>
                    The Company is not liable for damage if it was caused by:
                    <Ul items={[
                      "incomplete or untrue information provided by the client,",
                      "an instruction from the client regarding whose inappropriateness or risk the client was warned,",
                      "a property of the item, its improper packing or inadequate securing by the client,",
                      "circumstances that the Company could not have averted despite exercising reasonable care.",
                    ]} />
                  </>,
                  "Where appropriate and possible, damage is primarily resolved by restoration to the previous state, repair, an appropriate discount or monetary compensation, depending on the nature of the case and applicable law.",
                ]} />
              </Section>

              <Section title="XVI. Partial Performance and Impossibility of Completing the Service">
                <Ol items={[
                  <>
                    If the service is only partially performed for reasons on the client&apos;s side, or cannot be completed, the Company is entitled to at least payment for:
                    <Ul items={[
                      "work already performed,",
                      "workers' time,",
                      "transport costs,",
                      "material costs,",
                      "incurred additional works,",
                      "reserved capacity and other demonstrably incurred costs.",
                    ]} />
                  </>,
                  "Where it is not possible to complete the service for reasons on the client's side, this fact alone does not affect the Company's entitlement to reasonable payment under paragraph 1.",
                ]} />
              </Section>

              <Section title="XVII. Withdrawal from Contract, Order Cancellation and Cancellation Policy">
                <Ol items={[
                  "The client may cancel an order even before service provision begins.",
                  "If the client cancels an order less than 48 hours before the start of the agreed time window, the Company is entitled to a cancellation fee of 50% of the agreed service price, at least however the amount corresponding to demonstrably reserved capacity and incurred costs.",
                  "If the client cancels an order less than 12 hours before the start of the agreed time window or after workers have departed for the place of performance, the Company is entitled to a cancellation fee of up to 100% of the agreed service price, provided this corresponds to the extent of reserved capacity and incurred costs.",
                  "Paragraphs 2 and 3 shall apply mutatis mutandis where the client by their action or omission makes it impossible to begin or continue the service.",
                  "This article does not affect the specific rights of consumers under Article XX of these GTC.",
                ]} />
              </Section>

              <Section title="XVIII. Regular Provision of Services">
                <Ol items={[
                  "For the regular provision of services, a separate written agreement may be concluded between the parties.",
                  "In such case, these GTC shall apply to the extent not otherwise provided for in the separate agreement.",
                  "Unless otherwise agreed in the separate agreement, the provisions of these GTC shall apply mutatis mutandis to individual performances within the scope of regular service provision.",
                ]} />
              </Section>

              <Section title="XIX. Personal Data Protection">
                <Ol items={[
                  "The Company processes clients' personal data to the extent and under the conditions determined by applicable personal data protection legislation.",
                  <>
                    Detailed information about the processing of personal data is published on the Company&apos;s website in the document{" "}
                    <a href="/en/privacy-policy" className="text-blue-600 hover:text-blue-800 transition-colors">
                      Privacy Policy
                    </a>.
                  </>,
                ]} />
              </Section>

              <Section title="XX. Special Provisions for Consumers">
                <Ol items={[
                  "Where the client is a consumer and the contract is concluded at a distance or outside the Company's business premises, the consumer has rights under applicable consumer protection legislation.",
                  "The consumer has the right to withdraw from the contract within the statutory period, unless otherwise provided by law or the nature of the service.",
                  <>
                    If the consumer expressly requests that service provision begin before the expiry of the withdrawal period, they acknowledge that:
                    <Ul items={[
                      "in the event of full service provision, they may, under conditions laid down by applicable law, lose the right to withdraw from the contract,",
                      "in the event of withdrawal after service provision has begun, they are obliged to pay a proportionate part of the price for services demonstrably provided up to the moment of withdrawal.",
                    ]} />
                  </>,
                  "When concluding a contract with a consumer, the Company shall provide the consumer with information to the extent required by applicable law.",
                  "If a consumer is not satisfied with the handling of their complaint or believes that the Company has violated their rights, they have the right to contact the Company with a request for remedy.",
                  "If the Company responds negatively to the consumer's request or fails to respond within 30 days of its submission, the consumer has the right to submit a proposal for alternative dispute resolution to the relevant alternative dispute resolution body.",
                  <>
                    The relevant alternative dispute resolution body may be in particular the{" "}
                    <a href="https://www.soi.sk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                      Slovak Trade Inspection
                    </a>{" "}
                    (www.soi.sk), unless otherwise provided by law.
                  </>,
                ]} />
              </Section>

              <Section title="XXI. Communication and Delivery">
                <Ol items={[
                  "Communication between the Company and the client takes place in particular by email, phone, SMS, WhatsApp, Messenger or another agreed communication channel.",
                  "Acts aimed at the creation, modification or termination of rights and obligations, in particular orders, order confirmations, complaints, damage notifications, withdrawals from contract or cancellations, may also be made electronically, provided they are verifiable.",
                  "The client agrees that communication between the parties via electronic communication means may serve as evidence of the content of the legal relationship between the parties.",
                ]} />
              </Section>

              <Section title="XXII. Final Provisions">
                <Ol items={[
                  "The legal relationships between the Company and the client are governed by the law of the Slovak Republic.",
                  "Where the relationship contains an international element, Slovak law shall apply, without prejudice to mandatory consumer protection provisions.",
                  "The Company is entitled to amend or supplement these GTC. However, the version of the GTC in force at the time of conclusion of a given contract shall always apply to that specific contractual relationship, unless otherwise expressly agreed between the parties.",
                  "The amended GTC shall apply to new contracts concluded after their entry into force; in the case of ongoing contractual relationships, the new version shall apply only after it has been communicated to the client, if the nature of the relationship permits.",
                  "If any provision of these GTC is invalid, ineffective or unenforceable, this shall not affect the validity and effectiveness of the remaining provisions.",
                  "These GTC enter into force on 1 April 2025.",
                ]} />
              </Section>

              <section className="mb-12">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Contact Details</h3>
                  <ul className="space-y-2 text-gray-800">
                    <li><strong className="text-yellow-600">Company:</strong> Sofoservices s. r. o.</li>
                    <li><strong className="text-yellow-600">Address:</strong> Lermontovova 3, 811 05 Bratislava – Staré Mesto borough</li>
                    <li><strong className="text-yellow-600">Company ID:</strong> 55 333 800</li>
                    <li>
                      <strong className="text-yellow-600">Email:</strong>{" "}
                      <a href="mailto:info@sofoservis.sk" className="text-blue-600 hover:text-blue-800 transition-colors">info@sofoservis.sk</a>
                    </li>
                    <li>
                      <strong className="text-yellow-600">Phone:</strong>{" "}
                      <a href="tel:+421905771151" className="text-blue-600 hover:text-blue-800 transition-colors">+421 905 771 151</a>
                    </li>
                  </ul>
                </div>
              </section>

            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
