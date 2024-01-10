import path from "path";
import { defineConfig } from "vite";
import pugPlugin from "vite-plugin-pug";

export default defineConfig({
  root: "src",
  build: {
    outDir: path.join(__dirname, "dist"),
  },

  plugins: [pugPlugin()],
});
