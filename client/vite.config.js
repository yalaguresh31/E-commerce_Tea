import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  // theme: {
  //   extends: {
  //     fontFamily: {
  //       prosto: ["Prosto One", "sans-serif"],
  //     }
  //   }
  // },
  plugins: [
    tailwindcss(),
    react()
  ],
})
