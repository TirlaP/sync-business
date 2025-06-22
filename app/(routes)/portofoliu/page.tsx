import PortfolioHero from '@/components/portfolio/PortfolioHero'
import PortfolioGrid from '@/components/portfolio/PortfolioGrid'
import PortfolioCTA from '@/components/portfolio/PortfolioCTA'

export const metadata = {
  title: 'Portofoliu - SYNC Business Agency',
  description: 'Descoperă proiectele noastre de succes și clienții care au avut încredere în noi.',
}

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioCTA />
    </>
  )
}