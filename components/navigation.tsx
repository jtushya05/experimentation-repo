'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/resources/glossary', label: 'Resources' }, // New link
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-off-white/95 backdrop-blur-md shadow-lg' // Updated scrolled background
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-deep-teal rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300"> {/* Solid Deep Teal background */}
              <Shield className="w-6 h-6 text-cream" />
            </div>
            <div>
              <span className="text-xl font-bold text-golden-ochre">Secura</span> {/* Solid Golden Ochre text */}
              <span className="text-xl font-bold text-charcoal-gray ml-1">Compliances</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-all duration-300 relative group ${
                  pathname === link.href 
                    ? 'text-deep-teal' // Active link color
                    : 'text-charcoal-gray hover:text-golden-ochre' // Inactive and hover
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-deep-teal to-golden-ochre transition-all duration-300 ${
                  pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full' // Underline gradient
                }`} />
              </Link>
            ))}
            <Link href="/contact" className="btn-primary"> {/* .btn-primary uses new palette from globals.css */}
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-light-steel-blue/50 transition-colors duration-200" // Updated hover background
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-charcoal-gray" /> // Updated icon color
            ) : (
              <Menu className="w-6 h-6 text-charcoal-gray" /> // Updated icon color
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-off-white/95 backdrop-blur-md rounded-2xl mt-2 shadow-lg"> {/* Updated background */}
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                    pathname === link.href 
                      ? 'text-deep-teal bg-light-steel-blue/30' // Active mobile link
                      : 'text-charcoal-gray hover:text-golden-ochre hover:bg-light-steel-blue/20' // Inactive mobile link
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/contact" 
                className="btn-primary text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}