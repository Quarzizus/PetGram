import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".mjs", ".es", ".es6", ".js", ".jsx", ".ts", ".tsx", ".json"],
  },
});

// VitePWA({
//   includeAssets: ["favicon.svg"],
//   manifest: {
//     name: "PetGram",
//     short_name: "PetGram",
//     description: "The animals more fantastics of internet",
//     theme_color: "#FFFFFF",
//     icons: [
//       {
//         src: "favivon.svg",
//         sizes: "512x512",
//         type: "image/svg",
//       },
//       {
//         src: "favivon.svg",
//         sizes: "512x512",
//         type: "image/svg",
//         purpose: "any maskable",
//       },
//     ],
//   },
// }),
