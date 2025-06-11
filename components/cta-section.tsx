import Link from 'next/link';
import { ArrowRight, Phone, Mail, Calendar } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-midnight via-royal-plum to-sunset-coral relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main CTA */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Create a
              <span className="block text-champagne-gold">Safer Workplace?</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of companies who trust Secura Compliances for their POSH consulting needs. 
              Let's build a culture of respect, safety, and compliance together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact" className="bg-champagne-gold text-midnight font-bold py-4 px-8 rounded-full hover:bg-champagne-gold/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl inline-flex items-center justify-center">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/services" className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-royal-plum transition-all duration-300 transform hover:-translate-y-1">
                Explore Services
              </Link>
            </div>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Phone */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-champagne-gold rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-midnight" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us Today</h3>
              <p className="text-white/80 text-sm mb-4">Speak with our experts</p>
              <a href="tel:+915551234567" className="text-champagne-gold font-semibold hover:text-white transition-colors duration-300">
                +91 (555) 123-4567
              </a>
            </div>

            {/* Email */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-champagne-gold rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-midnight" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-white/80 text-sm mb-4">Get detailed information</p>
              <a href="mailto:hello@securacompliances.com" className="text-champagne-gold font-semibold hover:text-white transition-colors duration-300">
                hello@securacompliances.com
              </a>
            </div>

            {/* Schedule */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-champagne-gold rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-midnight" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Schedule Meeting</h3>
              <p className="text-white/80 text-sm mb-4">Book a consultation</p>
              <Link href="/contact" className="text-champagne-gold font-semibold hover:text-white transition-colors duration-300">
                Book Now
              </Link>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="mt-16 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <p className="text-white/90 text-lg">
              <span className="font-semibold">Free Consultation Available:</span> 
              {' '}Let us understand your specific needs and provide a customized solution for your organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}