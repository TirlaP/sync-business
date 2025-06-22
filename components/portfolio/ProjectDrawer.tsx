'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { 
  ExternalLink, 
  Globe, 
  Calendar,
  TrendingUp,
  Award,
  Sparkles,
  Eye,
  ArrowRight,
  X,
  CheckCircle2,
  Target,
  Users,
  BarChart3,
  Clock,
  Star
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const portfolioItems = [
  {
    id: 1,
    slug: 'be-zone',
    client: 'BE ZONE',
    category: 'Marketing Digital',
    description: 'Strategie completă de marketing digital și rebranding pentru poziționarea în piață premium',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
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
    results: [
      { label: 'Brand Awareness', value: '+180%' },
      { label: 'Lead Quality', value: '+220%' },
      { label: 'Cost per Lead', value: '-45%' },
      { label: 'Customer Lifetime Value', value: '+160%' },
      { label: 'Social Media Engagement', value: '+320%' },
      { label: 'Website Traffic', value: '+150%' }
    ],
    testimonial: {
      text: "Colaborarea cu SYNC a transformat complet modul în care ne percep clienții. Rezultatele au depășit toate așteptările.",
      author: "Alexandru Munteanu",
      position: "CEO, BE ZONE"
    }
  },
  {
    id: 2,
    slug: 'casa-napoca',
    client: 'Casa Napoca',
    category: 'Web Design',
    description: 'Website modern responsive și optimizare SEO avansată pentru agenție imobiliară',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop',
    website: 'casanapoca.ro',
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
    results: [
      { label: 'Page Load Speed', value: '+75%' },
      { label: 'Mobile Usability', value: '+90%' },
      { label: 'Search Rankings', value: 'Top 3 for 15+ keywords' },
      { label: 'User Engagement', value: '+140%' },
      { label: 'Lead Generation', value: '+80%' },
      { label: 'Bounce Rate', value: '-35%' }
    ],
    testimonial: {
      text: "Website-ul nou ne-a adus mai mulți clienți calificați decât toate campaniile anterioare la un loc.",
      author: "Maria Ionescu",
      position: "Marketing Manager, Casa Napoca"
    }
  }
]

interface ProjectDrawerProps {
  open: boolean
  onClose: () => void
  projectId: number | null
}

export default function ProjectDrawer({ open, onClose, projectId }: ProjectDrawerProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const project = projectId ? portfolioItems.find(p => p.id === projectId) : null

  // Handle URL changes
  useEffect(() => {
    const handlePopState = () => {
      if (!searchParams.get('project')) {
        onClose()
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [onClose, searchParams])

  const handleClose = () => {
    // Update URL back to portfolio page without navigation
    window.history.pushState(null, '', '/portofoliu')
    onClose()
  }

  if (!project) return null

  return (
    <Drawer open={open} onOpenChange={handleClose} direction="right">
      <DrawerContent className="h-full w-[60vw] min-w-[800px] ml-auto rounded-none bg-white border-l border-gray-200 shadow-2xl">
        <div className="overflow-y-auto h-full">
          <DrawerHeader className="px-6 py-4 sticky top-0 bg-white z-10 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  {project.client.substring(0, 2)}
                </div>
                <div>
                  <DrawerTitle className="text-2xl font-bold text-gray-900">
                    {project.client}
                  </DrawerTitle>
                  <DrawerDescription className="text-lg font-semibold text-blue-600">
                    {project.category} • {project.timeline}
                  </DrawerDescription>
                </div>
              </div>
              <button 
                onClick={handleClose}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </DrawerHeader>

          <div className="p-6">
            {/* Hero Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
              <Image 
                src={project.image} 
                alt={project.client}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>

            {/* About Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Despre Proiect</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 rounded-xl">
              <div className="text-center">
                <div className="text-sm text-gray-500">Timeline</div>
                <div className="font-bold text-gray-900">{project.timeline}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500">Budget</div>
                <div className="font-bold text-gray-900">{project.budget}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500">Team</div>
                <div className="font-bold text-gray-900">{project.team.length} specialiști</div>
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  Provocări
                </h4>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  Soluții
                </h4>
                <ul className="space-y-3">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Results */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-blue-600" />
                Rezultate
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 border border-gray-200 text-center"
                  >
                    <div className="text-2xl font-bold text-blue-600 mb-1">{result.value}</div>
                    <div className="text-sm text-gray-600">{result.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                Echipa Proiect
              </h4>
              <div className="flex flex-wrap gap-3">
                {project.team.map((member, index) => (
                  <div key={member} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg border border-blue-200">
                    <span className="font-medium">{member}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            {project.testimonial && (
              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">💬</div>
                  <blockquote className="text-lg text-gray-700 mb-6 italic">
                    &ldquo;{project.testimonial.text}&rdquo;
                  </blockquote>
                  <div>
                    <div className="font-bold text-gray-900">{project.testimonial.author}</div>
                    <div className="text-gray-600">{project.testimonial.position}</div>
                  </div>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="bg-blue-600 rounded-xl p-8 text-white text-center">
              <h4 className="text-2xl font-bold mb-4">
                Vrei rezultate similare pentru afacerea ta?
              </h4>
              <p className="text-blue-100 mb-6 text-lg">
                Hai să discutăm despre cum putem transforma și proiectul tău într-un success story
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Programează consultație
                </button>
                {project.website && (
                  <a 
                    href={`https://${project.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors flex items-center justify-center gap-2"
                  >
                    <Globe className="w-5 h-5" />
                    Vezi site-ul live
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}