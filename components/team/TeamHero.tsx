'use client'

import { useEffect, useState } from 'react'
import { Users, Heart } from 'lucide-react'

export default function TeamHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6 animate-fade-in">
          <Users className="w-5 h-5 text-white mr-2" />
          <span className="text-white font-medium">ECHIPA SYNC</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-up">
          Hai să ne cunoaștem!
        </h1>

        <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Suntem o echipă de profesioniști pasionați care transformă viziuni în realitate
        </p>
      </div>
    </section>
  )
}