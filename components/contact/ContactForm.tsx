'use client'

import { useState, useRef } from 'react'
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
import { motion, useInView } from 'framer-motion'

const services = [
  { id: 'marketing', label: 'Marketing Digital', icon: '📊', color: 'from-purple-500 to-pink-500' },
  { id: 'webDesign', label: 'Web Design Premium', icon: '💻', color: 'from-blue-500 to-cyan-500' },
  { id: 'accounting', label: 'Servicii Financiare', icon: '📈', color: 'from-green-500 to-emerald-500' },
  { id: 'employerBranding', label: 'Brand de Angajator', icon: '👥', color: 'from-orange-500 to-red-500' },
  { id: 'businessConsulting', label: 'Consultanță Strategică', icon: '🎯', color: 'from-indigo-500 to-purple-500' },
  { id: 'companyFormation', label: 'Înființare Companie', icon: '🏢', color: 'from-teal-500 to-blue-500' },
]

export default function ContactForm() {
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

  const formRef = useRef(null)
  const isInView = useInView(formRef, { once: true, margin: "-50px" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
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

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-2xl p-12 text-center border border-green-200"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-10 h-10 text-white" />
        </motion.div>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-bold text-gray-900 mb-4"
        >
          Mesajul a fost trimis cu succes!
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg text-gray-600 mb-6"
        >
          Îți mulțumim pentru încredere! Echipa noastră te va contacta în următoarele 2 ore.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Răspuns în maxim 2 ore</span>
          </div>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <motion.div 
      ref={formRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50 -translate-y-20 translate-x-20" />
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 font-medium text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Formular de Contact</span>
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
        </motion.div>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Company Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
              <Building2 className="w-5 h-5 text-blue-600" />
              Informații companie (opțional)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                  Denumire firmă
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="companyName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-gray-400"
                    placeholder="Ex: SYNC Business SRL"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  />
                </div>
              </div>
              
              <div className="group">
                <label htmlFor="fiscalCode" className="block text-sm font-medium text-gray-700 mb-2">
                  Cod fiscal
                </label>
                <input
                  type="text"
                  id="fiscalCode"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-gray-400"
                  placeholder="Ex: RO12345678"
                  value={formData.fiscalCode}
                  onChange={(e) => setFormData({ ...formData, fiscalCode: e.target.value })}
                />
              </div>
            </div>
          </motion.div>

          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
              <User className="w-5 h-5 text-purple-600" />
              Informații personale
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Numele și prenumele tău *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-gray-400"
                    placeholder="Ex: Mihai Popescu"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>
              
              <div className="group">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Nr. Telefon *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-gray-400"
                    placeholder="Ex: +40 XXX XXX XXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className="group mt-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-gray-400"
                  placeholder="Ex: mihai@compania.ro"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.5 }}
            className="group"
          >
            <label htmlFor="message" className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
              <MessageSquare className="w-5 h-5 text-green-600" />
              Descrie-ne provocările tale
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none group-hover:border-gray-400"
              placeholder="Descrie în câteva cuvinte cu ce provocări te confrunți și cum îți imaginezi că te-am putea ajuta..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </motion.div>

          {/* Services Selection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              De care servicii crezi că ai avea nevoie?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.label 
                  key={service.id}
                  className="group relative cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={formData.services[service.id as keyof typeof formData.services]}
                    onChange={() => handleServiceChange(service.id as keyof typeof formData.services)}
                  />
                  <div className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    formData.services[service.id as keyof typeof formData.services]
                      ? `border-blue-500 bg-gradient-to-r ${service.color} bg-opacity-10` 
                      : 'border-gray-200 hover:border-gray-300 group-hover:bg-gray-50'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{service.icon}</div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{service.label}</div>
                      </div>
                      {formData.services[service.id as keyof typeof formData.services] && (
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      )}
                    </div>
                  </div>
                </motion.label>
              ))}
            </div>
          </motion.div>

          {/* GDPR Consent */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.8 }}
          >
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
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.9 }}
          >
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
            </motion.button>
          </motion.div>
        </form>
      </div>
    </motion.div>
  )
}