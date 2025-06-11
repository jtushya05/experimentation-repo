import { Building2, Users, Award, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    number: '500+',
    label: 'Companies Served',
    description: 'Across various industries'
  },
  {
    icon: Users,
    number: '50,000+',
    label: 'Employees Trained',
    description: 'In POSH compliance'
  },
  {
    icon: Award,
    number: '99%',
    label: 'Compliance Rate',
    description: 'Success in audits'
  },
  {
    icon: TrendingUp,
    number: '98%',
    label: 'Client Retention',
    description: 'Long-term partnerships'
  }
];

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-royal-plum via-sunset-coral to-champagne-gold relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Our track record speaks for itself. Here are the numbers that demonstrate our commitment to excellence.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-xl font-semibold text-white/90 mb-2">{stat.label}</div>
                  <div className="text-white/70 text-sm">{stat.description}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Let us help you achieve the same level of compliance and workplace safety excellence.
            </p>
            <button className="bg-white text-royal-plum font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}