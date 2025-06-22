import WebDesignHero from '@/components/web-design/WebDesignHero'
import WebDesignServices from '@/components/web-design/WebDesignServices'
import WebDesignProcess from '@/components/web-design/WebDesignProcess'
import WebDesignPortfolio from '@/components/web-design/WebDesignPortfolio'

export const metadata = {
  title: 'Web Design - SYNC Business Agency',
  description: 'Website-uri moderne și optimizate care transformă vizitatorii în clienți.',
}

export default function WebDesignPage() {
  return (
    <div className="min-h-screen">
      <WebDesignHero />
      <WebDesignServices />
      <WebDesignProcess />
      <WebDesignPortfolio />
    </div>
  )
}