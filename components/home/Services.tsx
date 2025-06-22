'use client'

import Link from 'next/link'
import { 
  Megaphone, 
  Monitor, 
  BrainCircuit, 
  Calculator, 
  Users, 
  Building2,
  ArrowRight,
  Sparkles,
  Star,
  Zap
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const services = [
  {
    icon: Megaphone,
    title: 'Marketing Digital',
    description: 'Campanii integrate care transformă audiența în clienți fideli prin strategii data-driven.',
    features: ['SEO & SEM', 'Social Media', 'Content Marketing', 'Email Automation'],
    href: '/services/marketing',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
    popular: true,
  },
  {
    icon: Monitor,
    title: 'Web Design Premium',
    description: 'Experiențe digitale captivante care convertesc vizitatori în clienți prin design inovator.',
    features: ['UI/UX Design', 'Development', 'E-commerce', 'Mobile-First'],
    href: '/services/web-design',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    popular: false,
  },
  {
    icon: BrainCircuit,
    title: 'Consultanță Strategică',
    description: 'Ghidare expertiză pentru creșterea afacerii prin analiză detaliată și planificare strategică.',
    features: ['Business Planning', 'Market Research', 'Growth Strategy', 'Process Optimization'],
    href: '/services/consultanta-business',
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50',
    popular: false,
  },
  {
    icon: Calculator,
    title: 'Servicii Financiare',
    description: 'Management financiar complet cu raportare transparentă și optimizare fiscală.',
    features: ['Contabilitate', 'Fiscal Advisory', 'Reporting', 'Tax Optimization'],
    href: '/services/contabilitate',
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-50 to-red-50',
    popular: false,
  },
  {
    icon: Users,
    title: 'Employer Branding',
    description: 'Construirea unei culturi organizaționale puternice care atrage talentele de top.',
    features: ['Recruitment Marketing', 'Culture Building', 'Talent Acquisition', 'Employee Experience'],
    href: '/services/brand-angajator',
    gradient: 'from-violet-500 to-purple-500',
    bgGradient: 'from-violet-50 to-purple-50',
    popular: false,
  },
  {
    icon: Building2,
    title: 'Înființare Companie',
    description: 'Servicii complete pentru lansarea afacerii tale cu toate aspectele legale și administrative.',
    features: ['Legal Setup', 'Documentation', 'Compliance', 'Banking Setup'],
    href: '/services/infiintare-firma',
    gradient: 'from-indigo-500 to-blue-500',
    bgGradient: 'from-indigo-50 to-blue-50',
    popular: false,
  },
]

export default function Services() {
  const { ref: sectionRef, isInView } = useScrollAnimation()
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation()

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Optimized background decorations - Removed blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 font-medium text-sm mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>Servicii Premium</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Soluții Complete pentru
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Afacerea Ta
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            De la idee la implementare, oferim toate serviciile necesare pentru a transforma viziunea ta în realitate
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + index * 0.1,
                  ease: "easeOut"
                }}
                className="group relative"
              >
                <Link href={service.href} className="block h-full">
                  <motion.div
                    className={`relative bg-gradient-to-br ${service.bgGradient} rounded-3xl p-8 h-full border border-white/50 shadow-lg backdrop-blur-sm transition-all duration-500 overflow-hidden`}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    {/* Popular badge */}
                    {service.popular && (
                      <div className="absolute -top-2 -right-2 z-10">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                          <Star className="w-3 h-3 fill-current" />
                          Popular
                        </div>
                      </div>
                    )}

                    {/* Gradient overlay on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                    />

                    {/* Icon */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 shadow-lg`}
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
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm text-gray-600"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ delay: 0.6 + index * 0.1 + featureIndex * 0.05 }}
                        >
                          <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full`} />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    <motion.div 
                      className="flex items-center justify-between pt-4 border-t border-gray-200/50"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className={`font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        Explorează serviciul
                      </span>
                      <motion.div
                        className={`w-10 h-10 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="w-5 h-5 text-white" />
                      </motion.div>
                    </motion.div>

                    {/* Optimized hover effect - Removed heavy particle animations */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full animate-pulse`} />
                      <div className={`absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r ${service.gradient} rounded-full animate-pulse`} style={{ animationDelay: '0.2s' }} />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Gata să transformi afacerea ta?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Hai să discutăm despre cum te putem ajuta să atingi următorul nivel
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="group inline-flex items-center justify-center bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Începe acum
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  href="/services" 
                  className="group inline-flex items-center justify-center bg-transparent text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300"
                >
                  Vezi toate serviciile
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}