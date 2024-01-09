import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: path.join(__dirname, "dist"),
  },
});
