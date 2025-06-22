'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { 
  Megaphone, 
  Monitor, 
  BrainCircuit, 
  Calculator, 
  Users, 
  Building2,
  ArrowRight 
} from 'lucide-react'

const services = [
  {
    icon: Megaphone,
    title: 'Marketing',
    description: 'Transformăm afacerea ta într-un imperiu prin strategii de marketing digital și tradițional.',
    features: ['Social Media Marketing', 'Google & Facebook Ads', 'Content Marketing', 'Email Marketing'],
    href: '/marketing',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Monitor,
    title: 'Web Design',
    description: 'Website-uri moderne și optimizate care convertesc vizitatorii în clienți.',
    features: ['Design Responsive', 'Optimizare SEO', 'E-commerce', 'Mentenanță'],
    href: '/web-design',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: BrainCircuit,
    title: 'Consultanță de Business',
    description: 'Strategii personalizate pentru dezvoltarea și scalarea afacerii tale.',
    features: ['Strategie de Business', 'Planuri de Afaceri', 'Analiză de Piață', 'Coaching Executiv'],
    href: '/consultanta-business',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Calculator,
    title: 'Contabilitate',
    description: 'Servicii complete de contabilitate și management financiar pentru afacerea ta.',
    features: ['Contabilitate Primară', 'Raportări ANAF', 'Consultanță Fiscală', 'Management Financiar'],
    href: '/contabilitate',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Users,
    title: 'Brand de Angajator',
    description: 'Construim cultura companiei și atragem cei mai buni angajați.',
    features: ['Employer Branding', 'Cultură Organizațională', 'Recrutare', 'Employee Experience'],
    href: '/brand-angajator',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Building2,
    title: 'Înființare Firmă',
    description: 'Te ajutăm să îți deschizi firma rapid și fără bătăi de cap.',
    features: ['Înregistrare ONRC', 'Acte Constitutive', 'Consultanță Juridică', 'Deschidere Conturi'],
    href: '/infiintare-firma',
    color: 'from-orange-500 to-orange-600',
  },
]
export default function ServicesGrid() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover-lift group ${isVisible ? 'animate-scale' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                  >
                    Descoperă mai mult
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}