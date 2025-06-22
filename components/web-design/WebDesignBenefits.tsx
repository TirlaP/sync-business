'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Zap, Eye, TrendingUp, Shield } from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Design modern al site-ului',
    description: 'Interfață contemporană care captează atenția și impresionează vizitatorii.',
  },
  {
    icon: Eye,
    title: 'Vizitatorii înțeleg rapid ideea ta',
    description: 'Structură clară și intuitivă care comunică eficient mesajul afacerii tale.',
  },
  {
    icon: TrendingUp,
    title: 'Conversii eficiente',
    description: 'Design optimizat pentru a transforma vizitatorii în clienți.',
  },
  {
    icon: Shield,
    title: 'Securitate și integrări',
    description: 'Protecție maximă și conectare ușoară cu alte platforme și servicii.',
  },
]

export default function WebDesignBenefits() {
  const { ref: sectionRef, isInView } = useScrollAnimation()

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Beneficiile serviciilor de web design <span className="gradient-text">SYNC</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="w-10 h-10 text-indigo-600" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function WebDesignPortfolio() {
  const { ref: sectionRef, isInView } = useScrollAnimation()

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 mb-8"
        >
          Nu există limită la creativitate
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-600"
        >
          Portofoliul nostru demonstrează capacitatea de a crea website-uri unice și memorabile
        </motion.p>
      </div>
    </section>
  )
}

export function WebDesignCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ești gata pentru website-ul tău de vis?
        </h2>
        <p className="text-xl text-white/90 mb-10">
          Hai să discutăm despre cum putem transforma ideile tale în realitate digitală
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center bg-white text-indigo-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1"
        >
          Solicită ofertă personalizată
        </a>
      </div>
    </section>
  )
}