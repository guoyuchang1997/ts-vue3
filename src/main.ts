import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/style/common.less";
import router from "@/router/index.js";
import Api from "@/api/index.js";
const app = createApp(App);
app.use(router);
app.provide("$api", Api);
app.mount("#app");
