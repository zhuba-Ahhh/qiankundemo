import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import qiankun from "vite-plugin-qiankun";

// https://vitejs.dev/config/
export default defineConfig({
  base: "http://localhost:5174/",
  server: {
    port: 5174,
    cors: true,
    origin: "http://localhost:5174",
  },
  plugins: [
    // react(),
    qiankun("react-vite", {
      useDevMode: true,
    }),
  ],
});
