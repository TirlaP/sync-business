import { Metadata } from 'next'
import TermsContent from './content'

export const metadata: Metadata = {
  title: 'Termeni și Condiții - SYNC Business Agency',
  description: 'Termenii și condițiile de utilizare a serviciilor SYNC Business Agency.',
}

export default function TermsPage() {
  return <TermsContent />
}