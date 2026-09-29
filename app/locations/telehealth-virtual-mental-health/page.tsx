import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Integrative Wellness Care Virtual, Nationwide | JROSE WELLNESS',
  description: 'Expert integrative wellness care serving Virtual, Nationwide and surrounding communities. Telehealth available. Schedule your consultation today.',
  alternates: { canonical: '/locations/telehealth-virtual-mental-health' },
  openGraph: {
    title: 'Integrative Wellness Care Virtual, Nationwide | JROSE WELLNESS',
    description: 'Expert integrative wellness care serving Virtual, Nationwide and surrounding communities. Telehealth available. Schedule your consultation today.',
    url: 'https://jrosewellness.com/locations/telehealth-virtual-mental-health',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Integrative Wellness Care Virtual, Nationwide | JROSE WELLNESS',
    description: 'Expert integrative wellness care serving Virtual, Nationwide and surrounding communities. Telehealth available. Schedule your consultation today.',
    images: ['/og-image.png']
  }
}

export default function TelehealthVirtualPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm mb-8 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
            <span>›</span>
            <span className="text-white">Virtual, Nationwide</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 animate-fade-up">
            Integrative Wellness Care Near Virtual, Nationwide
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl animate-fade-up">
            Serving patients from Virtual and surrounding Nationwide communities.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-all hover:scale-105 animate-fade-up"
          >
            Schedule in Virtual
          </Link>
        </div>
      </section>

      {/* Serving */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-primary)] mb-8 animate-fade-up">
            Serving the Virtual Area
          </h2>
          <div className="space-y-6 text-lg text-[var(--color-ink)]/80 leading-relaxed animate-fade-up">
            <p>
              JROSE WELLNESS is proud to serve patients throughout Virtual, Nationwide and the broader region. Whether you're located directly in Virtual or in nearby communities across Nationwide, our integrative wellness care is accessible and convenient. Many of our Virtual patients appreciate the ease of connecting with us through telehealth, eliminating commute time while receiving the same comprehensive, personalized care.
            </p>
            <p>
              Patients from Virtual choose JROSE WELLNESS because we offer a holistic, patient-centered approach that goes beyond symptom management. Our integrative wellness care combines evidence-based treatments with lifestyle and nutritional support, creating sustainable pathways to health. For Virtual residents seeking an alternative to conventional care, we provide telehealth appointments that fit seamlessly into your schedule, making expert wellness support more accessible than ever.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center mt-12 animate-fade-up">
            <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-primary)] text-center mb-12 animate-fade-up">
            Services Available to Virtual Patients
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-3">
                Holistic Health Assessments
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-4 leading-relaxed">
                Comprehensive evaluations that look at your complete health picture, including lifestyle, nutrition, stress, and physical wellness.
              </p>
              <Link href="/services" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-3">
                Nutritional Counseling
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-4 leading-relaxed">
                Personalized nutrition strategies designed to support your unique health goals and optimize your body's natural healing processes.
              </p>
              <Link href="/services" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-3">
                Stress & Lifestyle Management
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-4 leading-relaxed">
                Evidence-based techniques to help you manage stress, improve sleep, build resilience, and create sustainable healthy habits.
              </p>
              <Link href="/services" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth Callout */}
      <section className="max-w-7xl mx-auto px-6 my-20">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-cormorant text-3xl md:text-4xl text-[var(--color-primary)] mb-6">
              Can't Make the Drive? We Offer Telehealth
            </h2>
            <p className="text-lg text-[var(--color-ink)]/80 leading-relaxed mb-6">
              Virtual residents can access the full range of JROSE WELLNESS integrative wellness care services from the comfort of home. Our secure telehealth platform makes it easy to connect with our team without the commute, offering the same personalized, comprehensive care you would receive in person.
            </p>
            <p className="text-lg text-[var(--color-ink)]/80 leading-relaxed">
              Telehealth appointments are available for initial consultations, follow-up visits, nutritional counseling, and wellness coaching. Most major insurance plans cover telehealth services. Contact us to verify your coverage and schedule your virtual appointment.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-primary)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div className="animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-3">
                How far is JROSE WELLNESS from Virtual, Nationwide?
              </h3>
              <p className="text-[var(--color-ink)]/80 leading-relaxed">
                While our primary office is based in Fairfield, CT, we serve Virtual patients primarily through our convenient telehealth platform. This eliminates travel time entirely and allows you to receive expert integrative wellness care from anywhere in Nationwide. For patients who prefer in-person visits, we're happy to discuss travel options and scheduling.
              </p>
            </div>

            <div className="animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-3">
                What are the best directions from Virtual to your office?
              </h3>
              <p className="text-[var(--color-ink)]/80 leading-relaxed">
                For Virtual patients interested in in-person appointments at our Fairfield, CT location, please contact our office for specific directions and travel guidance. However, most Virtual residents find our telehealth services to be the most convenient option, providing full access to care without the need for travel.
              </p>
            </div>

            <div className="animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-3">
                Do you offer telehealth for Virtual patients?
              </h3>
              <p className="text-[var(--color-ink)]/80 leading-relaxed">
                Yes! Telehealth is our primary service delivery method for Virtual residents. We offer comprehensive virtual consultations, follow-up appointments, nutritional counseling, and wellness coaching through our secure, HIPAA-compliant telehealth platform. You'll receive the same high-quality, personalized care as an in-person visit, with added convenience and flexibility.
              </p>
            </div>

            <div className="animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-3">
                Is parking and accessibility available if I visit in person?
              </h3>
              <p className="text-[var(--color-ink)]/80 leading-relaxed">
                Our Fairfield, CT office offers convenient parking and is fully accessible for patients with mobility needs. If you're traveling from Virtual and plan an in-person visit, our staff will provide detailed information about parking, building access, and any accommodations you may need to ensure a comfortable experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6 animate-fade-up">
            Get Expert Care from Virtual
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-fade-up">
            Experience comprehensive integrative wellness care designed around your unique needs. Schedule your consultation today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-lg font-medium text-lg transition-all hover:scale-105 animate-fade-up"
          >
            Schedule Your Appointment
          </Link>
        </div>
      </section>
    </main>
  )
}