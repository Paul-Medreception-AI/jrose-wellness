import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Patient Reviews | JROSE WELLNESS',
  description: 'Read what patients say about their experience with JROSE WELLNESS integrative mental health care in Fairfield, CT. Share your feedback and help others find the care they need.',
  alternates: { canonical: '/reviews' },
  openGraph: {
    title: 'Patient Reviews | JROSE WELLNESS',
    description: 'Read what patients say about their experience with JROSE WELLNESS integrative mental health care in Fairfield, CT. Share your feedback and help others find the care they need.',
    url: 'https://jrosewellness.com/reviews',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patient Reviews | JROSE WELLNESS',
    description: 'Read what patients say about their experience with JROSE WELLNESS integrative mental health care in Fairfield, CT. Share your feedback and help others find the care they need.',
    images: ['/og-image.png']
  }
}

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center animate-fade-up">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light mb-6">
            Patient Reviews
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your experience matters, and we welcome your honest feedback to help us continue providing compassionate, personalized care.
          </p>
        </div>
      </section>

      {/* Invite Section */}
      <section className="bg-[var(--color-cream)] py-24 animate-fade-up">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-4">
            We'd Love Your Feedback
          </h2>
          <p className="text-lg text-[var(--color-muted)] mb-8 leading-relaxed">
            As we grow our practice, your insights help us understand what's working well and where we can improve. If you've worked with us, we'd be grateful if you'd take a moment to share your experience so others seeking integrative mental health care can learn what to expect.
          </p>
          
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-md text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </Link>

          {/* TODO(optimize): drop in real Google/Healthgrades reviews here once available */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-24 animate-fade-up">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl text-white mb-6 font-light">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule your comprehensive evaluation and take the first step toward whole-person mental health care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[var(--color-primary)] hover:bg-[var(--color-cream)] px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule Your Evaluation
            </Link>
            <Link
              href="/services"
              className="inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300"
            >
              Learn About Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}