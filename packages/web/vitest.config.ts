/// <reference types="vitest"/>
/// <reference types="vite/client"/>

import { defineConfig } from "vitest/config";

export default defineConfig({
  build: {
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["vitest-setup.ts"],
    clearMocks: true,
    testTimeout: 20000,
  },
});
