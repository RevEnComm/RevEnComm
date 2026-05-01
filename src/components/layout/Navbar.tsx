'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
    accent: '#FF8A00',
    href: '/services/digital-marketing',
  },
  {
    heading: 'Website & Software',
    desc: 'Custom high-performance platforms.',
    icon: Globe,
    accent: '#FF8A00',
    href: '/services/website-software',
  },
  {
    heading: 'AI & Automation',
    desc: 'Deploying the future of work.',
    icon: Bot,
    accent: '#FF8A00',
    href: '/services/ai-automation',
  },
  {
    heading: 'Content Solution',
    desc: 'High-end visual storytelling.',
    icon: Palette,
    accent: '#FF8A00',
    href: '/services/content-solution',
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
  const borderOpacity = useTransform(scrollY, [0, 60], [0, 0.08])
  const bgColor       = useMotionTemplate`rgba(10, 10, 15, ${bgOpacity})`
  const borderColor   = useMotionTemplate`rgba(255, 138, 0, ${borderOpacity})`

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
          backdropFilter: 'blur(32px)',
          WebkitBackdropFilter: 'blur(32px)',
        }}
        className="fixed top-0 w-full z-50 border-b border-white/[0.05]"
      >
        <nav
          className="max-w-[1400px] mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between gap-8"
          role="navigation"
          aria-label="Main navigation"
        >

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] rounded-md"
          >
            <div className="relative w-10 h-10 shrink-0 rotate-[12deg]">
              <Image 
                src="/logo-primary.png" 
                alt="Logo" 
                fill
                className="object-contain"
              />
            </div>
            <span className="font-black text-[18px] tracking-tighter text-white uppercase italic">
              RevEn<span className="text-[#FF8A00] not-italic">Comm</span>
            </span>
          </Link>

          {/* ── Desktop links ── */}
          <ul className="hidden lg:flex items-center gap-1 flex-1 justify-center" role="list">
            {navLinks.map((link) => (
              <li key={link.label} className="relative">
                {link.hasMega ? (
                  <button
                    onMouseEnter={openMega}
                    onMouseLeave={closeMega}
                    onClick={() => setMegaOpen((v) => !v)}
                    aria-expanded={megaOpen}
                    aria-haspopup="true"
                    className="group relative flex items-center gap-1.5 px-5 py-2.5 text-[13px] font-black
                               text-white/40 hover:text-white transition-all duration-300 rounded-full
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] uppercase tracking-widest"
                  >
                    {link.label}
                    <m.span
                      animate={{ rotate: megaOpen ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      <ChevronDown size={14} strokeWidth={3} />
                    </m.span>
                    <span className="absolute inset-0 rounded-full bg-white/[0.05] scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="group relative flex items-center px-5 py-2.5 text-[13px] font-black
                               text-white/40 hover:text-white transition-all duration-300 rounded-full
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] uppercase tracking-widest"
                  >
                    {link.label}
                    <span className="absolute inset-0 rounded-full bg-white/[0.05] scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* ── Desktop CTA ── */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              href="/contact"
              className="group relative flex items-center gap-3 overflow-hidden
                         bg-[#FF8A00] text-white text-[12px] font-black tracking-widest uppercase
                         pl-7 pr-2 py-2 rounded-full min-h-[48px]
                         transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,138,0,0.4)] hover:scale-[1.02]"
            >
              <span className="relative overflow-hidden h-[1.2em]">
                <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                  Consultation
                </span>
                <span className="absolute top-full left-0 block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                  Start&nbsp;Now
                </span>
              </span>
              <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight size={18} className="text-[#FF8A00]" />
              </span>
            </Link>
          </div>

          {/* ── Mobile burger ── */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden p-2 text-white/60 hover:text-[#FF8A00] rounded-xl hover:bg-white/[0.05]
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00]
                       min-h-[48px] min-w-[48px] flex items-center justify-center transition-all"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <m.span key="x"
                  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={24} />
                </m.span>
              ) : (
                <m.span key="menu"
                  initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={24} />
                </m.span>
              )}
            </AnimatePresence>
          </button>
        </nav>

        {/* ─── Mega menu ─── */}
        <AnimatePresence>
          {megaOpen && (
            <m.div
              onMouseEnter={openMega}
              onMouseLeave={closeMega}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ backgroundColor: 'rgba(10, 10, 15, 0.98)' }}
              className="absolute top-full left-0 w-full backdrop-blur-3xl
                         border-b border-white/[0.08] px-5 md:px-8 py-10 shadow-2xl"
              role="menu"
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '60px 60px',
                }}
              />

              <div className="relative max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {serviceGroups.map((group, i) => (
                  <m.div
                    key={group.heading}
                    className="flex"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                  >
                    <Link
                      href={group.href}
                      role="menuitem"
                      onClick={() => setMegaOpen(false)}
                      className="group flex flex-col gap-4 p-6 rounded-[32px] border border-white/[0.05]
                                 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#FF8A00]/30
                                 transition-all duration-300 w-full"
                    >
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-[#FF8A00] group-hover:rotate-12"
                        style={{
                          background: `${group.accent}15`,
                          border: `1px solid ${group.accent}30`,
                        }}
                      >
                        <group.icon size={20} className="text-[#FF8A00] group-hover:text-white transition-colors" />
                      </div>

                      <div>
                        <span className="text-white font-black text-lg tracking-tight transition-colors duration-300 group-hover:text-[#FF8A00] block mb-1">
                          {group.heading}
                        </span>
                        <span className="text-white/40 text-sm font-medium leading-relaxed group-hover:text-white/60 transition-colors">
                          {group.desc}
                        </span>
                      </div>
                    </Link>
                  </m.div>
                ))}
              </div>

              <div className="relative max-w-[1400px] mx-auto mt-10 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-white/20 text-[10px] font-black tracking-[0.4em] uppercase">
                  Strategic Ecosystems
                </span>
                <Link
                  href="/services"
                  onClick={() => setMegaOpen(false)}
                  className="group flex items-center gap-2 text-xs font-black text-[#FF8A00] uppercase tracking-widest"
                >
                  Explore all systems
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </m.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[90] lg:hidden"
              aria-hidden="true"
            />

            <m.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 35 }}
              style={{ backgroundColor: '#0A0A0F' }}
              className="fixed inset-y-0 left-0 w-full max-w-[320px] z-[100] flex flex-col
                         border-r border-white/10 lg:hidden shadow-2xl"
              role="dialog"
              aria-modal="true"
            >
              <div className="relative flex items-center justify-between p-8 border-b border-white/5">
                <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                  <div className="relative w-8 h-8 shrink-0 rotate-[12deg]">
                    <Image 
                      src="/logo-primary.png" 
                      alt="Logo" 
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-black text-base text-white italic">
                    RevEn<span className="text-[#FF8A00] not-italic">Comm</span>
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-white/40 hover:text-white rounded-xl bg-white/5 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <ul className="flex flex-col flex-1 py-8 px-6 overflow-y-auto gap-2" role="list">
                {navLinks.map((link, i) => (
                  <m.li
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {link.hasMega ? (
                      <div className="space-y-4">
                        <button
                          onClick={() => setMobileServicesOpen((v) => !v)}
                          className="flex items-center justify-between w-full px-4 py-4 text-base font-black
                                     text-white/50 hover:text-[#FF8A00] rounded-2xl hover:bg-white/5 uppercase tracking-widest transition-all"
                        >
                          {link.label}
                          <ChevronDown size={18} className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <m.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="grid gap-3 px-2 pb-4">
                                {serviceGroups.map((group) => (
                                  <Link
                                    key={group.heading}
                                    href={group.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex flex-col gap-1 p-4 rounded-2xl bg-white/[0.03] border border-white/5"
                                  >
                                    <span className="text-[#FF8A00] text-xs font-black uppercase tracking-widest">{group.heading}</span>
                                    <span className="text-white/40 text-[11px] font-medium">{group.desc}</span>
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
                        className="flex items-center justify-between w-full px-4 py-4 text-base font-black
                                   text-white/50 hover:text-white rounded-2xl hover:bg-white/5 uppercase tracking-widest transition-all"
                      >
                        {link.label}
                        <ArrowUpRight size={18} className="text-white/20" />
                      </Link>
                    )}
                  </m.li>
                ))}
              </ul>

              <div className="p-8 border-t border-white/5">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl
                             bg-[#FF8A00] text-white text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-orange-500/20"
                >
                  Consultation
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
