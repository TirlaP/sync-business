'use client'

import { 
  Zap, 
  Rocket, 
  Star, 
  Heart, 
  Trophy,
  Sparkles,
  Code,
  Palette,
  Globe,
  Shield,
  Target,
  Cpu
} from 'lucide-react'

export default function ScrollAnimationShowcase() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Section 1: Rotating Cards */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 animated-fade-in">
            Carduri Rotative 3D
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-rotate-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white shadow-2xl">
              <Rocket className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Lansare Rapidă</h3>
              <p>Transformă ideile în realitate cu viteza luminii</p>
            </div>
            <div className="card-rotate-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white shadow-2xl">
              <Zap className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Performanță Max</h3>
              <p>Optimizare la cel mai înalt nivel pentru rezultate extraordinare</p>
            </div>
            <div className="card-rotate-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-8 text-white shadow-2xl">
              <Star className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Calitate Premium</h3>
              <p>Standarde înalte în fiecare detaliu al proiectului</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Sliding Text */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animated-fade-in">Text Animat</h2>
            <p className="text-xl text-gray-300 animated-fade-in-delay">Cuvinte care prind viață</p>
          </div>
          <div className="space-y-8">
            <h3 className="text-slide-left text-6xl font-bold">Inovație</h3>
            <h3 className="text-slide-right text-6xl font-bold text-right">Creativitate</h3>
            <h3 className="text-slide-left text-6xl font-bold">Excelență</h3>
            <h3 className="text-slide-right text-6xl font-bold text-right">Performanță</h3>
          </div>
        </div>
      </section>

      {/* Section 3: Scale and Fade Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 animated-fade-in">
            Grilă Dinamică
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className={`scale-fade-item scale-fade-${i % 4} aspect-square rounded-xl flex items-center justify-center text-white font-bold text-2xl`}
                style={{
                  background: `linear-gradient(135deg, 
                    hsl(${(i * 360) / 16}, 70%, 50%), 
                    hsl(${(i * 360) / 16 + 30}, 70%, 60%))`
                }}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Parallax Icons */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 animated-fade-in">
            Icoane Parallax
          </h2>
          <div className="relative h-96">
            <div className="parallax-icon parallax-1 absolute top-0 left-1/4">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center shadow-xl">
                <Code className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="parallax-icon parallax-2 absolute top-1/4 right-1/4">
              <div className="w-24 h-24 bg-pink-500 rounded-full flex items-center justify-center shadow-xl">
                <Palette className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="parallax-icon parallax-3 absolute bottom-1/4 left-1/3">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-xl">
                <Globe className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="parallax-icon parallax-4 absolute bottom-0 right-1/3">
              <div className="w-28 h-28 bg-green-500 rounded-full flex items-center justify-center shadow-xl">
                <Shield className="w-14 h-14 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Morphing Shapes */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 animated-fade-in">
            Forme Morphing
          </h2>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="morph-shape morph-1 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500"></div>
            <div className="morph-shape morph-2 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500"></div>
            <div className="morph-shape morph-3 w-32 h-32 bg-gradient-to-br from-pink-400 to-red-500"></div>
            <div className="morph-shape morph-4 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500"></div>
          </div>
        </div>
      </section>

      {/* Section 6: Zigzag Progress */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 animated-fade-in">
            Progres Zigzag
          </h2>
          <div className="space-y-12">
            <div className="zigzag-item zigzag-left flex items-center gap-8">
              <div className="w-24 h-24 bg-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Target className="w-12 h-12 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Planificare Strategică</h3>
                <p className="text-gray-600">Analiză detaliată și obiective clare pentru succes garantat</p>
              </div>
            </div>
            <div className="zigzag-item zigzag-right flex items-center gap-8 flex-row-reverse">
              <div className="w-24 h-24 bg-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Cpu className="w-12 h-12 text-white" />
              </div>
              <div className="text-right">
                <h3 className="text-2xl font-bold mb-2">Tehnologie Avansată</h3>
                <p className="text-gray-600">Cele mai noi tehnologii pentru rezultate excepționale</p>
              </div>
            </div>
            <div className="zigzag-item zigzag-left flex items-center gap-8">
              <div className="w-24 h-24 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Trophy className="w-12 h-12 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Rezultate Dovedite</h3>
                <p className="text-gray-600">Portofoliu impresionant cu proiecte de succes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Bouncing Elements */}
      <section className="py-24 bg-gradient-to-b from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 animated-fade-in">
            Elemente Dinamice
          </h2>
          <div className="flex justify-center items-center gap-4">
            <div className="bounce-element bounce-1 w-4 h-16 bg-indigo-500 rounded-full"></div>
            <div className="bounce-element bounce-2 w-4 h-20 bg-purple-500 rounded-full"></div>
            <div className="bounce-element bounce-3 w-4 h-24 bg-pink-500 rounded-full"></div>
            <div className="bounce-element bounce-4 w-4 h-28 bg-red-500 rounded-full"></div>
            <div className="bounce-element bounce-5 w-4 h-24 bg-orange-500 rounded-full"></div>
            <div className="bounce-element bounce-6 w-4 h-20 bg-yellow-500 rounded-full"></div>
            <div className="bounce-element bounce-7 w-4 h-16 bg-green-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Section 8: Floating Hearts */}
      <section className="py-24 bg-pink-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-8 animated-fade-in">
            Mulțumim pentru Încredere
          </h2>
          <p className="text-xl text-center text-gray-600 animated-fade-in-delay">
            Pasiunea noastră este succesul tău
          </p>
        </div>
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`floating-heart floating-heart-${i % 4} absolute`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              <Heart className="w-8 h-8 text-pink-300 fill-current" />
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        /* Basic fade in animations */
        .animated-fade-in {
          animation: appear linear;
          animation-timeline: view();
          animation-range: entry 0% cover 30%;
        }

        .animated-fade-in-delay {
          animation: appear linear;
          animation-timeline: view();
          animation-range: entry 10% cover 30%;
        }

        /* Rotating cards */
        .card-rotate-1,
        .card-rotate-2,
        .card-rotate-3 {
          animation: rotateIn linear;
          animation-timeline: view();
          animation-range: entry 0% cover 40%;
        }

        .card-rotate-2 {
          animation-range: entry 5% cover 35%;
        }

        .card-rotate-3 {
          animation-range: entry 10% cover 30%;
        }

        /* Sliding text */
        .text-slide-left {
          animation: slideFromLeft linear;
          animation-timeline: view();
          animation-range: entry 0% cover 30%;
        }

        .text-slide-right {
          animation: slideFromRight linear;
          animation-timeline: view();
          animation-range: entry 0% cover 30%;
        }

        /* Scale and fade grid */
        .scale-fade-item {
          animation: scaleAndFade linear;
          animation-timeline: view();
          animation-range: entry 0% cover 40%;
        }

        .scale-fade-0 { animation-range: entry 0% cover 40%; }
        .scale-fade-1 { animation-range: entry 5% cover 35%; }
        .scale-fade-2 { animation-range: entry 10% cover 30%; }
        .scale-fade-3 { animation-range: entry 15% cover 25%; }

        /* Parallax icons */
        .parallax-icon {
          animation: floatUp linear;
          animation-timeline: view();
        }

        .parallax-1 { animation-range: entry 0% cover 50%; }
        .parallax-2 { animation-range: entry -10% cover 60%; }
        .parallax-3 { animation-range: entry -20% cover 70%; }
        .parallax-4 { animation-range: entry -30% cover 80%; }

        /* Morphing shapes */
        .morph-shape {
          animation: morphShape linear;
          animation-timeline: view();
          animation-range: entry 0% cover 50%;
        }

        .morph-1 { animation-delay: 0s; }
        .morph-2 { animation-delay: 0.1s; }
        .morph-3 { animation-delay: 0.2s; }
        .morph-4 { animation-delay: 0.3s; }

        /* Zigzag items */
        .zigzag-left {
          animation: zigzagLeft linear;
          animation-timeline: view();
          animation-range: entry 0% cover 30%;
        }

        .zigzag-right {
          animation: zigzagRight linear;
          animation-timeline: view();
          animation-range: entry 0% cover 30%;
        }

        /* Bouncing elements */
        .bounce-element {
          animation: bounceScale linear;
          animation-timeline: view();
          animation-range: entry 0% cover 40%;
        }

        .bounce-1 { animation-delay: 0s; }
        .bounce-2 { animation-delay: 0.05s; }
        .bounce-3 { animation-delay: 0.1s; }
        .bounce-4 { animation-delay: 0.15s; }
        .bounce-5 { animation-delay: 0.2s; }
        .bounce-6 { animation-delay: 0.25s; }
        .bounce-7 { animation-delay: 0.3s; }

        /* Floating hearts */
        .floating-heart {
          animation: floatHeart linear;
          animation-timeline: view();
          animation-range: entry -20% cover 120%;
        }

        .floating-heart-0 { animation-delay: 0s; }
        .floating-heart-1 { animation-delay: 0.2s; }
        .floating-heart-2 { animation-delay: 0.4s; }
        .floating-heart-3 { animation-delay: 0.6s; }

        /* Keyframes */
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

        @keyframes rotateIn {
          from {
            opacity: 0;
            transform: rotateY(-90deg) scale(0.5);
          }
          to {
            opacity: 1;
            transform: rotateY(0) scale(1);
          }
        }

        @keyframes slideFromLeft {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideFromRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleAndFade {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes floatUp {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes morphShape {
          from {
            border-radius: 0;
            transform: rotate(0deg) scale(0);
            opacity: 0;
          }
          50% {
            border-radius: 50%;
          }
          to {
            border-radius: 20%;
            transform: rotate(360deg) scale(1);
            opacity: 1;
          }
        }

        @keyframes zigzagLeft {
          from {
            opacity: 0;
            transform: translateX(-50px) translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
        }

        @keyframes zigzagRight {
          from {
            opacity: 0;
            transform: translateX(50px) translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
        }

        @keyframes bounceScale {
          from {
            transform: scaleY(0) scaleX(2);
            opacity: 0;
          }
          50% {
            transform: scaleY(1.2) scaleX(0.8);
          }
          to {
            transform: scaleY(1) scaleX(1);
            opacity: 1;
          }
        }

        @keyframes floatHeart {
          from {
            transform: translateY(50px) rotate(-45deg) scale(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px) rotate(-45deg) scale(1.2);
            opacity: 1;
          }
          to {
            transform: translateY(0) rotate(-45deg) scale(1);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  )
}