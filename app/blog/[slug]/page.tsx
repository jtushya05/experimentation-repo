'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowLeft, Linkedin, Twitter, Facebook } from 'lucide-react';
import { getPostData, PostData } from '../../../lib/blog'; // Removed getAllPostIds
import ReactMarkdown from 'react-markdown';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// generateMetadata function has been removed from here and moved to layout.tsx

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  let post: PostData; // Use PostData type
  try {
    post = await getPostData(params.slug);
  } catch (error) {
    notFound();
  }

  if (!post) {
    notFound();
  }

  // Placeholder for related posts - this logic would need getSortedPostsData
  const relatedPosts: PostData[] = [];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-deep-teal/5 via-golden-ochre/5 to-burnt-sienna/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog"
            className="inline-flex items-center text-deep-teal hover:text-golden-ochre font-medium mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="mb-6">
            <span className="px-3 py-1 bg-deep-teal/10 text-deep-teal rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-gray mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-light-steel-blue mb-8">
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

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag: string, index: number) => ( // Added types for map
              <span key={index} className="px-3 py-1 bg-golden-ochre/20 text-golden-ochre rounded-full text-sm">
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
              <div className="mb-8 rounded-2xl overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>

              {/* Excerpt outside prose */}
              <p className="text-xl text-light-steel-blue leading-relaxed mb-8 font-medium">
                {post.excerpt}
              </p>

              <div className="prose lg:prose-xl max-w-none dark:prose-invert">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>

              <div className="mt-12 pt-8 border-t border-light-steel-blue/30">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-charcoal-gray">Share this article</h3>
                  <div className="flex space-x-4">
                    <button className="p-2 bg-deep-teal text-cream rounded-lg hover:bg-deep-teal/90 transition-colors duration-300">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-golden-ochre text-cream rounded-lg hover:bg-golden-ochre/90 transition-colors duration-300">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-charcoal-gray text-cream rounded-lg hover:bg-charcoal-gray/90 transition-colors duration-300">
                      <Facebook className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="bg-off-white rounded-2xl p-6 shadow-lg border border-cream">
                  <h3 className="font-semibold text-charcoal-gray mb-4">About the Author</h3>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-deep-teal to-golden-ochre rounded-full flex items-center justify-center text-white font-semibold">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-medium text-charcoal-gray">{post.author}</div>
                      <div className="text-sm text-light-steel-blue">POSH Expert</div>
                    </div>
                  </div>
                  <p className="text-sm text-light-steel-blue">
                    Expert consultant specializing in workplace safety and POSH compliance with extensive experience in organizational development.
                  </p>
                </div>

                <div className="bg-off-white rounded-2xl p-6 shadow-lg border border-cream">
                  <h3 className="font-semibold text-charcoal-gray mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                        <Link 
                          key={relatedPost.id}
                          href={`/blog/${relatedPost.id}`}
                          className="block group"
                        >
                          <h4 className="text-sm font-medium text-charcoal-gray group-hover:text-deep-teal transition-colors duration-300 line-clamp-2 mb-2">
                            {relatedPost.title}
                          </h4>
                          <div className="text-xs text-light-steel-blue">
                            {relatedPost.readTime}
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-deep-teal to-golden-ochre rounded-2xl p-6 text-white">
                  <h3 className="font-semibold mb-3">Stay Updated</h3>
                  <p className="text-sm text-white/90 mb-4">
                    Get the latest POSH insights and compliance updates delivered to your inbox.
                  </p>
                  <Link 
                    href="/contact"
                    className="block w-full bg-cream text-deep-teal text-center font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    Subscribe Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gradient-to-r from-deep-teal/5 via-golden-ochre/5 to-burnt-sienna/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal-gray mb-4">
            Need Expert POSH Guidance?
          </h2>
          <p className="text-lg text-light-steel-blue mb-8">
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