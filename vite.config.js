import path from "path"
import fs from "fs"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

const BUILD_DOC = process.env.BUILD_DOC === "true";
const BUILD_LIB = !BUILD_DOC;

const pkg = JSON.parse(fs.readFileSync("./package.json", "utf8"))

const buidDocConfig = {
  rollupOptions: {
    input: "example/index.html"
  }
}

const buidLibConfig = {
  lib: {
    entry: "./src/index.ts",
    formats: ["es"]
  },
  outDir: "./dist"
}

const plugins = [vue()];
if (BUILD_LIB) plugins.push(
  viteIgnoreStaticImport([
    "plotly.js-dist-min",
    "vue",
    "@vueuse/core"
  ])
);

export default defineConfig({
  define: {
    "$PKG_NAME": JSON.stringify(pkg.name),
    "$PKG_VERSION": JSON.stringify(pkg.version)
  },
  plugins,
  build: {
    sourcemap: true,
    ...( BUILD_DOC ? buidDocConfig : buidLibConfig )
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8000
  }
});

// https://github.com/vitejs/vite/issues/6393#issuecomment-1006819717
function viteIgnoreStaticImport(importKeys) {
  return {
    name: "vite-plugin-importmap",
    enforce: "pre",
    // 1. insert to optimizeDeps.exclude to prevent pre-transform
    config(config) {
      config.optimizeDeps = {
        ...(config.optimizeDeps ?? {}),
        exclude: [...(config.optimizeDeps?.exclude ?? []), ...importKeys],
      };
    },
    // 2. push a plugin to rewrite the 'vite:import-analysis' prefix
    configResolved(resolvedConfig) {
      const VALID_ID_PREFIX = `/@id/`;
      const reg = new RegExp(
        `${VALID_ID_PREFIX}(${importKeys.join("|")})`,
        "g"
      );
      resolvedConfig.plugins.push({
        name: "vite-plugin-importmap-replace-idprefix",
        transform: (code) =>
          reg.test(code) ? code.replace(reg, (m, s1) => s1) : code,
      });
    },
    // 3. rewrite the id before 'vite:resolve' plugin transform to 'node_modules/...'
    resolveId: (id) => {
      if (importKeys.includes(id)) {
        return { id, external: true };
      }
    },
  };
}
