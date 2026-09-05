/**
 * Remark plugin to:
 * 1. Transform GitHub-style callouts into styled HTML blockquotes
 * 2. Normalize markdown image URLs so they are automatically prefixed with the site's base URL (/blog/)
 */
import { visit } from 'unist-util-visit';

const CALLOUT_TYPES = {
  NOTE: { title: 'Note', class: 'callout-note' },
  TIP: { title: 'Tip', class: 'callout-tip' },
  WARNING: { title: 'Warning', class: 'callout-warning' },
  IMPORTANT: { title: 'Important', class: 'callout-important' },
  CAUTION: { title: 'Caution', class: 'callout-warning' },
};

export function remarkCallouts() {
  return (tree) => {
    // 1. Transform Callouts
    visit(tree, 'blockquote', (node) => {
      const firstChild = node.children?.[0];
      if (!firstChild || firstChild.type !== 'paragraph') return;

      const firstTextNode = firstChild.children?.[0];
      if (!firstTextNode || firstTextNode.type !== 'text') return;

      const match = firstTextNode.value.match(/^\[!(NOTE|TIP|WARNING|IMPORTANT|CAUTION)\]\s*/i);
      if (!match) return;

      const type = match[1].toUpperCase();
      const config = CALLOUT_TYPES[type];
      if (!config) return;

      firstTextNode.value = firstTextNode.value.slice(match[0].length);

      if (!firstTextNode.value) {
        firstChild.children.shift();
      }

      if (firstChild.children.length === 0) {
        node.children.shift();
      }

      node.data = node.data || {};
      node.data.hProperties = node.data.hProperties || {};
      node.data.hProperties.className = `callout ${config.class}`;
      node.data.hProperties['data-callout-type'] = config.title;
    });

    // 2. Normalize Image URLs to respect base path (/blog/)
    visit(tree, 'image', (node) => {
      if (node.url && typeof node.url === 'string') {
        if (!node.url.startsWith('http://') && !node.url.startsWith('https://') && !node.url.startsWith('/blog/')) {
          node.url = `/blog/${node.url.replace(/^\//, '')}`;
        }
      }
    });
  };
}

export default remarkCallouts;
