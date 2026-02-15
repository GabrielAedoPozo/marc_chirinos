// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://GabrielAedoPozo.github.io',
  base: '/marc_chirinos/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
