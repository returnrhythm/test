import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
<<<<<<< HEAD
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 设置 @ 别名为项目的 src 目录
    },
  },
})
=======

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})
>>>>>>> dfa7f62a734889e48852b33954bd529f2d1b2509
