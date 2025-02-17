import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import * as path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Pages(),
    Layouts(),
    Components({
      dts: true,
    }),
    Icons(),
    AutoImport({
      include: [
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      imports: ['vue', 'vue-router'],
      eslintrc: {
        enabled: true,
      },
      dirs: [
        './src/composables/**',
      ]
    }),
    Unocss(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '~', replacement: path.resolve(__dirname, './src') },
    ],
  },
  server: {
    fs: {
      allow: ['.'],
    },
  },
})
