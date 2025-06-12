import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Users, Shield, MessageCircle } from 'lucide-react'; // Example icons

export const metadata: Metadata = {
  title: 'POSH Consulting Services - Secura Compliances',
  description: 'Expert POSH consulting for policy development, Internal Committee setup, compliance audits, and creating safer workplaces.',
};

export default function PoshConsultingPage() {
  return (
    <div className="pt-20 min-h-screen"> {/* Added min-h-screen for content visibility */}
      {/* Hero Section for the Service */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-deep-teal/10 via-cream/5 to-light-steel-blue/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 text-deep-teal mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal-gray mb-6">
            POSH Consulting Services
          </h1>
          <p className="text-xl text-light-steel-blue max-w-2xl mx-auto leading-relaxed">
            Ensuring your organization is fully compliant with the POSH Act through expert guidance, policy development, and robust internal mechanisms.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Detailed Description */}
          <div>
            <h2 className="text-3xl font-semibold text-charcoal-gray mb-6">
              Comprehensive POSH Compliance Solutions
            </h2>
            <div className="prose prose-lg max-w-none text-light-steel-blue space-y-4">
              <p>
                Secura Compliances offers end-to-end POSH consulting services designed to help your organization not only meet legal requirements but also foster a culture of respect and safety. Our experienced consultants work closely with you to understand your unique needs and develop tailored solutions.
              </p>
              <p>
                From drafting legally sound POSH policies to establishing and training your Internal Committee (IC), we provide practical support at every step. We believe that effective POSH compliance is foundational to a thriving and productive workplace.
              </p>
            </div>
          </div>

          {/* Key Benefits/Deliverables */}
          <div>
            <h2 className="text-3xl font-semibold text-charcoal-gray mb-8">
              Key Benefits & Deliverables
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Custom POSH Policy', description: 'Legally vetted policy tailored to your organization.', icon: CheckCircle },
                { title: 'IC Formation & Training', description: 'Guidance on setting up your IC and comprehensive training for its members.', icon: Users },
                { title: 'Compliance Audits', description: 'Thorough audits to identify gaps and ensure adherence to the POSH Act.', icon: Shield },
                { title: 'Awareness Programs', description: 'Engaging sessions for employees to understand their rights and responsibilities.', icon: MessageCircle },
                { title: 'Annual Report Filing Assistance', description: 'Support in preparing and filing mandatory annual reports.', icon: CheckCircle },
                { title: 'Ongoing Advisory', description: 'Continuous support to address queries and evolving compliance needs.', icon: Users },
              ].map((item, index) => (
                <div key={index} className="bg-off-white p-6 rounded-xl shadow-lg border border-cream">
                  <item.icon className="w-10 h-10 text-deep-teal mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal-gray mb-2">{item.title}</h3>
                  <p className="text-light-steel-blue">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Who Is This For? */}
          <div>
            <h2 className="text-3xl font-semibold text-charcoal-gray mb-6">
              Who Can Benefit?
            </h2>
            <div className="prose prose-lg max-w-none text-light-steel-blue space-y-4">
              <p>
                Our POSH consulting services are essential for:
              </p>
              <ul>
                <li>Organizations of all sizes aiming for full POSH Act compliance.</li>
                <li>Companies looking to establish or strengthen their Internal Committee.</li>
                <li>HR leaders and managers responsible for workplace safety and culture.</li>
                <li>Businesses seeking to proactively prevent sexual harassment and foster a respectful environment.</li>
              </ul>
            </div>
          </div>

          {/* Placeholder for Mini-FAQ / Case Study Snippet */}
          <div className="bg-cream/50 p-8 rounded-xl shadow">
            <h3 className="text-2xl font-semibold text-charcoal-gray mb-4 text-center">Client Success Story (Placeholder)</h3>
            <blockquote className="text-center text-light-steel-blue italic">
              "Secura Compliances guided us through the entire POSH setup. Their expertise was invaluable, and our IC is now confident and effective." - HR Manager, ExampleCorp
            </blockquote>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-8">
            <h2 className="text-3xl font-semibold text-charcoal-gray mb-6">
              Ready to Strengthen Your POSH Compliance?
            </h2>
            <p className="text-lg text-light-steel-blue mb-8 max-w-xl mx-auto">
              Let our experts help you create a safer, more compliant workplace.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Contact Us for a Consultation
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
