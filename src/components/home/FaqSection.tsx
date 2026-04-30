'use client'

import { useState } from 'react'
import { m, AnimatePresence } from 'motion/react'
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/lib/animation-variants'

const faqs = [
  {
    id: '1',
    question: 'Do you use one-size-fits-all packages?',
    answer: 'No. Every business is different, so we don’t use one-size-fits-all packages. We analyse your industry, goals, budget, and audience first, then create a strategy tailored specifically for your business.',
  },
  {
    id: '2',
    question: 'What types of businesses do you work with?',
    answer: 'We work with businesses at different stages of growth from small and growing brands to established and international companies. Our focus is not on company size, but on building the right strategy for where your business is today and where you want it to go next.',
  },
  {
    id: '3',
    question: 'How fast can I see results?',
    answer: 'It depends on the service and your market. Paid campaigns usually show results a bit earlier, while SEO and organic growth take longer. Then again, we focus on sustainable growth, not short-term spikes. For that reason, you have to work with us for a long time.',
  },
  {
    id: '4',
    question: 'Why should we invest in digital marketing with you?',
    answer: 'We don\'t believe in "spending" on marketing; we believe in investing in growth. Our strategies are strictly data-backed to minimize waste and maximize ROI. We focus on generating actual sales and leads, not just vanity metrics like "likes," ensuring every penny you put in works harder for your business.',
  },
  {
    id: '5',
    question: 'How does AI & Automation benefit my business?',
    answer: 'In the age of AI, manual work slows you down. Our solution acts as your 24/7 smart team—deploying intelligent chatbots to engage customers, automating lead collection, and even scheduling meetings directly into your calendar. We also automate social media content creation to keep your presence active effortlessly.',
  },
]

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('1')

  return (
    <section id="faq" className="relative py-[clamp(70px,8.6vw,150px)] px-5 md:px-[25px] bg-[#0A0A0F] overflow-hidden"
      aria-labelledby="faq-heading">

      {/* Section number watermark */}
      <span className="absolute right-6 top-6 font-extrabold text-white/[0.025] select-none pointer-events-none leading-none
                       text-[clamp(80px,12vw,160px)]" aria-hidden="true">05</span>

      <div className="max-w-[1000px] mx-auto relative z-10">
        <m.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-14 text-center">
          <m.div variants={staggerItem} className="flex flex-col items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <HelpCircle size={24} className="text-[#673DE6]" />
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/20" />
              <span className="text-white/40 text-sm font-semibold tracking-widest uppercase">05 FAQ</span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-white/20" />
            </div>
          </m.div>

          <m.h2 variants={staggerItem} id="faq-heading"
            className="text-[clamp(2rem,6vw,4.5rem)] font-extrabold tracking-tight leading-[1] mb-6">
            Frequently Asked Questions
          </m.h2>
          
          <m.p variants={staggerItem} className="text-white/45 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services, growth strategies, and how we can elevate your business.
          </m.p>
        </m.div>

        <m.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="flex flex-col gap-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <m.div key={faq.id} variants={staggerItem}
                className={`rounded-[20px] border transition-all duration-300 overflow-hidden bg-glass
                  ${isOpen ? 'border-[#673DE6]/40 bg-[#673DE6]/5' : 'border-white/[0.06] hover:border-white/15'}`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left px-6 lg:px-8 py-5 lg:py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#673DE6]"
                >
                  <span className={`font-semibold text-[15px] lg:text-lg transition-colors duration-200 ${isOpen ? 'text-white' : 'text-white/80'}`}>
                    {faq.question}
                  </span>
                  <m.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300
                      ${isOpen ? 'bg-[#673DE6] text-white' : 'bg-white/5 text-white/40'}`}
                  >
                    <ChevronDown size={16} />
                  </m.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                        <div className="h-px w-full bg-white/[0.06] mb-5" />
                        <p className="text-white/60 leading-relaxed text-sm lg:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            )
          })}
        </m.div>
        
        <m.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 text-center">
            <m.p variants={staggerItem} className="text-white/50 mb-4 text-sm">Still have questions?</m.p>
            <m.a variants={staggerItem} href="#contact"
              className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 text-white font-medium
                         px-6 py-3 rounded-full text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#673DE6]">
              <MessageCircle size={16} className="text-[#673DE6]" />
              Reach out to our team
            </m.a>
        </m.div>
      </div>
    </section>
  )
}
