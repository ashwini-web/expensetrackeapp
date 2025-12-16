
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
               changeOrigin: true,
        // if your backend expects /api prefix, keep it;
        // if it expects just /, uncomment the next line:
        // rewrite: (path) => path.replace(/^\/api/, "")
      },
    },
  },
});
