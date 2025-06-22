import { notFound } from 'next/navigation'
import MarketingPage from '../../marketing/page'
import WebDesignPage from '../../web-design/page'
import ConsultantaBusinessPage from '../../consultanta-business/page'
import ContabilitatePage from '../../contabilitate/page'
import BrandAngajatorPage from '../../brand-angajator/page'
import InfiintareFirmaPage from '../../infiintare-firma/page'

const servicePages = {
  'marketing': MarketingPage,
  'web-design': WebDesignPage,
  'consultanta-business': ConsultantaBusinessPage,
  'contabilitate': ContabilitatePage,
  'brand-angajator': BrandAngajatorPage,
  'infiintare-firma': InfiintareFirmaPage,
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const Page = servicePages[resolvedParams.slug as keyof typeof servicePages]
  
  if (!Page) {
    notFound()
  }
  
  return <Page />
}

export async function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({
    slug,
  }))
}