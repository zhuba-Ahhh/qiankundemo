// vite.config.ts
import { defineConfig } from "file:///Users/yanwenjun/My/workplace/qiankundemo/node_modules/.pnpm/vite@4.4.5_@types+node@16.18.38_sass@1.66.1/node_modules/vite/dist/node/index.js";
import { fileURLToPath, URL } from "node:url";
import vue from "file:///Users/yanwenjun/My/workplace/qiankundemo/node_modules/.pnpm/@vitejs+plugin-vue@4.3.4_vite@4.4.9_vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import qiankun from "file:///Users/yanwenjun/My/workplace/qiankundemo/node_modules/.pnpm/vite-plugin-qiankun@1.0.15_typescript@5.0.2_vite@4.4.5/node_modules/vite-plugin-qiankun/dist/index.js";
import AutoImport from "file:///Users/yanwenjun/My/workplace/qiankundemo/node_modules/.pnpm/unplugin-auto-import@0.16.6_rollup@2.79.1/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///Users/yanwenjun/My/workplace/qiankundemo/node_modules/.pnpm/unplugin-vue-components@0.25.2_rollup@2.79.1_vue@3.3.4/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver } from "file:///Users/yanwenjun/My/workplace/qiankundemo/node_modules/.pnpm/unplugin-vue-components@0.25.2_rollup@2.79.1_vue@3.3.4/node_modules/unplugin-vue-components/dist/resolvers.mjs";
var __vite_injected_original_import_meta_url = "file:///Users/yanwenjun/My/workplace/qiankundemo/packages/vue-vite/vite.config.ts";
var vite_config_default = defineConfig({
  base: "http://localhost:4004/",
  server: {
    port: 4004,
    cors: true,
    origin: "http://localhost:4004"
  },
  plugins: [
    vue(),
    qiankun("vue-vite", {
      useDevMode: true
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMveWFud2VuanVuL015L3dvcmtwbGFjZS9xaWFua3VuZGVtby9wYWNrYWdlcy92dWUtdml0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3lhbndlbmp1bi9NeS93b3JrcGxhY2UvcWlhbmt1bmRlbW8vcGFja2FnZXMvdnVlLXZpdGUvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3lhbndlbmp1bi9NeS93b3JrcGxhY2UvcWlhbmt1bmRlbW8vcGFja2FnZXMvdnVlLXZpdGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSBcIm5vZGU6dXJsXCI7XG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcbmltcG9ydCBxaWFua3VuIGZyb20gXCJ2aXRlLXBsdWdpbi1xaWFua3VuXCI7XG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tIFwidW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZVwiO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGVcIjtcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBiYXNlOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwNC9cIixcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogNDAwNCxcbiAgICBjb3JzOiB0cnVlLFxuICAgIG9yaWdpbjogXCJodHRwOi8vbG9jYWxob3N0OjQwMDRcIixcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIHFpYW5rdW4oXCJ2dWUtdml0ZVwiLCB7XG4gICAgICB1c2VEZXZNb2RlOiB0cnVlLFxuICAgIH0pLFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICB9KSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXG4gICAgfSksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IGZpbGVVUkxUb1BhdGgobmV3IFVSTChcIi4vc3JjXCIsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVcsU0FBUyxvQkFBb0I7QUFDaFksU0FBUyxlQUFlLFdBQVc7QUFDbkMsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sYUFBYTtBQUNwQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQU4wTCxJQUFNLDJDQUEyQztBQVMvUSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osUUFBUSxZQUFZO0FBQUEsTUFDbEIsWUFBWTtBQUFBLElBQ2QsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
