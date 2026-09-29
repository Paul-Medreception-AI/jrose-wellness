import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Telehealth vs. In-Person Psychiatric Care: Which is Right for You?',
  description: 'Compare telehealth and in-person psychiatric care side-by-side. Learn about effectiveness, costs, convenience, and which option fits your mental health needs best.',
  alternates: { canonical: '/compare/telehealth-vs-in-person-psychiatric-care' },
  openGraph: {
    title: 'Telehealth vs. In-Person Psychiatric Care: Which is Right for You?',
    description: 'Compare telehealth and in-person psychiatric care side-by-side. Learn about effectiveness, costs, convenience, and which option fits your mental health needs best.',
    url: 'https://jrosewellness.com/compare/telehealth-vs-in-person-psychiatric-care',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Telehealth vs. In-Person Psychiatric Care: Which is Right for You?',
    description: 'Compare telehealth and in-person psychiatric care side-by-side. Learn about effectiveness, costs, convenience, and which option fits your mental health needs best.',
    images: ['/og-image.png']
  }
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/resources" className="hover:underline">Resources</a>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light leading-tight mb-6">
            Telehealth vs. In-Person Psychiatric Care: Which is Right for You?
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Making an informed choice about your mental health care delivery matters. Compare both options to find the best fit for your needs.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-12">
            Side-by-Side Comparison
          </h2>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-up">
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-semibold">
              <div className="p-4 border-r border-white/20">Category</div>
              <div className="p-4 border-r border-white/20">Telehealth Psychiatric Care</div>
              <div className="p-4">In-Person Psychiatric Care</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 bg-[var(--color-light)] font-semibold text-[var(--color-ink)]">Effectiveness</div>
              <div className="p-4 border-l border-[var(--color-border)]">Studies show comparable outcomes for most conditions including depression, anxiety, and medication management</div>
              <div className="p-4 border-l border-[var(--color-border)]">Traditional gold standard; allows for complete physical assessment and non-verbal cue observation</div>
            </div>

            <div className="grid grid-cols-3 bg-[var(--color-cream)] border-b border-[var(--color-border)]">
              <div className="p-4 bg-[var(--color-light)] font-semibold text-[var(--color-ink)]">Convenience</div>
              <div className="p-4 border-l border-[var(--color-border)]">Access from home or any private location; no travel time; flexible scheduling including evenings</div>
              <div className="p-4 border-l border-[var(--color-border)]">Requires travel to clinic; may involve waiting room time; typically business-hour appointments</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 bg-[var(--color-light)] font-semibold text-[var(--color-ink)]">Cost</div>
              <div className="p-4 border-l border-[var(--color-border)]">Often similar to in-person; saves on transportation costs and time off work</div>
              <div className="p-4 border-l border-[var(--color-border)]">Standard session fees; additional indirect costs for travel, parking, and time away from work</div>
            </div>

            <div className="grid grid-cols-3 bg-[var(--color-cream)] border-b border-[var(--color-border)]">
              <div className="p-4 bg-[var(--color-light)] font-semibold text-[var(--color-ink)]">Time Commitment</div>
              <div className="p-4 border-l border-[var(--color-border)]">Session time only (typically 30-60 minutes); no travel time</div>
              <div className="p-4 border-l border-[var(--color-border)]">Session plus travel time; may require 2-3 hours total per appointment</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 bg-[var(--color-light)] font-semibold text-[var(--color-ink)]">Privacy</div>
              <div className="p-4 border-l border-[var(--color-border)]">Complete privacy if done from home; no risk of seeing acquaintances in waiting room</div>
              <div className="p-4 border-l border-[var(--color-border)]">Private office environment; potential for waiting room encounters</div>
            </div>

            <div className="grid grid-cols-3 bg-[var(--color-cream)] border-b border-[var(--color-border)]">
              <div className="p-4 bg-[var(--color-light)] font-semibold text-[var(--color-ink)]">Technology Requirements</div>
              <div className="p-4 border-l border-[var(--color-border)]">Requires reliable internet, device with camera/microphone, and basic tech comfort</div>
              <div className="p-4 border-l border-[var(--color-border)]">No technology needed</div>
            </div>

            <div className="grid grid-cols-3">
              <div className="p-4 bg-[var(--color-light)] font-semibold text-[var(--color-ink)]">Best For</div>
              <div className="p-4 border-l border-[var(--color-border)]">Medication management, follow-ups, anxiety, depression, busy schedules, rural areas, mobility limitations</div>
              <div className="p-4 border-l border-[var(--color-border)]">Complex initial assessments, severe mental illness, patients preferring face-to-face interaction, crisis situations</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <div>
                <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-4">
                  Telehealth Psychiatric Care: A Deeper Look
                </h2>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-[var(--color-muted)]">
              <p className="mb-4">
                Telehealth psychiatric care has evolved dramatically over the past decade, with research consistently demonstrating its effectiveness for a wide range of mental health conditions. Video-based sessions allow psychiatrists to conduct comprehensive evaluations, monitor medication effectiveness, assess side effects, and adjust treatment plans with the same clinical rigor as in-person visits.
              </p>
              <p className="mb-4">
                The convenience factor cannot be overstated. Patients can attend appointments during lunch breaks, from home after putting children to bed, or while traveling for work. This flexibility dramatically improves appointment attendance rates and treatment continuity. For individuals in rural areas or those with mobility challenges, telehealth removes significant barriers to accessing specialized psychiatric care.
              </p>
              <p>
                Ideal candidates for telehealth include established patients managing stable conditions, professionals with demanding schedules, individuals seeking medication management for anxiety or depression, and anyone who values the comfort of receiving care in their own environment. The technology barrier is minimal—most sessions work smoothly on smartphones, tablets, or computers with basic internet connectivity.
              </p>
            </div>
          </div>

          <div className="animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
              <div>
                <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-4">
                  In-Person Psychiatric Care: A Deeper Look
                </h2>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-[var(--color-muted)]">
              <p className="mb-4">
                Traditional in-person psychiatric care remains the gold standard for certain clinical situations and patient preferences. The face-to-face environment allows clinicians to observe subtle non-verbal cues, body language, and physical presentations that may be harder to detect via video. For initial comprehensive evaluations, particularly complex diagnostic assessments, the in-person setting often provides the richest clinical information.
              </p>
              <p className="mb-4">
                Many patients find the ritual of traveling to an appointment, sitting in a dedicated therapeutic space, and having that physical separation from home or work environments to be psychologically valuable. The office setting can feel more professional, private, and conducive to difficult conversations. For patients without stable home environments or reliable internet access, in-person care removes technological barriers entirely.
              </p>
              <p>
                In-person care is particularly valuable for new patients undergoing initial diagnostic evaluations, individuals with severe or complex psychiatric conditions requiring close monitoring, patients who prefer traditional face-to-face interaction, and situations where physical examination or observation of movement and gait may inform diagnosis. The therapeutic alliance formed in person can feel more tangible for some patients, particularly those who find technology impersonal or distracting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-8">
              How to Decide What's Right for You
            </h2>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-7 h-7 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
                Choose Telehealth If You:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Have a busy schedule with limited time for travel and waiting rooms</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Are seeking medication management for anxiety, depression, or similar conditions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Live in a rural area or have limited access to local psychiatric specialists</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Value privacy and prefer avoiding waiting rooms</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Have mobility limitations or transportation challenges</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Are comfortable with technology and have reliable internet access</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Feel most comfortable in your own environment during sessions</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-7 h-7 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
                Choose In-Person Care If You:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Are seeking an initial comprehensive psychiatric evaluation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Have a complex or severe psychiatric condition requiring detailed observation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Prefer traditional face-to-face therapeutic interaction</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Lack reliable internet access or a private space at home</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Find that separating therapy from your home environment is psychologically important</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Are uncomfortable with video technology or find it distracting</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Need a physical examination or assessment that requires in-person observation</span>
                </li>
              </ul>
            </div>

            <div className="mt-10 p-6 bg-white rounded-xl border-l-4 border-[var(--color-accent)]">
              <p className="text-[var(--color-ink)] font-medium">
                <strong>Remember:</strong> Many patients benefit from a hybrid approach—initial assessments in person followed by telehealth follow-ups, or primarily telehealth with occasional in-person check-ins. Discuss your preferences with your provider.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 animate-fade-up">
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                Is telehealth psychiatric care as effective as in-person treatment?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform flex-shrink-0" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-muted)]">
                <p>Research consistently demonstrates that telehealth psychiatric care produces outcomes comparable to in-person treatment for most conditions, including depression, anxiety, PTSD, and medication management. A 2020 meta-analysis published in JAMA Psychiatry found no significant difference in treatment effectiveness between telehealth and face-to-face psychiatric care. Patient satisfaction rates are also comparable, with many patients reporting they prefer the convenience and comfort of telehealth sessions.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                Can my psychiatrist prescribe medication via telehealth?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform flex-shrink-0" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-muted)]">
                <p>Yes, psychiatrists can prescribe most psychiatric medications via telehealth, including antidepressants, anti-anxiety medications, mood stabilizers, and antipsychotics. Prescriptions are sent electronically to your pharmacy just as they would be after an in-person visit. Some controlled substances have specific regulations that vary by state, but most psychiatric medications prescribed for common conditions are fully available through telehealth consultations.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                Will my insurance cover telehealth psychiatric appointments?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform flex-shrink-0" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-muted)]">
                <p>Most insurance plans now cover telehealth psychiatric services at the same rate as in-person visits, a change accelerated by the COVID-19 pandemic and maintained by many insurers due to demonstrated value and patient preference. Medicare and Medicaid also provide telehealth coverage for psychiatric services. However, coverage specifics vary by plan, so it's important to verify your benefits with your insurance provider before your first appointment.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                What technology do I need for a telehealth appointment?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform flex-shrink-0" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-muted)]">
                <p>You'll need a device with a camera and microphone—this can be a smartphone, tablet, laptop, or desktop computer. A stable internet connection is important for video quality. Most providers use HIPAA-compliant video platforms that work through standard web browsers or simple apps, requiring no special software installation. You'll also need a private, quiet space where you can speak confidentially during your session. Most patients find the technology straightforward and user-friendly after their first session.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                Can I switch between telehealth and in-person appointments?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform flex-shrink-0" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-muted)]">
                <p>Absolutely. Many patients use a hybrid approach, choosing the format that best fits their schedule and needs for each appointment. You might prefer in-person visits for initial evaluations or times when you feel you need more intensive support, while using telehealth for routine medication checks and follow-ups. Discuss your preferences with your provider—flexibility is one of the key benefits of having both options available.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-cormorant text-4xl mb-6">
            Ready to Discuss Your Options?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you're considering telehealth, in-person care, or a combination of both, we're here to help you find the approach that fits your lifestyle and mental health needs in Fairfield, CT.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}