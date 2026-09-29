import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medication Management vs. Therapy Alone for Depression',
  description: 'Compare medication management and therapy-only approaches for depression. Learn which treatment option is right for you based on effectiveness, side effects, cost, and timeline.',
  alternates: { canonical: '/compare/medication-management-vs-therapy-depression' },
  openGraph: {
    title: 'Medication Management vs. Therapy Alone for Depression',
    description: 'Compare medication management and therapy-only approaches for depression. Learn which treatment option is right for you based on effectiveness, side effects, cost, and timeline.',
    url: 'https://jrosewellness.com/compare/medication-management-vs-therapy-depression',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medication Management vs. Therapy Alone for Depression',
    description: 'Compare medication management and therapy-only approaches for depression. Learn which treatment option is right for you based on effectiveness, side effects, cost, and timeline.',
    images: ['/og-image.png']
  }
}

export default function MedicationVsTherapyPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span>›</span>
            <span>Resources</span>
            <span>›</span>
            <span>Comparison</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight">
            Medication Management vs. Therapy Alone for Depression
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
            An evidence-based comparison to help you make an informed treatment decision
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] text-center mb-12">
            Side-by-Side Comparison
          </h2>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-semibold">
              <div className="p-4 border-r border-white/20">Factor</div>
              <div className="p-4 border-r border-white/20">Medication Management</div>
              <div className="p-4">Therapy Alone</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Effectiveness</div>
              <div className="p-4 border-l border-[var(--color-border)]">60-70% response rate for moderate to severe depression; faster initial symptom relief (2-6 weeks)</div>
              <div className="p-4 border-l border-[var(--color-border)]">50-60% response rate; more gradual improvement; builds long-term coping skills</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Side Effects</div>
              <div className="p-4 border-l border-[var(--color-border)]">Possible nausea, weight changes, sleep changes, sexual side effects; varies by medication type</div>
              <div className="p-4 border-l border-[var(--color-border)]">Minimal physical side effects; may experience emotional discomfort during processing</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Cost</div>
              <div className="p-4 border-l border-[var(--color-border)]">Monthly medication costs ($10-200 depending on insurance); quarterly follow-ups with prescriber</div>
              <div className="p-4 border-l border-[var(--color-border)]">Weekly or biweekly therapy sessions; higher time investment; copay per session</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Time Commitment</div>
              <div className="p-4 border-l border-[var(--color-border)]">15-30 minute follow-ups every 1-3 months; daily medication routine</div>
              <div className="p-4 border-l border-[var(--color-border)]">45-60 minute sessions weekly or biweekly; homework between sessions</div>
            </div>

            <div className="grid grid-cols-3">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Best For</div>
              <div className="p-4 border-l border-[var(--color-border)]">Moderate to severe depression, biological/genetic factors, need for rapid symptom relief, previous therapy without improvement</div>
              <div className="p-4 border-l border-[var(--color-border)]">Mild to moderate depression, situational depression, preference for non-medication approach, motivated to develop coping skills</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <article className="mb-16 animate-fade-up">
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-6">
              Medication Management: A Closer Look
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              Medication management for depression typically involves antidepressants that work by adjusting neurotransmitter levels in the brain—primarily serotonin, norepinephrine, and dopamine. The most commonly prescribed classes include SSRIs (Selective Serotonin Reuptake Inhibitors) and SNRIs (Serotonin-Norepinephrine Reuptake Inhibitors). These medications can provide significant relief from the biological symptoms of depression, including persistent low mood, lack of energy, sleep disturbances, and loss of interest in activities.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              The medication approach is particularly effective for individuals with moderate to severe depression, those with a family history of depression, or those who haven't responded adequately to therapy alone. Research shows that for severe depression, medication combined with therapy produces the best outcomes. Antidepressants typically take 2-6 weeks to reach full effectiveness, though some patients notice improvements in sleep and energy levels within the first week or two.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Medication management involves regular follow-ups with a prescribing provider—usually every 2-4 weeks initially, then every 1-3 months once stable. During these visits, your provider monitors symptom improvement, adjusts dosages if needed, manages side effects, and ensures the medication continues to be effective. Most patients remain on antidepressants for 6-12 months minimum, with many benefiting from longer-term maintenance therapy to prevent relapse.
            </p>
          </article>

          <article className="mb-16 animate-fade-up">
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-6">
              Therapy Alone: What to Expect
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              Psychotherapy—particularly evidence-based approaches like Cognitive Behavioral Therapy (CBT), Interpersonal Therapy (IPT), and Acceptance and Commitment Therapy (ACT)—addresses depression by changing thought patterns, improving coping skills, and resolving underlying psychological issues. Therapy provides tools and strategies that become part of your long-term mental health toolkit, often preventing future episodes even after treatment ends.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              The therapy-alone approach works best for individuals with mild to moderate depression, situational depression (triggered by specific life events), or those who prefer to avoid medication. It's also highly effective for people whose depression is maintained by specific thinking patterns, relationship issues, or unresolved trauma. Studies show that CBT, in particular, has comparable long-term effectiveness to medication for mild to moderate depression, with lower relapse rates after treatment ends.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Therapy typically involves weekly or biweekly 45-60 minute sessions over several months. Unlike medication, which primarily addresses symptoms, therapy helps you understand the roots of your depression, identify triggers, develop healthier thought patterns, and build resilience. The improvement is generally more gradual than with medication, with most people noticing significant changes within 8-12 weeks. Between sessions, you'll practice new skills and complete exercises that reinforce what you're learning.
            </p>
          </article>

          <article className="animate-fade-up">
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-6">
              The Combined Approach
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              It's important to note that medication management and therapy are not mutually exclusive. In fact, research consistently shows that the combination of medication and therapy produces the best outcomes for moderate to severe depression. Medication can provide the initial symptom relief that makes it possible to engage effectively in therapy, while therapy provides the skills and insights that support long-term recovery and relapse prevention.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Many patients at JROSE WELLNESS benefit from an integrated approach: starting with both medication and therapy, then gradually tapering medication once therapeutic gains are stable, while continuing therapy to consolidate skills and prevent relapse. This personalized approach considers your specific symptoms, preferences, history, and treatment goals.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 shadow-lg animate-fade-up">
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-12">
              How to Decide Which Approach Is Right for You
            </h2>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6 flex items-center gap-3">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Consider Medication Management if you:
              </h3>
              <ul className="space-y-3 ml-11">
                <li className="flex items-start gap-3 text-lg text-[var(--color-muted)]">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Have moderate to severe depression symptoms that interfere with daily functioning
                </li>
                <li className="flex items-start gap-3 text-lg text-[var(--color-muted)]">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Have a family history of depression or biological predisposition
                </li>
                <li className="flex items-start gap-3 text-lg text-[var(--color-muted)]">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Need relatively rapid symptom relief to function at work or home
                </li>
                <li className="flex items-start gap-3 text-lg text-[var(--color-muted)]">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Have tried therapy alone without sufficient improvement
                </li>
                <li className="flex items-start gap-3 text-lg text-[var(--color-muted)]">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Experience significant physical symptoms (sleep changes, appetite changes, fatigue)
                </li>
                <li className="flex items-start gap-3 text-lg text-[var(--color-muted)]">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Have recurrent depression episodes that may benefit from maintenance treatment
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6 flex items-center gap-3">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Consider Therapy Alone if you:
              </h3>
              <ul className="space-y-3 ml-11">
                <li className="flex items-start gap-3 text-lg text-[var(--color-muted)]">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Have mild to moderate depression that doesn't severely impair functioning
                </li>
                <li className="flex items-start gap-3 text-lg text-[var(--color-muted)]">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Can identify specific triggers or life circumstances contributing to depression
                </li>
                <li className="flex items-start gap-3 text-lg text-[var(--color-muted)]">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Prefer to avoid medication or have concerns about side effects
                </li>
                <li className="flex items-start gap-3 text-lg text-[var(--color-muted)]">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Are motivated to develop long-term coping skills and emotional resilience
                </li>
                <li className="flex items-start gap-3 text-lg text-[var(--color-muted)]">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Have time and commitment for weekly therapy sessions and homework
                </li>
                <li className="flex items-start gap-3 text-lg text-[var(--color-muted)]">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Want to address underlying patterns that may contribute to future episodes
                </li>
              </ul>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border border-[var(--color-border)]">
              <p className="text-lg text-[var(--color-ink)] font-medium mb-2">Remember:</p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                The most effective approach is often a combination of both. This decision should be made collaboratively with a qualified mental health provider who can assess your specific situation, severity of symptoms, medical history, and personal preferences. Treatment plans can always be adjusted based on your response and changing needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden animate-fade-up">
              <summary className="p-6 cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                <span>How long does it take for antidepressants to work?</span>
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Most antidepressants require 2-6 weeks to reach full therapeutic effectiveness. However, some patients notice improvements in sleep, energy, or appetite within the first 1-2 weeks. Full mood improvement typically takes 4-6 weeks. If you don't notice significant improvement after 6-8 weeks at an adequate dose, your provider may adjust the medication or try a different one. It's important not to discontinue medication prematurely—many people feel improvement just as they're considering stopping.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden animate-fade-up">
              <summary className="p-6 cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                <span>Will I become dependent on antidepressants?</span>
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Antidepressants are not addictive in the way that substances like opioids or benzodiazepines can be. They don't produce euphoria or cravings, and people don't develop tolerance requiring ever-increasing doses. However, it's important to taper off gradually under medical supervision rather than stopping abruptly, as sudden discontinuation can cause temporary withdrawal symptoms. Many people successfully discontinue antidepressants after 6-12 months of stability, while others benefit from longer-term maintenance to prevent relapse.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden animate-fade-up">
              <summary className="p-6 cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                <span>What type of therapy is most effective for depression?</span>
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Cognitive Behavioral Therapy (CBT) has the strongest research support for treating depression, teaching you to identify and change negative thought patterns and behaviors. Interpersonal Therapy (IPT) is also highly effective, focusing on relationship issues and life transitions. Other evidence-based approaches include Acceptance and Commitment Therapy (ACT), Behavioral Activation, and Mindfulness-Based Cognitive Therapy. The most important factor is often the therapeutic relationship itself—working with a therapist you trust and feel comfortable with tends to produce better outcomes than any specific therapy type alone.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden animate-fade-up">
              <summary className="p-6 cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                <span>Can I start with therapy and add medication later if needed?</span>
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Absolutely. Many people begin with therapy, and if symptoms don't improve sufficiently after 8-12 weeks, medication can be added. This stepped-care approach allows you to try the least invasive treatment first while preserving the option to intensify treatment if needed. Conversely, some people start with medication for rapid symptom relief, then add therapy to address underlying issues and develop coping skills. Your treatment plan should be flexible and responsive to your progress and preferences.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden animate-fade-up">
              <summary className="p-6 cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                <span>How do I know if my depression is severe enough for medication?</span>
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                This determination should be made through a comprehensive evaluation with a mental health provider. Generally, medication is recommended when depression significantly impairs your ability to work, maintain relationships, care for yourself, or function in daily life. Other indicators include severe symptoms like suicidal thoughts, inability to get out of bed, marked weight loss, or complete loss of interest in all activities. A provider will use standardized assessment tools, review your history, and discuss your symptoms' severity and duration to make this recommendation collaboratively with you.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
            Discuss Your Treatment Options
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Schedule a consultation to explore which approach—or combination of approaches—is right for your unique situation.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Schedule a Consultation
          </a>
          <p className="mt-6 text-white/75">
            Serving Fairfield, CT and surrounding communities
          </p>
        </div>
      </section>
    </main>
  )
}