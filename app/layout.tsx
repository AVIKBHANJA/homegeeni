import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/auth/auth-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

// Determine the base URL based on environment
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://blog.homegeeni.com"
    : "http://localhost:3000";

// Viewport export for theme color and other viewport properties
export const viewport: Viewport = {
  themeColor: "#00A9A5", // HomeGeeni teal color
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "HomeGeeni Blog - Home Improvement Tips & Insights",
    template: "%s | HomeGeeni Blog",
  },
  description:
    "Discover expert home improvement tips, maintenance guides, and insights from HomeGeeni professionals.",
  keywords: "home improvement, maintenance, tips, HomeGeeni, blog",
  metadataBase: new URL(baseUrl),
  generator: "v0.dev",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "HomeGeeni Blog",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "HomeGeeni Blog",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
