'use client'

import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Star } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import EbookModal from '../layout/EbookModal'
import SolicitaOfertaModal from '../layout/SolicitaOfertaModal'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 50])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5])
  
  const [isOfertaModalOpen, setIsOfertaModalOpen] = useState(false)
  const [isEbookModalOpen, setIsEbookModalOpen] = useState(false)
  
  // Animated text rotation
  const rotatingWords = ['INTEGRATE', 'EFICIENTE', 'COMPLETE']
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 5000) // Change word every 5 seconds
    
    return () => clearInterval(interval)
  }, [rotatingWords.length])


  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden" style={{ backgroundColor: '#10033a' }}>
      {/* Background Infinite Scrolling Columns - Aligned Right */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-0 top-0 bottom-0 w-full transform rotate-12 translate-x-40 lg:translate-x-80 translate-y-16">
          <div className="flex gap-2 justify-end">
            {/* Column 1 - Scrolling Down (True Infinite) */}
            <motion.div
              className="flex flex-col gap-2 w-[600px] sm:w-[650px] lg:w-[550px] xl:w-[600px]"
              animate={{ y: ["-50%", "0%"] }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear", repeatType: "loop" }}
            >
              {/* Original 6 images */}
              {[...Array(6)].map((_, i) => (
                <div 
                  key={`original-${i}`}
                  className="bg-white rounded-lg shadow-xl overflow-hidden w-full aspect-video relative"
                >
                  <Image 
                    src="https://plus.unsplash.com/premium_photo-1698513568910-e4885dda842d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={`Website mockup ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
              {/* Duplicate 6 images for seamless loop */}
              {[...Array(6)].map((_, i) => (
                <div 
                  key={`duplicate-${i}`}
                  className="bg-white rounded-lg shadow-xl overflow-hidden w-full aspect-video relative"
                >
                  <Image 
                    src="https://plus.unsplash.com/premium_photo-1698513568910-e4885dda842d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={`Website mockup ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </motion.div>

            {/* Column 2 - Scrolling Up (True Infinite) */}
            <motion.div
              className="flex flex-col gap-2 w-[600px] sm:w-[650px] lg:w-[550px] xl:w-[600px]"
              animate={{ y: ["0%", "-50%"] }}
              transition={{ duration: 70, repeat: Infinity, ease: "linear", repeatType: "loop" }}
            >
              {/* Original 6 images */}
              {[...Array(6)].map((_, i) => (
                <div 
                  key={`original-${i}`}
                  className="bg-white rounded-lg shadow-xl overflow-hidden w-full aspect-video relative"
                >
                  <Image 
                    src="https://plus.unsplash.com/premium_photo-1698513568910-e4885dda842d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={`Website mockup ${i + 7}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
              {/* Duplicate 6 images for seamless loop */}
              {[...Array(6)].map((_, i) => (
                <div 
                  key={`duplicate-${i}`}
                  className="bg-white rounded-lg shadow-xl overflow-hidden w-full aspect-video relative"
                >
                  <Image 
                    src="https://plus.unsplash.com/premium_photo-1698513568910-e4885dda842d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={`Website mockup ${i + 7}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </motion.div>

            {/* Column 3 - Scrolling Down (True Infinite) - Hidden on mobile */}
            <motion.div
              className="hidden md:flex flex-col gap-2 w-[600px] sm:w-[650px] lg:w-[550px] xl:w-[600px]"
              animate={{ y: ["-50%", "0%"] }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear", repeatType: "loop" }}
            >
              {/* Original 6 images */}
              {[...Array(6)].map((_, i) => (
                <div 
                  key={`original-${i}`}
                  className="bg-white rounded-lg shadow-xl overflow-hidden w-full aspect-video relative"
                >
                  <Image 
                    src="https://plus.unsplash.com/premium_photo-1698513568910-e4885dda842d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={`Website mockup ${i + 13}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
              {/* Duplicate 6 images for seamless loop */}
              {[...Array(6)].map((_, i) => (
                <div 
                  key={`duplicate-${i}`}
                  className="bg-white rounded-lg shadow-xl overflow-hidden w-full aspect-video relative"
                >
                  <Image 
                    src="https://plus.unsplash.com/premium_photo-1698513568910-e4885dda842d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={`Website mockup ${i + 13}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-blue-400/20 rounded-full blur-xl" />
      </div>

      {/* Left side gradient overlay - like DigitalSilk */}
      <div className="absolute inset-0 bg-blue-900/70 sm:bg-blue-900/0 sm:bg-gradient-to-r sm:from-blue-900/80 sm:via-blue-800/60 sm:to-transparent sm:bg-[length:100%_100%] lg:bg-[length:65%_100%] sm:bg-no-repeat pointer-events-none"></div>
      
      <div className="relative w-full py-12">
        <div className="max-w-7xl pl-6 xl:pl-0 mx-auto">
        <div className="w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white"
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 font-medium text-sm mb-8 border border-white/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Sparkles className="w-4 h-4" />
              <span>AGENȚIE DIGITALĂ PREMIUM</span>
              <div className="flex h-2 w-2">
                <div className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400 animate-pulse"></div>
              </div>
            </motion.div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="block text-white"
              >
                Soluții{' '}
                <span className="relative inline-block">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`text-${currentWordIndex}`}
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -15, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="inline-block text-blue-400"
                    >
                      {rotatingWords[currentWordIndex]}
                    </motion.span>
                  </AnimatePresence>
                  {/* Animated progress line */}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-1 bg-white rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    key={`line-${currentWordIndex}`}
                    transition={{ duration: 5, ease: "easeOut" }}
                  />
                </span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="block text-white"
              >
                de Business.
              </motion.span>
            </h1>
            
            <motion.p 
              className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              De la web design captivant la branding memorabil și consultanță personalizată, <br className="hidden sm:block" />
              suntem partenerul tău pentru succesul online.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <button 
                onClick={() => setIsOfertaModalOpen(true)}
                className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <span className="flex items-center gap-2">
                  SOLICITĂ OFERTĂ
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button 
                onClick={() => setIsEbookModalOpen(true)}
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                DESCARCĂ EBOOK GRATUIT
              </button>
            </motion.div>
            
            {/* Trust indicators */}
            <motion.div 
              className="flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-white/80 text-sm">5-Star Reviews</span>
              </div>
              <div className="text-white/60">|</div>
              <div className="text-white/80 text-sm">
                <span className="font-bold text-yellow-400">Cea mai bună agenție digitală</span> din 2024
              </div>
            </motion.div>
          </motion.div>
        </div>
        </div>
      </div>

      {/* Modals */}
      <SolicitaOfertaModal 
        isOpen={isOfertaModalOpen} 
        onClose={() => setIsOfertaModalOpen(false)} 
      />
      <EbookModal 
        isOpen={isEbookModalOpen} 
        onClose={() => setIsEbookModalOpen(false)} 
      />
    </section>
  )
}