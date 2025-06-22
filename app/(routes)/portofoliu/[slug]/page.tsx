import ProjectPage from '@/components/portfolio/ProjectPage'
import { notFound } from 'next/navigation'

// Portfolio items data
const portfolioItems = [
  {
    id: 1,
    slug: 'be-zone',
    client: 'BE ZONE',
    category: 'Marketing',
  },
  {
    id: 2,
    slug: 'casa-napoca',
    client: 'Casa Napoca',
    category: 'Web Design',
  },
  {
    id: 3,
    slug: 'iconts',
    client: 'iConts',
    category: 'Branding',
  },
  {
    id: 4,
    slug: 'mandachi',
    client: 'MANDACHI',
    category: 'Marketing',
  },
  {
    id: 5,
    slug: 'solvam',
    client: 'SOLVAM',
    category: 'Consultanță',
  },
  {
    id: 6,
    slug: 'florentini',
    client: 'FLORENTINI',
    category: 'E-commerce',
  },
  {
    id: 7,
    slug: 'spartan-restaurant',
    client: 'SPARTAN Restaurant',
    category: 'Brand de Angajator',
  },
  {
    id: 8,
    slug: 'platon-project',
    client: 'Platon PROJECT',
    category: 'Web Design',
  }
]

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPageRoute({ params }: ProjectPageProps) {
  const { slug } = await params

  // Find project by slug
  const project = portfolioItems.find(item => item.slug === slug)

  if (!project) {
    notFound()
  }

  // Render the full project page
  return <ProjectPage slug={slug} />
}

// Generate static params for all projects
export async function generateStaticParams() {
  return portfolioItems.map((project) => ({
    slug: project.slug,
  }))
}

// Generate metadata for each project
export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = portfolioItems.find(item => item.slug === slug)

  if (!project) {
    return {
      title: 'Proiect inexistent - SYNC Business Agency',
      description: 'Proiectul căutat nu există.',
    }
  }

  return {
    title: `${project.client} - Proiect ${project.category} | SYNC Business Agency`,
    description: `Descoperă cum am transformat afacerea ${project.client} prin soluții de ${project.category.toLowerCase()}.`,
  }
}