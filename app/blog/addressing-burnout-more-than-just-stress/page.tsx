import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Addressing Burnout: More Than Just Stress | JROSE WELLNESS',
  description: 'Learn how burnout differs from everyday stress, recognize the warning signs, and discover evidence-based strategies to restore balance and wellbeing in your life.',
  alternates: { canonical: '/blog/addressing-burnout-more-than-just-stress' },
  openGraph: {
    title: 'Addressing Burnout: More Than Just Stress | JROSE WELLNESS',
    description: 'Learn how burnout differs from everyday stress, recognize the warning signs, and discover evidence-based strategies to restore balance and wellbeing in your life.',
    url: 'https://jrosewellness.com/blog/addressing-burnout-more-than-just-stress',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Addressing Burnout: More Than Just Stress | JROSE WELLNESS',
    description: 'Learn how burnout differs from everyday stress, recognize the warning signs, and discover evidence-based strategies to restore balance and wellbeing in your life.',
    images: ['/og-image.png'],
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-6 text-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Mental Health
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Addressing Burnout: More Than Just Stress
          </h1>

          {/* Meta Info */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>JROSE WELLNESS Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              You wake up exhausted despite a full night's sleep. The work you once found meaningful now feels like an endless treadmill. You snap at loved ones over small things, and that persistent sense of "running on empty" has become your new normal. If this sounds familiar, you may be experiencing burnout—a state that goes far beyond ordinary stress and demands our serious attention.
            </p>
            <p className="mb-6">
              In our always-on culture, burnout has reached epidemic proportions. The World Health Organization now recognizes it as an "occupational phenomenon," affecting millions across professions, ages, and backgrounds. Yet many people still mistake burnout for simple stress, missing crucial warning signs until they reach a breaking point. Understanding the difference—and knowing how to respond—can be life-changing.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            What Is Burnout, Really?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Burnout is a state of emotional, physical, and mental exhaustion caused by prolonged or excessive stress. But unlike acute stress—which typically has a clear trigger and resolution—burnout develops gradually, often over months or years, until it fundamentally changes how we function and feel about our lives.
            </p>
            <p className="mb-6">
              The World Health Organization defines burnout through three key dimensions: overwhelming exhaustion, feelings of cynicism or detachment from one's work, and a sense of reduced professional efficacy. In simpler terms, you feel drained, you stop caring, and you question whether anything you do matters.
            </p>
            <p className="mb-6">
              What makes burnout distinct from everyday stress is its pervasive nature. While stress is characterized by over-engagement and urgency, burnout involves disengagement and a loss of motivation. Stress says "too much"—burnout says "not enough" (not enough energy, meaning, or hope). This fundamental difference requires different approaches to healing.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant animate-fade-up">
            "Burnout is not a sign of weakness or failure—it's a signal that something fundamental in your life needs to change."
          </blockquote>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Recognizing the Warning Signs
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Burnout manifests differently in different people, but research has identified several common patterns. Physical symptoms often appear first: chronic fatigue that doesn't improve with rest, frequent headaches, disrupted sleep patterns, and increased susceptibility to illness as your immune system weakens under prolonged stress.
            </p>
            <p className="mb-6">
              Emotionally, burnout creates a sense of detachment or numbness. Activities that once brought joy feel meaningless. You may experience increased irritability, cynicism, or a sense of helplessness. Many people describe feeling like they're "going through the motions" or watching their life from outside themselves.
            </p>
            <p className="mb-6">
              Cognitive changes are equally telling. Burnout impairs concentration, decision-making, and creativity. You might find yourself staring at simple tasks, unable to begin, or making uncharacteristic mistakes. Memory problems and difficulty focusing are common, creating a frustrating cycle where work takes longer, increasing stress and exhaustion further.
            </p>
            <p className="mb-6">
              Behaviorally, burnout often leads to withdrawal from responsibilities and relationships. Procrastination increases, performance drops, and people isolate themselves from social support—the very resources they most need. Some turn to food, alcohol, or other substances to cope, creating additional health concerns.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Who's at Risk?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              While burnout was initially studied primarily in helping professions—healthcare workers, teachers, social workers—we now understand it can affect anyone facing chronic workplace or life stress. Certain factors significantly increase risk:
            </p>
            <p className="mb-6">
              High-demand roles with limited control create fertile ground for burnout. When you have heavy responsibilities but little authority to make decisions or influence outcomes, the resulting powerlessness is particularly toxic. This dynamic appears across industries, from healthcare to customer service to corporate leadership.
            </p>
            <p className="mb-6">
              Lack of recognition and unclear expectations also contribute. When your efforts go unacknowledged, or when you're unsure what success looks like, motivation erodes. Add dysfunctional workplace dynamics, insufficient resources, or a mismatch between personal values and organizational culture, and burnout becomes nearly inevitable.
            </p>
            <p className="mb-6">
              Individual factors matter too. Perfectionism, difficulty setting boundaries, and the tendency to prioritize others' needs over your own all increase vulnerability. People who derive their entire sense of identity from their work face particular risk when that work becomes unsustainable.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            The Science Behind Burnout
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Research reveals that burnout creates measurable changes in brain structure and function. Chronic stress dysregulates the hypothalamic-pituitary-adrenal (HPA) axis, disrupting cortisol production and creating a cascade of physiological effects. Unlike acute stress, where cortisol spikes and then returns to normal, burnout often involves chronically elevated or, paradoxically, abnormally low cortisol levels.
            </p>
            <p className="mb-6">
              Neuroimaging studies show that prolonged stress can actually shrink the prefrontal cortex—the brain region responsible for decision-making and emotional regulation—while enlarging the amygdala, heightening fear and anxiety responses. This explains why burnout makes it harder to think clearly and manage emotions.
            </p>
            <p className="mb-6">
              The good news? These changes aren't necessarily permanent. With appropriate intervention, the brain demonstrates remarkable neuroplasticity—the ability to form new neural connections and recover function. This is why early recognition and proactive response matter so much.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Practical Strategies for Recovery
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-6 animate-fade-up">
            <p className="mb-6">
              Recovering from burnout requires more than a vacation or a few self-care practices—it demands honest assessment of what's not working and willingness to make meaningful changes. That said, several evidence-based approaches can help:
            </p>
          </div>

          <div className="space-y-4 mb-8 animate-fade-up">
            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-[var(--color-ink)] leading-loose"><strong>Set firm boundaries.</strong> Learn to say no to non-essential commitments. Protect time for rest and recovery with the same vigilance you apply to work deadlines. This isn't selfish—it's essential for sustainable functioning.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-[var(--color-ink)] leading-loose"><strong>Prioritize physical wellbeing.</strong> Regular exercise, adequate sleep, and nutritious eating aren't luxuries when addressing burnout—they're foundational. Physical activity in particular has powerful effects on mood and stress resilience.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-[var(--color-ink)] leading-loose"><strong>Reconnect with meaning.</strong> Reflect on what drew you to your work or commitments originally. Sometimes burnout signals that you've drifted from core values. Can you realign your activities with what matters most to you?</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-[var(--color-ink)] leading-loose"><strong>Cultivate social support.</strong> Burnout thrives in isolation. Reach out to trusted friends, family, or colleagues. Professional support groups can also provide validation and practical strategies from others who understand.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-[var(--color-ink)] leading-loose"><strong>Practice mindfulness and stress reduction.</strong> Meditation, deep breathing, yoga, and similar practices help regulate the nervous system. Even brief daily practice can reduce symptoms and improve resilience over time.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-[var(--color-ink)] leading-loose"><strong>Consider professional help.</strong> Therapy, particularly cognitive-behavioral approaches, can help you identify unhelpful thought patterns and develop healthier coping strategies. If burnout includes significant depression or anxiety, medical consultation is important.</p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Moving Forward
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Recovery from burnout takes time—often months, not weeks. Be patient with yourself. Progress isn't linear, and setbacks don't mean failure. What matters is recognizing where you are, taking the situation seriously, and committing to sustainable change rather than just "powering through."
            </p>
            <p className="mb-6">
              Sometimes recovery requires difficult decisions: changing jobs, renegotiating relationships, or fundamentally restructuring how you spend your time and energy. These choices aren't easy, but they're often necessary. Your wellbeing isn't negotiable—it's the foundation everything else in your life rests upon.
            </p>
            <p className="mb-6">
              If you're struggling with burnout, know that you're not alone, and help is available. An integrative approach that addresses physical health, emotional wellbeing, and life circumstances offers the best chance for meaningful, lasting recovery. You deserve support in building a life that sustains rather than depletes you.
            </p>
          </div>

          {/* Author Box */}
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 my-12 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-1">Reviewed by JROSE WELLNESS</div>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Our team is dedicated to providing evidence-based information and compassionate support for your wellness journey. We integrate the latest research with personalized care to help you achieve optimal health and wellbeing.
              </p>
            </div>
          </div>

        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center animate-fade-up">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <Link href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-8 flex items-center justify-center h-48">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Resources</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  More Wellness Articles
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Explore our complete library of wellness resources and patient education materials.
                </p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/services" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-8 flex items-center justify-center h-48">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Our Services</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Integrative Wellness Services
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover our comprehensive approach to wellness and whole-person care.
                </p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/contact" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-8 flex items-center justify-center h-48">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Get Started</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Schedule a Consultation
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Take the first step toward better health and wellbeing today.
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you find balance and restore your wellbeing.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:gap-3"
          >
            <span>Schedule Your Consultation</span>
            <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  )
}