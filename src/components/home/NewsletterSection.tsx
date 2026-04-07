'use client'
// 'use client' — uses useState for form + submitted state + AnimatePresence icon swap

import { useState, FormEvent } from 'react'
import { m, AnimatePresence } from 'motion/react'
import { Check, ArrowRight } from 'lucide-react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email || loading) return
    setLoading(true)
    // Simulate API call — replace with actual endpoint
    await new Promise((r) => setTimeout(r, 800))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section
      id="contact"
      className="py-20 px-6 border-t border-white/[0.06]"
      aria-labelledby="newsletter-heading"
    >
      <div className="max-w-2xl mx-auto text-center">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-white/40 text-sm font-medium tracking-widest uppercase mb-4">
            Get in touch
          </p>
          <h2
            id="newsletter-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Book your free consultation
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-10">
            Tell us a bit about your business and we&apos;ll follow up with practical next steps around
            digital marketing, website solutions, or automation.
          </p>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <m.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                noValidate
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  aria-label="Email address"
                  className="flex-1 bg-white/[0.05] border border-white/[0.12] rounded-xl px-4 py-3
                             text-white text-sm placeholder:text-white/30 outline-none
                             focus:border-white/30 focus:bg-white/[0.08] transition-colors duration-200
                             min-h-[44px]"
                />
                <m.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="flex items-center justify-center gap-2 bg-white text-black font-semibold
                             px-6 py-3 rounded-xl text-sm shrink-0 min-h-[44px] min-w-[120px]
                             disabled:opacity-60 disabled:cursor-not-allowed
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="Submit consultation request"
                >
                  <AnimatePresence mode="wait">
                    {loading ? (
                      <m.span
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <span className="w-3 h-3 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                        Sending
                      </m.span>
                    ) : (
                      <m.span
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="flex items-center gap-2"
                      >
                        Request Consultation <ArrowRight size={14} />
                      </m.span>
                    )}
                  </AnimatePresence>
                </m.button>
              </m.form>
            ) : (
              <m.div
                key="success"
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-3"
                role="status"
                aria-live="polite"
              >
                <div className="w-12 h-12 rounded-full bg-white/[0.1] border border-white/20
                                flex items-center justify-center">
                  <Check size={20} className="text-white" />
                </div>
                <p className="text-white font-semibold">Request received</p>
                <p className="text-white/50 text-sm">
                  Thanks. RevEnComm will reach out using the details you provided.
                </p>
              </m.div>
            )}
          </AnimatePresence>
        </m.div>
      </div>
    </section>
  )
}
