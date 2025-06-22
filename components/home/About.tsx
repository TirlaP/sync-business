'use client'

import { motion, useInView } from 'framer-motion'
import {
  Award,
  CheckCircle2,
  Clock,
  Rocket,
  Shield,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react'
import { useRef } from 'react'

const features = [
  {
    icon: CheckCircle2,
    title: 'Soluții Complete & Integrate',
    description: 'Toate serviciile esențiale pentru afacerea ta într-un singur loc - de la marketing la consultanță financiară.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: TrendingUp,
    title: 'Expertiză Dovedită',
    description: 'Echipă de specialiști cu experiență vastă în business development și implementare strategică.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Clock,
    title: 'Implementare Ultra-Rapidă',
    description: 'Înțelegem rapid modelul tău de business și implementăm soluții personalizate în timp record.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Zap,
    title: 'Eficiență & ROI Maxim',
    description: 'Optimizezi timpul și resursele, obținând rezultate superioare față de furnizorii separați.',
    color: 'from-orange-500 to-red-500',
  },
]

const stats = [
  {
    value: '8+',
    label: 'Ani de Experiență',
    icon: Award,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    value: '500+',
    label: 'Clienți Mulțumiți',
    icon: Users,
    color: 'from-purple-500 to-pink-500',
  },
  {
    value: '1200+',
    label: 'Proiecte Finalizate',
    icon: Target,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    value: '320%',
    label: 'ROI Mediu',
    icon: Rocket,
    color: 'from-orange-500 to-red-500',
  },
]

export default function About() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  
  const contentInView = useInView(contentRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-br from-pink-400/5 to-orange-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={contentInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 font-medium text-sm mb-8"
            >
              <Shield className="w-4 h-4" />
              <span>De Ce SYNC Business Agency?</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Cum ar fi să găsești{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                  toate componentele afacerii
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 20"
                >
                  <path
                    d="M0 15 Q150 0 300 15"
                    stroke="url(#aboutGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              {' '}într-un singur loc?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-600 mb-10 leading-relaxed"
            >
              Înțelegem că succesul afacerii tale depinde de o abordare integrată și profesionistă. 
              De aceea oferim soluții complete care acoperă toate aspectele critice ale businessului tău.
            </motion.p>

            <div className="space-y-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div 
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="group flex gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Stats & Visual */}
          <div className="relative">
              {/* Main Stats Card */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50" />
                
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-bold text-sm">Top Rated</span>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 font-medium text-sm mb-4">
                      <Sparkles className="w-4 h-4" />
                      <span>Rezultate Impresionante</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900">
                      Cifrele vorbesc de la sine
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => {
                      const Icon = stat.icon
                      return (
                        <div
                          key={index}
                          className="text-center group"
                        >
                          <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mb-4 shadow-lg hover:scale-105 transition-transform duration-200`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          
                          <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                            {stat.value}
                          </div>
                          
                          <div className="text-sm text-gray-600 font-medium">{stat.label}</div>

                          <div className="mt-2 mx-auto w-12 h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div className={`h-full bg-gradient-to-r ${stat.color} rounded-full`} />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Simple decorative elements */}
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl opacity-10" />
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-10" />
          </div>
        </div>
      </div>
    </section>
  )
}