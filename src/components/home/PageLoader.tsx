'use client'
// 'use client' — uses useState + useEffect + AnimatePresence for mount/unmount animation

import { useState, useEffect } from 'react'
import { m, AnimatePresence } from 'motion/react'

export default function PageLoader() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const onLoad = () => setLoaded(true)
    if (document.readyState === 'complete') {
      const timer = window.setTimeout(onLoad, 0)
      return () => window.clearTimeout(timer)
    }

    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])

  return (
    <AnimatePresence>
      {!loaded && (
        <m.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center gap-6"
          aria-live="polite"
          aria-label="Loading"
          role="status"
        >
          {/* Animated logo mark */}
          <m.div
            animate={{ scale: [0.9, 1.05, 1], opacity: [0.5, 1, 0.8, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-10 h-10 bg-white rounded-xl"
            aria-hidden="true"
          />
          <m.p
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-white/50 text-xs tracking-[0.3em] uppercase"
          >
            Loading
          </m.p>
        </m.div>
      )}
    </AnimatePresence>
  )
}
