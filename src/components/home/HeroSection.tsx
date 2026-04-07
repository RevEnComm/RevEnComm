'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { m, AnimatePresence } from 'motion/react'
import { MessageCircle, Star, TrendingUp, Code2, Palette, Bot, Play } from 'lucide-react'

// ─── DATA ────────────────────────────────────────────────────────────────────

const WORDS = ['Growth', 'Visibility', 'Momentum', 'Campaigns', 'Systems'] as const

const FLOATING_CARDS = [
  { id: 'marketing', label: 'Digital Marketing', Icon: TrendingUp, accent: '#8B5CF6', pos: { top: '20%', left: '5%' }, delay: 0 },
  { id: 'web', label: 'Web Development', Icon: Code2, accent: '#38BDF8', pos: { top: '25%', right: '6%' }, delay: 0.2 },
  { id: 'creative', label: 'Creative Content', Icon: Palette, accent: '#E879F9', pos: { bottom: '25%', left: '8%' }, delay: 0.4 },
  { id: 'ai', label: 'AI & Automation', Icon: Bot, accent: '#2DD4BF', pos: { bottom: '22%', right: '10%' }, delay: 0.6 },
]

const avatars = [
  'https://placehold.co/36x36/8B5CF6/ffffff/png',
  'https://placehold.co/36x36/7C3AED/ffffff/png',
  'https://placehold.co/36x36/6D28D9/ffffff/png',
  'https://placehold.co/36x36/9C6BFF/ffffff/png',
]

// ─── HERO SECTION ────────────────────────────────────────────────────────────

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0)
  const [btnHovered, setBtnHovered] = useState(false)
  const [videoHovered, setVideoHovered] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [wordWidth, setWordWidth] = useState(0)
  const measureRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const id = setInterval(() => setWordIndex(i => (i + 1) % WORDS.length), 3200)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (measureRef.current)
      setWordWidth(measureRef.current.getBoundingClientRect().width)
  }, [wordIndex])

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#04020a',
        paddingTop: 'clamp(64px,10vw,120px)',
        paddingBottom: 'clamp(64px,5vw,80px)',
        fontFamily: '"Bricolage Grotesque", "DM Sans", system-ui, sans-serif',
      }}
    >
      {/* ── GLOBAL STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700;12..96,800;12..96,900&family=DM+Mono:wght@400;500;700&display=swap');

        .rc-text-gradient {
          background: linear-gradient(135deg, #A78BFA 0%, #7C3AED 45%, #C084FC 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .rc-glass-badge {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          border-radius: 100px;
          display: inline-flex;
          align-items: center;
          padding: 6px 16px 6px 6px;
          gap: 12px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
        }

        .rc-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: linear-gradient(135deg, #7C3AED, #6D28D9);
          color: #fff;
          font-weight: 700;
          font-size: 15px;
          padding: 0 24px;
          border-radius: 14px;
          height: 56px;
          border: 1px solid rgba(139, 92, 246, 0.5);
          box-shadow: 0 8px 28px rgba(109, 40, 217, 0.38), inset 0 1px 0 rgba(255, 255, 255, 0.12);
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          white-space: nowrap;
        }
        .rc-cta-btn:hover {
          background: linear-gradient(135deg, #8B5CF6, #7C3AED);
          box-shadow: 0 12px 36px rgba(109, 40, 217, 0.48), inset 0 1px 0 rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }

        .rc-secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.03);
          color: #fff;
          font-weight: 600;
          font-size: 15px;
          padding: 0 24px;
          border-radius: 14px;
          height: 56px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .rc-secondary-btn:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .rc-floating-card {
          background: rgba(15, 12, 29, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          border-radius: 16px;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .rc-floating-card:hover {
          border-color: rgba(255, 255, 255, 0.2);
          transform: scale(1.05) !important;
        }

        .rc-icon-box {
          width: 38px; height: 38px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .rc-bg-grid {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image: 
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
          background-size: 40px 40px;
          mask-image: radial-gradient(circle at center, black 10%, transparent 80%);
          -webkit-mask-image: radial-gradient(circle at center, black 10%, transparent 80%);
        }

        @keyframes rc-aurora-1 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.15; }
          33% { transform: translate(10%, -10%) scale(1.2) rotate(120deg); opacity: 0.25; }
          66% { transform: translate(-10%, 10%) scale(0.9) rotate(240deg); opacity: 0.15; }
          100% { transform: translate(0, 0) scale(1) rotate(360deg); opacity: 0.15; }
        }
        @keyframes rc-aurora-2 {
          0% { transform: translate(0, 0) scale(1) rotate(360deg); opacity: 0.1; }
          50% { transform: translate(-10%, -20%) scale(1.1) rotate(180deg); opacity: 0.2; }
          100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.1; }
        }

        .rc-orb-1 { animation: rc-aurora-1 25s ease-in-out infinite; }
        .rc-orb-2 { animation: rc-aurora-2 30s ease-in-out infinite; }

        @media (max-width: 1024px) {
          .rc-floating-elements { display: none; }
        }
        
        .rc-content-wrapper {
           opacity: ${loaded ? 1 : 0};
           transform: ${loaded ? 'translateY(0)' : 'translateY(24px)'};
           transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>

      {/* ── BACKGROUND EFFECTS ── */}
      <div className="rc-bg-grid" />

      {/* Ambient Orbs */}
      <div className="rc-orb-1" style={{
        position: 'absolute', top: '10%', left: '25%',
        width: '60vw', height: '60vw', maxWidth: 800, maxHeight: 800, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 60%)',
        filter: 'blur(80px)', zIndex: 0, pointerEvents: 'none'
      }} />
      <div className="rc-orb-2" style={{
        position: 'absolute', bottom: '0%', right: '20%',
        width: '50vw', height: '50vw', maxWidth: 700, maxHeight: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56,189,248,0.3) 0%, transparent 60%)',
        filter: 'blur(80px)', zIndex: 0, pointerEvents: 'none'
      }} />

      {/* ── FLOATING CARDS (Desktop Only) ── */}
      <div className="rc-floating-elements" style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        <div style={{ position: 'relative', width: '100%', height: '100%', maxWidth: 1440, margin: '0 auto' }}>
          {FLOATING_CARDS.map((card, i) => (
            <m.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 + card.delay, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'absolute', ...card.pos, pointerEvents: 'auto' }}
            >
              <m.div
                animate={{ y: [0, -18, 0], rotateZ: [0, i % 2 === 0 ? 2 : -2, 0] }}
                transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut", delay: card.delay }}
                className="rc-floating-card"
              >
                <div className="rc-icon-box" style={{ background: `${card.accent}18`, border: `1px solid ${card.accent}40`, color: card.accent }}>
                  <card.Icon size={18} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: '0.01em' }}>
                    {card.label}
                  </span>
                </div>
              </m.div>
            </m.div>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div 
        className="rc-content-wrapper"
        style={{
          position: 'relative', zIndex: 10,
          maxWidth: 960, width: '100%',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          textAlign: 'center', padding: '0 24px',
        }}
      >
        {/* Social Proof Badge */}
        <div className="rc-glass-badge">
          <div style={{ display: 'flex' }}>
            {avatars.map((src, i) => (
              <div key={i} style={{
                width: 28, height: 28, borderRadius: '50%',
                border: '2px solid rgba(15,12,29,0.9)',
                overflow: 'hidden', flexShrink: 0,
                marginLeft: i > 0 ? -10 : 0,
              }}>
                <Image src={src} alt="Client" width={28} height={28} style={{ objectFit: 'cover' }} />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ display: 'flex', gap: 2 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={10} style={{ color: '#F59E0B', fill: '#F59E0B' }} />
              ))}
            </div>
            <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.7)', fontWeight: 500, paddingRight: 4 }}>
              Trusted by ambitious brands
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1
          id="hero-heading"
          style={{
            marginTop: 'clamp(24px, 4vw, 32px)',
            fontFamily: '"Bricolage Grotesque", system-ui, sans-serif',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            fontSize: 'clamp(3rem, 7vw, 6.5rem)',
            color: '#fff',
            textShadow: '0 12px 40px rgba(0,0,0,0.5)',
          }}
        >
          <span style={{ display: 'block', marginBottom: '8px' }}>
            Transform Your
          </span>
          <span style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '0 16px' }}>
            <span>Business</span>
            {' '}
            <span
              style={{
                position: 'relative', display: 'inline-flex',
                alignItems: 'center',
                overflow: 'hidden', verticalAlign: 'middle',
                lineHeight: 1.15,
                width: wordWidth ? `${wordWidth}px` : 'auto',
                height: '1.2em',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px', // Pill shape for the rotating word
                padding: '0 12px',
                transition: 'width 0.4s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              <AnimatePresence mode="wait">
                <m.span
                  key={WORDS[wordIndex]}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16,1,0.3,1] }}
                  className="rc-text-gradient"
                  style={{ position: 'absolute', left: 16, whiteSpace: 'nowrap' }}
                >
                  {WORDS[wordIndex]}
                </m.span>
              </AnimatePresence>
              <span ref={measureRef} className="rc-text-gradient"
                style={{ visibility: 'hidden', whiteSpace: 'nowrap', display: 'inline-block', padding: '0 4px' }}>
                {WORDS[wordIndex]}
              </span>
            </span>
          </span>
        </h1>

        {/* Subtext */}
        <p style={{
          marginTop: 'clamp(20px, 3vw, 28px)',
          maxWidth: 680,
          color: 'rgba(255,255,255,0.6)',
          fontSize: 'clamp(16px, 1.5vw, 19px)',
          lineHeight: 1.6,
          fontWeight: 400,
        }}>
          RevEnComm helps businesses grow through strategic digital marketing, scalable website solutions, 
          creative execution, and practical AI automation.
        </p>

        {/* CTA Actions */}
        <div style={{
          marginTop: 'clamp(32px, 4vw, 44px)',
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16,
        }}>
          <a
            href="#contact"
            className="rc-cta-btn"
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
          >
            Start Your Project
            <MessageCircle size={18} style={{ 
              transform: btnHovered ? 'scale(1.1) rotate(-5deg)' : 'scale(1) rotate(0)',
              transition: 'transform 0.3s ease'
             }} />
          </a>
          <a
            href="#work"
            className="rc-secondary-btn"
            onMouseEnter={() => setVideoHovered(true)}
            onMouseLeave={() => setVideoHovered(false)}
          >
            <div style={{
              width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transform: videoHovered ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.3s ease'
            }}>
              <Play size={12} style={{ color: '#fff', marginLeft: 2 }} />
            </div>
            See How We Work
          </a>
        </div>

        {/* Metrics Bar */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            marginTop: 'clamp(48px, 6vw, 64px)',
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'clamp(24px, 4vw, 48px)',
            paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.1)',
            width: '100%', maxWidth: 800,
          }}
        >
          {[
            { label: 'Client Growth', val: '+240%' },
            { label: 'Projects Delivered', val: '150+' },
            { label: 'Ops Efficiency', val: '-60%' },
          ].map((stat, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <span style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 800, color: '#fff', fontFamily: '"Bricolage Grotesque", sans-serif' }}>
                {stat.val}
              </span>
              <span style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontFamily: '"DM Mono", monospace' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </m.div>

      </div>
    </section>
  )
}