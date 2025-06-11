# Content Editing Guide: Secura Compliances Blog

This guide explains how to add and edit blog posts for the Secura Compliances website using Markdown files.

## Overview

Blog posts are managed as individual Markdown (`.md`) files stored in the `content/blog/` directory within the project. Each file consists of two parts:

1.  **YAML Frontmatter:** A section at the top of the file containing metadata for the post (like title, date, author, etc.).
2.  **Markdown Content:** The main body of the blog post written in standard Markdown.

## Locating Blog Post Files

All blog post Markdown files are located in the `content/blog/` directory in the root of the project.

## Blog Post File Naming

Each blog post should be a new `.md` file in the `content/blog/` directory. The name of the file will determine its URL slug. For example:

*   `my-new-post.md` will be accessible at `/blog/my-new-post`
*   `understanding-the-posh-act.md` will be accessible at `/blog/understanding-the-posh-act`

**Naming Conventions:**
*   Use lowercase letters.
*   Separate words with hyphens (`-`).
*   Keep filenames descriptive and concise.

## Frontmatter Structure

The frontmatter is a YAML block at the very beginning of your Markdown file, enclosed by triple-dashed lines (`---`).

Here's an example of the required and recommended fields:

```yaml
---
title: "Full Title of the Blog Post"
excerpt: "A short summary or introduction (1-2 sentences). Used for blog listing previews and SEO meta descriptions."
date: "YYYY-MM-DD" # Publication date, e.g., "2024-07-28"
author: "Author Name"
category: "Category Name" # e.g., "Legal & Compliance", "Workplace Culture"
image: "/images/blog/your-post-image.jpg" # Path to the featured image (see "Adding Images" section)
readTime: "X min read" # Estimated reading time, e.g., "7 min read"
tags:
  - "Relevant Tag 1"
  - "Keyword 2"
  - "POSH"
# Optional fields for more specific SEO control (if not provided, they may be derived from title/excerpt)
# ogTitle: "Specific Open Graph Title for this post"
# ogDescription: "Specific Open Graph Description for this post"
---
```

**Field Explanations:**

*   `title` (required): The main title of your blog post.
*   `excerpt` (required): A brief summary of the post.
*   `date` (required): The date the post is published. Use `YYYY-MM-DD` format. Posts are sorted by this date on the blog listing page.
*   `author` (required): The name of the post's author.
*   `category` (required): The primary category for the post.
*   `image` (required): The path to the post's featured image. See the "Adding Images" section for details.
*   `readTime` (required): An estimate of how long the post takes to read.
*   `tags` (required): A list of relevant tags or keywords.
*   `ogTitle` (optional): If you want a specific Open Graph title different from the main `title`.
*   `ogDescription` (optional): If you want a specific Open Graph description different from the `excerpt`.

## Writing Content in Markdown

Below the frontmatter, write your blog post using standard Markdown syntax. The website uses a renderer that supports common Markdown features, including:

*   **Headings:** `# Heading 1`, `## Heading 2`, `### Heading 3`, etc.
*   **Paragraphs:** Just type your text. Separate paragraphs with a blank line.
*   **Bold Text:** `**Bold Text**` or `__Bold Text__`
*   **Italic Text:** `*Italic Text*` or `_Italic Text_`
*   **Links:** `[Link Text](https://example.com)`
*   **Lists:**
    *   Unordered (bullet): `- Item 1`, `* Item 1`, `+ Item 1`
    *   Ordered (numbered): `1. First Item`, `2. Second Item`
*   **Blockquotes:** `> This is a blockquote.`
*   **Inline Code:** `` `inline code snippet` ``
*   **Code Blocks (Fenced):**
    ```markdown
    ```javascript
    // This is a JavaScript code block
    function hello() {
      console.log("Hello, world!");
    }
    ```
*   **Images:** `![Alt text for image](/images/blog/your-image-in-content.jpg)` (See "Adding Images")
*   **Horizontal Rules:** `---` or `***`

The styling for these Markdown elements is handled by the `@tailwindcss/typography` plugin and has been customized to match the website's design.

## Adding Images

1.  **Image Storage:** Place all blog post images in the `public/images/blog/` directory. If this directory doesn't exist, create it.
2.  **Referencing Images:**
    *   **Featured Image (in Frontmatter):** Use the path starting with `/images/blog/`. For example: `image: "/images/blog/my-featured-image.png"`
    *   **Images within Content:** Use the same path structure. For example: `![Descriptive alt text](/images/blog/my-content-image.jpg)`

Keep image file sizes optimized for the web to ensure fast page loads.

## Adding a New Blog Post

1.  **Create a new `.md` file** in the `content/blog/` directory (e.g., `my-awesome-post.md`).
2.  **Add the YAML frontmatter** at the top of the file, filling in all required fields.
3.  **Write your blog post content** using Markdown below the frontmatter.
4.  **Add any images** to `public/images/blog/` and reference them correctly.
5.  **Commit and push** the new Markdown file (and any images) to the repository. The website should automatically pick up the new post after deployment.

## Editing an Existing Blog Post

1.  **Locate the Markdown file** for the post you want to edit in the `content/blog/` directory.
2.  **Open the file** in a text editor.
3.  **Modify the frontmatter or Markdown content** as needed.
4.  **Commit and push** your changes. The updates will appear on the website after deployment.

## SEO and Open Graph Metadata

The following frontmatter fields are primarily used for SEO and social sharing:

*   `title`: Used for the page `<title>` tag and `og:title`.
*   `excerpt`: Used for the `meta name="description"` tag and `og:description`.
*   `image`: Used for `og:image` and `twitter:image`.
*   `tags`: Can be used to generate `meta name="keywords"`.
*   `author`: Used for `article:author` Open Graph tag.
*   `date`: Used for `article:published_time` Open Graph tag.

Ensure these are descriptive and accurate for best results. Using the optional `ogTitle` and `ogDescription` fields can provide more targeted text for social sharing.

---

This guide reflects the Markdown-based blog system. If you have questions, refer to Markdown syntax guides or contact the development team.
```
