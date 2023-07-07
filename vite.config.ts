import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import AutoImport from 'unplugin-auto-import/vite'
import * as path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    vueSetupExtend(),
    visualizer(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: false,
    }),
  ],
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api/': {
        target: 'https://www.yunlogin.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '/api'),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './src/components'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `
          @import "@/assets/style/reset.less";
          @import "@/assets/style/setting.less";
        `,
      },
    },
  },
})
// import vueSetupExtend from 'vite-plugin-vue-setup-extend'

// export default defineConfig({
//   plugins: [vue(), vueSetupExtend()],
// })
