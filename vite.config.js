import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Various_elements/", // Додаємо базовий шлях для GitHub Pages
  build: {
    sourcemap: true,
  },
});
