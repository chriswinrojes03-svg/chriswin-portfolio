import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Relative paths so the build works on GitHub Pages under /<repo>/ (any repo name).
  base: "./",
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
});
