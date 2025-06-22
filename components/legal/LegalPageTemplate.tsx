'use client'

import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'
import { contactInfo } from '@/data/contactInfo'

interface LegalSection {
  title: string
  content: string
}

interface LegalPageTemplateProps {
  title: string
  subtitle?: string
  content: LegalSection[]
}

export default function LegalPageTemplate({ title, subtitle, content }: LegalPageTemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Înapoi la pagina principală
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-700 rounded-xl">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{title}</h1>
              {subtitle && (
                <p className="text-xl text-blue-200 mt-2">{subtitle}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {content.map((section, index) => (
            <div key={index} className={index > 0 ? 'mt-12' : ''}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {section.title}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {section.content.split('\n\n').map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Contact Info */}
          <div className="mt-16 p-6 bg-blue-50 rounded-xl border border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Contact pentru întrebări juridice
            </h3>
            <div className="space-y-2 text-blue-800">
              <p><strong>Email:</strong> {contactInfo.email}</p>
              <p><strong>Telefon:</strong> {contactInfo.phone}</p>
              <p><strong>Adresă:</strong> {contactInfo.address.full}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}