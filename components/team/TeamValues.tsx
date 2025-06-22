'use client'

import { useEffect, useRef, useState } from 'react'
import { Target, Eye, Heart, TrendingUp, Shield, Zap } from 'lucide-react'

const companyValues = [
  {
    title: 'Misiune',
    icon: Target,
    description: 'Misiunea noastră este să ajutăm antreprenorii să aibă un business integrat și sustenabil prin ecosistemul de servicii, componente din afacerea lor',
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Viziune',
    icon: Eye,
    description: 'Ne propunem să atingem un impact major în ceea ce privește activitatea critice/cheie dintr-o afacere și să ajutăm antreprenorii să aibă o echilibru între viața profesională și cea personală',
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Valori',
    icon: Heart,
    description: 'Evoluție, Respect, Promptitudine, Siguranță',
    values: ['Evoluție', 'Respect', 'Promptitudine', 'Siguranță'],
    color: 'from-pink-500 to-pink-600',
  }
]

export default function TeamValues() {
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
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            Ce ne reprezintă
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            Valorile care ghidează fiecare decizie și acțiune a noastră
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companyValues.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={value.title}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover-lift ${isVisible ? 'animate-scale' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-br ${value.color} p-6 text-white text-center`}>
                  <Icon className="w-12 h-12 mx-auto mb-3" />
                  <h3 className="text-2xl font-bold">{value.title}</h3>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{value.description}</p>
                  
                  {value.values && (
                    <div className="grid grid-cols-2 gap-3">
                      {value.values.map((v) => (
                        <div key={v} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">{v}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}