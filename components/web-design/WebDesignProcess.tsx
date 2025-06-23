'use client'

import { 
  FileText,
  Lightbulb,
  Users,
  Rocket,
  Clock,
  CheckCircle,
  ArrowRight,
  Settings,
  Monitor,
  Palette
} from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import SolicitaOfertaModal from '../layout/SolicitaOfertaModal'

const steps = [
  {
    id: 1,
    icon: FileText,
    title: 'Briefing & Analiză',
    description: 'Ne transmiți ideea de business și obiectivele tale. Analizăm piața și concurența.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50',
    time: '1-2 zile',
    details: ['Analiză cerințe', 'Research piață', 'Definire obiective']
  },
  {
    id: 2,
    icon: Palette,
    title: 'Design & Wireframes',
    description: 'Creăm wireframes și design-ul visual. Propunem structura și experiența utilizatorului.',
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'from-cyan-50 to-blue-50',
    time: '3-5 zile',
    details: ['Wireframes', 'Design mockups', 'UX/UI design']
  },
  {
    id: 3,
    icon: Settings,
    title: 'Dezvoltare & Testare',
    description: 'Dezvoltăm website-ul folosind tehnologii moderne. Testăm pe toate dispozitivele.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50',
    time: '7-14 zile',
    details: ['Coding frontend', 'Backend development', 'Testing complet']
  },
  {
    id: 4,
    icon: Rocket,
    title: 'Lansare & Suport',
    description: 'Lansăm website-ul live și oferim suport complet. Instruire pentru administrare.',
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'from-cyan-50 to-blue-50',
    time: '1 zi',
    details: ['Deploy live', 'Training', 'Suport inclus']
  }
]

export default function WebDesignProcess() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [isOfertaModalOpen, setIsOfertaModalOpen] = useState(false)

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full text-blue-700 font-medium text-sm mb-6">
            <Clock className="w-4 h-4" />
            <span>Procesul nostru de lucru</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            De la idee la 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> website live</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proces transparent și eficient în 4 etape clare - de la conceptul inițial până la lansarea website-ului
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-cyan-200 to-blue-200 hidden lg:block" />
          
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Step Number Circle */}
                <div className="relative lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10">
                  <motion.div 
                    className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-2xl`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-2xl font-bold text-white">{step.id}</span>
                  </motion.div>
                  
                  {/* Time Badge */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-lg border-2 border-gray-100">
                    <span className="text-xs font-medium text-gray-600">{step.time}</span>
                  </div>
                </div>

                {/* Content Card */}
                <motion.div 
                  className={`flex-1 max-w-lg ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`bg-gradient-to-br ${step.bgColor} rounded-3xl p-8 shadow-lg border border-white/50 backdrop-blur-sm relative overflow-hidden group`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="w-full h-full" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat'
                      }} />
                    </div>

                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div 
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 10 }}
                      >
                        <step.icon className="w-8 h-8 text-white" />
                      </motion.div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Details */}
                      <div className="space-y-2">
                        {step.details.map((detail, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hover Effect Particles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-1 h-1 bg-gradient-to-r ${step.color} rounded-full`}
                          style={{
                            left: `${20 + i * 25}%`,
                            bottom: `${20 + i * 15}%`,
                          }}
                          animate={{
                            y: [-10, -30, -10],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat'
              }} />
            </div>

            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 font-medium text-sm mb-6"
              >
                <Monitor className="w-4 h-4" />
                <span>Începe proiectul</span>
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Gata să îți construim website-ul perfect?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Contactează-ne astăzi pentru o consultație gratuită și o estimare personalizată
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setIsOfertaModalOpen(true)}
                  className="group inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Solicită ofertă
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button 
                  onClick={() => setIsOfertaModalOpen(true)}
                  className="group inline-flex items-center justify-center bg-transparent text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300"
                >
                  Solicită ofertă
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
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