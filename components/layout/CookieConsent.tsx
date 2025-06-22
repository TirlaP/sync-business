'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X, Settings, Check, Shield, ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true and disabled
    analytics: true,
    marketing: true
  })

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      // Show popup after a small delay for better UX
      setTimeout(() => setShowBanner(true), 1000)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now()
    }))
    setShowBanner(false)
  }

  const acceptNecessaryOnly = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now()
    }))
    setShowBanner(false)
  }

  const savePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      ...preferences,
      timestamp: Date.now()
    }))
    setShowBanner(false)
    setShowSettings(false)
  }

  const handlePreferenceChange = (key: string, value: boolean) => {
    if (key === 'necessary') return // Can't change necessary cookies
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }))
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Backdrop */}
          {showSettings && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setShowSettings(false)}
            />
          )}
          
          <motion.div
            initial={{ x: 400, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: 400, opacity: 0, scale: 0.8 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.16, 1, 0.3, 1],
              scale: { duration: 0.3 }
            }}
            className={`fixed z-50 ${showSettings ? 'bottom-6 right-6 max-w-md' : 'bottom-6 right-6 max-w-sm'}`}
          >
            {!showSettings ? (
              // Main Popup
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Cookie className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Cookie-uri</h3>
                      <p className="text-blue-100 text-sm">Respectăm confidențialitatea ta</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Folosim cookie-uri pentru a îmbunătăți experiența ta pe site. 
                    Poți alege ce tipuri să accepți.
                  </p>

                  {/* Buttons */}
                  <div className="space-y-2">
                    <button
                      onClick={acceptAll}
                      className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
                    >
                      Acceptă toate
                    </button>
                    
                    <div className="flex gap-2">
                      <button
                        onClick={acceptNecessaryOnly}
                        className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm"
                      >
                        Doar necesare
                      </button>
                      <button
                        onClick={() => setShowSettings(true)}
                        className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm flex items-center justify-center gap-1"
                      >
                        <Settings className="w-3.5 h-3.5" />
                        Setări
                      </button>
                    </div>
                  </div>

                  {/* Footer link */}
                  <div className="mt-3 text-center">
                    <Link 
                      href="/politica-cookie" 
                      className="text-xs text-gray-500 hover:text-gray-700 underline"
                    >
                      Politica cookie-uri
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              // Settings Panel
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <Shield className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Setări Cookie</h3>
                        <p className="text-blue-100 text-sm">Personalizează preferințele</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="p-1.5 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 max-h-80 overflow-y-auto">
                  <div className="space-y-4">
                    {/* Necessary Cookies */}
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium text-gray-900 text-sm">Cookie-uri necesare</h4>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                            Obligatorii
                          </span>
                        </div>
                        <div className="w-9 h-5 bg-green-500 rounded-full flex items-center justify-end pr-0.5">
                          <div className="w-4 h-4 bg-white rounded-full shadow-sm flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 text-green-500" />
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">
                        Esențiale pentru funcționarea site-ului. Nu pot fi dezactivate.
                      </p>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900 text-sm">Cookie-uri de analiză</h4>
                        <button
                          onClick={() => handlePreferenceChange('analytics', !preferences.analytics)}
                          className="relative focus:outline-none"
                        >
                          <div className={`w-9 h-5 rounded-full transition-colors ${
                            preferences.analytics ? 'bg-blue-500' : 'bg-gray-300'
                          }`}>
                            <div className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${
                              preferences.analytics ? 'translate-x-4' : 'translate-x-0'
                            }`} />
                          </div>
                        </button>
                      </div>
                      <p className="text-xs text-gray-600">
                        Ne ajută să înțelegem utilizarea site-ului în mod anonim.
                      </p>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900 text-sm">Cookie-uri de marketing</h4>
                        <button
                          onClick={() => handlePreferenceChange('marketing', !preferences.marketing)}
                          className="relative focus:outline-none"
                        >
                          <div className={`w-9 h-5 rounded-full transition-colors ${
                            preferences.marketing ? 'bg-blue-500' : 'bg-gray-300'
                          }`}>
                            <div className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${
                              preferences.marketing ? 'translate-x-4' : 'translate-x-0'
                            }`} />
                          </div>
                        </button>
                      </div>
                      <p className="text-xs text-gray-600">
                        Pentru publicitate personalizată și urmărirea pe site-uri.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-100 bg-gray-50">
                  <div className="flex gap-2 mb-3">
                    <button
                      onClick={acceptNecessaryOnly}
                      className="flex-1 bg-white text-gray-700 py-2 px-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm border border-gray-200"
                    >
                      Doar necesare
                    </button>
                    <button
                      onClick={savePreferences}
                      className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
                    >
                      Salvează
                    </button>
                  </div>
                  <div className="text-center">
                    <Link 
                      href="/politica-cookie"
                      className="text-xs text-gray-500 hover:text-gray-700 underline"
                    >
                      Politica completă cookie-uri
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}