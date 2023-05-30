import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import AutoImport from "unplugin-auto-import/vite";
import * as path from "path";
export default defineConfig({
  plugins: [
    vue(),
    vueSetupExtend(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      dts: false,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~": path.resolve(__dirname, "./src/components"),
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
});
// import vueSetupExtend from 'vite-plugin-vue-setup-extend'

// export default defineConfig({
//   plugins: [vue(), vueSetupExtend()],
// })
