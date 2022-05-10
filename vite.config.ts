import { defineConfig } from 'vite'
import { createVuePlugin as vue2 } from 'vite-plugin-vue2'
// import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2({
      jsx: true,
    }),
  ],

  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src', import.meta.url)),
  //   },
  // },
})
