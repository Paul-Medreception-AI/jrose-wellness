import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Prepare for Your First Telehealth Appointment | JROSE WELLNESS',
  description: 'Expert guide to preparing for your first virtual healthcare visit. Learn what to expect, technical requirements, and tips for a successful telehealth appointment.',
  alternates: { canonical: '/blog/how-to-prepare-for-your-first-telehealth-appointment' },
  openGraph: {
    title: 'How to Prepare for Your First Telehealth Appointment | JROSE WELLNESS',
    description: 'Expert guide to preparing for your first virtual healthcare visit. Learn what to expect, technical requirements, and tips for a successful telehealth appointment.',
    url: 'https://jrosewellness.com/blog/how-to-prepare-for-your-first-telehealth-appointment',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Prepare for Your First Telehealth Appointment | JROSE WELLNESS',
    description: 'Expert guide to preparing for your first virtual healthcare visit. Learn what to expect, technical requirements, and tips for a successful telehealth appointment.',
    images: ['/og-image.png']
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
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
            Patient Education
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            How to Prepare for Your First Telehealth Appointment
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published 2024</span>
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
            <p className="mb-6 text-lg">
              The shift to telehealth has transformed how we access healthcare, making it more convenient and accessible than ever before. But if you've never had a virtual appointment, you might feel uncertain about what to expect or how to prepare. Whether you're seeking care for a new health concern or continuing treatment with a provider, being prepared can help you get the most out of your telehealth experience.
            </p>

            <p className="mb-6">
              Virtual healthcare visits offer the same quality of care as in-person appointments for many conditions, with the added benefit of connecting from the comfort of your own home. With a little preparation, your first telehealth appointment can be smooth, productive, and even more relaxed than a traditional office visit.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Understanding What Telehealth Is
            </h2>

            <p className="mb-6">
              Telehealth refers to healthcare services delivered through video conferencing technology, allowing you to meet with your provider face-to-face through your computer, tablet, or smartphone. It's not just a phone call—it's a visual consultation where your provider can observe your appearance, assess certain symptoms, discuss your concerns, and provide medical guidance just as they would in person.
            </p>

            <p className="mb-6">
              Telehealth is effective for a wide range of healthcare needs, including routine check-ups, follow-up visits, medication management, mental health support, nutrition counseling, and wellness consultations. While some conditions do require in-person examination, many common concerns can be thoroughly addressed through virtual care.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Testing Your Technology Before Your Appointment
            </h2>

            <p className="mb-6">
              Technical preparation is the foundation of a successful telehealth visit. Start by ensuring you have a reliable internet connection—a wired connection is most stable, but strong Wi-Fi typically works well too. Test your camera and microphone ahead of time to confirm they're working properly.
            </p>

            <p className="mb-6">
              Most telehealth platforms work through a web browser or require a simple app download. You'll typically receive a link or instructions from your provider's office before your appointment. It's wise to click that link 10-15 minutes early on appointment day to allow time for any technical troubleshooting.
            </p>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 my-8">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Technical Checklist</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Test your camera, microphone, and speakers in advance</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ensure your device is fully charged or plugged in</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Download any required apps or software beforehand</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Have a backup device available (phone if using computer, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Keep the office phone number handy in case of connection issues</span>
                </li>
              </ul>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Creating the Right Environment
            </h2>

            <p className="mb-6">
              Your physical environment matters just as much as your technical setup. Choose a quiet, private space where you can speak openly without interruption. Good lighting is important—position yourself facing a window or lamp so your provider can see you clearly. Avoid backlighting, which can make your face appear dark and difficult to see.
            </p>

            <p className="mb-6">
              Consider your background as well. A neutral, uncluttered space is ideal, but what matters most is that you feel comfortable and can focus on the conversation. If you're at home with family members, let them know you have an appointment and ask not to be disturbed during that time.
            </p>

            <p className="mb-6">
              Position your camera at eye level if possible—propping up a laptop or angling your device can make the conversation feel more natural and engaged. Sit close enough to the camera that your provider can see your face and upper body clearly.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Gathering Your Medical Information
            </h2>

            <p className="mb-6">
              Prepare for your telehealth visit just as you would for an in-person appointment. Have your insurance card, photo ID, and payment method ready if needed. Write down your current medications, including dosages, supplements, and any over-the-counter medications you take regularly.
            </p>

            <p className="mb-6">
              Create a list of questions or concerns you want to address. It's easy to forget important points during the appointment, so having them written down ensures nothing gets overlooked. If you're seeing a new provider, gather any relevant medical records, recent test results, or documentation from other healthcare providers.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                "Being prepared with your questions and medical history helps your provider give you the most comprehensive care possible, even through a screen."
              </p>
            </div>

            <p className="mb-6">
              If your appointment involves discussing symptoms, consider tracking them for a few days beforehand. Note when they occur, how severe they are, and what makes them better or worse. This information provides valuable context for your provider.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              What to Expect During Your Virtual Visit
            </h2>

            <p className="mb-6">
              Your telehealth appointment will follow a similar structure to an in-person visit. You'll typically start in a virtual waiting room, and your provider will admit you when they're ready. After initial greetings, your provider will ask about your health concerns, medical history, and current symptoms.
            </p>

            <p className="mb-6">
              Unlike in-person visits, your provider can't perform a physical examination or take vital signs remotely. However, they can assess many aspects of your health through visual observation and conversation. They may ask you to show them affected areas, demonstrate range of motion, or describe symptoms in detail.
            </p>

            <p className="mb-6">
              Don't hesitate to ask questions or request clarification if you don't understand something. The virtual format doesn't change the collaborative nature of healthcare—your input and concerns are just as valuable through a screen. Your provider will develop a treatment plan, which might include prescriptions, lifestyle recommendations, referrals for testing, or follow-up appointments.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Making the Most of Your Telehealth Experience
            </h2>

            <p className="mb-6">
              To maximize the benefit of your virtual appointment, arrive early and be ready to start on time. Minimize distractions by silencing your phone and closing other programs on your device. Speak clearly and maintain eye contact with the camera to create a more personal connection.
            </p>

            <p className="mb-6">
              Take notes during the appointment or ask if you can record it for your reference. After the visit, you should receive a summary of the appointment and any next steps. If prescriptions were ordered, they'll typically be sent directly to your pharmacy.
            </p>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 my-8">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">After Your Appointment</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Review your visit summary and treatment plan</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Check that prescriptions were sent to your pharmacy</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Schedule any recommended follow-up appointments</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Complete any ordered lab work or imaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reach out if you have additional questions or concerns</span>
                </li>
              </ul>
            </div>

            <p className="mb-6">
              Telehealth has proven to be an effective, convenient way to receive quality healthcare. Research shows that patient satisfaction with virtual visits is high, with many people appreciating the reduced travel time, shorter wait times, and ability to receive care from home. For ongoing wellness care, chronic condition management, and many acute concerns, telehealth offers an excellent alternative to traditional office visits.
            </p>

            <p className="mb-6 text-lg font-medium">
              If you're ready to experience the convenience of telehealth, JROSE WELLNESS offers virtual appointments for comprehensive integrative wellness care. Our team is here to support your health journey, whether you're addressing a specific concern or focusing on preventive wellness. Reach out today to schedule your first telehealth appointment and discover how accessible quality care can be.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                Reviewed by JROSE WELLNESS
              </div>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our practice is dedicated to providing evidence-based integrative wellness care in Fairfield, CT. We combine conventional medicine with holistic approaches to support your optimal health and well-being.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/services/integrative-medicine" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-8 flex items-center justify-center h-48">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Integrative Medicine Services
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Discover our comprehensive approach to wellness that combines the best of conventional and holistic care.
                </p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/contact" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-8 flex items-center justify-center h-48">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Schedule Your Visit
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Ready to get started? Book your telehealth or in-person appointment today and take the first step toward better health.
                </p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-8 flex items-center justify-center h-48">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  More Health Resources
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Explore our library of articles covering wellness topics, treatment approaches, and patient education.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Schedule Your Appointment
          </Link>
        </div>
      </section>
    </main>
  )
}