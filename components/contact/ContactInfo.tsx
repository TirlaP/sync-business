import { Building2, Mail, MapPin, Phone, Clock, Facebook, Instagram, Linkedin } from 'lucide-react'
import { contactInfo } from '@/data/contactInfo'

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Date de contact</h3>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium text-gray-900">Adresă</p>
              <p className="text-gray-600">{contactInfo.address.city}, {contactInfo.address.street}</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Phone className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium text-gray-900">Telefon</p>
              <p className="text-gray-600">{contactInfo.phone}</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Mail className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium text-gray-900">Email</p>
              <p className="text-gray-600">{contactInfo.email}</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Clock className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium text-gray-900">Program</p>
              <p className="text-gray-600">{contactInfo.program.workDays}</p>
              <p className="text-gray-600">{contactInfo.program.sunday}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Company Info */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Informații legale</h3>
        
        <div className="space-y-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Building2 className="w-5 h-5 text-primary-600" />
              <p className="font-medium text-gray-900">FACILITY ACCOUNT SRL</p>
            </div>
            <p className="text-gray-600 text-sm">CUI: 37210737</p>
            <p className="text-gray-600 text-sm">J33/377/2017</p>
            <p className="text-gray-600 text-sm">Suceava, Județul Suceava</p>
          </div>
          
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Building2 className="w-5 h-5 text-primary-600" />
              <p className="font-medium text-gray-900">PAULIUC MARICICA</p>
            </div>
            <p className="text-gray-600 text-sm">PERSOANĂ FIZICĂ AUTORIZATĂ</p>
            <p className="text-gray-600 text-sm">CUI: 43690893</p>
            <p className="text-gray-600 text-sm">F33/85/2021</p>
            <p className="text-gray-600 text-sm">Suceava, Județul Suceava</p>
          </div>
          
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Building2 className="w-5 h-5 text-primary-600" />
              <p className="font-medium text-gray-900">ZEPHYRWEB STUDIOS SRL</p>
            </div>
            <p className="text-gray-600 text-sm">CUI: 49916524</p>
            <p className="text-gray-600 text-sm">J33/721/2024</p>
            <p className="text-gray-600 text-sm">Suceava, Județul Suceava</p>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-primary-600 rounded-2xl p-8 text-white text-center">
        <h3 className="text-xl font-semibold mb-4">Urmărește-ne</h3>
        <div className="flex justify-center space-x-4">
          <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer" 
             className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer"
             className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer"
             className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  )
}