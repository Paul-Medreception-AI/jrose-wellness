import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'JROSE WELLNESS | Integrative Mental Health Care in Fairfield, CT',
  description: 'Board-certified psychiatric and family nurse practitioner offering personalized mental health support through telehealth. Whole-person wellness care addressing emotional, physical, and lifestyle health.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'JROSE WELLNESS | Integrative Mental Health Care in Fairfield, CT',
    description: 'Board-certified psychiatric and family nurse practitioner offering personalized mental health support through telehealth. Whole-person wellness care addressing emotional, physical, and lifestyle health.',
    url: 'https://jrosewellness.com/',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JROSE WELLNESS | Integrative Mental Health Care in Fairfield, CT',
    description: 'Board-certified psychiatric and family nurse practitioner offering personalized mental health support through telehealth. Whole-person wellness care addressing emotional, physical, and lifestyle health.',
    images: ['/og-image.png'],
  },
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-[90vh] bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] flex items-center text-white">
        <div className="max-w-5xl mx-auto px-6 text-center py-20 w-full">
          <h1 className="font-cormorant text-6xl sm:text-7xl font-light tracking-tight leading-tight">
            Nurturing Your Mind and Body Naturally Through Personalized Care
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mt-6 leading-relaxed">
            Board-certified psychiatric and family nurse practitioner offering comprehensive mental health support from the comfort of your home. Personalized treatment plans that address the connection between your emotional, physical, and lifestyle health.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-10">
            <Link
              href="/contact"
              className="bg-white text-[var(--color-dark)] px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Schedule Your Evaluation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Learn About Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white py-8 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold text-[var(--color-ink)] text-sm">Board-Certified Psychiatric NP</span>
            </div>
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold text-[var(--color-ink)] text-sm">Board-Certified Family NP</span>
            </div>
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold text-[var(--color-ink)] text-sm">Telehealth Available</span>
            </div>
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold text-[var(--color-ink)] text-sm">Personalized Care Plans</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl text-center text-[var(--color-ink)] mb-4">
            How We Can Help
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-16 max-w-2xl mx-auto">
            Comprehensive mental health services designed around your unique needs and wellness goals
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Initial Psychiatric Evaluation
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Comprehensive first session focused entirely on understanding your history, current concerns, and wellness goals. We take the time to create a complete picture of your mental and physical health to develop your personalized treatment plan.
              </p>
              <Link href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Anxiety Treatment
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Support for excessive worry, panic attacks, social anxiety, and stress that interferes with daily life, relationships, or sleep. Evidence-based approaches tailored to your unique symptoms and lifestyle.
              </p>
              <Link href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Depression Care
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Treatment for persistent sadness, low energy, loss of motivation, mood changes, or difficulty finding joy in everyday activities. Whole-person approach addressing emotional and physical contributors to depression.
              </p>
              <Link href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-block text-[var(--color-primary)] font-bold text-lg hover:underline">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-6 leading-tight">
                Whole-Person Mental Health Care That Honors Your Unique Journey
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-5">
                JRose Wellness PLLC was founded on the belief that true mental health care must address the whole person, not just symptoms. As a Board-Certified Psychiatric Nurse Practitioner and Family Nurse Practitioner, our founder brings a unique dual perspective that recognizes how deeply interconnected your mental, physical, and lifestyle health truly are. This integrative approach allows us to look beyond surface-level symptoms and understand the complex factors contributing to your wellbeing.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-8">
                Our practice philosophy centers on creating a safe, non-judgmental space where you can share your experiences openly and honestly. We believe that healing begins with being truly heard and understood. Every treatment plan is carefully tailored to your unique symptoms, personal history, lifestyle, and wellness goals. Rather than applying one-size-fits-all protocols, we take the time to understand what makes you unique and design care that fits your life.
              </p>
              <Link href="/about" className="inline-block text-[var(--color-primary)] font-semibold text-lg hover:underline">
                Meet Our Team →
              </Link>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-[var(--color-light)] rounded-2xl h-80 w-full flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-20 h-20 stroke-[var(--color-primary)] opacity-40">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[var(--color-ink)] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-16">
            Getting Started Is Simple
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-60 mb-4">01</div>
              <h3 className="font-cormorant text-2xl mb-4">Discovery Call</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                This is a safe space for you to share what you've been experiencing so we can fully understand your needs. We listen carefully to your concerns, history, and wellness goals to ensure we're the right fit for your care.
              </p>
            </div>
            <div className="text-center">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-60 mb-4">02</div>
              <h3 className="font-cormorant text-2xl mb-4">Personalized Care Plan</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                After your comprehensive consultation, we create a treatment plan tailored specifically to you. Your plan addresses your unique symptoms, lifestyle factors, and health goals with evidence-based approaches that honor the whole person.
              </p>
            </div>
            <div className="text-center">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-60 mb-4">03</div>
              <h3 className="font-cormorant text-2xl mb-4">Ongoing Sessions & Support</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                We meet with you regularly through convenient virtual sessions to monitor progress, make adjustments, and provide continuous support. You're never left alone to navigate your wellness journey, with regular check-ins and accessible care when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl font-light mb-6 leading-tight">
            Whole-Person Wellness Through Integrative Mental Health Care
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--color-dark)] font-bold px-12 py-5 rounded-2xl shadow-2xl hover:-translate-y-1 transition-all text-lg"
          >
            Schedule Your Evaluation
          </Link>
        </div>
      </section>
    </>
  )
}