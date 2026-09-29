import type { ReactNode } from 'react'

/**
 * Eyebrow + title + optional intro, used at the top of every section so spacing and type
 * stay consistent. tone="light" is for dark (wine) backgrounds.
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  as: Tag = 'h2',
  tone = 'dark',
  className = '',
  id,
}: {
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  align?: 'left' | 'center'
  as?: 'h1' | 'h2' | 'h3'
  tone?: 'dark' | 'light'
  className?: string
  id?: string
}) {
  const centered = align === 'center'
  const light = tone === 'light'
  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] ${
            light ? 'text-peach' : 'text-accent'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        id={id}
        className={`font-cormorant text-[2rem] font-semibold leading-[1.1] sm:text-4xl lg:text-[2.75rem] ${
          light ? 'text-white' : 'text-primary'
        }`}
      >
        {title}
      </Tag>
      {intro && (
        <div
          className={`mt-4 text-lg leading-relaxed ${light ? 'text-white/85' : 'text-muted'} ${
            centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'
          }`}
        >
          {intro}
        </div>
      )}
    </div>
  )
}
