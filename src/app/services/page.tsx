'use client'

import { m } from 'motion/react'
import { Megaphone, Palette, Globe, Bot, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: 'Digital Marketing',
    desc: 'Scale your revenue with data-driven media buying and precision targeting across Meta, Google, and TikTok.',
    icon: Megaphone,
    href: '/services/digital-marketing',
    accent: '#38BDF8',
    stats: '150% Avg. ROI'
  },
  {
    title: 'Content Solution',
    desc: 'Bespoke brand narratives and 4K cinematic production designed to stop the scroll and build loyalty.',
    icon: Palette,
    href: '/services/content-solution',
    accent: '#E879F9',
    stats: '10M+ Reach'
  },
  {
    title: 'Website & Software',
    desc: 'High-performance digital engines, from rapid landing pages to complex enterprise SaaS architectures.',
    icon: Globe,
    href: '/services/website-software',
    accent: '#2DD4BF',
    stats: '0.8s Load Time'
  },
  {
    title: 'AI & Automation',
    desc: 'Autonomous business systems, custom RAG knowledge-bases, and personal AI executive agents.',
    icon: Bot,
    href: '/services/ai-automation',
    accent: '#8B5CF6',
    stats: '40hr/wk Saved'
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] pt-32 pb-24 overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#38BDF8]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#8B5CF6]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 relative z-10">
        <div className="max-w-3xl mb-20">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-8xl font-black tracking-tight mb-8 leading-[0.9]">
              Growth <br />
              <span className="text-white/20 italic font-light">Categorized.</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/50 leading-relaxed">
              We've refined our expertise into four primary pillars of digital excellence. Select a category to explore our detailed methodologies and tactical packages.
            </p>
          </m.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <m.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link 
                href={service.href}
                className="group relative block h-full p-10 lg:p-16 rounded-[40px] lg:rounded-[56px] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden"
              >
                {/* Hover Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ 
                    background: `radial-gradient(circle at center, ${service.accent}08 0%, transparent 70%)` 
                  }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-12">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center border transition-transform duration-500 group-hover:scale-110"
                      style={{ 
                        backgroundColor: `${service.accent}15`,
                        borderColor: `${service.accent}30`
                      }}
                    >
                      <service.icon size={32} style={{ color: service.accent }} />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-1">Impact</span>
                      <span className="text-sm font-bold text-white/60">{service.stats}</span>
                    </div>
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-black mb-6 group-hover:translate-x-2 transition-transform duration-500">
                    {service.title}
                  </h2>
                  <p className="text-lg text-white/40 leading-relaxed mb-10 flex-1">
                    {service.desc}
                  </p>

                  <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-white/30 group-hover:text-white transition-colors duration-300">
                    Explore Methodology
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </m.div>
          ))}
        </div>

        {/* Global CTA */}
        <m.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 lg:mt-32 p-10 lg:p-20 rounded-[48px] lg:rounded-[80px] bg-white/[0.02] border border-white/5 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8]/5 to-[#8B5CF6]/5" />
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-6xl font-black mb-8 leading-tight">
              Ready to redefine <br className="hidden lg:block"/> your digital footprint?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-6 bg-white text-black font-black px-10 py-5 rounded-full hover:scale-105 active:scale-95 transition-transform"
            >
              <span className="text-[12px] uppercase tracking-[0.2em]">Book a Consultation</span>
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </m.div>
      </div>
    </main>
  )
}
