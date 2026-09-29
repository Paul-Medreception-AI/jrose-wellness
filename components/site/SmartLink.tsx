import Link from 'next/link'
import type { ReactNode } from 'react'

export const isExternal = (href: string) => /^https?:\/\//i.test(href)
const isProtocol = (href: string) => /^(tel|mailto|sms):/i.test(href)

/**
 * One link element for any href: internal routes use next/link, http(s) links open in a new
 * tab with rel="noopener noreferrer", tel:/mailto: links are plain anchors.
 */
export default function SmartLink({
  href,
  className,
  children,
  ariaLabel,
  onClick,
}: {
  href: string
  className?: string
  children: ReactNode
  ariaLabel?: string
  onClick?: () => void
}) {
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </a>
    )
  }
  if (isProtocol(href)) {
    return (
      <a href={href} className={className} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={className} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </Link>
  )
}

/**
 * Shared pill-button classes so every CTA on the site looks the same.
 * Compose base + one size + one color: `${BUTTON.base} ${BUTTON.md} ${BUTTON.accent}`.
 * (base carries no padding or font size, so sizes never fight each other.)
 */
export const BUTTON = {
  base: 'inline-flex items-center justify-center gap-2 rounded-full text-center font-semibold leading-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
  sm: 'px-4 py-3 text-sm',
  md: 'px-6 py-3 text-[15px]',
  lg: 'px-7 py-3.5 text-[15px]',
  accent: 'bg-accent text-white shadow-sm hover:bg-accent-dark focus-visible:outline-accent',
  outlineDark: 'border border-primary/30 bg-white/60 text-primary hover:border-primary hover:bg-white focus-visible:outline-primary',
  outlineLight: 'border border-white/70 text-white hover:bg-white hover:text-primary focus-visible:outline-white',
} as const
