'use client'

import { 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  TrendingUp,
  Tag
} from 'lucide-react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const blogPosts = [
  {
    id: 1,
    title: 'Strategii Avansate de Marketing Digital pentru 2024',
    author: 'Mihai Maierean',
    date: 'Ianuarie 2024',
    category: 'Marketing Digital',
    excerpt: 'Descoperă cele mai eficiente strategii de marketing digital care vor domina în 2024. De la AI în content marketing la personalizarea avansată.',
    readTime: '8 min',
    slug: 'strategii-marketing-digital-2024',
    gradient: 'bg-blue-600',
    bgGradient: 'bg-blue-50',
    featured: true,
    image: '📊'
  },
  {
    id: 2,
    title: 'Cum să Construiești un Brand Puternic în Era Digitală',
    author: 'Mary Pauliuc',
    date: 'Decembrie 2023',
    category: 'Branding',
    excerpt: 'Ghid complet pentru construirea unei identități de brand memorabile care rezonează cu audiența ta și generează încredere.',
    readTime: '10 min',
    slug: 'construire-brand-puternic',
    gradient: 'bg-blue-600',
    bgGradient: 'bg-blue-50',
    featured: false,
    image: '🎨'
  },
  {
    id: 3,
    title: 'Optimizarea Conversiilor: De la Trafic la Vânzări',
    author: 'Petru Tirlă',
    date: 'Noiembrie 2023',
    category: 'Web Development',
    excerpt: 'Strategii tehnice și de UX pentru transformarea vizitatorilor website-ului în clienți plătitori. Cazuri de studiu reale incluse.',
    readTime: '12 min',
    slug: 'optimizare-conversii-trafic-vanzari',
    gradient: 'bg-blue-600',
    bgGradient: 'bg-blue-50',
    featured: true,
    image: '🚀'
  },
  {
    id: 4,
    title: 'Automatizarea Proceselor de Business cu AI',
    author: 'Mihai Maierean',
    date: 'Octombrie 2023',
    category: 'Tehnologie',
    excerpt: 'Cum să implementezi soluții de inteligență artificială pentru automatizarea proceselor și creșterea eficienței operaționale.',
    readTime: '15 min',
    slug: 'automatizare-procese-business-ai',
    gradient: 'bg-blue-600',
    bgGradient: 'bg-blue-50',
    featured: false,
    image: '🤖'
  },
  {
    id: 5,
    title: 'Employer Branding: Atragerea Talentelor de Top',
    author: 'Mary Pauliuc',
    date: 'Septembrie 2023',
    category: 'HR & Recruiting',
    excerpt: 'Strategii proven pentru construirea unei culturi organizaționale care atrage și reține cei mai buni profesioniști din industrie.',
    readTime: '9 min',
    slug: 'employer-branding-atragere-talente',
    gradient: 'bg-blue-600',
    bgGradient: 'bg-blue-50',
    featured: false,
    image: '👥'
  },
  {
    id: 6,
    title: 'Finanțele Digitale: Instrumente și Strategii 2024',
    author: 'Mihai Maierean',
    date: 'August 2023',
    category: 'Finanțe',
    excerpt: 'Revoluționează managementul financiar al afacerii tale cu cele mai noi instrumente digitale și strategii de optimizare.',
    readTime: '11 min',
    slug: 'finante-digitale-instrumente-strategii',
    gradient: 'bg-blue-600',
    bgGradient: 'bg-blue-50',
    featured: true,
    image: '💰'
  }
]

export default function BlogGrid() {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null)
  
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="group relative"
              onHoverStart={() => setHoveredPost(post.id)}
              onHoverEnd={() => setHoveredPost(null)}
            >
              <motion.div
                className={`relative ${post.bgGradient} rounded-3xl border border-white/50 shadow-lg backdrop-blur-sm transition-all duration-500 overflow-hidden`}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >

                {/* Header with category and emoji */}
                <div className={`relative p-6 ${post.gradient} overflow-hidden`}>
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [-20, -40, -20],
                          opacity: [0.3, 1, 0.3],
                          scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-4xl">{post.image}</div>
                        <div>
                          <div className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-medium">
                            {post.category}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors leading-tight">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Author and Date */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600 font-medium">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{post.date}</span>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="group/btn flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300"
                    >
                      <span className="text-sm">Citește</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Hover effect particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-600 rounded-full"
                      style={{
                        left: `${20 + i * 25}%`,
                        bottom: `${20 + i * 15}%`,
                      }}
                      animate={{
                        y: [-10, -30, -10],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>

        {/* Load More Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-blue-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat'
              }} />
            </div>

            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 font-medium text-sm mb-6"
              >
                <TrendingUp className="w-4 h-4" />
                <span>Conținut Premium</span>
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Vrei să citești mai multe articole?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Abonează-te la newsletter pentru a primi cele mai noi insights direct în inbox
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group inline-flex items-center justify-center bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <Tag className="w-5 h-5 mr-2" />
                  Vezi toate categoriile
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group inline-flex items-center justify-center bg-transparent text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300">
                  Abonează-te la newsletter
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}