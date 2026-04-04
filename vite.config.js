import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // HANYA nama repository GitHub kamu. Jangan masukkan nama folder lokal.
  base: '/Reve/', 
})