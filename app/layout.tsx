import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import CookieConsent from '@/components/layout/CookieConsent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SYNC Business Agency - Soluții INTEGRATE pentru business-uri de succes',
  description: 'De la web design captivant la branding memorabil și consultanță personalizată, suntem partenerul tău pentru succesul online.',
  keywords: 'marketing, web design, consultanță business, contabilitate, brand angajator, înființare firmă, Romania, Suceava',
  authors: [{ name: 'SYNC Business Agency' }],
  openGraph: {
    title: 'SYNC Business Agency',
    description: 'Soluții INTEGRATE pentru business-uri de succes',
    type: 'website',
    locale: 'ro_RO',
    siteName: 'SYNC Business Agency',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gray-50 text-gray-900`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}