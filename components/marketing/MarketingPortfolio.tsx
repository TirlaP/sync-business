'use client'

import { useEffect, useRef, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { portfolioClients } from '@/data/portfolioClients'

export default function MarketingPortfolio() {
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
            Portofoliu
          </h2>
          <p className={`text-xl text-gray-600 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            Clienți care au avut încredere în noi
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {portfolioClients.map((client, index) => (
            <div
              key={client.name}
              className={`text-center ${isVisible ? 'animate-scale' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-24 h-24 mx-auto bg-white rounded-2xl flex items-center justify-center mb-3 hover:scale-110 transition-transform cursor-pointer shadow-lg border border-gray-100 p-2">
                <Image 
                  src={client.logo}
                  alt={client.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="font-medium text-gray-700 text-sm">{client.name}</p>
            </div>
          ))}
        </div>

        <div className={`text-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <p className="text-gray-600 mb-8">
            Portofoliul detaliat se trimite la cerere.
          </p>
          <Link 
            href="/portofoliu" 
            className="inline-flex items-center bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 group"
          >
            Vezi întregul portofoliu
            <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}