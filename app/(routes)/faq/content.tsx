'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { HelpCircle, Plus, Minus, ArrowLeft, MessageCircle, Clock, Users, Rocket } from 'lucide-react'
import Link from 'next/link'

const faqCategories = [
  {
    id: 'general',
    title: 'Întrebări Generale',
    icon: HelpCircle,
    questions: [
      {
        question: 'Ce servicii oferă SYNC Business Agency?',
        answer: 'Oferim o gamă completă de servicii pentru business-uri: web design și dezvoltare, marketing digital, consultanță de business, brand de angajator, înființare firme și servicii de contabilitate. Suntem partenerul tău pentru toate nevoile digitale și de business.'
      },
      {
        question: 'În ce zone geografice activați?',
        answer: 'Suntem bazați în Suceava, România, dar lucrăm cu clienți din toată țara și din străinătate. Multe dintre serviciile noastre se pot presta online, ceea ce ne permite să colaborăm eficient cu parteneri din orice locație.'
      },
      {
        question: 'Care este diferența față de alte agenții?',
        answer: 'Ne concentrăm pe soluții INTEGRATE - nu oferim doar servicii separate, ci creăm strategii complete care combină tehnologia, marketingul și consultanța de business pentru rezultate maxime. Echipa noastră are experiență vastă și oferim suport personalizat pentru fiecare client.'
      },
      {
        question: 'Cum pot să încep colaborarea cu voi?',
        answer: 'Simplu! Contactează-ne prin formularul de pe site, email sau telefon pentru o consultanță gratuită. Vom discuta despre nevoile tale, vom propune o strategie personalizată și vom stabili pașii următori pentru proiectul tău.'
      }
    ]
  },
  {
    id: 'web-design',
    title: 'Web Design & Dezvoltare',
    icon: Rocket,
    questions: [
      {
        question: 'Cât durează să creați un website?',
        answer: 'Durata depinde de complexitatea proiectului. Un site web standard durează 2-4 săptămâni, în timp ce un e-commerce complex poate dura 6-8 săptămâni. Vom stabili un timeline clar înainte de a începe lucrul.'
      },
      {
        question: 'Website-urile sunt responsive (mobile-friendly)?',
        answer: 'Da, toate website-urile pe care le creăm sunt 100% responsive și optimizate pentru toate dispozitivele - desktop, tabletă și mobil. Testăm pe multiple device-uri pentru a asigura o experiență perfectă.'
      },
      {
        question: 'Oferă servicii de mentenanță pentru website?',
        answer: 'Da! Oferim pachete de mentenanță care includ backup-uri regulate, actualizări de securitate, monitorizare performanță, și suport tehnic. Poți alege pachetul care se potrivește cel mai bine nevoilor tale.'
      },
      {
        question: 'Pot să-mi actualizez singur conținutul pe site?',
        answer: 'Absolut! Creăm website-uri cu sisteme de management ușor de folosit (CMS). Te vom instrui cum să adaugi și să editezi conținut, și vei avea control complet asupra site-ului tău.'
      },
      {
        question: 'Includeți și SEO în dezvoltarea website-ului?',
        answer: 'Da, toate website-urile le optimizăm din start pentru motoarele de căutare - structură SEO, meta tags, viteză de încărcare, și conținut optimizat. Oferim și servicii SEO avansate ca serviciu separat.'
      }
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing Digital',
    icon: MessageCircle,
    questions: [
      {
        question: 'Ce platforme de social media gestionați?',
        answer: 'Gestionăm toate platformele majore: Facebook, Instagram, LinkedIn, TikTok, YouTube, și alte platforme relevante pentru industria ta. Alegem platformele potrivite în funcție de audiența și obiectivele tale.'
      },
      {
        question: 'Cât costă o campanie de marketing digital?',
        answer: 'Costurile variază în funcție de obiective, platforme și amploarea campaniei. Oferim pachete de la 500 lei/lună pentru business-uri mici, până la strategii complete pentru companii mari. Consultanța inițială este gratuită!'
      },
      {
        question: 'Cum măsurați succesul campaniilor?',
        answer: 'Folosim KPI-uri specifici: reach, engagement, conversii, ROI, trafic website, lead-uri generate. Primești rapoarte detaliate lunare cu analiza performanței și recomandări pentru optimizare.'
      },
      {
        question: 'Creați și conținutul pentru social media?',
        answer: 'Da! Echipa noastră de creatori produce conținut original: postări grafice, video-uri, fotografii, copywriting, și stories. Totul aliniat cu identitatea brandului tău și optimizat pentru fiecare platformă.'
      },
      {
        question: 'Oferiți și Google Ads / Facebook Ads?',
        answer: 'Sigur! Suntem certificați în Google Ads și Facebook Ads. Creăm și gestionăm campanii plătite optimizate pentru conversii, cu targeting precis și buget eficient.'
      }
    ]
  },
  {
    id: 'business',
    title: 'Consultanță Business',
    icon: Users,
    questions: [
      {
        question: 'Ce include o consultanță de business?',
        answer: 'Analizăm situația actuală a business-ului, identificăm oportunități de creștere, dezvoltăm strategii pentru optimizare, și oferim suport în implementare. Acoperim areas: operațiuni, marketing, vânzări, și digitalizare.'
      },
      {
        question: 'Ajutați la înființarea unei firme noi?',
        answer: 'Da! Oferim servicii complete pentru înființarea firmelor: alegerea formei juridice optime, documentația necesară, înregistrarea la ONRC, obținerea codurilor CAEN, și toate formalizările required.'
      },
      {
        question: 'Oferiți servicii de contabilitate?',
        answer: 'Da, prin parteneriatul nostru cu experți contabili autorizați. Oferim servicii complete: contabilitate curentă, declarații fiscale, consultanță fiscală, și raportări. Soluții adaptate pentru orice tip de business.'
      },
      {
        question: 'Ce înseamnă "brand de angajator"?',
        answer: 'Te ajutăm să devii un angajator atractiv pentru talentele de top. Dezvoltăm strategii pentru recrutare, cultura companiei, beneficii pentru angajați, și comunicare despre valorile organizației tale.'
      },
      {
        question: 'Cât durează să văd rezultate dintr-o consultanță?',
        answer: 'Primele îmbunătățiri se văd de obicei în 30-60 de zile, dar transformarea completă poate dura 6-12 luni, în funcție de complexitatea business-ului și strategiile implementate.'
      }
    ]
  },
  {
    id: 'pricing',
    title: 'Prețuri & Pachete',
    icon: Clock,
    questions: [
      {
        question: 'Cum calculați prețurile pentru servicii?',
        answer: 'Prețurile depind de complexitatea proiectului, timpul necesar, și resursele implicate. Oferim estimate transparente după consultanța inițială gratuită. Nu există costuri ascunse - totul este clar de la început.'
      },
      {
        question: 'Oferă pachete integrate cu reduceri?',
        answer: 'Da! Oferim pachete combinate care includ multiple servicii (web design + marketing + consultanță) cu reduceri semnificative. Cu cât aleți mai multe servicii, cu atât beneficiați de prețuri mai avantajoase.'
      },
      {
        question: 'Care sunt termenii de plată?',
        answer: 'De obicei cerem 50% avans la începutul proiectului și restul la livrare. Pentru proiecte mari, putem stabili un plan de plăți în etape. Acceptăm plăți prin transfer bancar, card, sau facturi cu termene agreate.'
      },
      {
        question: 'Oferă garanție pentru serviciile prestate?',
        answer: 'Da! Oferim garanție pentru toate lucrările: 12 luni pentru website-uri, 30 de zile pentru materiale marketing, și suport continuu pentru consultanța de business. Satisfacția clientului este prioritatea noastră.'
      },
      {
        question: 'Pot să anulez un proiect în derulare?',
        answer: 'Da, dar condițiile depind de etapa proiectului. În primele 48 de ore poți anula fără penalități. După aceea, se taxează doar lucrul efectuat până la momentul anulării. Politica de anulare este explicată clar în contract.'
      }
    ]
  }
]

export default function FAQContent() {
  const [activeCategory, setActiveCategory] = useState('general')
  const [openQuestions, setOpenQuestions] = useState<number[]>([])

  const toggleQuestion = (questionIndex: number) => {
    setOpenQuestions(prev => 
      prev.includes(questionIndex) 
        ? prev.filter(q => q !== questionIndex)
        : [...prev, questionIndex]
    )
  }

  const activeData = faqCategories.find(cat => cat.id === activeCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Înapoi la pagina principală
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="p-3 bg-blue-700 rounded-xl">
              <HelpCircle className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Întrebări Frecvente</h1>
              <p className="text-xl text-blue-200 mt-2">
                Răspunsuri la întrebările tale despre serviciile noastre
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h3 className="font-semibold text-gray-900 mb-4">Categorii</h3>
              <div className="space-y-2">
                {faqCategories.map((category) => {
                  const Icon = category.icon
                  return (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.id)
                        setOpenQuestions([]) // Reset open questions when changing category
                      }}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                        activeCategory === category.id
                          ? 'bg-blue-100 text-blue-700 border border-blue-200'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{category.title}</span>
                    </button>
                  )
                })}
              </div>

              {/* Contact CTA */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Nu găsești răspunsul?
                </h4>
                <p className="text-sm text-blue-700 mb-3">
                  Contactează-ne pentru o consultanță gratuită!
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Contactează-ne
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Category Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                <div className="flex items-center gap-3">
                  {activeData && (
                    <>
                      <div className="p-2 bg-white/20 rounded-lg">
                        <activeData.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">{activeData.title}</h2>
                        <p className="text-blue-100">
                          {activeData.questions.length} întrebări frecvente
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Questions */}
              <div className="p-6">
                <div className="space-y-4">
                  {activeData?.questions.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleQuestion(index)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-900 pr-4">
                          {faq.question}
                        </span>
                        {openQuestions.includes(index) ? (
                          <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        ) : (
                          <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      
                      <motion.div
                        initial={false}
                        animate={{
                          height: openQuestions.includes(index) ? 'auto' : 0,
                          opacity: openQuestions.includes(index) ? 1 : 0
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="px-4 pb-4 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 bg-blue-600 rounded-2xl p-8 text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">
                Gata să începem proiectul tău?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Hai să discutăm despre nevoile tale și să creăm împreună soluția perfectă pentru business-ul tău.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contactează-ne acum
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors border border-blue-500"
                >
                  <Rocket className="w-5 h-5" />
                  Vezi serviciile
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}