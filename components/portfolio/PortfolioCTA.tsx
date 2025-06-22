'use client'

import Link from 'next/link'
import { ArrowRight, FileText } from 'lucide-react'

export default function PortfolioCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FileText className="w-16 h-16 text-white/80 mx-auto mb-6" />
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Vrei să vezi mai multe detalii?
        </h2>
        
        <p className="text-xl text-white/90 mb-10">
          Solicită portofoliul complet cu studii de caz detaliate și rezultate măsurabile
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 group"
          >
            Solicită portofoliu detaliat
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href="/servicii" 
            className="inline-flex items-center justify-center bg-transparent text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
          >
            Vezi serviciile noastre
          </Link>
        </div>
      </div>
    </section>
  )
}