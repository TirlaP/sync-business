'use client'

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
  Quote
} from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import TeamDrawer from './TeamDrawer'

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
    experience: '8+ ani',
    projects: '200+',
    icon: Briefcase,
    featured: true,
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
    experience: '6+ ani',
    projects: '150+',
    icon: Code,
    featured: false,
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
    experience: '5+ ani',
    projects: '120+',
    icon: Palette,
    featured: false,
  }
]

const stats = [
  { label: 'Ani Experiență Combinată', value: '19+', icon: Award },
  { label: 'Proiecte Finalizate', value: '470+', icon: Star },
  { label: 'Certificări Profesionale', value: '25+', icon: Sparkles },
]

interface TeamMembersProps {
  initialMemberId?: number
}

export default function TeamMembers({ initialMemberId }: TeamMembersProps) {
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
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-br from-pink-400/5 to-emerald-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 font-medium text-sm mb-8"
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
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
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
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Team Members */}
        <div ref={teamRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => {
            const Icon = member.icon
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={teamInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                className="group relative"
                onHoverStart={() => setHoveredMember(member.id)}
                onHoverEnd={() => setHoveredMember(null)}
              >
                <motion.div
                  className={`relative bg-gradient-to-br ${member.bgGradient} rounded-3xl border border-white/50 shadow-lg backdrop-blur-sm transition-all duration-500 overflow-hidden`}
                  whileHover={{ 
                    y: -12,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  {/* Featured badge */}
                  {member.featured && (
                    <div className="absolute -top-3 -right-3 z-20">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-2xl text-xs font-bold shadow-lg flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        Founder
                      </div>
                    </div>
                  )}

                  {/* Header with avatar */}
                  <div className={`relative p-8 bg-gradient-to-br ${member.gradient} overflow-hidden`}>
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-20">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-white rounded-full"
                          style={{
                            left: `${15 + i * 20}%`,
                            top: `${25 + i * 15}%`,
                          }}
                          animate={{
                            y: [-20, -40, -20],
                            opacity: [0.3, 1, 0.3],
                            scale: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.6,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </div>

                    {/* Avatar and basic info */}
                    <div className="relative z-10 text-center text-white">
                      <motion.div
                        className="w-24 h-24 mx-auto mb-4 text-6xl"
                        animate={hoveredMember === member.id ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {member.avatar}
                      </motion.div>
                      
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold mb-2 inline-block">
                        {member.title}
                      </div>

                      <div className="flex justify-center gap-3">
                        <div className="text-center">
                          <div className="text-lg font-bold">{member.experience}</div>
                          <div className="text-xs opacity-80">Experiență</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold">{member.projects}</div>
                          <div className="text-xs opacity-80">Proiecte</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                        {member.name}
                      </h3>
                      <p className={`font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-4`}>
                        {member.role}
                      </p>

                      {/* Quote */}
                      <div className="relative bg-gray-50 rounded-xl p-4 mb-6">
                        <Quote className="absolute top-2 left-2 w-4 h-4 text-gray-300" />
                        <p className="text-sm text-gray-600 italic pl-4">
                          {member.quote}
                        </p>
                      </div>
                    </div>

                    {/* Skills badges */}
                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                      {member.skills.map((skill, skillIndex) => (
                        <motion.span 
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={teamInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: 0.4 + index * 0.2 + skillIndex * 0.1 }}
                          className={`px-3 py-1 bg-gradient-to-r ${member.gradient} bg-opacity-10 text-gray-700 rounded-full text-xs font-medium border border-gray-200`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>

                    {/* Specializations */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        Specializări
                      </h4>
                      <ul className="space-y-2">
                        {member.specializations.slice(0, 3).map((spec, specIndex) => (
                          <motion.li 
                            key={spec}
                            initial={{ opacity: 0, x: -20 }}
                            animate={teamInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: 0.5 + index * 0.2 + specIndex * 0.1 }}
                            className="text-sm text-gray-600 flex items-center gap-2"
                          >
                            <div className={`w-1.5 h-1.5 bg-gradient-to-r ${member.gradient} rounded-full`} />
                            {spec}
                          </motion.li>
                        ))}
                        {member.specializations.length > 3 && (
                          <li className="text-xs text-gray-500 italic">
                            +{member.specializations.length - 3} alte specializări
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex gap-3 justify-center pt-6 border-t border-gray-200/50">
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${member.gradient} text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Linkedin className="w-5 h-5" />
                      </motion.a>
                      
                      <motion.a
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-center w-12 h-12 bg-white border-2 border-gray-200 text-gray-600 rounded-xl hover:border-gray-300 hover:text-gray-800 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Mail className="w-5 h-5" />
                      </motion.a>

                      <motion.button
                        onClick={() => handleMemberClick(member.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors text-sm font-medium"
                        whileHover={{ x: 5 }}
                      >
                        <span>Vezi mai mult</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Hover effect particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${member.gradient} rounded-full`}
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
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white relative overflow-hidden">
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
                <Calendar className="w-4 h-4" />
                <span>Consultanță Personalizată</span>
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Vrei să colaborezi direct cu echipa noastră?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Programează o consultanță gratuită și descoperă cum te putem ajuta
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <Calendar className="w-5 h-5 mr-2" />
                  Programează întâlnire
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group inline-flex items-center justify-center bg-transparent text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300">
                  <Mail className="w-5 h-5 mr-2" />
                  Contactează echipa
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Drawer */}
        <TeamDrawer 
          open={drawerOpen}
          onClose={handleDrawerClose}
          memberId={selectedMember}
        />
      </div>
    </section>
  )
}