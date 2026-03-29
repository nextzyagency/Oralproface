// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://nextzyagency.github.io',
  base: '/oralproface',
  vite: {
    plugins: [tailwindcss()]
  }
});