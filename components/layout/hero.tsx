import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Decorative circles */}
      <div className="circle-bg circle-bg-1"></div>
      <div className="circle-bg circle-bg-2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
          <div className="w-full md:w-1/2 md:pr-10 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
              Real Estate Powered by{" "}
              <span className="text-primary">Artificial Intelligence</span>
            </h1>

            <p className="text-lg md:text-xl mb-8 text-gray-600 animate-fade-in-delay-1">
              Send offers, get instant valuations, manage docs & showings.
              AI-assisted search for agents, buyers, and sellers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
              <Link href="/blog">
                <Button
                  size="lg"
                  className="joy-btn joy-btn-primary rounded-full w-full sm:w-auto px-8"
                >
                  Explore AI Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://www.homegeeni.com">
                <Button
                  size="lg"
                  variant="outline"
                  className="joy-btn joy-btn-outline rounded-full w-full sm:w-auto px-8"
                >
                  Get Instant Valuation
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative animate-fade-in-delay-1">
            <div className="relative bg-white p-3 rounded-2xl shadow-lg">
              <img
                src="/placeholder.jpg"
                alt="AI Real Estate Platform"
                className="rounded-xl w-full h-auto"
              />
              {/* Floating card */}
              <div className="absolute -bottom-10 -left-5 bg-white p-5 rounded-xl shadow-lg max-w-[200px]">
                <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full mb-3">
                  <span className="text-primary text-lg font-bold">AI</span>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  Instant property valuations powered by machine learning
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 animate-fade-in-delay-3">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
              <span className="text-primary text-xl font-bold">AI</span>
            </div>
            <h3 className="text-lg font-medium mb-2">AI-Powered Valuations</h3>
            <p className="text-gray-600 text-sm">
              Get instant, accurate property valuations using advanced machine
              learning algorithms
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
              <span className="text-accent text-xl font-bold">$</span>
            </div>
            <h3 className="text-lg font-medium mb-2">Automated Offers</h3>
            <p className="text-gray-600 text-sm">
              Send competitive offers instantly with AI-driven market analysis
              and pricing strategies
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
              <span className="text-primary text-xl font-bold">🏠</span>
            </div>
            <h3 className="text-lg font-medium mb-2">Smart Search</h3>
            <p className="text-gray-600 text-sm">
              Find your perfect property with AI-assisted search that learns
              your preferences
            </p>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="wave-divider mt-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          fill="#f9fafb"
        >
          <path d="M0,32L48,37.3C96,43,192,53,288,64C384,75,480,85,576,80C672,75,768,53,864,42.7C960,32,1056,32,1152,42.7C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
