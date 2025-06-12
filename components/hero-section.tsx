'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, CheckCircle } from 'lucide-react'; // Removed Users, Award as they are not directly used here

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden homepage-hero-area"> {/* Added homepage-hero-area */}
      {/* Background with New Gradient Overlay from tailwind.config.ts */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* SVG Background Pattern is REMOVED as per Turn 93 instructions */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="mb-6">
              {/* Updated "Trusted POSH Consultants" span from Turn 93 */}
              <span className="inline-block px-4 py-2 bg-golden-ochre/20 backdrop-blur-sm rounded-full text-cream text-sm font-medium mb-4">
                🛡️ Trusted POSH Consultants
              </span>
            </div>
            
            {/* Updated main h1 and internal span from Turn 93 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6 leading-tight">
              Creating
              <span className="block text-golden-ochre"> {/* Changed from gradient to solid color */}
                Safe Workplaces
              </span>
              for Everyone
            </h1>
            
            {/* Updated paragraph text from Turn 93 */}
            <p className="text-xl text-cream/90 mb-8 leading-relaxed max-w-2xl">
              Empowering organizations with comprehensive POSH consulting, training, and compliance solutions. 
              Building cultures of respect, safety, and inclusion across corporate India.
            </p>

            {/* Key Benefits - Updated text colors from Turn 93 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                'Expert POSH Compliance',
                'Corporate Training',
                'Board Advisory Services',
                '100% Legal Compliance'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-golden-ochre flex-shrink-0" /> {/* Icon color from Turn 93 */}
                  <span className="text-cream/90">{benefit}</span> {/* Text color from Turn 93 */}
                </div>
              ))}
            </div>

            {/* CTA Buttons - Assuming btn-primary and btn-secondary are globally styled */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/contact" className="btn-primary group">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>

          {/* Visual Elements - Updated text and icon colors from Turn 93 */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-golden-ochre rounded-2xl flex items-center justify-center mx-auto mb-4"> {/* Icon bg from Turn 93 */}
                    <Shield className="w-8 h-8 text-cream" /> {/* Icon color from Turn 93 */}
                  </div>
                  <h3 className="text-2xl font-bold text-cream mb-2">Compliance Made Simple</h3> {/* Text color from Turn 93 */}
                  <p className="text-cream/80">End-to-end POSH solutions</p> {/* Text color from Turn 93 */}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-golden-ochre">500+</div> {/* Number color from Turn 93 */}
                    <div className="text-cream/80 text-sm">Companies Served</div> {/* Label color from Turn 93 */}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-golden-ochre">99%</div> {/* Number color from Turn 93 */}
                    <div className="text-cream/80 text-sm">Compliance Rate</div> {/* Label color from Turn 93 */}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-golden-ochre">5+</div> {/* Number color from Turn 93 */}
                    <div className="text-cream/80 text-sm">Years Experience</div> {/* Label color from Turn 93 */}
                  </div>
                </div>
              </div>

              {/* Floating Elements - Updated colors from Turn 93 */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-burnt-sienna/20 rounded-full animate-float" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-golden-ochre/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Kept original styling, should be fine */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}