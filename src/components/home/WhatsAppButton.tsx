'use client'
// 'use client' — uses m.a for spring entrance animation + CSS pulse rings.
// Delayed entrance (2.5s) avoids competing with above-fold LCP resources.

import { m } from 'motion/react'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <m.a
      href="https://wa.me/8801806673304"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.5, type: 'spring', stiffness: 300, damping: 22 }}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full
                 flex items-center justify-center shadow-lg shadow-black/30
                 hover:scale-110 transition-transform duration-200
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      {/* Pulse rings — CSS animation, compositor thread (transform + opacity) */}
      <span
        className="absolute inset-0 rounded-full bg-[#25D366]"
        style={{ animation: 'pulse-ring 2s ease-out infinite' }}
        aria-hidden="true"
      />
      <span
        className="absolute inset-0 rounded-full bg-[#25D366]"
        style={{ animation: 'pulse-ring 2s ease-out infinite 0.7s' }}
        aria-hidden="true"
      />
      <MessageCircle size={24} className="text-white relative z-10 fill-white" />
    </m.a>
  )
}
