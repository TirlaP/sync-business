'use client'

import { useState } from 'react'
import { 
  Send, 
  CheckCircle, 
  Sparkles, 
  User, 
  Building2, 
  Mail, 
  Phone, 
  MessageSquare,
  ArrowRight,
  Zap
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

const services = [
  { id: 'marketing', label: 'Marketing Digital', icon: '📊', color: 'from-purple-500 to-pink-500' },
  { id: 'webDesign', label: 'Web Design Premium', icon: '💻', color: 'from-blue-500 to-cyan-500' },
  { id: 'accounting', label: 'Servicii Financiare', icon: '📈', color: 'from-green-500 to-emerald-500' },
  { id: 'employerBranding', label: 'Brand de Angajator', icon: '👥', color: 'from-orange-500 to-red-500' },
  { id: 'businessConsulting', label: 'Consultanță Strategică', icon: '🎯', color: 'from-indigo-500 to-purple-500' },
  { id: 'companyFormation', label: 'Înființare Companie', icon: '🏢', color: 'from-teal-500 to-blue-500' },
]

interface SolicitaOfertaModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SolicitaOfertaModal({ isOpen, onClose }: SolicitaOfertaModalProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    fiscalCode: '',
    name: '',
    phone: '',
    email: '',
    message: '',
    services: {
      marketing: false,
      webDesign: false,
      accounting: false,
      employerBranding: false,
      businessConsulting: false,
      companyFormation: false,
    },
    gdprConsent: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        companyName: '',
        fiscalCode: '',
        name: '',
        phone: '',
        email: '',
        message: '',
        services: {
          marketing: false,
          webDesign: false,
          accounting: false,
          employerBranding: false,
          businessConsulting: false,
          companyFormation: false,
        },
        gdprConsent: false,
      })
      onClose()
    }, 3000)
  }

  const handleServiceChange = (service: keyof typeof formData.services) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: !prev.services[service],
      },
    }))
  }

  const handleClose = () => {
    setIsSubmitted(false)
    setFormData({
      companyName: '',
      fiscalCode: '',
      name: '',
      phone: '',
      email: '',
      message: '',
      services: {
        marketing: false,
        webDesign: false,
        accounting: false,
        employerBranding: false,
        businessConsulting: false,
        companyFormation: false,
      },
      gdprConsent: false,
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl p-8 border-0">
        <DialogTitle className="sr-only">Solicită Ofertă</DialogTitle>
              {isSubmitted ? (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-2xl p-12 text-center border border-green-200">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Mesajul a fost trimis cu succes!
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    Îți mulțumim pentru încredere! Echipa noastră te va contacta în următoarele 2 ore.
                  </p>
                  
                  <div className="flex justify-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span>Răspuns în maxim 2 ore</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50 -translate-y-20 translate-x-20" />
                  
                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 font-medium text-sm mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span>Solicită Ofertă</span>
                      </div>
                      
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Hai să vorbim despre
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                          proiectul tău
                        </span>
                      </h2>
                      
                      <p className="text-gray-600 max-w-2xl mx-auto">
                        Completează formularul și echipa noastră te va contacta în următoarele 2 ore cu o strategie personalizată
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Company Information */}
                      <div>
                        <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
                          <Building2 className="w-5 h-5 text-blue-600" />
                          Informații companie (opțional)
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                              Denumire firmă
                            </label>
                            <input
                              type="text"
                              id="companyName"
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                              placeholder="Ex: SYNC Business SRL"
                              value={formData.companyName}
                              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="fiscalCode" className="block text-sm font-medium text-gray-700 mb-2">
                              Cod fiscal
                            </label>
                            <input
                              type="text"
                              id="fiscalCode"
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                              placeholder="Ex: RO12345678"
                              value={formData.fiscalCode}
                              onChange={(e) => setFormData({ ...formData, fiscalCode: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Personal Information */}
                      <div>
                        <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
                          <User className="w-5 h-5 text-purple-600" />
                          Informații personale
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                              Numele și prenumele tău *
                            </label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                              <input
                                type="text"
                                id="name"
                                required
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                                placeholder="Ex: Mihai Popescu"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                              Nr. Telefon *
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                              <input
                                type="tel"
                                id="phone"
                                required
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                                placeholder="Ex: +40 XXX XXX XXX"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mt-4">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="email"
                              id="email"
                              required
                              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                              placeholder="Ex: mihai@compania.ro"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
                          <MessageSquare className="w-5 h-5 text-green-600" />
                          Descrie-ne provocările tale
                        </label>
                        <textarea
                          id="message"
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                          placeholder="Descrie în câteva cuvinte cu ce provocări te confrunți și cum îți imaginezi că te-am putea ajuta..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>

                      {/* Services Selection */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          De care servicii crezi că ai avea nevoie?
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {services.map((service) => (
                            <label 
                              key={service.id}
                              className="group relative cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                className="sr-only"
                                checked={formData.services[service.id as keyof typeof formData.services]}
                                onChange={() => handleServiceChange(service.id as keyof typeof formData.services)}
                              />
                              <div className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                                formData.services[service.id as keyof typeof formData.services]
                                  ? `border-blue-500 bg-gradient-to-r ${service.color} bg-opacity-10` 
                                  : 'border-gray-200 hover:border-gray-300 group-hover:bg-gray-50'
                              }`}>
                                <div className="flex items-center gap-3">
                                  <div className="text-xl">{service.icon}</div>
                                  <div className="flex-1">
                                    <div className="font-medium text-gray-900 text-sm">{service.label}</div>
                                  </div>
                                  {formData.services[service.id as keyof typeof formData.services] && (
                                    <CheckCircle className="w-4 h-4 text-blue-600" />
                                  )}
                                </div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* GDPR Consent */}
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

                      {/* Submit Button */}
                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center gap-3">
                              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              <span>Se trimite...</span>
                            </div>
                          ) : (
                            <div className="flex items-center justify-center gap-3">
                              <Zap className="w-6 h-6" />
                              <span>Trimite mesajul</span>
                              <ArrowRight className="w-5 h-5" />
                            </div>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
      </DialogContent>
    </Dialog>
  )
}