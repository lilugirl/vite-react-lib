import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),svgrPlugin()],
  build:{
    lib: {
      entry:'./src/index.tsx', // 打包入口
      formats:['es'], // 指定打包模式为 es
      fileName: (format)=>`index.${format}.js`  // es 模式打包文件名为 index.es.js
    },
    rollupOptions:{
      external:['react','react-dom'] // 外部依赖
    },
    outDir:'lib' // 默认为dist
  }
})
