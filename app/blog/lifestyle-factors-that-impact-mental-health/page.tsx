import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lifestyle Factors That Impact Mental Health | JROSE WELLNESS',
  description: 'Discover how sleep, nutrition, exercise, social connections, and daily habits influence mental health. Evidence-based insights and practical tips for emotional wellbeing.',
  alternates: { canonical: '/blog/lifestyle-factors-that-impact-mental-health' },
  openGraph: {
    title: 'Lifestyle Factors That Impact Mental Health | JROSE WELLNESS',
    description: 'Discover how sleep, nutrition, exercise, social connections, and daily habits influence mental health. Evidence-based insights and practical tips for emotional wellbeing.',
    url: 'https://jrosewellness.com/blog/lifestyle-factors-that-impact-mental-health',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lifestyle Factors That Impact Mental Health | JROSE WELLNESS',
    description: 'Discover how sleep, nutrition, exercise, social connections, and daily habits influence mental health. Evidence-based insights and practical tips for emotional wellbeing.',
    images: ['/og-image.png']
  }
}

export default function LifestyleFactorsMentalHealthArticle() {
  return (
    <main>
      {/* Hero Section */}
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-6">
            Lifestyle Factors That Impact Mental Health
          </h1>
          <div className="flex gap-6 justify-center items-center text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Reviewed by JROSE WELLNESS</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="mb-6">
              When we think about mental health, we often focus on therapy, medication, or significant life events. Yet some of the most powerful influences on our emotional wellbeing happen quietly in our daily routines—the hours we sleep, the foods we eat, how we move our bodies, and the connections we nurture. These lifestyle factors don't just support mental health; they actively shape it, creating the foundation upon which resilience, mood stability, and emotional balance rest.
            </p>
            <p className="mb-6">
              Understanding how everyday choices affect your mental state empowers you to make meaningful changes. While lifestyle modifications aren't a substitute for professional treatment when needed, they represent powerful tools that work alongside—and sometimes prevent the need for—more intensive interventions.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Sleep-Mental Health Connection
            </h2>
            <p className="mb-6">
              Sleep and mental health share a bidirectional relationship: poor sleep contributes to emotional difficulties, and mental health challenges often disrupt sleep. Research consistently shows that inadequate sleep increases vulnerability to anxiety, depression, and stress while impairing emotional regulation and decision-making.
            </p>
            <p className="mb-6">
              During sleep, your brain processes emotional experiences, consolidates memories, and regulates neurotransmitters that influence mood. Chronic sleep deprivation disrupts these essential functions, leaving you more reactive to stress and less equipped to manage daily challenges.
            </p>
            <p className="mb-6">
              Most adults need 7-9 hours of quality sleep nightly. Establishing consistent sleep-wake times, creating a calming bedtime routine, limiting screen exposure before bed, and maintaining a cool, dark sleeping environment all support better sleep quality and, consequently, improved mental wellbeing.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Nutrition and Emotional Wellbeing
            </h2>
            <p className="mb-6">
              The gut-brain axis—the communication pathway between your digestive system and brain—means that what you eat directly influences how you feel. Emerging research in nutritional psychiatry demonstrates that diet quality significantly impacts mental health outcomes.
            </p>
            <p className="mb-6">
              Diets rich in whole foods, omega-3 fatty acids, fiber, and diverse nutrients support neurotransmitter production and reduce inflammation linked to depression and anxiety. Conversely, diets high in processed foods, added sugars, and unhealthy fats correlate with increased mental health symptoms.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                "Small, consistent changes in daily habits often create more lasting improvements in mental wellbeing than dramatic but unsustainable overhauls."
              </p>
            </div>

            <p className="mb-6">
              Key nutrients for mental health include B vitamins, vitamin D, magnesium, zinc, and omega-3 fatty acids. While supplements may help address deficiencies, obtaining nutrients through varied, colorful whole foods provides the most comprehensive benefits. Regular meals that stabilize blood sugar also prevent mood swings and energy crashes that can worsen anxiety and irritability.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Physical Activity as Mental Health Medicine
            </h2>
            <p className="mb-6">
              Exercise is one of the most well-researched lifestyle interventions for mental health. Physical activity stimulates the production of endorphins and other neurochemicals that naturally elevate mood, reduce stress, and improve cognitive function.
            </p>
            <p className="mb-6">
              Studies show that regular exercise can be as effective as medication for some people with mild to moderate depression. It reduces symptoms of anxiety, improves self-esteem, enhances sleep quality, and provides a healthy coping mechanism for stress.
            </p>
            <p className="mb-6">
              The good news: you don't need intense workouts to reap mental health benefits. Even moderate activities like brisk walking, gardening, or dancing for 20-30 minutes most days of the week can make a significant difference. The key is finding movement you enjoy enough to sustain consistently.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Social Connection and Emotional Resilience
            </h2>
            <p className="mb-6">
              Humans are inherently social beings, and meaningful connections provide crucial protection against mental health challenges. Loneliness and social isolation rank among the strongest predictors of depression, anxiety, and even physical health problems.
            </p>
            <p className="mb-6">
              Quality matters more than quantity when it comes to relationships. A few close, supportive connections where you feel understood and valued provide more mental health benefit than numerous superficial interactions. These relationships offer emotional support during difficult times, provide perspective, and create a sense of belonging that buffers against life's stresses.
            </p>
            <p className="mb-6">
              Building and maintaining connections requires intentional effort, especially in our increasingly digital world. Prioritizing face-to-face interactions, participating in community activities, volunteering, or joining groups aligned with your interests all create opportunities for meaningful connection.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Stress Management and Daily Practices
            </h2>
            <p className="mb-6">
              Chronic stress takes a profound toll on mental health, contributing to anxiety, depression, and burnout. While we can't eliminate stress entirely, how we respond to it makes all the difference.
            </p>
            <p className="mb-6">
              Effective stress management practices include mindfulness meditation, deep breathing exercises, progressive muscle relaxation, and spending time in nature. These techniques activate the parasympathetic nervous system, counteracting the body's stress response and promoting calm.
            </p>
            <p className="mb-6">
              Equally important is building recovery time into your routine. Regular breaks throughout the day, engaging in hobbies, setting boundaries around work, and protecting time for rest all prevent stress from accumulating to overwhelming levels.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Practical Steps for Supporting Your Mental Health
            </h2>
            <p className="mb-6">
              Improving lifestyle factors doesn't require perfection or complete life overhauls. Small, sustainable changes accumulate over time to create meaningful improvements:
            </p>

            <div className="space-y-3 my-8">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">Establish a consistent sleep schedule, even on weekends</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">Add one serving of vegetables or fruits to each meal</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">Take a 10-minute walk daily, gradually increasing duration</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">Schedule regular check-ins with friends or family members</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">Practice five minutes of deep breathing or meditation daily</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">Limit alcohol consumption and avoid using it to manage emotions</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">Create screen-free time, especially before bed and during meals</p>
              </div>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              When to Seek Professional Support
            </h2>
            <p className="mb-6">
              While lifestyle modifications provide powerful support for mental health, they work best as part of a comprehensive approach. If you're experiencing persistent symptoms of depression, anxiety, or other mental health concerns that interfere with daily life, professional help is essential.
            </p>
            <p className="mb-6">
              Integrative approaches that combine lifestyle optimization with evidence-based treatments often yield the most lasting results. Mental health professionals can help you develop personalized strategies that address your unique circumstances while supporting sustainable lifestyle changes.
            </p>
            <p className="mb-6">
              Remember that prioritizing your mental health isn't selfish—it's fundamental to living a fulfilling life and being present for those who matter most. The lifestyle choices you make each day either support or undermine your emotional wellbeing. By understanding these connections and making intentional changes, you take an active role in nurturing your mental health and building resilience for whatever life brings.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto px-6">
          <div className="flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-2">Reviewed by JROSE WELLNESS</div>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Our practice is dedicated to providing compassionate, evidence-based integrative wellness care to patients in Fairfield, CT. We believe in empowering individuals with the knowledge and tools needed to support their whole-person health.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog" className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                View All Resources
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Explore our complete library of patient education articles on wellness and integrative health topics.
              </p>
              <span className="text-[var(--color-accent)] font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                Browse Articles
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link href="/services" className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Our Services
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Discover our comprehensive approach to integrative wellness care and personalized treatment options.
              </p>
              <span className="text-[var(--color-accent)] font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link href="/contact" className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Schedule a Consultation
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Ready to take the next step? Connect with our team to discuss your health goals.
              </p>
              <span className="text-[var(--color-accent)] font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                Get Started
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-white/90">Our team is here to help.</p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}