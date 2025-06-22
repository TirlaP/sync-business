'use client'

import { 
  Building, 
  Users, 
  TrendingUp, 
  Zap, 
  Target, 
  PiggyBank,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Star,
  Shield,
  Rocket
} from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const benefits = [
  {
    icon: Building,
    title: 'Organizare Sistematică',
    description: 'Structură clară și procese bine definite pentru succesul afacerii tale pe termen lung.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50',
    metric: '95% Eficiență',
  },
  {
    icon: Users,
    title: 'Un Singur Partener',
    description: 'Comunicare simplificată și viziune comună pentru toate serviciile de care ai nevoie.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50',
    metric: '40% Timp economisit',
  },
  {
    icon: TrendingUp,
    title: 'Rezultate Eficiente',
    description: 'Strategii dovedite și implementare rapidă pentru rezultate măsurabile și sustenabile.',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'from-emerald-50 to-teal-50',
    metric: '156% Creștere medie',
  },
  {
    icon: Zap,
    title: 'Scalare Rapidă',
    description: 'Ghidare expertă pentru creșterea și dezvoltarea accelerată a afacerii tale.',
    color: 'from-orange-500 to-red-500',
    bgColor: 'from-orange-50 to-red-50',
    metric: '3x Mai rapid',
  },
  {
    icon: Target,
    title: 'Focus Strategic',
    description: 'Lucrezi LA afacere, nu ÎN afacere - concentrare pe strategie și dezvoltare.',
    color: 'from-violet-500 to-purple-500',
    bgColor: 'from-violet-50 to-purple-50',
    metric: '80% Mai puțin stress',
  },
  {
    icon: PiggyBank,
    title: 'Optimizare Costuri',
    description: 'Soluții integrate care reduc costurile operaționale și maximizează eficiența.',
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'from-indigo-50 to-blue-50',
    metric: '35% Economii',
  },
]

const targetAudience = [
  {
    text: 'Doresc să crească sustenabil și sănătos afacerea lor cu direcție și viziune clară',
    icon: Rocket,
  },
  {
    text: 'Doresc să tragă cu afacerea la următorul nivel și să depășească concurența',
    icon: Star,
  },
  {
    text: 'Doresc să scaleze sau să stabilizeze după scalare într-un mod controlat și eficient',
    icon: Shield,
  },
]

export default function Benefits() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const audienceRef = useRef(null)
  const benefitsRef = useRef(null)
  
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const titleInView = useInView(titleRef, { once: true, margin: "-50px" })
  const audienceInView = useInView(audienceRef, { once: true, margin: "-50px" })
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-50px" })

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Target Audience Section */}
        <div ref={audienceRef} className="mb-24">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={audienceInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 font-medium text-sm mb-8"
            >
              <Target className="w-4 h-4" />
              <span>Pentru Antreprenori Ambițioși</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={audienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Cui ne adresăm?
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Afacerilor care
              </span>
            </motion.h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {targetAudience.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={audienceInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group flex items-start gap-6 mb-8 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xl text-gray-800 leading-relaxed font-medium">{item.text}</p>
                </div>
                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight className="w-6 h-6 text-purple-600" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div ref={benefitsRef}>
          <div ref={titleRef} className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={titleInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 font-medium text-sm mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span>Beneficii Premium</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Beneficiile colaborării cu
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                SYNC Business Agency
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Parteneriatul cu noi îți oferă accesul la expertiză de top și rezultate măsurabile
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div 
                  key={benefit.title}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={benefitsInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.1 + index * 0.1,
                    ease: "easeOut"
                  }}
                  className="group relative"
                >
                  <motion.div
                    className={`relative bg-gradient-to-br ${benefit.bgColor} rounded-3xl p-8 border border-white/50 shadow-lg backdrop-blur-sm transition-all duration-500 overflow-hidden h-full`}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    {/* Hover gradient overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                    />

                    {/* Metric badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className={`bg-gradient-to-r ${benefit.color} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                        {benefit.metric}
                      </div>
                    </div>

                    {/* Icon */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-2xl mb-6 shadow-lg`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {benefit.description}
                    </p>

                    {/* Animated progress bar */}
                    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${benefit.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={benefitsInView ? { width: "100%" } : { width: 0 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: "easeOut" }}
                      />
                    </div>

                    {/* Optimized hover effect - Simple static dots */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className={`absolute top-4 left-4 w-1 h-1 bg-gradient-to-r ${benefit.color} rounded-full`} />
                      <div className={`absolute bottom-4 right-4 w-1 h-1 bg-gradient-to-r ${benefit.color} rounded-full`} />
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 text-center"
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
                <h3 className="text-3xl md:text-4xl font-bold mb-8">
                  Rezultate care vorbesc de la sine
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {[
                    { label: "Clienți satisfăcuți", value: "500+", color: "from-blue-400 to-cyan-400" },
                    { label: "Proiecte finalizate", value: "1200+", color: "from-purple-400 to-pink-400" },
                    { label: "Ani de experiență", value: "8+", color: "from-emerald-400 to-teal-400" },
                    { label: "ROI mediu", value: "320%", color: "from-orange-400 to-red-400" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                        {stat.value}
                      </div>
                      <div className="text-gray-300">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}