'use client'

import { useState } from 'react'
import { Download, CheckCircle, User, Mail } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import Image from 'next/image'

interface EbookModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EbookModal({ isOpen, onClose }: EbookModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gdprConsent: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission and file download
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        gdprConsent: false,
      })
      onClose()
    }, 3000)
  }

  const handleClose = () => {
    setIsSubmitted(false)
    setFormData({
      name: '',
      email: '',
      gdprConsent: false,
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden border-0 p-0">
        <DialogTitle className="sr-only">Descarcă Ebook Gratuit</DialogTitle>
        <div className="grid lg:grid-cols-2">
              {/* Left side - Form */}
              <div className="p-8 lg:p-12">
                {isSubmitted ? (
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Ebook-ul se descarcă!
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      Îți mulțumim! Descărcarea va începe automat. Dacă nu se descarcă, verifică linkul din email.
                    </p>
                    
                    <div className="flex justify-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                        <span>Descărcare automată</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full text-blue-700 font-medium text-sm mb-6">
                        <Download className="w-4 h-4" />
                        <span>Download Gratuit</span>
                      </div>
                      
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Ghidul Complet pentru
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                          Afaceri de Succes
                        </span>
                      </h2>
                      
                      <p className="text-gray-600">
                        Descarcă ghidul nostru gratuit cu strategii dovedite pentru dezvoltarea afacerii tale
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Numele și prenumele *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            id="name"
                            required
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="Ex: Mihai Popescu"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            id="email"
                            required
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="Ex: mihai@compania.ro"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
                            checked={formData.gdprConsent}
                            onChange={(e) => setFormData({ ...formData, gdprConsent: e.target.checked })}
                            required
                          />
                          <span className="text-sm text-gray-700 leading-relaxed">
                            Am citit și sunt de acord cu{' '}
                            <a href="/termeni-conditii" className="text-blue-600 hover:underline font-medium">
                              Termenii și condițiile
                            </a>{' '}
                            și cu{' '}
                            <a href="/politica-gdpr" className="text-blue-600 hover:underline font-medium">
                              Politica de prelucrare a datelor cu caracter personal
                            </a>
                          </span>
                        </label>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center gap-3">
                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Se descarcă...</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-3">
                            <Download className="w-6 h-6" />
                            <span>Descarcă Gratuit</span>
                          </div>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>

              {/* Right side - Ebook preview */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="relative w-64 h-80 mx-auto mb-6">
                    <Image
                      src="https://res.cloudinary.com/dxncqwsnw/image/upload/v1750621132/White-and-Blue-Modern-Business-Book-Cover-1_hcnuye.png"
                      alt="Ebook Business Guide"
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    50+ pagini de strategii
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Ghid complet cu sfaturi practice pentru dezvoltarea afacerii tale
                  </p>
                </div>
              </div>
            </div>
      </DialogContent>
    </Dialog>
  )
}