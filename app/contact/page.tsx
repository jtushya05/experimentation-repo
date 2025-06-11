'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const faqItems = [
  {
    id: "faq-1",
    question: "What is the POSH Act?",
    answer: "The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013, commonly known as the POSH Act, is Indian legislation aimed at protecting women from sexual harassment at their place of work."
  },
  {
    id: "faq-2",
    question: "Is POSH compliance mandatory for all organizations?",
    answer: "Yes, the POSH Act applies to almost all organizations in India, whether in the public or private sector, organized or unorganized, including multinational corporations, government bodies, NGOs, educational institutions, and hospitals, provided they have 10 or more employees."
  },
  {
    id: "faq-3",
    question: "What services does Secura Compliances offer?",
    answer: "Secura Compliances offers a comprehensive range of POSH services, including policy drafting, Internal Committee (IC) formation and training, employee awareness programs, board advisory, and assistance with annual report filing."
  },
  {
    id: "faq-4",
    question: "How can we get started with your POSH consulting services?",
    answer: "You can get started by contacting us through the form on this page, emailing us at hello@securacompliances.com, or calling us. We'll schedule an initial consultation to understand your needs."
  }
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
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-deep-teal/10 via-golden-ochre/5 to-burnt-sienna/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-deep-teal/10 text-deep-teal rounded-full text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal-gray mb-6">
              Let's Build a
              <span className="gradient-text"> Safer Workplace</span>
              {' '}Together
            </h1>
            <p className="text-xl text-light-steel-blue max-w-3xl mx-auto leading-relaxed">
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
            <div className="bg-off-white rounded-3xl p-8 shadow-xl border border-cream">
              <h2 className="text-2xl font-bold text-charcoal-gray mb-6">Get in Touch</h2>
              <p className="text-light-steel-blue mb-8 leading-relaxed">
                We're here to help you create a safer, more inclusive workplace. 
                Reach out to us through any of the following channels.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-deep-teal to-golden-ochre rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-cream" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-charcoal-gray mb-1">{info.title}</h3>
                        {info.action ? (
                          <a 
                            href={info.action}
                            className="text-deep-teal hover:text-golden-ochre transition-colors duration-300 font-medium"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-charcoal-gray font-medium">{info.details}</p>
                        )}
                        <p className="text-light-steel-blue text-sm">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Benefits */}
              <div className="mt-8 p-6 bg-cream/50 rounded-xl">
                <h3 className="font-semibold text-charcoal-gray mb-4">Why Choose Us?</h3>
                <ul className="space-y-2 text-sm">
                  {[
                    'Free initial consultation',
                    'Customized solutions',
                    '24/7 support available',
                    'Expert team with 5+ years experience'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-golden-ochre flex-shrink-0" />
                      <span className="text-light-steel-blue">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-off-white rounded-3xl p-8 shadow-xl border border-cream">
              <h2 className="text-2xl font-bold text-charcoal-gray mb-6">Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-xl flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-800">Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-xl flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <p className="text-red-800">Sorry, there was an error sending your message. Please try again or contact us directly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal-gray mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required
                      className="w-full px-4 py-3 border border-light-steel-blue/50 rounded-xl focus:ring-2 focus:ring-deep-teal focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal-gray mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required
                      className="w-full px-4 py-3 border border-light-steel-blue/50 rounded-xl focus:ring-2 focus:ring-deep-teal focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal-gray mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-light-steel-blue/50 rounded-xl focus:ring-2 focus:ring-deep-teal focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="+91 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-charcoal-gray mb-2">
                      Company Name
                    </label>
                    <input
                      type="text" id="company" name="company" value={formData.company} onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-light-steel-blue/50 rounded-xl focus:ring-2 focus:ring-deep-teal focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-charcoal-gray mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service" name="service" value={formData.service} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-light-steel-blue/50 rounded-xl focus:ring-2 focus:ring-deep-teal focus:border-transparent transition-all duration-300 bg-white"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal-gray mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message" name="message" value={formData.message} onChange={handleInputChange} required
                    rows={6}
                    className="w-full px-4 py-3 border border-light-steel-blue/50 rounded-xl focus:ring-2 focus:ring-deep-teal focus:border-transparent transition-all duration-300 resize-vertical bg-white"
                    placeholder="Tell us about your needs and how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-cream border-t-transparent rounded-full animate-spin mr-2" />
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
              <div className="mt-8 p-6 bg-gradient-to-r from-deep-teal/5 to-golden-ochre/5 rounded-xl">
                <h3 className="font-semibold text-charcoal-gray mb-2">What happens next?</h3>
                <ul className="space-y-2 text-sm text-light-steel-blue">
                  <li>• We'll review your message and respond within 24 hours</li>
                  <li>• Schedule a free consultation call to understand your needs</li>
                  <li>• Provide a customized proposal with timeline and pricing</li>
                  <li>• Begin your journey to a safer, compliant workplace</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> {/* This closes max-w-7xl container */}

      {/* New FAQ Section */}
      <section className="py-16 md:py-24 bg-cream/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-light-steel-blue max-w-xl mx-auto">
              Find quick answers to common questions about POSH compliance and our services.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="bg-off-white border border-light-steel-blue/30 rounded-lg shadow-md px-6"
              >
                <AccordionTrigger className="text-lg font-semibold text-deep-teal hover:text-golden-ochre text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-light-steel-blue pt-2 pb-4 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}