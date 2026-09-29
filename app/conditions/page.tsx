import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mental Health Conditions We Treat | JROSE WELLNESS',
  description: 'Comprehensive integrative treatment for depression, anxiety, ADHD, PTSD, substance use disorders, and more. Personalized mental health care in Fairfield, CT.',
  alternates: { canonical: '/conditions' },
  openGraph: {
    title: 'Mental Health Conditions We Treat | JROSE WELLNESS',
    description: 'Comprehensive integrative treatment for depression, anxiety, ADHD, PTSD, substance use disorders, and more. Personalized mental health care in Fairfield, CT.',
    url: 'https://jrosewellness.com/conditions',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mental Health Conditions We Treat | JROSE WELLNESS',
    description: 'Comprehensive integrative treatment for depression, anxiety, ADHD, PTSD, substance use disorders, and more. Personalized mental health care in Fairfield, CT.',
    images: ['/og-image.png'],
  },
}

export default function ConditionsPage() {
  const conditions = [
    {
      name: 'Depression',
      slug: 'depression',
      description: 'Treatment for persistent sadness, low energy, loss of motivation, and difficulty finding joy. We address both emotional and physical contributors with personalized, whole-person care.',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
    },
    {
      name: 'Anxiety Disorders',
      slug: 'anxiety-disorders',
      description: 'Support for generalized anxiety, panic attacks, social anxiety, and excessive worry that interferes with daily life. Evidence-based approaches tailored to your unique symptoms and lifestyle.',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
    },
    {
      name: 'ADHD',
      slug: 'adhd',
      description: 'Comprehensive care for attention deficit hyperactivity disorder in adults and adolescents. We address focus, impulsivity, and executive function challenges with integrated treatment strategies.',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      name: 'Bipolar Disorder',
      slug: 'bipolar-disorder',
      description: 'Specialized treatment for mood cycling, manic episodes, and depressive periods. We create stable, sustainable treatment plans that help you maintain balance and quality of life.',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
    {
      name: 'PTSD & Trauma',
      slug: 'ptsd-trauma',
      description: 'Compassionate support for post-traumatic stress disorder, past trauma, and related symptoms like flashbacks, nightmares, and hypervigilance. Trauma-informed care in a safe, supportive environment.',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      name: 'OCD',
      slug: 'ocd',
      description: 'Treatment for obsessive-compulsive disorder, intrusive thoughts, and compulsive behaviors that impact daily functioning. Evidence-based approaches to reduce symptoms and improve quality of life.',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      ),
    },
    {
      name: 'Substance Use Disorders',
      slug: 'substance-use-disorders',
      description: 'Non-judgmental, compassionate support for alcohol and substance use challenges. Comprehensive treatment planning and ongoing recovery support in a safe, understanding environment.',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      ),
    },
    {
      name: 'Schizophrenia',
      slug: 'schizophrenia',
      description: 'Specialized care for schizophrenia and related psychotic disorders. Medication management and supportive treatment to help manage symptoms and maintain stability.',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      name: 'Eating Disorders',
      slug: 'eating-disorders',
      description: 'Compassionate treatment for anorexia, bulimia, binge eating disorder, and disordered eating patterns. Whole-person approach addressing physical health, emotional wellbeing, and relationship with food.',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
    },
    {
      name: 'Insomnia & Sleep Disorders',
      slug: 'insomnia-sleep-disorders',
      description: 'Treatment for chronic insomnia, sleep disturbances, and sleep-wake cycle issues that impact mental and physical health. Integrative approaches to restore healthy sleep patterns.',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      ),
    },
    {
      name: 'Personality Disorders',
      slug: 'personality-disorders',
      description: 'Specialized support for borderline personality disorder, avoidant personality disorder, and other personality-related patterns. Long-term treatment focused on stability and interpersonal functioning.',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
    },
    {
      name: 'Grief & Loss',
      slug: 'grief-loss',
      description: 'Compassionate support for grief, bereavement, and adjustment to significant life changes or losses. Safe space to process emotions and develop healthy coping strategies during difficult transitions.',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
        </svg>
      ),
    },
  ]

  const warningSigns = [
    {
      title: 'Persistent Symptoms',
      description: 'Symptoms lasting more than two weeks that interfere with work, relationships, or daily activities.',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 stroke-[var(--color-accent)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Significant Life Changes',
      description: 'Difficulty coping with major transitions, loss, trauma, or life stressors that feel overwhelming.',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 stroke-[var(--color-accent)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      ),
    },
    {
      title: 'Withdrawal or Isolation',
      description: 'Pulling away from friends, family, or activities you once enjoyed, feeling disconnected or numb.',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 stroke-[var(--color-accent)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light mb-6">
            Conditions We Treat
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Evidence-based care for a full range of mental health and behavioral health conditions
          </p>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-4">
            Comprehensive Mental Health Care
          </h2>
          <p className="text-[var(--color-muted)] text-center text-lg mb-16 max-w-3xl mx-auto">
            We provide personalized, integrative treatment for a wide range of mental health conditions. Every treatment plan is tailored to your unique symptoms, lifestyle, and wellness goals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition) => (
              <Link
                key={condition.slug}
                href={`/conditions/${condition.slug}`}
                className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-up"
              >
                <div className="flex flex-col">
                  {condition.icon}
                  <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-4">
                    {condition.name}
                  </h3>
                  <p className="text-[var(--color-muted)] text-sm mt-3 leading-relaxed">
                    {condition.description}
                  </p>
                  <span className="text-[var(--color-primary)] font-semibold text-sm mt-4 hover:underline">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* When to Seek Help */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-16">
            When to Seek Help
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {warningSigns.map((sign, index) => (
              <div
                key={index}
                className="text-center animate-fade-up"
              >
                <div className="flex justify-center mb-4">
                  {sign.icon}
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                  {sign.title}
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  {sign.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[var(--color-cream)] rounded-2xl p-8 border-l-4 border-[var(--color-accent)] max-w-3xl mx-auto animate-fade-up">
            <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">
              Crisis Resources
            </h3>
            <p className="text-[var(--color-muted)] mb-4">
              If you or someone you know is in crisis or having thoughts of suicide, please reach out immediately:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-[var(--color-accent)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">988 Suicide & Crisis Lifeline</p>
                  <p className="text-sm text-[var(--color-muted)]">Call or text 988 for 24/7 free and confidential support</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-[var(--color-accent)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Crisis Text Line</p>
                  <p className="text-sm text-[var(--color-muted)]">Text HOME to 741741 to connect with a crisis counselor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-6">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Schedule your comprehensive evaluation today and take the first step toward personalized, integrative mental health care.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Schedule Your Evaluation
          </Link>
        </div>
      </section>
    </main>
  )
}