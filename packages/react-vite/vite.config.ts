import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import qiankun from "vite-plugin-qiankun";

// https://vitejs.dev/config/
export default defineConfig({
  base: "http://localhost:4002/",
  server: {
    port: 4002,
    cors: true,
    origin: "http://localhost:4002",
  },
  plugins: [
    // react(),
    qiankun("react-vite", {
      useDevMode: true,
    }),
  ],
});
