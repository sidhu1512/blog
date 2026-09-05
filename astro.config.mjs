// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import { remarkCallouts } from './src/plugins/remark-callouts.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://sidhu1512.github.io', 
  base: '/blog',
  integrations: [mdx(), sitemap()],
  devToolbar: { enabled: false },
  markdown: {
    remarkPlugins: [remarkCallouts],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: true,
    },
  },
});