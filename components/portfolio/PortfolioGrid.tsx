'use client'

import { 
  ExternalLink, 
  Globe, 
  ChevronRight, 
  Filter,
  TrendingUp,
  Award,
  Sparkles,
  Eye,
  ArrowRight
} from 'lucide-react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import ProjectDrawer from './ProjectDrawer'
import Image from 'next/image'

const portfolioItems = [
  {
    id: 1,
    slug: 'be-zone',
    client: 'BE ZONE',
    category: 'Marketing Digital',
    description: 'Strategie completă de marketing digital și rebranding pentru poziționarea în piață premium',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
  },
  {
    id: 2,
    slug: 'casa-napoca',
    client: 'Casa Napoca',
    category: 'Web Design',
    description: 'Website modern responsive și optimizare SEO avansată pentru agenție imobiliară',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop',
    website: 'casanapoca.ro',
  },
  {
    id: 3,
    slug: 'iconts',
    client: 'iConts',
    category: 'Brand Identity',
    description: 'Identitate vizuală completă și strategie de brand pentru startup fintech',
    image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    slug: 'mandachi',
    client: 'MANDACHI',
    category: 'Marketing Digital',
    description: 'Campanii integrate social media, Google Ads și marketing automation',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 5,
    slug: 'solvam',
    client: 'SOLVAM',
    category: 'Consultanță Business',
    description: 'Consultanță strategică de business și optimizare procese operaționale',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 6,
    slug: 'florentini',
    client: 'FLORENTINI',
    category: 'E-commerce',
    description: 'Magazin online complet cu integrări avansate de plată și sistem de livrare',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 7,
    slug: 'spartan-restaurant',
    client: 'SPARTAN Restaurant',
    category: 'Employer Branding',
    description: 'Strategie completă de employer branding și sistem de recrutare digitală',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
    website: 'spartanrestaurant.ro',
  },
  {
    id: 8,
    slug: 'platon-project',
    client: 'Platon PROJECT',
    category: 'Web Design',
    description: 'Website profesional pentru companie de transport internațional cu tracking sistem',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop',
  }
]

const categories = [
  { name: 'Toate', count: portfolioItems.length },
  { name: 'Marketing Digital', count: portfolioItems.filter(item => item.category === 'Marketing Digital').length },
  { name: 'Web Design', count: portfolioItems.filter(item => item.category === 'Web Design').length },
  { name: 'Brand Identity', count: portfolioItems.filter(item => item.category === 'Brand Identity').length },
  { name: 'Consultanță Business', count: portfolioItems.filter(item => item.category === 'Consultanță Business').length },
  { name: 'E-commerce', count: portfolioItems.filter(item => item.category === 'E-commerce').length },
  { name: 'Employer Branding', count: portfolioItems.filter(item => item.category === 'Employer Branding').length },
]

interface PortfolioGridProps {
  initialProjectId?: number
}

export default function PortfolioGrid({ initialProjectId }: PortfolioGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('Toate')
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const filtersRef = useRef(null)
  const gridRef = useRef(null)
  
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const titleInView = useInView(titleRef, { once: true, margin: "-50px" })
  const filtersInView = useInView(filtersRef, { once: true, margin: "-50px" })
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" })

  const filteredItems = selectedCategory === 'Toate' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  // Handle project selection from URL path or initial prop
  React.useEffect(() => {
    // If initialProjectId is provided (from dynamic route), use it
    if (initialProjectId) {
      setSelectedProject(initialProjectId)
      setDrawerOpen(true)
      return
    }

    const path = window.location.pathname
    const pathParts = path.split('/')
    
    if (pathParts.length === 3 && pathParts[1] === 'portofoliu') {
      const slug = pathParts[2]
      const project = portfolioItems.find(p => p.slug === slug)
      if (project) {
        setSelectedProject(project.id)
        setDrawerOpen(true)
      }
    } else {
      // Handle legacy query param format
      const projectId = searchParams.get('project')
      if (projectId) {
        const id = parseInt(projectId)
        setSelectedProject(id)
        setDrawerOpen(true)
      }
    }
  }, [searchParams, initialProjectId])

  const handleProjectClick = (projectId: number) => {
    const project = portfolioItems.find(p => p.id === projectId)
    if (project) {
      setSelectedProject(projectId)
      setDrawerOpen(true)
      // Update URL without any navigation or state loss
      window.history.pushState(null, '', `/portofoliu/${project.slug}`)
    }
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
    setSelectedProject(null)
    // Update URL back to portfolio page without navigation
    window.history.pushState(null, '', '/portofoliu')
  }

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Category Filter */}
        <div ref={filtersRef} className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={filtersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-blue-300'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div ref={gridRef}>
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="group relative cursor-pointer"
                  onClick={() => handleProjectClick(item.id)}
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                    {/* Image */}
                    <Image 
                      src={item.image} 
                      alt={item.client}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-all duration-500" />
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="mb-2">
                        <span className="px-3 py-1 bg-blue-600 rounded-full text-sm font-medium">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-200 transition-colors">
                        {item.client}
                      </h3>
                      <p className="text-gray-200 mb-4 opacity-90">
                        {item.description}
                      </p>
                      
                      {/* Learn More */}
                      <div className="flex items-center gap-2 text-blue-200 font-medium group-hover:text-white transition-colors">
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Hover Info */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      {item.website && (
                        <a 
                          href={`https://${item.website}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm hover:bg-white/30 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Globe className="w-4 h-4" />
                          Visit site
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Note */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full text-blue-200 font-medium text-sm mb-4"
              >
                <Eye className="w-4 h-4" />
                <span>Portofoliu Complet</span>
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">
                Vrei să vezi studii de caz complete?
              </h3>
              <p className="text-blue-100 mb-4">
                Portofoliul detaliat cu metrici, strategii și rezultate se trimite la cerere
              </p>
              <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                <span>Solicită portofoliul complet</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Project Drawer */}
        <ProjectDrawer 
          open={drawerOpen}
          onClose={handleDrawerClose}
          projectId={selectedProject}
        />
      </div>
    </section>
  )
}