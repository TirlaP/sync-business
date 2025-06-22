export interface TeamMember {
  id: number
  slug: string
  name: string
  role: string
  description: string
  image: string
  experience: string
  projects: string
  email: string
  phone: string
  linkedin: string
  quote: string
  specializations: string[]
  achievements: string[]
  education: string[]
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    slug: 'mihai-maierean',
    name: 'Mihai Maierean',
    role: 'Founder & CEO',
    description: 'Expert în strategii de business și consultanță financiară cu peste 8 ani de experiență',
    image: 'https://res.cloudinary.com/dxncqwsnw/image/upload/v1750621103/echipa/mihai_lusahz.webp',
    experience: '8+ ani',
    projects: '200+',
    email: 'mihai@syncbusinessagency.ro',
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
    image: 'https://res.cloudinary.com/dxncqwsnw/image/upload/v1750621103/echipa/petru_rbeoea.webp',
    experience: '6+ ani',
    projects: '150+',
    email: 'petru@syncbusinessagency.ro',
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
    image: 'https://res.cloudinary.com/dxncqwsnw/image/upload/v1750621103/echipa/mary_vm9lrx.webp',
    experience: '5+ ani',
    projects: '120+',
    email: 'mary@syncbusinessagency.ro',
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