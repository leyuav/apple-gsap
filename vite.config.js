import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "yurii-y0",
    project: "apple-gsap"
  }), sentryVitePlugin({
    org: "yurii-y0",
    project: "apple-gsap"
  })],

  build: {
    sourcemap: true
  }
})