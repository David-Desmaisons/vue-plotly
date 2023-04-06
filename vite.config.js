import path from "path"
import fs from "fs"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

const pkg = JSON.parse(fs.readFileSync("./package.json", "utf8"))

export default defineConfig({
  define: {
    PKG_NAME: JSON.stringify(pkg.name),
    PKG_VERSION: JSON.stringify(pkg.version),
  },
  plugins: [vue()],
  build: {
    outDir: "./dist/",
    lib: {
      entry: "./src/index.ts",
      formats: ["es"]
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8000
  }
})
