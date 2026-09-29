// Page imagery. Licensed Pexels stock (free for commercial use, no attribution required),
// each opened and checked by hand for topic and tone. Never a photo of a named person except
// Jessica's own portraits under /images/jessica. Keyed by route.

export type SiteImage = { src: string; alt: string }

export const PAGE_IMAGES: Record<string, SiteImage> = {
  "/": { src: "/images/pages/home.jpg", alt: "Smiling woman with curly hair and wireless earbuds using a laptop beside a window and a potted plant" },
  "/services": { src: "/images/pages/services.jpg", alt: "Cream sofa with pillows and an open laptop beside a small wooden side table holding a vase of yellow daisies and a candle" },
  "/services/psychiatric-evaluation": { src: "/images/pages/services-psychiatric-evaluation.jpg", alt: "Smiling woman wearing headphones talking to someone on a laptop at a wooden kitchen table" },
  "/services/medication-management": { src: "/images/pages/services-medication-management.jpg", alt: "Older woman with silver hair and glasses using a laptop while seated in a gray armchair at home" },
  "/services/supportive-therapy": { src: "/images/pages/services-supportive-therapy.jpg", alt: "Woman writing in a journal while sitting in a wicker chair by a sunlit window, with a vase of dried flowers nearby" },
  "/services/telepsychiatry": { src: "/images/pages/services-telepsychiatry.jpg", alt: "Man in a striped shirt and white cap sitting in an armchair at home, waving to a woman on a laptop video call" },
  "/services/adhd-evaluation": { src: "/images/pages/services-adhd-evaluation.jpg", alt: "Young woman in glasses and headphones highlighting notes in a notebook beside a laptop" },
  "/conditions": { src: "/images/pages/conditions.jpg", alt: "Morning mist rising over a still lake with tall pine trees reflected in the water" },
  "/conditions/anxiety": { src: "/images/pages/conditions-anxiety.jpg", alt: "Sunrise over calm water and a curved sandy beach" },
  "/conditions/depression": { src: "/images/pages/conditions-depression.jpg", alt: "Sunbeams shining through tall trees onto a leaf-covered forest path" },
  "/conditions/bipolar-disorder": { src: "/images/pages/conditions-bipolar-disorder.jpg", alt: "Calm open sea under a clear sky fading from blue to soft orange at the horizon" },
  "/conditions/ocd": { src: "/images/pages/conditions-ocd.jpg", alt: "Curving gravel path edged with stone blocks through a green garden with trees and flowering shrubs" },
  "/conditions/ptsd-trauma": { src: "/images/pages/conditions-ptsd-trauma.jpg", alt: "Woman in a long dress walking away along a sunlit forest path, holding a straw hat" },
  "/conditions/schizophrenia-psychosis": { src: "/images/pages/conditions-schizophrenia-psychosis.jpg", alt: "Soft morning light and mist over a grassy meadow with young birch trees" },
  "/conditions/substance-use": { src: "/images/pages/conditions-substance-use.jpg", alt: "Sun rising over a forested hill beneath golden clouds" },
  "/conditions/burnout-life-transitions": { src: "/images/pages/conditions-burnout-life-transitions.jpg", alt: "Woman in a white linen shirt sitting in a pale pink armchair with a laptop on her lap, looking out a bright window with a slight, relaxed smile" },
  "/conditions/autism-spectrum": { src: "/images/pages/conditions-autism-spectrum.jpg", alt: "Smiling teenage girl wearing over-ear headphones, sitting cross-legged on a light blue sofa and looking at her phone in a bright room with plants and books" },
  "/who-we-help": { src: "/images/pages/who-we-help.jpg", alt: "Older woman with a gray ponytail and a younger woman laughing together on a sofa while looking through a magazine" },
  "/who-we-help/teens": { src: "/images/pages/who-we-help-teens.jpg", alt: "Teenage girl in a mint green hoodie taking notes at a sunlit desk while on a video call on a desktop computer" },
  "/who-we-help/adults": { src: "/images/pages/who-we-help-adults.jpg", alt: "Man relaxing barefoot on a sage green sofa with a laptop on his lap, on a video call with a smiling woman" },
  "/who-we-help/older-adults": { src: "/images/pages/who-we-help-older-adults.jpg", alt: "Smiling older woman with gray hair and glasses waving at her laptop during a video call at home" },
  "/about": { src: "/images/pages/about.jpg", alt: "Still water and low rocks along a quiet shoreline at dawn under a soft peach sky" },
  "/new-patients": { src: "/images/pages/new-patients.jpg", alt: "Open blank spiral notebook with a pen beside a cup of black coffee and a laptop on a wooden table" },
  "/insurance": { src: "/images/pages/insurance.jpg", alt: "Close-up of a woman's hands holding a pen at a laptop beside handwritten notes and a glass of water" },
  "/faq": { src: "/images/pages/faq.jpg", alt: "White teapot and cup on a wooden windowsill looking out over a misty lake in autumn" },
  "/blog": { src: "/images/pages/blog.jpg", alt: "Overhead view of a blank spiral notebook, pen, and a latte in a blue cup on a sunlit wooden table beside a green plant" },
  "/blog/psychiatric-and-family-nurse-practice-in-connecticut": { src: "/images/pages/blog-psychiatric-and-family-nurse-practice-in-connecticut.jpg", alt: "Tidal creek winding through golden salt-marsh grass under a partly cloudy sky" },
  "/blog/cash-only-medication-management-for-psychiatric-conditions": { src: "/images/pages/blog-cash-only-medication-management-for-psychiatric-conditions.jpg", alt: "Laptop on a white desk in warm morning light beside a glass vase of yellow flowers, a candle holder and an open notebook" },
  "/blog/holistic-medication-management-services-in-connecticut": { src: "/images/pages/blog-holistic-medication-management-services-in-connecticut.jpg", alt: "Person walking alone down a tree-lined path as morning sun streams through autumn leaves and mist" },
  "/contact": { src: "/images/pages/contact.jpg", alt: "Calm blue-gray morning over still water and a tree-lined point" },
  "/book-appointment": { src: "/images/pages/book-appointment.jpg", alt: "Smiling young woman with earbuds waving at her laptop during a video call in a bright, neutral living room" },
}

export const JESSICA_PHOTOS = {
  portrait: { src: '/images/jessica/jessica-logel-portrait.jpg', alt: 'Jessica Logel, MSN, PMHNP-BC, FNP, smiling in a white coat', width: 500, height: 625 },
  camelBlazer: { src: '/images/jessica/jessica-logel-camel-blazer.png', alt: 'Jessica Logel, psychiatric nurse practitioner, in a camel blazer', width: 900, height: 900 },
  navyBlazer: { src: '/images/jessica/jessica-logel-navy-blazer.png', alt: 'Jessica Logel, psychiatric nurse practitioner, in a navy blazer', width: 900, height: 900 },
  rustTurtleneck: { src: '/images/jessica/jessica-logel-rust-turtleneck.png', alt: 'Jessica Logel, psychiatric nurse practitioner, in a rust turtleneck', width: 900, height: 900 },
} as const

export const BRAND_IMAGES = {
  logo: { src: '/images/brand/logo.png', alt: 'J Rose Wellness logo', width: 512, height: 512 },
  rose: { src: '/images/brand/watercolor-rose.png', alt: '', width: 600, height: 600 },
} as const

/** Image for a route, falling back to its hub, then to the home hero. */
export function imageFor(route: string): SiteImage {
  if (PAGE_IMAGES[route]) return PAGE_IMAGES[route]
  const hub = '/' + route.split('/').filter(Boolean)[0]
  return PAGE_IMAGES[hub] ?? PAGE_IMAGES['/']
}
