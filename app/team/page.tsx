import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Meet Our Team | JROSE WELLNESS',
  description: 'Meet the compassionate providers at JROSE WELLNESS delivering personalized integrative mental health care in Fairfield, CT through convenient telehealth appointments.',
  alternates: { canonical: '/team' },
  openGraph: {
    title: 'Meet Our Team | JROSE WELLNESS',
    description: 'Meet the compassionate providers at JROSE WELLNESS delivering personalized integrative mental health care in Fairfield, CT through convenient telehealth appointments.',
    url: 'https://jrosewellness.com/team',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet Our Team | JROSE WELLNESS',
    description: 'Meet the compassionate providers at JROSE WELLNESS delivering personalized integrative mental health care in Fairfield, CT through convenient telehealth appointments.',
    images: ['/og-image.png']
  }
}

export default function TeamPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-6xl font-light mb-6">Meet Our Team</h1>
          <p className="text-xl leading-relaxed opacity-90">
            Compassionate providers dedicated to your whole-person wellness through personalized, integrative mental health care
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-16">
            Our Providers &amp; Staff
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* TODO(optimize): replace with real provider bios + headshots once supplied */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm hover:shadow-lg transition-shadow animate-fade-up">
              <div className="relative bg-[var(--color-light)] h-72 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="w-20 h-20 stroke-[var(--color-primary)] opacity-40"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                  Our Provider Team
                </h3>
                <p className="text-sm text-[var(--color-primary)] font-semibold uppercase tracking-wide mb-3">
                  Board-Certified Care
                </p>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Full provider profiles are coming soon. Please call to learn more about our team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-6">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-lg leading-relaxed mb-8 opacity-90">
            Our team is here to provide the compassionate, personalized care you deserve. Schedule your initial evaluation today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-full transition-colors"
          >
            Schedule Your Evaluation
          </Link>
        </div>
      </section>
    </main>
  )
}