import ContabilitateHero from '@/components/contabilitate/ContabilitateHero'
import ContabilitateServices from '@/components/contabilitate/ContabilitateServices'
import ContabilitateProcess from '@/components/contabilitate/ContabilitateProcess'

export default function ContabilitatePage() {
  return (
    <div className="min-h-screen">
      <ContabilitateHero />
      <ContabilitateServices />
      <ContabilitateProcess />
    </div>
  )
}