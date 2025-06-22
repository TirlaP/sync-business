import Link from 'next/link'
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const services = [
    { href: '/services/infiintare-firma', label: 'Înființare Firmă' },
    { href: '/services/contabilitate', label: 'Contabilitate și Management Financiar' },
    { href: '/services/marketing', label: 'Marketing' },
    { href: '/services/web-design', label: 'Web Design' },
    { href: '/services/brand-angajator', label: 'Brand de Angajator' },
    { href: '/services/consultanta-business', label: 'Consultanță de Business' },
  ]

  const company = [
    { href: '/echipa', label: 'Echipa' },
    { href: '/contact', label: 'Contact' },
    { href: '/politica-gdpr', label: 'Politica GDPR' },
    { href: '/politica-cookie', label: 'Politica Cookie' },
  ]

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-600 text-white font-bold text-xl px-3 py-1 rounded-lg">
                SYNC
              </div>
              <span className="font-bold text-lg">Business Agency</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Soluții INTEGRATE pentru business-uri de succes. De la web design captivant la branding memorabil și consultanță personalizată.
            </p>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Suceava, România</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+40 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>contact@syncbusiness.ro</span>
              </div>
            </div>
          </div>
          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Servicii</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link 
                    href={service.href} 
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Companie</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              Sync Business Agency 2024 © All rights reserved
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow us on</span>
              <div className="flex space-x-3">
                <a 
                  href="https://facebook.com/syncbusiness" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com/syncbusiness" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/company/syncbusiness" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}