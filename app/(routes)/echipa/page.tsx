import TeamHero from '@/components/team/TeamHero'
import TeamMembers from '@/components/team/TeamMembers'
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
      <TeamMembers />
      <TeamValues />
      <TeamCTA />
    </>
  )
}