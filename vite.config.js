import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    open: '/',
    host: '0.0.0.0',
    port: 3000, // Cambia el puerto si es necesario
    // Puedes agregar otras configuraciones según tus necesidades
  }
})