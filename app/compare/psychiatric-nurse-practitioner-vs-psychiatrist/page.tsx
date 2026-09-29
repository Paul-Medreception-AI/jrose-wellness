import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Psychiatric Nurse Practitioner vs Psychiatrist | JROSE WELLNESS',
  description: 'Understanding the key differences between psychiatric nurse practitioners and psychiatrists to help you make an informed decision about your mental health care in Fairfield, CT.',
  alternates: { canonical: '/compare/psychiatric-nurse-practitioner-vs-psychiatrist' },
  openGraph: {
    title: 'Psychiatric Nurse Practitioner vs Psychiatrist | JROSE WELLNESS',
    description: 'Understanding the key differences between psychiatric nurse practitioners and psychiatrists to help you make an informed decision about your mental health care in Fairfield, CT.',
    url: 'https://jrosewellness.com/compare/psychiatric-nurse-practitioner-vs-psychiatrist',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Psychiatric Nurse Practitioner vs Psychiatrist | JROSE WELLNESS',
    description: 'Understanding the key differences between psychiatric nurse practitioners and psychiatrists to help you make an informed decision about your mental health care in Fairfield, CT.',
    images: ['/og-image.png'],
  },
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm mb-6 opacity-90">
            <span className="hover:underline transition-all">Home</span>
            <span className="mx-2">›</span>
            <span className="hover:underline transition-all">Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight">
            Psychiatric Nurse Practitioner vs. Psychiatrist: Understanding the Difference
          </h1>
          <p className="mt-6 text-lg opacity-90 max-w-2xl mx-auto">
            Making an informed choice about your mental health care provider
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-12">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-up">
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-semibold">
              <div className="p-4 border-r border-white/20">Category</div>
              <div className="p-4 border-r border-white/20">Psychiatric Nurse Practitioner</div>
              <div className="p-4">Psychiatrist</div>
            </div>
            
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Education</div>
              <div className="p-4">Master's or Doctoral degree in nursing with psychiatric specialization (6-8 years total)</div>
              <div className="p-4 bg-[var(--color-cream)]">Medical degree (MD or DO) plus psychiatry residency (12+ years total)</div>
            </div>
            
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Prescribing Authority</div>
              <div className="p-4">Can prescribe medication in all 50 states (may vary by state regulations)</div>
              <div className="p-4 bg-[var(--color-cream)]">Full prescribing authority nationwide</div>
            </div>
            
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Treatment Approach</div>
              <div className="p-4">Holistic, whole-person care combining medication management and therapy; strong emphasis on lifestyle factors</div>
              <div className="p-4 bg-[var(--color-cream)]">Medical model focusing primarily on diagnosis and medication management; may offer therapy</div>
            </div>
            
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Appointment Length</div>
              <div className="p-4">Typically 30-60 minutes; more time for discussion and relationship building</div>
              <div className="p-4 bg-[var(--color-cream)]">Often 15-30 minutes for medication management visits</div>
            </div>
            
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Availability</div>
              <div className="p-4">Generally easier to schedule; shorter wait times for new patients</div>
              <div className="p-4 bg-[var(--color-cream)]">May have longer wait times (weeks to months) for initial appointments</div>
            </div>
            
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Cost</div>
              <div className="p-4">Generally more affordable; covered by most insurance plans</div>
              <div className="p-4 bg-[var(--color-cream)]">Higher fees; covered by insurance but may have higher copays</div>
            </div>
            
            <div className="grid grid-cols-3">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Best For</div>
              <div className="p-4">Ongoing mental health management, integrated therapy and medication, preventive care, lifestyle-focused treatment</div>
              <div className="p-4 bg-[var(--color-cream)]">Complex psychiatric conditions, treatment-resistant cases, specialized medical interventions</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <article className="mb-16 animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-accent)] flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <div>
                <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-4">
                  What is a Psychiatric Nurse Practitioner?
                </h2>
              </div>
            </div>
            
            <div className="space-y-4 text-[var(--color-ink)] leading-relaxed">
              <p>
                A Psychiatric-Mental Health Nurse Practitioner (PMHNP) is an advanced practice registered nurse who specializes in mental health care. PMHNPs complete rigorous graduate-level education, typically earning a Master's or Doctoral degree with specialized training in psychiatric assessment, diagnosis, psychotherapy, and pharmacology.
              </p>
              <p>
                What sets psychiatric nurse practitioners apart is their holistic, patient-centered approach to mental health care. Drawing on nursing's foundation of whole-person wellness, PMHNPs integrate medication management with therapeutic interventions, lifestyle counseling, and preventive care. They're trained to consider how physical health, social factors, nutrition, sleep, and stress impact mental wellbeing.
              </p>
              <p>
                In all 50 states, psychiatric nurse practitioners can diagnose mental health conditions, prescribe medications (including controlled substances), order laboratory tests, and provide psychotherapy. Many PMHNPs spend more time with patients during appointments, building therapeutic relationships and addressing the interconnected aspects of mental and physical health. This makes them particularly effective for individuals seeking comprehensive, integrated mental health care in Fairfield and throughout Connecticut.
              </p>
            </div>
          </article>

          <article className="mb-16 animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-accent)] flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              <div>
                <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-4">
                  What is a Psychiatrist?
                </h2>
              </div>
            </div>
            
            <div className="space-y-4 text-[var(--color-ink)] leading-relaxed">
              <p>
                A psychiatrist is a medical doctor (MD or DO) who specializes in mental health, including substance use disorders. After completing medical school, psychiatrists undergo four years of specialized residency training in psychiatric diagnosis, treatment, and medication management. Some pursue additional fellowship training in subspecialties like child psychiatry, addiction psychiatry, or geriatric psychiatry.
              </p>
              <p>
                Psychiatrists approach mental health through a medical model, with extensive training in the biological basis of mental illness, psychopharmacology, and complex medical-psychiatric interactions. They're particularly skilled in managing severe mental illness, treatment-resistant conditions, and cases where mental health intersects with complex medical conditions. Psychiatrists can hospitalize patients, perform medical procedures, and manage intricate medication regimens.
              </p>
              <p>
                In practice, many psychiatrists focus primarily on medication management, especially in outpatient settings where appointment times are often 15-30 minutes. Patients typically work with a separate therapist for psychotherapy while the psychiatrist manages medications. For individuals with complex diagnostic questions, severe psychiatric conditions, or treatment that hasn't responded to standard approaches, a psychiatrist's medical expertise can be invaluable.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 shadow-lg animate-fade-up">
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-12">
              How to Decide Which is Right for You
            </h2>
            
            <div className="space-y-10">
              <div>
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-6 flex items-center gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Consider a Psychiatric Nurse Practitioner if you:
                </h3>
                <ul className="space-y-3 ml-11">
                  <li className="flex items-start gap-3 text-[var(--color-ink)]">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Want a holistic, integrated approach that addresses lifestyle, nutrition, sleep, and mental health together</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-ink)]">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Prefer longer appointment times with more opportunity for discussion and therapeutic relationship</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-ink)]">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Are managing common mental health conditions like depression, anxiety, ADHD, or insomnia</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-ink)]">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Value combining medication management with therapy in one provider relationship</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-ink)]">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Need more availability and shorter wait times for appointments</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-ink)]">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Are focused on preventive mental health and wellness optimization</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-ink)]">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Prefer a more accessible, cost-effective option with comprehensive care</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-6 flex items-center gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Consider a Psychiatrist if you:
                </h3>
                <ul className="space-y-3 ml-11">
                  <li className="flex items-start gap-3 text-[var(--color-ink)]">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Have a complex or severe mental health condition requiring specialized medical expertise</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-ink)]">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Have not responded to standard treatments and need advanced intervention strategies</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-ink)]">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Need diagnostic clarification for complex or overlapping psychiatric conditions</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-ink)]">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Have significant medical comorbidities that complicate psychiatric treatment</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-ink)]">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Require specialized interventions like ECT, TMS, or ketamine therapy</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-ink)]">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Are managing conditions like bipolar disorder, schizophrenia, or severe OCD</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-ink)]">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Prefer separate providers for medication management and psychotherapy</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border-l-4 border-[var(--color-accent)]">
              <p className="text-[var(--color-ink)] italic">
                <strong>Important note:</strong> Both psychiatric nurse practitioners and psychiatrists are highly qualified mental health professionals. Research shows that PMHNPs and psychiatrists achieve comparable patient outcomes for most mental health conditions. The best choice depends on your individual needs, preferences, and the specific expertise of the provider.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden animate-fade-up">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-[var(--color-light)] transition-colors">
                <span className="font-semibold text-[var(--color-ink)] pr-4">Can psychiatric nurse practitioners prescribe the same medications as psychiatrists?</span>
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>Yes, psychiatric nurse practitioners have full prescribing authority in all 50 states and can prescribe the same psychiatric medications as psychiatrists, including controlled substances like stimulants and benzodiazepines. PMHNPs complete extensive pharmacology training and are licensed independent practitioners. Some states have collaborative practice agreements, but these don't limit prescribing ability—they're administrative arrangements that don't affect patient care.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden animate-fade-up">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-[var(--color-light)] transition-colors">
                <span className="font-semibold text-[var(--color-ink)] pr-4">Are psychiatric nurse practitioners as qualified as psychiatrists?</span>
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>Psychiatric nurse practitioners and psychiatrists have different but equally rigorous training paths. PMHNPs complete graduate-level nursing education with specialized psychiatric training, while psychiatrists attend medical school followed by psychiatry residency. Multiple studies show that PMHNPs and psychiatrists achieve comparable patient outcomes for common mental health conditions. PMHNPs are fully licensed, independently practicing providers who deliver comprehensive psychiatric care. The choice between them should be based on your specific needs, the provider's expertise, and your treatment preferences—not perceived hierarchy.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden animate-fade-up">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-[var(--color-light)] transition-colors">
                <span className="font-semibold text-[var(--color-ink)] pr-4">Will my insurance cover a psychiatric nurse practitioner the same way it covers a psychiatrist?</span>
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>Yes, virtually all health insurance plans cover psychiatric nurse practitioners the same way they cover psychiatrists. PMHNPs are recognized providers under Medicare, Medicaid, and private insurance plans. In fact, because PMHNPs often have lower fees than psychiatrists, your out-of-pocket costs (copays, coinsurance) may be lower. Always verify coverage with your specific insurance plan, but PMHNP services are widely covered for psychiatric evaluation, medication management, and psychotherapy.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden animate-fade-up">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-[var(--color-light)] transition-colors">
                <span className="font-semibold text-[var(--color-ink)] pr-4">How do I know if I need a psychiatrist instead of a psychiatric nurse practitioner?</span>
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>Most people with common mental health conditions like depression, anxiety, ADHD, insomnia, or mild-to-moderate mood disorders can be effectively treated by either a psychiatric nurse practitioner or a psychiatrist. You might specifically benefit from a psychiatrist if you have a severe or complex condition (like treatment-resistant depression, bipolar disorder, or schizophrenia), haven't responded to multiple medication trials, need specialized procedures like ECT or TMS, or have complicated medical-psychiatric interactions. However, many experienced PMHNPs also manage these conditions successfully. The individual provider's expertise matters more than their degree—ask about their experience with your specific concern.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden animate-fade-up">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-[var(--color-light)] transition-colors">
                <span className="font-semibold text-[var(--color-ink)] pr-4">Can I switch from a psychiatrist to a psychiatric nurse practitioner (or vice versa)?</span>
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>Absolutely. Switching between a psychiatrist and a psychiatric nurse practitioner is straightforward and common. Your medical records, including diagnosis, medication history, and treatment notes, transfer seamlessly between providers. People switch for many reasons: seeking a different treatment approach, reducing wait times, finding better appointment availability, or preferring a provider's communication style. What matters most is finding a provider whose expertise, approach, and personality are the right fit for you—not whether they're a psychiatrist or PMHNP. Both can access your full treatment history and provide continuity of care.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 px-6">
        <div className="max-w-2xl mx-auto text-center text-white">
          <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 opacity-90">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
          </svg>
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss which approach is right for your unique needs and goals in Fairfield, CT
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Discuss Your Options
          </a>
        </div>
      </section>
    </main>
  )
}