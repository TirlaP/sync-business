'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import TeamDrawerSimple from './TeamDrawerSimple'
import { ArrowRight, Mail, Linkedin, Users, Award, Sparkles } from 'lucide-react'
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
    linkedin: '#',
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
    linkedin: '#',
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
    linkedin: '#',
  }
]

const stats = [
  { label: 'Ani Experiență Combinată', value: '19+', icon: Award },
  { label: 'Proiecte Finalizate', value: '470+', icon: Sparkles },
  { label: 'Certificări Profesionale', value: '25+', icon: Users },
]

interface TeamMembersProps {
  initialMemberId?: number
}

export default function TeamMembersSimple({ initialMemberId }: TeamMembersProps) {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)
  const [selectedMember, setSelectedMember] = useState<number | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  
  const router = useRouter()
  const searchParams = useSearchParams()

  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const statsRef = useRef(null)
  const teamRef = useRef(null)
  
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const titleInView = useInView(titleRef, { once: true, margin: "-50px" })
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" })
  const teamInView = useInView(teamRef, { once: true, margin: "-50px" })

  // Handle member selection from URL path or initial prop
  React.useEffect(() => {
    // If initialMemberId is provided (from dynamic route), use it
    if (initialMemberId) {
      setSelectedMember(initialMemberId)
      setDrawerOpen(true)
      return
    }

    const path = window.location.pathname
    const pathParts = path.split('/')
    
    if (pathParts.length === 3 && pathParts[1] === 'echipa') {
      const slug = pathParts[2]
      const member = teamMembers.find(m => m.slug === slug)
      if (member) {
        setSelectedMember(member.id)
        setDrawerOpen(true)
      }
    } else {
      // Handle legacy query param format
      const memberId = searchParams.get('member')
      if (memberId) {
        const id = parseInt(memberId)
        setSelectedMember(id)
        setDrawerOpen(true)
      }
    }
  }, [searchParams, initialMemberId])

  const handleMemberClick = (memberId: number) => {
    const member = teamMembers.find(m => m.id === memberId)
    if (member) {
      setSelectedMember(memberId)
      setDrawerOpen(true)
      // Update URL without any navigation or state loss
      window.history.pushState(null, '', `/echipa/${member.slug}`)
    }
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
    setSelectedMember(null)
    // Update URL back to team page without navigation
    window.history.pushState(null, '', '/echipa')
  }

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium text-sm mb-8"
          >
            <Users className="w-4 h-4" />
            <span>Echipa de Experți</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Profesioniști dedicați
            <span className="block text-blue-600">
              rezultatelor tale
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Echipa noastră combină experiența, creativitatea și tehnologia pentru a livra rezultate excepționale
          </motion.p>
        </div>

        {/* Team Stats */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadow-lg">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Team Members */}
        <div ref={teamRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              className="group relative cursor-pointer"
              onClick={() => handleMemberClick(member.id)}
              onHoverStart={() => setHoveredMember(member.id)}
              onHoverEnd={() => setHoveredMember(null)}
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Image */}
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-all duration-500" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="mb-2">
                    <span className="px-3 py-1 bg-blue-600 rounded-full text-sm font-medium">
                      {member.role}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-200 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-200 mb-4 opacity-90 text-sm">
                    {member.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-lg font-bold">{member.experience}</div>
                      <div className="text-xs opacity-80">Experiență</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold">{member.projects}</div>
                      <div className="text-xs opacity-80">Proiecte</div>
                    </div>
                  </div>
                  
                  {/* Learn More */}
                  <div className="flex items-center gap-2 text-blue-200 font-medium group-hover:text-white transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Hover Contact */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex gap-2">
                    <a 
                      href={`mailto:${member.email}`} 
                      className="inline-flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a 
                      href={member.linkedin} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Drawer */}
        <TeamDrawerSimple 
          open={drawerOpen}
          onClose={handleDrawerClose}
          memberId={selectedMember}
        />
      </div>
    </section>
  )
}