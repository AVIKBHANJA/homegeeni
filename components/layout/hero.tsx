import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/90 z-0"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0xMnY2aDZ2LTZoLTZ6bTEyIDEydjZoNnYtNmgtNnptMC0xMnY2aDZ2LTZoLTZ6bS0yNCAwdjZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bS0xMi0xMnY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02eiIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight animate-fade-in">
            Your Home Improvement <span className="text-accent">Journey</span>{" "}
            Starts Here
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto animate-fade-in-delay-1">
            Expert tips, maintenance guides, and innovative solutions to
            transform your home into the perfect living space.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Link href="/blog">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-lg homegeeni-btn"
              >
                Explore Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="https://www.homegeeni.com">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 homegeeni-btn"
              >
                Visit HomeGeeni
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 animate-fade-in-delay-3">
            <div className="glass text-white rounded-xl p-4 border-b-2 border-primary">
              <div className="text-3xl font-bold">200+</div>
              <div className="text-white/80 text-sm">Expert Articles</div>
            </div>
            <div className="glass text-white rounded-xl p-4 border-b-2 border-accent">
              <div className="text-3xl font-bold">50k+</div>
              <div className="text-white/80 text-sm">Monthly Readers</div>
            </div>
            <div className="glass text-white rounded-xl p-4 border-b-2 border-primary">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-white/80 text-sm">Home Categories</div>
            </div>
            <div className="glass text-white rounded-xl p-4 border-b-2 border-accent">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-white/80 text-sm">Expert Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          fill="white"
        >
          <path d="M0,96L80,80C160,64,320,32,480,21.3C640,11,800,21,960,42.7C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
