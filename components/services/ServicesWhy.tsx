'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckCircle, Zap, Target, Shield, Users, TrendingUp } from 'lucide-react'

const reasons = [
  {
    icon: CheckCircle,
    title: 'Soluții Complete',
    description: 'Găsești într-un singur loc toate serviciile de care are nevoie afacerea ta pentru lansare, consolidare și scalare.',
  },
  {
    icon: Users,
    title: 'Echipă de Experți',
    description: 'Profesioniști cu experiență vastă în domeniile lor, dedicați succesului afacerii tale.',
  },
  {
    icon: Zap,
    title: 'Implementare Rapidă',
    description: 'Proces eficient și termene clare pentru ca tu să te poți concentra pe dezvoltarea afacerii.',
  },
  {
    icon: Target,
    title: 'Abordare Personalizată',
    description: 'Fiecare business este unic, de aceea adaptăm serviciile noastre la nevoile tale specifice.',
  },
  {
    icon: Shield,
    title: 'Calitate Garantată',
    description: 'Ne asumăm responsabilitatea pentru rezultate și oferim garanție pentru serviciile noastre.',
  },
  {
    icon: TrendingUp,
    title: 'Rezultate Măsurabile',
    description: 'Monitorizăm și raportăm progresul pentru a ne asigura că atingem obiectivele stabilite.',
  },
]

export default function ServicesWhy() {
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
            De ce să alegi <span className="gradient-text">SYNC Business Agency</span>?
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            Partenerul tău de încredere pentru toate nevoile de business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div 
                key={reason.title}
                className={`text-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-10 h-10 text-primary-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}