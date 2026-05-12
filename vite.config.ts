import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import prerender from 'vite-plugin-prerender-static';
import {generateSEOTags} from 'spa-prerender-static';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(),
      tailwindcss(),
      prerender({
        routes: [
          {
            path: '/',
            tags: {
              title: '528 Royal Care | Premier Food & Beverage Franchise Holding Company',
              description: '528 Royal Care is a premier holding company managing successful food and beverage franchises including I AM MILKTEA, 517 Bakery, and Xander\'s Lechon.',
              url: 'https://528royalcare.com/',
            },
          },
          {
            path: '/i-am-milktea',
            tags: {
              title: 'I AM MILKTEA | Premium Milktea & Fresh Breads in Urdaneta City',
              description: 'I AM MILKTEA offers premium milktea and fresh-baked breads in Urdaneta City, Pangasinan.',
              url: 'https://528royalcare.com/i-am-milktea',
            },
          },
          {
            path: '/517-bakery',
            tags: {
              title: 'New Creation 517 Bakery | 26 Branches Across Abra, Pangasinan & Mindoro',
              description: 'New Creation 517 Bakery offers custom cakes, bibingka, and fresh-baked goods across 26 branches.',
              url: 'https://528royalcare.com/517-bakery',
            },
          },
          {
            path: '/xanders-roasted',
            tags: {
              title: 'Xander\'s Lechon & Meals On-The-Go | Fresh Roasted Lechon Manok in Calapan City',
              description: 'Xander\'s Lechon serves freshly roasted Lechon Manok, Pork Liempo, and rice meals in Calapan City.',
              url: 'https://528royalcare.com/xanders-roasted',
            },
          },
          {
            path: '/franchise-opportunities',
            tags: {
              title: 'Franchise Opportunities | Partner with 528 Royal Care',
              description: 'Partner with 528 Royal Care and build a profitable business with proven food & beverage franchise brands.',
              url: 'https://528royalcare.com/franchise-opportunities',
            },
          },
          {
            path: '/contact',
            tags: {
              title: 'Contact Us | 528 Royal Care',
              description: 'Get in touch with 528 Royal Care for franchise inquiries, partnerships, or general questions.',
              url: 'https://528royalcare.com/contact',
            },
          },
        ],
        render: (route) => {
          return `<div id="root"></div>`;
        },
        headTags: generateSEOTags({
          title: '528 Royal Care',
          description: 'Premier holding company managing food and beverage franchises.',
          url: 'https://528royalcare.com',
        }),
      }),
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
