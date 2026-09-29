import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Coping Strategies for Managing Daily Anxiety | JROSE WELLNESS',
  description: 'Discover evidence-based coping strategies and practical techniques to manage daily anxiety. Learn mindfulness practices, breathing exercises, and lifestyle changes that help.',
  alternates: { canonical: '/blog/coping-strategies-for-managing-daily-anxiety' },
  openGraph: {
    title: 'Coping Strategies for Managing Daily Anxiety | JROSE WELLNESS',
    description: 'Discover evidence-based coping strategies and practical techniques to manage daily anxiety. Learn mindfulness practices, breathing exercises, and lifestyle changes that help.',
    url: 'https://jrosewellness.com/blog/coping-strategies-for-managing-daily-anxiety',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coping Strategies for Managing Daily Anxiety | JROSE WELLNESS',
    description: 'Discover evidence-based coping strategies and practical techniques to manage daily anxiety. Learn mindfulness practices, breathing exercises, and lifestyle changes that help.',
    images: ['/og-image.png']
  }
}

export default function CopingStrategiesAnxietyPage() {
  return (
    <main className="min-h-screen bg-white">
      <article>
        <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white animate-fade-up">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-sm mb-6 text-white/80">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
              <span className="mx-2">›</span>
              <span>Article</span>
            </div>
            
            <div className="text-xs uppercase tracking-widest text-white/70 mb-4">
              Mental Health
            </div>
            
            <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
              Coping Strategies for Managing Daily Anxiety
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-sm text-white/80">
              <span>Published January 2025</span>
              <span>•</span>
              <span>7 min read</span>
              <span>•</span>
              <span>Reviewed by JROSE WELLNESS</span>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-[var(--color-ink)] leading-loose text-base animate-fade-up">
              <p className="text-xl leading-relaxed mb-8">
                Anxiety is more than just feeling stressed or worried. For millions of people, it's a daily companion that colors every decision, interaction, and moment of rest. The racing thoughts before a meeting, the knot in your stomach during a phone call, the endless loop of "what ifs" that keep you awake at night—these experiences are both deeply personal and remarkably universal. The good news is that anxiety, while challenging, is highly manageable with the right tools and strategies.
              </p>

              <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
                Understanding Daily Anxiety
              </h2>
              
              <p className="mb-6">
                Daily anxiety differs from an anxiety disorder in intensity and duration, but it can still significantly impact quality of life. It often manifests as persistent worry, physical tension, difficulty concentrating, irritability, and sleep disturbances. Unlike the occasional nervousness everyone experiences, daily anxiety is consistent and can interfere with work, relationships, and personal well-being.
              </p>
              
              <p className="mb-6">
                Research shows that approximately 31% of adults will experience an anxiety disorder at some point in their lives, and many more deal with subclinical anxiety symptoms. The COVID-19 pandemic saw anxiety rates increase dramatically, with many people continuing to struggle with heightened stress responses even as circumstances improved. Understanding that anxiety is a common human experience—not a personal failing—is the first step toward effective management.
              </p>

              <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
                Breathing Techniques That Calm the Nervous System
              </h2>
              
              <p className="mb-6">
                One of the most powerful and accessible tools for anxiety management is controlled breathing. When we're anxious, our breath becomes shallow and rapid, triggering the sympathetic nervous system's "fight or flight" response. Intentional breathing patterns can activate the parasympathetic nervous system, signaling to your body that it's safe to relax.
              </p>
              
              <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
                <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                  "The breath is the bridge between the mind and body. When you change your breathing, you change your state."
                </p>
              </div>
              
              <p className="mb-4">
                Evidence-based breathing techniques include:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>4-7-8 Breathing:</strong> Inhale through your nose for 4 counts, hold for 7 counts, exhale through your mouth for 8 counts. This technique has been shown to reduce anxiety and promote relaxation within minutes.</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Box Breathing:</strong> Inhale for 4 counts, hold for 4, exhale for 4, hold for 4. Used by Navy SEALs and first responders to maintain calm under pressure.</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Diaphragmatic Breathing:</strong> Place one hand on your chest and one on your belly. Breathe deeply so that only your belly hand rises. This engages the diaphragm and promotes full oxygen exchange.</span>
                </li>
              </ul>

              <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
                Grounding Techniques for Acute Anxiety
              </h2>
              
              <p className="mb-6">
                When anxiety spikes, grounding techniques can help anchor you in the present moment. These methods work by redirecting your focus from racing thoughts to immediate sensory experiences, interrupting the anxiety cycle.
              </p>
              
              <p className="mb-6">
                The 5-4-3-2-1 technique is particularly effective: Identify 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste. This systematic sensory inventory engages the prefrontal cortex, the rational part of your brain, helping to override the amygdala's alarm response.
              </p>
              
              <p className="mb-6">
                Other grounding strategies include holding ice cubes, splashing cold water on your face, progressive muscle relaxation (systematically tensing and releasing muscle groups), and the "mental math" technique of counting backward from 100 by sevens. The key is finding which methods resonate with you and practicing them before you need them urgently.
              </p>

              <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
                Lifestyle Modifications That Support Emotional Balance
              </h2>
              
              <p className="mb-6">
                While immediate coping techniques are valuable, sustainable anxiety management requires addressing the foundational aspects of health that influence emotional regulation.
              </p>
              
              <p className="mb-4">
                Research consistently demonstrates that several lifestyle factors significantly impact anxiety levels:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Sleep Hygiene:</strong> Aim for 7-9 hours of quality sleep. Maintain consistent sleep and wake times, create a cool, dark bedroom environment, and limit screens for at least an hour before bed. Sleep deprivation amplifies anxiety symptoms significantly.</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Regular Exercise:</strong> Physical activity is one of the most effective anxiety interventions. Aim for at least 150 minutes of moderate aerobic activity weekly. Exercise reduces stress hormones, increases endorphins, and improves sleep quality.</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Nutrition:</strong> A balanced diet supports neurotransmitter production and blood sugar stability, both crucial for mood regulation. Limit caffeine and alcohol, which can exacerbate anxiety symptoms.</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Social Connection:</strong> Isolation intensifies anxiety. Regular meaningful connection with supportive people provides emotional regulation, perspective, and a sense of belonging that buffers stress.</span>
                </li>
              </ul>

              <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
                Cognitive Strategies for Reframing Anxious Thoughts
              </h2>
              
              <p className="mb-6">
                Anxiety often stems from cognitive distortions—patterns of thinking that don't accurately reflect reality. Cognitive-behavioral therapy (CBT) techniques can help you identify and challenge these thought patterns.
              </p>
              
              <p className="mb-6">
                Common cognitive distortions include catastrophizing (assuming the worst possible outcome), black-and-white thinking, overgeneralization, and mind-reading (assuming you know what others think). When you notice anxious thoughts, ask yourself: What evidence supports this thought? What evidence contradicts it? What would I tell a friend thinking this way? What's a more balanced perspective?
              </p>
              
              <p className="mb-6">
                Thought records—writing down anxious thoughts and systematically challenging them—have substantial research support. This practice creates distance between you and your thoughts, helping you recognize that thoughts are mental events, not facts. Over time, this metacognitive awareness reduces the power anxiety holds over you.
              </p>

              <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
                Mindfulness and Acceptance Practices
              </h2>
              
              <p className="mb-6">
                While cognitive techniques focus on changing thoughts, mindfulness-based approaches emphasize accepting and observing them without judgment. Research on mindfulness-based stress reduction (MBSR) and acceptance and commitment therapy (ACT) shows significant reductions in anxiety symptoms.
              </p>
              
              <p className="mb-6">
                Mindfulness practice involves bringing your attention to the present moment with curiosity and without judgment. This might include formal meditation, but can also be as simple as mindful walking, eating, or even washing dishes. The goal isn't to eliminate anxiety, but to change your relationship with it—observing anxious sensations without being consumed by them.
              </p>
              
              <p className="mb-6">
                Many people find that guided meditation apps, body scan practices, or brief mindfulness exercises throughout the day help build this skill. Like physical exercise, the benefits accumulate with consistent practice. Even five minutes daily can create meaningful change over time.
              </p>

              <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
                When to Seek Professional Support
              </h2>
              
              <p className="mb-6">
                While self-management strategies are valuable, they're not always sufficient. Consider seeking professional help if your anxiety significantly interferes with work, relationships, or daily activities; if you're avoiding important life situations due to anxiety; if you experience panic attacks; or if anxiety is accompanied by depression, substance use, or thoughts of self-harm.
              </p>
              
              <p className="mb-6">
                Professional treatment options include psychotherapy (particularly CBT and ACT), medication when appropriate, and integrative approaches that address nutrition, exercise, and stress management holistically. Many people benefit from a combination of approaches tailored to their unique situation.
              </p>
              
              <p className="mb-6">
                Managing daily anxiety is a skill that improves with practice and patience. By implementing breathing techniques, grounding strategies, lifestyle modifications, cognitive reframing, and mindfulness practices, you can build resilience and reclaim a sense of calm in your daily life. Remember that progress isn't linear—some days will be harder than others, and that's completely normal. What matters is having a toolkit of strategies to draw from and the self-compassion to use them without judgment.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-cream)] py-12 animate-fade-up">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-[var(--color-ink)] mb-1">Reviewed by JROSE WELLNESS</div>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  This article provides educational information and is not a substitute for professional medical advice. If you're experiencing persistent anxiety symptoms, we encourage you to schedule a consultation to discuss personalized treatment options.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-cream)] py-16 animate-fade-up">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-8 flex items-center justify-center h-48">
                  <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Resource Library</div>
                  <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Browse All Articles</h4>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                    Explore our complete collection of wellness resources and patient education materials.
                  </p>
                  <div className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                    View Resources
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link href="/services" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-8 flex items-center justify-center h-48">
                  <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Our Services</div>
                  <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Explore Our Wellness Services</h4>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                    Discover personalized integrative wellness care designed to support your health goals.
                  </p>
                  <div className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link href="/contact" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-8 flex items-center justify-center h-48">
                  <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Get In Touch</div>
                  <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Schedule a Consultation</h4>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                    Connect with our team to discuss how we can support your wellness journey.
                  </p>
                  <div className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                    Contact Us
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center animate-fade-up">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
            <p className="text-lg mb-8 text-white/90">Our team is here to help.</p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
            >
              Schedule a Consultation
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}