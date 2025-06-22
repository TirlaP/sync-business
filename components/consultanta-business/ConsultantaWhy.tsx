'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Users, TrendingUp, Lightbulb, CheckCircle } from 'lucide-react'

const reasons = [
  {
    icon: Users,
    title: 'Alegi un partener care are puterea de a înțelege afacerea ta!',
    description: 'Experiență vastă în diverse industrii și modele de business.',
  },
  {
    icon: TrendingUp,
    title: 'Înțelegem afacerea ta foarte rapid și conturăm procesul de construire',
    description: 'Analiză rapidă și eficientă pentru soluții personalizate.',
  },
  {
    icon: Lightbulb,
    title: 'Avem o experiență de peste 5 ani în business',
    description: 'Know-how dovedit și rezultate concrete pentru clienții noștri.',
  },
]

export default function ConsultantaWhy() {
  const { ref: sectionRef, isInView } = useScrollAnimation()

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            De ce să alegi serviciile de consultanță?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-10 h-10 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
                
                <div className="flex justify-center mt-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}