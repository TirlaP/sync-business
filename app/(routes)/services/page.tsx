import ServicesHero from '@/components/services/ServicesHero'
import ServicesGrid from '@/components/services/ServicesGrid'
import ServicesWhy from '@/components/services/ServicesWhy'
import ServicesCTA from '@/components/services/ServicesCTA'

export const metadata = {
  title: 'Servicii - SYNC Business Agency',
  description: 'Descoperă gama completă de servicii integrate pentru afacerea ta.',
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesWhy />
      <ServicesCTA />
    </>
  )
}