import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import pugPlugin from "vite-plugin-pug";

export default defineConfig({
  root: "src",
  build: {
    outDir: path.join(__dirname, "dist"),
  },

  plugins: [pugPlugin()],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL(path.join(__dirname, "src"), import.meta.url)),
    },
  },
});
