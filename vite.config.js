import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        menu: resolve(__dirname, 'menu.html'),
        contact: resolve(__dirname, 'contact.html'),
        services: resolve(__dirname, 'services.html'),
        'wedding-catering': resolve(__dirname, 'wedding-catering.html'),
        'corporate-catering': resolve(__dirname, 'corporate-catering.html'),
        'birthday-catering': resolve(__dirname, 'birthday-catering.html'),
        'special-catering': resolve(__dirname, 'special-catering.html'),
        'bulk-catering': resolve(__dirname, 'bulk-catering.html'),
        'curry-catering': resolve(__dirname, 'curry-catering.html'),
        'festival-catering': resolve(__dirname, 'festival-catering.html'),
      },
    },
  },
});
