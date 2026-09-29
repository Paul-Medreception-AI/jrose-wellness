import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | JROSE WELLNESS',
  description: 'JROSE WELLNESS - Privacy Policy, including SMS, TCPA and HIPAA disclosures.',
  alternates: { canonical: 'https://jrosewellness.com/privacy-sms' },
}

export default function PrivacySmsPage() {
  return (
    <main className="min-h-screen bg-white font-opensans">
      <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-bold mb-4">JROSE WELLNESS - Privacy Policy</h1>
          <p className="text-lg text-white/90">JROSE WELLNESS</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-[var(--color-ink)] font-semibold text-lg mb-8">
            Effective Date: September 29th, 2026
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            IMPORTANT NOTICE REGARDING TEXT MESSAGING DATA
          </h2>
          <p className="text-[var(--color-ink)] mb-6 leading-relaxed">
            JROSE WELLNESS (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) DOES NOT share customer opt-in information, including phone numbers and consent records, with any affiliates or third parties for marketing, promotional, or any other purposes unrelated to providing our direct services. All text messaging originator opt-in data is kept strictly confidential.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            1. Information We Collect
          </h2>
          <p className="text-[var(--color-ink)] mb-4 leading-relaxed">
            We collect the following types of information:
          </p>
          <p className="text-[var(--color-ink)] mb-2 leading-relaxed font-semibold">
            Personal Information:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>Name, email address, phone number, physical address</li>
            <li>Payment information when you make a purchase or request a quote</li>
            <li>Opt-in records and timestamps for all communication channels (SMS, email, etc.)</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-2 leading-relaxed font-semibold">
            Non-Personal Information:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>IP address, browser type, device information</li>
            <li>Website usage patterns and analytics</li>
            <li>Cookies and similar technologies</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-2 leading-relaxed font-semibold">
            Customer Communication:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>Records of inquiries and service requests</li>
            <li>Appointment details and preferences</li>
            <li>Service history and feedback</li>
          </ul>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            2. How We Use Your Information
          </h2>
          <p className="text-[var(--color-ink)] mb-4 leading-relaxed">
            We use collected data for:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>Providing and improving our services</li>
            <li>Processing transactions and payments</li>
            <li>Communicating with you about your inquiries, appointments, and promotions</li>
            <li>Enhancing website functionality and user experience</li>
            <li>Ensuring security and fraud prevention</li>
            <li>Maintaining records of your communication preferences and consent</li>
          </ul>

          <h2 id="sms-messaging" className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            3. SMS Messaging &amp; Compliance
          </h2>
          <p className="text-[var(--color-ink)] mb-4 leading-relaxed font-semibold">
            Text Message Program Terms &amp; Conditions
          </p>
          <p className="text-[var(--color-ink)] mb-6 leading-relaxed">
            By opting into our SMS messaging services, you agree to receive text messages related to our services, including appointment reminders, customer support, and important updates.
          </p>
          <p className="text-[var(--color-ink)] mb-2 leading-relaxed font-semibold">
            Opt-In &amp; Consent:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>You will only receive messages if you have explicitly opted in</li>
            <li>We maintain timestamped records of all opt-in actions</li>
            <li>We comply with the Telephone Consumer Protection Act (TCPA) and all applicable laws</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-2 leading-relaxed font-semibold">
            Opt-Out Instructions:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>You can cancel SMS notifications at any time by replying &quot;STOP&quot;</li>
            <li>You will receive a final confirmation message, and no further messages will be sent unless you re-opt in</li>
            <li>All opt-out requests are processed immediately.</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-2 leading-relaxed font-semibold">
            Message Frequency &amp; Content:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>Message frequency varies based on your interactions with our business</li>
            <li>Messages will be directly related to the services you have requested</li>
            <li>We do not send promotional content without specific consent</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-2 leading-relaxed font-semibold">
            Help &amp; Support:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>Reply &quot;HELP&quot; for assistance or contact us at jrosewellnesspllc@gmail.com</li>
            <li>Customer support is available during regular business hours</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-2 leading-relaxed font-semibold">
            Carrier Information:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>Standard message and data rates may apply</li>
            <li>Carriers are not liable for delayed or undelivered messages</li>
            <li>Supported carriers include AT&amp;T, Verizon, T-Mobile, Sprint, and most regional carriers</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-4 leading-relaxed font-semibold">
            SMS Data Protection Statement
          </p>
          <p className="text-[var(--color-ink)] mb-6 leading-relaxed">
            No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
          </p>
          <p className="text-[var(--color-ink)] mb-6 leading-relaxed">
            We implement strict data protection measures to safeguard your SMS opt-in information and consent records.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            4. Information Sharing &amp; Disclosure
          </h2>
          <p className="text-[var(--color-ink)] mb-4 leading-relaxed">
            We do not sell, rent, or trade personal information or Protected Health Information. We may share information with:
          </p>
          <p className="text-[var(--color-ink)] mb-2 leading-relaxed font-semibold">
            Healthcare Operations:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>Other healthcare providers involved in your care for treatment coordination purposes</li>
            <li>Health insurance companies and third-party payers for billing and claims processing</li>
            <li>Healthcare clearinghouses as necessary for payment processing</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-2 leading-relaxed font-semibold">
            Service Providers:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>Third-party vendors who assist in our operations (e.g., payment processing, appointment scheduling, electronic health records) under Business Associate Agreements</li>
            <li>SMS aggregators and providers solely for the purpose of delivering messages you&apos;ve consented to receive</li>
            <li>All service providers are contractually obligated to maintain confidentiality, security, and HIPAA compliance where applicable</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-2 leading-relaxed font-semibold">
            Legal Requirements:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>When required by law, regulation, or legal process</li>
            <li>To public health authorities as required or permitted by law</li>
            <li>For health oversight activities, judicial proceedings, or law enforcement purposes as permitted by HIPAA</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-2 leading-relaxed font-semibold">
            Business Transfers:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>In case of mergers, acquisitions, or sale of assets</li>
            <li>In such cases, your data remains protected under the terms of this policy and applicable law</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-6 leading-relaxed">
            All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and providers of the Text Message services.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            5. Data Security
          </h2>
          <p className="text-[var(--color-ink)] mb-4 leading-relaxed">
            We implement and maintain reasonable security measures to protect your personal information:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>Encryption of sensitive data in transit and at rest</li>
            <li>Secure access controls and authentication mechanisms</li>
            <li>Regular security assessments and updates</li>
            <li>Employee training on data protection</li>
            <li>Breach notification protocols in accordance with applicable laws</li>
            <li>Secure backup systems and disaster recovery procedures</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-6 leading-relaxed">
            Despite these measures, no method of transmission over the Internet or electronic storage is 100% secure. We strive to use commercially acceptable means to protect your personal information but cannot guarantee absolute security.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            6. Cookies &amp; Tracking Technologies
          </h2>
          <p className="text-[var(--color-ink)] mb-4 leading-relaxed">
            We use cookies and similar technologies to:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>Analyze site traffic and user behavior</li>
            <li>Remember your preferences</li>
            <li>Improve website functionality and user experience</li>
            <li>Measure the effectiveness of our services</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-6 leading-relaxed">
            You may control cookies through your browser settings. Disabling cookies may limit your ability to use certain features of our website.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            7. Your Rights &amp; Choices
          </h2>
          <p className="text-[var(--color-ink)] mb-4 leading-relaxed">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>Access, update, or delete your personal information</li>
            <li>Opt-out of marketing emails by clicking &quot;unsubscribe&quot; in our emails</li>
            <li>Opt-out of SMS messages by replying &quot;STOP&quot;</li>
            <li>Request information on how we process your data</li>
            <li>Withdraw consent at any time for future communications</li>
            <li>Lodge a complaint with a supervisory authority if you believe your rights have been violated</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-6 leading-relaxed">
            To exercise these rights, please contact us using the information in Section 10.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            8. Privacy, HIPAA &amp; Health Information
          </h2>
          <p className="text-[var(--color-ink)] mb-4 leading-relaxed">
            As a healthcare provider, we are committed to protecting your Protected Health Information (PHI) in accordance with the Health Insurance Portability and Accountability Act (HIPAA).
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>SMS is not a fully encrypted communication method. We minimize the amount of health information included in text messages to protect your privacy.</li>
            <li>We will not include detailed medical records, diagnoses, lab results, or other sensitive clinical data in SMS messages.</li>
            <li>By opting in, you acknowledge that standard SMS messages may be intercepted or read by unauthorized parties due to the nature of wireless communications, and you accept this risk for the convenience of receiving appointment-related text messages.</li>
            <li>Your consent to receive SMS messages is separate from and does not replace any HIPAA authorizations or medical consent forms.</li>
            <li>We comply with the Telephone Consumer Protection Act (TCPA), HIPAA, CTIA guidelines, and all applicable federal and state regulations regarding SMS communications and health information.</li>
          </ul>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            9. Changes to This Privacy Policy
          </h2>
          <p className="text-[var(--color-ink)] mb-6 leading-relaxed">
            We may update this policy periodically. The latest version will always be available on our website with the effective date. For significant changes, we will notify you by email or through a notice on our website.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            10. Contact Us
          </h2>
          <p className="text-[var(--color-ink)] mb-4 leading-relaxed">
            If you have questions about this Privacy Policy or how your information is handled, contact us at:
          </p>
          <div className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-lg p-6 mb-8">
            <p className="text-[var(--color-ink)] font-semibold mb-2">JROSE WELLNESS</p>
            <p className="text-[var(--color-muted)] mb-2">Phone: (914) 916-6376</p>
            <p className="text-[var(--color-muted)] mb-2">Email: jrosewellnesspllc@gmail.com</p>
            <p className="text-[var(--color-muted)]">Website: https://jrosewellness.com</p>
          </div>
          <p className="text-[var(--color-ink)] mb-4 leading-relaxed">
            To file a HIPAA complaint, you may also contact:
          </p>
          <div className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-lg p-6 mb-8">
            <p className="text-[var(--color-ink)] font-semibold mb-2">U.S. Department of Health and Human Services</p>
            <p className="text-[var(--color-ink)] mb-2">Office for Civil Rights</p>
            <p className="text-[var(--color-ink)]">Website: www.hhs.gov/ocr</p>
          </div>
          <p className="text-[var(--color-ink)] leading-relaxed">
            By using our website and services, you consent to this Privacy Policy. This policy does not replace or modify the informed consent process for medical treatment or our HIPAA Notice of Privacy Practices.
          </p>
        </div>
      </div>
    </main>
  )
}
