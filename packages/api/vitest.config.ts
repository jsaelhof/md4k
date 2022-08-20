/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  test: {
    globals: true,
    environment: "node",
  },
});
