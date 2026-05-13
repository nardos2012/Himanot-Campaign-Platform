import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import {
  VitePWA,
} from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [

    react(),
  
    VitePWA({
  
      registerType:
        "autoUpdate",
  
      includeAssets: [
  
        "favicon.png",
  
        "pwa-192.png",
  
        "pwa-512.png",
  
      ],
  
      manifest: {
  
        name:
          "GOGOT PARTY",
  
        short_name:
          "GOGOT",
  
        description:
          "GOGOT PARTY Campaign Platform",
  
        theme_color:
          "#0f766e",
  
        background_color:
          "#ffffff",
  
        display:
          "standalone",
  
        orientation:
          "portrait",
  
        start_url:
          "/",
  
        scope:
          "/",
  
        icons: [
  
          {
  
            src: "/pwa-192.png",
  
            sizes:
              "192x192",
  
            type:
              "image/png",
  
          },
  
          {
  
            src: "/pwa-512.png",
  
            sizes:
              "512x512",
  
            type:
              "image/png",
  
          },
  
        ],
  
      },
  
    }),
  
  ],
})
