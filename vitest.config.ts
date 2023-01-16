/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    include: ["src/**/*.{spec,test}.ts"],
    coverage: {
      reporter: ["text", "html", "lcov"],
    },
  },
});
