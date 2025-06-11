import Link from 'next/link';
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-midnight text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-royal-plum via-sunset-coral to-champagne-gold" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-royal-plum to-sunset-coral rounded-xl">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-champagne-gold">Secura</span>
                <span className="text-xl font-bold text-white ml-1">Compliances</span>
              </div>
            </Link>
            <p className="text-warm-gray mb-6 max-w-md leading-relaxed">
              Creating safe, inclusive workplaces through comprehensive POSH consulting, 
              corporate training, and board advisory services. Empowering organizations 
              to build cultures of respect and compliance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-royal-plum transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-royal-plum transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-royal-plum transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-champagne-gold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Our Services' },
                { href: '/blog', label: 'Blog & Resources' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-warm-gray hover:text-champagne-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-champagne-gold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-sunset-coral mt-1 flex-shrink-0" />
                <div>
                  <p className="text-warm-gray">hello@securacompliances.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-sunset-coral mt-1 flex-shrink-0" />
                <div>
                  <p className="text-warm-gray">+91 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-sunset-coral mt-1 flex-shrink-0" />
                <div>
                  <p className="text-warm-gray">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-warm-gray text-sm mb-4 md:mb-0">
            © 2024 Secura Compliances. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-warm-gray hover:text-champagne-gold transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-warm-gray hover:text-champagne-gold transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}