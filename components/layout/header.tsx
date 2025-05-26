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
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="HomeGeeni Logo" className="h-10" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary transition-colors font-medium homegeeni-link"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-primary transition-colors font-medium homegeeni-link"
            >
              All Posts
            </Link>
            <Link
              href="https://www.homegeeni.com"
              className="text-gray-700 hover:text-primary transition-colors font-medium homegeeni-link"
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
                      variant="outline"
                      size="sm"
                      className="hidden md:flex homegeeni-btn"
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
                  className="hidden md:flex homegeeni-btn"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <Link href="/login" className="hidden md:block">
                <Button
                  variant="outline"
                  size="sm"
                  className="shadow-sm homegeeni-btn"
                >
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
            )}

            <button
              className="md:hidden p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
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
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block py-2 px-4 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="block py-2 px-4 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Posts
            </Link>
            <Link
              href="https://www.homegeeni.com"
              className="block py-2 px-4 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              HomeGeeni
            </Link>

            <div className="pt-2 border-t border-gray-100">
              {user ? (
                <div className="space-y-2">
                  {user.role === "admin" && (
                    <Link
                      href="/admin/dashboard"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start bg-primary/5 hover:bg-primary/10"
                      >
                        <PenTool className="h-4 w-4 mr-2 text-primary" />
                        Admin Dashboard
                      </Button>
                    </Link>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full justify-start hover:bg-primary/5"
                  >
                    <LogOut className="h-4 w-4 mr-2 text-primary" />
                    Logout
                  </Button>
                </div>
              ) : (
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start"
                  >
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
