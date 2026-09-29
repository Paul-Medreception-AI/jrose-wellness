import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Anxiety vs. Stress: How to Tell the Difference and When to Seek Help',
  description: 'Learn the key differences between anxiety and stress, understand their symptoms, and discover when it is time to seek professional help for your mental health.',
  alternates: { canonical: '/blog/anxiety-vs-stress-how-to-tell-the-difference-and-when-to-see' },
  openGraph: {
    title: 'Anxiety vs. Stress: How to Tell the Difference and When to Seek Help',
    description: 'Learn the key differences between anxiety and stress, understand their symptoms, and discover when it is time to seek professional help for your mental health.',
    url: 'https://jrosewellness.com/blog/anxiety-vs-stress-how-to-tell-the-difference-and-when-to-see',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anxiety vs. Stress: How to Tell the Difference and When to Seek Help',
    description: 'Learn the key differences between anxiety and stress, understand their symptoms, and discover when it is time to seek professional help for your mental health.',
    images: ['/og-image.png']
  }
}

export default function AnxietyVsStressArticle() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm text-white/80 mb-6 text-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>

          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Mental Health
          </div>

          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Anxiety vs. Stress: How to Tell the Difference and When to Seek Help
          </h1>

          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published December 2024</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Reviewed by JROSE WELLNESS Team</span>
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              You are lying awake at 2 a.m., mind racing about tomorrow's presentation, next month's bills, and that conversation you had three weeks ago. Your heart pounds. Your shoulders ache. You wonder: Is this normal stress, or is it something more? Understanding the difference between everyday stress and clinical anxiety is not just academic—it is the first step toward feeling better and knowing when to reach out for support.
            </p>
            <p className="mb-6">
              Both stress and anxiety can feel remarkably similar. They share physical symptoms like racing thoughts, tension, and fatigue. Yet they are fundamentally different experiences that require different approaches. Let us explore what sets them apart and, most importantly, when it is time to seek professional guidance.
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is Stress?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Stress is your body's natural response to external demands or pressures. It is typically tied to a specific trigger—a looming deadline, financial concerns, relationship conflict, or a major life change. When the stressor resolves or disappears, stress usually diminishes or goes away entirely.
            </p>
            <p className="mb-6">
              Stress can actually be helpful in small doses. It motivates you to meet deadlines, avoid danger, and rise to challenges. This acute stress activates your fight-or-flight response, giving you a burst of energy and focus. The problem arises when stress becomes chronic—when the pressure never lets up, and your body remains in a constant state of high alert.
            </p>
            <p className="mb-6">
              Common stress triggers include work pressures, family responsibilities, health concerns, financial strain, and major life transitions like moving, changing jobs, or losing a loved one.
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is Anxiety?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Anxiety, on the other hand, is an internal experience characterized by persistent worry, fear, or apprehension that feels disproportionate to any actual threat. Unlike stress, anxiety does not necessarily need an external trigger. It can appear seemingly out of nowhere and persist even when life circumstances are relatively stable.
            </p>
            <p className="mb-6">
              People with anxiety often describe a sense of impending doom or catastrophic thinking—imagining worst-case scenarios even when there is little evidence they will occur. The worry becomes difficult to control and can interfere significantly with daily functioning, relationships, work, and sleep.
            </p>
            <p className="mb-6">
              Anxiety exists on a spectrum. Occasional anxious feelings are normal and universal. Clinical anxiety disorders—such as generalized anxiety disorder (GAD), panic disorder, or social anxiety disorder—represent the more severe end of that spectrum, where symptoms become chronic, intense, and impairing.
            </p>
          </div>

          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            Stress is usually tied to a specific situation. Anxiety lingers, even when the stressor is gone—or when there is no clear stressor at all.
          </blockquote>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Key Differences Between Stress and Anxiety
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While stress and anxiety can overlap, several distinguishing features can help you identify which you are experiencing:
            </p>
            <div className="space-y-4 my-6">
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Trigger:</strong> Stress has a clear, identifiable cause. Anxiety may not have an obvious external trigger.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Duration:</strong> Stress tends to resolve when the situation improves. Anxiety persists even when life circumstances are stable.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Focus:</strong> Stress is usually present-focused (I have too much to do right now). Anxiety is often future-focused (What if something terrible happens?).</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Symptoms:</strong> Both cause physical tension and restlessness, but anxiety is more likely to include panic attacks, intrusive thoughts, and avoidance behaviors.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Impact:</strong> Stress can be motivating in moderation. Anxiety is rarely productive and often paralyzes decision-making.</p>
              </div>
            </div>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Recognizing the Physical and Emotional Signs
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Both stress and anxiety manifest physically and emotionally. Common overlapping symptoms include:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li>Muscle tension, especially in the neck, shoulders, and jaw</li>
              <li>Headaches or migraines</li>
              <li>Digestive issues like nausea, diarrhea, or stomach pain</li>
              <li>Difficulty sleeping or staying asleep</li>
              <li>Irritability, restlessness, or feeling on edge</li>
              <li>Difficulty concentrating</li>
              <li>Fatigue or exhaustion</li>
            </ul>
            <p className="mb-6">
              Anxiety-specific symptoms often include:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li>Intense, uncontrollable worry</li>
              <li>Panic attacks (sudden episodes of overwhelming fear with physical symptoms like chest pain, dizziness, shortness of breath)</li>
              <li>Avoidance of situations that trigger anxious feelings</li>
              <li>Intrusive, racing thoughts</li>
              <li>A persistent sense of dread or impending disaster</li>
            </ul>
            <p className="mb-6">
              If you notice these symptoms persisting for weeks or months, interfering with work, relationships, or daily activities, it may be time to seek professional evaluation.
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When to Seek Professional Help
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Knowing when to reach out for support can be challenging. Many people dismiss their symptoms, thinking they should be able to handle it on their own. But seeking help is a sign of strength, not weakness—and early intervention can prevent symptoms from worsening.
            </p>
            <p className="mb-6">
              Consider reaching out to a healthcare provider if:
            </p>
            <div className="space-y-4 my-6">
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>Your symptoms last longer than a few weeks</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>Your worry feels excessive or out of proportion to the situation</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>You are avoiding activities, places, or people because of anxiety</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>Your symptoms interfere with work, school, relationships, or daily functioning</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>You experience panic attacks</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>You turn to alcohol, drugs, or other unhealthy coping mechanisms</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>You have thoughts of self-harm or suicide</p>
              </div>
            </div>
            <p className="mb-6">
              A healthcare provider trained in integrative wellness care can help you understand what you are experiencing, explore underlying causes, and develop a personalized treatment plan. Treatment may include counseling, stress management techniques, lifestyle modifications, nutritional support, mindfulness practices, and—when appropriate—medication.
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Practical Steps You Can Take Today
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Whether you are dealing with stress, anxiety, or a combination of both, there are evidence-based strategies you can start using right away:
            </p>
            <div className="space-y-4 my-6">
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Practice deep breathing:</strong> Slow, diaphragmatic breathing activates your parasympathetic nervous system and calms your stress response.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Move your body:</strong> Regular physical activity reduces stress hormones, boosts mood-regulating neurotransmitters, and improves sleep.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Limit caffeine and alcohol:</strong> Both can worsen anxiety symptoms and disrupt sleep patterns.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Prioritize sleep:</strong> Aim for 7-9 hours per night. Poor sleep amplifies both stress and anxiety.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Connect with others:</strong> Social support is a powerful buffer against stress and anxiety. Do not isolate yourself.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Set boundaries:</strong> Learn to say no to commitments that drain you and protect time for rest and self-care.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Challenge catastrophic thinking:</strong> When anxious thoughts spiral, ask yourself: What evidence do I have? What would I tell a friend in this situation?</p>
              </div>
            </div>
          </div>

          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Understanding the difference between stress and anxiety is more than an academic exercise—it is a roadmap to better mental health. Both deserve attention and care, but recognizing when everyday stress has crossed into clinical anxiety can be the turning point toward relief and recovery.
            </p>
            <p className="mb-6">
              If you are struggling to manage symptoms on your own, or if anxiety is affecting your quality of life, reaching out for professional support is a powerful act of self-compassion. You do not have to navigate this alone, and effective help is available.
            </p>
            <p className="font-semibold">
              At JROSE WELLNESS in Fairfield, CT, we provide compassionate, integrative care for individuals experiencing stress, anxiety, and related concerns. Contact us today to schedule a consultation and take the first step toward feeling like yourself again.
            </p>
          </div>
        </div>
      </article>

      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-1">Reviewed by JROSE WELLNESS</div>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Our team is dedicated to providing evidence-based, compassionate care for individuals seeking integrative wellness solutions in Fairfield, CT. We combine clinical expertise with a holistic approach to help you achieve optimal health and well-being.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Patient Education</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Browse All Articles
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Explore our complete library of wellness resources and patient education materials.
                </p>
              </div>
            </Link>

            <Link href="/services" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Our Services</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Integrative Wellness Care
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Discover our comprehensive approach to mental health and whole-person wellness.
                </p>
              </div>
            </Link>

            <Link href="/contact" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Get Started</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Schedule a Consultation
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Connect with our team to discuss your concerns and explore treatment options.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help you navigate stress, anxiety, and your path to wellness.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}