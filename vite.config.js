import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Ubah baris ini

export default defineConfig({
  plugins: [react()],
  base: '/reve-website/', 
})