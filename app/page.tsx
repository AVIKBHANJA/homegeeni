import { Suspense } from "react";
import { BlogList } from "@/components/blog/blog-list";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/layout/hero";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Lightbulb,
  PenToolIcon as Tool,
  HomeIcon,
  TrendingUp,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Plan your home improvement,{" "}
              <span className="text-primary">better</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All the tools and expert advice you need to transform your living
              space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/blog?category=maintenance" className="block">
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 h-full joy-card">
                <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  <HomeIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Maintenance
                </h3>
                <p className="text-gray-600 mb-4">
                  Essential tips to keep your home in perfect condition
                  year-round.
                </p>
                <div className="flex items-center text-primary font-medium">
                  View Articles <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link href="/blog?category=renovation" className="block">
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 h-full joy-card">
                <div className="bg-accent/10 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  <Tool className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Renovation
                </h3>
                <p className="text-gray-600 mb-4">
                  Transform your living spaces with our expert renovation
                  guides.
                </p>
                <div className="flex items-center text-accent font-medium">
                  View Articles <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link href="/blog?category=diy" className="block">
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 h-full joy-card">
                <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  DIY Projects
                </h3>
                <p className="text-gray-600 mb-4">
                  Hands-on projects to improve your home on any budget.
                </p>
                <div className="flex items-center text-primary font-medium">
                  View Articles <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link href="/blog?category=tips" className="block">
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 h-full joy-card">
                <div className="bg-accent/10 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Tips & Tricks
                </h3>
                <p className="text-gray-600 mb-4">
                  Smart solutions and insights for everyday home care.
                </p>
                <div className="flex items-center text-accent font-medium">
                  View Articles <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-900">
                Latest Articles
              </h2>
              <p className="text-lg text-gray-600 mt-2">
                Fresh insights and expert advice for your home
              </p>
            </div>
            <Link href="/blog">
              <Button
                variant="outline"
                className="hidden md:flex joy-btn joy-btn-outline rounded-full px-6"
              >
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
              <Button className="joy-btn joy-btn-primary rounded-full">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tips & Ideas Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="circle-bg circle-bg-1 opacity-50"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Ideas & <span className="text-primary">Inspiration</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover creative solutions and practical insights for your home
              improvement journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden joy-card">
              <div className="h-48 overflow-hidden">
                <img
                  src="/placeholder.jpg"
                  alt="Home Design Tips"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                  Tips & Tricks
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  64 Ideas That Will Transform Your Home
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Discover innovative ways to reimagine your living space with
                  these practical and stylish ideas.
                </p>
                <Link
                  href="/blog?category=tips"
                  className="text-primary font-medium flex items-center"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden joy-card">
              <div className="h-48 overflow-hidden">
                <img
                  src="/placeholder.jpg"
                  alt="Renovation Guide"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-3">
                  Renovation
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Your Complete Guide to Home Renovation
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Everything you need to know before starting your next
                  renovation project, from planning to execution.
                </p>
                <Link
                  href="/blog?category=renovation"
                  className="text-accent font-medium flex items-center"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden joy-card">
              <div className="h-48 overflow-hidden">
                <img
                  src="/placeholder.jpg"
                  alt="DIY Projects"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                  DIY Projects
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  10 Weekend DIY Projects Anyone Can Do
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Simple yet impactful projects you can complete in a weekend to
                  upgrade your living space.
                </p>
                <Link
                  href="/blog?category=diy"
                  className="text-primary font-medium flex items-center"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Stay Updated with HomeGeeni
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get the latest home improvement tips, guides, and exclusive
              content delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto bg-white p-2 rounded-full shadow-sm border border-gray-200">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-full flex-grow text-gray-900 focus:outline-none bg-transparent"
              />
              <Button className="rounded-full joy-btn joy-btn-primary px-6">
                Subscribe
              </Button>
            </div>

            <p className="text-gray-500 text-sm mt-4">
              By subscribing you agree to our{" "}
              <Link href="/privacy" className="text-primary">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              What Our <span className="text-primary">Readers</span> Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              HomeGeeni has helped thousands of homeowners transform their
              living spaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-sm p-8 relative">
              <div className="absolute top-0 right-0 bg-primary/10 p-4 rounded-bl-2xl rounded-tr-2xl">
                <span className="text-primary text-xl">★★★★★</span>
              </div>
              <p className="text-gray-600 mb-6 pt-8">
                "The DIY guide on kitchen renovation saved me thousands of
                dollars. The step-by-step instructions were clear and easy to
                follow."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <img
                    src="/placeholder-user.jpg"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Homeowner</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 relative">
              <div className="absolute top-0 right-0 bg-accent/10 p-4 rounded-bl-2xl rounded-tr-2xl">
                <span className="text-accent text-xl">★★★★★</span>
              </div>
              <p className="text-gray-600 mb-6 pt-8">
                "HomeGeeni helped me connect with reliable contractors in my
                area. Their maintenance tips have been invaluable for our new
                home."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <img
                    src="/placeholder-user.jpg"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Michael Rodriguez</h4>
                  <p className="text-sm text-gray-500">First-time Homeowner</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 relative">
              <div className="absolute top-0 right-0 bg-primary/10 p-4 rounded-bl-2xl rounded-tr-2xl">
                <span className="text-primary text-xl">★★★★★</span>
              </div>
              <p className="text-gray-600 mb-6 pt-8">
                "The seasonal maintenance checklist has been my go-to resource
                for keeping our home in top condition all year round."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <img
                    src="/placeholder-user.jpg"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Emma Wilson</h4>
                  <p className="text-sm text-gray-500">Property Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div className="circle-bg circle-bg-1 opacity-30"></div>
            <div className="circle-bg circle-bg-2 opacity-30"></div>

            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Ready to transform your home?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Explore our comprehensive resources and connect with experts to
                make your home improvement dreams a reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/blog">
                  <Button className="joy-btn joy-btn-primary rounded-full px-8 py-6 text-lg">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="joy-btn joy-btn-outline rounded-full px-8 py-6 text-lg"
                  >
                    Contact an Expert
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
