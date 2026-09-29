'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from 'react'
import { CONTACT, CRISIS, NAV, NAV_CTA, type NavChild, type NavItem } from '@/lib/site'
import { BRAND_IMAGES } from '@/lib/images'
import CrisisText from './CrisisText'
import { ArrowRight, ChevronDown, CloseIcon, MenuIcon, PhoneIcon, VideoIcon } from './icons'

/*
 * Pattern (desktop, lg and up): the top-level LABEL is a link to its hub page and a separate
 * CHEVRON button toggles the dropdown. Hover (mouse only) opens the panel with a 150ms close
 * delay so the pointer can travel into it. Clicking the chevron pins the panel open; clicking
 * it again closes it. Enter/Space/ArrowDown on the chevron open it (ArrowDown also focuses the
 * first link), Escape closes and returns focus to the chevron, Tab walks through the links and
 * the panel closes once focus leaves it. Outside click and route change close everything.
 *
 * Width budget: logo + wordmark (~210px) + five items (~480px) + CTA (~180px) fits the 976px
 * content box at 1024px; the phone number only joins at xl (1280px). Below lg the menu
 * collapses to the hamburger sheet, so the desktop nav never appears before there is room.
 */

type OpenState = { key: string; pinned: boolean } | null

const isAllLink = (c: NavChild) => /^All\s/.test(c.label)

/** Children shown as panel rows, plus the footer link to the hub ("All ..." or an overview). */
function splitChildren(item: NavItem): { rows: NavChild[]; footer: NavChild | null } {
  const kids = item.children ?? []
  const all = kids.find(isAllLink)
  const rows = kids.filter((k) => !isAllLink(k))
  if (all) return { rows, footer: all }
  if (rows.some((r) => r.href === item.href)) return { rows, footer: null }
  return { rows, footer: { label: `${item.label} overview`, href: item.href } }
}

function isUnder(path: string, href: string) {
  return path === href || path.startsWith(href + '/')
}

/** Is this top-level item the "current section" for the path? */
function ownsPath(item: NavItem, path: string) {
  if (isUnder(path, item.href)) return true
  return (item.children ?? []).some(
    (c) => c.href === path && !NAV.some((o) => o !== item && isUnder(c.href, o.href)),
  )
}

function useCanHover() {
  // Hover-to-open is for fine pointers only. On touch, a tap fires mouseenter and click
  // together, and hover + click handlers would open and shut the panel in one gesture.
  const [canHover, setCanHover] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setCanHover(mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])
  return canHover
}

function focusables(root: HTMLElement | null): HTMLElement[] {
  if (!root) return []
  return Array.from(
    root.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'),
  ).filter((el) => el.offsetParent !== null || el === document.activeElement)
}

/* ------------------------------------------------------------------ */
/* Desktop dropdown item                                               */
/* ------------------------------------------------------------------ */

function DesktopItem({
  item,
  index,
  open,
  pathname,
  canHover,
  onHoverOpen,
  onHoverClose,
  onToggle,
  onOpen,
  onClose,
}: {
  item: NavItem
  index: number
  open: boolean
  pathname: string
  canHover: boolean
  onHoverOpen: () => void
  onHoverClose: () => void
  onToggle: () => void
  onOpen: () => void
  onClose: () => void
}) {
  const panelId = useId()
  const wrapRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const focusFirst = useRef(false)
  const active = ownsPath(item, pathname)

  // ArrowDown on the chevron opens the panel, then focus moves to its first link once it is visible.
  useEffect(() => {
    if (open && focusFirst.current) {
      focusFirst.current = false
      requestAnimationFrame(() => panelRef.current?.querySelector<HTMLElement>('a[href]')?.focus())
    }
  }, [open])

  if (!item.children?.length) {
    return (
      <Link
        href={item.href}
        aria-current={pathname === item.href ? 'page' : undefined}
        className={`whitespace-nowrap rounded-full px-2.5 py-2 text-[14px] font-medium transition-colors hover:text-accent xl:px-3 xl:text-[15px] ${
          active ? 'text-accent' : 'text-ink'
        }`}
      >
        {item.label}
      </Link>
    )
  }

  const { rows, footer } = splitChildren(item)
  const twoCol = item.columns === 2

  function onButtonKeyDown(e: ReactKeyboardEvent<HTMLButtonElement>) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      focusFirst.current = true
      if (open) {
        focusFirst.current = false
        panelRef.current?.querySelector<HTMLElement>('a[href]')?.focus()
      } else onOpen()
    }
  }

  function onWrapKeyDown(e: ReactKeyboardEvent<HTMLDivElement>) {
    if (e.key === 'Escape' && open) {
      e.preventDefault()
      e.stopPropagation()
      onClose()
      buttonRef.current?.focus()
    }
  }

  function onPanelKeyDown(e: ReactKeyboardEvent<HTMLDivElement>) {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(e.key)) return
    const links = Array.from(panelRef.current?.querySelectorAll<HTMLElement>('a[href]') ?? [])
    if (!links.length) return
    e.preventDefault()
    const i = links.indexOf(document.activeElement as HTMLElement)
    let next = 0
    if (e.key === 'ArrowDown') next = i < 0 ? 0 : (i + 1) % links.length
    if (e.key === 'ArrowUp') {
      if (i <= 0) {
        buttonRef.current?.focus()
        return
      }
      next = i - 1
    }
    if (e.key === 'End') next = links.length - 1
    links[next]?.focus()
  }

  // Keep the last dropdown from running off the right edge on narrow desktops.
  const align = index >= NAV.length - 2 ? 'right-0' : 'left-1/2 -translate-x-1/2'

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={canHover ? onHoverOpen : undefined}
      onMouseLeave={canHover ? onHoverClose : undefined}
      onKeyDown={onWrapKeyDown}
      onBlur={(e) => {
        const to = e.relatedTarget as Node | null
        if (open && to && !e.currentTarget.contains(to)) onClose()
      }}
    >
      <div className={`flex items-center rounded-full transition-colors ${active || open ? 'text-accent' : 'text-ink'}`}>
        <Link
          href={item.href}
          aria-current={pathname === item.href ? 'page' : undefined}
          className="whitespace-nowrap rounded-full py-2 pl-2.5 pr-0.5 text-[14px] font-medium transition-colors hover:text-accent xl:pl-3 xl:text-[15px]"
        >
          {item.label}
        </Link>
        <button
          ref={buttonRef}
          type="button"
          aria-haspopup="true"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${item.label} menu`}
          onClick={onToggle}
          onKeyDown={onButtonKeyDown}
          className="grid h-8 w-6 place-items-center rounded-full transition-colors hover:text-accent xl:w-7"
        >
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Always rendered (so aria-controls resolves and the links are in the HTML); hidden with
          visibility when closed, which also removes the links from the tab order. The pt-3 is
          an invisible bridge so the pointer can move from the label into the panel. */}
      <div
        id={panelId}
        ref={panelRef}
        onKeyDown={onPanelKeyDown}
        className={`absolute top-full z-50 pt-3 transition duration-150 ease-out ${align} ${
          twoCol ? 'w-[34rem]' : 'w-[24rem]'
        } ${open ? 'visible translate-y-0 opacity-100' : 'pointer-events-none invisible -translate-y-1 opacity-0'}`}
      >
        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_24px_48px_-20px_rgba(46,15,19,0.35)]">
          <ul className={twoCol ? 'grid grid-cols-2 gap-x-2 p-3' : 'p-2.5'}>
            {rows.map((c) => {
              const current = pathname === c.href
              return (
                <li key={c.href + c.label}>
                  <Link
                    href={c.href}
                    aria-current={current ? 'page' : undefined}
                    onClick={onClose}
                    className={`group block rounded-xl px-3.5 transition-colors hover:bg-light focus-visible:bg-light ${
                      c.blurb ? 'py-2.5' : 'py-2'
                    } ${current ? 'bg-light' : ''}`}
                  >
                    <span className={`block text-[15px] font-semibold ${current ? 'text-accent' : 'text-ink'} group-hover:text-accent`}>
                      {c.label}
                    </span>
                    {c.blurb && <span className="mt-0.5 block text-[13px] leading-snug text-muted">{c.blurb}</span>}
                  </Link>
                </li>
              )
            })}
          </ul>
          {footer && (
            <Link
              href={footer.href}
              onClick={onClose}
              className="flex items-center justify-between border-t border-border bg-cream px-6 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-light"
            >
              {footer.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Mobile accordion section                                            */
/* ------------------------------------------------------------------ */

function MobileSection({
  item,
  open,
  onToggle,
  onNavigate,
  pathname,
}: {
  item: NavItem
  open: boolean
  onToggle: () => void
  onNavigate: () => void
  pathname: string
}) {
  const id = useId()
  const { rows, footer } = splitChildren(item)
  return (
    <div className="border-b border-border">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left text-[17px] font-semibold text-ink"
      >
        {item.label}
        <span className={`grid h-8 w-8 place-items-center rounded-full transition-colors ${open ? 'bg-accent text-white' : 'bg-light text-accent'}`}>
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </span>
      </button>
      <div id={id} hidden={!open} className="pb-4">
        <ul className={`ml-1 border-l-2 border-border ${item.columns === 2 ? 'grid grid-cols-1 gap-x-4 sm:grid-cols-2' : ''}`}>
          {rows.map((c) => (
            <li key={c.href + c.label}>
              <Link
                href={c.href}
                onClick={onNavigate}
                aria-current={pathname === c.href ? 'page' : undefined}
                className={`-ml-0.5 block rounded-r-lg border-l-2 py-2.5 pl-4 pr-2 transition-colors hover:border-accent hover:bg-light ${
                  pathname === c.href ? 'border-accent bg-light' : 'border-transparent'
                }`}
              >
                <span className={`block text-[15px] font-medium ${pathname === c.href ? 'text-accent' : 'text-ink'}`}>{c.label}</span>
                {c.blurb && <span className="mt-0.5 block text-[13px] leading-snug text-muted">{c.blurb}</span>}
              </Link>
            </li>
          ))}
        </ul>
        {footer && (
          <Link
            href={footer.href}
            onClick={onNavigate}
            className="ml-1 mt-2 inline-flex items-center gap-1.5 py-2 pl-[18px] text-sm font-semibold text-accent"
          >
            {footer.label}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */

function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <Image
        src={BRAND_IMAGES.logo.src}
        alt=""
        width={96}
        height={96}
        priority
        className="h-12 w-12 shrink-0 rounded-full ring-1 ring-primary/10"
      />
      <span className="flex flex-col leading-none">
        <span className="whitespace-nowrap font-cormorant text-[1.6rem] font-semibold tracking-tight text-primary">JRose Wellness</span>
        {!compact && (
          <span className="mt-1 whitespace-nowrap text-[10.5px] font-semibold uppercase tracking-[0.16em] text-muted xl:tracking-[0.2em]">
            Telehealth psychiatry
          </span>
        )}
      </span>
    </>
  )
}

export default function SiteHeader() {
  const pathname = usePathname() ?? '/'
  const canHover = useCanHover()
  const [openState, setOpenState] = useState<OpenState>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const sheetRef = useRef<HTMLDivElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  // Return focus to the hamburger when the user dismisses the sheet (Escape / close button),
  // but not when a link navigates away.
  const returnFocus = useRef(false)

  const clearTimer = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = null
  }
  const closeAll = useCallback(() => {
    clearTimer()
    setOpenState(null)
  }, [])

  // Route change closes every menu.
  useEffect(() => {
    closeAll()
    returnFocus.current = false
    setMobileOpen(false)
    setMobileSection(null)
  }, [pathname, closeAll])

  // Outside click and Escape close the desktop dropdown.
  useEffect(() => {
    if (!openState) return
    const onPointer = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) closeAll()
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAll()
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [openState, closeAll])

  useEffect(() => () => clearTimer(), [])

  // Mobile sheet: body scroll lock, initial focus, Escape, and focus return on close.
  useEffect(() => {
    if (!mobileOpen) {
      if (returnFocus.current) hamburgerRef.current?.focus()
      returnFocus.current = false
      return
    }
    const body = document.body
    const prevOverflow = body.style.overflow
    body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        returnFocus.current = true
        setMobileOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    // Leaving the mobile breakpoint (rotating a tablet) closes the sheet.
    const mq = window.matchMedia('(min-width: 1024px)')
    const onMq = () => mq.matches && setMobileOpen(false)
    mq.addEventListener?.('change', onMq)
    return () => {
      body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener?.('change', onMq)
    }
  }, [mobileOpen])

  function trapFocus(e: ReactKeyboardEvent<HTMLDivElement>) {
    if (e.key !== 'Tab') return
    const els = focusables(sheetRef.current)
    if (!els.length) return
    const first = els[0]
    const last = els[els.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }

  const closeMobile = () => setMobileOpen(false)
  const dismissMobile = () => {
    returnFocus.current = true
    setMobileOpen(false)
  }

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink focus:shadow-lg"
      >
        Skip to content
      </a>

      {/* Utility bar: service area, phone, crisis line. Scrolls away; the header below sticks. */}
      <div className="bg-primary text-[12.5px] text-white/90">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2 sm:px-6 lg:justify-between lg:px-8">
          <p className="hidden items-center gap-2 lg:flex">
            <VideoIcon className="h-4 w-4 text-peach" />
            {CONTACT.serviceArea}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-center">
            <a href={CONTACT.phoneHref} className="hidden items-center gap-1.5 font-semibold text-white hover:text-peach sm:inline-flex">
              <PhoneIcon className="h-3.5 w-3.5" />
              {CONTACT.phone}
            </a>
            <span aria-hidden="true" className="hidden text-white/40 sm:inline">
              ·
            </span>
            <p className="text-balance">
              <CrisisText text={CRISIS.short} linkClassName="font-semibold text-white underline underline-offset-2 hover:text-peach" />
            </p>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8 xl:gap-6">
          <Link href="/" aria-label={`JRose Wellness, home`} className="flex shrink-0 items-center gap-3">
            <Wordmark />
          </Link>

          <nav ref={navRef} aria-label="Main" className="hidden items-center lg:flex lg:gap-0 xl:gap-1.5">
            {NAV.map((item, i) => {
              const key = item.href
              return (
                <DesktopItem
                  key={key}
                  item={item}
                  index={i}
                  pathname={pathname}
                  canHover={canHover}
                  open={openState?.key === key}
                  onHoverOpen={() => {
                    clearTimer()
                    setOpenState((s) => (s?.key === key ? s : { key, pinned: false }))
                  }}
                  onHoverClose={() => {
                    clearTimer()
                    closeTimer.current = setTimeout(() => {
                      setOpenState((s) => (s?.key === key && !s.pinned ? null : s))
                    }, 150)
                  }}
                  onToggle={() => {
                    clearTimer()
                    setOpenState((s) => {
                      if (s?.key !== key) return { key, pinned: true }
                      // Opened by hover a moment ago: the click pins it rather than shutting it.
                      if (!s.pinned) return { key, pinned: true }
                      return null
                    })
                  }}
                  onOpen={() => {
                    clearTimer()
                    setOpenState({ key, pinned: true })
                  }}
                  onClose={closeAll}
                />
              )
            })}
          </nav>

          <div className="hidden shrink-0 items-center gap-4 lg:flex">
            <a
              href={CONTACT.phoneHref}
              className="hidden items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent xl:inline-flex"
            >
              <PhoneIcon className="h-4 w-4" />
              {CONTACT.phone}
            </a>
            <Link
              href={NAV_CTA.href}
              className="whitespace-nowrap rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-dark xl:px-5"
            >
              {NAV_CTA.label}
            </Link>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <Link
              href={NAV_CTA.href}
              className="mr-2 hidden whitespace-nowrap rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-dark sm:inline-flex"
            >
              {NAV_CTA.label}
            </Link>
            <a
              href={CONTACT.phoneHref}
              aria-label={`Call ${CONTACT.phone}`}
              className="grid h-11 w-11 place-items-center rounded-full text-primary transition-colors hover:bg-light"
            >
              <PhoneIcon className="h-5 w-5" />
            </a>
            <button
              ref={hamburgerRef}
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-full text-primary transition-colors hover:bg-light"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {/* The sheet lives outside <header>: backdrop-filter on the header would otherwise make it
          the containing block for this fixed element and clip it to the header's height. */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          ref={sheetRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          onKeyDown={trapFocus}
          className="fixed inset-0 z-[70] flex flex-col bg-cream lg:hidden"
        >
          <div className="flex h-[4.5rem] shrink-0 items-center justify-between gap-4 border-b border-border px-4 sm:px-6">
            <Link href="/" onClick={closeMobile} aria-label="JRose Wellness, home" className="flex items-center gap-3">
              <Wordmark compact />
            </Link>
            <button
              ref={closeBtnRef}
              type="button"
              aria-label="Close menu"
              onClick={dismissMobile}
              className="grid h-11 w-11 place-items-center rounded-full text-primary transition-colors hover:bg-light"
            >
              <CloseIcon />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto overscroll-contain px-4 pb-10 pt-2 sm:px-6">
            {NAV.map((item) =>
              item.children?.length ? (
                <MobileSection
                  key={item.href}
                  item={item}
                  pathname={pathname}
                  open={mobileSection === item.href}
                  onToggle={() => setMobileSection((s) => (s === item.href ? null : item.href))}
                  onNavigate={closeMobile}
                />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobile}
                  aria-current={pathname === item.href ? 'page' : undefined}
                  className="block border-b border-border py-4 text-[17px] font-semibold text-ink"
                >
                  {item.label}
                </Link>
              ),
            )}

            <div className="space-y-3 pt-6">
              <Link
                href={NAV_CTA.href}
                onClick={closeMobile}
                className="block rounded-full bg-accent px-6 py-3.5 text-center font-semibold text-white shadow-sm transition-colors hover:bg-accent-dark"
              >
                {NAV_CTA.label}
              </Link>
              <a
                href={CONTACT.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-white px-6 py-3 font-semibold text-primary"
              >
                <PhoneIcon className="h-4 w-4" />
                Call {CONTACT.phone}
              </a>
              <p className="pt-2 text-center text-[13px] text-muted">{CONTACT.serviceArea}</p>
              <p className="rounded-xl bg-light px-4 py-3 text-center text-[13px] leading-relaxed text-ink/80">
                <CrisisText text={CRISIS.short} linkClassName="font-semibold text-accent underline underline-offset-2" />
              </p>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
