import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Integrative Wellness Care Near Virtual, Care | JROSE WELLNESS',
  description: 'Expert integrative wellness care serving Virtual, Care and surrounding communities. Telehealth and in-person appointments available in Fairfield, CT.',
  alternates: { canonical: '/locations/virtual-mental-health-care' },
  openGraph: {
    title: 'Integrative Wellness Care Near Virtual, Care | JROSE WELLNESS',
    description: 'Expert integrative wellness care serving Virtual, Care and surrounding communities. Telehealth and in-person appointments available in Fairfield, CT.',
    url: 'https://jrosewellness.com/locations/virtual-mental-health-care',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Integrative Wellness Care Near Virtual, Care | JROSE WELLNESS',
    description: 'Expert integrative wellness care serving Virtual, Care and surrounding communities. Telehealth and in-person appointments available in Fairfield, CT.',
    images: ['/og-image.png']
  }
}

export default function VirtualCarePage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 px-6">
        <div className="max-w-4xl mx-auto text-white">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/locations" className="hover:underline">Locations</Link>
            <span className="mx-2">›</span>
            <span>Virtual, Care</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Integrative Wellness Care Near Virtual, Care
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
            Serving patients from Virtual and surrounding Care communities.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-colors"
          >
            Schedule in Virtual
          </Link>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8 text-center">
            Serving the Virtual Area
          </h2>
          <div className="space-y-6 text-lg text-[var(--color-ink)]/80 leading-relaxed">
            <p>
              JROSE WELLNESS provides comprehensive integrative wellness care to patients throughout Virtual, Care and the surrounding region. Our Fairfield, CT practice is conveniently accessible for Virtual residents seeking holistic, patient-centered care. Whether you prefer in-person visits or the convenience of telehealth appointments, we make it easy to receive the expert care you deserve.
            </p>
            <p>
              Many Virtual patients choose JROSE WELLNESS because of our commitment to treating the whole person, not just symptoms. Our integrative approach combines evidence-based medicine with personalized treatment plans tailored to your unique needs and wellness goals. We understand the challenges of traveling for healthcare, which is why we offer flexible scheduling and comprehensive telehealth services for patients who cannot easily make the commute.
            </p>
          </div>

          <div className="mt-12 bg-[var(--color-light)] rounded-2xl h-64 flex flex-col items-center justify-center text-[var(--color-primary)]">
            <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <p className="text-[var(--color-ink)] font-medium">Serving Virtual, Care from Fairfield, CT</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Services Available to Virtual Patients
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] p-8 rounded-xl animate-fade-up hover:shadow-lg transition-shadow">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-accent)] mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Holistic Health Assessment
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-4 leading-relaxed">
                Comprehensive evaluation of your physical, mental, and emotional wellness to create personalized treatment strategies.
              </p>
              <Link href="/services" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center transition-colors">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-[var(--color-cream)] p-8 rounded-xl animate-fade-up hover:shadow-lg transition-shadow">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-accent)] mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Integrative Treatment Plans
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-4 leading-relaxed">
                Evidence-based therapies combined with complementary approaches for optimal wellness and lasting results.
              </p>
              <Link href="/services" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center transition-colors">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-[var(--color-cream)] p-8 rounded-xl animate-fade-up hover:shadow-lg transition-shadow">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-accent)] mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Ongoing Wellness Support
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-4 leading-relaxed">
                Continuous care and guidance to help you maintain balance, achieve goals, and thrive in all aspects of life.
              </p>
              <Link href="/services" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center transition-colors">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
          <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-accent)] mb-6 mx-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
          </svg>
          <h2 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-6 text-center">
            Can't Make the Drive? We Offer Telehealth
          </h2>
          <div className="space-y-4 text-lg text-[var(--color-ink)]/80 leading-relaxed">
            <p>
              For Virtual residents who prefer the convenience of receiving care from home, JROSE WELLNESS offers secure telehealth appointments. Our virtual visits provide the same high-quality, personalized integrative wellness care you would receive in person, without the commute.
            </p>
            <p>
              Telehealth appointments are ideal for follow-up visits, wellness consultations, treatment planning, and ongoing support. We accept most major insurance plans for telehealth services, and our team will verify your coverage and benefits before your first appointment. Schedule your virtual visit today and experience compassionate, comprehensive care from wherever you are.
            </p>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Schedule Telehealth Visit
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                How far is JROSE WELLNESS from Virtual, Care?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Our Fairfield, CT practice serves patients throughout the Virtual area. Travel time varies depending on your specific location, but many patients find the commute manageable for the quality of integrative care we provide. For those who prefer not to travel, we offer convenient telehealth appointments that bring our services directly to you.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                What are the best directions from Virtual to your office?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Detailed directions to our Fairfield location are available on our contact page. We recommend using GPS navigation for the most current route information. Our office is easily accessible from major roads, and we're happy to provide specific guidance when you call to schedule your appointment. Ample parking is available on-site.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Do you offer telehealth for Virtual patients?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Yes! We offer comprehensive telehealth services for Virtual residents. Our secure video appointments allow you to receive expert integrative wellness care from the comfort of your home. Telehealth is ideal for consultations, follow-ups, treatment planning, and ongoing wellness support. Most insurance plans cover telehealth visits, and we'll verify your benefits before your first appointment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Is your office accessible and what parking is available?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Our Fairfield office is fully accessible and designed with patient comfort in mind. We provide convenient on-site parking with accessible spaces near the entrance. If you have specific accessibility needs or questions about our facilities, please don't hesitate to contact us before your visit so we can ensure a comfortable experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 px-6 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-6 font-light">
            Get Expert Care from Virtual
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Experience comprehensive integrative wellness care tailored to your unique needs. Schedule your appointment today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] hover:bg-[var(--color-cream)] px-8 py-4 rounded-lg font-medium transition-colors"
          >
            Schedule Your Visit
          </Link>
        </div>
      </section>
    </main>
  )
}