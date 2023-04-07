import path from "path"
import fs from "fs"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

const pkg = JSON.parse(fs.readFileSync("./package.json", "utf8"))

const buidDocConfig = {
  rollupOptions: {
    input: "example/index.html"
  }
}

const buidLibConfig = {
  rollupOptions: {
    input: "src/index.ts"
  },
  lib: {
    entry: "./src/index.ts",
    formats: ["es"]
  },
  outDir: "./dist"
}

export default defineConfig({
  define: {
    PKG_NAME: JSON.stringify(pkg.name),
    PKG_VERSION: JSON.stringify(pkg.version),
  },
  plugins: [vue()],
  build: {
    ...( process.env.BUILD_DOC === "true" ? buidDocConfig : buidLibConfig )
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
