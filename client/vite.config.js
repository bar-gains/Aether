import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    host: true, // Listen on all addresses
    port: 5173,
    strictPort: true, // Exit if port is in use
    hmr: {
      // Enable HMR for GitHub Codespaces
      clientPort: 443,
      protocol: "wss",
      host: process.env.CODESPACE_NAME
        ? `${process.env.CODESPACE_NAME}-5173.app.github.dev`
        : "localhost",
    },
    proxy: {
      "/health": "http://localhost:3000",
      "/prompt": "http://localhost:3000",
      "/override": "http://localhost:3000",
      "/preview": "http://localhost:3000",
      "/export": "http://localhost:3000",
      // All backend endpoints proxied to Express server
    },
    fs: {
      strict: true,
      allow: [".."], // Allow serving files from one level up
    },
    headers: {
      // Ensure proper MIME types for Svelte files
      "*.svelte": {
        "Content-Type": "application/javascript",
      },
    },
  },
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".svelte"],
  },
  optimizeDeps: {
    include: ["svelte"],
  },
});
