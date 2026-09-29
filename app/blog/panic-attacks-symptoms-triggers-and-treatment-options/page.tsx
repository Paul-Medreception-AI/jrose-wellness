import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Panic Attacks: Symptoms, Triggers, and Treatment Options',
  description: 'Learn about panic attack symptoms, common triggers, and evidence-based treatment options. Expert guidance on managing panic disorder and anxiety.',
  alternates: { canonical: '/blog/panic-attacks-symptoms-triggers-and-treatment-options' },
  openGraph: {
    title: 'Panic Attacks: Symptoms, Triggers, and Treatment Options',
    description: 'Learn about panic attack symptoms, common triggers, and evidence-based treatment options. Expert guidance on managing panic disorder and anxiety.',
    url: 'https://jrosewellness.com/blog/panic-attacks-symptoms-triggers-and-treatment-options',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Panic Attacks: Symptoms, Triggers, and Treatment Options',
    description: 'Learn about panic attack symptoms, common triggers, and evidence-based treatment options. Expert guidance on managing panic disorder and anxiety.',
    images: ['/og-image.png']
  }
}

export default function PanicAttacksArticle() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-sm mb-6 text-white/80 text-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">Mental Health</div>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">
            Panic Attacks: Symptoms, Triggers, and Treatment Options
          </h1>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Reviewed by JROSE WELLNESS</span>
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl leading-relaxed mb-8">
              Your heart pounds uncontrollably. You can't catch your breath. A wave of terror washes over you, convincing you something catastrophic is happening. Then, just as suddenly as it began, it fades. If you've experienced this, you're not alone—panic attacks affect millions of people, and understanding them is the first step toward reclaiming control.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is a Panic Attack?</h2>
            <p className="mb-6">
              A panic attack is an abrupt surge of intense fear or discomfort that reaches its peak within minutes. Unlike general anxiety, which builds gradually, panic attacks strike suddenly and can feel overwhelming. The experience is both physical and psychological, often leaving people frightened of when the next episode might occur.
            </p>
            <p className="mb-6">
              According to the National Institute of Mental Health, approximately 11% of adults in the United States experience a panic attack in a given year. While a single panic attack doesn't necessarily indicate panic disorder, recurrent attacks—especially when accompanied by persistent worry about future episodes—may warrant clinical attention.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Recognizing the Symptoms</h2>
            <p className="mb-6">
              Panic attacks manifest through a constellation of physical and emotional symptoms. During an episode, you may experience four or more of the following:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>Racing or pounding heartbeat (palpitations)</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>Sweating, trembling, or shaking</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>Shortness of breath or feeling of being smothered</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>Chest pain or discomfort</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>Nausea or abdominal distress</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>Dizziness, lightheadedness, or feeling faint</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>Chills or heat sensations</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>Numbness or tingling sensations</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>Feelings of unreality (derealization) or being detached from oneself (depersonalization)</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>Fear of losing control or "going crazy"</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>Fear of dying</span>
              </li>
            </ul>
            <p className="mb-6">
              Many people experiencing their first panic attack believe they're having a heart attack or another life-threatening medical emergency. The physical symptoms are real and intense, which is why it's important to rule out other medical conditions with your healthcare provider.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                "Understanding that panic attacks, while terrifying, are not dangerous can be the first step in reducing their power over your life."
              </p>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Common Triggers and Risk Factors</h2>
            <p className="mb-6">
              Panic attacks can occur unexpectedly or be triggered by specific situations. Understanding your personal triggers is essential for developing effective coping strategies.
            </p>
            <p className="mb-4 font-semibold text-[var(--color-ink)]">Situational Triggers:</p>
            <ul className="space-y-2 mb-6 ml-6">
              <li className="list-disc">Crowded spaces or public transportation</li>
              <li className="list-disc">Being in enclosed spaces (elevators, tunnels)</li>
              <li className="list-disc">Social situations or public speaking</li>
              <li className="list-disc">Driving, especially on highways or bridges</li>
              <li className="list-disc">Stressful life events or major transitions</li>
            </ul>
            <p className="mb-4 font-semibold text-[var(--color-ink)]">Contributing Factors:</p>
            <ul className="space-y-2 mb-6 ml-6">
              <li className="list-disc">Family history of panic disorder or anxiety</li>
              <li className="list-disc">Chronic stress or traumatic experiences</li>
              <li className="list-disc">Major life changes (moving, job loss, divorce)</li>
              <li className="list-disc">Certain medical conditions (thyroid problems, heart arrhythmias)</li>
              <li className="list-disc">Substance use, including caffeine and stimulants</li>
              <li className="list-disc">Withdrawal from certain medications</li>
            </ul>
            <p className="mb-6">
              Research published in the Journal of Psychiatric Research indicates that genetic factors account for approximately 40% of panic disorder risk, highlighting the importance of family history in vulnerability.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">The Impact on Daily Life</h2>
            <p className="mb-6">
              Beyond the episodes themselves, panic attacks can significantly affect quality of life. Many people develop anticipatory anxiety—fear of having another attack—which can lead to avoidance behaviors. You might start avoiding places or situations where you've previously had an attack, gradually limiting your activities and independence.
            </p>
            <p className="mb-6">
              This avoidance can escalate into agoraphobia, where the fear of panic attacks becomes so overwhelming that you avoid leaving home or entering situations where escape might be difficult. Studies show that untreated panic disorder increases the risk of developing depression, substance abuse problems, and other anxiety disorders.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Evidence-Based Treatment Options</h2>
            <p className="mb-6">
              The good news is that panic attacks and panic disorder are highly treatable. Most people experience significant improvement with appropriate intervention.
            </p>
            <p className="mb-4 font-semibold text-[var(--color-ink)]">Cognitive-Behavioral Therapy (CBT):</p>
            <p className="mb-6">
              CBT is considered the gold standard psychological treatment for panic disorder. This approach helps you identify and change thought patterns that contribute to panic attacks. You'll learn to recognize catastrophic thinking, challenge irrational fears, and develop healthier responses to physical sensations. Research shows that 70-90% of people who complete CBT experience significant symptom reduction.
            </p>
            <p className="mb-4 font-semibold text-[var(--color-ink)]">Exposure Therapy:</p>
            <p className="mb-6">
              A component of CBT, exposure therapy involves gradually and safely confronting feared situations or physical sensations. By repeatedly facing these triggers in a controlled way, you learn that panic symptoms are uncomfortable but not dangerous, reducing the fear response over time.
            </p>
            <p className="mb-4 font-semibold text-[var(--color-ink)]">Medication:</p>
            <p className="mb-6">
              Several medications can effectively reduce panic symptoms. Selective serotonin reuptake inhibitors (SSRIs) and serotonin-norepinephrine reuptake inhibitors (SNRIs) are commonly prescribed as first-line treatments. Benzodiazepines may be used short-term for immediate symptom relief, though they carry risks of dependence with long-term use. Medication decisions should always be made in consultation with a qualified healthcare provider.
            </p>
            <p className="mb-4 font-semibold text-[var(--color-ink)]">Lifestyle Modifications:</p>
            <p className="mb-6">
              Complementary strategies can enhance treatment effectiveness. Regular exercise has been shown to reduce anxiety and improve mood. Mindfulness meditation and breathing techniques can help you manage symptoms during an episode. Reducing caffeine and alcohol intake, maintaining consistent sleep patterns, and building a strong support network all contribute to better outcomes.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Immediate Coping Strategies</h2>
            <p className="mb-6">
              While professional treatment is essential for long-term management, these techniques can help during an acute panic attack:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Practice controlled breathing:</strong> Breathe in slowly through your nose for 4 counts, hold for 4, then exhale through your mouth for 6 counts</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Ground yourself:</strong> Use the 5-4-3-2-1 technique—identify 5 things you see, 4 you can touch, 3 you hear, 2 you smell, and 1 you taste</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Remind yourself:</strong> "This is uncomfortable, but not dangerous. It will pass."</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Stay present:</strong> Avoid catastrophic thinking about what might happen</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Resist the urge to flee:</strong> If safe, stay in the situation to learn that the panic will subside on its own</span>
              </li>
            </ul>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Professional Help</h2>
            <p className="mb-6">
              If you've experienced multiple panic attacks, live in fear of having another, or have begun avoiding situations because of panic, it's time to reach out to a healthcare provider. Early intervention can prevent the development of more severe anxiety disorders and help you regain control of your life.
            </p>
            <p className="mb-6">
              A comprehensive evaluation will rule out medical conditions that can mimic panic symptoms, such as thyroid disorders or cardiac issues, and determine the most appropriate treatment approach for your situation.
            </p>
            <p className="mb-6">
              Living with panic attacks can feel isolating and overwhelming, but effective help is available. With proper treatment and support, most people learn to manage their symptoms successfully and return to full, active lives. You don't have to face this alone—reaching out is a sign of strength, not weakness, and the first step toward feeling better.
            </p>
          </div>
        </div>

        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6">
          <div className="flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-2">Reviewed by JROSE WELLNESS</div>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                This article has been reviewed for accuracy and clarity by our care team. We are committed to providing evidence-based information that helps you make informed decisions about your health and well-being.
              </p>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Resource Center</div>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Browse All Articles
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Explore our complete library of health and wellness resources.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-semibold group-hover:gap-3 flex items-center gap-2 transition-all">
                  View Resources
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/services" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Our Services</div>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Explore Our Services
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Discover comprehensive integrative wellness care options.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-semibold group-hover:gap-3 flex items-center gap-2 transition-all">
                  Learn More
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/contact" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Get Started</div>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Schedule a Consultation
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Take the first step toward better mental health and wellness.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-semibold group-hover:gap-3 flex items-center gap-2 transition-all">
                  Contact Us
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-white/90">Our team is here to help.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}