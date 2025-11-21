'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            Slater Painting
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#inspiration" className="text-gray-700 hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">
              Reviews
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#contact" className="btn-primary">
              Free Estimate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col space-y-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-primary transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-primary transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-primary transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4">
            <Link href="#services" className="block text-gray-700 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </Link>
            <Link href="#inspiration" className="block text-gray-700 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
              Gallery
            </Link>
            <Link href="#testimonials" className="block text-gray-700 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
              Reviews
            </Link>
            <Link href="#about" className="block text-gray-700 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="#contact" className="inline-block btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
              Free Estimate
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

