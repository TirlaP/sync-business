import Hero from '@/components/home/Hero'
import ServicesShowcase from '@/components/home/ServicesShowcase'
import About from '@/components/home/About'
import Process from '@/components/home/Process'
import Benefits from '@/components/home/Benefits'
import CTA from '@/components/home/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesShowcase />
      <About />
      <Process />
      <Benefits />
      <CTA />
    </>
  )
}