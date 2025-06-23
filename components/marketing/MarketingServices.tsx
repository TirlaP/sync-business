'use client'

import { 
  TrendingUp,
  Megaphone,
  Palette,
  Target,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Zap,
  Star,
  Award
} from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import SolicitaOfertaModal from '../layout/SolicitaOfertaModal'

const services = [
  {
    title: 'Social Media Management',
    icon: TrendingUp,
    platforms: ['Facebook', 'Instagram', 'TikTok', 'LinkedIn', 'YouTube'],
    description: 'Creăm conexiuni autentice și angajante cu audiența ta prin conținut strategic și management profesional.',
    gradient: 'from-blue-500 via-purple-600 to-indigo-700',
    bgGradient: 'from-blue-50 to-purple-50',
    metrics: { engagement: '+250%', followers: '+180%', conversions: '+120%' },
    featured: true,
  },
  {
    title: 'Campanii Publicitare',
    icon: Megaphone,
    campaigns: ['Facebook & Instagram Ads', 'Google Ads & Search', 'YouTube Advertising', 'LinkedIn Campaigns'],
    description: 'Maximizăm ROI-ul prin campanii țintite, optimizare continuă și analiză detaliată a performanței.',
    gradient: 'from-purple-500 via-pink-600 to-purple-700',
    bgGradient: 'from-purple-50 to-pink-50',
    metrics: { roi: '320%', reach: '50K+', ctr: '3.2%' },
    featured: false,
  },
  {
    title: 'Design & Creative',
    icon: Palette,
    services: ['Materiale publicitare', 'Grafică pentru social media', 'Bannere & Display', 'Video content'],
    description: 'Design creativ care captează atenția, transmite mesajul și convertește vizitatorii în clienți.',
    gradient: 'from-pink-500 via-red-600 to-orange-600',
    bgGradient: 'from-pink-50 to-red-50',
    metrics: { designs: '500+', brands: '50+', satisfaction: '98%' },
    featured: false,
  },
  {
    title: 'Strategie & Branding',
    icon: Target,
    elements: [
      'Identitatea de brand și personalitatea',
      'Poziționarea pe piață',
      'Strategia de comunicare',
      'Promisiunea și valorile brandului',
      'Relația cu consumatorii',
      'Mesaje și tonul de comunicare',
      'Canale de distribuție',
      'Implementarea strategiei'
    ],
    description: 'Construim strategii complete care poziționează brandul tău ca lider în industrie.',
    gradient: 'from-orange-500 via-yellow-600 to-amber-600',
    bgGradient: 'from-orange-50 to-yellow-50',
    metrics: { growth: '+400%', recognition: '+300%', value: '+250%' },
    featured: true,
  }
]

export default function MarketingServices() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const servicesRef = useRef(null)
  const [isOfertaModalOpen, setIsOfertaModalOpen] = useState(false)
  
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const titleInView = useInView(titleRef, { once: true, margin: "-50px" })
  const servicesInView = useInView(servicesRef, { once: true, margin: "-50px" })

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 font-medium text-sm mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>Servicii Marketing Premium</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Soluții Complete pentru
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
              Succesul Digital
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            De la strategie la implementare, oferim toate instrumentele necesare pentru a-ți transforma afacerea într-un succes digital
          </motion.p>
        </div>

        {/* Services Grid */}
        <div ref={servicesRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={servicesInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                className="group relative"
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

                  {/* Header */}
                  <div className={`relative p-8 bg-gradient-to-br ${service.gradient} overflow-hidden`}>
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-20">
                      {[...Array(6)].map((_, i) => (
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
                      <motion.div
                        className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 5 }}
                      >
                        <Icon className="w-10 h-10" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="opacity-90 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-white/60 rounded-xl border border-gray-100">
                      {Object.entries(service.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-gray-900">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {service.platforms ? 'Platforme' : service.campaigns ? 'Tipuri de campanii' : service.services ? 'Servicii incluse' : 'Ce include strategia'}
                      </h4>
                      
                      {service.platforms && (
                        <div className="flex flex-wrap gap-2">
                          {service.platforms.map((platform) => (
                            <motion.span 
                              key={platform} 
                              className={`px-3 py-1 bg-gradient-to-r ${service.gradient} bg-opacity-10 text-gray-700 rounded-full text-sm font-medium border border-gray-200`}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={servicesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                              transition={{ delay: 0.4 + index * 0.2 }}
                            >
                              {platform}
                            </motion.span>
                          ))}
                        </div>
                      )}
                      
                      {(service.campaigns || service.services || service.elements) && (
                        <ul className="space-y-2">
                          {(service.campaigns || service.services || service.elements?.slice(0, 4) || []).map((item, itemIndex) => (
                            <motion.li 
                              key={item} 
                              className="flex items-start gap-2 text-gray-600"
                              initial={{ opacity: 0, x: -20 }}
                              animate={servicesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ delay: 0.5 + index * 0.2 + itemIndex * 0.1 }}
                            >
                              <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mt-2`} />
                              <span className="text-sm">{item}</span>
                            </motion.li>
                          ))}
                          {service.elements && service.elements.length > 4 && (
                            <li className="text-xs text-gray-500 italic ml-4">
                              +{service.elements.length - 4} elemente adiționale
                            </li>
                          )}
                        </ul>
                      )}
                    </div>

                    {/* CTA */}
                    <motion.div 
                      className="flex items-center justify-between pt-6 mt-6 border-t border-gray-200/50"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className={`font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        Află mai multe
                      </span>
                      <motion.div
                        className={`w-10 h-10 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="w-5 h-5 text-white" />
                      </motion.div>
                    </motion.div>
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
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden">
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
                <Award className="w-4 h-4" />
                <span>Consultanță Gratuită</span>
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Gata să îți transformi marketingul?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Hai să discutăm despre strategia ta și să vedem cum putem accelera creșterea
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setIsOfertaModalOpen(true)}
                  className="group inline-flex items-center justify-center bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Solicită ofertă
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group inline-flex items-center justify-center bg-transparent text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300">
                  Vezi exemple de succes
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