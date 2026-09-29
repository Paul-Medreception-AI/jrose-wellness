import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resources & Patient Education | JROSE WELLNESS',
  description: 'Evidence-based information and articles to support your mental health journey. Learn about anxiety, depression, medication management, and integrative wellness care.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Resources & Patient Education | JROSE WELLNESS',
    description: 'Evidence-based information and articles to support your mental health journey. Learn about anxiety, depression, medication management, and integrative wellness care.',
    url: 'https://jrosewellness.com/blog',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resources & Patient Education | JROSE WELLNESS',
    description: 'Evidence-based information and articles to support your mental health journey. Learn about anxiety, depression, medication management, and integrative wellness care.',
    images: ['/og-image.png']
  }
}

export default function BlogPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light mb-6">
            Resources & Patient Education
          </h1>
          <p className="text-xl text-white/90">
            Evidence-based information to support your mental health journey
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <article className="bg-white rounded-2xl p-10 border border-[var(--color-border)] shadow-sm animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">
                Featured
              </span>
              <span className="w-1 h-1 rounded-full bg-[var(--color-border)]"></span>
              <span className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
                Integrative Wellness
              </span>
            </div>
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-6">
              The Mind-Body Connection: How Physical Health Influences Mental Wellness
            </h2>
            <div className="prose prose-lg max-w-none text-[var(--color-muted)] space-y-4 mb-8">
              <p>
                Modern psychiatric care increasingly recognizes that mental health cannot be separated from physical health. Sleep quality, nutrition, inflammation, hormonal balance, and chronic pain all profoundly impact mood, anxiety levels, and cognitive function. An integrative approach considers the whole person, not just isolated symptoms.
              </p>
              <p>
                When patients present with depression or anxiety, a comprehensive evaluation includes understanding their physical health history, lifestyle factors, and potential underlying medical contributors. For example, thyroid dysfunction, vitamin deficiencies, and gut health issues can all manifest as psychiatric symptoms. Addressing these root causes alongside traditional mental health treatment often leads to more sustainable, meaningful improvements.
              </p>
              <p>
                This whole-person perspective also means empowering patients to understand how their daily choices, stress management practices, movement habits, and sleep hygiene directly influence their mental wellness. Integrative care is collaborative, personalized, and rooted in the understanding that healing happens when we honor the connection between mind and body.
              </p>
            </div>
            <Link
              href="/blog/mind-body-connection"
              className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors"
            >
              Read More
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </article>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold mb-4 block">
                Mental Health
              </span>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                5 Signs It May Be Time to See a Psychiatric Provider
              </h3>
              <p className="text-sm text-[var(--color-muted)] mb-6 leading-relaxed">
                Knowing when to seek professional support can be challenging. Learn the key indicators that it's time to reach out for comprehensive mental health care.
              </p>
              <Link
                href="/blog/signs-to-see-provider"
                className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-medium transition-colors"
              >
                Read More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>

            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold mb-4 block">
                Anxiety
              </span>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Understanding the Different Types of Anxiety Disorders
              </h3>
              <p className="text-sm text-[var(--color-muted)] mb-6 leading-relaxed">
                Anxiety isn't one-size-fits-all. Explore the spectrum of anxiety disorders, from generalized anxiety to panic disorder, and how each is treated.
              </p>
              <Link
                href="/blog/types-of-anxiety"
                className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-medium transition-colors"
              >
                Read More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>

            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold mb-4 block">
                Depression
              </span>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                When Sadness Becomes Depression: Recognizing the Difference
              </h3>
              <p className="text-sm text-[var(--color-muted)] mb-6 leading-relaxed">
                Everyone feels sad sometimes, but clinical depression is different. Learn how to recognize when low mood requires professional intervention.
              </p>
              <Link
                href="/blog/sadness-vs-depression"
                className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-medium transition-colors"
              >
                Read More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>

            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold mb-4 block">
                Medication
              </span>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                What to Expect When Starting Psychiatric Medication
              </h3>
              <p className="text-sm text-[var(--color-muted)] mb-6 leading-relaxed">
                Starting medication for mental health can feel uncertain. This guide walks you through what to expect in the first weeks and months of treatment.
              </p>
              <Link
                href="/blog/starting-medication"
                className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-medium transition-colors"
              >
                Read More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>

            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold mb-4 block">
                Lifestyle
              </span>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                The Role of Sleep in Mental Health Recovery
              </h3>
              <p className="text-sm text-[var(--color-muted)] mb-6 leading-relaxed">
                Quality sleep is foundational to mental wellness. Discover how sleep impacts mood, anxiety, and cognitive function, and practical strategies for better rest.
              </p>
              <Link
                href="/blog/sleep-mental-health"
                className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-medium transition-colors"
              >
                Read More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>

            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold mb-4 block">
                Substance Use
              </span>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Understanding the Connection Between Trauma and Substance Use
              </h3>
              <p className="text-sm text-[var(--color-muted)] mb-6 leading-relaxed">
                Many people struggling with substance use have experienced trauma. Learn how addressing underlying trauma supports lasting recovery.
              </p>
              <Link
                href="/blog/trauma-substance-use"
                className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-medium transition-colors"
              >
                Read More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>

            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold mb-4 block">
                ADHD
              </span>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                ADHD in Adults: More Than Just Focus Challenges
              </h3>
              <p className="text-sm text-[var(--color-muted)] mb-6 leading-relaxed">
                Adult ADHD often goes undiagnosed. Explore the full spectrum of symptoms, from executive dysfunction to emotional regulation difficulties.
              </p>
              <Link
                href="/blog/adhd-adults"
                className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-medium transition-colors"
              >
                Read More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>

            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold mb-4 block">
                Wellness
              </span>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Nutrition and Mental Health: The Gut-Brain Connection
              </h3>
              <p className="text-sm text-[var(--color-muted)] mb-6 leading-relaxed">
                Emerging research shows how gut health influences mood and cognition. Learn how dietary choices can support your mental wellness journey.
              </p>
              <Link
                href="/blog/nutrition-mental-health"
                className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-medium transition-colors"
              >
                Read More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>

            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold mb-4 block">
                Telehealth
              </span>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                The Benefits of Virtual Mental Health Care
              </h3>
              <p className="text-sm text-[var(--color-muted)] mb-6 leading-relaxed">
                Telehealth has transformed access to psychiatric care. Discover how virtual appointments offer convenience, privacy, and consistent support.
              </p>
              <Link
                href="/blog/telehealth-benefits"
                className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-medium transition-colors"
              >
                Read More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl font-light mb-6">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Schedule a comprehensive evaluation and discover personalized care that honors the whole you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-full font-medium transition-colors"
          >
            Schedule Your Evaluation
          </Link>
        </div>
      </section>
    </main>
  )
}