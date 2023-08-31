import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";

// https://vitejs.dev/config/
export default defineConfig({
  base: "http://localhost:5173/",
  server: {
    port: 5173,
    cors: true,
    origin: "http://localhost:5173",
  },
  plugins: [
    vue(),
    qiankun("vue-vite", {
      useDevMode: true,
    }),
  ],
});
