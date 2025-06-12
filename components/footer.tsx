import Link from 'next/link';
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Our Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/resources/glossary', label: 'Resources & Glossary' }, // New link
    { href: '/contact', label: 'Contact Us' },
  ];

  const socialLinks = [
    { href: '#', icon: Linkedin, label: 'LinkedIn' }, // Placeholder href
    { href: '#', icon: Twitter, label: 'Twitter' },   // Placeholder href
    { href: '#', icon: Facebook, label: 'Facebook' }, // Placeholder href
  ];

  return (
    <footer className="bg-charcoal-gray text-cream relative overflow-hidden"> {/* Updated background and default text */}
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-teal/80 via-golden-ochre/70 to-burnt-sienna/60" /> {/* Updated gradient */}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-deep-teal to-golden-ochre rounded-xl"> {/* Updated gradient */}
                <Shield className="w-6 h-6 text-cream" /> {/* Updated icon color */}
              </div>
              <div>
                <span className="text-xl font-bold text-golden-ochre">Secura</span> {/* Updated text color */}
                <span className="text-xl font-bold text-cream ml-1">Compliances</span> {/* Updated text color */}
              </div>
            </Link>
            <p className="text-light-steel-blue mb-6 max-w-md leading-relaxed"> {/* Updated text color */}
              Creating safe, inclusive workplaces through comprehensive POSH consulting, 
              corporate training, and board advisory services. Empowering organizations 
              to build cultures of respect and compliance.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 bg-white/10 rounded-lg hover:bg-deep-teal transition-colors duration-300" // Updated hover
                  >
                    <IconComponent className="w-5 h-5 text-cream" /> {/* Updated icon color */}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-golden-ochre mb-6">Quick Links</h3> {/* Updated text color */}
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-light-steel-blue hover:text-golden-ochre transition-colors duration-300" // Updated text colors
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-golden-ochre mb-6">Contact Info</h3> {/* Updated text color */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-burnt-sienna mt-1 flex-shrink-0" /> {/* Updated icon color */}
                <div>
                  <p className="text-light-steel-blue">hello@securacompliances.com</p> {/* Updated text color */}
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-burnt-sienna mt-1 flex-shrink-0" /> {/* Updated icon color */}
                <div>
                  <p className="text-light-steel-blue">+91 (555) 123-4567</p> {/* Updated text color */}
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-burnt-sienna mt-1 flex-shrink-0" /> {/* Updated icon color */}
                <div>
                  <p className="text-light-steel-blue">Mumbai, Maharashtra, India</p> {/* Updated text color */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-steel-blue text-sm mb-4 md:mb-0"> {/* Updated text color */}
            © 2024 Secura Compliances. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-light-steel-blue hover:text-golden-ochre transition-colors duration-300"> {/* Updated text colors */}
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-light-steel-blue hover:text-golden-ochre transition-colors duration-300"> {/* Updated text colors */}
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}