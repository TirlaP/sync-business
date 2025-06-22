'use client'

import { 
  Sparkles,
  Layers,
  Hexagon,
  Circle,
  Square,
  Triangle,
  Star,
  Heart,
  Zap,
  Flame,
  Droplet,
  Cloud,
  Sun,
  Moon,
  Mountain,
  Trees,
  Waves,
  Wind,
  Gem,
  Crown
} from 'lucide-react'

export default function ScrollAnimationPlayground() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-purple-900 to-black text-white">
      
      {/* Section 1: Wave Pattern */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 fade-in-text">
            Valuri Dinamice
          </h2>
          <div className="flex justify-center items-center gap-2">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`wave-bar wave-${i % 5}`}
                style={{
                  height: `${Math.sin(i * 0.5) * 50 + 100}px`,
                  background: `linear-gradient(to top, 
                    hsl(${200 + i * 5}, 70%, 50%), 
                    hsl(${220 + i * 5}, 70%, 70%))`
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Spiral Cards */}
      <section className="py-24 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 fade-in-text">
            Carduri în Spirală
          </h2>
          <div className="relative h-[600px] flex items-center justify-center">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`spiral-card spiral-${i}`}
                style={{
                  position: 'absolute',
                  width: '200px',
                  height: '300px',
                  background: `linear-gradient(135deg, 
                    hsl(${i * 45}, 70%, 50%), 
                    hsl(${i * 45 + 30}, 70%, 60%))`,
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
                }}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Morphing Grid with Icons */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 fade-in-text">
            Grilă Morphing cu Icoane
          </h2>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
            {[
              Hexagon, Circle, Square, Triangle, Star, Heart,
              Zap, Flame, Droplet, Cloud, Sun, Moon,
              Mountain, Trees, Waves, Wind, Gem, Crown
            ].map((Icon, i) => (
              <div
                key={i}
                className={`morph-grid-item morph-grid-${i % 6}`}
              >
                <Icon className="w-12 h-12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: 3D Flip Gallery */}
      <section className="py-24 bg-gradient-to-b from-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 fade-in-text">
            Galerie 3D Flip
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`flip-card flip-${i % 4}`}>
                <div className="flip-card-inner">
                  <div 
                    className="flip-card-front"
                    style={{
                      background: `linear-gradient(135deg, 
                        hsl(${i * 40}, 70%, 40%), 
                        hsl(${i * 40 + 20}, 70%, 60%))`
                    }}
                  >
                    <Sparkles className="w-12 h-12" />
                    <p className="mt-2 font-bold">Front {i + 1}</p>
                  </div>
                  <div 
                    className="flip-card-back"
                    style={{
                      background: `linear-gradient(135deg, 
                        hsl(${i * 40 + 180}, 70%, 40%), 
                        hsl(${i * 40 + 200}, 70%, 60%))`
                    }}
                  >
                    <Layers className="w-12 h-12" />
                    <p className="mt-2 font-bold">Back {i + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Staggered Timeline */}
      <section className="py-24 bg-gradient-to-r from-green-900 to-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 fade-in-text">
            Timeline Alternativ
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/20"></div>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`timeline-item ${i % 2 === 0 ? 'timeline-left' : 'timeline-right'} 
                  flex items-center gap-8 mb-16 ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className={`timeline-content p-6 rounded-xl ${
                    i % 2 === 0 ? 'text-right' : 'text-left'
                  }`}
                  style={{
                    background: `linear-gradient(135deg, 
                      hsl(${120 + i * 20}, 60%, 30%), 
                      hsl(${140 + i * 20}, 60%, 40%))`
                  }}
                  >
                    <h3 className="text-2xl font-bold mb-2">Pasul {i + 1}</h3>
                    <p className="opacity-80">Descriere detaliată pentru acest pas important în procesul nostru.</p>
                  </div>
                </div>
                <div className="timeline-dot w-8 h-8 bg-white rounded-full shadow-lg flex-shrink-0"></div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Particle Explosion */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 fade-in-text">
            Explozie de Particule
          </h2>
          <div className="relative h-96 flex items-center justify-center">
            <div className="explosion-center w-32 h-32 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full shadow-2xl flex items-center justify-center">
              <Flame className="w-16 h-16 text-white" />
            </div>
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`particle particle-${i % 8}`}
                style={{
                  position: 'absolute',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: `hsl(${i * 18}, 70%, 60%)`
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Accordion Wave */}
      <section className="py-24 bg-gradient-to-b from-purple-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 fade-in-text">
            Acordeon Dinamic
          </h2>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`accordion-item accordion-${i}`}
                style={{
                  background: `linear-gradient(to right, 
                    hsl(${260 + i * 15}, 60%, 40%), 
                    hsl(${280 + i * 15}, 60%, 50%))`
                }}
              >
                <h3 className="text-2xl font-bold mb-2">Secțiunea {i + 1}</h3>
                <p className="opacity-80">Conținut detaliat care apare progresiv cu animație fluidă în timpul scroll-ului.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Rotating Rings */}
      <section className="py-24 bg-gradient-to-r from-pink-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 fade-in-text">
            Inele Rotative
          </h2>
          <div className="relative h-96 flex items-center justify-center">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`ring ring-${i}`}
                style={{
                  position: 'absolute',
                  width: `${100 + i * 60}px`,
                  height: `${100 + i * 60}px`,
                  border: `4px solid hsl(${i * 60}, 70%, 60%)`,
                  borderRadius: '50%',
                  borderTopColor: 'transparent',
                  borderRightColor: 'transparent'
                }}
              />
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <Crown className="w-16 h-16 text-yellow-400" />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Base animations */
        .fade-in-text {
          animation: fadeInClip linear;
          animation-timeline: view();
          animation-range: entry 0% cover 30%;
        }

        /* Wave bars */
        .wave-bar {
          width: 20px;
          animation: waveMotion linear;
          animation-timeline: view();
          animation-range: entry 0% cover 40%;
        }

        .wave-0 { animation-delay: 0s; }
        .wave-1 { animation-delay: 0.05s; }
        .wave-2 { animation-delay: 0.1s; }
        .wave-3 { animation-delay: 0.15s; }
        .wave-4 { animation-delay: 0.2s; }

        /* Spiral cards */
        .spiral-card {
          animation: spiralIn linear;
          animation-timeline: view();
          animation-range: entry 0% cover 50%;
        }

        .spiral-0 { transform-origin: 300px 300px; animation-delay: 0s; }
        .spiral-1 { transform-origin: 300px 300px; animation-delay: 0.1s; }
        .spiral-2 { transform-origin: 300px 300px; animation-delay: 0.2s; }
        .spiral-3 { transform-origin: 300px 300px; animation-delay: 0.3s; }
        .spiral-4 { transform-origin: 300px 300px; animation-delay: 0.4s; }
        .spiral-5 { transform-origin: 300px 300px; animation-delay: 0.5s; }
        .spiral-6 { transform-origin: 300px 300px; animation-delay: 0.6s; }
        .spiral-7 { transform-origin: 300px 300px; animation-delay: 0.7s; }

        /* Morph grid items */
        .morph-grid-item {
          aspect-square;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 20%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: morphGrid linear;
          animation-timeline: view();
          animation-range: entry 0% cover 40%;
        }

        .morph-grid-0 { animation-delay: 0s; }
        .morph-grid-1 { animation-delay: 0.05s; }
        .morph-grid-2 { animation-delay: 0.1s; }
        .morph-grid-3 { animation-delay: 0.15s; }
        .morph-grid-4 { animation-delay: 0.2s; }
        .morph-grid-5 { animation-delay: 0.25s; }

        /* Flip cards */
        .flip-card {
          height: 200px;
          perspective: 1000px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          animation: flipCard linear;
          animation-timeline: view();
          animation-range: entry 0% cover 40%;
          transform-style: preserve-3d;
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        .flip-0 .flip-card-inner { animation-delay: 0s; }
        .flip-1 .flip-card-inner { animation-delay: 0.1s; }
        .flip-2 .flip-card-inner { animation-delay: 0.2s; }
        .flip-3 .flip-card-inner { animation-delay: 0.3s; }

        /* Timeline items */
        .timeline-left {
          animation: slideFromLeft linear;
          animation-timeline: view();
          animation-range: entry 0% cover 30%;
        }

        .timeline-right {
          animation: slideFromRight linear;
          animation-timeline: view();
          animation-range: entry 0% cover 30%;
        }

        .timeline-dot {
          animation: scalePulse linear;
          animation-timeline: view();
          animation-range: entry 0% cover 30%;
        }

        /* Particles */
        .explosion-center {
          animation: scaleRotate linear;
          animation-timeline: view();
          animation-range: entry 0% cover 40%;
        }

        .particle {
          animation: explodeOut linear;
          animation-timeline: view();
          animation-range: entry 0% cover 50%;
        }

        .particle-0 { --angle: 0deg; animation-delay: 0s; }
        .particle-1 { --angle: 45deg; animation-delay: 0.05s; }
        .particle-2 { --angle: 90deg; animation-delay: 0.1s; }
        .particle-3 { --angle: 135deg; animation-delay: 0.15s; }
        .particle-4 { --angle: 180deg; animation-delay: 0.2s; }
        .particle-5 { --angle: 225deg; animation-delay: 0.25s; }
        .particle-6 { --angle: 270deg; animation-delay: 0.3s; }
        .particle-7 { --angle: 315deg; animation-delay: 0.35s; }

        /* Accordion items */
        .accordion-item {
          padding: 2rem;
          border-radius: 1rem;
          overflow: hidden;
          animation: expandWidth linear;
          animation-timeline: view();
          animation-range: entry 0% cover 35%;
        }

        .accordion-0 { animation-delay: 0s; }
        .accordion-1 { animation-delay: 0.1s; }
        .accordion-2 { animation-delay: 0.2s; }
        .accordion-3 { animation-delay: 0.3s; }
        .accordion-4 { animation-delay: 0.4s; }

        /* Rotating rings */
        .ring {
          animation: rotateScale linear;
          animation-timeline: view();
          animation-range: entry 0% cover 60%;
        }

        .ring-0 { animation-delay: 0s; animation-direction: normal; }
        .ring-1 { animation-delay: 0.1s; animation-direction: reverse; }
        .ring-2 { animation-delay: 0.2s; animation-direction: normal; }
        .ring-3 { animation-delay: 0.3s; animation-direction: reverse; }
        .ring-4 { animation-delay: 0.4s; animation-direction: normal; }

        /* Keyframes */
        @keyframes fadeInClip {
          from {
            opacity: 0;
            clip-path: inset(100% 100% 0 0);
          }
          to {
            opacity: 1;
            clip-path: inset(0 0 0 0);
          }
        }

        @keyframes waveMotion {
          from {
            transform: scaleY(0) translateY(50px);
            opacity: 0;
          }
          50% {
            transform: scaleY(1.2) translateY(-10px);
          }
          to {
            transform: scaleY(1) translateY(0);
            opacity: 1;
          }
        }

        @keyframes spiralIn {
          from {
            transform: rotate(0deg) translateX(300px) scale(0);
            opacity: 0;
          }
          to {
            transform: rotate(360deg) translateX(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes morphGrid {
          from {
            border-radius: 0;
            transform: scale(0) rotate(180deg);
            opacity: 0;
          }
          50% {
            border-radius: 50%;
          }
          to {
            border-radius: 20%;
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes flipCard {
          from {
            transform: rotateY(0deg) scale(0.5);
            opacity: 0;
          }
          to {
            transform: rotateY(180deg) scale(1);
            opacity: 1;
          }
        }

        @keyframes slideFromLeft {
          from {
            transform: translateX(-100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideFromRight {
          from {
            transform: translateX(100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes scalePulse {
          from {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.5);
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes scaleRotate {
          from {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          to {
            transform: scale(1) rotate(360deg);
            opacity: 1;
          }
        }

        @keyframes explodeOut {
          from {
            transform: translate(0, 0) scale(0);
            opacity: 0;
          }
          to {
            transform: 
              translateX(calc(cos(var(--angle)) * 150px))
              translateY(calc(sin(var(--angle)) * 150px))
              scale(1);
            opacity: 1;
          }
        }

        @keyframes expandWidth {
          from {
            transform: scaleX(0);
            opacity: 0;
          }
          to {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        @keyframes rotateScale {
          from {
            transform: rotate(0deg) scale(0);
            opacity: 0;
          }
          to {
            transform: rotate(360deg) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}