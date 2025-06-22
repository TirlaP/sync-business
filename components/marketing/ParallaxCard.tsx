'use client'

import { useTransform, motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Star, TrendingUp } from 'lucide-react'

interface ParallaxCardProps {
  i: number
  title: string
  description: string
  platforms: string[]
  metrics: Record<string, string>
  features: string[]
  src: string
  link: string
  color: string
  featured: boolean
  progress: any
  range: number[]
  targetScale: number
}

const ParallaxCard = ({
  i,
  title,
  description,
  platforms,
  metrics,
  features,
  src,
  link,
  color,
  featured,
  progress,
  range,
  targetScale
}: ParallaxCardProps) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`
        }}
        className="flex relative h-[500px] w-[1000px] max-w-[90vw] rounded-[25px] p-8 transform-origin-top"
      >
        {/* Featured badge */}
        {featured && (
          <div className="absolute -top-3 -right-3 z-20">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-2xl text-xs font-bold shadow-lg flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" />
              Popular
            </div>
          </div>
        )}

        {/* Left side - Content */}
        <div className="w-1/2 pr-8 text-white">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          
          <p className="text-white/90 text-base leading-relaxed mb-6">
            {description}
          </p>

          {/* Platforms/Services */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-white/80 mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Ce oferim:
            </h4>
            <div className="flex flex-wrap gap-2">
              {platforms.map((platform, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-white/90 text-xs"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-white/80 mb-3">Caracteristici cheie:</h4>
            <div className="grid grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-white/80">
                  <div className="w-1 h-1 bg-white/60 rounded-full" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a 
            href={link} 
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl font-medium hover:bg-white/30 transition-all duration-300 text-sm"
          >
            Solicită ofertă
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right side - Metrics & Visual */}
        <div className="w-1/2 pl-8">
          {/* Metrics */}
          <div className="mb-6">
            <h4 className="text-white/80 text-sm font-semibold mb-4">Rezultate obținute:</h4>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(metrics).map(([key, value], index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">
                    {value}
                  </div>
                  <div className="text-white/70 text-xs capitalize">
                    {key}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Area */}
          <div className="relative h-[200px] rounded-[20px] overflow-hidden">
            <motion.div
              className="w-full h-full"
              style={{ scale: imageScale }}
            >
              {/* Gradient background */}
              <div 
                className="w-full h-full"
                style={{
                  background: `linear-gradient(135deg, ${color}60, ${color}20, ${color}40)`
                }}
              />
              
              {/* Overlay pattern */}
              <div className="absolute inset-0 opacity-30">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat'
                  }}
                />
              </div>

              {/* Service number */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white/30 text-6xl font-bold">
                  0{i + 1}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ParallaxCard