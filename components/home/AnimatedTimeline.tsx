'use client'

import { 
  Rocket,
  Lightbulb,
  Code,
  Palette,
  Users,
  Trophy,
  Star,
  Zap,
  Target,
  Heart
} from 'lucide-react'

const timelineData = [
  {
    icon: Lightbulb,
    title: "Descoperim Viziunea Ta",
    description: "Începem cu o consultare detaliată pentru a înțelege exact ce îți dorești. Analizăm piața, competiția și oportunitățile unice.",
    color: "from-yellow-400 to-orange-500",
    details: ["Analiză de piață", "Cercetare competiție", "Definire obiective"]
  },
  {
    icon: Palette,
    title: "Design & Strategie",
    description: "Creăm concepte vizuale captivante și dezvoltăm o strategie completă adaptată nevoilor tale specifice.",
    color: "from-purple-400 to-pink-500",
    details: ["Mockup-uri interactive", "Brand identity", "User experience"]
  },
  {
    icon: Code,
    title: "Dezvoltare & Implementare",
    description: "Transformăm ideile în realitate folosind cele mai moderne tehnologii și practici de dezvoltare.",
    color: "from-blue-400 to-cyan-500",
    details: ["Cod optimizat", "Tehnologii moderne", "Testare riguroasă"]
  },
  {
    icon: Users,
    title: "Testare & Feedback",
    description: "Testăm fiecare funcționalitate și colectăm feedback pentru a ne asigura că totul funcționează perfect.",
    color: "from-green-400 to-emerald-500",
    details: ["User testing", "Optimizări performance", "Ajustări finale"]
  },
  {
    icon: Rocket,
    title: "Lansare & Monitorizare",
    description: "Lansăm proiectul și monitorizăm performanța pentru a asigura succesul pe termen lung.",
    color: "from-red-400 to-pink-500",
    details: ["Go live", "Monitorizare 24/7", "Suport continuu"]
  },
  {
    icon: Trophy,
    title: "Creștere & Scalare",
    description: "Analizăm rezultatele și implementăm strategii de creștere pentru a maximiza impactul.",
    color: "from-indigo-400 to-purple-500",
    details: ["Analiză rezultate", "Strategii noi", "Expansiune"]
  }
]

export default function AnimatedTimeline() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-purple-900 to-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-purple-300 font-medium text-sm mb-8 timeline-badge">
            <Zap className="w-4 h-4" />
            <span>Procesul Nostru</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 timeline-title">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Călătoria Spre Succes
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto timeline-subtitle">
            Fiecare proiect este o poveste unică. Iată cum transformăm ideile tale în realitate.
          </p>
        </div>

        <div className="relative">
          {/* SVG Curvy Line */}
          <svg
            className="absolute left-1/2 transform -translate-x-1/2 w-full h-full pointer-events-none"
            style={{ maxWidth: '200px' }}
            viewBox="0 0 200 2400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="timeline-path"
              d="M 100 0 
                 C 100 100, 150 150, 150 250
                 S 50 450, 50 550
                 S 150 750, 150 850
                 S 50 1050, 50 1150
                 S 150 1350, 150 1450
                 S 50 1650, 50 1750
                 S 150 1950, 150 2050
                 S 100 2200, 100 2400"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeDasharray="10 5"
              opacity="0.3"
            />
            <path
              className="timeline-path-animated"
              d="M 100 0 
                 C 100 100, 150 150, 150 250
                 S 50 450, 50 550
                 S 150 750, 150 850
                 S 50 1050, 50 1150
                 S 150 1350, 150 1450
                 S 50 1650, 50 1750
                 S 150 1950, 150 2050
                 S 100 2200, 100 2400"
              stroke="url(#gradient-animated)"
              strokeWidth="3"
              fill="none"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient id="gradient-animated" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#a78bfa">
                  <animate attributeName="stop-color" values="#a78bfa;#ec4899;#3b82f6;#a78bfa" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="#ec4899">
                  <animate attributeName="stop-color" values="#ec4899;#3b82f6;#a78bfa;#ec4899" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#3b82f6">
                  <animate attributeName="stop-color" values="#3b82f6;#a78bfa;#ec4899;#3b82f6" dur="3s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
            </defs>
          </svg>

          {/* Timeline Items */}
          <div className="relative z-10 space-y-32">
            {timelineData.map((item, index) => {
              const Icon = item.icon
              const isLeft = index % 2 === 0
              
              return (
                <div
                  key={index}
                  className={`timeline-item timeline-item-${index} flex items-center gap-8 ${
                    isLeft ? 'flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div
                      className={`timeline-content p-8 rounded-2xl backdrop-blur-sm border border-white/10 ${
                        isLeft ? 'text-right' : 'text-left'
                      }`}
                      style={{
                        background: `linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,0,0,0.3))`,
                      }}
                    >
                      <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'justify-end' : ''}`}>
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold">{item.title}</h3>
                      </div>
                      
                      <p className="text-gray-300 mb-6">{item.description}</p>
                      
                      <div className={`flex gap-3 flex-wrap ${isLeft ? 'justify-end' : ''}`}>
                        {item.details.map((detail, i) => (
                          <span
                            key={i}
                            className={`timeline-detail timeline-detail-${i} px-3 py-1 rounded-full text-sm bg-gradient-to-r ${item.color} bg-opacity-20 backdrop-blur-sm border border-white/10`}
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center dot with pulse */}
                  <div className="timeline-dot-container relative flex-shrink-0">
                    <div className="timeline-dot-outer absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 opacity-20 scale-150 animate-pulse"></div>
                    <div className={`timeline-dot relative w-12 h-12 rounded-full bg-gradient-to-br ${item.color} shadow-2xl flex items-center justify-center`}>
                      <Star className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1"></div>
                </div>
              )
            })}
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`particle particle-${i % 5} absolute w-2 h-2 rounded-full`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `hsl(${Math.random() * 360}, 70%, 60%)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Header animations */
        .timeline-badge {
          animation: fadeInDown linear;
          animation-timeline: view();
          animation-range: entry 0% cover 30%;
        }

        .timeline-title {
          animation: fadeInScale linear;
          animation-timeline: view();
          animation-range: entry 0% cover 30%;
        }

        .timeline-subtitle {
          animation: fadeInUp linear;
          animation-timeline: view();
          animation-range: entry 0% cover 30%;
        }

        /* Path animation */
        .timeline-path-animated {
          stroke-dasharray: 2400;
          stroke-dashoffset: 2400;
          animation: drawPath linear;
          animation-timeline: view();
          animation-range: entry 0% cover 90%;
        }

        /* Timeline items */
        .timeline-item {
          animation: fadeInSlide linear;
          animation-timeline: view();
          animation-range: entry 0% cover 30%;
        }

        .timeline-item-0 { animation-range: entry 0% cover 30%; }
        .timeline-item-1 { animation-range: entry 0% cover 30%; }
        .timeline-item-2 { animation-range: entry 0% cover 30%; }
        .timeline-item-3 { animation-range: entry 0% cover 30%; }
        .timeline-item-4 { animation-range: entry 0% cover 30%; }
        .timeline-item-5 { animation-range: entry 0% cover 30%; }

        /* Timeline dots */
        .timeline-dot {
          animation: scaleRotate linear;
          animation-timeline: view();
          animation-range: entry 0% cover 20%;
        }

        /* Timeline details */
        .timeline-detail {
          animation: fadeInScale linear;
          animation-timeline: view();
          animation-range: entry 0% cover 25%;
        }

        .timeline-detail-0 { animation-delay: 0.1s; }
        .timeline-detail-1 { animation-delay: 0.2s; }
        .timeline-detail-2 { animation-delay: 0.3s; }

        /* Floating particles */
        .particle {
          animation: float linear infinite;
        }

        .particle-0 { animation-duration: 10s; animation-delay: 0s; }
        .particle-1 { animation-duration: 12s; animation-delay: 2s; }
        .particle-2 { animation-duration: 15s; animation-delay: 4s; }
        .particle-3 { animation-duration: 8s; animation-delay: 6s; }
        .particle-4 { animation-duration: 11s; animation-delay: 8s; }

        /* Keyframes */
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes drawPath {
          from {
            stroke-dashoffset: 2400;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateX(var(--slide-from, 50px));
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
        }

        .timeline-item:nth-child(even) {
          --slide-from: -50px;
        }

        @keyframes scaleRotate {
          from {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.2) rotate(180deg);
          }
          to {
            transform: scale(1) rotate(360deg);
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(10px) translateX(-10px);
            opacity: 0.5;
          }
          75% {
            transform: translateY(-10px) translateX(5px);
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  )
}