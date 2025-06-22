'use client'

import {
  Award,
  CheckCircle2,
  Clock,
  Rocket,
  Shield,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react'
import { Reveal } from '@/components/utils/Reveal'

const features = [
  {
    icon: CheckCircle2,
    title: 'Soluții Complete & Integrate',
    description: 'Toate serviciile esențiale pentru afacerea ta într-un singur loc - de la marketing la consultanță financiară.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: TrendingUp,
    title: 'Expertiză Dovedită',
    description: 'Echipă de specialiști cu experiență vastă în business development și implementare strategică.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Clock,
    title: 'Implementare Ultra-Rapidă',
    description: 'Înțelegem rapid modelul tău de business și implementăm soluții personalizate în timp record.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Zap,
    title: 'Eficiență & ROI Maxim',
    description: 'Optimizezi timpul și resursele, obținând rezultate superioare față de furnizorii separați.',
    color: 'from-orange-500 to-red-500',
  },
]

export default function About() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section Content */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="animated-element inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 font-medium text-sm mb-8">
                <Shield className="w-4 h-4" />
                <span>De Ce SYNC Business Agency?</span>
              </div>

              <h2 className="animated-element text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Cum ar fi să găsești{' '}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                    toate componentele afacerii
                  </span>
                </span>
                {' '}într-un singur loc?
              </h2>
              
              <p className="animated-element text-xl text-gray-600 mb-10 leading-relaxed">
                Înțelegem că succesul afacerii tale depinde de o abordare integrată și profesionistă. 
                De aceea oferim soluții complete care acoperă toate aspectele critice ale businessului tău.
              </p>

              <div className="space-y-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div key={feature.title} className={`animated-element animated-delay-${index} group flex gap-6`}>
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="relative">
              <div className="animated-element bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="text-center mb-8">
                  <div className="animated-element inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 font-medium text-sm mb-4">
                    <Sparkles className="w-4 h-4" />
                    <span>Rezultate Impresionante</span>
                  </div>
                  
                  <h3 className="animated-element text-2xl font-bold text-gray-900">
                    Cifrele vorbesc de la sine
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="animated-element animated-stat-0 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
                    <div className="text-sm text-gray-600">Ani de Experiență</div>
                  </div>
                  <div className="animated-element animated-stat-1 text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                    <div className="text-sm text-gray-600">Clienți Mulțumiți</div>
                  </div>
                  <div className="animated-element animated-stat-2 text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">1200+</div>
                    <div className="text-sm text-gray-600">Proiecte Finalizate</div>
                  </div>
                  <div className="animated-element animated-stat-3 text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">320%</div>
                    <div className="text-sm text-gray-600">ROI Mediu</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        .animated-element {
          animation: appear linear;
          animation-timeline: view();
          animation-range: entry 0% cover 40%;
        }

        .animated-delay-0 {
          animation-range: entry 10% cover 35%;
        }
        
        .animated-delay-1 {
          animation-range: entry 15% cover 35%;
        }
        
        .animated-delay-2 {
          animation-range: entry 20% cover 35%;
        }
        
        .animated-delay-3 {
          animation-range: entry 25% cover 35%;
        }

        .animated-stat-0 {
          animation-range: entry 5% cover 30%;
        }
        
        .animated-stat-1 {
          animation-range: entry 10% cover 30%;
        }
        
        .animated-stat-2 {
          animation-range: entry 15% cover 30%;
        }
        
        .animated-stat-3 {
          animation-range: entry 20% cover 30%;
        }


        @keyframes appear {
          from {
            opacity: 0;
            clip-path: inset(100% 100% 0 0);
          }
          to {
            opacity: 1;
            clip-path: inset(0 0 0 0);
          }
        }
      `}</style>
    </section>
  )
}