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
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <img src="/logo.png" alt="HomeGeeni Logo" className="h-10" />
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted source for home improvement tips and professional
              insights to transform your living space.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-accent transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-2 gradient-text">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  <span className="bg-primary h-1.5 w-1.5 rounded-full mr-2 group-hover:bg-accent transition-colors"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  <span className="bg-accent h-1.5 w-1.5 rounded-full mr-2 group-hover:bg-primary transition-colors"></span>
                  All Posts
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  <span className="bg-primary h-1.5 w-1.5 rounded-full mr-2 group-hover:bg-accent transition-colors"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  <span className="bg-accent h-1.5 w-1.5 rounded-full mr-2 group-hover:bg-primary transition-colors"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.homegeeni.com"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  <span className="bg-primary h-1.5 w-1.5 rounded-full mr-2 group-hover:bg-accent transition-colors"></span>
                  HomeGeeni
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-2 gradient-text">
              Categories
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog?category=maintenance"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  <span className="bg-primary h-1.5 w-1.5 rounded-full mr-2 group-hover:bg-accent transition-colors"></span>
                  Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?category=renovation"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  <span className="bg-accent h-1.5 w-1.5 rounded-full mr-2 group-hover:bg-primary transition-colors"></span>
                  Renovation
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?category=diy"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  <span className="bg-primary h-1.5 w-1.5 rounded-full mr-2 group-hover:bg-accent transition-colors"></span>
                  DIY Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?category=tips"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  <span className="bg-accent h-1.5 w-1.5 rounded-full mr-2 group-hover:bg-primary transition-colors"></span>
                  Tips & Tricks
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?category=seasonal"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  <span className="bg-primary h-1.5 w-1.5 rounded-full mr-2 group-hover:bg-accent transition-colors"></span>
                  Seasonal Care
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-2 gradient-text">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-gray-400 group hover:text-white transition-colors">
                <Mail className="h-5 w-5 mt-0.5 text-primary group-hover:text-accent transition-colors" />
                <span>blog@homegeeni.com</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400 group hover:text-white transition-colors">
                <Phone className="h-5 w-5 mt-0.5 text-accent group-hover:text-primary transition-colors" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400 group hover:text-white transition-colors">
                <MapPin className="h-5 w-5 mt-0.5 text-primary group-hover:text-accent transition-colors" />
                <span>
                  123 Home Street, Suite 100
                  <br />
                  Your City, State 12345
                </span>
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white mt-2 homegeeni-btn">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; 2024{" "}
            <span className="gradient-text font-medium">HomeGeeni Blog</span>.
            All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-primary text-sm homegeeni-link"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-accent text-sm homegeeni-link"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="text-gray-500 hover:text-primary text-sm homegeeni-link"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
