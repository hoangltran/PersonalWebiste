import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set the base path for GitHub Pages when served from a project subpath.
  // Change to '/' if you configure a custom domain that serves from the root.
  base: '/PersonalWebiste/',
})
