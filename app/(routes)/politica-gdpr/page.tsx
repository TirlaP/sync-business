import { Metadata } from 'next'
import GDPRContent from './content'

export const metadata: Metadata = {
  title: 'Politica GDPR - SYNC Business Agency',
  description: 'Politica de prelucrare a datelor cu caracter personal în conformitate cu GDPR.',
}

export default function GDPRPage() {
  return <GDPRContent />
}