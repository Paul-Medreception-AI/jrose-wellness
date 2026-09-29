import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Services – Comprehensive Mental Health Care | JROSE WELLNESS',
  description: 'Board-certified psychiatric and family nurse practitioner offering anxiety treatment, depression care, substance use disorder support, medication management, and personalized mental health services in Fairfield, CT.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Our Services – Comprehensive Mental Health Care | JROSE WELLNESS',
    description: 'Board-certified psychiatric and family nurse practitioner offering anxiety treatment, depression care, substance use disorder support, medication management, and personalized mental health services in Fairfield, CT.',
    url: 'https://jrosewellness.com/services',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services – Comprehensive Mental Health Care | JROSE WELLNESS',
    description: 'Board-certified psychiatric and family nurse practitioner offering anxiety treatment, depression care, substance use disorder support, medication management, and personalized mental health services in Fairfield, CT.',
    images: ['/og-image.png'],
  },
}

export default function ServicesPage() {
  const services = [
    {
      name: "Initial Psychiatric Evaluation",
      description: "Comprehensive first session focused entirely on understanding your history, current concerns, and wellness goals. We take the time to create a complete picture of your mental and physical health to develop your personalized treatment plan.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      )
    },
    {
      name: "Anxiety Treatment",
      description: "Support for excessive worry, panic attacks, social anxiety, and stress that interferes with daily life, relationships, or sleep. Evidence-based approaches tailored to your unique symptoms and lifestyle.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      )
    },
    {
      name: "Depression Care",
      description: "Treatment for persistent sadness, low energy, loss of motivation, mood changes, or difficulty finding joy in everyday activities. Whole-person approach addressing emotional and physical contributors to depression.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      )
    },
    {
      name: "Substance Use Disorder Support",
      description: "Non-judgmental, compassionate support for individuals struggling with alcohol or substance use. Includes comprehensive treatment planning and ongoing recovery support in a safe, supportive environment.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    },
    {
      name: "Medication Management",
      description: "Careful, individualized psychiatric medication evaluation and ongoing management. Regular monitoring to ensure optimal effectiveness while minimizing side effects.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      )
    },
    {
      name: "Follow-Up Sessions",
      description: "Regular virtual appointments to monitor progress, adjust treatment plans, and provide continuous support. You're never left to figure things out alone on your wellness journey.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      )
    }
  ]

  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description: "This is a safe space for you to share what you've been experiencing so we can fully understand your needs. We listen carefully to your concerns, history, and wellness goals to ensure we're the right fit for your care."
    },
    {
      number: "02",
      title: "Personalized Care Plan",
      description: "After your comprehensive consultation, we create a treatment plan tailored specifically to you. Your plan addresses your unique symptoms, lifestyle factors, and health goals with evidence-based approaches that honor the whole person."
    },
    {
      number: "03",
      title: "Ongoing Sessions & Support",
      description: "We meet with you regularly through convenient virtual sessions to monitor progress, make adjustments, and provide continuous support. You're never left alone to navigate your wellness journey, with regular check-ins and accessible care when you need it."
    }
  ]

  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span>Services</span>
          </div>
          <h1 className="font-cormorant text-6xl font-light mb-4">Our Services</h1>
          <p className="text-xl text-white/80 max-w-xl mx-auto mt-4">
            Comprehensive mental health care tailored to your unique needs and wellness goals
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-4 text-[var(--color-ink)]">
            Comprehensive Care for Every Need
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-2xl mx-auto">
            Evidence-based treatment approaches that honor the connection between your mind, body, and lifestyle
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group"
              >
                <div className="text-[var(--color-primary)]">
                  {service.icon}
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                  {service.name}
                </h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                  {service.description}
                </p>
                <div className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                  Learn More →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-4 text-[var(--color-ink)]">
            How It Works
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-2xl mx-auto">
            A simple, supportive process designed to meet you where you are
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-fade-up">
                <div className="lg:px-8">
                  <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-50 leading-none mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 right-0 w-px h-32 bg-[var(--color-border)]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-4">Ready to Begin?</h2>
          <p className="text-white/80 mb-8 text-lg">
            Schedule your comprehensive evaluation and take the first step toward whole-person wellness
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg"
          >
            Schedule Your Evaluation
          </Link>
        </div>
      </section>
    </>
  )
}