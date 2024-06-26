import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import legacy from "@vitejs/plugin-legacy";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: "jsdom",
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ja: resolve(__dirname, "ja/index.html"),
      },
    },
  },
  plugins: [
    react({
      plugins: [
        ["@swc-jotai/react-refresh", {}],
        ["@swc-jotai/debug-label", {}],
      ],
    }),
    tsconfigPaths(),
    // A little silly but added to support older browsers, especially because of
    // using Array.toSpliced() which is an ES2023 feature.
    legacy({ targets: ["defaults", "not IE 11"] }),
  ],
  worker: {
    plugins: () => [tsconfigPaths()],
  },
});
