import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Self-Care Isn\'t Selfish: Prioritizing Mental Health',
  description: 'Discover why self-care is essential for mental health and well-being. Learn practical strategies to prioritize your needs without guilt in Fairfield, CT.',
  alternates: { canonical: '/blog/self-care-isn-t-selfish-prioritizing-mental-health' },
  openGraph: {
    title: 'Self-Care Isn\'t Selfish: Prioritizing Mental Health',
    description: 'Discover why self-care is essential for mental health and well-being. Learn practical strategies to prioritize your needs without guilt in Fairfield, CT.',
    url: 'https://jrosewellness.com/blog/self-care-isn-t-selfish-prioritizing-mental-health',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Self-Care Isn\'t Selfish: Prioritizing Mental Health',
    description: 'Discover why self-care is essential for mental health and well-being. Learn practical strategies to prioritize your needs without guilt in Fairfield, CT.',
    images: ['/og-image.png']
  }
}

export default function BlogPost() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-sm mb-6 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4">Mental Health</div>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-6">
            Self-Care Isn't Selfish: Prioritizing Mental Health
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
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="mb-6">
              In a world that constantly demands more—more productivity, more availability, more sacrifice—the idea of taking time for yourself can feel uncomfortable, even wrong. Many people struggle with the notion that caring for their own needs is somehow selfish or indulgent. Yet the truth is quite the opposite: self-care is not only acceptable, it's essential for maintaining mental health, building resilience, and showing up fully in your relationships and responsibilities.
            </p>
            <p className="mb-6">
              Understanding self-care as a fundamental component of wellness rather than a luxury can transform how you approach your mental health. When you prioritize your own well-being, you're not taking away from others—you're ensuring you have the emotional, physical, and mental resources to sustain yourself and support those around you.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              What Self-Care Really Means
            </h2>
            <p className="mb-6">
              Self-care extends far beyond bubble baths and spa days, though those can certainly be part of it. At its core, self-care encompasses any intentional action you take to preserve or improve your physical, emotional, and mental health. It includes meeting your basic needs—adequate sleep, nutritious food, regular movement—as well as activities that restore your sense of balance and peace.
            </p>
            <p className="mb-6">
              Self-care can be as simple as setting boundaries around your time, saying no to commitments that drain you, seeking professional support when you're struggling, or taking a few minutes each day for quiet reflection. It's about recognizing your limits and honoring them, understanding that you are human and finite, and that replenishing your resources is not optional—it's necessary.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
              "You can't pour from an empty cup. Taking care of yourself isn't selfish—it's the foundation for taking care of everything else in your life."
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Cost of Neglecting Your Own Needs
            </h2>
            <p className="mb-6">
              When self-care is consistently pushed to the bottom of your priority list, the consequences accumulate. Chronic stress without adequate recovery leads to burnout—a state of emotional, physical, and mental exhaustion that can affect every aspect of your life. Research shows that neglecting self-care increases vulnerability to anxiety, depression, physical illness, and relationship difficulties.
            </p>
            <p className="mb-6">
              Perhaps ironically, when people sacrifice their own well-being in service to others, they often become less effective in those very roles. A parent running on empty has less patience. A caregiver who never rests becomes resentful. A professional who never disconnects experiences declining performance. Ignoring your own needs doesn't make you more generous or capable—it depletes the resources you need to show up as your best self.
            </p>
            <p className="mb-6">
              The guilt many people feel about self-care often stems from deeply ingrained beliefs about worthiness, productivity, and what it means to be a "good" person. Challenging these beliefs and recognizing that caring for yourself enables you to care for others more effectively is a crucial shift in perspective.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Evidence Supporting Self-Care
            </h2>
            <p className="mb-6">
              Scientific research consistently demonstrates the protective effects of self-care on mental health. Studies show that regular self-care practices reduce symptoms of anxiety and depression, improve stress management, enhance emotional regulation, and increase overall life satisfaction. Even brief daily practices can produce measurable benefits.
            </p>
            <p className="mb-6">
              For example, research on mindfulness meditation—a common self-care practice—shows that just eight weeks of regular practice can lead to structural changes in the brain associated with improved emotional regulation and decreased reactivity to stress. Similarly, studies on adequate sleep demonstrate its critical role in mood regulation, cognitive function, and emotional resilience.
            </p>
            <p className="mb-6">
              The concept of "self-compassion," treating yourself with the same kindness you'd offer a friend, has emerged as a powerful predictor of mental health and well-being. People who practice self-compassion experience less anxiety and depression, greater emotional resilience, and more satisfying relationships. Far from being self-indulgent, self-compassion creates a stable foundation for psychological health.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Practical Self-Care Strategies
            </h2>
            <p className="mb-6">
              Building sustainable self-care practices doesn't require dramatic life changes or significant time investments. Small, consistent actions integrated into your daily routine can create meaningful change. The key is identifying what genuinely restores you—not what you think should work or what looks good on social media, but what actually helps you feel more grounded, energized, and balanced.
            </p>
            
            <div className="my-8 space-y-4">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  <strong>Establish non-negotiable boundaries.</strong> Protect time for rest, meals, sleep, and activities that restore you. Communicate these boundaries clearly and practice saying no to requests that compromise them.
                </p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  <strong>Prioritize sleep.</strong> Aim for seven to nine hours nightly. Establish a consistent sleep schedule, create a calming bedtime routine, and make your sleep environment comfortable and conducive to rest.
                </p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  <strong>Move your body regularly.</strong> Exercise is one of the most effective tools for managing stress and improving mood. Find movement you enjoy—walking, dancing, yoga, swimming—and make it a regular part of your routine.
                </p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  <strong>Connect with others.</strong> Meaningful relationships are essential for mental health. Make time for people who support and energize you, and don't hesitate to reach out when you need support.
                </p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  <strong>Practice mindfulness.</strong> Even five minutes of meditation, deep breathing, or simply noticing your surroundings can reduce stress and increase emotional awareness. Start small and build gradually.
                </p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  <strong>Engage in activities you enjoy.</strong> Make time for hobbies, creative pursuits, time in nature, or whatever brings you joy and helps you feel like yourself. These aren't frivolous—they're essential.
                </p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">
                  <strong>Seek professional support when needed.</strong> Working with a therapist, counselor, or wellness provider isn't a sign of weakness—it's a proactive step toward better mental health and a valuable form of self-care.
                </p>
              </div>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Overcoming Barriers to Self-Care
            </h2>
            <p className="mb-6">
              Even when you understand the importance of self-care intellectually, actually implementing it can feel challenging. Common barriers include time constraints, financial limitations, caregiving responsibilities, and deeply ingrained guilt. Recognizing these obstacles and developing strategies to work with them is essential.
            </p>
            <p className="mb-6">
              If time feels scarce, remember that self-care doesn't require hours—five minutes of intentional breathing, a brief walk, or simply pausing before responding to demands all count. If finances are tight, focus on free or low-cost options: walking in nature, free meditation apps, connecting with friends, or practicing gratitude. If you're responsible for others, recognize that modeling self-care teaches important lessons and that you'll be more present and patient when your own needs are met.
            </p>
            <p className="mb-6">
              Addressing the guilt around self-care often requires examining the beliefs driving it. Ask yourself: Would I judge a friend harshly for resting when tired? Would I expect someone I care about to give endlessly without replenishing? Extending to yourself the same compassion you offer others is not selfish—it's wise.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Making Self-Care a Sustainable Practice
            </h2>
            <p className="mb-6">
              Self-care is not a one-time intervention but an ongoing practice, a way of relating to yourself with kindness and respect. It requires regular attention, adjustment as circumstances change, and patience with yourself when you fall short. Building sustainable self-care means starting small, celebrating progress, and recognizing that caring for yourself is not something you do once you've earned it—it's the foundation that makes everything else possible.
            </p>
            <p className="mb-6">
              As you integrate self-care into your life, you may notice shifts beyond improved mood or lower stress. You might find yourself more present in relationships, more creative in your work, more resilient when facing challenges, and more aligned with your values. These aren't separate benefits—they're the natural outcome of treating yourself as someone worthy of care and attention.
            </p>
            <p className="mb-6">
              If you're struggling with mental health challenges, persistent stress, or finding it difficult to prioritize your well-being, professional support can make a significant difference. Working with a qualified provider offers personalized strategies, accountability, and a safe space to explore the barriers preventing you from caring for yourself effectively. Reaching out for help is itself an act of self-care—and one of the most important you can take.
            </p>
          </div>
        </div>

        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 mx-6 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-[var(--color-ink)] mb-2">Reviewed by JROSE WELLNESS</div>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
              Our team is dedicated to providing evidence-based integrative wellness care that supports your mental, emotional, and physical health in Fairfield, CT.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog" className="group bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                More Mental Health Resources
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Explore additional articles on stress management, wellness strategies, and mental health support.
              </p>
              <div className="text-[var(--color-primary)] text-sm font-semibold flex items-center gap-2">
                Browse Articles
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link href="/services" className="group bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Integrative Wellness Services
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Discover our comprehensive approach to mental and physical wellness in Fairfield, CT.
              </p>
              <div className="text-[var(--color-primary)] text-sm font-semibold flex items-center gap-2">
                View Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link href="/contact" className="group bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Schedule a Consultation
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Connect with our team to discuss how we can support your wellness journey.
              </p>
              <div className="text-[var(--color-primary)] text-sm font-semibold flex items-center gap-2">
                Get in Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}