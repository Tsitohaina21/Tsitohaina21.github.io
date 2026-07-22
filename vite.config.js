import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuration Vite : plugin React + build optimisé pour la production
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
