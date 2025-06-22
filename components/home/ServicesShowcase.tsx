'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Megaphone, 
  Monitor, 
  BrainCircuit, 
  Calculator, 
  Users, 
  Building2,
  ArrowRight,
  Sparkles,
  Target,
  CheckCircle2,
  Clock,
  DollarSign
} from 'lucide-react'
import { Reveal } from '@/components/utils/Reveal'

const services = [
  {
    id: 'marketing',
    icon: Megaphone,
    title: 'Marketing Digital',
    description: 'Campanii integrate care transformă audiența în clienți fideli prin strategii data-driven.',
    features: ['SEO & SEM', 'Social Media', 'Content Marketing', 'Email Automation'],
    gradient: 'from-purple-500 to-pink-500',
    detailedDescription: 'Strategii complete de marketing digital care combină creativitatea cu analiza de date pentru a genera rezultate măsurabile și susținute.',
    benefits: [
      'Creștere organică a traficului cu 150-300%',
      'Îmbunătățirea ratei de conversie cu 40-80%',
      'ROI garantat în primele 3-6 luni',
      'Rapoarte detaliate și transparente'
    ],
    timeline: '2-4 săptămâni',
    startingPrice: 'de la 1.500€/lună',
    deliverables: ['Audit complet', 'Strategie personalizată', 'Management campanii', 'Rapoarte lunare']
  },
  {
    id: 'web-design',
    icon: Monitor,
    title: 'Web Design Premium',
    description: 'Experiențe digitale captivante care convertesc vizitatori în clienți prin design inovator.',
    features: ['UI/UX Design', 'Development', 'E-commerce', 'Mobile-First'],
    gradient: 'from-blue-500 to-cyan-500',
    detailedDescription: 'Design și dezvoltare web de ultimă generație, optimizate pentru conversie și experiența utilizatorului.',
    benefits: [
      'Design responsive și mobile-first',
      'Optimizare pentru motoarele de căutare',
      'Integrare CMS ușor de folosit',
      'Suport tehnic 12 luni inclus'
    ],
    timeline: '4-8 săptămâni',
    startingPrice: 'de la 2.500€',
    deliverables: ['Prototip interactiv', 'Design complet', 'Dezvoltare site', 'Training & documentație']
  },
  {
    id: 'consultanta',
    icon: BrainCircuit,
    title: 'Consultanță Strategică',
    description: 'Ghidare expertiză pentru creșterea afacerii prin analiză detaliată și planificare strategică.',
    features: ['Business Planning', 'Market Research', 'Growth Strategy', 'Process Optimization'],
    gradient: 'from-emerald-500 to-teal-500',
    detailedDescription: 'Consultanță strategică pentru optimizarea proceselor și accelerarea creșterii afacerii tale.',
    benefits: [
      'Analiză detaliată a poziției pe piață',
      'Strategie de creștere personalizată',
      'Optimizarea proceselor interne',
      'Mentoring și suport continuu'
    ],
    timeline: '1-3 săptămâni',
    startingPrice: 'de la 150€/oră',
    deliverables: ['Audit business', 'Plan strategic', 'Roadmap implementare', 'Sesiuni de consultanță']
  },
  {
    id: 'contabilitate',
    icon: Calculator,
    title: 'Servicii Financiare',
    description: 'Management financiar complet cu raportare transparentă și optimizare fiscală.',
    features: ['Contabilitate', 'Fiscal Advisory', 'Reporting', 'Tax Optimization'],
    gradient: 'from-orange-500 to-red-500',
    detailedDescription: 'Servicii complete de contabilitate și consultanță fiscală pentru optimizarea afacerii tale.',
    benefits: [
      'Raportare financiară în timp real',
      'Optimizare fiscală legală',
      'Suport pentru audituri',
      'Dashboard financiar personalizat'
    ],
    timeline: '1-2 săptămâni',
    startingPrice: 'de la 300€/lună',
    deliverables: ['Setup contabil', 'Rapoarte lunare', 'Declarații fiscale', 'Consultanță fiscală']
  },
  {
    id: 'employer-branding',
    icon: Users,
    title: 'Employer Branding',
    description: 'Construirea unei culturi organizaționale puternice care atrage talentele de top.',
    features: ['Recruitment Marketing', 'Culture Building', 'Talent Acquisition', 'Employee Experience'],
    gradient: 'from-violet-500 to-purple-500',
    detailedDescription: 'Dezvoltarea unei imagini puternice ca angajator pentru atragerea și reținerea talentelor.',
    benefits: [
      'Reducerea costurilor de recrutare cu 40%',
      'Îmbunătățirea satisfacției angajaților',
      'Creșterea ratei de retenție',
      'Brand consistent pe toate canalele'
    ],
    timeline: '3-6 săptămâni',
    startingPrice: 'de la 2.000€',
    deliverables: ['Audit employer brand', 'Strategie HR', 'Materiale marketing', 'Training echipă']
  },
  {
    id: 'infiintare-firma',
    icon: Building2,
    title: 'Înființare Companie',
    description: 'Servicii complete pentru lansarea afacerii tale cu toate aspectele legale și administrative.',
    features: ['Legal Setup', 'Documentation', 'Compliance', 'Banking Setup'],
    gradient: 'from-indigo-500 to-blue-500',
    detailedDescription: 'Înființarea completă a companiei tale cu toate aspectele legale și administrative rezolvate.',
    benefits: [
      'Toate documentele legale incluse',
      'Asistență pentru cont bancar',
      'Consultanță pentru forma juridică',
      'Suport post-înființare 6 luni'
    ],
    timeline: '1-2 săptămâni',
    startingPrice: 'de la 500€',
    deliverables: ['Documentație completă', 'Înregistrare oficială', 'Cont bancar', 'Kit de start business']
  }
]

export default function ServicesShowcase() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      // Update position on scroll to maintain relative position
      if (hoveredService) {
        const rect = document.querySelector(`[data-service-id="${hoveredService}"]`)?.getBoundingClientRect()
        if (rect) {
          // Keep the popup near the hovered service during scroll
          setMousePosition(current => ({
            x: current.x,
            y: rect.top + rect.height / 2
          }))
        }
      }
    }

    if (hoveredService) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('scroll', handleScroll, { passive: true })
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('scroll', handleScroll)
    }
  }, [hoveredService])

  // Smooth lag effect for popup position
  useEffect(() => {
    if (!hoveredService) return

    let rafId: number

    const animatePosition = () => {
      setSmoothPosition(current => ({
        x: current.x + (mousePosition.x - current.x) * 0.12,
        y: current.y + (mousePosition.y - current.y) * 0.12
      }))
      rafId = requestAnimationFrame(animatePosition)
    }

    rafId = requestAnimationFrame(animatePosition)
    return () => cancelAnimationFrame(rafId)
  }, [mousePosition, hoveredService])

  // Initialize smooth position when hover starts
  useEffect(() => {
    if (hoveredService && smoothPosition.x === 0 && smoothPosition.y === 0) {
      setSmoothPosition(mousePosition)
    }
  }, [hoveredService, mousePosition, smoothPosition])

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background pattern - simplified */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
      </div>

      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
          {/* Header - 2 columns layout */}
          <div className="mb-20">
            <Reveal variant="teal">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 font-medium text-sm mb-8">
                <Sparkles className="w-4 h-4" />
                <span>Servicii Premium</span>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left column - Title */}
              <div>
                <Reveal width="100%" variant="teal">
                  <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                    Soluții Complete<br />pentru
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                      {' '}Afacerea Ta
                    </span>
                  </h2>
                </Reveal>
              </div>
              
              {/* Right column - Description */}
              <div>
                <Reveal width="100%" variant="teal" delay={0.2}>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    De la idee la implementare, oferim toate serviciile necesare pentru a transforma viziunea ta în realitate
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width services list */}
        <div className="w-full">
          <div className="space-y-0">
            {services.map((service, index) => (
              <Reveal key={service.id} width="100%" variant="teal" delay={0.3 + index * 0.1}>
                <div className="border-b border-gray-700/50 last:border-b-0">
                  <Link href={`/services/${service.id}`}>
                    <div
                      className="group flex items-center justify-between h-24 py-8 px-4 sm:px-6 lg:px-8 cursor-pointer transition-all duration-200 hover:bg-white/5"
                      data-service-id={service.id}
                      onMouseEnter={() => setHoveredService(service.id)}
                      onMouseLeave={() => setHoveredService(null)}
                    >
                      <div className="flex-1 flex items-center justify-between max-w-7xl mx-auto w-full h-full">
                        {/* Left side - Service title */}
                        <div className="flex-shrink-0">
                          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-400 group-hover:text-white transition-colors duration-200">
                            {service.title}
                          </h3>
                        </div>
                        
                        {/* Center - Empty space */}
                        <div className="flex-1 mx-8 lg:mx-16">
                          {/* Removed inline description */}
                        </div>
                        
                        {/* Right side - Arrow */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-600 transition-all duration-200">
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Cursor-following popup */}
        {hoveredService && typeof window !== 'undefined' && (
          <div
            className="fixed pointer-events-none z-50"
            style={{
              left: Math.min(smoothPosition.x + 30, window.innerWidth - 340),
              top: Math.min(Math.max(smoothPosition.y - 200, 20), window.innerHeight - 400),
            }}
          >
            {(() => {
              const service = services.find(s => s.id === hoveredService)
              if (!service) return null

              return (
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-80 animate-in fade-in zoom-in-95 duration-200">
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${service.gradient} px-6 py-4`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">{service.title}</h4>
                        <p className="text-white/80 text-sm">{service.timeline}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                      {service.detailedDescription}
                    </p>

                    {/* Benefits */}
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4 text-green-500" />
                        Beneficii cheie:
                      </h5>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle2 className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing & Timeline */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <DollarSign className="w-4 h-4 text-green-500" />
                          <span className="text-xs font-medium text-gray-500">PREȚ</span>
                        </div>
                        <p className="text-sm font-semibold text-gray-900">{service.startingPrice}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Clock className="w-4 h-4 text-blue-500" />
                          <span className="text-xs font-medium text-gray-500">TIMP</span>
                        </div>
                        <p className="text-sm font-semibold text-gray-900">{service.timeline}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })()}
          </div>
        )}
      </div>
    </section>
  )
}