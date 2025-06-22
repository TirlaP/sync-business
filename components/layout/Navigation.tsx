'use client'

import { ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Acasă' },
    { 
      href: '/services', 
      label: 'Servicii',
      dropdown: [
        { href: '/services/marketing', label: 'Marketing' },
        { href: '/services/web-design', label: 'Web Design' },
        { href: '/services/consultanta-business', label: 'Consultanță de Business' },
        { href: '/services/contabilitate', label: 'Contabilitate' },
        { href: '/services/brand-angajator', label: 'Brand de Angajator' },
        { href: '/services/infiintare-firma', label: 'Înființare Firmă' },
      ]
    },
    { href: '/portofoliu', label: 'Portofoliu' },
    { href: '/echipa', label: 'Echipa' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed w-full z-50 top-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg">
          <div className="px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="bg-primary-600 text-white font-bold text-xl px-3 py-1 rounded-lg transition-transform group-hover:scale-105">
                  SYNC
                </div>
                <span className="font-bold text-gray-900 text-lg">Business Agency</span>
              </Link>

              {/* Desktop Navigation - Center */}
              <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <div key={link.href} className="relative">
                    {link.dropdown ? (
                      <div 
                        className="relative"
                        onMouseEnter={() => {
                          if (timeoutRef.current) {
                            clearTimeout(timeoutRef.current)
                          }
                          setServicesOpen(true)
                        }}
                        onMouseLeave={() => {
                          timeoutRef.current = setTimeout(() => {
                            setServicesOpen(false)
                          }, 150)
                        }}
                      >
                        <Link 
                          href={link.href}
                          className={`flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium ${
                            pathname.startsWith('/services') ? 'text-primary-600' : ''
                          }`}
                        >
                          <span>{link.label}</span>
                          <ChevronDown className="w-4 h-4" />
                        </Link>
                        
                        {servicesOpen && (
                          <div className="absolute top-full left-0 mt-2 w-64">
                            <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2">
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className={`block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200 ${
                                    pathname === item.href ? 'bg-primary-50 text-primary-600' : ''
                                  }`}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={`text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium ${
                          pathname === link.href ? 'text-primary-600' : ''
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Right Button */}
              <div className="hidden md:block">
                <Link 
                  href="/contact" 
                  className="bg-primary-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 hover:shadow-lg"
                >
                  Solicită ofertă
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-gray-700 hover:text-primary-600 transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
              <div className="md:hidden border-t border-gray-100">
                <div className="py-4">
                  {navLinks.map((link) => (
                    <div key={link.href}>
                      {link.dropdown ? (
                        <div>
                          <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-2 px-4 text-gray-700 font-medium hover:text-primary-600"
                          >
                            {link.label}
                          </Link>
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className={`block py-2 px-8 text-gray-600 hover:text-primary-600 transition-colors ${
                                pathname === item.href ? 'text-primary-600 bg-primary-50' : ''
                              }`}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`block py-2 px-4 text-gray-700 hover:text-primary-600 transition-colors font-medium ${
                            pathname === link.href ? 'text-primary-600' : ''
                          }`}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                  
                  <Link 
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block mx-4 mt-4 bg-primary-600 text-white px-6 py-2.5 rounded-lg font-semibold text-center hover:bg-primary-700 transition-colors"
                  >
                    Solicită ofertă
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}