'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { MessageSquare, FileText, Settings } from 'lucide-react'

const processSteps = [
  {
    icon: MessageSquare,
    title: 'Pasul 1',
    description: 'Ședințe de consultanță cu durata de 1.5 ore/ședință 1 la 1 în privat în care discutăm concret pe structura afacerii',
  },
  {
    icon: FileText,
    title: 'Pasul 2',
    description: 'Realizăm și planul de business dacă este cazul',
  },
  {
    icon: Settings,
    title: 'Pasul 3',
    description: 'Implementăm concret și procesele',
  },
]

export function ConsultantaProcess() {
  const { ref: sectionRef, isInView } = useScrollAnimation()

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cum funcționează?
          </h2>
        </motion.div>

        <div className="space-y-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function ConsultantaTestimonials() {
  const { ref: sectionRef, isInView } = useScrollAnimation()

  const testimonials = [
    {
      author: 'Ilona Andreolu',
      text: 'Mulțumesc Mihai pentru ședințele de consultanță one to one în care am clarificat extrem de multe lucruri din afacerea mea și în care am învățat să gândesc afacerii și la nivelul strategic de importanță. Practic, nu teorii! Mulțumesc!',
    },
    {
      author: 'Doru Alti Ili',
      text: 'Recomand cu toată încrederea echipa de la Cont24. Sunt foarte mulțumit de serviciul furnizat în ultimele luni, în special Mihai Mailerian pentru prezența activă și implementare necesare.',
    },
  ]

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
            Recenzii
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <p className="text-gray-600 italic mb-6">&quot;{testimonial.text}&quot;</p>
              <p className="font-semibold text-primary-600">- {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ConsultantaCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ești gata să îți dezvolți afacerea strategic?
        </h2>
        <p className="text-xl text-white/90 mb-10">
          Hai să discutăm despre cum putem transforma viziunea ta în realitate
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1"
        >
          Solicită consultanță
        </a>
      </div>
    </section>
  )
}

export default ConsultantaProcess