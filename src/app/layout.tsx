// RSC — root layout. LazyMotion + MotionConfig wrap the entire app.
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { LazyMotion, domAnimation, MotionConfig } from 'motion/react'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'RevEnComm — Transforming Businesses Through Digital Excellence',
  description:
    'RevEnComm is a full-service digital marketing, content, web development, and AI automation agency. Data-driven strategies that drive real growth.',
  keywords: [
    'digital marketing',
    'web development',
    'AI automation',
    'social media marketing',
    'SEO',
    'content solutions',
    'Bangladesh',
  ],
  openGraph: {
    title: 'RevEnComm — Digital Excellence Agency',
    description: 'Transforming businesses through digital marketing, web development, and AI automation.',
    type: 'website',
    url: 'https://revencomm.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="bg-bg text-white antialiased">
        <LazyMotion features={domAnimation} strict>
          <MotionConfig
            reducedMotion="user"
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </MotionConfig>
        </LazyMotion>
      </body>
    </html>
  )
}
