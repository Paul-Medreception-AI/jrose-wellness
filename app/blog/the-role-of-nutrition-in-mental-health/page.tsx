import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Role of Nutrition in Mental Health | JROSE WELLNESS',
  description: 'Discover how nutrition impacts mental health, from mood regulation to anxiety management. Learn evidence-based dietary strategies to support emotional well-being.',
  alternates: { canonical: '/blog/the-role-of-nutrition-in-mental-health' },
  openGraph: {
    title: 'The Role of Nutrition in Mental Health | JROSE WELLNESS',
    description: 'Discover how nutrition impacts mental health, from mood regulation to anxiety management. Learn evidence-based dietary strategies to support emotional well-being.',
    url: 'https://jrosewellness.com/blog/the-role-of-nutrition-in-mental-health',
    siteName: 'JROSE WELLNESS',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Role of Nutrition in Mental Health | JROSE WELLNESS',
    description: 'Discover how nutrition impacts mental health, from mood regulation to anxiety management. Learn evidence-based dietary strategies to support emotional well-being.',
    images: ['/og-image.png'],
  },
}

export default function Article() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span>Article</span>
          </nav>
          
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">Mental Health</p>
          
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-6">
            The Role of Nutrition in Mental Health
          </h1>
          
          <div className="flex justify-center gap-6 text-sm text-white/80">
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
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            What if the key to better mental health was sitting on your dinner plate? While therapy and medication play vital roles in managing conditions like depression and anxiety, emerging research reveals a powerful connection between what we eat and how we feel. The food we consume doesn't just fuel our bodies—it profoundly influences our brain chemistry, mood regulation, and emotional resilience.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Understanding the nutrition-mental health connection offers a transformative opportunity to support your emotional well-being from the inside out. Whether you're managing a diagnosed mental health condition or simply seeking to optimize your mood and cognitive function, nutritional strategies can serve as a cornerstone of comprehensive wellness care.
          </p>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Gut-Brain Connection
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Your gut and brain are in constant communication through what scientists call the gut-brain axis. This bidirectional highway involves neural, hormonal, and immunological signals that influence everything from mood to stress response. Remarkably, about 90% of serotonin—a neurotransmitter critical for mood regulation—is produced in the gastrointestinal tract, not the brain.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The trillions of bacteria residing in your digestive system, collectively known as the gut microbiome, play a crucial role in this relationship. A healthy, diverse microbiome supports the production of neurotransmitters, reduces inflammation, and helps regulate the stress response. Conversely, an imbalanced gut environment has been linked to increased rates of anxiety, depression, and other mental health challenges.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            This connection explains why gastrointestinal issues often coincide with mental health symptoms, and why improving gut health through nutrition can have profound effects on emotional well-being.
          </p>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Key Nutrients for Mental Wellness
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Certain nutrients have been extensively studied for their impact on brain health and mental well-being. Understanding which foods provide these essential compounds can help you make informed dietary choices that support your emotional health.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Omega-3 Fatty Acids:</strong> Found in fatty fish, walnuts, and flaxseeds, these essential fats support brain structure and reduce inflammation associated with depression and anxiety.
              </p>
            </div>

            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>B Vitamins:</strong> Particularly B6, B9 (folate), and B12, these vitamins are crucial for neurotransmitter synthesis and cognitive function. Deficiencies have been linked to depression and cognitive decline.
              </p>
            </div>

            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Magnesium:</strong> This mineral plays a role in hundreds of biochemical reactions, including those that regulate mood and stress response. Sources include leafy greens, nuts, seeds, and whole grains.
              </p>
            </div>

            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Vitamin D:</strong> Often called the "sunshine vitamin," vitamin D deficiency has been associated with seasonal affective disorder and depression, particularly in winter months.
              </p>
            </div>

            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Zinc:</strong> This mineral supports neurotransmitter function and has been studied as an adjunct therapy for depression. Sources include oysters, beef, pumpkin seeds, and lentils.
              </p>
            </div>
          </div>

          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              "Food is not just calories—it's information that speaks to our genes, regulating countless biological processes including those that govern mood, energy, and mental clarity."
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Dietary Patterns That Support Mental Health
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Beyond individual nutrients, overall dietary patterns have been studied for their impact on mental health outcomes. Research consistently shows that whole-food, plant-forward eating patterns are associated with lower rates of depression and anxiety.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The Mediterranean diet, characterized by abundant vegetables, fruits, whole grains, legumes, nuts, olive oil, and moderate amounts of fish, has demonstrated particular promise. Multiple studies have found that adherence to this dietary pattern is associated with reduced depression risk and improved mood outcomes.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Conversely, the Western dietary pattern—high in processed foods, refined sugars, and unhealthy fats—has been linked to increased inflammation and higher rates of mental health conditions. Ultra-processed foods, in particular, may disrupt the gut microbiome and contribute to mood instability through blood sugar fluctuations and inflammatory processes.
          </p>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Impact of Blood Sugar on Mood
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Blood sugar regulation plays a surprisingly significant role in emotional stability. When blood glucose levels spike rapidly after consuming refined carbohydrates or sugary foods, the subsequent crash can trigger irritability, anxiety, and low mood. This roller coaster effect can exacerbate existing mental health symptoms or create new ones.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Stable blood sugar, achieved through balanced meals containing protein, healthy fats, fiber, and complex carbohydrates, supports consistent energy levels and more stable mood throughout the day. This is why people often report feeling more emotionally balanced when they eat regular, well-composed meals rather than skipping meals or relying on quick, processed snacks.
          </p>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Practical Strategies for Eating to Support Mental Health
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Translating nutritional science into daily practice doesn't require perfection or drastic changes. Small, sustainable shifts can yield meaningful improvements in how you feel.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Prioritize whole foods:</strong> Build meals around vegetables, fruits, whole grains, legumes, nuts, seeds, and quality protein sources rather than processed alternatives.
              </p>
            </div>

            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Include omega-3 rich foods:</strong> Aim for fatty fish like salmon or sardines 2-3 times per week, or incorporate plant sources like chia seeds, flaxseeds, and walnuts daily.
              </p>
            </div>

            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Feed your microbiome:</strong> Consume fermented foods like yogurt, kefir, sauerkraut, and kimchi for probiotics, and high-fiber foods for prebiotics that nourish beneficial gut bacteria.
              </p>
            </div>

            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Balance your plate:</strong> Include protein, healthy fats, and fiber at each meal to support stable blood sugar and sustained energy.
              </p>
            </div>

            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Stay hydrated:</strong> Even mild dehydration can affect mood and cognitive function. Aim for adequate water intake throughout the day.
              </p>
            </div>

            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Limit alcohol and caffeine:</strong> Both can disrupt sleep quality and exacerbate anxiety, though moderate amounts may be fine for some individuals.
              </p>
            </div>

            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">
                <strong>Consider timing:</strong> Eating at consistent times helps regulate circadian rhythms, which influence mood and sleep patterns.
              </p>
            </div>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When to Seek Professional Guidance
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While nutrition is a powerful tool for supporting mental health, it's not a substitute for professional mental health care when needed. If you're experiencing persistent symptoms of depression, anxiety, or other mental health concerns, it's important to work with qualified healthcare providers who can offer comprehensive evaluation and treatment.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            An integrative approach that combines appropriate medical or psychological treatment with nutritional support often yields the best outcomes. Some individuals may benefit from working with both a mental health professional and a registered dietitian who specializes in mental health nutrition.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            At JROSE WELLNESS in Fairfield, CT, we understand that mental and physical health are deeply interconnected. Our integrative wellness care approach considers the whole person, including how nutrition and lifestyle factors influence emotional well-being. If you're interested in exploring how nutritional strategies might support your mental health journey, we're here to help you develop a personalized plan that honors your unique needs and goals.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base">
            Your mental health matters, and the food you eat each day can be a meaningful part of supporting it. By nourishing your body with intention and care, you're also nourishing your mind—one meal at a time.
          </p>
        </div>

        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-[var(--color-ink)] mb-2">Reviewed by JROSE WELLNESS</p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Our team is dedicated to providing evidence-based wellness information to help you make informed decisions about your health. This content is for educational purposes and should not replace professional medical advice.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/understanding-stress-and-its-impact-on-health" className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                Understanding Stress and Its Impact on Health
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Learn how chronic stress affects your body and mind, and discover practical strategies for stress management.
              </p>
            </Link>

            <Link href="/blog/the-importance-of-sleep-for-overall-health" className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                The Importance of Sleep for Overall Health
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Explore the critical role of quality sleep in physical health, mental well-being, and daily functioning.
              </p>
            </Link>

            <Link href="/blog/building-resilience-through-lifestyle-changes" className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                Building Resilience Through Lifestyle Changes
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Discover evidence-based lifestyle modifications that strengthen your capacity to handle life's challenges.
              </p>
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
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-8 py-4 rounded-full hover:bg-[var(--color-accent-dark)] transition-all duration-300 hover:gap-3 font-medium"
          >
            Schedule a Consultation
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}