import { Metadata } from 'next'
import CookiePolicyContent from './content'

export const metadata: Metadata = {
  title: 'Politica Cookie - SYNC Business Agency',
  description: 'Politica de utilizare a cookie-urilor pe site-ul SYNC Business Agency.',
}

export default function CookiePolicyPage() {
  return <CookiePolicyContent />
}