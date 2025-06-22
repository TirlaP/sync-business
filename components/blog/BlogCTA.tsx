'use client'

import Link from 'next/link'
import { Download, ArrowRight } from 'lucide-react'

export default function BlogCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-purple-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Scalăm împreună afacerea ta la următorul nivel!
        </h2>
        
        <p className="text-xl text-white/90 mb-10">
          Soluții INTEGRATE pentru business-uri de succes.
        </p>

        <Link 
          href="/contact" 
          className="inline-flex items-center justify-center bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 group"
        >
          <Download className="mr-2 w-5 h-5" />
          Descarcă ebook gratuit
        </Link>
      </div>
    </section>
  )
}