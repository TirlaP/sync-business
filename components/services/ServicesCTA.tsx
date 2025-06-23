'use client'

import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { useState } from 'react'
import SolicitaOfertaModal from '../layout/SolicitaOfertaModal'

export default function ServicesCTA() {
  const [isOfertaModalOpen, setIsOfertaModalOpen] = useState(false)
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Phone className="w-16 h-16 text-white/80 mx-auto mb-6 animate-bounce" />
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Nu știi de unde să începi?
        </h2>
        
        <p className="text-xl text-white/90 mb-10">
          Hai să discutăm despre nevoile afacerii tale și să găsim împreună cea mai bună soluție
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => setIsOfertaModalOpen(true)}
            className="inline-flex items-center justify-center bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 group"
          >
            Solicită consultanță gratuită
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a 
            href="tel:+40745823960" 
            className="inline-flex items-center justify-center bg-transparent text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Phone className="mr-2 w-5 h-5" />
            Sună-ne acum
          </a>
        </div>

        {/* Modal */}
        <SolicitaOfertaModal 
          isOpen={isOfertaModalOpen} 
          onClose={() => setIsOfertaModalOpen(false)} 
        />
      </div>
    </section>
  )
}