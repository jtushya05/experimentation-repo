import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowLeft, Share2, Linkedin, Twitter, Facebook } from 'lucide-react';
import { getPostData, getAllPostIds, BlogPost } from '../../../lib/blog'; // Adjusted path
import ReactMarkdown from 'react-markdown';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const post = await getPostData(params.slug);
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
  } catch (error) {
    // Handle cases where getPostData might throw (e.g., file not found in dev)
    console.error(`Error generating metadata for slug ${params.slug}:`, error);
    return {
      title: 'Error - Secura Compliances Blog',
      description: 'There was an error loading this blog post.',
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  let post: BlogPost;
  try {
    post = await getPostData(params.slug);
  } catch (error) {
    // If getPostData throws (e.g. file not found), trigger notFound
    notFound();
  }


  if (!post) {
    notFound();
  }

  // Fetch all posts for "Related Articles" - ideally, filter by category or tags in a real app
  // For now, just getting all and excluding current, then slicing.
  // This is not part of getPostData to keep that function focused on a single post.
  // const allPosts = getSortedPostsData(); // This would require another import from lib/blog
  // const relatedPosts = allPosts.filter(p => p.id !== post.id).slice(0, 3);
  // For simplicity, as getSortedPostsData is not imported, we'll skip related posts dynamic rendering for now or assume it's handled differently.
  // The prompt only requires rendering the current post's content.
  // Let's clear the related posts section for now to avoid errors with missing blogPosts variable.
  const relatedPosts: BlogPost[] = [];


  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-deep-teal/5 to-golden-ochre/5"> {/* Updated colors */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog"
            className="inline-flex items-center text-deep-teal hover:text-golden-ochre font-medium mb-8 transition-colors duration-300" /* Updated colors */
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="mb-6">
            <span className="px-3 py-1 bg-deep-teal/10 text-deep-teal rounded-full text-sm font-medium"> {/* Updated colors */}
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-gray mb-6 leading-tight"> {/* Updated colors */}
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-light-steel-blue mb-8"> {/* Updated colors */}
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
              <span key={index} className="px-3 py-1 bg-golden-ochre/20 text-golden-ochre rounded-full text-sm"> {/* Updated colors */}
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
              {/* Excerpt is now displayed above the prose-styled content */}
              <p className="text-xl text-light-steel-blue leading-relaxed mb-8 font-medium">
                {post.excerpt}
              </p>

              <div className="prose lg:prose-xl max-w-none dark:prose-invert">
                <ReactMarkdown>
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-charcoal-gray">Share this article</h3> {/* Updated colors */}
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
                {/* Author Info */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="font-semibold text-charcoal-gray mb-4">About the Author</h3> {/* Updated colors */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-deep-teal to-golden-ochre rounded-full flex items-center justify-center text-white font-semibold"> {/* Updated colors */}
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-medium text-charcoal-gray">{post.author}</div> {/* Updated colors */}
                      <div className="text-sm text-light-steel-blue">POSH Expert</div> {/* Updated colors */}
                    </div>
                  </div>
                  <p className="text-sm text-light-steel-blue"> {/* Updated colors */}
                    Expert consultant specializing in workplace safety and POSH compliance with extensive experience in organizational development.
                  </p>
                </div>

                {/* Related Articles */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="font-semibold text-charcoal-gray mb-4">Related Articles</h3> {/* Updated colors */}
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => ( // Changed key to relatedPost.id
                        <Link 
                          key={relatedPost.id}
                          href={`/blog/${relatedPost.id}`}
                          className="block group"
                        >
                          <h4 className="text-sm font-medium text-charcoal-gray group-hover:text-deep-teal transition-colors duration-300 line-clamp-2 mb-2"> {/* Updated colors */}
                            {relatedPost.title}
                          </h4>
                          <div className="text-xs text-light-steel-blue"> {/* Updated colors */}
                            {relatedPost.readTime}
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>

                {/* Newsletter CTA */}
                <div className="bg-gradient-to-br from-deep-teal to-golden-ochre rounded-2xl p-6 text-white"> {/* Updated colors */}
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-deep-teal/5 to-golden-ochre/5"> {/* Updated colors */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal-gray mb-4"> {/* Updated colors */}
            Need Expert POSH Guidance?
          </h2>
          <p className="text-lg text-light-steel-blue mb-8"> {/* Updated colors */}
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