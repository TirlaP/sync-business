'use client'

import { useEffect, useState } from 'react'
import { Code, Palette, ShoppingCart, Shield, Globe, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WebDesignHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-200 rounded-full blur-3xl opacity-30"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-30"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full mb-6"
        >
          <Code className="w-5 h-5 text-indigo-600 mr-2" />
          <span className="text-indigo-700 font-medium">WEB DESIGN PROFESIONAL</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
        >
          Web Design
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
        >
          Optează pentru soluțiile noastre de web design pentru a-ți consolida prezența online și a inspira încredere în marca ta. Construim site-uri web care atrag și convertesc, pregătind-ți afacerea pentru succesul în mediul digital.
        </motion.p>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center space-x-3">
            <Zap className="w-8 h-8 text-indigo-600" />
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-gray-600">Responsive Design</div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Shield className="w-8 h-8 text-indigo-600" />
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-900">SSL</div>
              <div className="text-gray-600">Securitate Garantată</div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Globe className="w-8 h-8 text-indigo-600" />
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-900">SEO</div>
              <div className="text-gray-600">Optimizare Completă</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}