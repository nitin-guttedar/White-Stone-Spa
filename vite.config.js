import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,
    host: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
        contact: resolve(__dirname, 'contact.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        blogs: resolve(__dirname, 'blogs.html'),
        aroma: resolve(__dirname, 'aroma-massage.html'),
        balinese: resolve(__dirname, 'balinese-massage.html'),
        couple: resolve(__dirname, 'couple-massage-and-spa.html'),
        deeptissue: resolve(__dirname, 'deep-tissue-massage.html'),
        fullbody: resolve(__dirname, 'full-body-spa-and-massage.html'),
        hotstone: resolve(__dirname, 'hot-stone-massage.html'),
        jacuzzi: resolve(__dirname, 'jacuzzi-massage-and-spa.html'),
        signature: resolve(__dirname, 'signature-massage.html'),
        steam: resolve(__dirname, 'steam-bath.html'),
        swedish: resolve(__dirname, 'swedish-massage.html'),
        thai: resolve(__dirname, 'thai-spa-and-massage.html'),
      },
    },
  },
});
