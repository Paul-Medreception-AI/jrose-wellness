import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Managing Mental Health During Major Life Transitions',
  description: 'Learn evidence-based strategies for navigating life changes while protecting your mental wellbeing. Expert guidance on managing stress during major transitions.',
  alternates: { canonical: '/blog/managing-mental-health-during-major-life-transitions' },
  openGraph: {
    title: 'Managing Mental Health During Major Life Transitions',
    description: 'Learn evidence-based strategies for navigating life changes while protecting your mental wellbeing. Expert guidance on managing stress during major transitions.',
    url: 'https://jrosewellness.com/blog/managing-mental-health-during-major-life-transitions',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Managing Mental Health During Major Life Transitions',
    description: 'Learn evidence-based strategies for navigating life changes while protecting your mental wellbeing. Expert guidance on managing stress during major transitions.',
    images: ['/og-image.png']
  }
}

export default function BlogPost() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm mb-6 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4">Mental Health</div>
          
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Managing Mental Health During Major Life Transitions
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

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-6">
            <p className="text-xl leading-relaxed">
              Whether you're starting a new career, moving to a different city, ending a relationship, or welcoming a child, major life transitions mark pivotal moments in our personal narratives. Yet beneath the excitement or relief these changes may bring often lies a complex emotional landscape that can significantly impact mental health. Understanding how to navigate these periods with awareness and intention can mean the difference between flourishing through change and merely surviving it.
            </p>

            <p>
              Life transitions—even positive ones—inherently involve loss. You're leaving behind the familiar, predictable patterns that provided structure and comfort. This disruption to your sense of normalcy can trigger stress responses, anxiety, and feelings of uncertainty, regardless of whether the change was chosen or thrust upon you. Recognizing that these feelings are a natural part of the transition process is the first step toward managing them effectively.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Why Transitions Challenge Mental Health
            </h2>

            <p>
              Research in psychology has long established that change—even desired change—ranks among the most significant stressors humans experience. The Holmes-Rahe Stress Inventory, a widely used tool in clinical settings, identifies major life events like divorce, job changes, and relocation as top contributors to stress-related illness. But why do transitions carry such psychological weight?
            </p>

            <p>
              At a neurological level, our brains are pattern-seeking organs that crave predictability. Established routines create neural pathways that allow us to navigate daily life with minimal cognitive effort. When a major transition disrupts these patterns, your brain must work harder to make sense of new information, establish fresh routines, and recalibrate expectations. This increased cognitive load can manifest as mental fatigue, difficulty concentrating, and heightened emotional reactivity.
            </p>

            <p>
              Additionally, transitions often challenge our sense of identity. Much of how we understand ourselves is tied to our roles, relationships, and environments. When these anchors shift, we may experience a temporary identity crisis—questioning who we are without the familiar markers that previously defined us. This existential uncertainty, while potentially growth-promoting in the long term, can feel destabilizing in the moment.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                "The only way to make sense out of change is to plunge into it, move with it, and join the dance." — Alan Watts
              </p>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Common Mental Health Responses to Transition
            </h2>

            <p>
              Understanding that your emotional responses are normal can reduce the secondary stress of worrying about your reactions. During major transitions, you might experience:
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Anxiety and worry</strong> about the unknown, concerns about making the right decisions, or fear of failure in your new circumstances</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Grief and sadness</strong> for what you're leaving behind, even when the change is ultimately positive</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Irritability and mood swings</strong> as your emotional regulation systems cope with increased stress</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Physical symptoms</strong> including changes in sleep patterns, appetite, energy levels, and even immune function</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Social withdrawal</strong> or changes in your desire for connection as you process the transition internally</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Difficulty making decisions</strong> as cognitive resources are already stretched thin</span>
              </li>
            </ul>

            <p>
              These responses exist on a spectrum. Mild to moderate symptoms that gradually improve as you adjust are typical. However, persistent, severe symptoms that interfere with daily functioning warrant professional support.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Evidence-Based Strategies for Navigating Change
            </h2>

            <p>
              While transitions are inherently challenging, research has identified several approaches that can help you maintain mental wellbeing during periods of change:
            </p>

            <p>
              <strong>Acknowledge and validate your emotions.</strong> Suppressing or minimizing your feelings often amplifies distress. Instead, practice naming your emotions without judgment. Research in affect labeling shows that simply identifying feelings can reduce their intensity and help your brain process them more effectively.
            </p>

            <p>
              <strong>Maintain anchors of stability.</strong> When much is changing, preserve what you can. This might mean keeping your morning routine consistent, staying connected with longtime friends, or maintaining regular exercise habits. These anchors provide psychological continuity and reduce the overall stress load.
            </p>

            <p>
              <strong>Practice self-compassion.</strong> Transitions often come with mistakes, awkward moments, and learning curves. Treating yourself with the same kindness you'd offer a friend facing similar challenges has been shown to reduce anxiety and increase resilience during stressful periods.
            </p>

            <p>
              <strong>Set realistic expectations.</strong> Adjustment takes time—typically three to six months for major transitions. Understanding that discomfort is temporary and part of the process can reduce the additional stress of expecting yourself to adapt instantly.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Building Your Support System
            </h2>

            <p>
              Social support is one of the most robust predictors of mental health outcomes during transitions. Yet reaching out can feel challenging when you're already stretched thin or feeling vulnerable. Consider these approaches:
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Share specific needs rather than waiting for others to guess how they can help</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Seek out others who have navigated similar transitions—their perspective can normalize your experience</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Consider support groups, either in-person or online, focused on your specific type of transition</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Don't underestimate the value of professional support, even if you don't have a diagnosed condition</span>
              </li>
            </ul>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Practical Daily Practices
            </h2>

            <p>
              Small, consistent practices can have outsized impacts on your mental health during transitions:
            </p>

            <p>
              <strong>Establish non-negotiable self-care basics.</strong> Prioritize sleep, nutrition, and movement. When cognitive resources are strained, your body's physiological state becomes even more influential in how you feel emotionally. Even 10 minutes of daily physical activity has been shown to reduce anxiety and improve mood.
            </p>

            <p>
              <strong>Create structure in your day.</strong> When external structures change, deliberately build new ones. This might include morning rituals, designated work hours, or weekly social commitments. Structure reduces decision fatigue and provides a sense of control.
            </p>

            <p>
              <strong>Practice mindfulness or grounding techniques.</strong> Transitions can keep your mind cycling between past regrets and future worries. Mindfulness practices help anchor you in the present moment, where you have the most agency. Research consistently shows that even brief daily mindfulness practice reduces stress and improves emotional regulation.
            </p>

            <p>
              <strong>Journal your experience.</strong> Writing about your transition—both the challenges and opportunities—helps organize your thoughts, process emotions, and track your progress. Studies show that expressive writing can improve both psychological and physical health outcomes.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              When to Seek Professional Help
            </h2>

            <p>
              While some distress during transitions is normal, certain signs indicate it's time to consult a healthcare provider:
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Symptoms that worsen over time rather than gradually improving</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Inability to perform basic daily functions like work, self-care, or maintaining relationships</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Persistent thoughts of self-harm or suicide</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Turning to substances to cope with transition stress</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Complete social isolation or inability to maintain important relationships</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Physical symptoms that interfere with quality of life</span>
              </li>
            </ul>

            <p>
              An integrative approach to mental health care during transitions can be particularly valuable, addressing not just psychological symptoms but also how stress impacts your physical body, sleep, nutrition, and overall wellness. Professional support isn't a sign of weakness—it's a strategic resource for navigating change more effectively.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Finding Growth in Transition
            </h2>

            <p>
              While the focus of this article has been managing the challenges of transitions, it's worth noting that these periods also offer unique opportunities for growth. When familiar patterns are disrupted, you have a chance to intentionally choose which to rebuild and which to leave behind. You might discover capabilities you didn't know you had, clarify what truly matters to you, or forge new connections that enrich your life.
            </p>

            <p>
              The goal isn't to rush through transitions or eliminate all discomfort, but to navigate them with awareness, self-compassion, and appropriate support. With time and intentional care, most people not only adapt to their new circumstances but find themselves fundamentally strengthened by the experience of navigating change.
            </p>

            <p className="text-lg font-semibold mt-12">
              If you're struggling with a major life transition and would like support in managing your mental health during this period, our team offers integrative approaches to wellness that address both the psychological and physical impacts of stress. We're here to help you navigate change with resilience and intention.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 my-12">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-1">Reviewed by JROSE WELLNESS</div>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                This article provides educational information about mental health and wellness. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your healthcare provider with any questions you may have regarding your mental health.
              </p>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Resource Library</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Browse All Articles</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Explore our complete collection of wellness and health education resources.</p>
              </div>
            </Link>

            <Link href="/services" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Our Services</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Integrative Wellness Care</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Learn about our comprehensive approach to mental health and wellbeing.</p>
              </div>
            </Link>

            <Link href="/contact" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Get Started</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Schedule a Consultation</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Take the first step toward better mental health during life transitions.</p>
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
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}