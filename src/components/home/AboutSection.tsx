'use client'
// 'use client' — useCountUp (rAF DOM writes) + scroll animations

import { m } from 'motion/react'
import { useCountUp } from '@/lib/use-count-up'
import { staggerContainer, staggerItem } from '@/lib/animation-variants'
import { Zap, Users, Award, CalendarCheck } from 'lucide-react'

const stats = [
  { value: 500, suffix: '+', label: 'Projects Complete', icon: Zap },
  { value: 300, suffix: '+', label: 'Satisfied Clients', icon: Users },
  { value: 15, suffix: '+', label: 'Awards Won', icon: Award },
  { value: 5, suffix: 'Y+', label: 'Experience', icon: CalendarCheck },
]

const partners = [
  'Bliss', 'Dosyi', 'GenG', 'Chilleghuri', 'Palki', 'Green Factory',
  'Scinan', 'Care First', 'Folafol', 'Gentle Trend', 'GCL', 'Prithuli',
]

const pillRows = [
  ['Digital Marketing', 'Facebook Ads', 'Google Ads', 'TikTok Ads', 'LinkedIn Ads', 'Email Marketing', 'Copywriting'],
  ['Brand Design', 'Social Media Design', 'Ad Creatives', 'Content Strategy', 'Video Ads', 'Infographics'],
  ['Web Development', 'E-Commerce', 'Landing Pages', 'AI Chatbot', 'Automation', 'Personal AI Agent'],
]

function StatCard({ value, suffix, label, icon: Icon }: (typeof stats)[0]) {
  const ref = useCountUp(value)
  return (
    <div
      className="bg-glass border border-white/[0.08] rounded-[20px] lg:rounded-[40px]
                 pt-4 pr-4 pl-5 pb-5 lg:pt-6 lg:pr-6 lg:pb-8 2xl:pt-8 2xl:pr-8 2xl:pl-10 2xl:pb-10
                 flex flex-col gap-3 hover:border-[#673DE6]/30 transition-colors duration-300"
    >
      <div className="self-end">
        <div className="w-10 h-10 rounded-xl bg-[#673DE6]/10 border border-[#673DE6]/20 flex items-center justify-center">
          <Icon size={18} className="text-[#673DE6]" />
        </div>
      </div>
      <div>
        <div className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-white tabular-nums leading-none">
          <span ref={ref}>0</span>
          <span>{suffix}</span>
        </div>
        <p className="text-white/45 text-sm mt-2 font-medium">{label}</p>
      </div>
    </div>
  )
}

function PillRow({ pills, reverse = false }: { pills: string[]; reverse?: boolean }) {
  return (
    <div
      className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] py-1"
      aria-hidden="true"
    >
      <div
        className={`flex gap-3 shrink-0 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ willChange: 'transform' }}
      >
        {[...pills, ...pills].map((pill, i) => (
          <span
            key={i}
            className="shrink-0 px-4 py-1.5 rounded-full border border-white/[0.08] text-white/35
                       text-xs font-medium tracking-wide whitespace-nowrap bg-glass"
          >
            {pill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function AboutSection() {
  return (
    <section id="about" className="relative py-[clamp(70px,8.6vw,150px)] px-5 md:px-[25px] overflow-hidden"
      aria-labelledby="about-heading">

      {/* Section number watermark */}
      <span className="absolute right-6 top-6 font-extrabold text-white/[0.025] select-none pointer-events-none leading-none
                       text-[clamp(80px,12vw,160px)]" aria-hidden="true">01</span>

      <div className="max-w-[1400px] mx-auto">

        {/* Section label */}
        <m.div variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.15 }} className="mb-16">
          <m.div variants={staggerItem}
            className="flex items-center gap-4 mb-6">
            <span className="text-white/40 text-sm font-semibold tracking-widest uppercase">01</span>
            <div className="h-px w-12 bg-white/20" />
            <span className="text-white/40 text-sm font-semibold uppercase tracking-widest">About</span>
          </m.div>

          <m.h2 variants={staggerItem} id="about-heading"
            className="text-[clamp(1.8rem,4.3vw,3.5rem)] font-extrabold tracking-tight leading-[1.1] max-w-3xl">
            Over the past 5 years, we&apos;ve perfected our{' '}
            <span className="text-gradient">Marketing &amp; Digital</span> game to help businesses grow
          </m.h2>
        </m.div>

        {/* Stats grid */}
        <m.div variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <m.div key={stat.label} variants={staggerItem}>
              <StatCard {...stat} />
            </m.div>
          ))}
        </m.div>

        {/* Partners strip */}
        <m.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16">
          <p className="text-white/30 text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            Worked With Growing Brands
          </p>
          <div className="flex flex-wrap gap-3">
            {partners.map((p) => (
              <span key={p}
                className="px-4 py-2 rounded-xl border border-white/[0.08] bg-glass text-white/40 text-sm font-medium
                           hover:border-[#673DE6]/30 hover:text-white/60 transition-colors duration-200">
                {p}
              </span>
            ))}
          </div>
        </m.div>

        {/* Skill pill rows */}
        <m.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3">
          <p className="text-white/25 text-xs tracking-[0.25em] uppercase mb-2">What we do</p>
          {pillRows.map((pills, i) => (
            <PillRow key={i} pills={pills} reverse={i % 2 !== 0} />
          ))}
        </m.div>
      </div>
    </section>
  )
}
