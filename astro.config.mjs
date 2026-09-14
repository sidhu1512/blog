// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import { remarkCallouts } from './src/plugins/remark-callouts.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://sidhu1512.github.io', 
  base: '/blog',
  integrations: [mdx(), sitemap()],
  // Preload pages on hover/touch for near-instant navigation
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  devToolbar: { enabled: false },
  markdown: {
    remarkPlugins: [remarkCallouts, remarkMath],
    rehypePlugins: [
      [
        rehypeKatex,
        {
          throwOnError: false,
          output: 'html',
        },
      ],
    ],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: true,
    },
  },
});