import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactHero from '@/components/contact/ContactHero'

export const metadata = {
  title: 'Contact - SYNC Business Agency',
  description: 'Contactează-ne pentru o consultație gratuită. Abia așteptăm să îți cunoaștem afacerea.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}