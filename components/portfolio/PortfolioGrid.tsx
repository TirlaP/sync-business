'use client'

import { 
  ExternalLink, 
  Globe, 
  ChevronRight, 
  Filter,
  TrendingUp,
  Award,
  Sparkles,
  Eye,
  ArrowRight
} from 'lucide-react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

const portfolioItems = [
  {
    id: 1,
    client: 'BE ZONE',
    category: 'Marketing',
    description: 'Strategie completă de marketing digital și rebranding pentru poziționarea în piață premium',
    services: ['Social Media Management', 'Branding', 'Campanii ADS', 'Content Strategy'],
    logo: '🏢',
    gradient: 'from-blue-500 via-blue-600 to-cyan-600',
    bgGradient: 'from-blue-50 to-cyan-50',
    results: '+150% creștere vizibilitate',
    metrics: { visitors: '12K+', conversion: '15%', roi: '280%' },
    featured: true,
  },
  {
    id: 2,
    client: 'Casa Napoca',
    category: 'Web Design',
    description: 'Website modern responsive și optimizare SEO avansată pentru agenție imobiliară',
    services: ['Web Design', 'SEO Optimization', 'UI/UX Design', 'Performance'],
    logo: '🏠',
    gradient: 'from-emerald-500 via-green-600 to-teal-600',
    bgGradient: 'from-emerald-50 to-teal-50',
    results: '+80% conversii în 3 luni',
    metrics: { visitors: '8K+', conversion: '22%', roi: '195%' },
    website: 'casanapoca.ro',
    featured: false,
  },
  {
    id: 3,
    client: 'iConts',
    category: 'Branding',
    description: 'Identitate vizuală completă și strategie de brand pentru startup fintech',
    services: ['Logo Design', 'Brand Identity', 'Guidelines', 'Brand Strategy'],
    logo: '💼',
    gradient: 'from-purple-500 via-violet-600 to-purple-700',
    bgGradient: 'from-purple-50 to-violet-50',
    results: 'Rebranding complet de succes',
    metrics: { visitors: '5K+', conversion: '18%', roi: '220%' },
    featured: false,
  },
  {
    id: 4,
    client: 'MANDACHI',
    category: 'Marketing',
    description: 'Campanii integrate social media, Google Ads și marketing automation',
    services: ['Facebook Ads', 'Google Ads', 'Content Marketing', 'Marketing Automation'],
    logo: '🏗️',
    gradient: 'from-orange-500 via-red-500 to-pink-600',
    bgGradient: 'from-orange-50 to-pink-50',
    results: 'ROI 320% în primul an',
    metrics: { visitors: '25K+', conversion: '12%', roi: '320%' },
    featured: true,
  },
  {
    id: 5,
    client: 'SOLVAM',
    category: 'Consultanță',
    description: 'Consultanță strategică de business și optimizare procese operaționale',
    services: ['Business Strategy', 'Market Analysis', 'Growth Planning', 'Process Optimization'],
    logo: '📊',
    gradient: 'from-red-500 via-pink-500 to-rose-600',
    bgGradient: 'from-red-50 to-rose-50',
    results: 'Dublarea cifrei de afaceri',
    metrics: { visitors: '3K+', conversion: '25%', roi: '400%' },
    featured: false,
  },
  {
    id: 6,
    client: 'FLORENTINI',
    category: 'E-commerce',
    description: 'Magazin online complet cu integrări avansate de plată și sistem de livrare',
    services: ['E-commerce Development', 'Payment Integration', 'UX Design', 'Inventory Management'],
    logo: '🌸',
    gradient: 'from-pink-500 via-rose-500 to-pink-600',
    bgGradient: 'from-pink-50 to-rose-50',
    results: '200+ comenzi în prima lună',
    metrics: { visitors: '15K+', conversion: '8%', roi: '250%' },
    featured: false,
  },
  {
    id: 7,
    client: 'SPARTAN Restaurant',
    category: 'Brand de Angajator',
    description: 'Strategie completă de employer branding și sistem de recrutare digitală',
    services: ['Employer Branding', 'HR Marketing', 'Culture Development', 'Recruitment Strategy'],
    logo: '⚔️',
    gradient: 'from-gray-600 via-slate-700 to-gray-800',
    bgGradient: 'from-gray-50 to-slate-50',
    website: 'spartanrestaurant.ro',
    results: '45% reducere turnover',
    metrics: { visitors: '6K+', conversion: '30%', roi: '180%' },
    featured: false,
  },
  {
    id: 8,
    client: 'Platon PROJECT',
    category: 'Web Design',
    description: 'Website profesional pentru companie de transport internațional cu tracking sistem',
    services: ['Web Design', 'Branding', 'SEO', 'System Integration'],
    logo: '🚛',
    gradient: 'from-indigo-500 via-blue-600 to-indigo-700',
    bgGradient: 'from-indigo-50 to-blue-50',
    results: 'Prezență online profesională',
    metrics: { visitors: '4K+', conversion: '20%', roi: '160%' },
    featured: false,
  }
]

const categories = [
  { name: 'Toate', count: portfolioItems.length },
  { name: 'Marketing', count: portfolioItems.filter(item => item.category === 'Marketing').length },
  { name: 'Web Design', count: portfolioItems.filter(item => item.category === 'Web Design').length },
  { name: 'Branding', count: portfolioItems.filter(item => item.category === 'Branding').length },
  { name: 'Consultanță', count: portfolioItems.filter(item => item.category === 'Consultanță').length },
  { name: 'E-commerce', count: portfolioItems.filter(item => item.category === 'E-commerce').length },
  { name: 'Brand de Angajator', count: portfolioItems.filter(item => item.category === 'Brand de Angajator').length },
]

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState('Toate')
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const filtersRef = useRef(null)
  const gridRef = useRef(null)
  
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const titleInView = useInView(titleRef, { once: true, margin: "-50px" })
  const filtersInView = useInView(filtersRef, { once: true, margin: "-50px" })
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" })

  const filteredItems = selectedCategory === 'Toate' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  const featuredItems = portfolioItems.filter(item => item.featured)

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 font-medium text-sm mb-8"
          >
            <Award className="w-4 h-4" />
            <span>Portofoliu Premium</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Proiecte care
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
              inspiră și performează
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Descoperă cum am transformat ideile clienților noștri în succese măsurabile
          </motion.p>
        </div>

        {/* Featured Projects Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            { label: "Proiecte Finalizate", value: "50+", icon: Award, color: "from-blue-500 to-cyan-500" },
            { label: "ROI Mediu", value: "280%", icon: TrendingUp, color: "from-purple-500 to-pink-500" },
            { label: "Clienți Activi", value: "25+", icon: Sparkles, color: "from-emerald-500 to-teal-500" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-3 shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <div ref={filtersRef} className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={filtersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg border border-gray-100">
              <Filter className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Filtrează după categorie</span>
            </div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={filtersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`group relative px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-purple-300 hover:scale-105'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {category.name}
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    selectedCategory === category.name 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-purple-100 group-hover:text-purple-600'
                  }`}>
                    {category.count}
                  </span>
                </span>
                {selectedCategory === category.name && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl"
                    style={{ zIndex: -1 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div ref={gridRef}>
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={gridInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="group relative"
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <motion.div
                    className={`relative bg-gradient-to-br ${item.bgGradient} rounded-3xl border border-white/50 shadow-lg backdrop-blur-sm transition-all duration-500 overflow-hidden`}
                    whileHover={{ 
                      y: -12,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    {/* Featured badge */}
                    {item.featured && (
                      <div className="absolute -top-3 -right-3 z-20">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-2xl text-xs font-bold shadow-lg flex items-center gap-1">
                          <Sparkles className="w-3 h-3 fill-current" />
                          Featured
                        </div>
                      </div>
                    )}

                    {/* Header with logo */}
                    <div className={`relative h-48 bg-gradient-to-br ${item.gradient} p-8 overflow-hidden`}>
                      {/* Animated background pattern */}
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

                      {/* Logo and category */}
                      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                        <motion.div
                          className="text-6xl mb-3"
                          animate={hoveredItem === item.id ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.logo}
                        </motion.div>
                        <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {item.category}
                        </div>
                      </div>

                      {/* Hover overlay */}
                      <motion.div
                        className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                          {item.client}
                        </h3>
                        {item.website && (
                          <motion.a 
                            href={`https://${item.website}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Globe className="w-5 h-5" />
                          </motion.a>
                        )}
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Services tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {item.services.map((service, serviceIndex) => (
                          <motion.span 
                            key={service} 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={gridInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: 0.3 + index * 0.1 + serviceIndex * 0.05 }}
                            className={`px-3 py-1 bg-gradient-to-r ${item.gradient} bg-opacity-10 text-gray-700 rounded-full text-xs font-medium border border-gray-200`}
                          >
                            {service}
                          </motion.span>
                        ))}
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-3 mb-4 p-3 bg-white/60 rounded-xl border border-gray-100">
                        <div className="text-center">
                          <div className="text-xs text-gray-500">Vizitatori</div>
                          <div className="font-bold text-gray-900">{item.metrics.visitors}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500">Conversie</div>
                          <div className="font-bold text-gray-900">{item.metrics.conversion}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500">ROI</div>
                          <div className="font-bold text-gray-900">{item.metrics.roi}</div>
                        </div>
                      </div>
                      
                      {/* Results */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Rezultat Principal</p>
                          <p className={`font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                            {item.results}
                          </p>
                        </div>
                        <motion.button
                          className="group/btn flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-sm font-medium">Vezi detalii</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Hover effect particles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-1 h-1 bg-gradient-to-r ${item.gradient} rounded-full`}
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
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Note */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 font-medium text-sm mb-4"
              >
                <Eye className="w-4 h-4" />
                <span>Portofoliu Complet</span>
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">
                Vrei să vezi studii de caz complete?
              </h3>
              <p className="text-gray-300 mb-4">
                Portofoliul detaliat cu metrici, strategii și rezultate se trimite la cerere
              </p>
              <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                <span>Solicită portofoliul complet</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}