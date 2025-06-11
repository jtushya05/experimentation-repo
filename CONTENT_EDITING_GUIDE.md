# Content Editing Guide: Secura Compliances Blog

This guide explains how to add and edit blog posts for the Secura Compliances website.

**Important Note:** Currently, blog posts are managed directly within the website's source code. This process requires familiarity with JavaScript arrays and objects. For a more user-friendly Markdown file-based system (as originally envisioned in the PRD), the blog functionality would need to be refactored.

## Locating the Blog Post Data

Blog post data is stored as an array of JavaScript objects named `blogPosts`. This array is duplicated and needs to be updated in **two separate files**:

1.  `app/blog/[slug]/page.tsx`
2.  `app/blog/page.tsx`

You must ensure that any changes are identically made in both files to maintain consistency.

## Blog Post Structure

Each blog post is an object within the `blogPosts` array with the following structure:

```javascript
{
  id: 'unique-slug-for-the-post', // Used in the URL, e.g., /blog/unique-slug-for-the-post
  title: 'Full Title of the Blog Post',
  excerpt: 'A short summary or introduction of the post (around 1-2 sentences). This is used for previews and SEO.',
  content: `Multi-line string containing the main content of the blog post. See "Content Formatting" section below.`,
  author: 'Author Name',
  date: 'YYYY-MM-DD', // Publication date
  readTime: 'X min read', // Estimated reading time
  category: 'Category Name', // e.g., 'Legal & Compliance', 'Culture & Training'
  image: 'URL_to_a_featured_image', // e.g., 'https://example.com/images/my-post-image.jpg'
  tags: ['tag1', 'tag2', 'relevant-keyword'] // Array of strings for tags/keywords
}
```

## Adding a New Blog Post

1.  **Open both files:**
    *   `app/blog/[slug]/page.tsx`
    *   `app/blog/page.tsx`
2.  **Navigate to the `blogPosts` array** in each file.
3.  **Add a new JavaScript object** to the array, following the structure described above. Ensure the `id` is unique.
    *Example:*
    ```javascript
    // ... existing posts
    {
      id: 'my-new-article',
      title: 'My New Article Title',
      excerpt: 'This is a brief overview of my new article.',
      content: `## My First Heading
    This is the first paragraph of content.

    ### A Subheading
    - This is a list item.
    - Another list item.

    This is more text after the list.`,
      author: 'Your Name',
      date: '2024-03-15',
      readTime: '5 min read',
      category: 'New Category',
      image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1200', // Replace with actual image URL
      tags: ['new', 'article', 'testing']
    },
    // ... other existing posts if adding in the middle
    ```
4.  **Save both files.**

## Editing an Existing Blog Post

1.  **Open both files:**
    *   `app/blog/[slug]/page.tsx`
    *   `app/blog/page.tsx`
2.  **Navigate to the `blogPosts` array** in each file.
3.  **Find the JavaScript object** for the post you want to edit (you can search by `id` or `title`).
4.  **Modify the desired fields** (e.g., `title`, `content`, `image`, etc.).
5.  **Save both files.**

## Content Formatting (Pseudo-Markdown)

The `content` field uses a simplified, custom formatting approach. It's not full Markdown. Supported elements:

*   **Paragraphs:** Separate paragraphs with a double newline (pressing Enter twice).
*   **Headings:**
    *   `## Heading Level 2`: Creates a large heading.
    *   `### Heading Level 3`: Creates a medium heading.
*   **Lists:** Create a bulleted list by starting each line with `- ` (a hyphen followed by a space). All list items must be in a contiguous block.

*Example of `content` string:*
```javascript
`## Main Section Title
This is the introductory paragraph for this section. It can span multiple lines if needed, but ensure it's part of the same backtick-enclosed string.

This is another paragraph.

### Subsection Details
- First item in the list.
- Second item in the list.
- Third item, continuing the discussion.

Another paragraph following the list, providing more details or concluding thoughts.`
```

**Unsupported Markdown:** Standard Markdown for bold (`**bold**` or `__bold__`), italics (`*italic*` or `_italic_`), links (`[text](url)`), inline code (`\`code\``), code blocks (triple backticks), blockquotes (`> quote`), and more complex elements are **not currently supported** by the `formatContent` function. To include these, the function in `app/blog/[slug]/page.tsx` would need to be updated, or a proper Markdown rendering library should be implemented.

## SEO and Open Graph Metadata

The following fields from the blog post object are used to generate metadata for SEO and social sharing (Open Graph/Twitter Cards):

*   `title`: Used for the page title and `og:title`.
*   `excerpt`: Used for the meta description, `og:description`.
*   `tags`: Joined into a string for meta keywords.
*   `image`: Used for `og:image` and `twitter:image`.
*   `author`: Used in `og:article:author`.
*   `date`: Used in `og:article:published_time`.

Ensure these fields are filled accurately for each post.

---

This documentation reflects the blog system as of 2024-07-26. If the blog system is updated to use external Markdown files, this guide will need to be revised.
```
