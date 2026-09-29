import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Depression and Motivation: Why It\'s So Hard and What Helps',
  description: 'Understand the neuroscience behind depression and motivation, why simple tasks feel impossible, and evidence-based strategies that can help you move forward.',
  alternates: { canonical: '/blog/depression-and-motivation-why-it-s-so-hard-and-what-helps' },
  openGraph: {
    title: 'Depression and Motivation: Why It\'s So Hard and What Helps',
    description: 'Understand the neuroscience behind depression and motivation, why simple tasks feel impossible, and evidence-based strategies that can help you move forward.',
    url: 'https://jrosewellness.com/blog/depression-and-motivation-why-it-s-so-hard-and-what-helps',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Depression and Motivation: Why It\'s So Hard and What Helps',
    description: 'Understand the neuroscience behind depression and motivation, why simple tasks feel impossible, and evidence-based strategies that can help you move forward.',
    images: ['/og-image.png']
  }
}

export default function DepressionMotivationArticle() {
  return (
    <main className="min-h-screen bg-white">
      <article>
        <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
          <div className="max-w-4xl mx-auto px-6">
            <nav className="text-sm text-white/80 mb-8 text-center">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Article</span>
            </nav>

            <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
              Mental Health
            </div>

            <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
              Depression and Motivation: Why It&apos;s So Hard and What Helps
            </h1>

            <div className="flex items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <span>January 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>7 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <span>Dr. WELLNESS Team</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-[var(--color-ink)] leading-loose text-lg mb-8">
              <p className="mb-6">
                You know you need to get out of bed. You know the laundry is piling up, the emails are waiting, and your friends have been asking how you&apos;re doing. But the thought of doing any of it feels like trying to move a mountain with your bare hands. It&apos;s not laziness. It&apos;s not weakness. When you&apos;re living with depression, motivation doesn&apos;t just dip—it can disappear entirely, leaving you wondering if you&apos;ll ever feel like yourself again.
              </p>
              <p>
                If this sounds familiar, you&apos;re not alone. Depression affects more than 21 million adults in the United States each year, and one of its most misunderstood symptoms is the profound loss of motivation. Understanding why this happens—and what actually helps—can be the first step toward finding your way forward.
              </p>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Why Depression Steals Your Motivation
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-4">
                Depression isn&apos;t just sadness—it&apos;s a complex neurobiological condition that affects the brain&apos;s reward and motivation systems. When you&apos;re depressed, several key changes occur in your brain chemistry:
              </p>
              <p className="mb-4">
                <strong>Dopamine depletion.</strong> Dopamine is the neurotransmitter responsible for motivation, pleasure, and reward anticipation. Depression disrupts dopamine signaling, making it harder to feel excitement about activities that once brought joy. Your brain literally can&apos;t generate the chemical reward that normally drives you to take action.
              </p>
              <p className="mb-4">
                <strong>Prefrontal cortex dysfunction.</strong> The prefrontal cortex—your brain&apos;s executive control center—becomes less active during depression. This region is responsible for planning, decision-making, and initiating goal-directed behavior. When it&apos;s not functioning optimally, even simple decisions feel overwhelming.
              </p>
              <p>
                <strong>Energy depletion.</strong> Depression often causes physical fatigue, disrupted sleep, and changes in appetite—all of which compound the problem. When your body is exhausted, mustering the energy to do anything feels nearly impossible, creating a vicious cycle.
              </p>
            </div>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                &quot;Depression doesn&apos;t just take away your desire to do things—it fundamentally changes how your brain processes reward and effort. Understanding this can help you approach recovery with more compassion and realistic expectations.&quot;
              </p>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Why &quot;Just Push Through It&quot; Doesn&apos;t Work
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-4">
                One of the most damaging myths about depression is that you can simply willpower your way out of it. Well-meaning friends and family members might suggest you &quot;think positive,&quot; &quot;get more exercise,&quot; or &quot;just do it anyway.&quot; While these can be helpful strategies when implemented correctly, approaching them from a place of shame or force often backfires.
              </p>
              <p className="mb-4">
                Here&apos;s why: depression impairs your brain&apos;s ability to initiate action and sustain effort. Telling someone with depression to &quot;just try harder&quot; is like telling someone with a broken leg to &quot;just walk it off.&quot; The physical and neurological components are real, and they require appropriate treatment and support.
              </p>
              <p>
                Additionally, forcing yourself to do things when your nervous system is depleted can lead to burnout, increased anxiety, and a deeper sense of failure when you inevitably can&apos;t maintain the pace. Recovery requires a different approach—one that honors where you are while gently moving toward where you want to be.
              </p>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Activation-Motivation Paradox
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-4">
                One of the most important concepts in treating depression-related motivation problems is understanding the activation-motivation paradox: <em>motivation doesn&apos;t create action; action creates motivation.</em>
              </p>
              <p className="mb-4">
                When you&apos;re depressed, you wait to feel motivated before doing something. But neuroscience shows us that behavioral activation—taking small actions even when you don&apos;t feel like it—is what actually restores motivation over time. The key is making those actions manageable enough that you can succeed.
              </p>
              <p>
                This is the foundation of Behavioral Activation Therapy, one of the most evidence-based treatments for depression. Rather than waiting for motivation to return, you gradually increase activities that have the potential to improve mood, which in turn slowly rebuilds your motivation system.
              </p>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              What Actually Helps: Evidence-Based Strategies
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-6">
                Recovery from depression-related motivation loss is possible, but it requires patience, the right support, and strategies that work <em>with</em> your brain rather than against it:
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong>Start micro-small.</strong> Instead of &quot;exercise for 30 minutes,&quot; try &quot;put on workout clothes&quot; or &quot;walk to the mailbox.&quot; Celebrate these wins—they&apos;re retraining your reward system.
                  </div>
                </div>

                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong>Schedule pleasant activities.</strong> Even if you don&apos;t feel like it, put activities that used to bring joy on your calendar. Exposure to positive experiences can gradually reawaken your brain&apos;s reward pathways.
                  </div>
                </div>

                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong>Prioritize sleep hygiene.</strong> Depression disrupts sleep, and poor sleep worsens depression. Establish consistent sleep and wake times, limit screen time before bed, and create a calming nighttime routine.
                  </div>
                </div>

                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong>Connect with others.</strong> Isolation feeds depression. Even a brief text exchange or a short walk with a friend can help. Social connection activates neural pathways that support motivation and mood.
                  </div>
                </div>

                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong>Consider professional support.</strong> Therapy (especially Cognitive Behavioral Therapy and Behavioral Activation) and, when appropriate, medication can significantly improve outcomes. Depression is a medical condition, and effective treatments exist.
                  </div>
                </div>

                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong>Practice self-compassion.</strong> Beating yourself up for lack of motivation only activates stress pathways that worsen depression. Treat yourself with the kindness you&apos;d offer a friend going through the same struggle.
                  </div>
                </div>
              </div>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Role of Integrative Care
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-4">
                An integrative approach to depression considers the whole person—mind, body, and lifestyle. Research increasingly supports the role of nutrition, movement, stress management, and mind-body practices in supporting mental health:
              </p>
              <p className="mb-4">
                <strong>Nutrition:</strong> Emerging evidence suggests that anti-inflammatory diets rich in omega-3 fatty acids, leafy greens, and whole foods may support mood regulation and brain health.
              </p>
              <p className="mb-4">
                <strong>Movement:</strong> Exercise has been shown to be as effective as medication for some people with mild to moderate depression, partly because it increases dopamine and serotonin production.
              </p>
              <p>
                <strong>Mindfulness and stress reduction:</strong> Practices like meditation, yoga, and breathwork can help regulate the nervous system and reduce the rumination that often accompanies depression.
              </p>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              When to Seek Professional Help
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
              <p className="mb-4">
                If you&apos;ve been experiencing persistent low mood, loss of interest in activities, changes in sleep or appetite, feelings of worthlessness, or thoughts of self-harm, it&apos;s important to seek professional support. Depression is highly treatable, and early intervention leads to better outcomes.
              </p>
              <p className="mb-4">
                A qualified healthcare provider can help you:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Determine whether you meet criteria for clinical depression</li>
                <li>Rule out medical conditions that can mimic depression (thyroid disorders, vitamin deficiencies, etc.)</li>
                <li>Develop a personalized treatment plan that may include therapy, medication, lifestyle changes, or a combination</li>
                <li>Monitor your progress and adjust treatment as needed</li>
              </ul>
              <p>
                Remember: asking for help is not a sign of weakness. It&apos;s a sign of strength and self-awareness.
              </p>
            </div>

            <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
              <p className="mb-4">
                Depression and motivation loss can feel like an impossible knot to untangle, but with the right understanding, support, and strategies, recovery is possible. Progress may be slow, and there will be setbacks, but each small step forward matters.
              </p>
              <p>
                If you&apos;re struggling with depression, know that you don&apos;t have to navigate it alone. At JROSE WELLNESS, we offer compassionate, evidence-based care that addresses the full picture of your health and well-being. We&apos;re here to help you find your path forward.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-[var(--color-ink)] mb-2">Reviewed by JROSE WELLNESS</div>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  This article is for informational purposes only and does not constitute medical advice. If you&apos;re experiencing symptoms of depression, please consult with a qualified healthcare provider for personalized evaluation and treatment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-cream)] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
                <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                  <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Mental Health</div>
                  <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    More Mental Health Resources
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm mb-4 leading-relaxed">
                    Explore our library of evidence-based articles on mental health and wellness.
                  </p>
                  <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2">
                    Browse Articles
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link href="/services" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
                <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                  <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Services</div>
                  <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    Our Wellness Services
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm mb-4 leading-relaxed">
                    Discover comprehensive integrative care tailored to your unique needs.
                  </p>
                  <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2">
                    View Services
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link href="/contact" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
                <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                  <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Support</div>
                  <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    Schedule a Consultation
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm mb-4 leading-relaxed">
                    Take the first step toward feeling better. We&apos;re here to help.
                  </p>
                  <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2">
                    Get Started
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-cormorant text-4xl font-light mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our team is here to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Schedule a Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}