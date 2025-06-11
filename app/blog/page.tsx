import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { getSortedPostsData, BlogPost } from '../../lib/blog'; // Updated import

export const metadata: Metadata = {
  title: 'Blog - Secura Compliances | POSH Insights & Resources',
  description: 'Stay updated with the latest insights on POSH compliance, workplace safety, and best practices from our expert team.',
  keywords: 'POSH blog, workplace safety articles, compliance insights, harassment prevention',
};

// const categories = ['All', 'Legal & Compliance', 'Culture & Training', 'Training & Development', 'Governance & Strategy'];
// TODO: Derive categories dynamically from posts or define them globally if static
const categories = ['All', ...new Set(getSortedPostsData().map(post => post.category))];


export default function BlogPage() {
  const allPostsData: BlogPost[] = getSortedPostsData();
  const featuredPost = allPostsData[0];
  const regularPosts = allPostsData.slice(1);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-deep-teal/10 via-golden-ochre/5 to-burnt-sienna/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-deep-teal/10 text-deep-teal rounded-full text-sm font-medium mb-4"> {/* Updated colors */}
              Insights & Resources
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal-gray mb-6"> {/* Updated colors */}
              POSH Compliance
              <span className="gradient-text"> Insights & Resources</span>
            </h1>
            <p className="text-xl text-light-steel-blue max-w-3xl mx-auto leading-relaxed"> {/* Updated colors */}
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
                  // TODO: Implement actual filtering logic if categories are dynamic
                  category === 'All' // Assuming 'All' is always the first active category initially
                    ? 'bg-deep-teal text-cream shadow-lg'
                    : 'bg-off-white text-charcoal-gray hover:bg-cream border-light-steel-blue/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-auto">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-deep-teal/10 text-deep-teal rounded-full text-sm font-medium"> {/* Updated colors */}
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-burnt-sienna/10 text-burnt-sienna rounded-full text-sm font-medium"> {/* Updated colors */}
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-charcoal-gray mb-4 leading-tight"> {/* Updated colors */}
                      {featuredPost.title}
                    </h2>
                    <p className="text-light-steel-blue mb-6 leading-relaxed"> {/* Updated colors */}
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-light-steel-blue"> {/* Updated colors */}
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(featuredPost.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      <Link
                        href={`/blog/${featuredPost.id}`}
                        className="inline-flex items-center text-deep-teal hover:text-golden-ochre font-semibold transition-colors duration-300" /* Updated colors */
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => ( // Changed key from index to post.id for stable keys
              <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl card-hover border border-gray-100 overflow-hidden">
                <div className="h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-3 py-1 bg-golden-ochre/20 text-golden-ochre rounded-full text-xs font-medium"> {/* Updated colors */}
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-charcoal-gray mb-3 leading-tight line-clamp-2"> {/* Updated colors */}
                    {post.title}
                  </h3>
                  <p className="text-light-steel-blue text-sm mb-4 leading-relaxed line-clamp-3"> {/* Updated colors */}
                    {post.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-cream text-charcoal-gray text-xs rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-light-steel-blue mb-4"> {/* Updated colors */}
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
                    className="inline-flex items-center text-deep-teal hover:text-golden-ochre font-semibold text-sm transition-colors duration-300 group" /* Updated colors */
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-deep-teal to-golden-ochre rounded-3xl p-8 md:p-12 text-center"> {/* Updated colors */}
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
                className="flex-1 px-6 py-3 rounded-full border-0 focus:ring-2 focus:ring-cream focus:outline-none"
              />
              <button className="bg-cream text-deep-teal font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}