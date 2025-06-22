'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import SolicitaOfertaModal from '../layout/SolicitaOfertaModal'

export default function MarketingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOfertaModalOpen, setIsOfertaModalOpen] = useState(false)
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Sparkles className={`w-16 h-16 text-white/80 mx-auto mb-6 ${isVisible ? 'animate-bounce' : 'opacity-0'}`} />
        
        <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          Ești gata să transformi afacerea ta într-un imperiu?
        </h2>
        
        <p className={`text-xl text-white/90 mb-10 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
          Hai să discutăm despre cum putem crește vizibilitatea și vânzările tale
        </p>

        <button 
          onClick={() => setIsOfertaModalOpen(true)}
          className={`inline-flex items-center justify-center bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 group ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          Solicită ofertă personalizată
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Modal */}
        <SolicitaOfertaModal 
          isOpen={isOfertaModalOpen} 
          onClose={() => setIsOfertaModalOpen(false)} 
        />
      </div>
    </section>
  )
}