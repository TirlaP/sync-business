import TeamCTA from '@/components/team/TeamCTA'
import TeamHero from '@/components/team/TeamHero'
import TeamMembers from '@/components/team/TeamMembers'
import TeamValues from '@/components/team/TeamValues'
import { Suspense } from 'react'

export const metadata = {
  title: 'Echipa - SYNC Business Agency',
  description: 'Cunoaște echipa de profesioniști din spatele SYNC Business Agency.',
}

export default function TeamPage() {
  return (
    <>
      <TeamHero />
      <Suspense fallback={<div className="min-h-screen" />}>
        <TeamMembers />
      </Suspense>
      <TeamValues />
      <TeamCTA />
    </>
  )
}