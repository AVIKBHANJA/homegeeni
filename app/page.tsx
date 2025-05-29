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
  TrendingUp,
  DollarSign,
  HomeIcon,
  Brain,
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
              Navigate real estate with{" "}
              <span className="text-primary">AI-powered insights</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert guidance and intelligent tools for buying, selling, and
              investing in real estate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/blog?category=buying" className="block">
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 h-full joy-card">
                <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  <HomeIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Home Buying
                </h3>
                <p className="text-gray-600 mb-4">
                  Expert tips and AI-powered insights for first-time and
                  experienced home buyers.
                </p>
                <div className="flex items-center text-primary font-medium">
                  View Articles <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link href="/blog?category=selling" className="block">
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 h-full joy-card">
                <div className="bg-accent/10 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  <DollarSign className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Home Selling
                </h3>
                <p className="text-gray-600 mb-4">
                  Maximize your home's value with strategic selling advice and
                  market insights.
                </p>
                <div className="flex items-center text-accent font-medium">
                  View Articles <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link href="/blog?category=investing" className="block">
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 h-full joy-card">
                <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Real Estate Investing
                </h3>
                <p className="text-gray-600 mb-4">
                  Build wealth through smart property investments and passive
                  income strategies.
                </p>
                <div className="flex items-center text-primary font-medium">
                  View Articles <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link href="/blog?category=ai-insights" className="block">
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 h-full joy-card">
                <div className="bg-accent/10 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  <Brain className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  AI Insights
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how AI is revolutionizing real estate with smart
                  valuations and market analysis.
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
                Latest Real Estate Insights
              </h2>
              <p className="text-lg text-gray-600 mt-2">
                AI-powered analysis and expert advice for today's market
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
              Market <span className="text-primary">Intelligence</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay ahead with AI-driven market trends, property valuations, and
              investment opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden joy-card">
              <div className="h-48 overflow-hidden">
                <img
                  src="/placeholder.jpg"
                  alt="AI Property Valuation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                  AI Insights
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  How AI is Revolutionizing Property Valuations
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Discover how artificial intelligence provides instant,
                  accurate property valuations using advanced market data and
                  predictive analytics.
                </p>
                <Link
                  href="/blog?category=ai-insights"
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
                  alt="Home Buying Guide"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-3">
                  Home Buying
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  The Complete First-Time Home Buyer's Guide 2025
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Navigate today's market with confidence using our
                  comprehensive guide covering financing, negotiations, and
                  closing processes.
                </p>
                <Link
                  href="/blog?category=buying"
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
                  alt="Real Estate Investment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                  Investment
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  10 Passive Income Strategies in Real Estate
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Build wealth through smart real estate investments, from
                  rental properties to REITs and emerging market opportunities.
                </p>
                <Link
                  href="/blog?category=investing"
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
              Stay Ahead of the Market with HomeGeeni
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get AI-powered market insights, property valuations, and exclusive
              real estate opportunities delivered to your inbox.
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
              What Our <span className="text-primary">Users</span> Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              HomeGeeni has helped thousands of buyers, sellers, and investors
              make smarter real estate decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-sm p-8 relative">
              <div className="absolute top-0 right-0 bg-primary/10 p-4 rounded-bl-2xl rounded-tr-2xl">
                <span className="text-primary text-xl">★★★★★</span>
              </div>
              <p className="text-gray-600 mb-6 pt-8">
                "HomeGeeni's AI valuation tool helped me price my home
                perfectly. I sold 15% above asking price within a week!"
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
                  <p className="text-sm text-gray-500">Home Seller</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 relative">
              <div className="absolute top-0 right-0 bg-accent/10 p-4 rounded-bl-2xl rounded-tr-2xl">
                <span className="text-accent text-xl">★★★★★</span>
              </div>
              <p className="text-gray-600 mb-6 pt-8">
                "As a first-time buyer, HomeGeeni's market insights and
                automated offer system made the process stress-free. Found my
                dream home in 3 weeks!"
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
                  <p className="text-sm text-gray-500">First-time Buyer</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 relative">
              <div className="absolute top-0 right-0 bg-primary/10 p-4 rounded-bl-2xl rounded-tr-2xl">
                <span className="text-primary text-xl">★★★★★</span>
              </div>
              <p className="text-gray-600 mb-6 pt-8">
                "The investment property analysis tool helped me build a
                portfolio of 5 rental properties. ROI tracking and market
                predictions are incredibly accurate."
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
                  <p className="text-sm text-gray-500">Real Estate Investor</p>
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
                Ready to buy, sell, or invest with AI?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Experience the future of real estate with AI-powered valuations,
                automated offers, and intelligent market insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/blog">
                  <Button className="joy-btn joy-btn-primary rounded-full px-8 py-6 text-lg">
                    Explore AI Features
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="joy-btn joy-btn-outline rounded-full px-8 py-6 text-lg"
                  >
                    Talk to an Expert
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
