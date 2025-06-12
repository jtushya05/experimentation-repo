import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Users, Target, FileCheck, BookOpen, Briefcase, ArrowRight } from 'lucide-react'; // Removed CheckCircle as it's not used in the simplified main services

export const metadata: Metadata = {
  title: 'Services - Secura Compliances | Comprehensive POSH Solutions',
  description: 'Explore our comprehensive POSH consulting services including policy development, corporate training, board advisory, and compliance audits.',
  keywords: 'POSH consulting services, corporate training, board advisory, compliance audits, workplace safety',
};

const services = [
  {
    icon: Shield,
    title: 'POSH Consulting',
    description: 'End-to-end Prevention of Sexual Harassment consulting services to ensure full compliance with Indian regulations. We guide you through policy development, IC formation, and ongoing compliance.',
    slug: '/services/posh-consulting'
  },
  {
    icon: Users,
    title: 'Corporate Training',
    description: 'Interactive training programs designed to educate employees, create awareness about workplace safety, and foster a respectful culture. Customized modules for all organizational levels.',
    slug: '/services/corporate-training'
  },
  {
    icon: Target,
    title: 'Board Advisory',
    description: 'Strategic guidance for boards and senior management on POSH compliance, governance, and risk management. Ensuring top-down commitment to a safe workplace.',
    slug: '/services/board-advisory'
  }
];

const additionalServices = [
  {
    icon: FileCheck,
    title: 'Compliance Audits',
    description: 'Comprehensive audits to assess current compliance status and identify areas for improvement.'
  },
  {
    icon: BookOpen,
    title: 'Policy Documentation',
    description: 'Professional policy drafting and documentation services tailored to your organization.'
  },
  {
    icon: Briefcase,
    title: 'Crisis Management',
    description: 'Expert support during sensitive situations requiring immediate intervention and guidance.'
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-deep-teal/10 via-golden-ochre/5 to-burnt-sienna/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-deep-teal/10 text-deep-teal rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal-gray mb-6">
              Comprehensive
              <span className="gradient-text"> POSH Solutions</span>
            </h1>
            <p className="text-xl text-light-steel-blue max-w-3xl mx-auto leading-relaxed">
              From policy development to training and ongoing compliance, we provide end-to-end solutions 
              to help your organization create and maintain a safe, respectful workplace environment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      {services.map((service, index) => {
        const IconComponent = service.icon;
        const isEven = index % 2 === 0;
        
        return (
          <section key={service.slug} className={`py-16 md:py-20 ${isEven ? 'bg-white' : 'bg-cream/20'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                {/* Icon Visual */}
                <div className={`flex justify-center ${!isEven ? 'md:order-2' : ''}`}>
                  <div className="w-48 h-48 bg-gradient-to-br from-deep-teal to-golden-ochre rounded-full flex items-center justify-center p-6 shadow-xl">
                     <IconComponent className="w-24 h-24 text-white" />
                  </div>
                </div>
                {/* Content */}
                <div className={`${!isEven ? 'md:order-1' : ''}`}>
                  <h2 className="text-3xl font-bold text-charcoal-gray mb-4">{service.title}</h2>
                  <p className="text-lg text-light-steel-blue mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    href={service.slug}
                    className="text-deep-teal hover:text-golden-ochre font-semibold inline-flex items-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-b from-white to-cream/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-6">
              Additional
              <span className="gradient-text"> Specialized Services</span>
            </h2>
            <p className="text-lg text-light-steel-blue max-w-2xl mx-auto">
              Supporting services to complement our core offerings and provide comprehensive workplace safety solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl card-hover border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-golden-ochre to-burnt-sienna rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal-gray mb-4">{service.title}</h3>
                  <p className="text-light-steel-blue leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-6">
              Industries
              <span className="gradient-text"> We Serve</span>
            </h2>
            <p className="text-lg text-light-steel-blue max-w-2xl mx-auto">
              Our expertise spans across various industries, providing tailored solutions for diverse organizational needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: 'Technology', icon: '💻' },
              { name: 'Healthcare', icon: '🏥' },
              { name: 'Finance', icon: '🏦' },
              { name: 'Manufacturing', icon: '🏭' },
              { name: 'Education', icon: '🎓' },
              { name: 'Retail', icon: '🏪' }
            ].map((industry, index) => (
              <div key={index} className="text-center p-6 bg-cream/40 rounded-2xl hover:bg-cream/60 transition-colors duration-300">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <div className="font-semibold text-charcoal-gray">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-deep-teal to-golden-ochre">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let us help you create a comprehensive POSH compliance strategy tailored to your organization's needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-cream text-deep-teal font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300">
              Schedule Consultation
            </Link>
            <Link href="/about" className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-deep-teal transition-all duration-300">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}