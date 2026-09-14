import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

const posts = await getCollection('blog');
const pages = Object.fromEntries(
  posts.map((post) => [post.id, post.data])
);

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  param: 'slug',
  getSlug: (path) => path,
  getImageOptions: (_path, post) => ({
    title: post.title,
    description: post.description,
    bgGradient: [
      [11, 10, 7],
      [48, 40, 18],
    ],
    border: { color: [234, 179, 8], width: 8, side: 'inline-end' },
    font: {
      title: {
        color: [245, 243, 238],
        size: 64,
        families: ['Instrument Serif'],
      },
      description: {
        color: [200, 190, 160],
        size: 40,
        families: ['Inter'],
      },
    },
    fonts: [
      'https://api.fontsource.org/v1/fonts/instrument-serif/latin-400-normal.ttf',
      'https://api.fontsource.org/v1/fonts/inter/latin-600-normal.ttf',
    ],
    padding: 64,
  }),
});