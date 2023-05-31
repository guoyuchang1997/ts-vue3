import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/style/common.less";
import router from "@/router/index.js";
import Api from "@/api/index.js";
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import { createPinia } from "pinia";
import "@/assets/iconfont/iconfont.css";
const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(pinia);
app.provide("$api", Api);
app.mount("#app");
