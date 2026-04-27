---
title: "Hello World: Building a fast blog with Astro"
description: "A deep dive into why I chose Astro, Vanilla CSS, and minimal JS for my new engineering blog."
pubDate: "2026-04-28"
---

Welcome to my new engineering blog. I wanted a place that feels **premium**, loads instantly, and lets me write in Markdown without battling a slow CMS.

## Why Astro?

I looked at Next.js, Hugo, and WordPress. I ultimately chose Astro because it allows me to ship zero JavaScript by default. This makes the site incredibly fast and SEO friendly.

Here is a quick code snippet of how a simple function looks:

```typescript
function calculateThroughput(tokens: number, seconds: number): number {
  return tokens / seconds;
}

console.log(`Throughput: ${calculateThroughput(207, 1)} tok/s`);
```

### The Design

The design is heavily inspired by technical engineering blogs. It features:
- A dark mode aesthetic (`hsl(220, 15%, 8%)` background).
- `Instrument Serif` for headings.
- `Inter` for body text.
- Liquid-glass elements to add depth.

Thanks for reading. Feel free to leave a comment below!
