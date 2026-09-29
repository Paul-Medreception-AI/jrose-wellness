import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Integrative Wellness Care Near Telehealth, Services | JROSE WELLNESS',
  description: 'Expert integrative wellness care serving patients from Telehealth and surrounding Services communities. Convenient telehealth options available.',
  alternates: { canonical: '/locations/telehealth-psychiatry-services' },
  openGraph: {
    title: 'Integrative Wellness Care Near Telehealth, Services | JROSE WELLNESS',
    description: 'Expert integrative wellness care serving patients from Telehealth and surrounding Services communities. Convenient telehealth options available.',
    url: 'https://jrosewellness.com/locations/telehealth-psychiatry-services',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Integrative Wellness Care Near Telehealth, Services | JROSE WELLNESS',
    description: 'Expert integrative wellness care serving patients from Telehealth and surrounding Services communities. Convenient telehealth options available.',
    images: ['/og-image.png']
  }
}

export default function TelehealthServicesLocationPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
            <span>›</span>
            <span className="text-white">Telehealth, Services</span>
          </nav>
          
          <h1 className="font-cormorant text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
            Integrative Wellness Care Near Telehealth, Services
          </h1>
          
          <p className="text-xl text-white/90 mb-10 max-w-3xl">
            Serving patients from Telehealth and surrounding Services communities.
          </p>
          
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-all hover:scale-105"
          >
            Schedule in Telehealth
          </Link>
        </div>
      </section>

      {/* SERVING */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8 text-center">
            Serving the Telehealth Area
          </h2>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-[var(--color-ink)] leading-relaxed mb-6">
              While our practice is based in Fairfield, CT, we proudly serve patients from Telehealth and the surrounding Services communities. Many of our Telehealth-area patients appreciate the personalized, comprehensive approach to integrative wellness care that sets JROSE WELLNESS apart from other options in the region. The commute is often shorter than expected, and our flexible scheduling makes it easy to fit appointments into your busy life.
            </p>
            
            <p className="text-[var(--color-ink)] leading-relaxed">
              For patients who prefer to receive care from the comfort of home, we offer comprehensive telehealth services that bring the same quality integrative wellness care directly to you. Whether you choose in-person visits or virtual appointments, you'll receive the same expert attention and individualized treatment plans that have made JROSE WELLNESS a trusted name in wellness care for patients throughout the Telehealth area and beyond.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center animate-fade-up">
            <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Services Available to Telehealth Patients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up hover:shadow-lg transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Comprehensive Wellness Assessments
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Thorough evaluations that address your physical, mental, and emotional well-being to create personalized treatment plans.
              </p>
              <Link 
                href="/services/wellness-assessments"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center gap-2 transition-colors"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up hover:shadow-lg transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Integrative Treatment Plans
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Holistic approaches combining conventional and complementary therapies tailored to your unique health goals.
              </p>
              <Link 
                href="/services/integrative-treatment"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center gap-2 transition-colors"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up hover:shadow-lg transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Ongoing Wellness Support
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Continuous care and follow-up to monitor progress, adjust treatments, and support your long-term wellness journey.
              </p>
              <Link 
                href="/services/wellness-support"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center gap-2 transition-colors"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* TELEHEALTH SECTION */}
      <section className="px-6 py-20">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-6 text-center">
            Can't Make the Drive? We Offer Telehealth
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-[var(--color-ink)] leading-relaxed mb-6">
              We understand that traveling from Telehealth isn't always convenient. That's why JROSE WELLNESS offers secure, HIPAA-compliant telehealth appointments for patients throughout the Services area. Our virtual visits provide the same comprehensive integrative wellness care you'd receive in person—from the comfort and privacy of your own home.
            </p>
            
            <p className="text-[var(--color-ink)] leading-relaxed">
              Telehealth appointments are available for initial consultations, follow-up visits, and ongoing treatment management. Most insurance plans cover telehealth services at the same rate as in-person visits. Our team will verify your coverage and help you understand your benefits before your first appointment.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                How far is JROSE WELLNESS from Telehealth?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our practice is conveniently located in Fairfield, CT, easily accessible from Telehealth and the surrounding Services communities. Most patients find the drive manageable, and many appreciate that the quality of specialized integrative wellness care is worth the short trip. We also offer flexible scheduling to accommodate your commute.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                What are the best directions from Telehealth to your office?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our Fairfield office is easy to reach from Telehealth via major highways and local roads. Detailed directions and parking information will be provided when you schedule your appointment. We're located in a convenient area with ample parking and easy access for all patients.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Do you offer telehealth for patients in the Telehealth area?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! We offer comprehensive telehealth services for patients throughout Telehealth and Services. Virtual appointments provide the same personalized integrative wellness care as in-person visits, with the added convenience of receiving care from your own home. Most insurance plans cover telehealth at the same rate as office visits.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Is your office accessible and easy to find?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Absolutely. Our Fairfield location features convenient parking, wheelchair accessibility, and clear signage to help you find us easily. We strive to make every visit as comfortable and stress-free as possible from the moment you arrive. If you have specific accessibility needs, please let us know when scheduling so we can ensure everything is prepared for your visit.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-white mb-6">
            Get Expert Care from Telehealth
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Experience personalized integrative wellness care designed around your unique needs. Schedule your consultation today.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-lg font-medium transition-all hover:scale-105"
          >
            Schedule Your Visit
          </Link>
        </div>
      </section>

    </main>
  )
}