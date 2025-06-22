import { Suspense } from 'react'
import TeamHero from '@/components/team/TeamHero'
import TeamMembersSimple from '@/components/team/TeamMembersSimple'
import TeamValues from '@/components/team/TeamValues'
import TeamCTA from '@/components/team/TeamCTA'

export const metadata = {
  title: 'Echipa - SYNC Business Agency',
  description: 'Cunoaște echipa de profesioniști din spatele SYNC Business Agency.',
}

export default function TeamPage() {
  return (
    <>
      <TeamHero />
      <Suspense fallback={<div className="min-h-screen" />}>
        <TeamMembersSimple />
      </Suspense>
      <TeamValues />
      <TeamCTA />
    </>
  )
}