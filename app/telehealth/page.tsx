import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Telehealth Services – Virtual Mental Health Care | JROSE WELLNESS',
  description: 'Access board-certified psychiatric care from home. Secure video appointments for anxiety, depression, medication management, and comprehensive mental health support in Connecticut.',
  alternates: { canonical: '/telehealth' },
  openGraph: {
    title: 'Telehealth Services – Virtual Mental Health Care | JROSE WELLNESS',
    description: 'Access board-certified psychiatric care from home. Secure video appointments for anxiety, depression, medication management, and comprehensive mental health support in Connecticut.',
    url: 'https://jrosewellness.com/telehealth',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Telehealth Services – Virtual Mental Health Care | JROSE WELLNESS',
    description: 'Access board-certified psychiatric care from home. Secure video appointments for anxiety, depression, medication management, and comprehensive mental health support in Connecticut.',
    images: ['/og-image.png']
  }
}

export default function TelehealthPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6">
            Telehealth Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Comprehensive mental health support from the comfort of your home. Board-certified psychiatric care through secure, convenient virtual appointments.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-4">
              How Telehealth Works
            </h2>
            <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
              Simple, secure virtual appointments that bring expert psychiatric care to you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <span className="font-cormorant text-3xl font-semibold text-[var(--color-primary)]">01</span>
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Schedule Your Session
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Contact us to book your initial evaluation or follow-up appointment. Choose a time that works with your schedule—no commute needed.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <span className="font-cormorant text-3xl font-semibold text-[var(--color-primary)]">02</span>
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Connect Virtually
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Join your appointment from any device with internet access. We use secure, HIPAA-compliant video technology to protect your privacy.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <span className="font-cormorant text-3xl font-semibold text-[var(--color-primary)]">03</span>
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Receive Care
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Experience the same comprehensive, personalized care as an in-person visit. Discuss your concerns, receive guidance, and develop your treatment plan together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available via Telehealth */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-4">
              Services Available Remotely
            </h2>
            <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
              Full-spectrum mental health care delivered through secure virtual appointments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <div className="flex items-start gap-4 mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
                <div>
                  <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                    Initial Psychiatric Evaluation
                  </h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Comprehensive assessment of your mental health history, current concerns, and wellness goals conducted via secure video.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-4 mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                <div>
                  <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                    Anxiety & Depression Care
                  </h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Evidence-based treatment for anxiety disorders, depression, and mood concerns with personalized approaches tailored to your needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4 mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
                <div>
                  <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                    Medication Management
                  </h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Careful psychiatric medication evaluation, prescribing, and ongoing monitoring to ensure optimal effectiveness with minimal side effects.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start gap-4 mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                <div>
                  <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                    Follow-Up Sessions
                  </h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Regular virtual appointments to monitor your progress, adjust treatment plans, and provide continuous support on your wellness journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up md:col-span-2" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-start gap-4 mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <div>
                  <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                    Substance Use Disorder Support
                  </h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Compassionate, non-judgmental support for individuals struggling with alcohol or substance use. Comprehensive treatment planning and ongoing recovery support in a safe, confidential virtual environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-4">
              Benefits of Telehealth
            </h2>
            <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
              Access quality mental health care on your terms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] mb-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Comfort of Home
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Receive care from your own safe, comfortable space. No commute, no waiting room—just quality care where you feel most at ease.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] mb-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Flexible Scheduling
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Fit appointments into your life more easily. Eliminate travel time and schedule sessions that work with your commitments.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] mb-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Private & Secure
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                All sessions are conducted through secure, HIPAA-compliant video technology to protect your privacy and confidentiality.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] mb-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Any Device
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Connect from your smartphone, tablet, or computer. All you need is a reliable internet connection and a private space.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] mb-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Connecticut Access
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Receive care no matter where you are in Connecticut. Telehealth makes quality psychiatric care accessible across the state.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] mb-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Same Quality Care
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Telehealth sessions provide the same comprehensive, personalized attention as in-person visits with board-certified expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Need */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-[var(--color-ink)] mb-8 text-center">
              What You Need for Your Telehealth Visit
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-2">Device with Camera & Microphone</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Smartphone, tablet, laptop, or desktop computer with working camera and microphone for video sessions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-2">Reliable Internet Connection</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Stable broadband or mobile data connection. Wi-Fi or 4G/5G recommended for best video quality.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-2">Private, Quiet Space</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Find a comfortable, confidential location where you can speak freely without interruptions or being overheard.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-2">Any Relevant Documentation</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Previous medical records, current medication list, or any health information you'd like to discuss during your session.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-[var(--color-border)]">
              <p className="text-[var(--color-muted)] text-center leading-relaxed">
                We'll send you detailed connection instructions before your appointment. If you have any technical questions or concerns, contact us—we're here to help make your telehealth experience smooth and stress-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Schedule your initial evaluation and experience comprehensive mental health care from the comfort of home.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule Your Evaluation
          </Link>
        </div>
      </section>
    </main>
  )
}