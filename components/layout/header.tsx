"use client";

import Link from "next/link";
import { useAuth } from "@/components/auth/auth-provider";
import { Button } from "@/components/ui/button";
import { Home, PenTool, LogOut, User, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="HomeGeeni Logo" className="h-8" />
          </Link>

          <nav className="hidden md:flex items-center space-x-10">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary transition-colors font-medium joy-link"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-primary transition-colors font-medium joy-link"
            >
              All Posts
            </Link>
            <Link
              href="/blog?category=tips"
              className="text-gray-700 hover:text-primary transition-colors font-medium joy-link"
            >
              Tips & Tricks
            </Link>
            <Link
              href="https://www.homegeeni.com"
              className="text-gray-700 hover:text-primary transition-colors font-medium joy-link"
            >
              HomeGeeni
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                {user.role === "admin" && (
                  <Link href="/admin/dashboard">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hidden md:flex text-primary hover:bg-primary/10"
                    >
                      <PenTool className="h-4 w-4 mr-2" />
                      Admin
                    </Button>
                  </Link>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={logout}
                  className="hidden md:flex text-gray-700 hover:bg-gray-100"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <Link href="/login" className="hidden md:block">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
            )}

            <button
              className="md:hidden p-2 rounded-full text-primary hover:bg-primary/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in absolute w-full z-50">
          <div className="container mx-auto px-4 py-6 space-y-4">
            <Link
              href="/"
              className="block py-3 px-4 text-gray-700 hover:text-primary rounded-lg transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="block py-3 px-4 text-gray-700 hover:text-primary rounded-lg transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Posts
            </Link>
            <Link
              href="/blog?category=tips"
              className="block py-3 px-4 text-gray-700 hover:text-primary rounded-lg transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tips & Tricks
            </Link>
            <Link
              href="https://www.homegeeni.com"
              className="block py-3 px-4 text-gray-700 hover:text-primary rounded-lg transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              HomeGeeni
            </Link>

            <div className="pt-3 border-t border-gray-100 mt-4">
              {user ? (
                <div className="space-y-3">
                  {user.role === "admin" && (
                    <Link
                      href="/admin/dashboard"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-primary hover:bg-primary/10 rounded-lg py-3"
                      >
                        <PenTool className="h-4 w-4 mr-2" />
                        Admin Dashboard
                      </Button>
                    </Link>
                  )}
                  <Button
                    variant="ghost"
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full justify-start hover:bg-gray-100 rounded-lg py-3"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full justify-center bg-primary hover:bg-primary/90 text-white rounded-full py-3 mt-2">
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
