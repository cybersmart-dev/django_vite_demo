import { defineConfig } from "vite";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/static/",
  resolve: {
    alias: {
      "@": resolve("./static"),
    },
  },
  server: {
    host: '192.168.43.69',
    port: 5173,
    cors: true, // Allow Django to request HMR assets
  },
  build: {
    manifest: "manifest.json",
    outDir: resolve("./static"),
    rollupOptions: {
      input: {
        main: resolve("./assets/js/main.jsx"),
        app: resolve("./assets/js/App.jsx"),
        style: resolve("./assets/css/main.css"),

      },
      output: {
        entryFileNames: "js/[name]-bundle.js",
      },
    },
  },
  plugins: [tailwindcss(), react()],
});
