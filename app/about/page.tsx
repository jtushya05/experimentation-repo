import { Metadata } from 'next';
import { Shield, Target, Eye, Heart, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Secura Compliances | POSH Consulting Experts',
  description: 'Learn about Secura Compliances - your trusted partner in POSH consulting, workplace safety, and compliance solutions. Meet our expert team and discover our mission.',
  keywords: 'about secura compliances, POSH consultants, workplace safety experts, company mission, team',
};

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We maintain the highest standards of professional ethics and transparency in all our engagements.'
  },
  {
    icon: Heart,
    title: 'Empathy',
    description: 'We understand the sensitive nature of workplace issues and approach each situation with compassion.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every solution we provide, ensuring the best outcomes for our clients.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients as partners to build safer, more inclusive workplace cultures.'
  }
];

const team = [
  {
    name: 'Dr. Meera Sharma',
    role: 'Founder & CEO',
    image: '👩‍💼',
    description: 'Legal expert with 15+ years in workplace compliance and POSH consulting.',
    credentials: ['LLM in Employment Law', 'Certified POSH Trainer', 'Board Advisory Specialist']
  },
  {
    name: 'Rajesh Kumar',
    role: 'Head of Training',
    image: '👨‍🏫',
    description: 'Seasoned trainer specializing in corporate workshops and behavioral change programs.',
    credentials: ['Certified Corporate Trainer', 'HR Management Expert', '10+ Years Experience']
  },
  {
    name: 'Priya Gupta',
    role: 'Legal Advisor',
    image: '👩‍⚖️',
    description: 'Compliance specialist with expertise in regulatory frameworks and policy development.',
    credentials: ['Legal Compliance Expert', 'Policy Development Specialist', 'Regulatory Affairs']
  },
  {
    name: 'Vikram Singh',
    role: 'Client Relations Manager',
    image: '👨‍💼',
    description: 'Dedicated to ensuring exceptional client service and long-term partnerships.',
    credentials: ['Client Success Expert', 'Relationship Management', 'Project Coordination']
  }
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-royal-plum/10 via-sunset-coral/5 to-champagne-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-royal-plum/10 text-royal-plum rounded-full text-sm font-medium mb-4">
              About Secura Compliances
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-midnight mb-6">
              Empowering Organizations to
              <span className="gradient-text"> Build Safer Workplaces</span>
            </h1>
            <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
              With a deep commitment to workplace safety and inclusion, we help organizations 
              navigate POSH compliance while fostering cultures of respect and dignity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-midnight mb-4">Our Story</h2>
              <p className="text-warm-gray leading-relaxed">
                Secura Compliances was founded with a simple yet powerful vision: to create workplaces 
                where every individual feels safe, respected, and valued. Our journey began when we 
                recognized the critical need for comprehensive, empathetic POSH consulting services 
                that go beyond mere compliance.
              </p>
              <p className="text-warm-gray leading-relaxed">
                Today, we're proud to be trusted partners to over 500 organizations across India, 
                helping them build inclusive cultures while ensuring full regulatory compliance. 
                Our approach combines legal expertise with human-centered solutions.
              </p>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                    <div className="text-warm-gray text-sm">Companies Served</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text mb-2">50K+</div>
                    <div className="text-warm-gray text-sm">Employees Trained</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text mb-2">99%</div>
                    <div className="text-warm-gray text-sm">Compliance Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                    <div className="text-warm-gray text-sm">Years Experience</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-sunset-coral/20 rounded-full animate-float" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-champagne-gold/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-royal-plum to-sunset-coral rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-midnight mb-4">Our Mission</h3>
              <p className="text-warm-gray leading-relaxed">
                To empower organizations with comprehensive POSH solutions that ensure compliance 
                while fostering inclusive, respectful workplace cultures where everyone can thrive.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-sunset-coral to-champagne-gold rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-midnight mb-4">Our Vision</h3>
              <p className="text-warm-gray leading-relaxed">
                A future where every workplace in India is free from harassment, discrimination, 
                and bias - where safety, respect, and dignity are foundational values.
              </p>
            </div>

            {/* Approach */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-champagne-gold to-royal-plum rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-midnight mb-4">Our Approach</h3>
              <p className="text-warm-gray leading-relaxed">
                We combine legal expertise with empathetic consultation, providing tailored solutions 
                that address each organization's unique culture, challenges, and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-soft-blush/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-midnight mb-6">
              Our
              <span className="gradient-text"> Core Values</span>
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
              These values guide everything we do and shape how we serve our clients and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl card-hover">
                    <div className="w-14 h-14 bg-gradient-to-br from-royal-plum to-sunset-coral rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-midnight mb-3">{value.title}</h3>
                    <p className="text-warm-gray text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-midnight mb-6">
              Meet Our
              <span className="gradient-text"> Expert Team</span>
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
              Our team combines deep legal expertise with practical experience to deliver 
              comprehensive POSH solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl card-hover border border-gray-100">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-royal-plum to-sunset-coral rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                    {member.image}
                  </div>
                  <h3 className="text-lg font-bold text-midnight mb-1">{member.name}</h3>
                  <p className="text-sunset-coral font-medium mb-3">{member.role}</p>
                  <p className="text-warm-gray text-sm mb-4 leading-relaxed">{member.description}</p>
                  
                  {/* Credentials */}
                  <div className="space-y-2">
                    {member.credentials.map((credential, credIndex) => (
                      <div key={credIndex} className="flex items-center space-x-2 text-xs text-warm-gray">
                        <CheckCircle className="w-3 h-3 text-champagne-gold flex-shrink-0" />
                        <span>{credential}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-plum to-sunset-coral">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's work together to create a safer, more inclusive workplace for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-royal-plum font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300">
              Start a Conversation
            </a>
            <a href="/services" className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-royal-plum transition-all duration-300">
              Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}