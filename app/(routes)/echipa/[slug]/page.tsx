import MemberPage from '@/components/team/MemberPage'
import { notFound } from 'next/navigation'

// Team members data
const teamMembers = [
  {
    id: 1,
    slug: 'mihai-maierean',
    name: 'Mihai Maierean',
    role: 'Antreprenor & Business Strategist',
    title: 'Founder & CEO',
  },
  {
    id: 2,
    slug: 'petru-tirla',
    name: 'Petru Tirlă',
    role: 'Senior Full-Stack Developer',
    title: 'Technical Lead',
  },
  {
    id: 3,
    slug: 'mary-pauliuc',
    name: 'Mary Pauliuc',
    role: 'Marketing & Brand Strategist',
    title: 'Creative Director',
  }
]

interface TeamPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function TeamMemberPageRoute({ params }: TeamPageProps) {
  const { slug } = await params

  // Find member by slug
  const member = teamMembers.find(item => item.slug === slug)

  if (!member) {
    notFound()
  }

  // Render the full member page
  return <MemberPage slug={slug} />
}

// Generate static params for all team members
export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }))
}

// Generate metadata for each team member
export async function generateMetadata({ params }: TeamPageProps) {
  const { slug } = await params
  const member = teamMembers.find(item => item.slug === slug)

  if (!member) {
    return {
      title: 'Membru echipă inexistent - SYNC Business Agency',
      description: 'Membrul echipei căutat nu există.',
    }
  }

  return {
    title: `${member.name} - ${member.title} | SYNC Business Agency`,
    description: `Cunoaște-l pe ${member.name}, ${member.role} la SYNC Business Agency.`,
  }
}