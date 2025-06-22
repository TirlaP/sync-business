'use client'

import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { marketingProjects } from '../../data/marketingCards'
import ParallaxCard from './ParallaxCard'

export default function ParallaxSection() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white">
      {/* Section Header */}
      <div className="relative z-10 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 font-medium text-sm mb-8">
            <span>Soluții Complete</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Soluții Complete pentru
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
              Succesul Digital
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            De la strategie la implementare, oferim toate instrumentele necesare pentru a-ți transforma afacerea într-un succes digital
          </p>
        </div>
      </div>

      {/* Parallax Cards */}
      <div ref={container} className="relative">
        {marketingProjects.map((project, i) => {
          const targetScale = 1 - ((marketingProjects.length - i) * 0.05)
          return (
            <ParallaxCard 
              key={`project_${i}`}
              i={i}
              title={project.title}
              description={project.description}
              platforms={project.platforms}
              metrics={project.metrics}
              features={project.features}
              src={project.src}
              link={project.link}
              color={project.color}
              featured={project.featured}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          )
        })}
      </div>
    </section>
  )
}