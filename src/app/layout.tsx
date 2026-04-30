// RSC — root layout. LazyMotion + MotionConfig wrap the entire app.
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Shadows_Into_Light } from 'next/font/google'
import './globals.css'
import { LazyMotion, domAnimation, MotionConfig } from 'motion/react'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const shadows = Shadows_Into_Light({
  subsets: ['latin'],
  variable: '--font-shadows',
  weight: '400',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RevEnComm | Transforming Businesses Through Digital Excellence',
  description:
    'RevEnComm is a digital growth partner focused on digital marketing, website solutions, creative strategy, and automation for measurable business results.',
  keywords: [
    'digital marketing',
    'website solution',
    'AI automation',
    'social media marketing',
    'brand promotion',
    'landing page design',
    'Bangladesh',
  ],
  openGraph: {
    title: 'RevEnComm | Digital Excellence Agency',
    description: 'Transforming businesses through digital marketing, website solutions, and practical automation.',
    type: 'website',
    url: 'https://revencomm.com',
  },
}

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ClientOnlyComponents from '@/components/home/ClientOnlyComponents'
import GlobalBackground from '@/components/layout/GlobalBackground'

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${shadows.variable}`}>
      <body className="bg-[#0A0A0F] text-white antialiased selection:bg-orange-500/30">
        <LazyMotion features={domAnimation} strict>
          <MotionConfig
            reducedMotion="user"
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlobalBackground />
            <ClientOnlyComponents />
            <Navbar />
            <main id="main-content">
              {children}
            </main>
            <Footer />
          </MotionConfig>
        </LazyMotion>
      </body>
    </html>
  )
}
