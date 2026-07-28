import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// Standalone static (HTML/CSS/JS) export of the site — no server required.
// Build with: bunx vite build --config vite.static.config.ts
export default defineConfig({
  base: "./",
  root: path.resolve(process.cwd(), "static-export"),
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(process.cwd(), "src") },
  },
  build: {
    outDir: path.resolve(process.cwd(), "static-site"),
    emptyOutDir: true,
  },
});
