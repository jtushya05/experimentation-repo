// app/blog/[slug]/layout.tsx
import { Metadata } from 'next';
// Assuming getPostData and PostData (if needed for type) are correctly pathed
// The original page.tsx used: import { getPostData, PostData } from '../../../lib/blog';
// Adjust path if lib/blog.ts is at a different relative location from app/blog/[slug]/
import { getPostData } from '../../../lib/blog';

// Define a props type for generateMetadata if params are used and typed
interface BlogPostLayoutParams { // Changed name from BlogPostPageProps to avoid confusion
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostLayoutParams): Promise<Metadata> {
  try {
    // getPostData might return the full PostData object or just enough for metadata
    const post = await getPostData(params.slug);
    if (!post) {
      return {
        title: 'Post Not Found - Secura Compliances',
      };
    }

    return {
      title: `${post.title} - Secura Compliances Blog`,
      description: post.excerpt,
      // Ensure post.tags is an array before calling join
      keywords: post.tags && Array.isArray(post.tags) ? post.tags.join(', ') : undefined,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        authors: post.author ? [post.author] : undefined, // Ensure author exists
        images: post.image ? [post.image] : undefined, // Ensure image exists
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: post.image ? [post.image] : undefined, // Ensure image exists
      },
    };
  } catch (error) {
    console.error(`Error generating metadata for slug ${params.slug}:`, error);
    return {
      title: 'Error loading post - Secura Compliances Blog', // More generic error title
      description: 'There was an error generating metadata for this blog post.',
    };
  }
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>; // This is a simple layout, just passing children through.
}
