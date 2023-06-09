import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import vueMacros from 'unplugin-vue-macros/vite';
import inspect from 'vite-plugin-inspect';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueMacros({
      plugins: {
        vue: vue(),
      },
    }),
    inspect(),
  ],
});
