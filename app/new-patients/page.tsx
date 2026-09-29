import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'New Patient Information | JROSE WELLNESS',
  description: 'Everything you need to know before your first visit to JROSE WELLNESS. Learn about our initial evaluation process, what to bring, patient forms, telehealth options, and practice policies.',
  alternates: { canonical: '/new-patients' },
  openGraph: {
    title: 'New Patient Information | JROSE WELLNESS',
    description: 'Everything you need to know before your first visit to JROSE WELLNESS. Learn about our initial evaluation process, what to bring, patient forms, telehealth options, and practice policies.',
    url: 'https://jrosewellness.com/new-patients',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Patient Information | JROSE WELLNESS',
    description: 'Everything you need to know before your first visit to JROSE WELLNESS. Learn about our initial evaluation process, what to bring, patient forms, telehealth options, and practice policies.',
    images: ['/og-image.png']
  }
}

export default function NewPatientsPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6">New Patients</h1>
          <p className="text-xl text-white/90">Everything you need to know before your first visit</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center text-[var(--color-ink)] mb-20">Your First Visit</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="font-cormorant text-6xl font-light text-[var(--color-primary)] mb-4">01</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Schedule</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Book your initial evaluation online through our secure scheduling system or give us a call. We'll find a time that works best for you.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="font-cormorant text-6xl font-light text-[var(--color-primary)] mb-4">02</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Complete Paperwork</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Patient forms can be completed online before your appointment or arrive 15 minutes early to fill them out in our office.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="font-cormorant text-6xl font-light text-[var(--color-primary)] mb-4">03</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Initial Evaluation</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Your comprehensive assessment takes 60-90 minutes. We'll discuss your history, current concerns, and wellness goals to understand your complete picture.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="font-cormorant text-6xl font-light text-[var(--color-primary)] mb-4">04</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Together, we'll create a personalized care plan tailored to your unique needs, lifestyle, and health goals.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center text-[var(--color-ink)] mb-16">What to Bring</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4 items-start p-6 rounded-xl bg-[var(--color-cream)] animate-fade-up">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] text-lg mb-2">Photo ID</h3>
                <p className="text-[var(--color-muted)]">Valid driver's license or state-issued identification card for identity verification.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 rounded-xl bg-[var(--color-cream)] animate-fade-up">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] text-lg mb-2">Insurance Card</h3>
                <p className="text-[var(--color-muted)]">Both front and back of your current insurance card so we can verify your coverage and benefits.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 rounded-xl bg-[var(--color-cream)] animate-fade-up">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] text-lg mb-2">Medication List</h3>
                <p className="text-[var(--color-muted)]">Complete list of current medications including dosages, supplements, and over-the-counter medications you take regularly.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 rounded-xl bg-[var(--color-cream)] animate-fade-up">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] text-lg mb-2">Prior Medical Records</h3>
                <p className="text-[var(--color-muted)]">Any relevant previous treatment records, lab results, or consultation notes from other healthcare providers if available.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 rounded-xl bg-[var(--color-cream)] animate-fade-up md:col-span-2">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] text-lg mb-2">Emergency Contact Information</h3>
                <p className="text-[var(--color-muted)]">Name and phone number of someone we can contact on your behalf in case of an emergency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
            <h2 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-6">Patient Forms</h2>
            <p className="text-[var(--color-muted)] text-lg mb-8">
              To streamline your first visit, you can complete patient forms at our office or during your first appointment. We understand your time is valuable and aim to make the process as smooth as possible.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-1">Patient Intake Form</h4>
                  <p className="text-[var(--color-muted)]">Comprehensive health history and current symptoms</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-1">Consent for Treatment</h4>
                  <p className="text-[var(--color-muted)]">Understanding and agreement to receive care</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-1">HIPAA Authorization</h4>
                  <p className="text-[var(--color-muted)]">Privacy practices and health information protection</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-1">Insurance Information</h4>
                  <p className="text-[var(--color-muted)]">Coverage details and payment responsibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center text-[var(--color-ink)] mb-6">Telehealth Appointments</h2>
          <p className="text-center text-[var(--color-muted)] text-lg max-w-3xl mx-auto mb-16">
            We offer secure video appointments from the comfort of your home. Telehealth provides the same quality care with added convenience and privacy.
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="animate-fade-up">
              <div className="flex items-center gap-3 mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)]">What You Need</h3>
              </div>
              <ul className="space-y-3 text-[var(--color-muted)]">
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent)] font-semibold">•</span>
                  <span>Computer, tablet, or smartphone with camera and microphone</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent)] font-semibold">•</span>
                  <span>Reliable internet connection</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent)] font-semibold">•</span>
                  <span>Updated web browser (Chrome, Safari, Firefox, or Edge)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent)] font-semibold">•</span>
                  <span>Quiet, private space for your appointment</span>
                </li>
              </ul>
            </div>

            <div className="animate-fade-up">
              <div className="flex items-center gap-3 mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)]">Privacy Tips</h3>
              </div>
              <ul className="space-y-3 text-[var(--color-muted)]">
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent)] font-semibold">•</span>
                  <span>Choose a private room where you won't be interrupted</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent)] font-semibold">•</span>
                  <span>Use headphones for additional confidentiality</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent)] font-semibold">•</span>
                  <span>Close doors and windows to minimize background noise</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent)] font-semibold">•</span>
                  <span>Test your connection 10 minutes before your appointment</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-[var(--color-cream)] rounded-xl max-w-3xl mx-auto">
            <p className="text-[var(--color-ink)] text-center">
              <strong>Secure Platform:</strong> All telehealth sessions are conducted through HIPAA-compliant video conferencing software to protect your privacy and health information.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center text-[var(--color-ink)] mb-16">Practice Policies</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="flex items-start gap-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Cancellation Policy</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    We understand that schedules change. If you need to cancel or reschedule your appointment, please provide at least <strong>24 hours notice</strong>. This allows us to offer your appointment time to another patient in need. Cancellations made with less than 24 hours notice may be subject to a fee.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="flex items-start gap-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Late Arrivals</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Please arrive (or log in for telehealth) on time for your scheduled appointment. If you arrive more than 15 minutes late, we may need to reschedule your appointment to ensure all patients receive their full session time. Your appointment time is reserved exclusively for you.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="flex items-start gap-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                  <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">No-Show Policy</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Missing an appointment without notice impacts both your care continuity and prevents another patient from being seen. No-show appointments will be charged a fee. Repeated no-shows may result in discharge from the practice. We're here to support your wellness journey and ask for your partnership in keeping scheduled appointments.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="flex items-start gap-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <div>
                  <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Payment & Insurance</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Payment is due at the time of service. We accept most major insurance plans and will verify your benefits before your first appointment. Co-pays, deductibles, and any out-of-pocket expenses are collected at each visit. For patients without insurance, self-pay rates are available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl text-white mb-6">Ready to Begin Your Wellness Journey?</h2>
          <p className="text-white/90 text-lg mb-10 leading-relaxed">
            We're here to support you every step of the way. Schedule your initial evaluation today and take the first step toward whole-person wellness.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-10 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            Schedule Your Evaluation
          </Link>
        </div>
      </section>
    </main>
  )
}