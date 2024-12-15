// @ts-check
import { defineConfig } from 'astro/config';

import db from '@astrojs/db';

import mdx from '@astrojs/mdx';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import netlify from '@astrojs/netlify';
// https://astro.build/config
export default defineConfig({
  integrations: [db(), mdx(), tailwind(), icon(),],
  adapter: netlify(),
  
});