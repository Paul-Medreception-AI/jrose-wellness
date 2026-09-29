import type { Metadata } from 'next'
import { AGES, BOOKING, CONTACT, CRISIS, PRACTICE_FAQS, PRICING, PROVIDER } from '@/lib/site'
import CrisisText from '@/components/site/CrisisText'
import { GuideTemplate, TextLink, type GuideContent } from '../_components/GuideTemplate'
import { buildGuideMetadata, getGuide } from '../_lib/guides'

const GUIDE = getGuide('telehealth-vs-in-person-psychiatric-care')

export const metadata: Metadata = buildGuideMetadata(GUIDE)

const [virtualOnly] = PRACTICE_FAQS

// JRose Wellness is telehealth only: no office, no in-person visits. In-person care is described
// in general terms as something other clinics and programs provide. No statistics, no platform name.
const content: GuideContent = {
  meta: GUIDE,
  hero: {
    subtitle:
      'Video visits and office visits can both support good psychiatric care. Here is how they differ, and how to tell which one fits your life and your needs.',
    secondaryCta: { label: 'How telepsychiatry works', href: '/services/telepsychiatry' },
  },
  intro: {
    heading: 'Same kind of care, a different room',
    body: [
      'Psychiatric care is mostly conversation: talking through your history, your symptoms, your goals, and how treatment is going. That is a big part of why it can work well over a secure video visit.',
      'Telehealth is not the right fit for every person or every situation, though. In-person care still matters when you need a hands-on exam, when home is not a private place to talk, or when you need more support than a regular outpatient visit can give.',
      <>
        JRose Wellness is telehealth only. As the practice puts it, sessions are &ldquo;conducted securely through telehealth, allowing you
        to receive care from the comfort and privacy of your home.&rdquo;
      </>,
    ],
  },
  takeaways: [
    'Telehealth removes the commute and the waiting room.',
    'You need a private space, a device with a camera and microphone, and a steady internet connection.',
    'In-person care fits better when you need a physical exam or a higher level of care.',
    'Neither video visits nor routine office visits are for emergencies.',
    `JRose Wellness offers ${CONTACT.serviceArea.charAt(0).toLowerCase()}${CONTACT.serviceArea.slice(1)}.`,
  ],
  table: {
    heading: 'Video visits and office visits, side by side',
    intro: 'The conversation is much the same. The logistics are what change.',
    columns: ['Telehealth (video)', 'In person'],
    rows: [
      {
        label: 'Where you meet',
        a: 'From home or another private space, by secure video.',
        b: 'At a clinic or office.',
      },
      {
        label: 'Getting there',
        a: 'No commuting or long waiting rooms.',
        b: 'Travel, parking, and time in a waiting room.',
      },
      {
        label: 'Fitting it into your day',
        a: 'Easier to fit around work or school, since there is no travel time.',
        b: 'Plan around the trip there and back.',
      },
      {
        label: 'Privacy',
        a: 'No waiting room. You need a spot where you will not be overheard.',
        b: 'A private room at the office, though others may see you arrive.',
      },
      {
        label: 'What you need',
        a: 'A phone, tablet, or computer with a camera and microphone, and a steady internet connection.',
        b: 'A way to get to the office.',
      },
      {
        label: 'Physical exams',
        a: 'Limited to what can be seen and discussed on video.',
        b: 'A hands-on exam and in-office checks can happen at the visit.',
      },
      {
        label: 'Often a good fit for',
        a: 'Evaluations, medication management, follow-ups, and supportive therapy for many outpatient concerns.',
        b: 'People who need hands-on care, prefer face-to-face visits, or do not have a private space or reliable internet at home.',
      },
    ],
  },
  sides: [
    {
      eyebrow: 'Telehealth',
      title: 'What a video visit is like',
      body: [
        'A video visit works much like any other appointment. You talk through what brings you in, your symptoms, your history, and your goals, and you leave with a plan. Follow-ups check on how you are doing and adjust treatment when needed.',
        'Being at home can make it easier to open up, and skipping the drive can make it easier to keep appointments, especially when you are feeling low, anxious, or short on time.',
        'The tradeoffs are practical. You need a private place to talk and a device that works, and anything that needs a hands-on exam happens elsewhere.',
      ],
    },
    {
      eyebrow: 'In person',
      title: 'What an office visit is like',
      body: [
        'In-person care happens at a clinic or office. Some people simply prefer sitting in the same room, and that preference is worth respecting.',
        'Being in person also allows a hands-on exam and checks that cannot be done over video. For people who need more support than a regular outpatient visit can offer, in-person programs, such as intensive outpatient or hospital-based care, may be the right level of care.',
        'The tradeoffs are travel time, scheduling around the trip, and time in a waiting room.',
      ],
    },
  ],
  middle: {
    eyebrow: 'Before your visit',
    heading: 'Getting the most out of a video visit',
    intro: 'A few minutes of setup makes a video visit feel easy.',
    cards: [
      {
        title: 'Find a private spot',
        body: 'A room with a door you can close works well. Headphones add privacy if others are home.',
      },
      {
        title: 'Check your setup',
        body: 'Charge your device, test your camera and microphone, and sit where your connection is steady.',
      },
      {
        title: 'Have your details handy',
        body: 'Keep a list of your current and past medications, and anything you want to ask.',
      },
      {
        title: 'Jot down what is going on',
        body: 'Note what you have been feeling, when it started, and what has helped or not helped so far.',
      },
      {
        title: 'Settle in',
        body: 'Give yourself a few quiet minutes beforehand so you are not rushing in from something else.',
      },
      {
        title: 'Know where to turn in a crisis',
        body: <CrisisText text={CRISIS.short} />,
      },
    ],
  },
  decide: {
    heading: 'Which setting fits you?',
    intro: 'These are general pointers. You know your home, your schedule, and your comfort level best.',
    a: {
      title: 'Telehealth may suit you if you:',
      items: [
        'want care without the commute or the waiting room',
        'have a private place to talk and a device with a camera',
        'are juggling work, school, or family and need care that fits around it',
        'feel more comfortable opening up from home',
      ],
    },
    b: {
      title: 'In-person care may suit you if you:',
      items: [
        'need a physical exam or hands-on care as part of your treatment',
        'do not have a private space or reliable internet at home',
        'need more support than a regular outpatient visit can give',
        'simply prefer being in the same room',
      ],
    },
  },
  practice: {
    eyebrow: 'At JRose Wellness',
    heading: 'Telehealth is how every visit works here',
    body: [
      <>
        Every visit at JRose Wellness is by secure video with {PROVIDER.byline}, for patients in {CONTACT.state}. That includes your
        initial psychiatric evaluation, follow-up and medication management visits, and supportive therapy within visits.
      </>,
      <>
        Jessica sees {AGES.short.toLowerCase()}. You can use insurance by booking through Alma or through Headway, or pay directly:{' '}
        {PRICING.initialEvaluation.price} for the initial evaluation and {PRICING.followUp.price} for follow-up and medication management.{' '}
        {BOOKING.alma.note}
      </>,
      <>
        Curious what a first visit looks like? See <TextLink href="/new-patients">your first visit</TextLink> or{' '}
        <TextLink href="/services/telepsychiatry">how telepsychiatry works</TextLink>.
      </>,
    ],
    links: [
      { href: '/services/telepsychiatry', label: 'Telepsychiatry' },
      { href: '/new-patients', label: 'Your first visit' },
      { href: '/insurance', label: 'Insurance and pricing' },
    ],
  },
  faqs: [
    { q: virtualOnly.q, a: virtualOnly.a },
    {
      q: 'What do I need for a video visit?',
      a: 'A phone, tablet, or computer with a camera and microphone, a steady internet connection, and a private place where you can talk freely.',
    },
    {
      q: 'Is telehealth right for everyone?',
      a: 'No. It works for many outpatient concerns, but in-person or more intensive care fits better when you need a hands-on exam, do not have a private place to talk, or need more support than outpatient visits can give. If you are in crisis, call or text 988, or call 911.',
    },
    {
      q: 'Can I use insurance for telehealth visits?',
      a: `Yes, by booking through Alma or through Headway. Plans are listed on the Insurance page. You can also pay directly: ${PRICING.initialEvaluation.price} for the initial evaluation and ${PRICING.followUp.price} for follow-up and medication management.`,
    },
    {
      q: 'Who can be seen at JRose Wellness?',
      a: `${AGES.short}, for patients in ${CONTACT.state}.`,
    },
  ],
  related: [
    { href: '/services/telepsychiatry', label: 'Telepsychiatry', body: 'How secure video visits work, start to finish.' },
    { href: '/new-patients', label: 'Your first visit', body: 'What to expect and how to get started.' },
    { href: '/insurance', label: 'Insurance and pricing', body: 'Plans through Alma and Headway, plus self-pay rates.' },
    { href: '/who-we-help', label: 'Who we help', body: 'Care for teens 15 and older, adults, and older adults.' },
  ],
}

export default function Page() {
  return <GuideTemplate c={content} />
}
