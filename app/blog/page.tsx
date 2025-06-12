import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - Secura Compliances | POSH Insights & Resources',
  description: 'Stay updated with the latest insights on POSH compliance, workplace safety, and best practices from our expert team.',
  keywords: 'POSH blog, workplace safety articles, compliance insights, harassment prevention',
};

// Mock blog data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 'understanding-posh-act-2013',
    title: 'Understanding the POSH Act 2013: A Comprehensive Guide',
    excerpt: 'Everything you need to know about the Prevention of Sexual Harassment at Workplace Act 2013 and its implications for Indian organizations.',
    content: `The Prevention of Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013, commonly known as the POSH Act, is a landmark legislation that addresses sexual harassment at workplaces in India.

## Key Provisions of the POSH Act

### 1. Definition of Sexual Harassment
The Act provides a comprehensive definition of sexual harassment, including:
- Unwelcome acts or behaviors (whether directly or by implication)
- Physical contact and advances
- Demand or request for sexual favors
- Making sexually colored remarks
- Showing pornography
- Any other unwelcome physical, verbal or non-verbal conduct of sexual nature

### 2. Workplace Definition
The Act defines workplace broadly to include:
- Any office, factory, or establishment
- Sports institutes, hospitals, educational institutions
- Any place visited by employees during employment
- Transportation provided by employers
- Dwelling places or houses in case of domestic workers

### 3. Internal Committee (IC)
Organizations with 10 or more employees must constitute an Internal Committee comprising:
- A senior woman employee as Presiding Officer
- At least two employees committed to women's causes
- One external member from an NGO or association

### 4. Complaint Mechanism
The Act provides a structured complaint mechanism:
- Written complaints to be filed within 3 months
- Inquiry to be completed within 90 days
- Options for conciliation or inquiry
- Interim relief measures

## Compliance Requirements

### For Employers
- Provide safe working environment
- Display information about the POSH Act
- Conduct awareness programs
- Assist in complaint proceedings
- Monitor and report

### For Employees
- File complaints within prescribed time
- Cooperate in proceedings
- Maintain confidentiality

## Penalties for Non-Compliance
- Fine up to Rs. 50,000
- Cancellation of license or registration
- Non-renewal of government contracts

The POSH Act represents a significant step towards creating safer workplaces for women in India. Organizations must ensure full compliance to protect their employees and avoid legal consequences.`,
    author: 'Dr. Meera Sharma',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Legal & Compliance',
    image: 'https://images.pexels.com/photos/5668852/pexels-photo-5668852.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['POSH Act', 'Legal Compliance', 'Workplace Safety']
  },
  {
    id: 'building-inclusive-workplace-culture',
    title: 'Building an Inclusive Workplace Culture: Beyond Compliance',
    excerpt: 'Learn how to create a genuinely inclusive work environment that goes beyond mere legal compliance and fosters respect and dignity.',
    content: `Creating an inclusive workplace culture requires more than just following legal requirements. It demands a fundamental shift in organizational mindset and practices.

## The Foundation of Inclusive Culture

### 1. Leadership Commitment
- Visible commitment from top management
- Regular communication about values
- Leading by example
- Allocating resources for inclusion initiatives

### 2. Clear Policies and Procedures
- Comprehensive anti-harassment policies
- Clear reporting mechanisms
- Fair investigation processes
- Consistent enforcement

### 3. Training and Awareness
- Regular sensitivity training
- Bystander intervention programs
- Cultural competency workshops
- Ongoing education initiatives

## Building Blocks of Inclusion

### Psychological Safety
Creating an environment where employees feel safe to:
- Express their opinions
- Report concerns without fear
- Make mistakes and learn
- Be their authentic selves

### Open Communication
- Regular feedback sessions
- Anonymous reporting systems
- Town halls and open forums
- Transparent communication policies

### Diverse Representation
- Inclusive hiring practices
- Diverse leadership teams
- Equal growth opportunities
- Mentorship programs

## Measuring Success

### Key Metrics
- Employee satisfaction surveys
- Incident reporting trends
- Retention rates by demographics
- Promotion and advancement data

### Regular Assessment
- Annual culture audits
- Focus group discussions
- Exit interview analysis
- Third-party assessments

Building an inclusive culture is an ongoing journey that requires continuous effort, commitment, and adaptation. The benefits extend far beyond compliance, creating a more engaged, productive, and innovative workforce.`,
    author: 'Rajesh Kumar',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Culture & Training',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Workplace Culture', 'Inclusion', 'Training']
  },
  {
    id: 'effective-posh-training-strategies',
    title: 'Effective POSH Training Strategies That Actually Work',
    excerpt: 'Discover proven training methodologies that create lasting behavioral change and build awareness beyond checkbox compliance.',
    content: `Effective POSH training goes beyond compliance requirements to create meaningful behavioral change and awareness in the workplace.

## Key Elements of Effective Training

### 1. Interactive Learning Approaches
- Case study discussions
- Role-playing exercises
- Scenario-based learning
- Group workshops and activities

### 2. Customized Content
- Industry-specific examples
- Role-based training modules
- Cultural considerations
- Local language options

### 3. Multi-Modal Delivery
- In-person workshops
- Digital learning platforms
- Microlearning modules
- Refresher sessions

## Training Components

### Awareness Building
- Understanding harassment types
- Recognizing inappropriate behavior
- Impact on individuals and organizations
- Legal consequences

### Skill Development
- Communication skills
- Conflict resolution
- Bystander intervention
- Reporting procedures

### Behavioral Change
- Unconscious bias training
- Empathy building
- Respectful communication
- Professional boundaries

## Implementation Best Practices

### Pre-Training
- Needs assessment
- Stakeholder buy-in
- Clear objectives
- Resource allocation

### During Training
- Engaging facilitation
- Safe learning environment
- Active participation
- Real-life applications

### Post-Training
- Follow-up sessions
- Behavior reinforcement
- Feedback collection
- Continuous improvement

## Measuring Training Effectiveness

### Immediate Impact
- Knowledge retention tests
- Participant feedback
- Engagement metrics
- Comprehension assessments

### Long-term Outcomes
- Behavioral observations
- Incident reduction
- Culture surveys
- Retention rates

Effective POSH training requires thoughtful planning, skilled facilitation, and ongoing reinforcement to create lasting change in workplace culture and behavior.`,
    author: 'Priya Gupta',
    date: '2024-01-05',
    readTime: '7 min read',
    category: 'Training & Development',
    image: 'https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Training', 'Education', 'Best Practices']
  },
  {
    id: 'board-governance-posh-compliance',
    title: 'Board Governance and POSH Compliance: A Strategic Approach',
    excerpt: 'How boards can take a strategic approach to POSH compliance, ensuring governance excellence and organizational reputation protection.',
    content: `Board governance plays a crucial role in ensuring effective POSH compliance and creating a culture of accountability at the highest levels of the organization.

## Board's Role in POSH Compliance

### 1. Strategic Oversight
- Setting compliance policies
- Monitoring implementation
- Resource allocation
- Risk assessment

### 2. Governance Framework
- Establishing clear accountability
- Defining roles and responsibilities
- Creating reporting mechanisms
- Ensuring transparency

### 3. Culture Leadership
- Tone at the top
- Values demonstration
- Behavior modeling
- Communication leadership

## Key Board Responsibilities

### Policy Development
- Comprehensive POSH policies
- Clear procedures and guidelines
- Regular policy updates
- Stakeholder involvement

### Risk Management
- Identifying compliance risks
- Mitigation strategies
- Regular risk assessments
- Crisis management plans

### Performance Monitoring
- Regular compliance reports
- Key performance indicators
- Trend analysis
- Corrective actions

## Governance Best Practices

### Board Composition
- Diverse representation
- Relevant expertise
- Independent members
- Gender balance

### Committee Structure
- Dedicated committees
- Clear mandates
- Regular meetings
- Expert advisors

### Reporting Mechanisms
- Regular compliance reports
- Incident summaries
- Action plans
- Progress updates

## Strategic Benefits

### Reputation Protection
- Proactive compliance approach
- Crisis prevention
- Stakeholder confidence
- Brand protection

### Legal Risk Mitigation
- Reduced liability exposure
- Regulatory compliance
- Documentation standards
- Professional oversight

### Organizational Excellence
- Cultural transformation
- Employee engagement
- Talent retention
- Performance improvement

Effective board governance in POSH compliance creates a foundation for organizational excellence while protecting stakeholders and building sustainable success.`,
    author: 'Vikram Singh',
    date: '2023-12-28',
    readTime: '9 min read',
    category: 'Governance & Strategy',
    image: 'https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Board Governance', 'Strategy', 'Risk Management']
  }
];

const categories = ['All', 'Legal & Compliance', 'Culture & Training', 'Training & Development', 'Governance & Strategy'];

export default function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-royal-plum/10 via-sunset-coral/5 to-champagne-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-royal-plum/10 text-royal-plum rounded-full text-sm font-medium mb-4">
              Insights & Resources
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-midnight mb-6">
              POSH Compliance
              <span className="gradient-text"> Insights & Resources</span>
            </h1>
            <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest insights, best practices, and expert guidance on POSH compliance, 
              workplace safety, and building inclusive organizational cultures.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-royal-plum text-white shadow-lg'
                    : 'bg-white text-warm-gray hover:bg-soft-blush/50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-royal-plum/10 text-royal-plum rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-sunset-coral/10 text-sunset-coral rounded-full text-sm font-medium">
                      {blogPosts[0].category}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-midnight mb-4 leading-tight">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-warm-gray mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-warm-gray">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{blogPosts[0].author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(blogPosts[0].date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{blogPosts[0].readTime}</span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${blogPosts[0].id}`}
                      className="inline-flex items-center text-royal-plum hover:text-sunset-coral font-semibold transition-colors duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl card-hover border border-gray-100 overflow-hidden">
                <div className="h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-3 py-1 bg-champagne-gold/20 text-champagne-gold rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-midnight mb-3 leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-warm-gray text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-soft-blush/50 text-midnight text-xs rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-warm-gray mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>

                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-royal-plum hover:text-sunset-coral font-semibold text-sm transition-colors duration-300 group"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-royal-plum to-sunset-coral rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Updated with POSH Insights
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Get the latest articles, compliance updates, and expert insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border-0 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-royal-plum font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}