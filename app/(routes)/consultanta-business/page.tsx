import ConsultantaHero from '@/components/consultanta-business/ConsultantaHero'
import ConsultantaWhy from '@/components/consultanta-business/ConsultantaWhy'
import ConsultantaBenefits from '@/components/consultanta-business/ConsultantaBenefits'
import ConsultantaProcess from '@/components/consultanta-business/ConsultantaProcess'

export const metadata = {
  title: 'Consultanță de Business - SYNC Business Agency',
  description: 'Servicii de consultanță de business și management pentru dezvoltarea afacerii tale.',
}

export default function ConsultantaBusinessPage() {
  return (
    <div className="min-h-screen">
      <ConsultantaHero />
      <ConsultantaWhy />
      <ConsultantaBenefits />
      <ConsultantaProcess />
    </div>
  )
}