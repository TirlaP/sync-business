'use client'

import { 
  Send, 
  Target, 
  Lightbulb, 
  Rocket, 
  ArrowRight, 
  CheckCircle,
  Clock,
  Users,
  Sparkles,
  Zap
} from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import SolicitaOfertaModal from '../layout/SolicitaOfertaModal'

const steps = [
  {
    icon: Send,
    title: 'Descoperire & Analiză',
    subtitle: 'Pasul 1',
    description: 'Analizăm în profunzime modelul tău de business, obiectivele și provocările actuale pentru a înțelege perfect nevoile tale.',
    duration: '1-2 zile',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50',
  },
  {
    icon: Target,
    title: 'Strategie & Planificare',
    subtitle: 'Pasul 2',
    description: 'Creăm o strategie personalizată și un roadmap detaliat care să te ghideze către atingerea obiectivelor tale.',
    duration: '3-5 zile',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50',
  },
  {
    icon: Lightbulb,
    title: 'Soluții & Recomandări',
    subtitle: 'Pasul 3',
    description: 'Îți prezentăm soluțiile integrate și serviciile specifice necesare pentru implementarea strategiei tale.',
    duration: '2-3 zile',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'from-emerald-50 to-teal-50',
  },
  {
    icon: Rocket,
    title: 'Implementare & Scalare',
    subtitle: 'Pasul 4',
    description: 'Implementăm soluțiile și te sprijinim în execuție pentru a asigura succesul și creșterea sustenabilă.',
    duration: 'Ongoing',
    color: 'from-orange-500 to-red-500',
    bgColor: 'from-orange-50 to-red-50',
  },
]

const benefits = [
  { icon: Clock, text: 'Implementare în 7-14 zile' },
  { icon: Users, text: 'Echipă dedicată pentru fiecare proiect' },
  { icon: CheckCircle, text: 'Rezultate măsurabile garantate' },
]

export default function Process() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const stepsRef = useRef(null)
  const benefitsRef = useRef(null)
  const [isOfertaModalOpen, setIsOfertaModalOpen] = useState(false)
  
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const titleInView = useInView(titleRef, { once: true, margin: "-50px" })
  const stepsInView = useInView(stepsRef, { once: true, margin: "-50px" })
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-50px" })

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-br from-orange-400/5 to-pink-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 font-medium text-sm mb-8"
          >
            <Zap className="w-4 h-4" />
            <span>Procesul Nostru Eficient</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Cum funcționează
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              colaborarea cu noi?
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Un proces simplu, transparent și eficient care te ghidează pas cu pas către succesul afacerii tale
          </motion.p>
        </div>

        {/* Process Steps */}
        <div ref={stepsRef} className="relative mb-20">
          {/* Animated connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-200 via-purple-200 via-emerald-200 to-orange-200 rounded-full"
              initial={{ scaleX: 0 }}
              animate={stepsInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div 
                  key={step.title}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={stepsInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.2 + index * 0.1,
                    ease: "easeOut"
                  }}
                  className="group relative"
                >
                  <motion.div
                    className={`relative bg-gradient-to-br ${step.bgColor} rounded-3xl p-8 border border-white/50 shadow-lg backdrop-blur-sm transition-all duration-500 overflow-hidden h-full`}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    {/* Step number badge */}
                    <div className="absolute -top-4 -right-4 z-10">
                      <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                    </div>

                    {/* Duration badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-white/80 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {step.duration}
                      </div>
                    </div>

                    {/* Gradient overlay on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                    />

                    {/* Icon */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl mb-6 shadow-lg`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 10,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    {/* Content */}
                    <div className="mb-4">
                      <span className={`text-sm font-semibold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                        {step.subtitle}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3 group-hover:text-gray-800 transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Optimized arrow - Removed continuous animation */}
                    {index < steps.length - 1 && (
                      <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block">
                        <div className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200`}>
                          <ArrowRight className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    )}

                    {/* Animated progress ring */}
                    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${step.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={stepsInView ? { width: "100%" } : { width: 0 }}
                        transition={{ delay: 0.8 + index * 0.2, duration: 1, ease: "easeOut" }}
                      />
                    </div>

                    {/* Optimized hover effect - Simple static dots */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className={`absolute top-4 right-4 w-1 h-1 bg-gradient-to-r ${step.color} rounded-full`} />
                      <div className={`absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r ${step.color} rounded-full`} />
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Benefits Section */}
        <motion.div
          ref={benefitsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat'
              }} />
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={benefitsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 font-medium text-sm mb-6"
              >
                <Sparkles className="w-4 h-4" />
                <span>De Ce Să Alegi Procesul Nostru?</span>
              </motion.div>

              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-8"
              >
                Avantajele procesului nostru
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <benefit.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <p className="text-lg font-medium">{benefit.text}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.9 }}
                className="mt-8"
              >
                <button 
                  onClick={() => setIsOfertaModalOpen(true)}
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Solicită ofertă
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <SolicitaOfertaModal 
        isOpen={isOfertaModalOpen} 
        onClose={() => setIsOfertaModalOpen(false)} 
      />
    </section>
  )
}