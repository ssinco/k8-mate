import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/k8-mate',
  plugins: [react()],
  server: {
    host: true, // Allow external access
  },
})
