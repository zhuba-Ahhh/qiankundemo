import { defineConfig, PluginOption } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import qiankun from 'vite-plugin-qiankun'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'http://localhost:4006/',
  server: {
    port: 4006,
    cors: true,
    origin: 'http://localhost:4006',
  },
  plugins: [
    vue(),
    jsx(),
    qiankun('vue-tsx', {
      useDevMode: true,
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ] as PluginOption[],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
