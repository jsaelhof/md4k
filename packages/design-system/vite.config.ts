import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, "src/index.ts"),
        // Below is what works to make a separate build for each component. Need individual exports in package.json too. But it doesn't work with yarn workspaces...the web package can't get to them.
        // tooltip: path.resolve(__dirname, "src/components/tooltip/index.tsx"),
        // button: path.resolve(__dirname, "src/components/button/index.tsx"),
      },
      formats: ["es"],
      name: "Design System",
      //fileName: (format) => `a.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [
    react(),
    // Generate the .d.ts for tge lib.
    dts({
      insertTypesEntry: true,
    }),
  ],
});
