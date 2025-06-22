'use client'

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import {
  Award,
  BookOpen,
  CheckCircle2,
  Linkedin,
  Mail,
  Phone,
  Quote,
  Trophy,
  X
} from 'lucide-react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { teamMembers } from '@/data/teamMembers'

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