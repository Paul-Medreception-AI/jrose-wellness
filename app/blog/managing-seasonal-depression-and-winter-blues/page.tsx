import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Managing Seasonal Depression and Winter Blues | JROSE WELLNESS',
  description: 'Learn evidence-based strategies to manage seasonal affective disorder and winter blues. Discover practical tips for light therapy, lifestyle changes, and when to seek professional help.',
  alternates: { canonical: '/blog/managing-seasonal-depression-and-winter-blues' },
  openGraph: {
    title: 'Managing Seasonal Depression and Winter Blues | JROSE WELLNESS',
    description: 'Learn evidence-based strategies to manage seasonal affective disorder and winter blues. Discover practical tips for light therapy, lifestyle changes, and when to seek professional help.',
    url: 'https://jrosewellness.com/blog/managing-seasonal-depression-and-winter-blues',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Managing Seasonal Depression and Winter Blues | JROSE WELLNESS',
    description: 'Learn evidence-based strategies to manage seasonal affective disorder and winter blues. Discover practical tips for light therapy, lifestyle changes, and when to seek professional help.',
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
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">Mental Health</div>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-6">
            Managing Seasonal Depression and Winter Blues
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

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="mb-6 text-lg">
              As the days grow shorter and winter settles in, many people notice a shift in their mood and energy levels. For some, this seasonal change brings more than just a preference for cozy evenings indoors—it triggers a form of depression that arrives with the darker months and lifts when spring returns. If you find yourself feeling persistently sad, fatigued, or withdrawn during winter, you're not alone, and more importantly, there are evidence-based strategies that can help.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Understanding Seasonal Affective Disorder
            </h2>
            <p className="mb-6">
              Seasonal Affective Disorder (SAD) is a type of depression that follows a seasonal pattern, most commonly occurring during fall and winter months when daylight hours are shortest. While often called the "winter blues," SAD is a recognized clinical condition that affects approximately 5% of adults in the United States, with symptoms lasting about 40% of the year for those who experience it.
            </p>
            <p className="mb-6">
              The condition is believed to be triggered by reduced exposure to sunlight, which can disrupt your body's internal clock (circadian rhythm) and lead to drops in serotonin and melatonin levels—brain chemicals that regulate mood and sleep. Women are diagnosed with SAD at four times the rate of men, and the condition is more common in people living farther from the equator where winter days are significantly shorter.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Recognizing the Symptoms
            </h2>
            <p className="mb-6">
              Seasonal depression manifests differently than other forms of depression. While someone with major depression might experience insomnia and loss of appetite, people with SAD often experience the opposite pattern. Common symptoms include:
            </p>
            <ul className="mb-6 space-y-3">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Persistent low mood or feelings of hopelessness that emerge as days shorten</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Oversleeping or difficulty waking up in the morning, sometimes sleeping 2-4 hours more than usual</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Carbohydrate cravings and weight gain, particularly craving starchy or sweet foods</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Fatigue and low energy, even after adequate sleep</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Social withdrawal and loss of interest in activities you normally enjoy</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Difficulty concentrating and completing tasks</span>
              </li>
            </ul>
            <p className="mb-6">
              These symptoms typically begin in late fall or early winter and improve during spring and summer. If you've experienced this pattern for at least two consecutive years, it's worth discussing with a healthcare provider.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
              "Light therapy has been shown to be as effective as antidepressant medication for many people with seasonal depression, with improvements often visible within one to two weeks of consistent use."
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Power of Light Therapy
            </h2>
            <p className="mb-6">
              Light therapy, also called phototherapy, is considered a first-line treatment for SAD and is supported by decades of research. The therapy involves sitting near a special light box that emits bright light (typically 10,000 lux) for about 20-30 minutes each morning. This exposure helps reset your circadian rhythm and boost serotonin production.
            </p>
            <p className="mb-6">
              For best results, use your light box within the first hour of waking up, positioning it about 16-24 inches from your face at a slight angle. You don't need to stare directly at the light—you can read, eat breakfast, or work while the light reaches your eyes. Most people begin to notice improvements within one to two weeks, though full benefits may take up to a month.
            </p>
            <p className="mb-6">
              When choosing a light box, look for one specifically designed for SAD treatment that provides 10,000 lux of light, filters out UV rays, and has been tested for safety and effectiveness. While light therapy is generally safe, people with certain eye conditions or those taking photosensitizing medications should consult a healthcare provider before starting.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Lifestyle Strategies That Make a Difference
            </h2>
            <p className="mb-6">
              Beyond light therapy, several lifestyle modifications can significantly impact seasonal depression. These approaches work best when implemented consistently and ideally started before symptoms typically emerge:
            </p>
            <p className="mb-4 font-semibold text-[var(--color-ink)]">Maximize Natural Light Exposure</p>
            <p className="mb-6">
              Make it a priority to spend time outdoors during daylight hours, even on cloudy days. Morning light is particularly beneficial for regulating your circadian rhythm. At home and work, open blinds, trim vegetation that blocks windows, and position yourself near windows when possible. Even indirect natural light is more beneficial than artificial lighting for mood regulation.
            </p>
            <p className="mb-4 font-semibold text-[var(--color-ink)]">Maintain Regular Exercise</p>
            <p className="mb-6">
              Physical activity is a powerful antidepressant on its own, and exercising outdoors during daylight hours provides a double benefit. Research shows that regular exercise can be as effective as medication for mild to moderate depression. Aim for at least 30 minutes of moderate activity most days of the week. Winter activities like brisk walking, snowshoeing, or even outdoor yoga on milder days can be particularly therapeutic.
            </p>
            <p className="mb-4 font-semibold text-[var(--color-ink)]">Prioritize Sleep Hygiene</p>
            <p className="mb-6">
              While SAD often increases the desire to sleep, maintaining a consistent sleep schedule is crucial. Go to bed and wake up at the same time every day, even on weekends. This consistency helps regulate your circadian rhythm and can prevent the oversleeping that worsens SAD symptoms. Create a relaxing bedtime routine and keep your bedroom cool, dark, and quiet.
            </p>
            <p className="mb-4 font-semibold text-[var(--color-ink)]">Nourish Your Body Mindfully</p>
            <p className="mb-6">
              While carbohydrate cravings are common with SAD, choosing complex carbohydrates over refined sugars can help stabilize mood and energy. Include foods rich in omega-3 fatty acids, vitamin D, and B vitamins, which support brain health and mood regulation. Some people with SAD benefit from vitamin D supplementation, particularly in northern climates where winter sun exposure is minimal.
            </p>
            <p className="mb-4 font-semibold text-[var(--color-ink)]">Stay Socially Connected</p>
            <p className="mb-6">
              The tendency to isolate during winter months can worsen depression. Make deliberate plans to see friends and family, even when you don't feel like it. Social connection is a powerful buffer against depression, and often the anticipation is worse than the actual event. Consider joining a winter activity group or scheduling regular social commitments that give you something to look forward to.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              When to Seek Professional Help
            </h2>
            <p className="mb-6">
              While self-care strategies can be highly effective for mild seasonal mood changes, professional treatment may be necessary for moderate to severe SAD. Consider reaching out to a healthcare provider if your symptoms significantly interfere with daily functioning, if you experience thoughts of self-harm, or if self-help strategies haven't provided relief after several weeks.
            </p>
            <p className="mb-6">
              Professional treatment options include cognitive behavioral therapy specifically adapted for SAD (CBT-SAD), which helps you identify and change negative thought patterns and develop coping strategies. In some cases, antidepressant medication may be recommended, either alone or in combination with light therapy. Some providers recommend starting medication before symptoms typically begin as a preventive measure.
            </p>
            <p className="mb-6">
              An integrative approach that combines medical treatment with lifestyle modifications, nutritional support, and mind-body practices often provides the most comprehensive relief. Your healthcare provider can help you develop a personalized treatment plan that addresses your unique symptoms and circumstances.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Looking Forward to Brighter Days
            </h2>
            <p className="mb-6">
              Seasonal depression is a real medical condition, not a character flaw or something you simply need to "get over." With the right combination of light therapy, lifestyle modifications, and professional support when needed, most people with SAD can significantly reduce their symptoms and maintain a good quality of life throughout the winter months.
            </p>
            <p className="mb-6">
              If you're struggling with seasonal mood changes that impact your daily life, don't wait until symptoms become severe. Early intervention is often more effective, and starting treatment at the first signs of seasonal changes can prevent symptoms from fully developing. The winter months don't have to be a time of struggle—with the right tools and support, you can navigate the darker days with resilience and hope.
            </p>
          </div>
        </div>

        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 mx-6 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-[var(--color-ink)] mb-1">Reviewed by JROSE WELLNESS</div>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
              This article provides educational information about seasonal affective disorder and wellness strategies. It is not a substitute for professional medical advice, diagnosis, or treatment. If you're experiencing symptoms of depression, please contact a healthcare provider for personalized guidance.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Resource Hub</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Explore All Articles
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Browse our complete library of wellness and health education resources.
                </p>
              </div>
            </Link>

            <Link href="/services" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Our Services</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Integrative Wellness Services
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn about our comprehensive approach to integrative health and wellness care.
                </p>
              </div>
            </Link>

            <Link href="/contact" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Get Started</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Schedule a Consultation
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Connect with our team to discuss your wellness goals and treatment options.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-white/90">Our team is here to help.</p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-accent-dark)] transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}