import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({

  site: 'https://ncofresh.github.io', 
  base: '/fiestas-arobes/',             
  output: 'static',                      

  integrations: [tailwind()]
});