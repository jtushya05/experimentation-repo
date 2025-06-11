import { Award, Users, Clock, Shield, CheckCircle, Star } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Expert Team',
    description: 'Certified professionals with deep expertise in POSH compliance and workplace safety regulations.'
  },
  {
    icon: Clock,
    title: 'Quick Implementation',
    description: 'Fast-track your compliance with our streamlined processes and proven methodologies.'
  },
  {
    icon: Shield,
    title: '100% Compliance',
    description: 'Comprehensive solutions ensuring full adherence to legal requirements and best practices.'
  },
  {
    icon: Users,
    title: 'Personalized Approach',
    description: 'Tailored solutions designed specifically for your industry, company size, and unique requirements.'
  }
];

const achievements = [
  { number: '500+', label: 'Companies Served', icon: '🏢' },
  { number: '50,000+', label: 'Employees Trained', icon: '👥' },
  { number: '99%', label: 'Compliance Rate', icon: '✅' },
  { number: '5+', label: 'Years Experience', icon: '⭐' }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-cream/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-burnt-sienna/10 text-burnt-sienna rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-6">
              Your Trusted Partner in
              <span className="gradient-text"> Workplace Safety</span>
            </h2>
            <p className="text-lg text-light-steel-blue mb-8 leading-relaxed">
              With years of experience and a proven track record, we're committed to helping organizations 
              create safer, more inclusive workplaces through comprehensive POSH solutions.
            </p>

            {/* Reasons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-deep-teal rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal-gray mb-2">{reason.title}</h3>
                      <p className="text-sm text-light-steel-blue leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Achievements */}
          <div className="relative">
            {/* Main Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-golden-ochre to-burnt-sienna rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal-gray mb-2">Proven Results</h3>
                <p className="text-light-steel-blue">Numbers that speak for themselves</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-4 bg-cream/30 rounded-xl"> {/* Updated bg-soft-blush/30 to bg-cream/30 or similar */}
                    <div className="text-2xl mb-2">{achievement.icon}</div>
                    <div className="text-2xl font-bold gradient-text mb-1">{achievement.number}</div>
                    <div className="text-sm text-light-steel-blue">{achievement.label}</div>
                  </div>
                ))}
              </div>

              {/* Testimonial Quote */}
              <div className="mt-8 p-6 bg-gradient-to-r from-deep-teal/5 to-golden-ochre/5 rounded-xl border-l-4 border-deep-teal">
                <p className="text-charcoal-gray italic mb-3">
                  "Secura Compliances transformed our workplace culture. Their expertise and personalized approach made compliance seamless."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-deep-teal to-golden-ochre rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">RK</span>
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal-gray text-sm">Rajesh Kumar</div>
                    <div className="text-light-steel-blue text-xs">HR Director, Tech Corp</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-golden-ochre/20 rounded-full animate-float" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-burnt-sienna/20 rounded-full animate-float" style={{ animationDelay: '3s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}