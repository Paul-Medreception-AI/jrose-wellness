import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | JROSE WELLNESS',
  description: 'Find answers to common questions about our integrative wellness care, telehealth appointments, insurance, medication management, and what to expect during your first visit.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'Frequently Asked Questions | JROSE WELLNESS',
    description: 'Find answers to common questions about our integrative wellness care, telehealth appointments, insurance, medication management, and what to expect during your first visit.',
    url: 'https://jrosewellness.com/faq',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | JROSE WELLNESS',
    description: 'Find answers to common questions about our integrative wellness care, telehealth appointments, insurance, medication management, and what to expect during your first visit.',
    images: ['/og-image.png']
  }
}

export default function FAQPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="mb-6 text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span>FAQ</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 animate-fade-up">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-up">
            Everything you need to know about our practice and services
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-3">
            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                Are you accepting new patients?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, we are currently accepting new patients for integrative wellness care services. We welcome individuals seeking comprehensive mental health support through telehealth appointments. To get started, simply schedule your Initial Psychiatric Evaluation through our contact page, and we'll be in touch to confirm your appointment and provide you with all the necessary information for your first visit.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                Do you accept insurance?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                We are currently an out-of-network provider, which means we do not bill insurance directly. However, we can provide you with a detailed superbill that you can submit to your insurance company for potential out-of-network reimbursement. Many patients find that their insurance covers a portion of the cost when submitting these claims. We recommend contacting your insurance provider beforehand to understand your out-of-network mental health benefits, including deductibles, copays, and reimbursement rates.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                What should I expect during my first appointment?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Your Initial Psychiatric Evaluation is a comprehensive first session lasting approximately 60-90 minutes. During this time, we'll discuss your current concerns, mental and physical health history, family history, lifestyle factors, and wellness goals. This is a safe, judgment-free space where you can share openly about what you've been experiencing. We'll work together to understand the complete picture of your health so we can develop a personalized treatment plan that addresses your unique needs and honors the connection between your emotional, physical, and lifestyle well-being.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                How do telehealth appointments work?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                All of our appointments are conducted via secure, HIPAA-compliant video conferencing from the comfort of your own home. You'll receive a link to join your session before your scheduled appointment time. All you need is a smartphone, tablet, or computer with a camera and microphone, plus a private, quiet space where you feel comfortable talking. Telehealth offers the same quality of care as in-person visits while providing greater flexibility and eliminating travel time. Most patients find virtual appointments to be more convenient and equally effective for their mental health care needs.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                What payment methods do you accept?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                We accept all major credit cards, debit cards, and HSA/FSA cards for payment. Payment is due at the time of service, and you'll receive a receipt immediately after your appointment. For your convenience, we securely store your payment information so that billing is seamless for follow-up appointments. If you have any questions about pricing or payment plans, please don't hesitate to reach out to us before your first appointment.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                How often will I need follow-up appointments?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                The frequency of follow-up appointments is personalized based on your individual needs and treatment plan. Initially, many patients benefit from more frequent check-ins, such as every 2-4 weeks, to monitor progress and make any necessary adjustments to medications or treatment approaches. As you stabilize and progress in your wellness journey, appointments may be spaced further apart to monthly or quarterly visits. We'll work together to determine the schedule that provides you with the right level of support while respecting your time and preferences.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                Do you prescribe medications?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, as a board-certified psychiatric nurse practitioner and family nurse practitioner, I am licensed to prescribe psychiatric medications when appropriate. Medication management is one component of our integrative approach to wellness, and prescriptions are always carefully individualized based on your specific symptoms, health history, and treatment goals. We take time to discuss the benefits and potential side effects of any medication, and we continuously monitor effectiveness through regular follow-up appointments. Medication is never mandatory and is always part of a broader, whole-person treatment plan that may also include lifestyle modifications and therapeutic approaches.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                What is your cancellation policy?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                We require at least 24 hours' notice if you need to cancel or reschedule your appointment. This allows us to offer that time slot to another patient who may be waiting for care. Cancellations made with less than 24 hours' notice or missed appointments without notification may be subject to a cancellation fee. We understand that emergencies and unexpected situations arise, and we'll always work with you compassionately when circumstances are beyond your control. To cancel or reschedule, please contact us as soon as possible.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                Do I need a referral to schedule an appointment?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                No, you do not need a referral from another healthcare provider to schedule an appointment with us. We welcome self-referrals and are happy to serve as your primary mental health care provider. However, if you are working with other healthcare professionals such as a primary care physician or therapist, we strongly encourage collaborative care and are happy to coordinate with your existing providers to ensure comprehensive, integrated treatment. With your permission, we can communicate with your care team to provide the most effective support for your overall wellness.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                What conditions do you treat?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                We provide comprehensive treatment for a wide range of mental health conditions including anxiety disorders, depression, substance use disorders, mood disorders, stress-related conditions, and other psychiatric concerns. Our integrative approach addresses not only the mental health symptoms but also the physical, emotional, and lifestyle factors that contribute to your overall well-being. During your Initial Psychiatric Evaluation, we'll thoroughly assess your concerns to determine if our services are the right fit for your needs. If specialized care beyond our scope is needed, we'll provide appropriate referrals to ensure you receive the best possible support.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                What if I'm experiencing a mental health crisis?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                If you are experiencing a mental health crisis or emergency, please call 911 or go to your nearest emergency room immediately. You can also contact the 988 Suicide and Crisis Lifeline by dialing 988, which provides 24/7 free and confidential support. For non-emergency urgent concerns between scheduled appointments, please contact our office, and we will do our best to accommodate you as quickly as possible. Our telehealth practice is designed for ongoing mental health care and medication management, but we are not equipped to handle acute crisis situations that require immediate intervention.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                Can you provide therapy or counseling?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Our practice focuses on psychiatric evaluation, medication management, and integrative wellness care rather than traditional psychotherapy or long-term counseling. While our appointments include supportive discussions about your mental health, coping strategies, and wellness goals, they are not a substitute for ongoing talk therapy. Many of our patients benefit from working with both a psychiatric provider for medication management and a licensed therapist for regular counseling sessions. We're happy to provide referrals to trusted therapists in the area and coordinate care to ensure you receive comprehensive mental health support.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                Are telehealth appointments as effective as in-person visits?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, research has consistently shown that telehealth appointments for mental health care are just as effective as in-person visits for most conditions. In fact, many patients find that meeting virtually from the comfort and privacy of their own home reduces anxiety and allows them to be more open during sessions. Telehealth eliminates travel time and scheduling barriers, making it easier to maintain consistent care, which is crucial for mental health treatment. Our secure, HIPAA-compliant video platform allows for the same quality of assessment, medication management, and therapeutic support that you would receive in a traditional office setting.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                What geographic areas do you serve?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Our practice is based in Fairfield, CT, and we provide telehealth services to patients throughout Connecticut. Due to state licensing regulations, we can only see patients who are physically located in Connecticut at the time of their appointment. If you are a Connecticut resident but temporarily traveling out of state, please let us know, as we may need to reschedule your appointment for when you return. Our virtual care model allows us to serve patients across the state without the need for you to travel to our physical location.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                How long are follow-up appointments?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Follow-up appointments typically last 20-30 minutes, though the length may vary based on your individual needs and what we need to address during the session. These appointments are designed to monitor your progress, assess how medications are working, address any side effects or concerns, make adjustments to your treatment plan, and provide ongoing support. While shorter than the initial evaluation, follow-up sessions provide ample time for meaningful check-ins and ensure you're receiving continuous, attentive care throughout your wellness journey.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                What makes your approach different from other psychiatric providers?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Our practice emphasizes integrative wellness care, which means we look beyond just psychiatric symptoms to understand the complete picture of your health. As both a psychiatric nurse practitioner and a family nurse practitioner, I bring a unique perspective that addresses the connection between mental health, physical health, lifestyle factors, and overall well-being. We take the time to truly listen to your story, develop personalized treatment plans that honor your individual needs and goals, and provide ongoing support so you're never left to navigate your wellness journey alone. Our whole-person approach ensures that every aspect of your health is considered in your care.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                Can I continue taking medications prescribed by another provider?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, if you are currently taking psychiatric medications prescribed by another provider, we can often continue your existing medication regimen while we get to know you and assess your needs. During your Initial Psychiatric Evaluation, please bring a complete list of all medications you're currently taking, including dosages and prescribing providers. We'll review your current treatment, discuss what's working well and what could be improved, and make any necessary adjustments collaboratively. Our goal is to ensure continuity of care and avoid any disruption to medications that are effectively supporting your mental health. We'll coordinate with your previous provider as needed to ensure a smooth transition.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                How do I prepare for my first appointment?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                To prepare for your Initial Psychiatric Evaluation, gather a list of any current medications including dosages, previous mental health treatments you've tried, relevant medical history, and any questions or concerns you'd like to discuss. Think about your current symptoms, when they started, and how they're affecting your daily life. It's helpful to find a quiet, private space for your telehealth appointment where you feel comfortable talking openly. Make sure your device is charged and your internet connection is stable. Most importantly, come as you are—this is a safe, judgment-free space, and there's no need to have everything figured out before we meet.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                Do you treat children or adolescents?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Our practice primarily serves adult patients ages 18 and older. While I am trained as a family nurse practitioner, our current focus is on adult mental health and integrative wellness care. If you're seeking psychiatric care for a child or adolescent, we're happy to provide referrals to trusted providers who specialize in pediatric and adolescent psychiatry. Young people have unique developmental needs that are best served by practitioners with specialized training in child and adolescent mental health.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6 animate-fade-up">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-up">
            We're here to help. Reach out and we'll answer any questions you have about our integrative wellness services.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 animate-fade-up"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}