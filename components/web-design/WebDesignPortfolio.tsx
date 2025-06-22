'use client'

import { 
  ExternalLink,
  Eye,
  Star,
  TrendingUp,
  Award,
  Clock,
  ArrowRight,
  CheckCircle,
  Globe
} from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const portfolioProjects = [
  {
    id: 1,
    title: 'RestaurantPro - HoReCa Platform',
    category: 'E-commerce & Restaurant',
    description: 'Platformă completă pentru management restaurant cu sistem de rezervări, meniu digital și integrare plăți.',
    image: '🍽️',
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-50 to-red-50',
    metrics: {
      'Creștere vânzări': '+185%',
      'Rezervări online': '+240%',
      'Timp încărcare': '1.2s'
    },
    technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    featured: true,
    year: '2024'
  },
  {
    id: 2,
    title: 'PropertyHub - Portal Imobiliar',
    category: 'Real Estate',
    description: 'Portal modern pentru listarea și căutarea proprietăților cu sistem avansat de filtrare și tour virtual.',
    image: '🏠',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    metrics: {
      'Utilizatori activi': '15K+',
      'Proprietăți listate': '3.2K',
      'Conversii': '+120%'
    },
    technologies: ['Next.js', 'Tailwind', 'Prisma', 'PostgreSQL'],
    featured: false,
    year: '2024'
  },
  {
    id: 3,
    title: 'MedCenter - Clinică Privată',
    category: 'Healthcare',
    description: 'Website pentru clinică medicală cu sistem de programări online, gestionare pacienți și plăți integrate.',
    image: '🏥',
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50',
    metrics: {
      'Programări online': '+310%',
      'Pacienți noi': '+95%',
      'Satisfacție': '98%'
    },
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'PayU'],
    featured: true,
    year: '2023'
  },
  {
    id: 4,
    title: 'EduPlatform - Platformă Educație',
    category: 'Education',
    description: 'Platformă e-learning cu cursuri online, teste interactive și certificări pentru institutii de învățământ.',
    image: '🎓',
    gradient: 'from-purple-500 to-indigo-500',
    bgGradient: 'from-purple-50 to-indigo-50',
    metrics: {
      'Studenți activi': '8.5K',
      'Cursuri completate': '2.1K',
      'Rating mediu': '4.9/5'
    },
    technologies: ['React', 'Django', 'Redis', 'AWS'],
    featured: false,
    year: '2023'
  },
  {
    id: 5,
    title: 'FitnessPro - Studio Fitness',
    category: 'Health & Wellness',
    description: 'Website pentru lanț de săli de fitness cu rezervări clase, programe personalizate și tracking progres.',
    image: '💪',
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-50 to-rose-50',
    metrics: {
      'Membri înregistrați': '+275%',
      'Clase rezervate': '+180%',
      'Retenție': '85%'
    },
    technologies: ['Angular', 'Express', 'Socket.io', 'MongoDB'],
    featured: false,
    year: '2023'
  },
  {
    id: 6,
    title: 'LegalAdvice - Cabinet Avocat',
    category: 'Legal Services',
    description: 'Portal juridic cu consultații online, biblioteca de documente și sistem de case management.',
    image: '⚖️',
    gradient: 'from-slate-500 to-gray-600',
    bgGradient: 'from-slate-50 to-gray-50',
    metrics: {
      'Consultații online': '+200%',
      'Clienți noi': '+150%',
      'Eficiență': '+65%'
    },
    technologies: ['Next.js', 'Supabase', 'Stripe', 'Vercel'],
    featured: true,
    year: '2024'
  }
]

const categories = ['Toate', 'E-commerce', 'Real Estate', 'Healthcare', 'Education', 'Legal Services', 'Health & Wellness']

export default function WebDesignPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState('Toate')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const filteredProjects = selectedCategory === 'Toate' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => 
        project.category.includes(selectedCategory) || 
        project.category === selectedCategory
      )

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
            <Award className="w-4 h-4" />
            <span>Portofoliu Web Design</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Proiecte care 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> inspiră rezultate</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descoperă website-urile pe care le-am creat pentru clienții noștri - de la platforme e-commerce la portale corporate
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:text-gray-900 hover:shadow-md border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="group relative"
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <motion.div
                className={`relative bg-gradient-to-br ${project.bgGradient} rounded-3xl border border-white/50 shadow-lg backdrop-blur-sm transition-all duration-500 overflow-hidden`}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute -top-3 -right-3 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-2xl text-xs font-bold shadow-lg flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Project Image/Icon */}
                <div className={`relative p-8 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
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

                  <div className="relative z-10 text-center">
                    <div className="text-6xl mb-4">{project.image}</div>
                    <div className="text-white">
                      <div className="text-lg font-bold mb-1">{project.year}</div>
                      <div className="text-sm opacity-80">{project.category}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-1 gap-3 mb-6">
                    {Object.entries(project.metrics).map(([key, value], i) => (
                      <div key={key} className="flex items-center justify-between p-2 bg-white/50 rounded-lg">
                        <span className="text-xs font-medium text-gray-600">{key}</span>
                        <span className="text-sm font-bold text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-3 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300">
                      <Eye className="w-4 h-4" />
                      Vezi proiectul
                    </button>
                    <button className="p-3 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all duration-300">
                      <ExternalLink className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Hover effect particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${project.gradient} rounded-full`}
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

        {/* Portfolio Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { icon: Globe, value: '50+', label: 'Website-uri create', color: 'from-blue-400 to-cyan-400' },
            { icon: TrendingUp, value: '180%', label: 'Creștere medie conversii', color: 'from-cyan-400 to-blue-400' },
            { icon: CheckCircle, value: '98%', label: 'Clienți mulțumiți', color: 'from-blue-400 to-cyan-400' },
            { icon: Clock, value: '7-14', label: 'Zile timp de livrare', color: 'from-cyan-400 to-blue-400' },
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div 
                className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl mb-4 shadow-lg`}
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </motion.div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Gata să fii următorul success story?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Să creăm împreună un website care să îți depășească așteptările și să aducă rezultate concrete
              </p>
              
              <button className="group inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                Începe proiectul tău
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}