import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Users, Award, Briefcase, Zap } from 'lucide-react'; // Using Users as main, others for benefits

export const metadata: Metadata = {
  title: 'Effective Corporate Training Programs - Secura Compliances',
  description: 'Empowering your workforce with engaging and impactful training on POSH, workplace ethics, and inclusive practices.',
};

export default function CorporateTrainingPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section for the Service */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-golden-ochre/10 via-cream/5 to-light-steel-blue/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 text-golden-ochre mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal-gray mb-6">
            Effective Corporate Training Programs
          </h1>
          <p className="text-xl text-light-steel-blue max-w-2xl mx-auto leading-relaxed">
            Empowering your workforce with engaging and impactful training on POSH, workplace ethics, and inclusive practices.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Detailed Description */}
          <div>
            <h2 className="text-3xl font-semibold text-charcoal-gray mb-6">
              Transformative Learning Experiences
            </h2>
            <div className="prose prose-lg max-w-none text-light-steel-blue space-y-4">
              <p>
                Secura Compliances delivers high-impact corporate training programs that go beyond standard presentations. We focus on creating interactive and engaging learning experiences tailored to your organization's specific needs and culture.
              </p>
              <p>
                Our modules cover crucial topics such as POSH awareness, workplace ethics, diversity and inclusion, and leadership development in these areas. We aim to equip your employees and managers with the knowledge and skills to foster a respectful, compliant, and productive work environment.
              </p>
            </div>
          </div>

          {/* Key Benefits/Deliverables */}
          <div>
            <h2 className="text-3xl font-semibold text-charcoal-gray mb-8">
              Key Training Offerings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Interactive Workshops', description: 'Engaging, scenario-based workshops for all employee levels.', icon: Users },
                { title: 'Manager & Leadership Training', description: 'Specialized modules for managers, supervisors, and leaders on their roles in prevention and redressal.', icon: Award },
                { title: 'Employee Sensitization Programs', description: 'Building awareness on POSH, workplace conduct, and respectful communication.', icon: Zap },
                { title: 'Bystander Intervention Training', description: 'Empowering employees to safely intervene and support a positive workplace.', icon: Briefcase },
                { title: 'Custom Module Development', description: 'Training content tailored to your industry, policies, and specific challenges.', icon: CheckCircle },
                { title: 'Post-Training Support & Resources', description: 'Access to materials and support to reinforce learning and application.', icon: CheckCircle },
              ].map((item, index) => (
                <div key={index} className="bg-off-white p-6 rounded-xl shadow-lg border border-cream">
                  <item.icon className="w-10 h-10 text-golden-ochre mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal-gray mb-2">{item.title}</h3>
                  <p className="text-light-steel-blue">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Who Is This For? */}
          <div>
            <h2 className="text-3xl font-semibold text-charcoal-gray mb-6">
              Who Should Attend?
            </h2>
            <div className="prose prose-lg max-w-none text-light-steel-blue space-y-4">
              <p>
                Our corporate training programs are designed for:
              </p>
              <ul>
                <li>HR departments and Learning & Development (L&D) teams.</li>
                <li>Organizations aiming to build a strong, respectful, and compliant workplace culture.</li>
                <li>Employees at all levels, from new hires to senior management.</li>
                <li>Internal Committee (IC) members seeking specialized training.</li>
                <li>Managers and supervisors who need to understand their responsibilities under the POSH Act.</li>
              </ul>
            </div>
          </div>

          {/* Placeholder for Mini-FAQ / Case Study Snippet */}
          <div className="bg-cream/50 p-8 rounded-xl shadow">
            <h3 className="text-2xl font-semibold text-charcoal-gray mb-4 text-center">Training Impact (Placeholder)</h3>
            <blockquote className="text-center text-light-steel-blue italic">
              "The interactive POSH training by Secura Compliances was eye-opening. Our team is now much more aware and sensitive." - L&D Head, Innovate Ltd.
            </blockquote>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-8">
            <h2 className="text-3xl font-semibold text-charcoal-gray mb-6">
              Elevate Your Team's Awareness?
            </h2>
            <p className="text-lg text-light-steel-blue mb-8 max-w-xl mx-auto">
              Invest in your workforce and build a stronger, more compliant organization through our expert training programs.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Explore Training Solutions
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
