import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://wishesmadeclear.com',
  output: 'static',
  adapter: netlify(),
});
