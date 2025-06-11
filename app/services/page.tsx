import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Users, Target, FileCheck, BookOpen, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services - Secura Compliances | Comprehensive POSH Solutions',
  description: 'Explore our comprehensive POSH consulting services including policy development, corporate training, board advisory, and compliance audits.',
  keywords: 'POSH consulting services, corporate training, board advisory, compliance audits, workplace safety',
};

const services = [
  {
    icon: Shield,
    title: 'POSH Consulting',
    description: 'End-to-end Prevention of Sexual Harassment consulting services to ensure full compliance with Indian regulations.',
    features: [
      'POSH Policy Development',
      'Internal Committee Formation',
      'Complaint Handling Procedures',
      'Compliance Audits & Reviews',
      'Legal Documentation Support',
      'Regulatory Filing Assistance'
    ],
    benefits: [
      'Full legal compliance',
      'Reduced legal risks',
      'Clear procedures',
      'Expert guidance'
    ],
    process: [
      'Initial Assessment',
      'Policy Development',
      'Committee Setup',
      'Training & Implementation',
      'Ongoing Support'
    ]
  },
  {
    icon: Users,
    title: 'Corporate Training',
    description: 'Interactive training programs designed to educate employees and create awareness about workplace safety.',
    features: [
      'Employee Awareness Sessions',
      'Leadership Training Programs',
      'Bystander Intervention Training',
      'Customized Workshop Content',
      'Digital Learning Modules',
      'Train-the-Trainer Programs'
    ],
    benefits: [
      'Increased awareness',
      'Behavioral change',
      'Safer culture',
      'Engaged workforce'
    ],
    process: [
      'Training Needs Analysis',
      'Content Customization',
      'Program Delivery',
      'Impact Assessment',
      'Continuous Learning'
    ]
  },
  {
    icon: Target,
    title: 'Board Advisory',
    description: 'Strategic guidance for boards and senior management on compliance, governance, and risk management.',
    features: [
      'Board Strategy Consultation',
      'Risk Assessment & Mitigation',
      'Governance Framework Design',
      'Executive Leadership Coaching',
      'Compliance Reporting Systems',
      'Crisis Management Support'
    ],
    benefits: [
      'Strategic clarity',
      'Risk mitigation',
      'Better governance',
      'Leadership support'
    ],
    process: [
      'Governance Assessment',
      'Strategy Development',
      'Implementation Planning',
      'Monitoring & Review',
      'Continuous Improvement'
    ]
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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-royal-plum/10 via-sunset-coral/5 to-champagne-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-royal-plum/10 text-royal-plum rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-midnight mb-6">
              Comprehensive
              <span className="gradient-text"> POSH Solutions</span>
            </h1>
            <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
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
          <section key={index} className={`py-20 ${isEven ? 'bg-white' : 'bg-soft-blush/20'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={isEven ? '' : 'lg:order-2'}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-royal-plum to-sunset-coral rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-midnight">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-warm-gray mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-midnight mb-4">What's Included:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-champagne-gold flex-shrink-0" />
                          <span className="text-warm-gray">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link 
                    href="/contact" 
                    className="btn-primary inline-flex items-center"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>

                {/* Visual Card */}
                <div className={isEven ? '' : 'lg:order-1'}>
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                    {/* Benefits */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-midnight mb-4">Key Benefits</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="text-center p-3 bg-soft-blush/30 rounded-xl">
                            <div className="text-sm font-medium text-midnight">{benefit}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Process */}
                    <div>
                      <h4 className="text-lg font-semibold text-midnight mb-4">Our Process</h4>
                      <div className="space-y-3">
                        {service.process.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-royal-plum to-sunset-coral rounded-full flex items-center justify-center text-white text-sm font-bold">
                              {stepIndex + 1}
                            </div>
                            <span className="text-warm-gray">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-b from-white to-soft-blush/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-midnight mb-6">
              Additional
              <span className="gradient-text"> Specialized Services</span>
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
              Supporting services to complement our core offerings and provide comprehensive workplace safety solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl card-hover border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-champagne-gold to-sunset-coral rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-midnight mb-4">{service.title}</h3>
                  <p className="text-warm-gray leading-relaxed">{service.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-midnight mb-6">
              Industries
              <span className="gradient-text"> We Serve</span>
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
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
              <div key={index} className="text-center p-6 bg-soft-blush/20 rounded-2xl hover:bg-soft-blush/40 transition-colors duration-300">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <div className="font-semibold text-midnight">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-plum to-sunset-coral">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let us help you create a comprehensive POSH compliance strategy tailored to your organization's needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-royal-plum font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300">
              Schedule Consultation
            </Link>
            <Link href="/about" className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-royal-plum transition-all duration-300">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}