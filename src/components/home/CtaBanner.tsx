'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function CtaBanner() {
  return (
    <section className="relative py-[clamp(80px,10vw,180px)] px-5 md:px-[25px] overflow-hidden"
      aria-labelledby="cta-heading">

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF8A00]/10 blur-[120px] rounded-full opacity-30" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[48px] overflow-hidden shadow-2xl">
          <div className="px-8 py-20 md:px-20 text-center relative overflow-hidden">
            
            {/* Watermark */}
            <div className="absolute -bottom-10 -right-10 text-[180px] font-black text-white/[0.015] select-none pointer-events-none leading-none uppercase">
              GROW
            </div>

            <div className="inline-flex items-center gap-2 bg-[#FF8A00]/10 border border-[#FF8A00]/20
                            rounded-full px-5 py-2 mb-10">
              <Sparkles size={14} className="text-[#FF8A00]" aria-hidden="true" />
              <span className="text-[#FF8A00] text-[10px] font-black uppercase tracking-[0.2em]">
                Strategic Growth Partnership
              </span>
            </div>

            <h2 id="cta-heading"
              className="text-[clamp(2.5rem,7vw,5rem)] font-black tracking-tighter leading-[0.95] mb-10 text-white uppercase">
              Ready to scale with a <br/>
              <span className="italic font-light text-white/30">Force Multiplier</span> team?
            </h2>

            <p className="text-white/40 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 font-bold uppercase tracking-tight">
              If you want stronger digital visibility and a system that engineers predictable revenue, let&apos;s map out your roadmap.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-[#FF8A00] text-white font-black
                           px-10 py-5 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-[#FF9A20] transition-all
                           duration-300 shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-105">
                Launch Consultation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="/case-studies"
                className="inline-flex items-center gap-3 border border-white/10 text-white/40
                           hover:text-white hover:border-white/20 transition-all duration-300
                           px-10 py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] backdrop-blur-md">
                See our work
              </a>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap justify-center gap-10 mt-16 pt-10 border-t border-white/5">
              {['Tailored strategy', 'Practical execution', 'Data-driven insight', 'Business-first thinking'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/20 text-[10px] font-black uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
