import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@features": path.resolve(__dirname, "./src/features"),
    },
  },
  build: {
    sourcemap: false, // Disable sourcemaps for production
    target: "esnext", // Optimize for modern browsers
    cssCodeSplit: true, // Split CSS into separate files
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Split vendor files
          }
        },
      },
    },
  },
});
