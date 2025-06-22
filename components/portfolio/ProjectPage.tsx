'use client'

import { motion } from 'framer-motion'
import { 
  ExternalLink, 
  Globe, 
  Calendar,
  TrendingUp,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Target,
  Users,
  BarChart3,
  Clock,
  Star,
  ArrowLeft
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const portfolioItems = [
  {
    id: 1,
    slug: 'be-zone',
    client: 'BE ZONE',
    category: 'Marketing',
    description: 'Strategie completă de marketing digital și rebranding pentru poziționarea în piață premium',
    services: ['Social Media Management', 'Branding', 'Campanii ADS', 'Content Strategy'],
    logo: '🏢',
    gradient: 'bg-blue-600',
    bgGradient: 'bg-blue-50',
    results: '+150% creștere vizibilitate',
    metrics: { visitors: '12K+', conversion: '15%', roi: '280%' },
    featured: true,
    fullDescription: 'Proiectul BE ZONE a reprezentat o transformare completă a prezenței digitale pentru o companie din domeniul consultanței business. Am dezvoltat o strategie integrată care a combinat rebranding-ul cu campanii de marketing digital țintite.',
    challenges: [
      'Piață saturată cu competitori agresivi',
      'Lipsa unei identități vizuale coerente',
      'ROI scăzut din campaniile anterioare',
      'Audiența target neclar definită'
    ],
    solutions: [
      'Audit complet și strategie de repositioning',
      'Dezvoltarea unei identități vizuale premium',
      'Campanii multi-canal optimizate pentru conversie',
      'Implementarea sistemelor de tracking avansat'
    ],
    timeline: '6 luni',
    budget: '€15,000 - €25,000',
    team: ['Marketing Strategist', 'Graphic Designer', 'PPC Specialist', 'Content Creator'],
    detailedMetrics: {
      'Brand Awareness': '+180%',
      'Lead Quality': '+220%',
      'Cost per Lead': '-45%',
      'Customer Lifetime Value': '+160%',
      'Social Media Engagement': '+320%',
      'Website Traffic': '+150%'
    },
    testimonial: {
      text: "Colaborarea cu SYNC a transformat complet modul în care ne percep clienții. Rezultatele au depășit toate așteptările.",
      author: "Alexandru Munteanu",
      position: "CEO, BE ZONE"
    },
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  {
    id: 2,
    slug: 'casa-napoca',
    client: 'Casa Napoca',
    category: 'Web Design',
    description: 'Website modern responsive și optimizare SEO avansată pentru agenție imobiliară',
    services: ['Web Design', 'SEO Optimization', 'UI/UX Design', 'Performance'],
    logo: '🏠',
    gradient: 'bg-blue-600',
    bgGradient: 'bg-blue-50',
    results: '+80% conversii în 3 luni',
    metrics: { visitors: '8K+', conversion: '22%', roi: '195%' },
    website: 'casanapoca.ro',
    featured: false,
    fullDescription: 'Casa Napoca avea nevoie de o prezență online modernă care să reflecte calitatea serviciilor imobiliare oferite. Am creat un website complet responsive cu funcționalități avansate de căutare proprietăți.',
    challenges: [
      'Website vechi și neoptimizat',
      'Timpul de încărcare ridicat',
      'Interfață user-unfriendly',
      'Lipsa optimizării SEO'
    ],
    solutions: [
      'Design modern și responsive',
      'Optimizare performance și SEO',
      'Sistem avansat de filtrare proprietăți',
      'Integrare CRM și automatizări'
    ],
    timeline: '4 luni',
    budget: '€8,000 - €12,000',
    team: ['Web Developer', 'UI/UX Designer', 'SEO Specialist'],
    detailedMetrics: {
      'Page Load Speed': '+75%',
      'Mobile Usability': '+90%',
      'Search Rankings': 'Top 3 for 15+ keywords',
      'User Engagement': '+140%',
      'Lead Generation': '+80%',
      'Bounce Rate': '-35%'
    },
    testimonial: {
      text: "Website-ul nou ne-a adus mai mulți clienți calificați decât toate campaniile anterioare la un loc.",
      author: "Maria Ionescu",
      position: "Marketing Manager, Casa Napoca"
    },
    images: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
    ]
  },
]

interface ProjectPageProps {
  slug: string
}

export default function ProjectPage({ slug }: ProjectPageProps) {
  const project = portfolioItems.find(p => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Proiect inexistent</h1>
          <Link href="/portofoliu" className="text-blue-600 hover:text-blue-800">
            ← Înapoi la portofoliu
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className={`${project.gradient} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link 
            href="/portofoliu" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Înapoi la portofoliu
          </Link>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center text-4xl backdrop-blur-sm">
              {project.logo}
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">{project.client}</h1>
              <p className="text-xl text-white/90">{project.category} • {project.timeline}</p>
            </div>
          </div>

          {project.featured && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium text-sm mb-6">
              <Star className="w-4 h-4" />
              <span>Proiect Featured</span>
            </div>
          )}

          <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
            {project.fullDescription}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Servicii Oferite</h2>
          <div className="flex flex-wrap gap-3">
            {project.services.map((service, index) => (
              <span 
                key={service}
                className="px-4 py-2 bg-blue-50 text-blue-700 rounded-xl text-sm font-medium border border-blue-200"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Images */}
        {project.images && project.images.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Galerie Proiect</h2>
            <div className="grid gap-6">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src={project.images[0]} 
                  alt={`${project.client} preview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              {project.images.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.images.slice(1).map((image, index) => (
                    <div key={index} className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                      <Image 
                        src={image} 
                        alt={`${project.client} preview ${index + 2}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Challenges & Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-red-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
              <Target className="w-6 h-6" />
              Provocări Identificate
            </h3>
            <ul className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3 text-red-800">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0" />
                  <span className="text-lg">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6" />
              Soluții Implementate
            </h3>
            <ul className="space-y-4">
              {project.solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3 text-green-800">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-lg">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Detailed Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <BarChart3 className="w-8 h-8" />
            Rezultate Detaliate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(project.detailedMetrics).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-sm text-gray-500 mb-2">{key}</div>
                <div className="text-3xl font-bold text-blue-600">
                  {value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Users className="w-8 h-8" />
            Echipa Proiect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.team.map((member, index) => (
              <div key={member} className="p-4 bg-blue-50 rounded-2xl border border-blue-200">
                <span className="font-semibold text-gray-800">{member}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <Clock className="w-12 h-12 mx-auto mb-4 text-gray-600" />
            <div className="text-sm text-gray-500 mb-2">Timeline</div>
            <div className="text-xl font-bold text-gray-900">{project.timeline}</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <TrendingUp className="w-12 h-12 mx-auto mb-4 text-gray-600" />
            <div className="text-sm text-gray-500 mb-2">Budget</div>
            <div className="text-xl font-bold text-gray-900">{project.budget}</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <Users className="w-12 h-12 mx-auto mb-4 text-gray-600" />
            <div className="text-sm text-gray-500 mb-2">Echipă</div>
            <div className="text-xl font-bold text-gray-900">{project.team.length} specialiști</div>
          </div>
        </div>

        {/* Testimonial */}
        {project.testimonial && (
          <div className={`${project.bgGradient} rounded-3xl p-12 mb-16`}>
            <div className="text-center">
              <div className="text-6xl mb-6">💬</div>
              <blockquote className="text-2xl text-gray-700 mb-8 italic font-medium leading-relaxed">
                &ldquo;{project.testimonial.text}&rdquo;
              </blockquote>
              <div>
                <div className="text-xl font-bold text-gray-900">{project.testimonial.author}</div>
                <div className="text-gray-600">{project.testimonial.position}</div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className={`${project.gradient} rounded-3xl p-12 text-white text-center`}>
          <h3 className="text-4xl font-bold mb-6">
            Vrei rezultate similare pentru afacerea ta?
          </h3>
          <p className="text-white/90 mb-8 text-xl max-w-2xl mx-auto">
            Hai să discutăm despre cum putem transforma și proiectul tău într-un success story
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-lg">
              <Calendar className="w-6 h-6" />
              Programează consultație
            </button>
            {project.website && (
              <a 
                href={`https://${project.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-colors flex items-center justify-center gap-2 text-lg"
              >
                <Globe className="w-6 h-6" />
                Vezi site-ul live
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}