import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "PetGram",
        short_name: "PetGram",
        description: "The animals more fantastics of internet",
        theme_color: "#FFFFFF",
        icons: [
          {
            src: "favivon.svg",
            sizes: "512x512",
            type: "image/svg",
          },
          {
            src: "favivon.svg",
            sizes: "512x512",
            type: "image/svg",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  build: {
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@apollo/client/utilities/graphql/directives.js",
        "graphql-tag/lib/index.js",
      ],
    },
  },
  optimizeDeps: {
    include: [
      "@apollo/client/core",
      "@apollo/client/link/error",
      "react-icons",
    ],
  },
});
