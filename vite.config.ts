import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/faithful-mirror-labs/",
  },

  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});
