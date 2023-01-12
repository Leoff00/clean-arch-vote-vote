/// <reference types="vitest" />

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.{spec,test}.ts"],
    coverage: {
      reporter: ["text", "html", "lcov"],
    },
  },
});
