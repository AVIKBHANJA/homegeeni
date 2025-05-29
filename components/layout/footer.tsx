import Link from "next/link";
import {
  Home,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-100">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        {/* Footer top section with logo and newsletter */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start">
          <div className="max-w-md mb-8 md:mb-0">
            <div className="mb-6">
              <img src="/logo.png" alt="HomeGeeni Logo" className="h-12" />
            </div>
            <h2 className="text-3xl font-light mb-4 text-gray-800">
              Real Estate AI for{" "}
              <span className="font-medium text-primary">
                Agents, Buyers, and Sellers
              </span>
            </h2>
            <p className="text-gray-500 mb-6">
              Send Offers. Get Valuations. Manage Docs & Showings. AI assisted
              Search.
            </p>
          </div>

          <div className="w-full md:w-auto md:min-w-[320px] bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3 text-gray-800">
              Subscribe to our newsletter
            </h3>
            <p className="text-gray-500 mb-4">
              Get AI-powered market insights and property updates directly to
              your inbox
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button className="rounded-l-none bg-primary hover:bg-primary/90 text-white">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Footer links section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-t border-gray-100 pt-10">
          <div>
            <h3 className="text-lg font-medium mb-6 text-gray-800">
              About HomeGeeni
            </h3>
            <p className="text-gray-500 mb-6">
              HomeGeeni is an AI-powered real estate platform that simplifies
              home buying, selling, and investing by automating listings,
              offers, and insights—all in one place.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6 text-gray-800">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-500 hover:text-primary transition-colors flex items-center group"
                >
                  Home
                  <ArrowRight className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-500 hover:text-primary transition-colors flex items-center group"
                >
                  Blogs
                  <ArrowRight className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/trends"
                  className="text-gray-500 hover:text-primary transition-colors flex items-center group"
                >
                  Market Trends
                  <ArrowRight className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/valuation"
                  className="text-gray-500 hover:text-primary transition-colors flex items-center group"
                >
                  AI Valuation
                  <ArrowRight className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.homegeeni.com"
                  className="text-gray-500 hover:text-primary transition-colors flex items-center group"
                >
                  Platform
                  <ArrowRight className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6 text-gray-800">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/blog?category=buying"
                  className="text-gray-500 hover:text-primary transition-colors flex items-center group"
                >
                  Home Buying
                  <ArrowRight className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?category=selling"
                  className="text-gray-500 hover:text-primary transition-colors flex items-center group"
                >
                  Home Selling
                  <ArrowRight className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?category=investing"
                  className="text-gray-500 hover:text-primary transition-colors flex items-center group"
                >
                  Real Estate Investing
                  <ArrowRight className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?category=ai-insights"
                  className="text-gray-500 hover:text-primary transition-colors flex items-center group"
                >
                  AI Insights
                  <ArrowRight className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?category=market-trends"
                  className="text-gray-500 hover:text-primary transition-colors flex items-center group"
                >
                  Market Analysis
                  <ArrowRight className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6 text-gray-800">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-gray-500 hover:text-primary transition-colors">
                <Mail className="h-5 w-5 mt-0.5 text-primary" />
                <span>blog@homegeeni.com</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-500 hover:text-primary transition-colors">
                <Phone className="h-5 w-5 mt-0.5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-500 hover:text-primary transition-colors">
                <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                <span>
                  123 Home Street, Suite 100
                  <br />
                  Your City, State 12345
                </span>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-4">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Feature highlights */}
      <div className="bg-gray-50 py-8 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-md font-medium mb-2 text-gray-800">
                Free Consultations
              </h4>
              <p className="text-gray-500 text-sm">
                Get expert advice on your home improvement projects
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-md font-medium mb-2 text-gray-800">
                DIY Guides
              </h4>
              <p className="text-gray-500 text-sm">
                Step-by-step tutorials for your home projects
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-md font-medium mb-2 text-gray-800">
                Professional Network
              </h4>
              <p className="text-gray-500 text-sm">
                Connect with verified contractors in your area
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Policy Highlights */}
      <div className="bg-gray-50 py-8 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-lg font-medium mb-6 text-center text-gray-800">
            HomeGeeni Fair Housing and Equal Opportunity Policy
          </h3>
          <div className="text-sm text-gray-600 mb-6 text-center">
            <p>
              HomeGeeni proudly supports and abides by the Fair Housing Act and
              all applicable housing laws.
            </p>
            <p className="mt-2">
              We are committed to ensuring equal access to housing opportunities
              regardless of race, color, religion, sex, disability, familial
              status, national origin, or any other protected class.
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="/fair-housing-policy">
              <Button
                variant="outline"
                size="sm"
                className="text-primary border-primary hover:bg-primary/10"
              >
                Read Our Full Fair Housing Policy
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* AI Disclaimer */}
      <div className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-medium mb-3 text-gray-800 flex items-center">
              <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                AI
              </span>
              AI-Enhanced Content Disclaimer
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              At HomeGeeni, some of our blog content is generated or enhanced
              using artificial intelligence (AI) to provide timely, informative,
              and engaging real estate insights. While we strive for accuracy,
              AI-generated content may occasionally contain errors, outdated
              information, or interpretations that don't reflect the views of
              licensed professionals. All information should be independently
              verified and does not constitute legal, financial, or real estate
              advice. For personalized guidance, always consult a licensed real
              estate agent, attorney, or financial advisor.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6 border-t border-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; 2025{" "}
            <span className="text-primary font-medium">HomeGeeni, LLC</span>.
            All rights reserved. California DRE #01521930
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-primary text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-primary text-sm"
            >
              Terms of Use
            </Link>
            <Link
              href="/fair-housing-policy"
              className="text-gray-500 hover:text-primary text-sm"
            >
              Fair Housing
            </Link>
            <Link
              href="/sitemap"
              className="text-gray-500 hover:text-primary text-sm"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
