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
  Linkedin, 
  Briefcase, 
  Code, 
  Palette, 
  Users, 
  Award,
  Sparkles,
  Star,
  ArrowRight,
  Mail,
  Calendar,
  Quote,
  X,
  CheckCircle2,
  Target,
  Trophy,
  BookOpen,
  Clock,
  Globe,
  Phone
} from 'lucide-react'
import { motion } from 'framer-motion'

const teamMembers = [
  {
    id: 1,
    slug: 'mihai-maierean',
    name: 'Mihai Maierean',
    role: 'Founder & CEO',
    description: 'Expert în strategii de business și consultanță financiară cu peste 8 ani de experiență',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop',
    specializations: [
      'Expert Contabilitate & Fiscal',
      'Business Strategy & Growth',
      'Training & Consultanță Premium',
      'Management Organizațional',
      'Public Speaking & Leadership'
    ],
    achievements: [
      'CEO cont24.com - 8 ani experiență',
      '500+ clienți ghidați către succes',
      'Speaker la 50+ evenimente business'
    ],
    skills: ['Strategy', 'Leadership', 'Finance', 'Growth'],
    quote: "Succesul vine din combinația perfectă între strategie clară și execuție impecabilă.",
    linkedin: '#',
    email: 'mihai@sync.ro',
    phone: '+40 721 234 567',
    experience: '8+ ani',
    projects: '200+',
    icon: Briefcase,
    featured: true,
    fullBio: 'Mihai este un antreprenor cu o pasiune pentru transformarea afacerilor prin strategii inovatoare și implementare precisă. Cu peste 8 ani de experiență în consultanță business și management financiar, a ajutat sute de companii să-și atingă potențialul maxim.',
    education: [
      'MBA în Management Strategic - ASE București',
      'Licență în Contabilitate și Informatică de Gestiune',
      'Certificare în Leadership și Management - INSEAD'
    ],
    certifications: [
      'Certified Management Consultant (CMC)',
      'Expert Contabil autorizat CECCAR',
      'Certified Business Strategist',
      'Digital Transformation Specialist'
    ],
    languages: ['Română (Nativ)', 'Engleză (Fluent)', 'Germană (Conversațional)'],
    hobbies: ['Public Speaking', 'Fotografia', 'Călătoriile', 'Lectura'],
    personalProjects: [
      'Fondator cont24.com - Platformă de contabilitate digitală',
      'Mentor în programul StartUp România',
      'Speaker la evenimente de business și antreprenoriat'
    ],
    workingStyle: 'Mihai abordează fiecare proiect cu atenție la detalii și o viziune strategică pe termen lung. Crede în puterea colaborării și în construirea de relații durabile cu clienții.',
    availability: 'Consultații programate în fiecare zi de marți și joi, 10:00-16:00'
  },
  {
    id: 2,
    slug: 'petru-tirla',
    name: 'Petru Tirlă',
    role: 'Senior Full-Stack Developer',
    title: 'Technical Lead',
    avatar: '👨‍💻',
    gradient: 'from-emerald-500 via-green-600 to-teal-700',
    bgGradient: 'from-emerald-50 to-teal-50',
    specializations: [
      'Full-Stack Web Development',
      'Performance Optimization',
      'Custom Software Solutions',
      'AI Integration & Automation',
      'Cloud Architecture & DevOps'
    ],
    achievements: [
      'Dezvoltator cu 6+ ani experiență',
      '100+ aplicații web create',
      'Expert în tehnologii moderne'
    ],
    skills: ['React', 'Node.js', 'AI/ML', 'DevOps'],
    quote: "Codul de calitate și inovația tehnologică sunt cheia transformării digitale.",
    linkedin: '#',
    email: 'petru@sync.ro',
    phone: '+40 721 345 678',
    experience: '6+ ani',
    projects: '150+',
    icon: Code,
    featured: false,
    fullBio: 'Petru este un dezvoltator pasionat de tehnologie cu o experiență vastă în crearea de soluții web complexe. Se specializează în arhitecturi scalabile și integrarea tehnologiilor AI în aplicații business.',
    education: [
      'Master în Inginerie Software - Universitatea Tehnică Cluj',
      'Licență în Informatică',
      'Certificare în Cloud Computing - AWS'
    ],
    certifications: [
      'AWS Certified Solutions Architect',
      'Google Cloud Professional Developer',
      'React Advanced Patterns Certification',
      'AI/ML Specialist Certificate'
    ],
    languages: ['Română (Nativ)', 'Engleză (Fluent)', 'Franceză (Intermediar)'],
    hobbies: ['Programare Open Source', 'Gaming', 'Muzica electronică', 'Hiking'],
    personalProjects: [
      'Contribuitor la 15+ proiecte open source',
      'Creator de tools pentru developeri',
      'Blog tehnic cu 10K+ cititori'
    ],
    workingStyle: 'Petru este meticulos în scrierea codului și pune accent pe performance și scalabilitate. Iubește să experimenteze cu tehnologii noi și să găsească soluții elegante la probleme complexe.',
    availability: 'Disponibil pentru consultații tehnice luni-vineri, 14:00-18:00'
  },
  {
    id: 3,
    slug: 'mary-pauliuc',
    name: 'Mary Pauliuc',
    role: 'Marketing & Brand Strategist',
    title: 'Creative Director',
    avatar: '👩‍💼',
    gradient: 'from-purple-500 via-pink-600 to-rose-700',
    bgGradient: 'from-purple-50 to-pink-50',
    specializations: [
      'Employer Branding Strategy',
      'Digital Marketing Campaigns',
      'Brand Identity & Design',
      'Social Media Growth',
      'Content Strategy & Creation'
    ],
    achievements: [
      'Strategist cu 5+ ani experiență',
      '80+ branduri transformate',
      'Specialist în employer branding'
    ],
    skills: ['Branding', 'Marketing', 'Design', 'Strategy'],
    quote: "Brandurile puternice se construiesc prin povești autentice și conexiuni emoționale.",
    linkedin: '#',
    email: 'mary@sync.ro',
    phone: '+40 721 456 789',
    experience: '5+ ani',
    projects: '120+',
    icon: Palette,
    featured: false,
    fullBio: 'Mary este o creatoare de branduri cu o perspectivă unică asupra modului în care companiile pot să se conecteze autintic cu audiența lor. Se specializează în employer branding și în construirea de comunități puternice.',
    education: [
      'Master în Marketing și Comunicare - SNSPA',
      'Licență în Design Grafic',
      'Certificare în Digital Marketing - Google'
    ],
    certifications: [
      'Google Ads Certified',
      'Facebook Blueprint Certification',
      'Brand Strategy Professional',
      'Content Marketing Specialist'
    ],
    languages: ['Română (Nativ)', 'Engleză (Fluent)', 'Spaniolă (Conversațional)'],
    hobbies: ['Design grafic', 'Fotografia', 'Călătoriile', 'Yoga'],
    personalProjects: [
      'Fondatoare blog despre employer branding',
      'Organizatoare evenimente marketing locale',
      'Mentor pentru tineri creativi'
    ],
    workingStyle: 'Mary combină creativitatea cu analiza de date pentru a crea strategii de brand care rezonează cu audiența țintă. Este pasionată de storytelling și de construirea de identități vizuale memorabile.',
    availability: 'Sesiuni de brainstorming creative marți și joi, 9:00-13:00'
  }
]

interface TeamDrawerProps {
  open: boolean
  onClose: () => void
  memberId: number | null
}

export default function TeamDrawer({ open, onClose, memberId }: TeamDrawerProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const member = memberId ? teamMembers.find(m => m.id === memberId) : null

  // Handle URL changes
  useEffect(() => {
    const handlePopState = () => {
      if (!searchParams.get('member')) {
        onClose()
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [onClose, searchParams])

  const handleClose = () => {
    // Update URL back to team page without navigation
    window.history.pushState(null, '', '/echipa')
    onClose()
  }

  if (!member) return null

  const Icon = member.icon

  return (
    <Drawer open={open} onOpenChange={handleClose} direction="right">
      <DrawerContent className="h-full w-[60vw] min-w-[800px] ml-auto rounded-none bg-white border-l border-gray-200 shadow-2xl">
        <div className="overflow-y-auto h-full">
          <DrawerHeader className="px-6 py-4 sticky top-0 bg-white z-10 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${member.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}>
                  {member.avatar}
                </div>
                <div>
                  <DrawerTitle className="text-2xl font-bold text-gray-900">
                    {member.name}
                  </DrawerTitle>
                  <DrawerDescription className={`text-lg font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                    {member.role}
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
            {/* Featured badge */}
            {member.featured && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full text-orange-700 font-medium text-sm mb-6">
                <Star className="w-4 h-4" />
                <span>Founder</span>
              </div>
            )}

            {/* Hero section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Despre {member.name.split(' ')[0]}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {member.fullBio}
                </p>
                
                {/* Quote */}
                <div className={`bg-gradient-to-br ${member.bgGradient} rounded-xl p-6 mb-6`}>
                  <Quote className="w-6 h-6 text-gray-400 mb-3" />
                  <p className="text-gray-700 italic text-lg">
                    &ldquo;{member.quote}&rdquo;
                  </p>
                </div>

                {/* Working style */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Stil de Lucru
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {member.workingStyle}
                  </p>
                </div>
              </div>

              {/* Stats card */}
              <div className="space-y-6">
                <div className={`bg-gradient-to-br ${member.bgGradient} rounded-2xl p-6 border border-gray-200`}>
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${member.gradient} rounded-2xl mb-4 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{member.experience}</div>
                    <div className="text-gray-600 font-medium">Experiență</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                    <div className="text-2xl font-bold text-gray-900">{member.projects}</div>
                    <div className="text-sm text-gray-600">Proiecte</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                    <div className="text-2xl font-bold text-gray-900">{member.achievements.length}+</div>
                    <div className="text-sm text-gray-600">Realizări</div>
                  </div>
                </div>

                {/* Contact info */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Contact Direct</h4>
                  <div className="space-y-2">
                    <a 
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors group"
                    >
                      <Mail className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                      <span className="text-gray-700">{member.email}</span>
                    </a>
                    <a 
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors group"
                    >
                      <Phone className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                      <span className="text-gray-700">{member.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills & Specializations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Specializări Principale
                </h4>
                <div className="space-y-3">
                  {member.specializations.map((spec, index) => (
                    <div key={spec} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Realizări Cheie
                </h4>
                <div className="space-y-3">
                  {member.achievements.map((achievement, index) => (
                    <div key={achievement} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-200">
                      <Award className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Educație
                </h4>
                <div className="space-y-3">
                  {member.education.map((edu, index) => (
                    <div key={edu} className="p-4 bg-gray-50 rounded-xl">
                      <div className="text-gray-800 font-medium">{edu}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Certificări
                </h4>
                <div className="space-y-2">
                  {member.certifications.map((cert, index) => (
                    <div key={cert} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200">
                      <div className={`w-2 h-2 bg-gradient-to-r ${member.gradient} rounded-full`} />
                      <span className="text-gray-700 text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Languages & Hobbies */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Limbi Vorbite
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.languages.map((lang, index) => (
                    <span 
                      key={lang}
                      className={`px-3 py-2 bg-gradient-to-r ${member.gradient} bg-opacity-10 text-gray-700 rounded-full text-sm font-medium border border-gray-200`}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Hobby-uri & Interese
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.hobbies.map((hobby, index) => (
                    <span 
                      key={hobby}
                      className="px-3 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Personal Projects */}
            <div className="mb-12">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Proiecte Personale
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {member.personalProjects.map((project, index) => (
                  <div key={project} className="p-4 bg-white rounded-xl border border-gray-200">
                    <div className="text-gray-800 text-sm leading-relaxed">{project}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className={`bg-gradient-to-br ${member.bgGradient} rounded-2xl p-6 mb-8`}>
              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Disponibilitate
              </h4>
              <p className="text-gray-700">{member.availability}</p>
            </div>

            {/* CTA */}
            <div className={`bg-gradient-to-r ${member.gradient} rounded-2xl p-8 text-white text-center`}>
              <h4 className="text-2xl font-bold mb-4">
                Vrei să colaborezi cu {member.name.split(' ')[0]}?
              </h4>
              <p className="text-white/90 mb-6 text-lg">
                Programează o consultație și descoperă cum poate să te ajute să-ți atingi obiectivele
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`mailto:${member.email}?subject=Consultație cu ${member.name}`}
                  className="bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Trimite email
                </a>
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-5 h-5" />
                  Conectează pe LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}