import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Target, TrendingUp, Shield, Users } from 'lucide-react'; // Using Target as main, others for benefits

export const metadata: Metadata = {
  title: 'Strategic Board Advisory on POSH - Secura Compliances',
  description: 'Guiding your board and senior leadership in strategic POSH compliance, governance, and risk management.',
};

export default function BoardAdvisoryPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section for the Service */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-burnt-sienna/10 via-cream/5 to-light-steel-blue/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Target className="w-16 h-16 text-burnt-sienna mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal-gray mb-6">
            Strategic Board Advisory on POSH
          </h1>
          <p className="text-xl text-light-steel-blue max-w-2xl mx-auto leading-relaxed">
            Guiding your board and senior leadership in strategic POSH compliance, effective governance, and proactive risk management.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Detailed Description */}
          <div>
            <h2 className="text-3xl font-semibold text-charcoal-gray mb-6">
              Elevating POSH Compliance to the Board Level
            </h2>
            <div className="prose prose-lg max-w-none text-light-steel-blue space-y-4">
              <p>
                Secura Compliances provides specialized advisory services for Boards of Directors and C-suite executives to ensure POSH compliance is integrated at the highest level of organizational strategy and governance. We help leaders understand their oversight responsibilities and manage associated risks effectively.
              </p>
              <p>
                Our advisory focuses on establishing robust governance frameworks, conducting leadership-focused risk assessments, and preparing for crisis management. We empower senior leadership to champion a culture of safety and respect from the top down.
              </p>
            </div>
          </div>

          {/* Key Benefits/Deliverables */}
          <div>
            <h2 className="text-3xl font-semibold text-charcoal-gray mb-8">
              Strategic Deliverables for Leadership
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Governance Framework Review', description: 'Assessing and strengthening POSH governance structures and reporting lines.', icon: Shield },
                { title: 'Leadership Risk Assessment', description: 'Identifying and mitigating POSH-related risks for senior management and the board.', icon: TrendingUp },
                { title: 'Crisis Management Planning', description: 'Developing protocols for handling high-profile or complex POSH incidents.', icon: CheckCircle },
                { title: 'Compliance Strategy Development', description: 'Aligning POSH initiatives with overall business objectives and ESG goals.', icon: Target },
                { title: 'Board & Leadership Sensitization', description: 'Tailored sessions for senior leaders on their role in POSH compliance.', icon: Users },
                { title: 'Reputation Management Advisory', description: 'Guidance on managing reputational impact related to POSH matters.', icon: CheckCircle },
              ].map((item, index) => (
                <div key={index} className="bg-off-white p-6 rounded-xl shadow-lg border border-cream">
                  <item.icon className="w-10 h-10 text-burnt-sienna mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal-gray mb-2">{item.title}</h3>
                  <p className="text-light-steel-blue">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Who Is This For? */}
          <div>
            <h2 className="text-3xl font-semibold text-charcoal-gray mb-6">
              Tailored for Senior Leadership
            </h2>
            <div className="prose prose-lg max-w-none text-light-steel-blue space-y-4">
              <p>
                Our Board Advisory services are crucial for:
              </p>
              <ul>
                <li>Members of the Board of Directors.</li>
                <li>C-suite executives (CEOs, CHROs, COOs, etc.).</li>
                <li>General Counsel and senior legal team members.</li>
                <li>Organizations committed to embedding a top-down culture of POSH compliance and ethical governance.</li>
                <li>Companies seeking to proactively manage reputational risks associated with workplace conduct.</li>
              </ul>
            </div>
          </div>

          {/* Placeholder for Mini-FAQ / Case Study Snippet */}
          <div className="bg-cream/50 p-8 rounded-xl shadow">
            <h3 className="text-2xl font-semibold text-charcoal-gray mb-4 text-center">Board-Level Impact (Placeholder)</h3>
            <blockquote className="text-center text-light-steel-blue italic">
              "Secura's advisory helped our board understand the strategic implications of POSH. Their insights were critical for our governance review." - Board Chair, Enterprise Co.
            </blockquote>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-8">
            <h2 className="text-3xl font-semibold text-charcoal-gray mb-6">
              Strengthen Your Governance Framework?
            </h2>
            <p className="text-lg text-light-steel-blue mb-8 max-w-xl mx-auto">
              Partner with us to ensure your leadership is equipped to navigate the complexities of POSH compliance with confidence.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Discuss Board Advisory
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
