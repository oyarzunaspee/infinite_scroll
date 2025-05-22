import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [
    tailwindcss(),
    preact()
  ],
  base: "https://oyarzunaspee.github.io/infinite_scroll/",
  server: {
    host:true,
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://dummyjson.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false
      }
    },
  },
})

