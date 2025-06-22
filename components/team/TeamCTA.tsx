'use client'

import Link from 'next/link'
import { ArrowRight, Users } from 'lucide-react'

export default function TeamCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Users className="w-16 h-16 text-white/80 mx-auto mb-6" />
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Vrei să faci parte din echipa noastră?
        </h2>
        
        <p className="text-xl text-white/90 mb-10">
          Sau poate ai un proiect în care putem colabora împreună
        </p>

        <Link 
          href="/contact" 
          className="inline-flex items-center justify-center bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 group"
        >
          Hai să discutăm
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}