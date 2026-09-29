import type { ElementType, ReactNode } from 'react'

/**
 * Horizontal page gutter + max width, matching the header and footer.
 *
 *   size="narrow"  max-w-3xl  (reading column: articles, legal text, FAQ)
 *   size="medium"  max-w-5xl
 *   size="default" max-w-7xl  (same as "wide"; the header's width)
 */
type Size = 'narrow' | 'medium' | 'default' | 'wide'

const WIDTHS: Record<Size, string> = {
  narrow: 'max-w-3xl',
  medium: 'max-w-5xl',
  default: 'max-w-7xl',
  wide: 'max-w-7xl',
}

export default function Container({
  children,
  className = '',
  size = 'default',
  as: Tag = 'div',
  id,
}: {
  children: ReactNode
  className?: string
  size?: Size
  as?: ElementType
  id?: string
}) {
  return (
    <Tag id={id} className={`mx-auto w-full ${WIDTHS[size]} px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  )
}
