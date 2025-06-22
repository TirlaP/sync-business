interface MarketingProject {
  title: string
  description: string
  platforms: string[]
  metrics: Record<string, string>
  features: string[]
  src: string
  link: string
  color: string
  featured: boolean
}

export const marketingProjects: MarketingProject[] = [
  {
    title: "Social Media Management",
    description: "Creăm conexiuni autentice și angajante cu audiența ta prin conținut strategic și management profesional care transformă followerii în clienți fideli.",
    platforms: ['Facebook', 'Instagram', 'TikTok', 'LinkedIn', 'YouTube'],
    metrics: { engagement: '+250%', followers: '+180%', conversions: '+120%' },
    features: ['Content Strategy', 'Community Management', 'Influencer Campaigns', 'Social Analytics'],
    src: "social-media.jpg",
    link: "/services/marketing",
    color: "#667EEA",
    featured: true
  },
  {
    title: "Campanii Publicitare",
    description: "Maximizăm ROI-ul prin campanii țintite, optimizare continuă și analiză detaliată a performanței pentru rezultate măsurabile garantate.",
    platforms: ['Facebook & Instagram Ads', 'Google Ads & Search', 'YouTube Advertising', 'LinkedIn Campaigns'],
    metrics: { roi: '320%', reach: '50K+', ctr: '3.2%' },
    features: ['Advanced Targeting', 'Creative Optimization', 'A/B Testing', 'Performance Analytics'],
    src: "advertising.jpg", 
    link: "/services/marketing",
    color: "#F093FB",
    featured: false
  },
  {
    title: "Design & Creative",
    description: "Design creativ care captează atenția, transmite mesajul și convertește vizitatorii în clienți prin materiale vizuale de impact.",
    platforms: ['Materiale publicitare', 'Grafică pentru social media', 'Bannere & Display', 'Video content'],
    metrics: { designs: '500+', brands: '50+', satisfaction: '98%' },
    features: ['Brand Identity', 'Visual Content', 'Motion Graphics', 'Print Design'],
    src: "creative.jpg",
    link: "/services/marketing", 
    color: "#FF6B95",
    featured: false
  },
  {
    title: "Strategie & Branding",
    description: "Dezvoltăm identități de brand puternice și strategii integrate care diferențiază afacerea ta și creează conexiuni emoționale cu clienții.",
    platforms: ['Brand Strategy', 'Market Research', 'Positioning', 'Brand Guidelines'],
    metrics: { brands: '100+', growth: '+180%', recognition: '+65%' },
    features: ['Brand Audit', 'Strategic Planning', 'Visual Identity', 'Brand Guidelines'],
    src: "branding.jpg",
    link: "/services/marketing",
    color: "#4ECDC4",
    featured: true
  },
  {
    title: "Marketing Automation",
    description: "Sisteme inteligente care nutriesc lead-urile, personalizează experiența clientului și optimizează funnel-ul de vânzări pentru eficiență maximă.",
    platforms: ['Email Marketing', 'Lead Nurturing', 'CRM Integration', 'Workflow Automation'],
    metrics: { efficiency: '+300%', conversions: '+180%', retention: '+45%' },
    features: ['Email Sequences', 'Lead Scoring', 'Behavioral Triggers', 'Analytics'],
    src: "automation.jpg",
    link: "/services/marketing",
    color: "#45B7D1",
    featured: false
  }
]