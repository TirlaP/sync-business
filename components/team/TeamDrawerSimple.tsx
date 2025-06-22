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
  Mail,
  Calendar,
  Quote,
  X,
  CheckCircle2,
  Trophy,
  BookOpen,
  Clock,
  Globe,
  Phone,
  Users,
  Award
} from 'lucide-react'
import Image from 'next/image'

const teamMembers = [
  {
    id: 1,
    slug: 'mihai-maierean',
    name: 'Mihai Maierean',
    role: 'Founder & CEO',
    description: 'Expert în strategii de business și consultanță financiară cu peste 8 ani de experiență',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop',
    experience: '8+ ani',
    projects: '200+',
    email: 'mihai@sync.ro',
    phone: '+40 721 234 567',
    linkedin: '#',
    quote: "Succesul vine din combinația perfectă între strategie clară și execuție impecabilă.",
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
    education: [
      'MBA în Management Strategic - ASE București',
      'Licență în Contabilitate și Informatică de Gestiune',
      'Certificare în Leadership și Management - INSEAD'
    ]
  },
  {
    id: 2,
    slug: 'petru-tirla',
    name: 'Petru Tirlă',
    role: 'Technical Lead',
    description: 'Senior Full-Stack Developer specializat în tehnologii moderne și soluții scalabile',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    experience: '6+ ani',
    projects: '150+',
    email: 'petru@sync.ro',
    phone: '+40 721 345 678',
    linkedin: '#',
    quote: "Codul de calitate și inovația tehnologică sunt cheia transformării digitale.",
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
    education: [
      'Master în Inginerie Software - Universitatea Tehnică Cluj',
      'Licență în Informatică',
      'Certificare în Cloud Computing - AWS'
    ]
  },
  {
    id: 3,
    slug: 'mary-pauliuc',
    name: 'Mary Pauliuc',
    role: 'Creative Director',
    description: 'Specialist în marketing digital și employer branding cu focus pe strategii creative',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=2070&auto=format&fit=crop',
    experience: '5+ ani',
    projects: '120+',
    email: 'mary@sync.ro',
    phone: '+40 721 456 789',
    linkedin: '#',
    quote: "Brandurile puternice se construiesc prin povești autentice și conexiuni emoționale.",
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
    education: [
      'Master în Marketing și Comunicare - SNSPA',
      'Licență în Design Grafic',
      'Certificare în Digital Marketing - Google'
    ]
  }
]

interface TeamDrawerProps {
  open: boolean
  onClose: () => void
  memberId: number | null
}

export default function TeamDrawerSimple({ open, onClose, memberId }: TeamDrawerProps) {
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

  return (
    <Drawer open={open} onOpenChange={handleClose} direction="right">
      <DrawerContent className="h-full w-[60vw] min-w-[800px] ml-auto rounded-none bg-white border-l border-gray-200 shadow-2xl">
        <div className="overflow-y-auto h-full">
          <DrawerHeader className="px-6 py-4 sticky top-0 bg-white z-10 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <DrawerTitle className="text-2xl font-bold text-gray-900">
                    {member.name}
                  </DrawerTitle>
                  <DrawerDescription className="text-lg font-semibold text-blue-600">
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
            {/* Hero Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-8">
              <Image 
                src={member.image} 
                alt={member.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>

            {/* About */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Despre {member.name.split(' ')[0]}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {member.description}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-gray-50 rounded-xl">
              <div className="text-center">
                <div className="text-sm text-gray-500">Experiență</div>
                <div className="font-bold text-gray-900">{member.experience}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500">Proiecte</div>
                <div className="font-bold text-gray-900">{member.projects}</div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <Quote className="w-6 h-6 text-blue-600 mb-3" />
              <p className="text-gray-700 italic text-lg">
                &ldquo;{member.quote}&rdquo;
              </p>
            </div>

            {/* Specializations & Achievements */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  Specializări
                </h4>
                <div className="space-y-3">
                  {member.specializations.map((spec, index) => (
                    <div key={spec} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span className="text-gray-700">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-blue-600" />
                  Realizări
                </h4>
                <div className="space-y-3">
                  {member.achievements.map((achievement, index) => (
                    <div key={achievement} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                      <Award className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                Educație
              </h4>
              <div className="space-y-3">
                {member.education.map((edu, index) => (
                  <div key={edu} className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-gray-800 font-medium">{edu}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <a 
                href={`mailto:${member.email}`}
                className="flex items-center gap-3 p-4 bg-blue-50 text-blue-700 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">Email</span>
              </a>
              <a 
                href={`tel:${member.phone}`}
                className="flex items-center gap-3 p-4 bg-blue-50 text-blue-700 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">Telefon</span>
              </a>
              <a 
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-blue-50 text-blue-700 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>

            {/* CTA */}
            <div className="bg-blue-600 rounded-xl p-8 text-white text-center">
              <h4 className="text-2xl font-bold mb-4">
                Vrei să colaborezi cu {member.name.split(' ')[0]}?
              </h4>
              <p className="text-blue-100 mb-6 text-lg">
                Programează o consultație și descoperă cum poate să te ajute să-ți atingi obiectivele
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`mailto:${member.email}?subject=Consultație cu ${member.name}`}
                  className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Trimite email
                </a>
                <a 
                  href={`tel:${member.phone}`}
                  className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Sună direct
                </a>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}