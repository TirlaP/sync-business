import { Metadata } from 'next'
import FAQContent from './content'

export const metadata: Metadata = {
  title: 'Întrebări Frecvente - SYNC Business Agency',
  description: 'Răspunsuri la întrebările cele mai frecvente despre serviciile noastre de marketing, web design, consultanță business și mai mult.',
}

export default function FAQPage() {
  return <FAQContent />
}