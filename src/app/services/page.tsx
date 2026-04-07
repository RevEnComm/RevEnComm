import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] flex items-center justify-center pt-32 pb-16 px-5 md:px-[25px]">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Our Services</h1>
          <p className="text-white/50 text-lg">Detailed service methodologies and offerings coming soon.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
