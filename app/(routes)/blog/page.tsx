import BlogHero from '@/components/blog/BlogHero'
import BlogGrid from '@/components/blog/BlogGrid'
import BlogSidebar from '@/components/blog/BlogSidebar'
import BlogCTA from '@/components/blog/BlogCTA'

export const metadata = {
  title: 'Blog - SYNC Business Agency',
  description: 'Articole și resurse despre business, marketing și dezvoltare.',
}

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <BlogGrid />
            </div>
            <div>
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
      <BlogCTA />
    </>
  )
}