import { defineConfig } from "vite"
import VueHandler from "@vitejs/plugin-vue"
import path from "path"

export default defineConfig({
  plugins: [
    VueHandler()
  ],
  test: {
    environment: "jsdom",
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    coverage: {
      provider: "istanbul"
    }
  },
})