import Link from 'next/link';
import { Shield, Users, FileCheck, Target, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'POSH Consulting',
    description: 'Comprehensive Prevention of Sexual Harassment consulting services including policy development, committee formation, and compliance audits.',
    features: ['Policy Development', 'Committee Setup', 'Compliance Audits', 'Legal Documentation'],
    color: 'deep-teal'
  },
  {
    icon: Users,
    title: 'Corporate Training',
    description: 'Interactive workshops and training programs to educate employees and create awareness about workplace safety and harassment prevention.',
    features: ['Employee Workshops', 'Leadership Training', 'Awareness Programs', 'Certification Courses'],
    color: 'burnt-sienna'
  },
  {
    icon: Target,
    title: 'Board Advisory',
    description: 'Strategic guidance for boards and senior management on compliance requirements, risk management, and governance best practices.',
    features: ['Strategic Guidance', 'Risk Assessment', 'Governance Support', 'Board Presentations'],
    color: 'golden-ochre'
  }
];

export function ServicesOverview() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-cream/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-deep-teal/10 text-deep-teal rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-gray mb-6">
            Comprehensive
            <span className="gradient-text"> POSH Solutions</span>
          </h2>
          <p className="text-lg text-light-steel-blue max-w-3xl mx-auto leading-relaxed">
            From policy development to training and ongoing compliance, we provide end-to-end solutions 
            to help your organization create and maintain a safe, respectful workplace environment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl card-hover border border-gray-100"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br from-${service.color} to-${service.color}/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-charcoal-gray mb-4">{service.title}</h3>
                <p className="text-light-steel-blue mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-${service.color} rounded-full`} />
                      <span className="text-sm text-charcoal-gray">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <Link 
                  href="/services" 
                  className={`inline-flex items-center text-${service.color} font-semibold group-hover:gap-2 transition-all duration-300`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-deep-teal to-golden-ochre rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Workplace?
            </h3>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Let us help you build a safer, more inclusive work environment with our comprehensive POSH solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-deep-teal font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300">
                Schedule Consultation
              </Link>
              <Link href="/services" className="border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-deep-teal transition-all duration-300">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}