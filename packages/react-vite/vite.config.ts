import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import qiankun from "vite-plugin-qiankun";

const isPord = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  base: "http://localhost:4002/",
  server: {
    port: 4002,
    cors: true,
    origin: "http://localhost:4002",
  },
  plugins: [
    ...(isPord ? [react()] : []),
    qiankun("react-vite", {
      useDevMode: true,
    }),
  ] as PluginOption[],
  optimizeDeps: {
    include: ["antd"], // 添加需要优化的依赖模块名称
  },
});
