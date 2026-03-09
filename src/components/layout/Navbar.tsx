'use client'
// 'use client' — scroll detection, AnimatePresence, mega menu state

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { m, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react'
import { Menu, X, ChevronDown, Megaphone, FileText, Globe, Bot, BarChart2, Palette } from 'lucide-react'

const serviceGroups = [
  {
    heading: 'Digital Marketing',
    icon: Megaphone,
    items: ['Facebook Ads', 'Google Ads', 'TikTok Ads', 'LinkedIn Ads', 'Email Marketing', 'Social Media Marketing'],
  },
  {
    heading: 'Content Solutions',
    icon: FileText,
    items: ['Logo & Brand Design', 'Social Media Design', 'Ad Creatives', 'Copywriting'],
  },
  {
    heading: 'Website & Software',
    icon: Globe,
    items: ['E-commerce Development', 'Landing Page Design', 'Portfolio Websites', 'Web Apps'],
  },
  {
    heading: 'AI & Automation',
    icon: Bot,
    items: ['Social Media Automation', 'AI Chatbot & RAG', 'Personal AI Agent', 'Workflow Automation'],
  },
]

const navLinks = [
  { label: 'Services', href: '#services', hasMega: true },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious() ?? 0
    setHidden(latest > 100 && latest > prev)
    setScrolled(latest > 20)
  })

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
    <m.header
      ref={navRef}
      animate={{ y: hidden ? -80 : 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0c0c12]/90 backdrop-blur-xl border-b border-white/[0.06]' : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-[1400px] mx-auto px-5 md:px-[25px] h-16 lg:h-[70px] flex items-center justify-between"
        role="navigation" aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#673DE6] rounded-sm">
          <div className="w-8 h-8 rounded-lg bg-[#673DE6] flex items-center justify-center shrink-0">
            <BarChart2 size={16} className="text-white" />
          </div>
          <span className="font-bold text-[15px] lg:text-base tracking-tight">
            RevEn<span className="text-[#673DE6]">Comm</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.hasMega ? (
                <button
                  onClick={() => setMegaOpen((v) => !v)}
                  aria-expanded={megaOpen}
                  aria-haspopup="true"
                  className="flex items-center gap-1 px-4 py-2 text-[15px] text-white/70 hover:text-white
                             transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2
                             focus-visible:ring-[#673DE6] rounded-md min-h-[44px]"
                >
                  {link.label}
                  <m.span animate={{ rotate: megaOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={14} />
                  </m.span>
                </button>
              ) : (
                <Link href={link.href}
                  className="px-4 py-2 text-[15px] text-white/70 hover:text-white transition-colors duration-200
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#673DE6] rounded-md
                             min-h-[44px] flex items-center"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <m.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="flex items-center gap-2 bg-[#673DE6] text-white text-[15px] font-semibold
                       px-5 py-2.5 rounded-xl min-h-[44px] hover:bg-[#5530c4] transition-colors duration-200
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#673DE6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c12]"
          >
            <Palette size={14} />
            Free Consultation
          </m.a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden p-2 text-white/70 hover:text-white focus-visible:outline-none focus-visible:ring-2
                     focus-visible:ring-[#673DE6] rounded-md min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <m.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X size={22} />
              </m.span>
            ) : (
              <m.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Menu size={22} />
              </m.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mega menu */}
      <AnimatePresence>
        {megaOpen && (
          <m.div
            initial={{ opacity: 0, y: -10, scaleY: 0.96 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -10, scaleY: 0.96 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'top' }}
            className="absolute top-full left-0 w-full bg-[#0e0e1a]/98 backdrop-blur-xl
                       border-b border-white/[0.07] px-5 md:px-[25px] py-8"
            role="menu"
          >
            <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
              {serviceGroups.map((group) => (
                <div key={group.heading}>
                  <div className="flex items-center gap-2 mb-4">
                    <group.icon size={14} className="text-[#673DE6] shrink-0" />
                    <span className="text-white text-sm font-semibold">{group.heading}</span>
                  </div>
                  <ul className="flex flex-col gap-2.5" role="list">
                    {group.items.map((item) => (
                      <li key={item}>
                        <a href="#services" role="menuitem" onClick={() => setMegaOpen(false)}
                          className="text-white/45 hover:text-white text-[13px] transition-colors duration-150 block">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/70 z-[90] lg:hidden" aria-hidden="true"
            />
            <m.div
              initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-[#0e0e1a] z-[100] p-7 flex flex-col
                         border-r border-white/[0.06] lg:hidden"
              role="dialog" aria-modal="true" aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between mb-10">
                <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#673DE6] flex items-center justify-center">
                    <BarChart2 size={13} className="text-white" />
                  </div>
                  <span className="font-bold text-sm">RevEn<span className="text-[#673DE6]">Comm</span></span>
                </Link>
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu"
                  className="p-2 text-white/50 hover:text-white min-h-[44px] min-w-[44px] flex items-center justify-center">
                  <X size={20} />
                </button>
              </div>

              <ul className="flex flex-col gap-1 flex-1" role="list">
                {navLinks.map((link, i) => (
                  <m.li key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link href={link.href} onClick={() => setMobileOpen(false)}
                      className="block py-3.5 text-base text-white/65 hover:text-white transition-colors
                                 border-b border-white/[0.06] min-h-[44px] flex items-center"
                    >
                      {link.label}
                    </Link>
                  </m.li>
                ))}
              </ul>

              <m.a href="#contact" onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="mt-8 bg-[#673DE6] text-white font-semibold text-center py-3.5 rounded-xl
                           min-h-[44px] flex items-center justify-center hover:bg-[#5530c4] transition-colors"
              >
                Get a Free Consultation
              </m.a>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </m.header>
  )
}
