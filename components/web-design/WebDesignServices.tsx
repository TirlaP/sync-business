'use client'

import { 
  Globe,
  ShoppingCart,
  Zap,
  Shield,
  Server,
  Palette,
  CheckCircle,
  Star,
  TrendingUp,
  Monitor,
  Smartphone,
  Search
} from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const services = [
  {
    icon: Globe,
    title: 'Website de Prezentare',
    description: 'Website-uri moderne și atractive care prezintă afacerea ta în cel mai bun mod posibil.',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    features: ['Design personalizat', 'Optimizare SEO', 'Responsive design', 'Loading rapid'],
    metrics: { speed: '<3s', seo: '95+', mobile: '100%' },
    featured: true,
  },
  {
    icon: Palette,
    title: 'Software Orientat Client',
    description: 'Aplicații web personalizate pentru nevoile specifice ale afacerii tale.',
    gradient: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-50 to-blue-50',
    features: ['Funcționalități custom', 'Interfață intuitivă', 'Scalabilitate', 'Suport tehnic'],
    metrics: { custom: '100%', ui: 'Premium', support: '24/7' },
    featured: false,
  },
  {
    icon: Zap,
    title: 'Optimizare Website',
    description: 'Îmbunătățim performanța site-ului tău pentru rezultate maxime.',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    features: ['Viteză de încărcare', 'Core Web Vitals', 'Optimizare imagini', 'Cache eficient'],
    metrics: { performance: '95+', vitals: 'Green', speed: '+150%' },
    featured: false,
  },
  {
    icon: ShoppingCart,
    title: 'Magazin Online',
    description: 'Soluții complete de e-commerce pentru vânzări online de succes.',
    gradient: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-50 to-blue-50',
    features: ['Plăți securizate', 'Management produse', 'Checkout optimizat', 'Integrări curierat'],
    metrics: { conversion: '+65%', security: 'SSL', payments: '15+' },
    featured: true,
  },
  {
    icon: Shield,
    title: 'Securitate Avansată',
    description: 'Protecție completă pentru website-ul și datele tale.',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    features: ['Certificat SSL', 'Firewall WAF', 'Backup automat', 'Monitorizare 24/7'],
    metrics: { uptime: '99.9%', security: 'A+', backup: 'Daily' },
    featured: false,
  },
  {
    icon: Server,
    title: 'Hosting Premium',
    description: 'Găzduire performantă și înregistrare domenii pentru prezența ta online.',
    gradient: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-50 to-blue-50',
    features: ['Hosting rapid', 'Uptime 99.9%', 'Email profesional', 'Suport tehnic'],
    metrics: { uptime: '99.9%', speed: 'SSD', emails: 'Unlimited' },
    featured: false,
  },
]

const technologies = [
  {
    name: 'React & Next.js',
    description: 'Framework-uri moderne pentru aplicații web rapide',
    icon: Monitor,
    color: 'from-blue-400 to-cyan-400'
  },
  {
    name: 'Responsive Design',
    description: 'Adaptare perfectă pe toate dispozitivele',
    icon: Smartphone,
    color: 'from-cyan-400 to-blue-400'
  },
  {
    name: 'SEO Optimization',
    description: 'Optimizare pentru motoarele de căutare',
    icon: Search,
    color: 'from-blue-400 to-cyan-400'
  },
  {
    name: 'Performance First',
    description: 'Viteza și performanța la cel mai înalt nivel',
    icon: Zap,
    color: 'from-cyan-400 to-blue-400'
  }
]

export default function WebDesignServices() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
            <Star className="w-4 h-4" />
            <span>Servicii Web Design Complete</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Soluții complete pentru 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> prezența ta online</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De la website-uri de prezentare la magazine online complexe - construim experiențe web care aduc rezultate
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="group relative"
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
            >
              <motion.div
                className={`relative bg-gradient-to-br ${service.bgGradient} rounded-3xl border border-white/50 shadow-lg backdrop-blur-sm transition-all duration-500 overflow-hidden`}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* Featured badge */}
                {service.featured && (
                  <div className="absolute -top-3 -right-3 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-2xl text-xs font-bold shadow-lg flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Popular
                    </div>
                  </div>
                )}

                {/* Header with icon and metrics */}
                <div className={`relative p-6 bg-gradient-to-br ${service.gradient} overflow-hidden`}>
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [-20, -40, -20],
                          opacity: [0.3, 1, 0.3],
                          scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <motion.div 
                        className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <service.icon className="w-7 h-7" />
                      </motion.div>
                      
                      <div className="text-right">
                        <div className="text-lg font-bold">Web Design</div>
                        <div className="text-sm opacity-80">Premium</div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3">
                      {Object.entries(service.metrics).map(([key, value], i) => (
                        <div key={key} className="text-center">
                          <div className="text-sm font-bold">{value}</div>
                          <div className="text-xs opacity-80 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover effect particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${service.gradient} rounded-full`}
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
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Technologies Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Tehnologii 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> moderne și performante</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Utilizăm cele mai noi tehnologii pentru a construi websites rapide, sigure și scalabile
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${tech.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 5 }}
              >
                <tech.icon className="w-6 h-6 text-white" />
              </motion.div>
              
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {tech.name}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}