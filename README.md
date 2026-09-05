# Siddharth's Engineering Blog

A high-performance, dark-themed personal engineering blog designed for deep-dive technical articles, systems explorations, and machine learning notes.

Built with **[Astro](https://astro.build/)** for zero-runtime JavaScript overhead by default, paired with **MDX** for embedded interactive components and rich diagrams.

---

## ⚡ Overview & Features

The site incorporates modern technical reading UX patterns inspired by platforms like **AlgoMaster.io**, **Stripe Engineering**, and **GitHub**:

- **Aesthetic**: Deep dark palette (`#0a0a0a`), warm gold accents (`#eab308`), paired with `Instrument Serif` headings and clean `Inter` body typography.
- **Interactive Code Blocks**: Syntax highlighting via Shiki (`github-dark`), automatic uppercase language badges, and one-click clipboard copy with feedback animation.
- **Callout & Alert Boxes**: Native GitHub-style blockquote alerts (`[!NOTE]`, `[!TIP]`, `[!WARNING]`, `[!IMPORTANT]`) rendered with distinct accents and border styling.
- **Reading Experience**:
  - Sticky Table of Contents with real-time scrollspy active state tracking.
  - Smooth reading progress indicator bar.
  - Clickable heading anchor links (`#`) with instant link copying.
  - Calculated reading time on every post and listing card.
  - Responsive Previous / Next article navigation cards.
  - Social sharing bar (Twitter/X, LinkedIn, Copy Link).
  - Clean breadcrumb trails (`Portfolio / Blog / Article`).
- **SEO & Syndication**: Complete OpenGraph and Twitter card metadata, dynamic `sitemap.xml`, and full RSS feed at `/blog/rss.xml`.
- **Zero-Bloat Performance**: Pure static HTML generation with vanilla JavaScript widgets where needed.

---

## 🏗️ Architecture

```text
blog/
├── public/
│   ├── favicon.svg          # Custom monogram vector favicon
│   └── images/               # Article hero covers and technical diagrams
├── src/
│   ├── components/
│   │   ├── AuthorBio.astro      # Author profile card
│   │   ├── CopyButton.astro     # Code block copy button & language tag
│   │   ├── Footer.astro         # Site footer with RSS and social links
│   │   ├── Header.astro         # Sticky blurred header with nav links
│   │   ├── PostNavigation.astro # Previous / Next post cards
│   │   ├── ProgressBar.astro    # Reading progress bar
│   │   ├── SEO.astro            # Meta and OG tags
│   │   ├── ShareButtons.astro   # Twitter, LinkedIn, copy link bar
│   │   └── interactive/         # Custom interactive widgets
│   ├── content/
│   │   └── blog/                # Markdown and MDX articles
│   ├── layouts/
│   │   └── Layout.astro         # Base HTML document shell
│   ├── pages/
│   │   ├── [...page].astro      # Paginated blog index grid
│   │   ├── [id].astro           # Dynamic article reader page
│   │   ├── about.astro          # Author biography and projects
│   │   └── rss.xml.js           # Automated RSS feed endpoint
│   ├── plugins/
│   │   └── remark-callouts.mjs  # Remark plugin for GitHub-style callouts
│   └── styles/
│       └── global.css           # Global typography, tables, and themes
├── astro.config.mjs             # Astro integrations & Shiki configuration
└── package.json
```

---

## ✍️ Writing Articles

Articles live in `src/content/blog/` as either standard `.md` or interactive `.mdx` files.

### Frontmatter Template

```yaml
---
title: "Transformers: From Understanding Language to Generating Text"
description: "A comprehensive, intuitive deep dive into the Transformer architecture—from tokenization and self-attention to causal masking and cross-attention."
pubDate: "2026-05-04"
heroImage: "/images/encoder-decoder.png"
tags: ["ai", "deep-learning", "transformers", "nlp"]
---
```

### Supported Markdown Extras

- **Alerts**:
  ```markdown
  > [!NOTE]
  > Key intuition or background context.

  > [!TIP]
  > Practical implementation tip.

  > [!WARNING]
  > Common pitfall or performance warning.

  > [!IMPORTANT]
  > Critical architectural takeaway.
  ```

- **Interactive Components (`.mdx`)**:
  ```jsx
  import AttentionMatrix from '../../components/interactive/AttentionMatrix.astro';

  <AttentionMatrix />
  ```

---

## 🛠️ Local Development

Ensure **Node.js >= 22.12.0** is installed:

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build static production bundle to /dist
npm run build

# Preview production build locally
npm run preview
```

---

## 🚀 Deployment

The repository uses GitHub Actions (`.github/workflows/deploy.yml`) to automatically compile and deploy static assets to GitHub Pages upon pushing to `main`.
