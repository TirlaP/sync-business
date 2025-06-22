'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Target, Zap, FileText, Eye, Shield, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const benefits = [
  {
    icon: Target,
    title: 'Obții claritate în structura de construire a afacerii',
  },
  {
    icon: Zap,
    title: 'Construiești mult mai rapid afacerea evitând greșeli',
  },
  {
    icon: FileText,
    title: 'Realizarea unui plan de afaceri structurat și clar',
  },
  {
    icon: Eye,
    title: 'Privești afacerea din exterior și lucrezi LA afacere',
  },
  {
    icon: Shield,
    title: 'Îți definești structura, procesele și managementul',
  },
  {
    icon: TrendingUp,
    title: 'Realizezi tranziția de la angajat la antreprenor',
  },
]

export default function ConsultantaBenefits() {
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
            Beneficiile tale!
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">{benefit.title}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}