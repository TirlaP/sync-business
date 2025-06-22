'use client'

import { useEffect, useRef, useState } from 'react'
import { MessageSquare, Lightbulb, Users, BarChart3 } from 'lucide-react'

const processSteps = [
  {
    icon: MessageSquare,
    title: 'Pasul 1',
    description: 'Ne comunici ideea de afacere și obiectivele majore de marketing/vânzări.',
  },
  {
    icon: Lightbulb,
    title: 'Pasul 2',
    description: 'Dacă nu există plan/strategie de marketing, îți propunem noi strategia de marketing personalizată.',
  },
  {
    icon: Users,
    title: 'Pasul 3',
    description: 'Agreem împreună strategia.',
  },
  {
    icon: BarChart3,
    title: 'Pasul 4',
    description: 'Implementăm și evaluăm rezultatele.',
  },
]

export default function MarketingProcess() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            Cum funcționează?
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            Procesul nostru de marketing în 4 pași simpli
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <div 
                key={step.title}
                className={`relative ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-purple-200 to-transparent -translate-x-8"></div>
                )}
                
                <div className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 transform rotate-3 hover:rotate-0 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}