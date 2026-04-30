'use client'
// 'use client' — useCountUp (rAF DOM writes) + scroll animations

import { m } from 'motion/react'
import { useCountUp } from '@/lib/use-count-up'
import { staggerContainer, staggerItem } from '@/lib/animation-variants'
import { Zap, Users, Award, CalendarCheck } from 'lucide-react'

const stats = [
  { value: 100, suffix: '%', label: 'Data-Driven Strategies', icon: Zap },
  { value: 24, suffix: '/7', label: 'Creative Innovation', icon: Users },
  { value: 10, suffix: 'X', label: 'Proven Growth Results', icon: Award },
  { value: 360, suffix: '°', label: 'Strategic Partnership', icon: CalendarCheck },
]

const partners = [
  'E-Commerce Brands', 'SaaS Platforms', 'Real Estate Agencies', 'Tech Startups',
  'Healthcare Clinics', 'Retail Businesses', 'B2B Services', 'Education Tech'
]

const pillRows = [
  ['Data Analytics', 'SEO Optimization', 'Meta Ads', 'TikTok Campaigns'],
  ['Brand Positioning', 'Creative Copywriting', 'Web Infrastructure', 'Chatbot Implementation'],
  ['Transparency', 'A/B Testing', 'Long-term Goals', 'Agile Workflows', 'Performance First'],
]

function StatCard({ value, suffix, label, icon: Icon }: (typeof stats)[0]) {
  const ref = useCountUp(value)
  return (
    <div
      className="bg-glass border border-white/[0.08] rounded-[20px] lg:rounded-[40px]
                 pt-4 pr-4 pl-5 pb-5 lg:pt-6 lg:pr-6 lg:pb-8 2xl:pt-8 2xl:pr-8 2xl:pl-10 2xl:pb-10
                 flex flex-col gap-3 hover:border-[#FF8A00]/30 transition-colors duration-300"
    >
      <div className="self-end">
        <div className="w-10 h-10 rounded-xl bg-[#FF8A00]/10 border border-[#FF8A00]/20 flex items-center justify-center">
          <Icon size={18} className="text-[#FF8A00]" />
        </div>
      </div>
      <div>
        <div className="text-[clamp(1.8rem,3.5vw,3rem)] font-extrabold text-white tabular-nums leading-[1] mb-1">
          <span ref={ref}>0</span>
          <span className="text-[#FF8A00]">{suffix}</span>
        </div>
        <p className="text-white/60 text-sm mt-3 font-semibold leading-tight">{label}</p>
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
            className="shrink-0 px-4 py-1.5 rounded-full border border-white/[0.08] text-white/40
                       text-xs font-semibold tracking-wide whitespace-nowrap bg-glass"
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
    <section id="about" className="relative pt-[clamp(80px,10vw,180px)] pb-12 px-5 md:px-10 overflow-hidden z-10"
      aria-labelledby="about-heading">

      {/* Section number watermark */}
      <span className="absolute right-10 top-10 font-black text-white/[0.015] select-none pointer-events-none leading-none
                       text-[clamp(100px,15vw,250px)]" aria-hidden="true">01</span>

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Section label & Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-24">
          <m.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[#FF8A00] text-xs font-bold tracking-[0.3em] uppercase">About RevEnComm</span>
              <div className="h-px w-12 bg-white/10" />
            </div>

            <h2 id="about-heading"
              className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-tight leading-[0.95] text-white">
              Transforming Businesses Through <br/>
              <span className="text-gradient">Digital Excellence</span>
            </h2>
          </m.div>

          <m.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8 lg:pt-16"
          >
            <p className="text-[clamp(1.1rem,1.5vw,1.4rem)] text-white/60 leading-relaxed font-medium border-l-2 border-[#FF8A00] pl-8">
              At RevEnComm, we&apos;re not just another digital marketing agency. We&apos;re your strategic partner in growth, combining cutting-edge technology with creative innovation to deliver measurable results that matter.
            </p>
            <div className="flex flex-wrap gap-4 pl-8">
              {['Strategy', 'Creative', 'Execution', 'Automation'].map((tag) => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-white/30 border border-white/10 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </m.div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-24">
          {stats.map((stat, i) => (
            <m.div 
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <StatCard {...stat} />
            </m.div>
          ))}
        </div>

        {/* Partners strip & Pill rows */}
        <div className="space-y-12">
          <m.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-4"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 mb-4">Focused On Growth, Clarity, And Partnerships</p>
            {pillRows.map((pills, i) => (
              <PillRow key={i} pills={pills} reverse={i % 2 !== 0} />
            ))}
          </m.div>
        </div>
      </div>
    </section>
  )
}
