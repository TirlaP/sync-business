'use client'

import { 
  Search,
  Target,
  MessageSquare,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  BarChart3,
  Settings,
  Star,
  UserCheck,
  Globe,
  Heart,
  Building2
} from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const evaluationAreas = [
  {
    title: 'Recrutarea și selecția',
    icon: UserCheck,
    description: 'Cum se realizează, canale de comunicare a anunțurilor, conținut și vizual de anunț, canale de aplicare, pagina site Cariere',
    gradient: 'from-violet-500 to-purple-500',
    bgGradient: 'from-violet-50 to-purple-50',
    features: ['Analiză procese recruitment', 'Optimizare anunțuri', 'Pagină cariere'],
    metrics: { channels: '10+', conversion: '+45%', time: '-30%' }
  },
  {
    title: 'Programe de inducție și motivare',
    icon: Award,
    description: 'Programe de inducție, pregătire, motivare și retenție + Programul de evaluare',
    gradient: 'from-purple-500 to-violet-500',
    bgGradient: 'from-purple-50 to-violet-50',
    features: ['Programe onboarding', 'Sisteme evaluare', 'Planuri retenție'],
    metrics: { retention: '+60%', satisfaction: '95%', performance: '+25%' }
  },
  {
    title: 'Experiența angajaților',
    icon: Heart,
    description: 'Sondajul de opinie pentru satisfacția angajaților la locul de muncă + Exit interview',
    gradient: 'from-violet-500 to-purple-500',
    bgGradient: 'from-violet-50 to-purple-50',
    features: ['Sondaje satisfacție', 'Exit interviews', 'Analiza feedback'],
    metrics: { engagement: '+50%', turnover: '-40%', nps: '+35%' }
  },
  {
    title: 'Reputația online',
    icon: Globe,
    description: 'Platformele de evaluare și notare: Undelucram, comentarii și mesaje social media, LinkedIn',
    gradient: 'from-purple-500 to-violet-500',
    bgGradient: 'from-purple-50 to-violet-50',
    features: ['Monitorizare reputație', 'Răspunsuri review-uri', 'Strategie LinkedIn'],
    metrics: { rating: '4.8/5', mentions: '+80%', reach: '+120%' }
  }
]

const strategySteps = [
  {
    title: 'Stabilirea valorilor organizației',
    description: 'Lista punctelor de valoare și profilul candidatului pentru diferite roluri',
    icon: Target,
    color: 'from-violet-400 to-purple-400'
  },
  {
    title: 'Value Proposition',
    description: 'Mesajul transmis, exprimarea brandului, poziționarea pe piața muncii',
    icon: MessageSquare,
    color: 'from-purple-400 to-violet-400'
  },
  {
    title: 'Identitatea de brand',
    description: 'Valorile și personalitatea brandului + Ambasadorul de brand',
    icon: Star,
    color: 'from-violet-400 to-purple-400'
  },
  {
    title: 'Strategia de comunicare',
    description: 'Obiective, mesaje, canale, resurse și promovarea brandului',
    icon: Globe,
    color: 'from-purple-400 to-violet-400'
  }
]

const businessImpact = [
  {
    icon: TrendingUp,
    title: 'Creșterea veniturilor și profiturilor',
    description: 'Angajații talentați și motivați aduc valoare semnificativă prin inovare, productivitate și creșterea profitului',
    stat: '+40% profitabilitate'
  },
  {
    icon: Users,
    title: 'Reducerea costurilor cu recrutarea',
    description: 'Compania va primi mai multe cereri de la candidați calificați, care sunt mai predispuși să rămână pe termen lung',
    stat: '-60% costuri recruitment'
  },
  {
    icon: Building2,
    title: 'Îmbunătățirea reputației generale',
    description: 'Un brand de angajator puternic poate îmbunătăți reputația generală a companiei, atrăgând noi clienți și parteneri',
    stat: '+85% brand awareness'
  },
  {
    icon: Award,
    title: 'Atragerea și retenția talentelor',
    description: 'Angajații talentați vor fi mai predispuși să aplice și să rămână în companii cu un brand de angajator puternic',
    stat: '+70% talent retention'
  }
]

export default function BrandAngajatorServices() {
  const [activeTab, setActiveTab] = useState('evaluation')
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-gradient-to-br from-violet-400/5 to-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-br from-purple-400/5 to-violet-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Business Impact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full text-violet-700 font-medium text-sm mb-6">
            <TrendingUp className="w-4 h-4" />
            <span>Legătura dintre Brand și Obiectivele de Afaceri</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Impact direct asupra 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600"> succesului organizațional</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Un brand de angajator puternic poate avea un impact pozitiv măsurabil asupra performanței afacerii
          </p>

          {/* Business Impact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {businessImpact.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <impact.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-gray-900">
                        {impact.title}
                      </h4>
                      <span className="text-sm font-bold text-violet-600 bg-violet-100 px-3 py-1 rounded-full">
                        {impact.stat}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {impact.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-2xl shadow-lg p-2 border border-gray-200">
            <button
              onClick={() => setActiveTab('evaluation')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'evaluation'
                  ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Evaluarea Brandului
            </button>
            <button
              onClick={() => setActiveTab('strategy')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'strategy'
                  ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Strategia de Construire
            </button>
          </div>
        </motion.div>

        {/* Tab Content */}
        <div className="relative min-h-[600px]">
          {/* Evaluation Tab */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: activeTab === 'evaluation' ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className={`${activeTab === 'evaluation' ? 'relative' : 'absolute inset-0 pointer-events-none'}`}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Evaluarea și analiza 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600"> Brandului de angajator</span>
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Analizăm toate aspectele care influențează percepția candidaților și angajaților despre compania ta
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {evaluationAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={isInView && activeTab === 'evaluation' ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="group relative"
                >
                  <motion.div
                    className={`relative bg-gradient-to-br ${area.bgGradient} rounded-3xl border border-white/50 shadow-lg backdrop-blur-sm transition-all duration-500 overflow-hidden`}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    {/* Header */}
                    <div className={`relative p-6 bg-gradient-to-br ${area.gradient} overflow-hidden`}>
                      <div className="relative z-10 text-white">
                        <div className="flex items-center justify-between mb-4">
                          <motion.div 
                            className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <area.icon className="w-7 h-7" />
                          </motion.div>
                          
                          <div className="text-right">
                            <div className="text-lg font-bold">Analiză</div>
                            <div className="text-sm opacity-80">Completă</div>
                          </div>
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-3">
                          {Object.entries(area.metrics).map(([key, value], i) => (
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
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {area.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {area.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2">
                        {area.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Strategy Tab */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: activeTab === 'strategy' ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className={`${activeTab === 'strategy' ? 'relative' : 'absolute inset-0 pointer-events-none'}`}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Strategia de construire a 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600"> Brandului de angajator</span>
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dezvoltăm o strategie comprehensivă pentru poziționarea companiei tale ca angajator de top
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {strategySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView && activeTab === 'strategy' ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <step.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}