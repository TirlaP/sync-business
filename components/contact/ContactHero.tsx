'use client'

import { 
  Mail, 
  MapPin, 
  Phone, 
  MessageCircle
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ContactHero() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Să vorbim despre
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              proiectul tău
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
          >
            Echipa noastră te va contacta în următoarele 2 ore cu o strategie personalizată pentru afacerea ta.
          </motion.p>

          {/* Contact Information Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { 
                icon: Phone, 
                label: 'Telefon', 
                value: '+40 XXX XXX XXX', 
                color: 'from-green-500 to-emerald-500' 
              },
              { 
                icon: Mail, 
                label: 'Email', 
                value: 'contact@syncbusiness.ro', 
                color: 'from-blue-500 to-cyan-500' 
              },
              { 
                icon: MapPin, 
                label: 'Locația', 
                value: 'Suceava, România', 
                color: 'from-purple-500 to-pink-500' 
              },
            ].map((contact, index) => (
              <motion.div 
                key={index} 
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${contact.color} rounded-xl mb-4`}>
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm text-gray-500 mb-1">{contact.label}</div>
                <div className="text-lg font-semibold text-gray-900">{contact.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}