'use client'

import { 
  Cloud,
  BarChart3,
  Headphones,
  Bell,
  Star,
  CheckCircle,
  Clock,
  Shield,
  TrendingUp,
  FileText,
  Users,
  Award
} from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const services = [
  {
    title: 'Birou virtual cu acces 24/24',
    icon: Cloud,
    description: 'Structura de organizare a documentelor contabile dar și de organizare a documentelor juridice. Încarci documentele oricând.',
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-50 to-red-50',
    features: ['Acces permanent', 'Stocare securizată', 'Organizare automată'],
    metrics: { uptime: '99.9%', storage: 'Unlimited', support: '24/7' },
    featured: true,
  },
  {
    title: 'Acces 24/24 la cifrele din balanță',
    icon: BarChart3,
    description: 'Cifrele din balanță le regăsești în același program de facturare/gestiune.',
    gradient: 'from-red-500 to-orange-500',
    bgGradient: 'from-red-50 to-orange-50',
    features: ['Rapoarte în timp real', 'Grafice interactive', 'Export date'],
    metrics: { reports: '15+', realtime: 'Da', export: 'Toate formatele' },
    featured: false,
  },
  {
    title: 'Suport rapid',
    icon: Headphones,
    description: 'Răspundem în maxim 24 de ore la solicitări',
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-50 to-red-50',
    features: ['Răspuns garantat', 'Contabil dedicat', 'Consulturi telefonice'],
    metrics: { response: '<24h', satisfaction: '98%', availability: '24/7' },
    featured: false,
  },
  {
    title: 'Informări legislative',
    icon: Bell,
    description: 'Ești informat la timp despre modificări legislative!',
    gradient: 'from-red-500 to-orange-500',
    bgGradient: 'from-red-50 to-orange-50',
    features: ['Alerte automate', 'Analize impact', 'Recomandări practice'],
    metrics: { alerts: 'Instant', coverage: '100%', updates: 'Zilnic' },
    featured: true,
  }
]

const benefits = [
  {
    icon: CheckCircle,
    title: 'Echipă de profesioniști acreditați CECCAR',
    description: 'Documentele tale sunt în siguranța verificării de către experți contabili care își asumă responsabilitatea în caz de eventuale erori provenite din partea noastră.',
    color: 'from-orange-400 to-red-400'
  },
  {
    icon: TrendingUp,
    title: 'Înțelegere rapidă a afacerii',
    description: 'Avem o experiență de peste 4 ani în business. Înțelegem afacerea ta foarte rapid și conturăm procesul de contabilitate.',
    color: 'from-red-400 to-orange-400'
  },
  {
    icon: Users,
    title: 'Adaptabilitate completă',
    description: 'Ne adaptăm să găsim modul cel mai confortabil și mai simplu pentru tine de a gestiona contabilitatea afacerii.',
    color: 'from-orange-400 to-red-400'
  },
  {
    icon: Shield,
    title: 'Siguranță și responsabilitate',
    description: 'Echipa noastră își asumă răspunderea profesională pentru toate documentele și procesele contabile gestionate.',
    color: 'from-red-400 to-orange-400'
  }
]

export default function ContabilitateServices() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-gradient-to-br from-orange-400/5 to-red-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-br from-red-400/5 to-orange-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full text-orange-700 font-medium text-sm mb-6">
            <Star className="w-4 h-4" />
            <span>Beneficiile tale!</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mai mult decât 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600"> contabilitate standard</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Știm foarte bine că dacă zicem contabilitate, este nevoie de balanță, bilanț și declarații fiscale. 
            Acestea sunt oferite de orice firmă de contabilitate, dar să acordăm atenție beneficiilor reale!
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
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
                      Premium
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
                        <div className="text-2xl font-bold">iConta24</div>
                        <div className="text-sm opacity-80">Premium Service</div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3">
                      {Object.entries(service.metrics).map(([key, value], i) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold">{value}</div>
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
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
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

        {/* Why Choose Us Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            De ce să alegi serviciile de 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600"> contabilitate?</span>
          </h3>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <benefit.icon className="w-6 h-6 text-white" />
                </motion.div>
                
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}