import Link from 'next/link'
import Image from 'next/image'
import { getContentList, CaseStudy } from '@/lib/content'
import { ArrowUpRight } from 'lucide-react'

export const metadata = {
  title: 'Case Studies | RevEnComm',
  description: 'Explore our portfolio of high-conversion digital experiences and growth campaigns.',
}

export default function CaseStudiesPage() {
  const caseStudies = getContentList<CaseStudy>('case-studies')

  return (
    <>
      <main id="main-content" className="pt-32 pb-24 bg-[#0A0A0F] min-h-screen selection:bg-[#FF8A00]/30 selection:text-white">
        <div className="max-w-[1400px] mx-auto px-5 md:px-[25px]">
          
          <div className="mb-20 max-w-4xl border-b border-white/5 pb-16 relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[#FF8A00] text-xs font-black tracking-[0.4em] uppercase">Strategic Archives</span>
              <div className="h-px w-12 bg-[#FF8A00]/20" />
            </div>
            <h1 className="text-[clamp(3rem,6vw,6rem)] font-black tracking-tighter text-white mb-8 leading-[0.95] uppercase">
              Proven <br/>
              <span className="italic font-light text-white/30">Growth</span> Systems.
            </h1>
            <p className="text-white/40 text-lg md:text-xl font-bold uppercase tracking-tight max-w-2xl leading-relaxed">
              We don&apos;t just build platforms; we engineer scalable revenue ecosystems. Explore our documented transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            {caseStudies.map((study) => (
              <Link 
                href={`/case-studies/${study.slug}`} 
                key={study.slug}
                className="group flex flex-col bg-white/[0.01] backdrop-blur-3xl border border-white/5 rounded-[48px] overflow-hidden hover:border-[#FF8A00]/40 transition-all duration-500 shadow-2xl"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image 
                    src={study.coverImage} 
                    alt={study.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[40%] group-hover:grayscale-0 opacity-80 group-hover:opacity-100" 
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent opacity-90" />
                  
                  <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                    <div className="flex gap-2">
                      <span className="bg-black/60 backdrop-blur-md border border-white/10 text-[#FF8A00] text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl">
                        {study.service}
                      </span>
                    </div>
                    <div className="bg-[#FF8A00] text-white text-[11px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-xl shadow-orange-500/20">
                      {study.metric}
                    </div>
                  </div>
                </div>
                
                <div className="p-10 md:p-12 flex flex-col flex-grow">
                  <p className="text-[#FF8A00] text-xs font-black tracking-[0.3em] uppercase mb-4">{study.client}</p>
                  <h3 className="text-2xl lg:text-4xl font-black text-white mb-6 leading-[1.1] tracking-tight group-hover:text-[#FF8A00] transition-colors uppercase">
                    {study.title}
                  </h3>
                  <p className="text-white/30 text-base md:text-lg font-medium leading-relaxed mb-10 line-clamp-3">
                    {study.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-white text-xs font-black tracking-widest uppercase mt-auto pt-8 border-t border-white/5">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FF8A00] group-hover:text-white transition-all group-hover:rotate-45">
                      <ArrowUpRight size={20} />
                    </div>
                    View Strategic Breakdown
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>
    </>
  )
}
