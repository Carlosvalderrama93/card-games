// vite.config.js
import { defineConfig } from "file:///home/carlos/Documents/Development/card-games/node_modules/vite/dist/node/index.js";
import react from "file:///home/carlos/Documents/Development/card-games/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"]
      }
    })
  ],
  test: { environment: "happy-dom" }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9jYXJsb3MvRG9jdW1lbnRzL0RldmVsb3BtZW50L2NhcmQtZ2FtZXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2Nhcmxvcy9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvY2FyZC1nYW1lcy92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9jYXJsb3MvRG9jdW1lbnRzL0RldmVsb3BtZW50L2NhcmQtZ2FtZXMvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KHtcbiAgICAgIGpzeEltcG9ydFNvdXJjZTogXCJAZW1vdGlvbi9yZWFjdFwiLFxuICAgICAgYmFiZWw6IHtcbiAgICAgICAgcGx1Z2luczogW1wiQGVtb3Rpb24vYmFiZWwtcGx1Z2luXCJdLFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgdGVzdDogeyBlbnZpcm9ubWVudDogXCJoYXBweS1kb21cIiB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlULFNBQVMsb0JBQW9CO0FBQ3RWLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsTUFDSixpQkFBaUI7QUFBQSxNQUNqQixPQUFPO0FBQUEsUUFDTCxTQUFTLENBQUMsdUJBQXVCO0FBQUEsTUFDbkM7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxNQUFNLEVBQUUsYUFBYSxZQUFZO0FBQ25DLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==