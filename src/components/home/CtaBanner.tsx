// RSC — static section. No 'use client' needed.

import { ArrowRight, Sparkles } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="relative py-[clamp(70px,8.6vw,150px)] px-5 md:px-[25px] overflow-hidden"
      aria-labelledby="cta-heading">

      {/* Glow */}
      <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" aria-hidden="true" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Gradient border card */}
        <div className="gradient-border-card">
          <div className="px-8 py-16 md:px-16 text-center rounded-[20px]">

            <div className="inline-flex items-center gap-2 bg-[#673DE6]/10 border border-[#673DE6]/25
                            rounded-full px-4 py-1.5 mb-8">
              <Sparkles size={13} className="text-[#673DE6]" aria-hidden="true" />
              <span className="text-[#a78bf5] text-xs font-semibold tracking-wide">
                Limited spots — Q2 2026
              </span>
            </div>

            <h2 id="cta-heading"
              className="text-[clamp(2rem,6vw,4rem)] font-extrabold tracking-tight leading-[1.05] mb-6">
              Ready to{' '}
              <span className="text-gradient">Transform</span>{' '}
              your business?
            </h2>

            <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto mb-10">
              We take on a limited number of new clients each quarter. If you&apos;re serious about growing
              your business through digital marketing, web development, or AI — let&apos;s talk.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact"
                className="inline-flex items-center gap-2.5 bg-[#673DE6] text-white font-semibold
                           px-8 py-4 rounded-xl text-sm hover:bg-[#5530c4] transition-colors
                           duration-200 min-h-[52px] focus-visible:outline-none focus-visible:ring-2
                           focus-visible:ring-[#673DE6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#13131f]">
                Get a Free Consultation <ArrowRight size={16} />
              </a>
              <a href="#portfolio"
                className="inline-flex items-center gap-2 border border-white/[0.12] text-white/60
                           hover:text-white hover:border-white/25 transition-colors duration-200
                           px-8 py-4 rounded-xl text-sm min-h-[52px] focus-visible:outline-none
                           focus-visible:ring-2 focus-visible:ring-white">
                See our work
              </a>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/[0.06]">
              {['NDA on request', 'No lock-in contracts', '2-week onboarding', 'Money-back guarantee'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/30 text-xs">
                  <div className="w-1 h-1 rounded-full bg-[#673DE6]" aria-hidden="true" />
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
