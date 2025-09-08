"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 luxury-transition hover:scale-105">
            <div className="font-serif text-2xl font-bold">
              <span className="luxury-gold">Cassie</span>
              <span className="text-black">Brainz</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-black hover:luxury-gold luxury-transition font-medium">
              Home
            </Link>
            <Link href="/about" className="text-black hover:luxury-gold luxury-transition font-medium">
              About Us
            </Link>
            <Link href="/store" className="text-black hover:luxury-gold luxury-transition font-medium">
              Store
            </Link>
            <Link href="/contact" className="text-black hover:luxury-gold luxury-transition font-medium">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-black hover:luxury-gold luxury-transition font-medium">
                Home
              </Link>
              <Link href="/about" className="text-black hover:luxury-gold luxury-transition font-medium">
                About Us
              </Link>
              <Link href="/store" className="text-black hover:luxury-gold luxury-transition font-medium">
                Store
              </Link>
              <Link href="/contact" className="text-black hover:luxury-gold luxury-transition font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
