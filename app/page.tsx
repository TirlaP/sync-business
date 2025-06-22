import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import About from '@/components/home/About'
import Process from '@/components/home/Process'
import Benefits from '@/components/home/Benefits'
import CTA from '@/components/home/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Process />
      <Benefits />
      <CTA />
    </>
  )
}