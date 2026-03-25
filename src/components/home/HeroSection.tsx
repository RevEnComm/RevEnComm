'use client'
// 'use client' — word swap, folder card stack (auto-cycle + click-to-advance)
// All animations are S-tier only: transform + opacity (GPU compositor thread)

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { m, AnimatePresence, useMotionValue, useTransform, useSpring } from 'motion/react'
import { MessageCircle, Star, TrendingUp, Code2, Palette, Bot, ArrowUpRight } from 'lucide-react'

const WORDS = ['Digital', 'Growth', 'Creative', 'Powerful', 'Smarter'] as const

const CARDS = [
  {
    id: 'bliss',
    client: 'Bliss',
    service: 'Digital Marketing',
    metric: '+312% ROAS',
    desc: 'Meta & TikTok Ads campaign that tripled return on ad spend in 90 days.',
    Icon: TrendingUp,
    bg: '#13112a',
    accent: '#673DE6',
    image: 'https://placehold.co/440x240/13112a/673DE6/png',
  },
  {
    id: 'dosyi',
    client: 'Dosyi',
    service: 'E-Commerce',
    metric: '3× Revenue',
    desc: 'Full Shopify store build + Google Ads funnel → tripled monthly revenue.',
    Icon: Code2,
    bg: '#0e1628',
    accent: '#4c8ef5',
    image: 'https://placehold.co/440x240/0e1628/4c8ef5/png',
  },
  {
    id: 'geng',
    client: 'GenG',
    service: 'Content Solutions',
    metric: '5× Engagement',
    desc: 'Brand identity + social media content strategy drove 5× follower engagement.',
    Icon: Palette,
    bg: '#1a1428',
    accent: '#c45cf5',
    image: 'https://placehold.co/440x240/1a1428/c45cf5/png',
  },
  {
    id: 'care',
    client: 'Care First',
    service: 'AI Automation',
    metric: '70% Auto-resolved',
    desc: 'RAG-powered AI chatbot now handles 70% of customer inquiries autonomously.',
    Icon: Bot,
    bg: '#0e1820',
    accent: '#2dd4bf',
    image: 'https://placehold.co/440x240/0e1820/2dd4bf/png',
  },
] as const

const STACK = [
  { y: 0, scale: 1, rotate: 0, opacity: 1, z: 40 },
  { y: 14, scale: 0.94, rotate: -2, opacity: 0.85, z: 30 },
  { y: 26, scale: 0.88, rotate: 1.5, opacity: 0.65, z: 20 },
  { y: 36, scale: 0.82, rotate: -1, opacity: 0.4, z: 10 },
]

const avatars = [
  'https://placehold.co/40x40/673DE6/ffffff/png',
  'https://placehold.co/40x40/5530c4/ffffff/png',
  'https://placehold.co/40x40/7b52f0/ffffff/png',
  'https://placehold.co/40x40/4420a0/ffffff/png',
]

const badges = [
  { name: 'Trustpilot', rating: '4.9', label: 'Excellent' },
  { name: 'Clutch', rating: '5.0', label: '5 Star' },
  { name: 'Google', rating: '4.8', label: 'Top Rated' },
]

function FolderCardStack() {
  const [order, setOrder] = useState([0, 1, 2, 3])
  const [isExiting, setIsExiting] = useState(false)

  const advance = useCallback(() => {
    if (isExiting) return
    setIsExiting(true)
    setTimeout(() => {
      setOrder((prev) => {
        const [first, ...rest] = prev
        return [...rest, first]
      })
      setIsExiting(false)
    }, 380)
  }, [isExiting])

  useEffect(() => {
    const id = setInterval(advance, 3500)
    return () => clearInterval(id)
  }, [advance])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      className="relative w-full select-none cursor-pointer"
      style={{ height: '460px', perspective: '1000px' }}
      onClick={advance}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label="Portfolio case studies — click to browse"
    >
      {order.map((cardIdx, stackPos) => {
        const card = CARDS[cardIdx]
        const pos = STACK[stackPos] ?? STACK[STACK.length - 1]
        const isFront = stackPos === 0
        const exiting = isFront && isExiting

        return (
          <m.div
            key={card.id}
            animate={
              exiting
                ? { y: -120, scale: 0.78, rotate: -12, opacity: 0 }
                : { y: pos.y, scale: pos.scale, rotate: pos.rotate, opacity: pos.opacity }
            }
            transition={
              exiting
                ? { duration: 0.38, ease: [0.4, 0, 0.2, 1] }
                : { type: 'spring', stiffness: 280, damping: 28, mass: 0.9 }
            }
            style={{
              zIndex: pos.z,
              background: card.bg,
              transformOrigin: 'bottom center',
              transformStyle: 'preserve-3d',
              rotateX: isFront ? rotateX : 0,
              rotateY: isFront ? rotateY : 0,
            }}
            className="absolute inset-x-0 top-0 rounded-[22px] overflow-hidden border border-white/10 will-change-transform"
          >
            <div className="relative h-48 overflow-hidden">
              <Image src={card.image} alt={card.client} fill sizes="440px" className="object-cover opacity-50" />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${card.accent}20, transparent 60%, rgba(0,0,0,0.4))`,
                }}
              />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{ background: `${card.accent}30`, border: `1px solid ${card.accent}40` }}
                >
                  <card.Icon size={14} style={{ color: card.accent }} />
                </div>
                <span className="text-white font-bold text-sm">{card.client}</span>
              </div>
              <div
                className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{
                  background: `${card.accent}20`,
                  border: `1px solid ${card.accent}40`,
                  color: card.accent,
                }}
              >
                {card.metric}
              </div>
              {isFront && (
                <m.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute bottom-4 right-4 w-8 h-8 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20"
                >
                  <ArrowUpRight size={14} className="text-white" />
                </m.div>
              )}
            </div>

            <div className="px-5 py-4">
              <span
                className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold mb-2"
                style={{
                  background: `${card.accent}18`,
                  border: `1px solid ${card.accent}30`,
                  color: card.accent,
                }}
              >
                {card.service}
              </span>
              <p className="text-white/60 text-xs leading-relaxed line-clamp-2">{card.desc}</p>
            </div>
          </m.div>
        )
      })}

      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5" aria-hidden="true">
        {CARDS.map((_, i) => (
          <m.div
            key={i}
            animate={{
              width: order[0] === i ? 20 : 6,
              opacity: order[0] === i ? 1 : 0.3,
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            className="h-1.5 rounded-full bg-[#673DE6]"
          />
        ))}
      </div>
    </div>
  )
}

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0)
  const [btnHovered, setBtnHovered] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % WORDS.length), 2800)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0c0c12] pt-16 lg:pt-[70px]"
      aria-labelledby="hero-heading"
    >
      <style>{`
        .folder-wrapper {
          position: relative;
          width: 100%;
        }

        .folder-tab {
          position: absolute;
          top: -38px;
          left: 0;
          width: 210px;
          height: 40px;
          background: #1a1a2e;
          border-radius: 14px 14px 0 0;
          display: flex;
          align-items: center;
          padding: 0 18px;
          gap: 8px;
          border: 1px solid rgba(255,255,255,0.08);
          border-bottom: 0;
          z-index: 2;
        }

        .folder-tab::after {
          content: '';
          position: absolute;
          right: -20px;
          bottom: -1px;
          width: 20px;
          height: 20px;
          background: transparent;
          border-bottom-left-radius: 12px;
          box-shadow: -8px 8px 0 8px #1a1a2e;
        }

        .tab-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #7c5cf6;
        }

        .tab-text {
          font-size: 12px;
          color: #8b8b9e;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .folder-body {
          background: #1a1a2e;
          border-radius: 0 22px 22px 22px;
          border: 1px solid rgba(255,255,255,0.08);
          padding: 48px clamp(18px, 3vw, 36px) 34px;
          position: relative;
          overflow: hidden;
          opacity: ${loaded ? 1 : 0};
          transform: ${loaded ? 'translateY(0)' : 'translateY(16px)'};
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .folder-body::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(124,92,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,92,246,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }

        .folder-body::after {
          content: '';
          position: absolute;
          bottom: -80px;
          right: -80px;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(124,92,246,0.14) 0%, transparent 70%);
          pointer-events: none;
        }

        @media (max-width: 640px) {
          .folder-tab {
            width: 180px;
            top: -34px;
            height: 36px;
            padding: 0 12px;
          }

          .tab-text {
            font-size: 11px;
          }

          .folder-body {
            padding-top: 32px;
          }
        }
      `}</style>

      <div className="hero-glow top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 opacity-50" aria-hidden="true" />
      <div className="hero-glow bottom-0 right-0 translate-x-1/4 opacity-20" aria-hidden="true" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-[25px] w-full grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center py-[clamp(70px,8.6vw,120px)]">
        <div className="folder-wrapper">
          <div className="folder-tab" aria-hidden="true">
            <div className="tab-dot" />
            <span className="tab-text">revencomm.com</span>
          </div>

          <div className="folder-body">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-[1] flex items-center gap-3 w-fit mb-[clamp(20px,3.5vw,36px)]"
            >
              <div className="flex -space-x-2">
                {avatars.map((src, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#1a1a2e] overflow-hidden shrink-0">
                    <Image src={src} alt={`Client ${i + 1}`} width={32} height={32} className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="text-[#fdc448] fill-[#fdc448]" />
                  ))}
                </div>
                <span className="text-white/60 text-xs font-medium">Loved by 150+ Business Owners</span>
              </div>
            </m.div>

            <h1
              id="hero-heading"
              className="relative z-[1] font-extrabold leading-[1.05] tracking-tight text-[clamp(2.5rem,5.5vw,5.5rem)] mb-[clamp(12px,1.5vw,20px)]"
            >
              <m.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="block text-white"
              >
                Let&apos;s Make The
              </m.span>

              <m.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-end gap-x-4 text-white"
              >
                Next{' '}
                <span
                  className="overflow-hidden inline-block align-bottom relative"
                  style={{ minWidth: 'clamp(150px, 22vw, 350px)', height: '1.05em' }}
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <AnimatePresence mode="wait">
                    <m.span
                      key={WORDS[wordIndex]}
                      initial={{ y: '110%', opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: '-110%', opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 text-gradient"
                    >
                      {WORDS[wordIndex]}
                    </m.span>
                  </AnimatePresence>
                </span>{' '}Thing
              </m.span>
            </h1>

            <m.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left' }}
              className="relative z-[1] w-full h-px bg-white/10 my-[clamp(16px,3.2vw,36px)]"
              aria-hidden="true"
            />

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-[1] mb-[clamp(20px,3.5vw,40px)] flex flex-wrap items-center gap-4"
            >
              <div className="grid grid-cols-3 gap-3 flex-1 min-w-[280px] max-w-md">
                {badges.map((b) => (
                  <div key={b.name} className="bg-glass border border-white/[0.08] rounded-[20px] p-4 flex flex-col gap-1.5">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={9} className="text-[#fdc448] fill-[#fdc448]" />
                      ))}
                    </div>
                    <span className="text-white font-bold text-sm leading-none">{b.rating}</span>
                    <span className="text-white/35 text-[10px] font-medium leading-snug">{b.label} on {b.name}</span>
                  </div>
                ))}
              </div>

              <m.a
                href="#contact"
                onHoverStart={() => setBtnHovered(true)}
                onHoverEnd={() => setBtnHovered(false)}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="group relative flex items-center gap-2.5 bg-[#673DE6] text-white font-semibold pl-[15px] pr-1.5 py-1.5 rounded-[12px] min-h-[50px] hover:bg-[#5530c4] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#673DE6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c12] w-full sm:w-auto sm:ml-auto"
              >
                <span className="text-[15px] overflow-hidden h-[1.2em] relative block" style={{ width: '110px' }}>
                  <span className={`block transition-transform duration-[0.4s] ${btnHovered ? '-translate-y-full' : 'translate-y-0'}`}>
                    Let&apos;s Discuss
                  </span>
                  <span
                    className="absolute top-full left-0 block transition-transform duration-[0.4s]"
                    style={{ transform: btnHovered ? 'translateY(-100%)' : 'translateY(0)' }}
                  >
                    Let&apos;s Discuss
                  </span>
                </span>
                <span className="w-9 h-9 bg-white rounded-[8px] flex items-center justify-center shrink-0">
                  <MessageCircle size={16} className="text-[#673DE6]" />
                </span>
              </m.a>
            </m.div>
          </div>
        </div>

        <m.div
          initial={{ opacity: 0, x: 48, y: 16 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:block pb-6 md:pt-1"
        >
          <FolderCardStack />
        </m.div>
      </div>
    </section>
  )
}
