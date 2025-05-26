import { Suspense } from "react"
import { BlogList } from "@/components/blog/blog-list"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/layout/hero"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Lightbulb, PenToolIcon as Tool, HomeIcon, TrendingUp } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />

      {/* Featured Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Explore</span> Home Improvement Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover expert advice across our most popular home improvement topics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow homegeeni-card">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <HomeIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Maintenance</h3>
              <p className="text-gray-600 mb-4">Essential tips to keep your home in perfect condition year-round.</p>
              <Link href="/blog?category=maintenance">
                <Button variant="link" className="p-0 h-auto font-medium text-primary homegeeni-link">
                  View Articles <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow homegeeni-card">
              <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Tool className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Renovation</h3>
              <p className="text-gray-600 mb-4">Transform your living spaces with our expert renovation guides.</p>
              <Link href="/blog?category=renovation">
                <Button variant="link" className="p-0 h-auto font-medium text-accent homegeeni-link">
                  View Articles <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow homegeeni-card">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">DIY Projects</h3>
              <p className="text-gray-600 mb-4">Hands-on projects to improve your home on any budget.</p>
              <Link href="/blog?category=diy">
                <Button variant="link" className="p-0 h-auto font-medium text-primary homegeeni-link">
                  View Articles <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow homegeeni-card">
              <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tips & Tricks</h3>
              <p className="text-gray-600 mb-4">Smart solutions and insights for everyday home care.</p>
              <Link href="/blog?category=tips">
                <Button variant="link" className="p-0 h-auto font-medium text-accent homegeeni-link">
                  View Articles <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
              <p className="text-lg text-gray-600 mt-2">Fresh insights and expert advice for your home</p>
            </div>
            <Link href="/blog">
              <Button variant="outline" className="hidden md:flex">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <Suspense fallback={<LoadingSpinner />}>
            <BlogList />
          </Suspense>

          <div className="mt-12 text-center md:hidden">
            <Link href="/blog">
              <Button>
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with HomeGeeni</h2>
            <p className="text-xl opacity-90 mb-8">
              Subscribe to our newsletter for the latest home improvement tips, guides, and exclusive content.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg flex-grow text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-primary hover:bg-white/90">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
