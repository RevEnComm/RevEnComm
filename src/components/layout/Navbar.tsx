'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  m, AnimatePresence, useScroll, useTransform, useMotionTemplate,
} from 'motion/react'
import {
  Menu, X, ChevronDown, Megaphone, Globe, Bot, BarChart2, Palette, ArrowUpRight,
} from 'lucide-react'

// ─── DATA ─────────────────────────────────────────────────────────────────────

const serviceGroups = [
  {
    heading: 'Digital Marketing',
    desc: 'Data-driven campaigns that scale.',
    icon: Megaphone,
    accent: '#8B5CF6',
    href: '/services/digital-marketing',
  },
  {
    heading: 'Content Solution',
    desc: 'Brand identity & creative assets.',
    icon: Palette,
    accent: '#E879F9',
    href: '/services/content-solution',
  },
  {
    heading: 'Website Solution',
    desc: 'E-commerce, landing pages & apps.',
    icon: Globe,
    accent: '#38BDF8',
    href: '/services/website-software',
  },
  {
    heading: 'AI & Automation',
    desc: 'Chatbots, RAG & personal agents.',
    icon: Bot,
    accent: '#2DD4BF',
    href: '/services/ai-automation',
  },
]

const navLinks = [
  { label: 'Services',     href: '/services',     hasMega: true },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog',         href: '/blogs'         },
  { label: 'About Us',     href: '/about'         },
]

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [megaOpen,         setMegaOpen]         = useState(false)
  const [mobileOpen,       setMobileOpen]       = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const navRef   = useRef<HTMLElement>(null)
  const hoverRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { scrollY } = useScroll()

  /* ── Scroll-driven styles — no React re-renders on scroll ── */
  const yOffset       = useTransform(scrollY, (v) => {
    const prev = scrollY.getPrevious() ?? 0
    return v > 120 && v > prev ? -80 : 0
  })
  const bgOpacity     = useTransform(scrollY, [0, 60], [0, 0.88])
  const borderOpacity = useTransform(scrollY, [0, 60], [0, 0.06])
  const bgColor       = useMotionTemplate`rgba(10, 10, 15, ${bgOpacity})`
  const borderColor   = useMotionTemplate`rgba(255, 255, 255, ${borderOpacity})`

  /* ── Hover-intent for mega menu ── */
  const openMega  = () => {
    if (hoverRef.current) clearTimeout(hoverRef.current)
    setMegaOpen(true)
  }
  const closeMega = () => {
    hoverRef.current = setTimeout(() => setMegaOpen(false), 120)
  }

  /* ── Side-effects ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setMegaOpen(false); setMobileOpen(false) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setMegaOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* ═══════════════════════  NAVBAR BAR  ═══════════════════════ */}
      <m.header
        ref={navRef}
        style={{
          y: yOffset,
          backgroundColor: bgColor,
          borderBottomColor: borderColor,
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}
        className="fixed top-0 w-full z-50"
      >
        <nav
          className="max-w-[1400px] mx-auto px-5 md:px-8 h-[68px] flex items-center justify-between gap-8"
          role="navigation"
          aria-label="Main navigation"
        >

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] rounded-md"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-shadow duration-300 group-hover:shadow-[0_0_18px_rgba(139,92,246,0.5)]"
              style={{ background: 'linear-gradient(135deg, #8B5CF6, #6D28D9)' }}
            >
              <BarChart2 size={15} className="text-white" />
            </div>
            <span className="font-bold text-[15px] tracking-tight text-white">
              RevEn<span className="text-[#8B5CF6]">Comm</span>
            </span>
          </Link>

          {/* ── Desktop links ── */}
          <ul className="hidden lg:flex items-center gap-0.5 flex-1 justify-center" role="list">
            {navLinks.map((link) => (
              <li key={link.label} className="relative">
                {link.hasMega ? (
                  /* Services — hover trigger */
                  <button
                    onMouseEnter={openMega}
                    onMouseLeave={closeMega}
                    onClick={() => setMegaOpen((v) => !v)}
                    aria-expanded={megaOpen}
                    aria-haspopup="true"
                    className="group relative flex items-center gap-1.5 px-4 py-2 text-[14px] font-medium
                               text-white/50 hover:text-white transition-colors duration-200 rounded-lg
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] min-h-[44px]"
                  >
                    {link.label}
                    <m.span
                      animate={{ rotate: megaOpen ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      <ChevronDown size={13} strokeWidth={2.5} />
                    </m.span>
                    {/* Hover pill */}
                    <span className="absolute inset-0 rounded-lg bg-white/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="group relative flex items-center px-4 py-2 text-[14px] font-medium
                               text-white/50 hover:text-white transition-colors duration-200 rounded-lg
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] min-h-[44px]"
                  >
                    {link.label}
                    {/* Hover pill */}
                    <span className="absolute inset-0 rounded-lg bg-white/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* ── Desktop CTA ── */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href="#contact"
              className="group relative flex items-center gap-2.5 overflow-hidden
                         bg-white text-black text-[13px] font-bold tracking-wide uppercase
                         pl-5 pr-1.5 py-1.5 rounded-full min-h-[40px]
                         transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(139,92,246,0.35)]"
            >
              <span className="relative overflow-hidden h-[1em]">
                <span className="block transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                  Free&nbsp;Consultation
                </span>
                <span className="absolute top-full left-0 block transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                  Free&nbsp;Consultation
                </span>
              </span>
              <span className="w-7 h-7 bg-black rounded-full flex items-center justify-center shrink-0 transition-transform duration-400 group-hover:rotate-45">
                <ArrowUpRight size={14} className="text-white" />
              </span>
            </a>
          </div>

          {/* ── Mobile burger ── */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/[0.05]
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]
                       min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <m.span key="x"
                  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={21} />
                </m.span>
              ) : (
                <m.span key="menu"
                  initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={21} />
                </m.span>
              )}
            </AnimatePresence>
          </button>
        </nav>

        {/* ─── Mega menu ─── stays inside header to inherit position */}
        <AnimatePresence>
          {megaOpen && (
            <m.div
              onMouseEnter={openMega}
              onMouseLeave={closeMega}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              style={{ backgroundColor: 'rgba(10, 10, 15, 0.97)' }}
              className="absolute top-full left-0 w-full backdrop-blur-2xl
                         border-b border-white/[0.06] px-5 md:px-8 py-6"
              role="menu"
            >
              {/* subtle grid overlay matching hero */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                  maskImage: 'radial-gradient(ellipse 80% 100% at 50% 0%, black 0%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 80% 100% at 50% 0%, black 0%, transparent 100%)',
                }}
                aria-hidden="true"
              />

              {/* items-stretch + h-full on the card keeps all cards the same height */}
              <div className="relative max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 items-stretch">
                {serviceGroups.map((group, i) => (
                  <m.div
                    key={group.heading}
                    className="flex"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={group.href}
                      role="menuitem"
                      onClick={() => setMegaOpen(false)}
                      className="group flex flex-col gap-3 p-4 rounded-2xl border border-white/[0.04]
                                 bg-white/[0.015] hover:bg-white/[0.04] hover:border-white/[0.08]
                                 transition-all duration-200 ease-out w-full h-full"
                    >
                      {/* Icon */}
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-110"
                        style={{
                          background: `${group.accent}18`,
                          border: `1px solid ${group.accent}30`,
                        }}
                      >
                        <group.icon size={15} style={{ color: group.accent }} />
                      </div>

                      {/* Text */}
                      <div className="flex flex-col gap-1">
                        <span className="text-white/80 group-hover:text-white text-[13.5px] font-semibold transition-colors duration-200 leading-snug">
                          {group.heading}
                        </span>
                        <span className="text-white/30 text-[12px] leading-relaxed group-hover:text-white/50 transition-colors duration-200">
                          {group.desc}
                        </span>
                      </div>
                    </Link>
                  </m.div>
                ))}
              </div>

              {/* Bottom CTA strip */}
              <div className="relative max-w-[1400px] mx-auto mt-4 pt-4 border-t border-white/[0.04] flex items-center justify-between">
                <span className="text-white/25 text-xs tracking-widest uppercase font-semibold">
                  All Services
                </span>
                <Link
                  href="/services"
                  onClick={() => setMegaOpen(false)}
                  className="group flex items-center gap-1.5 text-[12px] font-semibold text-white/40 hover:text-white transition-colors duration-200"
                >
                  View full services
                  <ArrowUpRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </m.header>

      {/*
        ══════════════════════════════════════════════════════
        MOBILE DRAWER — sibling of <m.header> (NOT a child).

        CSS spec: transform + backdrop-filter on a parent create
        a new "containing block" for position:fixed descendants,
        making them clip to the header box, not the viewport.
        Being a sibling entirely avoids this.
        ══════════════════════════════════════════════════════
      */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Dimmed overlay */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] lg:hidden"
              aria-hidden="true"
            />

            {/* Slide-in drawer */}
            <m.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{ backgroundColor: '#0A0A0F' }}
              className="fixed inset-y-0 left-0 w-4/5 max-w-[320px] z-[100] flex flex-col
                         border-r border-white/[0.06] lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              {/* Subtle grid bg */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
                aria-hidden="true"
              />

              {/* Drawer top */}
              <div className="relative flex items-center justify-between p-6 border-b border-white/[0.06]">
                <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #8B5CF6, #6D28D9)' }}
                  >
                    <BarChart2 size={13} className="text-white" />
                  </div>
                  <span className="font-bold text-sm text-white">
                    RevEn<span className="text-[#8B5CF6]">Comm</span>
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-white/40 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav links */}
              <ul className="relative flex flex-col flex-1 py-4 px-3 overflow-y-auto" role="list">
                {navLinks.map((link, i) => (
                  <m.li
                    key={link.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {link.hasMega ? (
                      /* Services — accordion */
                      <div>
                        <button
                          onClick={() => setMobileServicesOpen((v) => !v)}
                          className="group flex items-center justify-between w-full px-4 py-3.5 text-[15px] font-medium
                                     text-white/50 hover:text-white rounded-xl hover:bg-white/[0.04]
                                     transition-all duration-200 min-h-[48px]"
                        >
                          {link.label}
                          <m.span
                            animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                            transition={{ duration: 0.2, ease: 'easeInOut' }}
                          >
                            <ChevronDown size={15} className="text-white/30 group-hover:text-white/60 transition-colors" />
                          </m.span>
                        </button>

                        {/* Collapsible service cards */}
                        <AnimatePresence initial={false}>
                          {mobileServicesOpen && (
                            <m.div
                              key="mobile-services"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="grid grid-cols-2 gap-2 px-1 pb-3 pt-1">
                                {serviceGroups.map((group) => (
                                  <Link
                                    key={group.heading}
                                    href={group.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="group flex flex-col gap-2 p-3 rounded-xl border border-white/[0.04]
                                               bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.08]
                                               transition-all duration-200"
                                  >
                                    <div
                                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                                      style={{
                                        background: `${group.accent}18`,
                                        border: `1px solid ${group.accent}30`,
                                      }}
                                    >
                                      <group.icon size={13} style={{ color: group.accent }} />
                                    </div>
                                    <span className="text-white/60 group-hover:text-white text-[12px] font-medium leading-snug transition-colors duration-200">
                                      {group.heading}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </m.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="group flex items-center justify-between w-full px-4 py-3.5 text-[15px] font-medium
                                   text-white/50 hover:text-white rounded-xl hover:bg-white/[0.04]
                                   transition-all duration-200 min-h-[48px]"
                      >
                        {link.label}
                        <ArrowUpRight
                          size={14}
                          className="text-white/20 group-hover:text-white/50 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </Link>
                    )}
                  </m.li>
                ))}
              </ul>

              {/* Drawer footer CTA */}
              <div className="relative p-5 border-t border-white/[0.06]">
                <m.a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.26, duration: 0.28 }}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl
                             bg-white text-black text-[13px] font-bold uppercase tracking-widest
                             hover:shadow-[0_0_24px_rgba(139,92,246,0.3)] transition-shadow duration-300"
                >
                  Free Consultation
                  <ArrowUpRight size={14} />
                </m.a>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
