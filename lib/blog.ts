import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  contentHtml?: string; // For fully processed content
  contentMarkdown?: string; // For raw markdown if needed elsewhere
}

export function getSortedPostsData(): BlogPost[] {
  // Get file names under /content/blog
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as {
        title: string;
        date: string;
        excerpt: string;
        author: string;
        readTime: string;
        category: string;
        image: string;
        tags: string[];
      }),
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(id: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // For content, we'll pass the raw markdown and let react-markdown handle it in the component
  // or, if using remark/rehype for server-side processing:
  // const processedContent = await remark().use(html).process(matterResult.content);
  // const contentHtml = processedContent.toString();

  return {
    id,
    contentMarkdown: matterResult.content,
    ...(matterResult.data as {
      title: string;
      date: string;
      excerpt: string;
      author: string;
      readTime: string;
      category: string;
      image: string;
      tags: string[];
    }),
  };
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}
