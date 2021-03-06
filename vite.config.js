import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ["favicon.png"],
      manifest: {
        name: "PetGram",
        short_name: "PetGram",
        description: "The animals more fantastics of internet",
        theme_color: "#FFFFFF",
        icons: [
          {
            src: "favivon.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "favivon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
