'use client'

import { Search, Tag, Calendar, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const recentPosts = [
  { title: 'Aloha', comments: 0, slug: 'aloha' },
  { title: 'Hello world!', comments: 1, slug: 'hello-world' },
  { title: 'Say Salut to Sync Business', comments: 0, slug: 'say-salut-to-sync-business' },
  { title: "It's time to say Hello to Sync Business", comments: 0, slug: 'its-time-to-say-hello' },
  { title: 'Create any website like a pro', comments: 0, slug: 'create-website-like-pro' }
]

const categories = [
  { name: 'Articles', count: 4 },
  { name: 'Blog', count: 2 },
  { name: 'Post Types', count: 1 }
]

const archives = [
  { month: 'Ianuarie 2024', count: 1 },
  { month: 'Decembrie 2023', count: 1 },
  { month: 'Septembrie 2023', count: 2 },
  { month: 'Februarie 2022', count: 1 },
  { month: 'Ianuarie 2022', count: 2 }
]

const tags = ['business', 'marketing', 'wordpress', 'web design', 'strategie', 'consultanță']

export default function BlogSidebar() {
  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Search className="w-5 h-5 mr-2 text-primary-600" />
          Caută
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Caută articole..."
            className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </div>
      {/* Recent Posts */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Postări Recente</h3>
        <ul className="space-y-3">
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group">
                <p className="text-gray-700 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </p>
                <p className="text-sm text-gray-500 flex items-center mt-1">
                  <MessageCircle className="w-3 h-3 mr-1" />
                  {post.comments} comentarii
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Categorii</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name}>
              <Link 
                href={`/blog/category/${category.name.toLowerCase()}`}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-700 hover:text-primary-600">{category.name}</span>
                <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">
                  {category.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Archives */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-primary-600" />
          Arhive
        </h3>
        <ul className="space-y-2">
          {archives.map((archive) => (
            <li key={archive.month}>
              <Link 
                href={`/blog/archive/${archive.month.toLowerCase().replace(' ', '-')}`}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-700 hover:text-primary-600">{archive.month}</span>
                <span className="text-sm text-gray-500">({archive.count})</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Tags */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Tag className="w-5 h-5 mr-2 text-primary-600" />
          Etichete
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag.toLowerCase().replace(' ', '-')}`}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Widget */}
      <div className="bg-gradient-to-br from-primary-600 to-purple-600 rounded-2xl p-6 text-white text-center">
        <h3 className="text-xl font-bold mb-3">
          Want to learn how to code in 8 weeks?
        </h3>
        <p className="text-white/90 mb-4">
          Descoperă cum poți învăța programare în doar 8 săptămâni
        </p>
        <Link 
          href="/contact"
          className="inline-block bg-white text-primary-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Become Full-Stack &gt;
        </Link>
      </div>

      {/* Recent Comments */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Comentarii Recente</h3>
        <div className="space-y-3">
          <div className="text-sm">
            <span className="font-medium text-gray-900">A WordPress Commenter</span>
            <span className="text-gray-500"> on </span>
            <Link href="/blog/hello-world" className="text-primary-600 hover:underline">
              Hello world!
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}