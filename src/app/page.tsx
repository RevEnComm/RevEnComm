// RSC — root page. Composes all sections.
// Only HeroSection + Navbar are statically imported (above-the-fold critical path).
// All below-fold sections are dynamically imported to keep initial JS bundle minimal.
// ssr: false components are wrapped in ClientOnlyComponents (Next.js 16 RSC constraint).

import dynamic from 'next/dynamic'
import HeroSection from '@/components/home/HeroSection'

// Dynamically imported — below-the-fold, lazy-loaded (SSR is fine for these)
const TrustMarquee = dynamic(() => import('@/components/home/TrustMarquee'))
const AboutSection = dynamic(() => import('@/components/home/AboutSection'))
const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection'))
const ServicesSection = dynamic(() => import('@/components/home/ServicesSection'))
const CategoriesSection = dynamic(() => import('@/components/home/CategoriesSection'))
const TestimonialsSection = dynamic(() => import('@/components/home/TestimonialsSection'))
const BlogSection = dynamic(() => import('@/components/home/BlogSection'))
const FaqSection = dynamic(() => import('@/components/home/FaqSection'))
const CtaBanner = dynamic(() => import('@/components/home/CtaBanner'))
const NewsletterSection = dynamic(() => import('@/components/home/NewsletterSection'))

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustMarquee />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <CategoriesSection />
      <TestimonialsSection />
      <FaqSection />
      <BlogSection />
      <CtaBanner />
      {/* <NewsletterSection /> */}
    </>
  )
}
