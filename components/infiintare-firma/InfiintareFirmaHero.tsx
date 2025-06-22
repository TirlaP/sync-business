'use client'

import { 
  Building, 
  ArrowRight,
  Sparkles,
  FileText,
  CheckCircle,
  Clock,
  Shield,
  Award,
  Zap,
  Users,
  Target,
  PenTool
} from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function InfiintareFirmaHero() {
  const { ref, isInView } = useScrollAnimation()
  const containerRef = useRef(null)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 50])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8])

  return (
    <section ref={containerRef} className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"
        />
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect x='20' y='20' width='20' height='20' rx='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }} />
      </div>
      
      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 backdrop-blur-sm rounded-full text-indigo-300 font-semibold text-sm mb-8 border border-indigo-400/30"
          >
            <Building className="w-5 h-5" />
            <span>Înființare Firmă</span>
            <Sparkles className="w-4 h-4" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
          >
            Îți deschizi o
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-400"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              firmă nouă?
            </motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Ne lași câteva denumiri de firmă și următorul/singurul pas pe care va trebui să îl mai faci tu este doar să semnezi documentele.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.button 
              className="group relative bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative flex items-center gap-3">
                <PenTool className="w-6 h-6" />
                Începe înființarea
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            
            <motion.button 
              className="group bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-lg border-2 border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                <FileText className="w-5 h-5" />
                Consultanță gratuită
              </span>
            </motion.button>
          </motion.div>

          {/* Process Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16"
          >
            {[
              { 
                icon: Target, 
                title: 'Alegi denumirea', 
                description: '3-5 variante de nume',
                step: '1'
              },
              { 
                icon: Shield, 
                title: 'Rezervăm denumirea', 
                description: 'Verificare și rezervare',
                step: '2'
              },
              { 
                icon: FileText, 
                title: 'Pregătim documentele', 
                description: 'Editare și pregătire',
                step: '3'
              },
              { 
                icon: CheckCircle, 
                title: 'Tu doar semnezi', 
                description: 'Maxim 2 minute',
                step: '4'
              },
            ].map((step, index) => (
              <motion.div 
                key={index} 
                className="group text-center p-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300 relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.step}
                </div>
                
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-3xl mb-4 shadow-2xl group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-white/70 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Key Benefits */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Ne ocupăm noi de toate documentele
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <Clock className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                  <p className="text-white/80">
                    <span className="font-bold">De la editare până la depunere</span><br />
                    Tu doar le semnezi în maxim 2 minute. ATÂT!
                  </p>
                </div>
                <div className="text-center">
                  <Zap className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <p className="text-white/80">
                    <span className="font-bold">Proces rapid și eficient</span><br />
                    Fără drumuri la notariat sau ONRC
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What you need to clarify */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {[
              { icon: Building, text: 'Adresa pentru sediul social' },
              { icon: Users, text: 'Activitățile și codurile CAEN' },
              { icon: FileText, text: 'Modalitatea de depunere la ONRC' },
              { icon: Award, text: 'Servicii complete incluse' },
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-3 text-white/80"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
              >
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <benefit.icon className="w-5 h-5" />
                </div>
                <span className="font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}