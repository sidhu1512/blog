# Your Engineering Blog - Usage Guide

Welcome to your new, high-performance, staff-level engineering blog! It is built with **Astro**, meaning it ships zero-javascript by default while supporting incredibly advanced interactive markdown (MDX).

## How to Write a New Blog Post

1. Navigate to the `src/content/blog/` folder.
2. Create a new `.md` or `.mdx` file. (Use `.mdx` if you want to embed interactive React/Vanilla JS components).
3. Add the "Frontmatter" at the top of the file. This tells the blog what the title, date, and cover image are.

Example:
```mdx
---
title: "My New Engineering Post"
description: "A short summary of what this post is about."
pubDate: "2026-05-01"
heroImage: "/images/cover_ai_1777318583387.png"
---

# The beginning of my post...
You can write standard markdown here!

## Sub-headings
Notice that if you use `##` or `###`, they will **automatically appear in the Table of Contents** on the right sidebar!
```

## Adding Images

1. Place your raw images inside the `public/images/` folder.
2. Inside your markdown file, reference them using standard markdown syntax, starting with `/images/`:
   `![My image description](/images/my-image.jpg)`

## Interactive Components (MDX)

Because your blog supports MDX, you can write custom HTML, CSS, or interactive Javascript components and inject them directly into your text.

1. Create an `.astro` component (e.g., `src/components/interactive/MyChart.astro`).
2. Import it into your `.mdx` blog post:
   `import MyChart from '../../components/interactive/MyChart.astro';`
3. Use it like an HTML tag:
   `<MyChart />`

## Deployment

To deploy this site to GitHub Pages:
1. Initialize a Git repository in this folder and push it to a new GitHub repo.
2. Set your repository's GitHub Pages settings to deploy from GitHub Actions.
3. Follow the Astro guide to add the `.github/workflows/deploy.yml` file.
