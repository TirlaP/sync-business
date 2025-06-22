import MarketingHero from '@/components/marketing/MarketingHero'
import ParallaxSection from '@/components/marketing/ParallaxSection'
import MarketingProcess from '@/components/marketing/MarketingProcess'
import MarketingBenefits from '@/components/marketing/MarketingBenefits'
import MarketingPortfolio from '@/components/marketing/MarketingPortfolio'
import MarketingCTA from '@/components/marketing/MarketingCTA'

export const metadata = {
  title: 'Marketing - SYNC Business Agency',
  description: 'Transformăm afacerea ta într-un imperiu. Servicii complete de marketing digital și tradițional.',
}

export default function MarketingPage() {
  return (
    <>
      <MarketingHero />
      <ParallaxSection />
      <MarketingProcess />
      <MarketingBenefits />
      <MarketingPortfolio />
      <MarketingCTA />
    </>
  )
}