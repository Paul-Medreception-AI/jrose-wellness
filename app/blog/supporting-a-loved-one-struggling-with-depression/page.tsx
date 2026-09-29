import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Supporting a Loved One Struggling with Depression | JROSE WELLNESS',
  description: 'Learn compassionate, evidence-based strategies to help a loved one navigate depression. Discover what to say, what to avoid, and when to seek professional support.',
  alternates: { canonical: '/blog/supporting-a-loved-one-struggling-with-depression' },
  openGraph: {
    title: 'Supporting a Loved One Struggling with Depression | JROSE WELLNESS',
    description: 'Learn compassionate, evidence-based strategies to help a loved one navigate depression. Discover what to say, what to avoid, and when to seek professional support.',
    url: 'https://jrosewellness.com/blog/supporting-a-loved-one-struggling-with-depression',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Supporting a Loved One Struggling with Depression | JROSE WELLNESS',
    description: 'Learn compassionate, evidence-based strategies to help a loved one navigate depression. Discover what to say, what to avoid, and when to seek professional support.',
    images: ['/og-image.png'],
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
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
            Supporting a Loved One Struggling with Depression
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. JROSE WELLNESS Team</span>
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl leading-relaxed mb-6">
              Watching someone you care about struggle with depression can feel overwhelming. You want to help, but you may worry about saying the wrong thing or making matters worse. The truth is, your presence and support can make a profound difference—even when you feel unsure of what to do.
            </p>
            
            <p className="mb-6">
              Depression affects more than 21 million adults in the United States each year, and its impact extends far beyond the individual. Family members, friends, and partners often feel helpless as they witness their loved one withdraw, lose interest in activities, or struggle with daily functioning. Understanding how to offer meaningful support is not just beneficial—it's essential for both the person experiencing depression and those who care about them.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Understanding Depression Beyond Sadness
            </h2>
            
            <p className="mb-6">
              Depression is not simply feeling sad or going through a rough patch. It's a serious medical condition that affects how a person thinks, feels, and functions. Major depressive disorder involves persistent symptoms lasting at least two weeks, including depressed mood, loss of interest in previously enjoyed activities, changes in sleep and appetite, fatigue, difficulty concentrating, and sometimes thoughts of death or suicide.
            </p>
            
            <p className="mb-6">
              Recognizing that depression is an illness—not a weakness or character flaw—is the first step in providing effective support. Your loved one isn't choosing to feel this way, and they can't simply "snap out of it" or "think positive." These well-meaning phrases often minimize their experience and can increase feelings of shame or isolation.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              What to Say (And What Not to Say)
            </h2>
            
            <p className="mb-6">
              Communication matters enormously when supporting someone with depression. Your words can either create space for healing or inadvertently reinforce stigma and shame.
            </p>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 my-8">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Helpful Phrases</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>"I'm here for you, and I'm not going anywhere."</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>"You're not alone in this. I care about you."</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>"What can I do to support you today?"</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>"It's okay to not be okay right now."</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>"Have you considered talking to a professional? I can help you find someone."</span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--color-light)] rounded-xl p-8 my-8">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Phrases to Avoid</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>"Just think positive!" or "Look on the bright side."</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>"Others have it worse than you."</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>"It's all in your head."</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>"You just need to get out more."</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>"Have you tried exercising/vitamins/meditation?" (unless they ask for suggestions)</span>
                </li>
              </ul>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Practical Ways to Offer Support
            </h2>
            
            <p className="mb-6">
              Supporting someone with depression often means showing up in small, consistent ways rather than grand gestures. Here are evidence-based approaches that can make a genuine difference:
            </p>

            <div className="space-y-6 mb-6">
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-2">Be Present and Listen</h3>
                <p>Sometimes the most powerful thing you can do is simply be there. Listen without judgment, without trying to fix everything, and without offering unsolicited advice. Create space for your loved one to share their feelings when they're ready, and respect their silence when they're not.</p>
              </div>

              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-2">Offer Specific Help</h3>
                <p>Instead of saying "Let me know if you need anything," offer concrete support: "I'm going to the grocery store—can I pick up a few things for you?" or "I'd like to drop off dinner on Thursday. Would that be okay?" Specific offers are easier to accept than vague availability.</p>
              </div>

              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-2">Maintain Connection</h3>
                <p>Depression often causes people to isolate themselves. Continue reaching out even if your loved one doesn't respond or declines invitations. Send a text that doesn't require a response: "Thinking of you today" or "No need to reply, just wanted you to know I care." Your consistent presence reminds them they're not forgotten.</p>
              </div>

              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-2">Help With Daily Tasks</h3>
                <p>Depression can make even simple tasks feel insurmountable. Offering to help with laundry, dishes, childcare, or errands can provide real relief. These practical supports acknowledge that depression affects functioning without making your loved one feel inadequate.</p>
              </div>
            </div>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                "Your presence and consistency matter more than saying the perfect thing. Simply showing up sends the powerful message that your loved one is worth supporting, even when they can't see their own worth."
              </p>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Encouraging Professional Help
            </h2>
            
            <p className="mb-6">
              While your support is valuable, depression often requires professional treatment. Research shows that therapy, medication, or a combination of both can significantly improve outcomes. However, suggesting professional help requires sensitivity.
            </p>
            
            <p className="mb-6">
              Rather than saying "You need to see a therapist," try: "I've noticed you've been struggling, and I care about you. Would you consider talking to someone who specializes in helping people through difficult times? I'd be happy to help you find someone or go with you to your first appointment if you'd like."
            </p>

            <p className="mb-6">
              If your loved one is resistant, don't force the issue, but continue to gently bring it up over time. Share information about treatment options, offer to help with practical barriers like finding providers or transportation, and emphasize that seeking help is a sign of strength, not weakness.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Recognizing Crisis Situations
            </h2>
            
            <p className="mb-6">
              It's essential to know when depression has become a crisis requiring immediate intervention. Take it seriously if your loved one:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Talks about suicide, death, or having no reason to live</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Researches methods of suicide or acquires means (medications, weapons)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Gives away possessions or says goodbye to people</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Shows sudden improvement after a period of severe depression (sometimes indicates they've made a decision)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Expresses feelings of being a burden to others</span>
              </li>
            </ul>

            <p className="mb-6">
              If you observe any of these warning signs, don't leave the person alone. Call the National Suicide Prevention Lifeline at 988, take them to the nearest emergency room, or call 911. Direct, immediate action can save a life.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Taking Care of Yourself
            </h2>
            
            <p className="mb-6">
              Supporting someone with depression can be emotionally draining. You may experience frustration, helplessness, guilt, or even resentment. These feelings are normal and don't mean you're a bad person or inadequate support.
            </p>
            
            <p className="mb-6">
              Set healthy boundaries to protect your own wellbeing. You can't pour from an empty cup. Make time for your own self-care, maintain your other relationships and activities, and consider seeking support for yourself—whether through therapy, support groups for caregivers, or conversations with trusted friends.
            </p>

            <p className="mb-6">
              Remember that you are not responsible for fixing your loved one's depression or for their choices. You can offer support, encouragement, and love, but ultimately, their healing journey is their own.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Moving Forward Together
            </h2>
            
            <p className="mb-6">
              Depression is treatable, and recovery is possible. With appropriate professional care and strong support systems, most people with depression experience significant improvement. Your role in that support system—showing up, listening, offering practical help, and encouraging professional treatment—can be a crucial part of their healing.
            </p>
            
            <p className="mb-6">
              The journey may be long and nonlinear. There will be setbacks alongside progress. But your consistent presence sends a powerful message: that your loved one matters, that they're not alone, and that hope exists even in the darkest moments.
            </p>

            <p className="mb-6">
              If you're concerned about someone you care about, or if you're feeling overwhelmed by the role of supporting them, professional guidance can help. At JROSE WELLNESS, we understand the impact of depression on individuals and their loved ones, and we're here to provide compassionate, evidence-based care for the whole family.
            </p>
          </div>
        </div>

        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-[var(--color-ink)] mb-1">Reviewed by JROSE WELLNESS</div>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
              Our team is dedicated to providing evidence-based integrative wellness care to support mental and physical health. We combine clinical expertise with compassionate, personalized treatment approaches.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-8 flex items-center justify-center h-48">
                <svg className="w-16 h-16 text-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Resource Hub</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  View All Articles
                </h4>
                <p className="text-[var(--color-muted)] text-sm">Explore our complete library of wellness resources and patient education.</p>
              </div>
            </Link>

            <Link href="/services" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-8 flex items-center justify-center h-48">
                <svg className="w-16 h-16 text-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Our Services</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Integrative Wellness Care
                </h4>
                <p className="text-[var(--color-muted)] text-sm">Discover our comprehensive approach to mental and physical health.</p>
              </div>
            </Link>

            <Link href="/contact" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-8 flex items-center justify-center h-48">
                <svg className="w-16 h-16 text-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Get Support</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Schedule a Consultation
                </h4>
                <p className="text-[var(--color-muted)] text-sm">Connect with our team to discuss how we can support your wellness journey.</p>
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
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-cream)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}