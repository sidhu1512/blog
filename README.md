# 🚀 Siddharth's Engineering Blog: Operations Manual

Welcome to your staff-level engineering blog! This site is built on **Astro** for extreme performance. By default, it ships **zero-JavaScript** (saving massive amounts of bandwidth) while fully supporting dynamic **MDX** (Markdown + JSX) so you can embed custom interactive components.

This document serves as your complete guide to managing, writing, and deploying content on your blog.

---

## 📝 1. Writing a New Blog Post

All of your blog posts live inside the `src/content/blog/` directory.

### Step 1: Create the File
Create a new file in that directory.
- Use `.md` for a standard Markdown post.
- Use `.mdx` if you plan to embed interactive UI components.

### Step 2: The Frontmatter
At the very top of your file, you must include the metadata (Frontmatter) block. This defines the title, SEO description, date, and cover image.

```mdx
---
title: "Scaling Distributed Systems: Patterns and Anti-Patterns"
description: "A deep dive into load balancing, backpressure, and the architectural patterns required to survive traffic spikes."
pubDate: "2026-04-28"
heroImage: "/images/cover_architecture.png"
---
```
*Note: If you omit `heroImage`, the system will automatically display a premium, dark-mode abstract geometric fallback pattern on the blog cards.*

### Step 3: Writing Content
You can write using standard Markdown syntax below the frontmatter:
- Use `#` for the main title (though the template handles this automatically, so start with `##`).
- Use `##` for major sections.
- Use `###` for sub-sections.

> **💡 Table of Contents Automagic**: Every time you write a `##` or `###` heading, it is **automatically extracted** and placed into the sticky right-hand Table of Contents sidebar. Furthermore, the built-in **Scrollspy** script will track the reader's scroll position and highlight the active heading in the TOC!

---

## 🖼️ 2. Images & Media

To keep things organized and ensure fast loading times:
1. Place all your raw images, gifs, and diagrams into the `public/images/` folder.
2. Inside your markdown file, reference them using absolute paths starting from the root:

```markdown
![My architecture diagram](/images/my-diagram.jpg)
```

---

## ⚡ 3. Advanced Interactive Components (MDX)

Your blog is configured to handle complex, interactive technical articles. Instead of static images, you can build living widgets.

### How to embed a component:
1. Build your component inside `src/components/interactive/`. Use standard HTML/CSS and Vanilla JS inside a `<script>` tag to keep it blazing fast.
2. At the top of your `.mdx` file (just below the frontmatter), import the component:

```mdx
import SystemDiagram from '../../components/interactive/SystemDiagram.astro';
```

3. Render it anywhere in your text like an HTML tag:

```mdx
Here is a live simulation of a traffic spike:
<SystemDiagram />
```

**Check out your existing components for inspiration:**
- `BandwidthChart.astro` (Animated bar charts)
- `MemoryWidget.astro` (Real-time tracking gauges)
- `HardwareToggle.astro` (Interactive specification tables)
- `SystemDiagram.astro` (Live microservice traffic simulation)

---

## 💻 4. Local Development

When you want to write a new post or test a new component, run the local development server:

```bash
npm run dev
```
Open your browser to `http://localhost:4321/blog` to see your changes instantly.

---

## 🚀 5. Deployment & CI/CD

Your blog is fully hooked up to a continuous deployment pipeline.

You **never** have to build or deploy manually. The repository is configured with a GitHub Actions workflow (`.github/workflows/deploy.yml`). 

Whenever you finish writing a blog post:
1. Commit your changes.
2. Push to the `main` branch.

```bash
git add .
git commit -m "Wrote new blog post on low-level computing"
git push origin main
```

Within 60 seconds, GitHub Actions will compile your markdown into static HTML, generate your `sitemap.xml` for Google SEO, and deploy the live site to: **https://sidhu1512.github.io/blog**
