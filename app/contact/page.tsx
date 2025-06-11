'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: '+91 (555) 123-4567',
    description: 'Mon-Fri 9AM-6PM IST',
    action: 'tel:+915551234567'
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'hello@securacompliances.com',
    description: 'We respond within 24 hours',
    action: 'mailto:hello@securacompliances.com'
  },
  {
    icon: MapPin,
    title: 'Location',
    details: 'Mumbai, Maharashtra',
    description: 'India',
    action: null
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: 'Mon-Fri: 9:00 AM - 6:00 PM',
    description: 'Saturday: 10:00 AM - 2:00 PM',
    action: null
  }
];

const services = [
  'POSH Consulting',
  'Corporate Training',
  'Board Advisory',
  'Compliance Audit',
  'Policy Development',
  'Crisis Management'
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-royal-plum/10 via-sunset-coral/5 to-champagne-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-royal-plum/10 text-royal-plum rounded-full text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-midnight mb-6">
              Let's Build a
              <span className="gradient-text"> Safer Workplace</span>
              {' '}Together
            </h1>
            <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
              Ready to transform your workplace culture? Get in touch with our experts for a free consultation 
              and discover how we can help you achieve comprehensive POSH compliance.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-midnight mb-6">Get in Touch</h2>
              <p className="text-warm-gray mb-8 leading-relaxed">
                We're here to help you create a safer, more inclusive workplace. 
                Reach out to us through any of the following channels.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-royal-plum to-sunset-coral rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-midnight mb-1">{info.title}</h3>
                        {info.action ? (
                          <a 
                            href={info.action}
                            className="text-sunset-coral hover:text-royal-plum transition-colors duration-300 font-medium"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-midnight font-medium">{info.details}</p>
                        )}
                        <p className="text-warm-gray text-sm">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Benefits */}
              <div className="mt-8 p-6 bg-soft-blush/30 rounded-xl">
                <h3 className="font-semibold text-midnight mb-4">Why Choose Us?</h3>
                <ul className="space-y-2 text-sm">
                  {[
                    'Free initial consultation',
                    'Customized solutions',
                    '24/7 support available',
                    'Expert team with 5+ years experience'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-champagne-gold flex-shrink-0" />
                      <span className="text-warm-gray">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-midnight mb-6">Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-800">Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <p className="text-red-800">Sorry, there was an error sending your message. Please try again or contact us directly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-midnight mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-plum focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-midnight mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-plum focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-midnight mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-plum focus:border-transparent transition-all duration-300"
                      placeholder="+91 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-midnight mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-plum focus:border-transparent transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-midnight mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-plum focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-midnight mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-plum focus:border-transparent transition-all duration-300 resize-vertical"
                    placeholder="Tell us about your needs and how we can help..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </form>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-gradient-to-r from-royal-plum/5 to-sunset-coral/5 rounded-xl">
                <h3 className="font-semibold text-midnight mb-2">What happens next?</h3>
                <ul className="space-y-2 text-sm text-warm-gray">
                  <li>• We'll review your message and respond within 24 hours</li>
                  <li>• Schedule a free consultation call to understand your needs</li>
                  <li>• Provide a customized proposal with timeline and pricing</li>
                  <li>• Begin your journey to a safer, compliant workplace</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}