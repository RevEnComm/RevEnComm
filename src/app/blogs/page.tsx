import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] flex items-center justify-center pt-32 pb-16 px-5 md:px-[25px]">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Our Blog</h1>
          <p className="text-white/50 text-lg">Insights, stories, and growth strategies coming soon.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
