'use client'

import { motion } from 'framer-motion'
import { 
  Linkedin, 
  Briefcase, 
  Code, 
  Palette, 
  Award,
  Star,
  ArrowRight,
  Mail,
  Calendar,
  Quote,
  CheckCircle2,
  Trophy,
  BookOpen,
  Clock,
  Globe,
  Phone,
  ArrowLeft
} from 'lucide-react'
import Link from 'next/link'

const teamMembers = [
  {
    id: 1,
    slug: 'mihai-maierean',
    name: 'Mihai Maierean',
    role: 'Antreprenor & Business Strategist',
    title: 'Founder & CEO',
    avatar: '👨‍💼',
    gradient: 'bg-blue-600',
    bgGradient: 'bg-blue-50',
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
    gradient: 'bg-blue-600',
    bgGradient: 'bg-blue-50',
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
    gradient: 'bg-blue-600',
    bgGradient: 'bg-blue-50',
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

interface MemberPageProps {
  slug: string
}

export default function MemberPage({ slug }: MemberPageProps) {
  const member = teamMembers.find(m => m.slug === slug)

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Membru inexistent</h1>
          <Link href="/echipa" className="text-blue-600 hover:text-blue-800">
            ← Înapoi la echipă
          </Link>
        </div>
      </div>
    )
  }

  const Icon = member.icon

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className={`${member.gradient} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link 
            href="/echipa" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Înapoi la echipă
          </Link>
          
          <div className="flex items-center gap-8 mb-8">
            <div className="w-32 h-32 bg-white/20 rounded-3xl flex items-center justify-center text-6xl backdrop-blur-sm">
              {member.avatar}
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">{member.name}</h1>
              <p className="text-2xl text-white/90 mb-2">{member.role}</p>
              <p className="text-lg text-white/70">{member.title}</p>
            </div>
          </div>

          {member.featured && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium text-sm mb-6">
              <Star className="w-4 h-4" />
              <span>Founder</span>
            </div>
          )}

          <p className="text-xl text-white/90 max-w-4xl leading-relaxed">
            {member.fullBio}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <Icon className="w-16 h-16 mx-auto mb-4 text-gray-600" />
            <div className="text-4xl font-bold text-gray-900 mb-2">{member.experience}</div>
            <div className="text-gray-600 font-medium">Experiență</div>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-gray-600" />
            <div className="text-4xl font-bold text-gray-900 mb-2">{member.projects}</div>
            <div className="text-gray-600 font-medium">Proiecte</div>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <Award className="w-16 h-16 mx-auto mb-4 text-gray-600" />
            <div className="text-4xl font-bold text-gray-900 mb-2">{member.achievements.length}+</div>
            <div className="text-gray-600 font-medium">Realizări</div>
          </div>
        </div>

        {/* Quote */}
        <div className={`${member.bgGradient} rounded-3xl p-12 mb-16`}>
          <Quote className="w-12 h-12 text-gray-400 mb-6" />
          <blockquote className="text-3xl text-gray-700 italic font-medium leading-relaxed">
            &ldquo;{member.quote}&rdquo;
          </blockquote>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Competențe Cheie</h2>
          <div className="flex flex-wrap gap-4">
            {member.skills.map((skill, index) => (
              <span 
                key={skill}
                className="px-6 py-3 bg-blue-50 text-blue-700 rounded-2xl font-semibold border border-blue-200 text-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Specializations & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
              Specializări Principale
            </h3>
            <div className="space-y-4">
              {member.specializations.map((spec, index) => (
                <div key={spec} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="w-3 h-3 bg-blue-600 rounded-full" />
                  <span className="text-gray-700 font-medium">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Trophy className="w-8 h-8 text-yellow-500" />
              Realizări Cheie
            </h3>
            <div className="space-y-4">
              {member.achievements.map((achievement, index) => (
                <div key={achievement} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <Award className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-blue-500" />
              Educație
            </h3>
            <div className="space-y-4">
              {member.education.map((edu, index) => (
                <div key={edu} className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="text-gray-800 font-semibold leading-relaxed">{edu}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Award className="w-8 h-8 text-purple-500" />
              Certificări
            </h3>
            <div className="space-y-3">
              {member.certifications.map((cert, index) => (
                <div key={cert} className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="w-3 h-3 bg-blue-600 rounded-full" />
                  <span className="text-gray-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages & Personal Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Globe className="w-8 h-8 text-green-500" />
              Limbi Vorbite
            </h3>
            <div className="space-y-3">
              {member.languages.map((lang, index) => (
                <div key={lang} className="p-4 bg-green-50 rounded-xl border border-green-200">
                  <span className="text-gray-700 font-medium">{lang}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Star className="w-8 h-8 text-orange-500" />
              Hobby-uri & Interese
            </h3>
            <div className="flex flex-wrap gap-3">
              {member.hobbies.map((hobby, index) => (
                <span 
                  key={hobby}
                  className="px-4 py-2 bg-orange-50 text-orange-700 rounded-xl font-medium border border-orange-200"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-indigo-500" />
            Proiecte Personale
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {member.personalProjects.map((project, index) => (
              <div key={project} className="p-6 bg-indigo-50 rounded-xl border border-indigo-200">
                <div className="text-gray-800 font-medium leading-relaxed">{project}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Working Style */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Stil de Lucru</h3>
          <div className="p-8 bg-gray-50 rounded-2xl">
            <p className="text-lg text-gray-700 leading-relaxed">{member.workingStyle}</p>
          </div>
        </div>

        {/* Availability */}
        <div className={`${member.bgGradient} rounded-3xl p-8 mb-16`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <Clock className="w-8 h-8" />
            Disponibilitate
          </h3>
          <p className="text-lg text-gray-700">{member.availability}</p>
        </div>

        {/* Contact CTA */}
        <div className={`${member.gradient} rounded-3xl p-12 text-white text-center`}>
          <h3 className="text-4xl font-bold mb-6">
            Vrei să colaborezi cu {member.name.split(' ')[0]}?
          </h3>
          <p className="text-white/90 mb-8 text-xl max-w-2xl mx-auto">
            Programează o consultație și descoperă cum poate să te ajute să-ți atingi obiectivele
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`mailto:${member.email}?subject=Consultație cu ${member.name}`}
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-lg"
            >
              <Mail className="w-6 h-6" />
              Trimite email
            </a>
            <a 
              href={`tel:${member.phone}`}
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-colors flex items-center justify-center gap-2 text-lg"
            >
              <Phone className="w-6 h-6" />
              Sună direct
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}