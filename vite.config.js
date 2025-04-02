import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginSitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginSitemap({
      hostname: 'https://maragonesateixeira.com.br',
      outDir: 'dist',
      sitemapFilename: 'sitemap-com.xml', 
      urls: [
        { url: '/', changefreq: 'daily', priority: 1.0 },
      ],
    }),
    vitePluginSitemap({
      hostname: 'https://maragonesateixeira.adv.br',
      outDir: 'dist',
      sitemapFilename: 'sitemap-adv.xml',
      urls: [
        { url: '/', changefreq: 'daily', priority: 1.0 },
      ],
    }),
  ],
  base: '/',
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
