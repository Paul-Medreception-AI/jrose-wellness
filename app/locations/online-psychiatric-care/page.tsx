import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Integrative Wellness Care Near Remote, Online | JROSE WELLNESS',
  description: 'Expert integrative wellness care serving Remote, Online and surrounding communities. Telehealth and in-person appointments available. Schedule your visit today.',
  alternates: { canonical: '/locations/online-psychiatric-care' },
  openGraph: {
    title: 'Integrative Wellness Care Near Remote, Online | JROSE WELLNESS',
    description: 'Expert integrative wellness care serving Remote, Online and surrounding communities. Telehealth and in-person appointments available. Schedule your visit today.',
    url: 'https://jrosewellness.com/locations/online-psychiatric-care',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Integrative Wellness Care Near Remote, Online | JROSE WELLNESS',
    description: 'Expert integrative wellness care serving Remote, Online and surrounding communities. Telehealth and in-person appointments available. Schedule your visit today.',
    images: ['/og-image.png']
  }
}

export default function OnlinePsychiatricCarePage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/locations" className="hover:underline">Locations</Link>
            <span className="mx-2">›</span>
            <span>Remote, Online</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light mb-6 leading-tight">
            Integrative Wellness Care Near Remote, Online
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Serving patients from Remote and surrounding Online communities.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105"
          >
            Schedule in Remote
          </Link>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-8 text-center">
            Serving the Remote Area
          </h2>
          <div className="space-y-6 text-lg text-[var(--color-ink)]/80 mb-12">
            <p>
              Located in Fairfield, CT, JROSE WELLNESS is proud to serve patients from Remote and the surrounding Online region. Whether you're making the commute for specialized integrative wellness care or prefer the convenience of our telehealth services, we're committed to making expert care accessible to you.
            </p>
            <p>
              Many Remote residents choose JROSE WELLNESS for our comprehensive approach to wellness that goes beyond traditional treatment models. Our integrative methods combine conventional medicine with complementary therapies, offering you personalized care that addresses your unique health goals. For those who find travel challenging, our secure telehealth platform ensures you receive the same quality care from the comfort of your home.
            </p>
          </div>

          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center animate-fade-up">
            <svg stroke="var(--color-primary)" fill="none" strokeWidth={1.5} viewBox="0 0 24 24" className="w-16 h-16">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-12 text-center">
            Services Available to Remote Patients
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-up">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Integrative Health Assessments</h3>
              <p className="text-[var(--color-muted)] mb-4">
                Comprehensive evaluations that examine your physical, emotional, and lifestyle factors to create personalized wellness plans.
              </p>
              <Link href="/services/integrative-assessments" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium">
                Learn More →
              </Link>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-up">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.23 0 4.462l-1.8 1.8m-2.6-3.9V21m-4.5 0H9" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Nutritional Counseling</h3>
              <p className="text-[var(--color-muted)] mb-4">
                Evidence-based nutrition guidance tailored to your health goals, dietary preferences, and lifestyle needs.
              </p>
              <Link href="/services/nutrition" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium">
                Learn More →
              </Link>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-up">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Stress Management & Mindfulness</h3>
              <p className="text-[var(--color-muted)] mb-4">
                Practical techniques and therapeutic support to help you manage stress, improve resilience, and enhance well-being.
              </p>
              <Link href="/services/stress-management" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-accent)] mb-6 mx-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mb-6 text-center">
              Can't Make the Drive? We Offer Telehealth
            </h2>
            <p className="text-lg text-[var(--color-ink)]/80 text-center mb-6">
              For Remote residents who prefer the convenience of virtual visits, JROSE WELLNESS offers secure telehealth appointments. Receive the same comprehensive integrative wellness care from the comfort of your home, with flexible scheduling that fits your busy life.
            </p>
            <p className="text-[var(--color-muted)] text-center">
              Most insurance plans cover telehealth services. Contact us to verify your coverage and schedule your virtual consultation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                How far is JROSE WELLNESS from Remote?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our practice is located in Fairfield, CT, serving the Remote area. Many patients find the drive manageable for the specialized integrative wellness care we provide. For those who prefer not to travel, we offer convenient telehealth appointments that deliver the same quality care remotely.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                What are the best directions from Remote to your Fairfield office?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our Fairfield office is easily accessible from Remote and surrounding Online communities. Once you schedule your appointment, we'll provide detailed directions and parking information. If you have any questions about finding us, our team is happy to help guide you.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Do you offer telehealth for Remote patients?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! We offer secure, HIPAA-compliant telehealth services for Remote residents. Virtual appointments are convenient, private, and allow you to receive expert integrative wellness care without the commute. Many of our services are available via telehealth, and most insurance plans provide coverage.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Is parking available at your Fairfield location?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes, we provide convenient parking for all patients visiting our Fairfield office. Our facility is designed to be accessible and welcoming. If you have specific accessibility needs or questions about parking, please let us know when scheduling your appointment so we can ensure a smooth visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-6">
            Get Expert Care from Remote
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Schedule your appointment today and experience comprehensive integrative wellness care.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105"
          >
            Schedule Your Visit
          </Link>
        </div>
      </section>
    </main>
  )
}