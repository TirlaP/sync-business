'use client'

import { useEffect, useRef, useState } from 'react'
import { 
  Brain, 
  MessageCircle, 
  TrendingUp, 
  Award,
  Zap,
  Target,
  Users,
  BarChart
} from 'lucide-react'

const reasons = [
  {
    icon: Target,
    title: 'Strategie de promovare solidă',
    description: 'Avem experiență bogată în dezvoltarea și implementarea strategiilor de promovare eficiente. Fie că este vorba despre brand awareness sau generare de lead-uri, vom crea o strategie personalizată care să se potrivească nevoilor specifice ale afacerii tale.',
  },
  {
    icon: TrendingUp,
    title: 'Direcție pe termen scurt și lung stabilă',
    description: 'Înțelegem că succesul nu vine peste noapte. Lucrăm împreună cu tine pentru a stabili obiective clare și pentru a dezvolta o viziune pe termen scurt și lung. Fiecare acțiune întreprinsă are un scop bine definit, contribuind la atingerea obiectivelor tale pe termen lung.',
  },
  {
    icon: Users,
    title: 'Expertiză în domeniu',
    description: 'Echipa noastră este formată din profesioniști cu experiență în diverse domenii ale marketingului digital și tradițional.',
  },
  {
    icon: BarChart,
    title: 'Rezultate măsurabile',
    description: 'Ne concentrăm asupra rezultatelor. Utilizăm instrumente avansate de analiză pentru a urmări performanța campaniilor noastre. Astfel, poți vedea în timp real impactul eforturilor noastre asupra afacerii tale.',
  },
]

const benefits = [
  {
    icon: Brain,
    title: 'Analizăm și înțelegem rapid modelul tău de business',
  },
  {
    icon: MessageCircle,
    title: 'Comunicarea prin mesaje potrivite pentru segmentul tău de piață',
  },
  {
    icon: Zap,
    title: 'Scalezi în mod sănătos afacerea',
  },
  {
    icon: Award,
    title: 'Construiești un brand sustenabil',
  },
]
export default function MarketingBenefits() {
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
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              De ce să lucrezi cu noi?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <div 
                  key={reason.title}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover-lift ${isVisible ? 'animate-scale' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
                      <p className="text-gray-600">{reason.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Benefits */}
        <div>
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              Beneficiile serviciilor de marketing <span className="gradient-text">SYNC</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={benefit.title}
                  className={`bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white hover:scale-105 transition-transform ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                >
                  <Icon className="w-10 h-10 mb-4" />
                  <p className="font-medium">{benefit.title}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}