import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Social Anxiety: More Than Just Shyness | JROSE WELLNESS',
  description: 'Social anxiety disorder affects millions. Learn the difference between shyness and clinical anxiety, recognize symptoms, and discover evidence-based treatment approaches.',
  alternates: { canonical: '/blog/social-anxiety-more-than-just-shyness' },
  openGraph: {
    title: 'Social Anxiety: More Than Just Shyness | JROSE WELLNESS',
    description: 'Social anxiety disorder affects millions. Learn the difference between shyness and clinical anxiety, recognize symptoms, and discover evidence-based treatment approaches.',
    url: 'https://jrosewellness.com/blog/social-anxiety-more-than-just-shyness',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Anxiety: More Than Just Shyness | JROSE WELLNESS',
    description: 'Social anxiety disorder affects millions. Learn the difference between shyness and clinical anxiety, recognize symptoms, and discover evidence-based treatment approaches.',
    images: ['/og-image.png']
  }
}

export default function SocialAnxietyArticle() {
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

          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Mental Health
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight text-center mb-6">
            Social Anxiety: More Than Just Shyness
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Reviewed by JROSE WELLNESS Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Walking into a crowded room shouldn't feel like stepping onto a stage under harsh lights. For millions of people living with social anxiety disorder, everyday interactions—ordering coffee, making small talk, attending meetings—can trigger overwhelming fear and self-consciousness that goes far beyond ordinary nervousness or shyness.
            </p>
            <p className="mb-6">
              While everyone feels shy or anxious in social situations from time to time, social anxiety disorder is a persistent mental health condition that can significantly impact quality of life, relationships, and professional opportunities. Understanding the difference between typical social discomfort and a clinical anxiety disorder is the first step toward finding effective help.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is Social Anxiety Disorder?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Social anxiety disorder (SAD), also known as social phobia, is characterized by an intense, persistent fear of social situations where a person might be judged, embarrassed, or scrutinized by others. This fear is disproportionate to the actual threat posed by the situation and can lead to significant avoidance behaviors.
            </p>
            <p className="mb-6">
              According to the Anxiety and Depression Association of America, approximately 15 million American adults have social anxiety disorder, making it one of the most common mental health conditions. Symptoms typically begin around age 13, though the disorder can develop at any age.
            </p>
            <p className="mb-6">
              Unlike shyness, which is a personality trait that may cause temporary discomfort but doesn't significantly interfere with daily life, social anxiety disorder creates substantial distress and functional impairment. People with SAD often recognize their fears are excessive, yet feel powerless to control them.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Recognizing the Signs and Symptoms
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Social anxiety disorder manifests through emotional, physical, and behavioral symptoms that occur before, during, and after social interactions:
            </p>
            <div className="space-y-4 my-6">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Emotional symptoms:</strong> Intense fear of judgment, worry about embarrassment, fear of offending others, dread of upcoming social events days or weeks in advance</span>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Physical symptoms:</strong> Rapid heartbeat, sweating, trembling, nausea, difficulty breathing, dizziness, muscle tension, blushing</span>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Behavioral symptoms:</strong> Avoiding social situations, needing a companion in social settings, excessive preparation or rehearsing, substance use to cope with anxiety</span>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Cognitive symptoms:</strong> Negative self-talk, catastrophic thinking, excessive rumination after social interactions, harsh self-criticism</span>
              </div>
            </div>
            <p className="mb-6">
              These symptoms can occur in a wide range of situations, including speaking in public, eating in front of others, meeting new people, making phone calls, or being the center of attention. For some, the anxiety is specific to certain situations (performance-only type), while others experience anxiety across virtually all social interactions (generalized type).
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "Social anxiety disorder is not a character flaw or weakness—it's a treatable medical condition with well-established, evidence-based interventions."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Impact on Daily Life
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The effects of untreated social anxiety disorder extend far beyond momentary discomfort. Research shows that people with SAD face significant challenges across multiple life domains:
            </p>
            <p className="mb-6">
              <strong>Academic and professional impacts:</strong> Students with social anxiety may avoid class participation, group projects, or presentations, which can affect grades and learning. In the workplace, SAD can limit career advancement opportunities, as networking, meetings, and public speaking are often essential for professional growth. Studies indicate that people with social anxiety disorder have lower educational attainment and income levels compared to those without the condition.
            </p>
            <p className="mb-6">
              <strong>Relationship challenges:</strong> Social anxiety can make it difficult to form and maintain friendships and romantic relationships. The fear of rejection or negative evaluation may lead to social isolation, which can contribute to loneliness and depression. Family relationships may also be strained, particularly if loved ones misinterpret avoidance behaviors as disinterest or rudeness.
            </p>
            <p className="mb-6">
              <strong>Mental and physical health consequences:</strong> Social anxiety disorder commonly co-occurs with other mental health conditions, including depression, other anxiety disorders, and substance use disorders. The chronic stress associated with persistent anxiety can also contribute to physical health problems, including cardiovascular issues, weakened immune function, and gastrointestinal difficulties.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Evidence-Based Treatment Approaches
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The good news is that social anxiety disorder is highly treatable. Multiple evidence-based approaches have demonstrated significant effectiveness:
            </p>
            <p className="mb-6">
              <strong>Cognitive Behavioral Therapy (CBT):</strong> CBT is considered the gold-standard psychotherapy for social anxiety. This structured approach helps individuals identify and challenge negative thought patterns, develop more realistic interpretations of social situations, and gradually face feared scenarios through exposure exercises. Research consistently shows that CBT produces substantial improvements in social anxiety symptoms, with benefits that persist long after treatment ends.
            </p>
            <p className="mb-6">
              <strong>Acceptance and Commitment Therapy (ACT):</strong> ACT focuses on accepting anxious thoughts and feelings rather than fighting them, while committing to actions aligned with personal values. This approach can be particularly helpful for individuals who have become trapped in cycles of avoidance.
            </p>
            <p className="mb-6">
              <strong>Medication:</strong> Several types of medications can effectively reduce social anxiety symptoms. Selective serotonin reuptake inhibitors (SSRIs) are typically the first-line pharmacological treatment. Beta-blockers may be prescribed for performance-only social anxiety to manage physical symptoms. Medication is often most effective when combined with psychotherapy.
            </p>
            <p className="mb-6">
              <strong>Integrative approaches:</strong> Complementary strategies including mindfulness meditation, breathing exercises, progressive muscle relaxation, and lifestyle modifications (regular exercise, adequate sleep, nutrition) can support conventional treatments and provide additional symptom relief.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Practical Steps You Can Take
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While professional treatment is important for social anxiety disorder, there are strategies you can begin implementing today:
            </p>
            <div className="space-y-4 my-6">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Challenge catastrophic thinking:</strong> When you notice anxious thoughts, ask yourself for evidence. What's the worst that could realistically happen? What would you tell a friend in this situation?</span>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Start small with exposure:</strong> Gradually face feared situations, beginning with less anxiety-provoking scenarios and building up to more challenging ones. Celebrate small victories.</span>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Practice self-compassion:</strong> Treat yourself with the same kindness you'd offer a good friend. Remember that everyone experiences social awkwardness at times.</span>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Develop a grounding routine:</strong> Use breathing exercises, mindfulness techniques, or physical grounding strategies (like the 5-4-3-2-1 sensory technique) to manage anxiety in the moment.</span>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Limit safety behaviors:</strong> While it's tempting to rely on coping mechanisms like alcohol, over-preparing, or always bringing a companion, these can actually reinforce anxiety over time.</span>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Focus outward:</strong> In social situations, shift your attention from self-monitoring to genuine curiosity about others. Ask questions, listen actively, and remember that most people are focused on themselves, not scrutinizing you.</span>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When to Seek Professional Help
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If social anxiety is interfering with your ability to work, attend school, maintain relationships, or engage in activities you value, it's time to seek professional support. You don't need to wait until anxiety becomes severe or completely debilitating—early intervention often leads to better outcomes.
            </p>
            <p className="mb-6">
              A healthcare provider experienced in integrative wellness can help you develop a comprehensive treatment plan tailored to your specific needs, symptoms, and goals. This might include psychotherapy, medication, lifestyle modifications, or a combination of approaches.
            </p>
            <p className="mb-6">
              Remember that seeking help is a sign of strength, not weakness. Social anxiety disorder is a legitimate medical condition—one that responds well to treatment. With the right support and strategies, you can reduce anxiety symptoms, increase confidence in social situations, and reclaim opportunities that anxiety has been holding back.
            </p>
            <p className="mb-6">
              You deserve to move through the world without constant fear of judgment. If you're ready to take the first step toward feeling more comfortable in your own skin and confident in social situations, reach out to a qualified provider who can guide you on that journey.
            </p>
          </div>
        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6">
          <div className="flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-1">Reviewed by JROSE WELLNESS</div>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Our team is committed to providing evidence-based information and compassionate support for mental health and integrative wellness. This content is for educational purposes and does not replace professional medical advice.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Mental Health Articles</h4>
              <p className="text-[var(--color-muted)] text-sm">Explore more evidence-based resources on anxiety, stress management, and emotional wellness.</p>
            </Link>

            {/* Card 2 */}
            <Link href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Wellness Education</h4>
              <p className="text-[var(--color-muted)] text-sm">Learn about integrative approaches to mental and physical health optimization.</p>
            </Link>

            {/* Card 3 */}
            <Link href="/contact" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Schedule a Consultation</h4>
              <p className="text-[var(--color-muted)] text-sm">Connect with our team to discuss personalized treatment options for anxiety and wellness.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-lg text-white/90 mb-8">Our team is here to help you navigate your wellness journey with compassion and expertise.</p>
          <Link href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-colors">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}