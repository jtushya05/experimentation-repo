import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowLeft, Share2, Linkedin, Twitter, Facebook } from 'lucide-react';

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
    image: 'https://images.pexels.com/photos/5668852/pexels-photo-5668852.jpeg?auto=compress&cs=tinysrgb&w=1200',
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
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
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
    image: 'https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=1200',
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
    image: 'https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Board Governance', 'Strategy', 'Risk Management']
  }
];

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find(p => p.id === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - Secura Compliances',
    };
  }

  return {
    title: `${post.title} - Secura Compliances Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [post.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.id === params.slug);

  if (!post) {
    notFound();
  }

  // Convert markdown-style content to HTML-like structure for display
  const formatContent = (content: string) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        if (paragraph.startsWith('## ')) {
          return (
            <h2 key={index} className="text-2xl font-bold text-midnight mt-8 mb-4">
              {paragraph.replace('## ', '')}
            </h2>
          );
        }
        if (paragraph.startsWith('### ')) {
          return (
            <h3 key={index} className="text-xl font-semibold text-midnight mt-6 mb-3">
              {paragraph.replace('### ', '')}
            </h3>
          );
        }
        if (paragraph.startsWith('- ')) {
          const items = paragraph.split('\n').filter(item => item.startsWith('- '));
          return (
            <ul key={index} className="list-disc list-inside space-y-2 mb-4 text-warm-gray">
              {items.map((item, itemIndex) => (
                <li key={itemIndex}>{item.replace('- ', '')}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={index} className="text-warm-gray leading-relaxed mb-4">
            {paragraph}
          </p>
        );
      });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-royal-plum/5 to-sunset-coral/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog"
            className="inline-flex items-center text-royal-plum hover:text-sunset-coral font-medium mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="mb-6">
            <span className="px-3 py-1 bg-royal-plum/10 text-royal-plum rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-midnight mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-warm-gray mb-8">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-champagne-gold/20 text-champagne-gold rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Image */}
              <div className="mb-8 rounded-2xl overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-warm-gray leading-relaxed mb-8 font-medium">
                  {post.excerpt}
                </p>
                
                <div className="space-y-4">
                  {formatContent(post.content)}
                </div>
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-midnight">Share this article</h3>
                  <div className="flex space-x-4">
                    <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors duration-300">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors duration-300">
                      <Facebook className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Author Info */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="font-semibold text-midnight mb-4">About the Author</h3>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-royal-plum to-sunset-coral rounded-full flex items-center justify-center text-white font-semibold">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-medium text-midnight">{post.author}</div>
                      <div className="text-sm text-warm-gray">POSH Expert</div>
                    </div>
                  </div>
                  <p className="text-sm text-warm-gray">
                    Expert consultant specializing in workplace safety and POSH compliance with extensive experience in organizational development.
                  </p>
                </div>

                {/* Related Articles */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="font-semibold text-midnight mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {blogPosts
                      .filter(p => p.id !== post.id)
                      .slice(0, 3)
                      .map((relatedPost, index) => (
                        <Link 
                          key={index}
                          href={`/blog/${relatedPost.id}`}
                          className="block group"
                        >
                          <h4 className="text-sm font-medium text-midnight group-hover:text-royal-plum transition-colors duration-300 line-clamp-2 mb-2">
                            {relatedPost.title}
                          </h4>
                          <div className="text-xs text-warm-gray">
                            {relatedPost.readTime}
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>

                {/* Newsletter CTA */}
                <div className="bg-gradient-to-br from-royal-plum to-sunset-coral rounded-2xl p-6 text-white">
                  <h3 className="font-semibold mb-3">Stay Updated</h3>
                  <p className="text-sm text-white/90 mb-4">
                    Get the latest POSH insights and compliance updates delivered to your inbox.
                  </p>
                  <Link 
                    href="/contact"
                    className="block w-full bg-white text-royal-plum text-center font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    Subscribe Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-royal-plum/5 to-sunset-coral/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-midnight mb-4">
            Need Expert POSH Guidance?
          </h2>
          <p className="text-lg text-warm-gray mb-8">
            Our team of experts is ready to help you implement comprehensive POSH solutions for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Schedule Consultation
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}