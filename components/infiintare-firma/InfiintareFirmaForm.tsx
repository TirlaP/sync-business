'use client'

import { 
  Building,
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle,
  FileText,
  Clock,
  ArrowRight
} from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function InfiintareFirmaForm() {
  const [formData, setFormData] = useState({
    nume1: '',
    nume2: '',
    nume3: '',
    nume4: '',
    nume5: '',
    numele: '',
    email: '',
    telefon: '',
    mesaj: '',
    acceptTermeni: false
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const steps = [
    {
      number: '01',
      title: 'Scrie-ne denumirile',
      description: 'Alegi, în ordinea preferinței, 3-5 variante de nume pentru firma ta',
      icon: Building
    },
    {
      number: '02',
      title: 'Rezervăm denumirea',
      description: 'Noi rezervăm denumirea pentru tine și verificăm disponibilitatea',
      icon: CheckCircle
    },
    {
      number: '03',
      title: 'Te contactăm',
      description: 'Stabilim restul detaliilor și îți solicităm actele necesare',
      icon: Phone
    },
    {
      number: '04',
      title: 'Semnezi și gata!',
      description: 'Îți trimitem documentele la semnat și transmitem la ONRC',
      icon: FileText
    }
  ]

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 border border-green-200 shadow-xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-white" />
            </motion.div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Cererea ta a fost trimisă cu succes!
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Te vom contacta în maximum 24 de ore pentru a discuta detaliile înființării firmei tale.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">24 ore</div>
                <div className="text-sm text-gray-600">Timp de răspuns</div>
              </div>
              <div className="text-center">
                <FileText className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">2 minute</div>
                <div className="text-sm text-gray-600">Pentru semnare</div>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Complet</div>
                <div className="text-sm text-gray-600">Serviciu inclus</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-indigo-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-gradient-to-br from-indigo-400/5 to-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/5 to-indigo-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Process Steps */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-full text-indigo-700 font-medium text-sm mb-6">
            <Clock className="w-4 h-4" />
            <span>Cum funcționează?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Procesul de 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600"> înființare în 4 pași</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                
                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-indigo-300 mx-auto" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Formular Înființare Firmă
                </h3>
                <p className="text-gray-600">
                  Completează formularul și începem procesul de înființare
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company Name Suggestions */}
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Sugestii nume firma <span className="text-red-500">*</span>
                  </label>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name={`nume${num}`}
                        value={formData[`nume${num}` as keyof typeof formData] as string}
                        onChange={handleInputChange}
                        placeholder={`Sugestie firma ${num}...`}
                        className={`w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 ${
                          num === 1 ? 'ring-2 ring-indigo-100' : ''
                        }`}
                        required={num === 1}
                      />
                      {num === 1 && (
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-indigo-600 font-medium">
                          Obligatoriu
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="numele"
                      value={formData.numele}
                      onChange={handleInputChange}
                      placeholder="Numele dvs. *"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="telefon"
                      value={formData.telefon}
                      onChange={handleInputChange}
                      placeholder="Tel: +072 345 6789 *"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Adresa ta de email *"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    name="mesaj"
                    value={formData.mesaj}
                    onChange={handleInputChange}
                    placeholder="Dacă doriți să adăugați ceva..."
                    rows={4}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="acceptTermeni"
                    checked={formData.acceptTermeni}
                    onChange={handleInputChange}
                    className="mt-1 w-5 h-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                    required
                  />
                  <label className="text-sm text-gray-600">
                    Am citit și sunt de acord cu{' '}
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 underline">
                      Termenii și condițiile
                    </a>{' '}
                    și cu{' '}
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 underline">
                      Politică de prelucrare a datelor cu caracter personal
                    </a>
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || !formData.acceptTermeni}
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-blue-700 focus:ring-4 focus:ring-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Se trimite...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Trimite cererea
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-3xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Până te vom contacta, te rugăm să clarifici:</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Adresa sediului social</h5>
                    <p className="text-white/90 text-sm">Unde vei stabili sediul social al firmei</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Activitățile și codurile CAEN</h5>
                    <p className="text-white/90 text-sm">Activitățile pe care le vei desfășura pe firmă</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Modalitatea de depunere</h5>
                    <p className="text-white/90 text-sm">Prin procură notarială, semnătură electronică, sau depunere fizică</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-4">De ce să ne alegi?</h4>
              <div className="space-y-3">
                {[
                  'Proces 100% digitalizat',
                  'Expertiză în înființări rapide',
                  'Suport complet inclus',
                  'Prețuri transparente'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}