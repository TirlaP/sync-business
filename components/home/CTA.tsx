'use client'

import Link from 'next/link'
import { ArrowRight, Download, Star } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import SolicitaOfertaModal from '../layout/SolicitaOfertaModal'
import EbookModal from '../layout/EbookModal'

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOfertaModalOpen, setIsOfertaModalOpen] = useState(false)
  const [isEbookModalOpen, setIsEbookModalOpen] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Stars decoration */}
        <div className="flex justify-center mb-6">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-6 h-6 text-yellow-400 fill-yellow-400 ${isVisible ? 'animate-scale' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>

        <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          Scalăm împreună afacerea ta la următorul nivel!
        </h2>
        
        <p className={`text-xl text-white/90 mb-10 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
          Soluții INTEGRATE pentru business-uri de succes.
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <button 
            onClick={() => setIsOfertaModalOpen(true)}
            className="inline-flex items-center justify-center bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 group"
          >
            Solicită ofertă
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => setIsEbookModalOpen(true)}
            className="inline-flex items-center justify-center bg-transparent text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Download className="mr-2 w-5 h-5" />
            Descarcă ebook gratuit
          </button>
        </div>

        {/* Modals */}
        <SolicitaOfertaModal 
          isOpen={isOfertaModalOpen} 
          onClose={() => setIsOfertaModalOpen(false)} 
        />
        <EbookModal 
          isOpen={isEbookModalOpen} 
          onClose={() => setIsEbookModalOpen(false)} 
        />
      </div>
    </section>
  )
}