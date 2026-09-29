import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About JRose Wellness | Board-Certified Psychiatric NP',
  description: 'Meet the board-certified psychiatric and family nurse practitioner behind JRose Wellness. Whole-person mental health care through integrative, personalized treatment in Fairfield, CT.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About JRose Wellness | Board-Certified Psychiatric NP',
    description: 'Meet the board-certified psychiatric and family nurse practitioner behind JRose Wellness. Whole-person mental health care through integrative, personalized treatment in Fairfield, CT.',
    url: 'https://jrosewellness.com/about',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About JRose Wellness | Board-Certified Psychiatric NP',
    description: 'Meet the board-certified psychiatric and family nurse practitioner behind JRose Wellness. Whole-person mental health care through integrative, personalized treatment in Fairfield, CT.',
    images: ['/og-image.png'],
  },
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">About</span>
          </div>
          <h1 className="font-cormorant text-6xl font-light leading-tight">
            Whole-Person Mental Health Care That Honors Your Unique Journey
          </h1>
          <p className="text-xl text-white/80 mt-4 leading-relaxed">
            Integrative psychiatric care rooted in compassion, expertise, and a deep commitment to your wellbeing
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 lg:pr-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-[var(--color-ink)] leading-relaxed mb-6">
                  JRose Wellness PLLC was founded on the belief that true mental health care must address the whole person, not just symptoms. As a Board-Certified Psychiatric Nurse Practitioner and Family Nurse Practitioner, our founder brings a unique dual perspective that recognizes how deeply interconnected your mental, physical, and lifestyle health truly are. This integrative approach allows us to look beyond surface-level symptoms and understand the complex factors contributing to your wellbeing.
                </p>
                <p className="text-[var(--color-ink)] leading-relaxed mb-6">
                  Our practice philosophy centers on creating a safe, non-judgmental space where you can share your experiences openly and honestly. We believe that healing begins with being truly heard and understood. Every treatment plan is carefully tailored to your unique symptoms, personal history, lifestyle, and wellness goals. Rather than applying one-size-fits-all protocols, we take the time to understand what makes you unique and design care that fits your life.
                </p>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  Through convenient telehealth services, we make quality mental health care accessible without the barriers of commuting, waiting rooms, or scheduling conflicts. Our commitment extends beyond initial treatment with regular follow-up sessions, progress monitoring, and continuous support. We partner with you throughout your wellness journey, adjusting care as needed and celebrating progress along the way. At JRose Wellness, you gain not just a provider, but a dedicated advocate for your long-term mental and physical health.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up sticky top-8">
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-primary)] mb-6">
                  Credentials & Certifications
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Board-Certified Psychiatric Mental Health Nurse Practitioner</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Board-Certified Family Nurse Practitioner</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Evidence-Based Integrative Treatment Approaches</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Medication Management Specialist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Substance Use Disorder Treatment Certified</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Telehealth Psychiatry Licensed Provider</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="font-cormorant text-4xl text-[var(--color-primary)] text-center mb-16">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-up">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-[var(--color-primary)] mb-3">
                Time-Centered Care
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                We never rush your sessions. Every appointment provides the time needed to truly understand your experiences and create meaningful progress together.
              </p>
            </div>

            <div className="text-center animate-fade-up">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-[var(--color-primary)] mb-3">
                Compassion First
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Your struggles are met with empathy, not judgment. We create a safe environment where you can share openly and feel genuinely supported.
              </p>
            </div>

            <div className="text-center animate-fade-up">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v6m0 6v6m10-11h-6m-6 0H1" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-[var(--color-primary)] mb-3">
                Integrative Wellness
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Mental health doesn't exist in isolation. We address the connections between your emotional state, physical health, lifestyle, and environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-cormorant text-4xl font-light mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Take the first step toward whole-person wellness with personalized mental health care that honors your unique journey.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Schedule Your Evaluation
          </Link>
        </div>
      </section>
    </>
  )
}